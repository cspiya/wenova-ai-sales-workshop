// Audio engine: voice agents, level meters (latency / barge-in), recording, and the three run modes:
//   HumanRun      – you talk to one agent through the microphone.
//   VoiceDuelRun  – two voice agents talk: each agent's output audio is piped into the other agent's input
//                   (Web Audio graph, no microphone). Both are real speech-to-speech sessions.
//   TextDuelRun   – fast, cheap text simulation with the text model; optional read-aloud with the browser's voice.
import { median, sleep } from "./util.js";
import { isFarewell, simTurnRequest } from "./prompts.js";

export const CANCELLED = "__cancelled";

// ------------------------------------------------------------------ audio helpers
const PCM_WORKLET = `
class PcmDown extends AudioWorkletProcessor {
  constructor(o) { super(); const r = (o.processorOptions && o.processorOptions.rate) || 16000;
    this.ratio = sampleRate / r; this.t = 0; this.acc = 0; this.n = 0; this.k = 0; this.size = Math.round(r * 0.04); this.out = new Int16Array(this.size); }
  process(inputs) {
    const ch = inputs[0] && inputs[0][0];
    if (ch) for (let i = 0; i < ch.length; i++) {
      this.acc += ch[i]; this.n++; this.t += 1;
      if (this.t >= this.ratio) { this.t -= this.ratio;
        const v = Math.max(-1, Math.min(1, this.acc / this.n)); this.acc = 0; this.n = 0;
        this.out[this.k++] = v < 0 ? v * 0x8000 : v * 0x7fff;
        if (this.k === this.size) { this.port.postMessage(this.out.buffer, [this.out.buffer]); this.out = new Int16Array(this.size); this.k = 0; } }
    }
    return true;
  }
}
registerProcessor("pcm-down", PcmDown);`;
const workletLoaded = new WeakSet();
async function ensureWorklet(ctx) {
  if (workletLoaded.has(ctx)) return;
  const url = URL.createObjectURL(new Blob([PCM_WORKLET], { type: "application/javascript" }));
  try { await ctx.audioWorklet.addModule(url); workletLoaded.add(ctx); } finally { URL.revokeObjectURL(url); }
}
const toB64 = buf => { const u = new Uint8Array(buf); let s = ""; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode.apply(null, u.subarray(i, i + 0x8000)); return btoa(s); };
const fromB64 = b => { const s = atob(b), u = new Uint8Array(s.length); for (let i = 0; i < s.length; i++) u[i] = s.charCodeAt(i); return u; };

export function levelOf(ctx, node) {
  const an = ctx.createAnalyser(); an.fftSize = 1024; node.connect(an);
  const buf = new Float32Array(an.fftSize);
  return () => { an.getFloatTimeDomainData(buf); let s = 0; for (const v of buf) s += v * v; return Math.sqrt(s / buf.length); };
}

/** Plays PCM16 chunks back to back into `out`; flush() stops everything queued (barge-in). */
function pcmPlayer(ctx, out) {
  let playAt = 0; const playing = new Set();
  return {
    play(b64, rate) {
      const u = fromB64(b64), pcm = new Int16Array(u.buffer, 0, u.length >> 1);
      if (!pcm.length) return;
      const ab = ctx.createBuffer(1, pcm.length, rate), f = ab.getChannelData(0);
      for (let i = 0; i < pcm.length; i++) f[i] = pcm[i] / 32768;
      const src = ctx.createBufferSource(); src.buffer = ab; src.connect(out);
      const t = Math.max(ctx.currentTime + 0.02, playAt); src.start(t); playAt = t + ab.duration;
      playing.add(src); src.onended = () => playing.delete(src);
    },
    flush() { for (const p of playing) { try { p.stop(); } catch (e) { /* already stopped */ } } playing.clear(); playAt = 0; },
  };
}

