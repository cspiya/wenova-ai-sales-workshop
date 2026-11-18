// Credential sources. All three expose the same methods, so the rest of the app does not care where credentials
// come from. Priority (automatic mode): remote broker -> local helper -> own keys typed into this browser.
//   BrokerSource: BROKER-API.md over HTTP (remote broker with access code, or python server.py locally).
//   KeySource:    the visitor's own keys; calls the providers directly from the browser (all four allow CORS).
import { REALTIME_MODELS, REALTIME_VOICES, LIVE_VOICES, GEMINI_MODELS, GEMINI_VOICES } from "./catalog.js";

const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta";
const GEMINI_WS = "wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContentConstrained";
const GEMINI_LANG = "RESPOND IN HUNGARIAN. YOU MUST RESPOND UNMISTAKABLY IN HUNGARIAN.\n\n";
const TRANSCRIBE_MODEL = "gpt-4o-transcribe";

export function geminiSetup(model, voice, instructions, transcribe = true) {
  const s = {
    model: "models/" + model,
    generationConfig: { responseModalities: ["AUDIO"], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } },
    systemInstruction: { parts: [{ text: GEMINI_LANG + instructions }] },
    realtimeInputConfig: { automaticActivityDetection: { disabled: false, silenceDurationMs: 500, prefixPaddingMs: 20 }, activityHandling: "START_OF_ACTIVITY_INTERRUPTS" },
    outputAudioTranscription: { languageCodes: ["hu"] },
  };
  if (transcribe) s.inputAudioTranscription = { languageCodes: ["hu"] };
  return s;
}

const errText = j => (j && j.error && (typeof j.error === "string" ? j.error : (j.error.message || j.error.code))) || (j && j.detail && JSON.stringify(j.detail)) || "";

async function jfetch(url, opts, label) {
  let r;
  try { r = await fetch(url, opts); } catch (e) { throw new Error(`${label}: a kérés nem jutott el (${e.message}). Hálózat, CORS vagy helyi hálózati engedély?`); }
  const txt = await r.text(); let j = null;
  try { j = txt ? JSON.parse(txt) : {}; } catch { j = { error: { message: txt.slice(0, 300) } }; }
  if (!r.ok) { const e = new Error(`${label}: HTTP ${r.status} ${errText(j)}`.trim()); e.status = r.status; throw e; }
  return j;
}

export class BrokerSource {
  constructor(base, accessCode, kind) { this.base = String(base || "").replace(/\/+$/, ""); this.code = accessCode || ""; this.kind = kind; }
  get label() { return this.kind === "local" ? "helyi segéd" : "távoli broker"; }
  headers(json = true) { const h = {}; if (json) h["Content-Type"] = "application/json"; if (this.code) h["X-Access-Code"] = this.code; return h; }
  async post(path, body) {
    try { return await jfetch(this.base + path, { method: "POST", headers: this.headers(), body: JSON.stringify(body) }, this.label + " " + path); }
    catch (e) { if (e.status === 401 && this.onUnauthorized) this.onUnauthorized(); throw e; }
  }
  async health(timeoutMs = 2500) {
    const ac = new AbortController(), t = setTimeout(() => ac.abort(), timeoutMs);
    try {
      const j = await jfetch(this.base + "/v1/health", { signal: ac.signal, headers: this.code ? { "X-Access-Code": this.code } : {} }, this.label);
      if (j.service !== "voice-lab-broker") throw new Error("nem hangügynök-labor broker");
      return j;
    } finally { clearTimeout(t); }
  }
  realtimeSecret(p) { return this.post("/v1/openai/realtime/client-secret", p); }
  liveSession(p) { return this.post("/v1/openai/live/session", p); }
  geminiToken(p) { return this.post("/v1/google/live/token", p); }
  elevenSignedUrl(p) { return this.post("/v1/elevenlabs/signed-url", p); }
  text(p) { return this.post("/v1/text", p); }
  textModels(provider) { return jfetch(this.base + "/v1/text/models?provider=" + encodeURIComponent(provider), { headers: this.headers(false) }, this.label); }
  async archive(conv) { if (this.kind === "local") return this.post("/v1/local/archive", conv); }
  async archiveAudio(id, blob) {
    if (this.kind !== "local") return;
    return jfetch(this.base + "/v1/local/archive/" + encodeURIComponent(id) + "/audio", { method: "PUT", headers: { ...this.headers(false), "Content-Type": blob.type || "audio/webm" }, body: blob }, this.label);
  }
}