/** PCM16 capture from `inNode` at `rate`; calls send(base64) every 40 ms. Returns a disposer. */
async function pcmCapture(ctx, inNode, rate, send) {
  await ensureWorklet(ctx);
  const node = new AudioWorkletNode(ctx, "pcm-down", { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [1], processorOptions: { rate } });
  const mute = ctx.createGain(); mute.gain.value = 0;
  inNode.connect(node); node.connect(mute); mute.connect(ctx.destination);
  node.port.onmessage = e => send(toB64(e.data));
  return () => { try { node.port.onmessage = null; inNode.disconnect(node); node.disconnect(); mute.disconnect(); } catch (e) { /* gone */ } };
}

// ------------------------------------------------------------------ voice agents
// sink: { delta(kind, text), final(kind, text, ts), endTurn(kind), sys(text) }; kind = "self" (agent speech) | "heard" (its input)
class Agent {
  constructor(o) {
    Object.assign(this, o);       // ctx, opt, model, voice, instructions, openingCmd, creds, sink, onStatus, onEventLatency, onClosed, transcribe
    this.inNode = this.ctx.createGain(); this.outNode = this.ctx.createGain();
    this.closed = false; this.errors = []; this.sessionId = null; this.cleanups = []; this.cleanedUp = false;
  }
  /** Register a release step; if the agent was already stopped, release at once (stop during startup). */
  addCleanup(fn) { if (this.cleanedUp) { try { fn(); } catch (e) { /* best effort */ } } else this.cleanups.push(fn); }
  alive() { if (this.closed) throw new Error(CANCELLED); }
  status(m, err) { if (err) this.errors.push(m); this.onStatus && this.onStatus(m, err); }
  remoteClosed(reason) { if (!this.closed) this.onClosed && this.onClosed(reason); }
  async stop() {
    if (this.closed) return; this.closed = true;
    try { await this.close?.(); } catch (e) { this.errors.push(String(e.message || e)); }
    for (const c of this.cleanups.reverse()) { try { c(); } catch (e) { /* best effort */ } }
    this.cleanups = []; this.cleanedUp = true;
  }
  describe() { return { option: this.opt.id, provider: this.opt.provider, model: this.model, voice: this.voice, session_id: this.sessionId }; }
}

class OpenAIAgent extends Agent {
  async start() {
    const live = this.opt.id === "oa-live", ctx = this.ctx;
    const dest = ctx.createMediaStreamDestination(); this.inNode.connect(dest);
    const pc = new RTCPeerConnection(); this.addCleanup(() => pc.close());
    const audio = new Audio(); audio.autoplay = true; this.addCleanup(() => { audio.srcObject = null; });
    pc.ontrack = e => {
      audio.srcObject = e.streams[0];                 // playback (Chrome also needs it for the Web Audio tap below)
      const src = ctx.createMediaStreamSource(e.streams[0]); src.connect(this.outNode);
    };
    pc.addTrack(dest.stream.getAudioTracks()[0], dest.stream);
    const dc = pc.createDataChannel("oai-events"); this.dc = dc;
    const send = o => dc.readyState === "open" && dc.send(JSON.stringify(o));
    const offer = await pc.createOffer(); await pc.setLocalDescription(offer); this.alive();
    let answer;
    if (live) {
      await new Promise(res => {   // GPT-Live: send the complete local description (max 3 s ICE gathering)
        if (pc.iceGatheringState === "complete") return res();
        const t = setTimeout(res, 3000);
        pc.addEventListener("icegatheringstatechange", () => { if (pc.iceGatheringState === "complete") { clearTimeout(t); res(); } });
      });
      this.alive(); this.status("GPT-Live munkamenet létrehozása…");
      const r = await this.creds.liveSession({ voice: this.voice, instructions: this.instructions, sdp: pc.localDescription.sdp });
      this.sessionId = r.session_id; answer = r.sdp;
    } else {
      this.status("Ideiglenes kulcs kérése…");
      const tok = await this.creds.realtimeSecret({ model: this.model, voice: this.voice, instructions: this.instructions, transcribe: this.transcribe });
      this.alive();
      const r = await fetch("https://api.openai.com/v1/realtime/calls", { method: "POST", body: offer.sdp, headers: { Authorization: "Bearer " + tok.value, "Content-Type": "application/sdp" } });
      answer = await r.text();
      if (!r.ok) throw new Error("realtime/calls HTTP " + r.status + ": " + answer.slice(0, 300));
    }
    this.alive();
    if (typeof answer !== "string" || !answer.startsWith("v=")) throw new Error("a hitelesítési forrás nem adott érvényes SDP-választ");
    await pc.setRemoteDescription({ type: "answer", sdp: answer });
    let stoppedAt = null; const userAt = {};
    await new Promise((resolve, reject) => {
      const t = setTimeout(() => reject(new Error("a munkamenet nem indult el 20 s alatt")), 20000);
      dc.onmessage = ev => {
        let e; try { e = JSON.parse(ev.data); } catch { return; }
        switch (e.type) {
          case "session.created":   // Realtime
            if (e.session && e.session.id) this.sessionId = e.session.id;
            clearTimeout(t); resolve();
            if (this.openingCmd) send({ type: "response.create", response: { instructions: this.instructions + "\n\n# Most\n\n" + this.openingCmd } });
            break;
          case "session.started":   // GPT-Live
            clearTimeout(t); resolve();
            if (this.openingCmd) send({ type: "session.instructions.append", event_id: "instr_" + Math.random().toString(36).slice(2, 12), delegation_id: null, content: this.openingCmd });
            break;
          case "input_audio_buffer.speech_started": if (e.item_id) userAt[e.item_id] = Date.now(); break;
          case "input_audio_buffer.speech_stopped": stoppedAt = performance.now(); break;
          case "output_audio_buffer.started": if (stoppedAt != null) { this.onEventLatency && this.onEventLatency(performance.now() - stoppedAt); stoppedAt = null; } break;
          case "conversation.item.input_audio_transcription.completed": this.sink.final("heard", e.transcript, userAt[e.item_id] || Date.now()); break;
          case "response.output_audio_transcript.done": this.sink.final("self", e.transcript); break;
          case "session.input_transcript.delta": this.sink.delta("heard", e.delta || ""); break;
          case "session.output_transcript.delta": this.sink.delta("self", e.delta || ""); break;
          case "session.closed": this.liveClosed = true; this.sink.sys("munkamenet lezárva" + (e.reason ? ": " + e.reason : "")); break;
          case "error": this.status("Hiba: " + ((e.error && e.error.message) || JSON.stringify(e).slice(0, 200)), true); break;
        }
      };
    });
    pc.onconnectionstatechange = () => { if (["failed", "closed"].includes(pc.connectionState)) this.remoteClosed("kapcsolat: " + pc.connectionState); };
    this.close = async () => {
      if (live && dc.readyState === "open") {
        send({ type: "session.close" });
        for (let i = 0; i < 150 && !this.liveClosed; i++) await sleep(100);
        if (!this.liveClosed) this.errors.push("session.closed nem érkezett meg 15 s alatt (a lezárás nem igazolt)");
      }
    };
  }
}