export class KeySource {
  constructor(keys, textModels) { this.k = keys || {}; this.tm = textModels; this.kind = "keys"; }
  get label() { return "saját kulcsok"; }
  async health() {
    const k = this.k;
    return { service: "voice-lab-broker", api: 1, kind: "keys", auth_required: false,
      providers: { openai: !!k.openai, google: !!k.google, elevenlabs: !!k.elevenlabs },
      elevenlabs_agents: { cascade: !!k.elCascade, realtime: !!k.elRealtime },
      text: { openai: k.openai ? this.tm.openai : null, google: k.google ? this.tm.google : null, model_override: true } };
  }
  need(name, label) { if (!this.k[name]) throw new Error(`Nincs megadva ${label} kulcs (Beállítások).`); return this.k[name]; }
  async realtimeSecret({ model, voice, instructions, transcribe = true }) {
    const key = this.need("openai", "OpenAI");
    if (!REALTIME_MODELS.includes(model) || !REALTIME_VOICES.includes(voice)) throw new Error("ismeretlen modell vagy hang");
    const audio = { output: { voice }, input: { turn_detection: { type: "server_vad", create_response: true, interrupt_response: true } } };
    if (transcribe) audio.input.transcription = { model: TRANSCRIBE_MODEL, language: "hu" };
    const j = await jfetch("https://api.openai.com/v1/realtime/client_secrets", { method: "POST", headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({ expires_after: { anchor: "created_at", seconds: 60 }, session: { type: "realtime", model, instructions, output_modalities: ["audio"], audio } }) }, "OpenAI client_secrets");
    return { value: j.value, expires_at: j.expires_at, model, voice };
  }
  async liveSession({ voice, instructions, sdp }) {
    const key = this.need("openai", "OpenAI");
    if (!LIVE_VOICES.includes(voice)) throw new Error("ismeretlen hang");
    const j = await jfetch("https://api.openai.com/v1/live/sessions", { method: "POST", headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
      body: JSON.stringify({ session: { model: "gpt-live-1", instructions, audio: { output: { voice } } }, transport: { type: "webrtc", sdp } }) }, "OpenAI live/sessions");
    if (!j.transport || !j.transport.sdp) throw new Error("OpenAI live/sessions: nincs SDP a válaszban");
    return { session_id: j.session && j.session.id, sdp: j.transport.sdp };
  }
  async geminiToken({ model, voice, instructions, transcribe = true }) {
    const key = this.need("google", "Google (Gemini)");
    if (!GEMINI_MODELS.includes(model) || !GEMINI_VOICES.includes(voice)) throw new Error("ismeretlen modell vagy hang");
    const setup = geminiSetup(model, voice, instructions, transcribe), now = Date.now();
    const iso = t => new Date(t).toISOString().replace(/\.\d{3}Z$/, "Z");
    const j = await jfetch(GEMINI_API + "/auth_tokens", { method: "POST", headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
      body: JSON.stringify({ uses: 1, expireTime: iso(now + 20 * 60e3), newSessionExpireTime: iso(now + 60e3), bidiGenerateContentSetup: setup }) }, "Gemini auth_tokens");
    return { token: j.name, expires_at: j.expireTime, ws_url: GEMINI_WS, setup };
  }
  async elevenSignedUrl({ variant }) {
    const key = this.need("elevenlabs", "ElevenLabs");
    const agent = variant === "cascade" ? this.k.elCascade : this.k.elRealtime;
    if (!agent) throw new Error("Nincs megadva az ElevenLabs-ügynök azonosítója (Beállítások).");
    return jfetch("https://api.elevenlabs.io/v1/convai/conversation/get-signed-url?agent_id=" + encodeURIComponent(agent), { headers: { "xi-api-key": key } }, "ElevenLabs get-signed-url");
  }
  async text({ provider, model, system = "", input, json = false, max_output_tokens = 8000 }) {
    provider = provider || (this.k.openai ? "openai" : "google");
    model = model || this.tm[provider];
    if (provider === "openai") {
      const key = this.need("openai", "OpenAI"), body = { model, instructions: system, input, max_output_tokens };
      if (json) body.text = { format: { type: "json_object" } };
      const j = await jfetch("https://api.openai.com/v1/responses", { method: "POST", headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" }, body: JSON.stringify(body) }, "OpenAI responses");
      const text = (j.output || []).filter(i => i.type === "message").flatMap(i => i.content || []).filter(c => c.type === "output_text").map(c => c.text).join("");
      if (!text) throw new Error("OpenAI responses: üres válasz (" + (j.status || "") + ")");
      return { text, provider, model };
    }
    const key = this.need("google", "Google (Gemini)"), gc = { maxOutputTokens: max_output_tokens };
    if (json) gc.responseMimeType = "application/json";
    const j = await jfetch(`${GEMINI_API}/models/${encodeURIComponent(model)}:generateContent`, { method: "POST", headers: { "x-goog-api-key": key, "Content-Type": "application/json" },
      body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: [{ role: "user", parts: [{ text: input }] }], generationConfig: gc }) }, "Gemini generateContent");
    const text = (((j.candidates || [])[0] || {}).content || {}).parts?.filter(p => !p.thought).map(p => p.text || "").join("") || "";
    if (!text) throw new Error("Gemini: üres válasz");
    return { text, provider, model };
  }
  async textModels(provider) {
    if (provider === "openai") {
      const j = await jfetch("https://api.openai.com/v1/models", { headers: { Authorization: "Bearer " + this.need("openai", "OpenAI") } }, "OpenAI models");
      return { models: j.data.map(m => m.id).filter(i => /^(gpt-|o\d)/.test(i) && !/realtime|audio|tts|transcribe|image|search|embedding|live/.test(i)).sort() };
    }
    const j = await jfetch(GEMINI_API + "/models?pageSize=200", { headers: { "x-goog-api-key": this.need("google", "Google (Gemini)") } }, "Gemini models");
    return { models: j.models.filter(m => (m.supportedGenerationMethods || []).includes("generateContent") && !/tts|image|embedding|live/.test(m.name)).map(m => m.name.split("/").pop()).sort() };
  }
  async archive() {}
  async archiveAudio() {}
}