class GeminiAgent extends Agent {
  async start() {
    const ctx = this.ctx;
    this.outNode.connect(ctx.destination);
    const player = pcmPlayer(ctx, this.outNode);
    this.status("Ideiglenes token kérése…");
    const tok = await this.creds.geminiToken({ model: this.model, voice: this.voice, instructions: this.instructions, transcribe: this.transcribe });
    this.alive(); this.status("Kapcsolódás a Gemini Live-hoz…");
    const ws = new WebSocket(tok.ws_url + "?access_token=" + encodeURIComponent(tok.token));
    ws.binaryType = "arraybuffer";
    this.addCleanup(() => { player.flush(); if (ws.readyState <= 1) ws.close(1000); });
    const send = o => ws.readyState === 1 && ws.send(JSON.stringify(o));
    const dec = new TextDecoder();
    let gotSetup = false, vadEnd = null, setupOk, setupFail;
    const ready = new Promise((a, b) => { setupOk = a; setupFail = b; });
    const timer = setTimeout(() => setupFail(new Error("nem jött setupComplete 15 s alatt")), 15000);
    ws.onopen = () => send({ setup: tok.setup });
    ws.onclose = e => {
      const why = "WebSocket bezárva: " + e.code + (e.reason ? " " + e.reason : "");
      if (!gotSetup) return setupFail(new Error(why));
      if (e.code !== 1000 && !this.closed) this.status("Hiba: " + why, true);
      this.remoteClosed("kapcsolat bontva (" + e.code + ")");
    };
    ws.onmessage = ev => {
      let m; try { m = JSON.parse(typeof ev.data === "string" ? ev.data : dec.decode(ev.data)); } catch { return; }
      if (m.setupComplete) { gotSetup = true; clearTimeout(timer); setupOk(); }
      if (m.voiceActivity && m.voiceActivity.type === "ACTIVITY_END") vadEnd = performance.now();
      if (m.goAway) this.sink.sys("a szerver hamarosan bont (" + (m.goAway.timeLeft || "?") + ")");
      if (m.error) this.status("Hiba: " + (m.error.message || JSON.stringify(m.error).slice(0, 200)), true);
      const sc = m.serverContent; if (!sc) return;
      if (sc.interrupted) { player.flush(); this.sink.endTurn("self"); }
      for (const p of (sc.modelTurn && sc.modelTurn.parts) || []) {
        if (p.inlineData && p.inlineData.data && /^audio\//.test(p.inlineData.mimeType || "audio/")) {
          if (vadEnd != null) { this.onEventLatency && this.onEventLatency(performance.now() - vadEnd); vadEnd = null; }
          player.play(p.inlineData.data, +((/rate=(\d+)/.exec(p.inlineData.mimeType || "") || [])[1]) || 24000);
        }
      }
      if (sc.inputTranscription && sc.inputTranscription.text) this.sink.delta("heard", sc.inputTranscription.text);
      if (sc.outputTranscription && sc.outputTranscription.text) { this.sink.endTurn("heard"); this.sink.delta("self", sc.outputTranscription.text); }
      if (sc.turnComplete) { this.sink.endTurn("self"); this.sink.endTurn("heard"); }
    };
    try { await ready; } finally { clearTimeout(timer); }
    this.alive();
    this.addCleanup(await pcmCapture(ctx, this.inNode, 16000, b64 => send({ realtimeInput: { audio: { data: b64, mimeType: "audio/pcm;rate=16000" } } })));
    if (this.openingCmd) send({ realtimeInput: { text: this.openingCmd } });   // Live waits for input; this makes the seller open
    this.close = async () => { if (ws.readyState <= 1) ws.close(1000); };
  }
}

// ElevenLabs Agents over the documented ConvAI WebSocket protocol (no SDK, so no CDN dependency).
class ElevenAgent extends Agent {
  async start() {
    const ctx = this.ctx;
    this.outNode.connect(ctx.destination);
    const player = pcmPlayer(ctx, this.outNode);
    this.status("Aláírt URL kérése…");
    const { signed_url } = await this.creds.elevenSignedUrl({ variant: this.opt.variant });
    this.alive();
    const ws = new WebSocket(signed_url);
    this.addCleanup(() => { player.flush(); if (ws.readyState <= 1) ws.close(1000); });
    const send = o => ws.readyState === 1 && ws.send(JSON.stringify(o));
    let outRate = 16000, inRate = 16000, ok, fail, started = false;
    const ready = new Promise((a, b) => { ok = a; fail = b; });
    const timer = setTimeout(() => fail(new Error("nem jött conversation_initiation_metadata 15 s alatt")), 15000);
    ws.onopen = () => {
      const init = { type: "conversation_initiation_client_data", dynamic_variables: this.dynVars || {} };
      if (this.override) init.conversation_config_override = { agent: { prompt: { prompt: this.instructions }, first_message: this.opening, language: "hu" } };
      send(init);
    };
    ws.onclose = e => {
      const why = "WebSocket bezárva: " + e.code + (e.reason ? " " + e.reason : "");
      if (!started) return fail(new Error(why + (this.override ? " (ha az ügynökben nincs engedélyezve a prompt-felülírás, kapcsold ki a felülírást)" : "")));
      this.remoteClosed("az ügynök bontott (" + e.code + ")");
    };
    ws.onmessage = ev => {
      let m; try { m = JSON.parse(ev.data); } catch { return; }
      switch (m.type) {
        case "conversation_initiation_metadata": {
          const md = m.conversation_initiation_metadata_event || {};
          this.sessionId = md.conversation_id || null;
          const rate = f => +((/^pcm_(\d+)$/.exec(f || "") || [])[1]);
          if (md.agent_output_audio_format && !rate(md.agent_output_audio_format)) { fail(new Error("nem támogatott hangformátum: " + md.agent_output_audio_format)); return; }
          outRate = rate(md.agent_output_audio_format) || 16000; inRate = rate(md.user_input_audio_format) || 16000;
          started = true; clearTimeout(timer); ok(); break;
        }
        case "audio": { const a = m.audio_event || {}; if (a.audio_base_64) player.play(a.audio_base_64, outRate); break; }
        case "agent_response": this.sink.final("self", (m.agent_response_event || {}).agent_response); break;
        case "user_transcript": this.sink.final("heard", (m.user_transcription_event || {}).user_transcript); break;
        case "interruption": player.flush(); break;
        case "ping": { const p = m.ping_event || {}; setTimeout(() => send({ type: "pong", event_id: p.event_id }), p.ping_ms || 0); break; }
      }
    };
    try { await ready; } finally { clearTimeout(timer); }
    this.alive();
    this.addCleanup(await pcmCapture(ctx, this.inNode, inRate, b64 => send({ user_audio_chunk: b64 })));
    this.close = async () => { if (ws.readyState <= 1) ws.close(1000); };
  }
}

export function makeAgent(o) {
  const C = o.opt.provider === "openai" ? OpenAIAgent : o.opt.provider === "google" ? GeminiAgent : ElevenAgent;
  return new C(o);
}

// ------------------------------------------------------------------ meters
// Latency = end of the other side's speech -> first audio of this side. Barge-in = other side talks >=300 ms over this side.
class Meter {
  constructor(label, getIn, getOut, th) { Object.assign(this, { label, getIn, getOut, th }); this.lat = []; this.evLat = []; this.barge = [];
    this.m = { uStart: null, lastIn: 0, segEnd: null, pending: false, on: false, lastOut: 0, end: 0, bargeStart: null }; }
  tick(t) {
    const i = this.getIn(), o = this.getOut(), m = this.m, { inTh, outTh } = this.th();
    this.levels = [i / inTh, o / outTh];
    if (o > outTh) { m.lastOut = t; if (!m.on) { m.on = true; this.onStart(t); } }
    else if (m.on && t - m.lastOut > 400) { m.on = false; m.end = m.lastOut; if (m.bargeStart != null) { this.barge.push(Math.round(m.end - m.bargeStart)); m.bargeStart = null; } }
    if (i > inTh) { if (m.uStart == null) m.uStart = t; m.lastIn = t; if (m.on && m.bargeStart == null && t - m.uStart >= 300) m.bargeStart = m.uStart; }
    else if (m.uStart != null && t - m.lastIn > 300) { if (m.lastIn - m.uStart >= 200 && m.uStart > m.end && !m.on) { m.segEnd = m.lastIn; m.pending = true; } m.uStart = null; }
    if (m.bargeStart != null && t - m.bargeStart > 4000) { this.barge.push(null); m.bargeStart = null; }
  }
  onStart(t) {
    const m = this.m; let end = null;
    if (m.pending) end = m.segEnd; else if (m.uStart != null && m.lastIn - m.uStart >= 200 && m.uStart > m.end) end = m.lastIn;
    m.pending = false; if (end != null) this.lat.push(Math.round(t - end));
  }
  summary() {
    const b = this.barge.filter(x => x != null);
    return { label: this.label, latency_ms: this.lat, latency_median_ms: median(this.lat), event_latency_ms: this.evLat, event_latency_median_ms: median(this.evLat),
      barge_ins: this.barge, barge_stop_median_ms: median(b), barge_not_stopped: this.barge.length - b.length };
  }
}

// ------------------------------------------------------------------ conversation (transcript, meters, recording, record)
export class Conversation {
  constructor({ mode, names, onUpdate, onStatus, thresholds }) {
    Object.assign(this, { mode, names, onUpdate, onStatus, thresholds });
    this.t0 = Date.now(); this.lines = []; this.meters = []; this.agents = []; this.errors = []; this.closed = false;
    this.cur = {}; this.last = {}; this.cleanups = []; this.cleanedUp = false;
  }
  /** Register a release step (mic, AudioContext, speech); after finish() it runs immediately, so a Stop during
   *  startup never leaks a live microphone or audio context. */
  addCleanup(fn) { if (this.cleanedUp) { try { fn(); } catch (e) { /* best effort */ } } else this.cleanups.push(fn); }
  alive() { if (this.closed) throw new Error(CANCELLED); }
  update() { if (this.raf) return; this.raf = requestAnimationFrame(() => { this.raf = null; this.onUpdate && this.onUpdate(this); }); }
  status(m, err) { if (err) this.errors.push(m); this.onStatus && this.onStatus(m, err); }
  final(role, text, ts = Date.now()) {
    if (!text || !String(text).trim()) return;
    this.cur[role] = null; const l = { role, text: String(text).trim(), ts }; this.lines.push(l); this.onLine && this.onLine(l); this.update();
  }
  delta(role, d) {
    if (!d) return;
    const now = Date.now(), others = Object.keys(this.last).filter(r => r !== role);
    if (!this.cur[role] || now - (this.last[role] || 0) > 1500 || others.some(r => this.last[r] > this.last[role])) {
      this.cur[role] = { role, text: d, ts: now }; this.lines.push(this.cur[role]);
    } else this.cur[role].text += d;
    this.last[role] = now; this.onLine && this.onLine(this.cur[role]); this.update();
  }
  endTurn(role) { this.cur[role] = null; }
  sys(text) { this.final("sys", text); }
  sinkFor(selfRole, heardRole) {
    return { delta: (k, t) => (k === "self" ? this.delta(selfRole, t) : heardRole && this.delta(heardRole, t)),
      final: (k, t, ts) => (k === "self" ? this.final(selfRole, t, ts) : heardRole && this.final(heardRole, t, ts)),
      endTurn: k => (k === "self" ? this.endTurn(selfRole) : heardRole && this.endTurn(heardRole)), sys: t => this.sys(t) };
  }
  addMeter(label, getIn, getOut) { const m = new Meter(label, getIn, getOut, this.thresholds); this.meters.push(m); return m; }
  startTicking() { this.timer = setInterval(() => { const t = performance.now(); for (const m of this.meters) m.tick(t); this.update(); }, 20); }
  startRecording(ctx, nodes) {
    if (typeof MediaRecorder === "undefined") return;
    const dest = ctx.createMediaStreamDestination(); for (const n of nodes) n.connect(dest);
    const mime = ["audio/webm;codecs=opus", "audio/ogg;codecs=opus", "audio/mp4"].find(t => MediaRecorder.isTypeSupported(t));
    try { this.rec = new MediaRecorder(dest.stream, mime ? { mimeType: mime } : undefined); } catch (e) { this.errors.push("felvétel: " + e.message); return; }
    this.chunks = []; this.rec.ondataavailable = e => e.data.size && this.chunks.push(e.data); this.rec.start(1000);
  }
  async stopRecording() {
    if (!this.rec || this.rec.state === "inactive") return null;
    await new Promise(r => { this.rec.onstop = r; this.rec.stop(); });
    return this.chunks.length ? new Blob(this.chunks, { type: this.rec.mimeType || "audio/webm" }) : null;
  }
  async finish(reason) {
    if (this.closed) return null; this.closed = true;
    clearInterval(this.timer);
    await Promise.all(this.agents.map(a => a.stop()));
    const audio = await this.stopRecording();
    for (const c of this.cleanups.reverse()) { try { c(); } catch (e) { /* best effort */ } }
    this.cleanups = []; this.cleanedUp = true;
    return { record: this.snapshot(reason), audio };
  }
  /** Synchronous record of what we have so far (also used on pagehide, where nothing can be awaited). */
  snapshot(reason) {
    const metrics = {}; for (const m of this.meters) metrics[m.label] = m.summary();
    if (this.turnTimes) metrics.text_turn_ms = this.turnTimes;
    return {
      mode: this.mode, started_at: new Date(this.t0).toISOString(), ended_at: new Date().toISOString(), end_reason: reason,
      duration_s: Math.round((Date.now() - this.t0) / 1000),
      participants: this.agents.map(a => ({ role: a.role, ...a.describe() })).concat(this.participants || []),
      transcript: this.lines.filter(l => String(l.text).trim()).sort((a, b) => a.ts - b.ts).map(l => ({ t: new Date(l.ts).toISOString(), role: l.role, text: l.text })),
      metrics, errors: [...this.errors, ...this.agents.flatMap(a => a.errors)],
    };
  }
}

async function mic() {
  return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
}

// ------------------------------------------------------------------ runs
/** Human ↔ model. cfg: { creds, opt, model, voice, seller: {instructions, opening, openingCmd}, dynVars, override, record } */
export async function startHuman(conv, cfg) {
  conv.alive();
  const ctx = new AudioContext(); conv.addCleanup(() => ctx.close().catch(() => {}));
  await ctx.resume(); conv.alive();
  const stream = await mic(); conv.addCleanup(() => stream.getTracks().forEach(t => t.stop()));
  conv.alive();
  const micSrc = ctx.createMediaStreamSource(stream);
  const agent = makeAgent({ ctx, opt: cfg.opt, model: cfg.model, voice: cfg.voice, role: "agent", creds: cfg.creds, transcribe: true,
    instructions: cfg.seller.instructions, opening: cfg.seller.opening, openingCmd: cfg.seller.openingCmd, dynVars: cfg.dynVars, override: cfg.override,
    sink: conv.sinkFor("agent", "user"), onStatus: (m, e) => conv.status(m, e), onClosed: r => conv.onRemoteClose && conv.onRemoteClose(r) });
  conv.agents.push(agent);
  conv.alive();
  micSrc.connect(agent.inNode);
  const meter = conv.addMeter("agent", levelOf(ctx, micSrc), levelOf(ctx, agent.outNode));
  agent.onEventLatency = ms => meter.evLat.push(Math.round(ms));
  await agent.start(); conv.alive();
  if (cfg.record) conv.startRecording(ctx, [micSrc, agent.outNode]);
  conv.startTicking();
  conv.status("Kapcsolódva (" + cfg.opt.label + ", " + cfg.model + "). Beszélj!");
}

/** Model ↔ model with real voice sessions: seller.out → buyer.in and buyer.out → seller.in. */
export async function startVoiceDuel(conv, cfg) {
  conv.alive();
  const ctx = new AudioContext(); conv.addCleanup(() => ctx.close().catch(() => {}));
  await ctx.resume(); conv.alive();
  const mk = (side, role, ins, openingCmd) => makeAgent({ ctx, opt: side.opt, model: side.model, voice: side.voice, role, creds: cfg.creds, transcribe: false,
    instructions: ins, openingCmd, sink: conv.sinkFor(role, null), onStatus: (m, e) => conv.status((role === "seller" ? "Eladó: " : "Érdeklődő: ") + m, e),
    onClosed: r => conv.onRemoteClose && conv.onRemoteClose((role === "seller" ? "eladó: " : "érdeklődő: ") + r) });
  const seller = mk(cfg.sellerSide, "seller", cfg.seller.instructions, null);
  const buyer = mk(cfg.buyerSide, "buyer", cfg.buyerInstructions, null);
  conv.agents.push(seller, buyer);
  seller.outNode.connect(buyer.inNode); buyer.outNode.connect(seller.inNode);
  const sOut = levelOf(ctx, seller.outNode), bOut = levelOf(ctx, buyer.outNode);
  const ms = conv.addMeter("seller", bOut, sOut), mb = conv.addMeter("buyer", sOut, bOut);
  seller.onEventLatency = x => ms.evLat.push(Math.round(x)); buyer.onEventLatency = x => mb.evLat.push(Math.round(x));
  conv.status("Az érdeklődő munkamenete indul…");
  await buyer.start(); conv.alive();        // the buyer must be listening before the seller opens
  conv.status("Az eladó munkamenete indul…");
  seller.openingCmd = cfg.seller.openingCmd;
  await seller.start(); conv.alive();
  if (cfg.record) conv.startRecording(ctx, [seller.outNode, buyer.outNode]);
  conv.startTicking();
  conv.status("Fut: a két modell beszélget. A Leállítás gombbal bármikor megállíthatod.");
  conv.sellerMeter = ms;
}

/** Text simulation: turn by turn with the text model; optional read-aloud with speechSynthesis. */
export async function runTextDuel(conv, cfg) {
  const history = [], times = []; conv.turnTimes = times;
  conv.participants = [{ role: "seller", option: "text", provider: cfg.text.provider || "auto", model: cfg.text.model || "alapértelmezett" },
    { role: "buyer", option: "text", provider: cfg.text.provider || "auto", model: cfg.text.model || "alapértelmezett" }];
  const voices = typeof speechSynthesis !== "undefined" ? speechSynthesis.getVoices().filter(v => /^hu/i.test(v.lang)) : [];
  const say = (text, role) => new Promise(res => {
    if (!cfg.speak || typeof speechSynthesis === "undefined") return res();
    const u = new SpeechSynthesisUtterance(text); u.lang = "hu-HU";
    if (voices.length) u.voice = voices[role === "seller" ? 0 : Math.min(1, voices.length - 1)];
    if (voices.length < 2 && role === "buyer") u.pitch = 0.8;
    u.onend = u.onerror = () => res(); speechSynthesis.speak(u);
  });
  conv.addCleanup(() => typeof speechSynthesis !== "undefined" && speechSynthesis.cancel());
  const add = async (role, text) => { history.push({ role, text }); conv.final(role, text); await say(text, role); };
  await add("seller", cfg.seller.opening);
  for (let turn = 1; turn < cfg.maxTurns && !conv.closed; turn++) {
    const role = turn % 2 ? "buyer" : "seller";
    conv.status(`${turn + 1}. megszólalás (${role === "seller" ? "eladó" : "érdeklődő"}) készül…`);
    const t0 = performance.now();
    const r = await cfg.creds.text({ provider: cfg.text.provider, model: cfg.text.model,
      ...simTurnRequest({ role, sellerIns: cfg.seller.instructions, buyerIns: cfg.buyerInstructions, history }) });
    times.push({ role, ms: Math.round(performance.now() - t0) });
    if (conv.closed) break;
    let text = String(r.text || "").trim().replace(/^(ELADÓ|ÉRDEKLŐDŐ)\s*:\s*/i, "").replace(/^["„]|["”]$/g, "").trim();
    const hangUp = /\[LETESZI\]/i.test(text); text = text.replace(/\[LETESZI\]/gi, "").trim();
    if (text) await add(role, text);
    if (hangUp) { conv.sys("az érdeklődő letette a telefont"); return "az érdeklődő letette"; }
    if (role === "seller" && isFarewell(text)) return "az eladó elköszönt";
  }
  return conv.closed ? "leállítva" : "elérte a megszólalás-korlátot";
}
