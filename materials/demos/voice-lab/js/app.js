// Hangügynök-labor: UI controller.
import { CONFIG } from "./config.js";
import { OPTIONS, optionById } from "./catalog.js";
import { BrokerSource, KeySource } from "./creds.js";
import * as store from "./store.js";
import { FIELDS, generate as genPersona, summary as personaSummary } from "./persona.js";
import { sellerInstructions, buyerInstructions, vars, analysisRequest, generateRequest, refineRequest, parseJsonLoose, stripFences, lintScript, ANALYSIS_KEYS, isFarewell } from "./prompts.js";
import { Conversation, startHuman, startVoiceDuel, runTextDuel, CANCELLED } from "./engine.js";
import { $, $$, esc, uid, fmtTime, clock, diffLines, download, hashStr, median } from "./util.js";
import { normConv, normScript, normAnalysis } from "./records.js";

// ------------------------------------------------------------------ settings (non-secret: localStorage; keys: session/local)
const LS = { get(k, d) { try { const v = localStorage.getItem("vl." + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("vl." + k, JSON.stringify(v)); } catch { /* storage blocked */ } } };
const settings = Object.assign({ source: "auto", brokerUrl: CONFIG.brokerUrl, localUrl: CONFIG.localHelperUrl, textProvider: "", textModel: "",
  recordAudio: true, autoAnalyze: true, diskCopy: false, thIn: 0.02, thOut: 0.01, theme: "auto", mode: "human", engine: "voice" }, LS.get("settings", {}));
const saveSettings = () => LS.set("settings", settings);
const KEY_FIELDS = ["openai", "google", "elevenlabs", "elCascade", "elRealtime", "accessCode"];
function loadKeys() {
  for (const st of [sessionStorage, localStorage]) { try { const v = st.getItem("vl.keys"); if (v) return { keys: JSON.parse(v), remember: st === localStorage }; } catch { /* blocked */ } }
  return { keys: {}, remember: false };
}
function storeKeys(keys, remember) {
  try { sessionStorage.removeItem("vl.keys"); localStorage.removeItem("vl.keys"); } catch { /* blocked */ }
  const clean = Object.fromEntries(Object.entries(keys).filter(([, v]) => v));
  if (!Object.keys(clean).length) return;
  try { (remember ? localStorage : sessionStorage).setItem("vl.keys", JSON.stringify(clean)); } catch { /* blocked */ }
}
let { keys, remember } = loadKeys();

// ------------------------------------------------------------------ state
let creds = null, health = null;
let scripts = [], activeId = null, selectedId = null;
let persona = null, locks = {};
let run = null;            // { conv, kind, stop() }
let lastAnalysis = null;
let brokerRejected = false;   // set on a 401 from the broker; cleared when the access code changes

const servedByHelper = () => /^http:\/\/(127\.0\.0\.1|localhost):\d+$/.test(location.origin);

// ------------------------------------------------------------------ credentials
async function resolveCreds() {
  const tries = [];
  const s = settings.source;
  // Auto mode uses the broker only with an access code (its health check needs none, the credential calls do),
  // and not after it rejected the code; an explicit "broker" choice always tries it.
  const skipped = [];
  if (settings.brokerUrl && (s === "broker" || (s === "auto" && keys.accessCode && !brokerRejected))) tries.push(new BrokerSource(settings.brokerUrl, keys.accessCode, "broker"));
  else if (s === "auto" && settings.brokerUrl) skipped.push(brokerRejected ? "távoli broker: elutasította a hozzáférési kódot, kihagyva" : "távoli broker: nincs megadva hozzáférési kód, kihagyva");
  if (s === "local" || (s === "auto" && servedByHelper())) tries.push(new BrokerSource(servedByHelper() && s === "auto" ? location.origin : settings.localUrl, keys.accessCode, "local"));
  if ((s === "auto" || s === "keys") && (keys.openai || keys.google || keys.elevenlabs)) tries.push(new KeySource(keys, CONFIG.textModels));
  creds = null; health = null; const fails = [...skipped];
  let fallback = null;   // a reachable source without any provider key: used only if nothing better answers
  for (const c of tries) {
    try {
      const h = await c.health();
      if (Object.values(h.providers || {}).some(Boolean)) { health = h; creds = c; break; }
      if (!fallback) fallback = [c, h];
      fails.push(c.label + ": elérhető, de nincs rajta API-kulcs");
    } catch (e) { fails.push(c.label + ": " + e.message); }
  }
  if (!creds && fallback) [creds, health] = fallback;
  if (creds && creds.kind === "broker") creds.onUnauthorized = () => {   // a wrong code shows up only on a real call
    if (brokerRejected) return;
    brokerRejected = true;
    resolveCreds().then(() => setStatus("#status", "A távoli broker elutasította a hozzáférési kódot (401). " +
      (creds ? "Átváltottam erre: " + creds.label + ". Indítsd újra." : "Adj meg helyes kódot vagy saját kulcsot a Beállításokban."), true));
  };
  renderCredState(fails);
  renderPickers();
}

function renderCredState(fails = []) {
  const b = $("#credBadge"), banner = $("#banner");
  const anyKey = health && Object.values(health.providers || {}).some(Boolean);
  if (creds && !anyKey) {
    b.textContent = "Mód: " + creds.label + " (kulcs nélkül)"; b.className = "badge badge--warn";
    banner.hidden = false; banner.className = "banner banner--warn";
    banner.innerHTML = (creds.kind === "local"
      ? "A helyi segéd fut, de nincs API-kulcsa. Írd a kulcsot a <code>materials/demos/voice-lab/.env.local</code> fájlba (minta: <code>.env.example</code>), vagy add meg a <code>VOICE_LAB_ENV</code> változóval, majd indítsd újra a segédet. "
      : "A forrás elérhető, de egyik hangszolgáltatóhoz sincs kulcsa. ") +
      "Saját kulcsot a Beállításokban is megadhatsz. Kulcs nélkül a forgatókönyv, a persona és az előzmények használhatók, a hangmodellek nem. " +
      "<button class=\"btn btn--small\" type=\"button\" id=\"bannerSettings\">Beállítások megnyitása</button>" +
      (fails.length ? "<br><small>" + esc(fails.join(" · ")) + "</small>" : "");
    $("#bannerSettings").onclick = openSettings;
  } else if (creds) {
    b.textContent = "Mód: " + creds.label; b.className = "badge badge--ok";
    banner.hidden = !fails.length; banner.className = "banner banner--warn";
    banner.textContent = fails.length ? "Nem elérhető: " + fails.join(" · ") : "";
  } else {
    b.textContent = "Mód: nincs kapcsolat"; b.className = "badge badge--warn";
    banner.hidden = false; banner.className = "banner banner--warn";
    banner.innerHTML = "Nincs hitelesítési forrás, ezért a hangmodellek nem indíthatók (az oldal többi része működik). " +
      "Adj meg saját API-kulcsot, egy broker címét és hozzáférési kódját, vagy indítsd el a helyi segédet: " +
      "<code>python server.py</code>. <button class=\"btn btn--small\" type=\"button\" id=\"bannerSettings\">Beállítások megnyitása</button>" +
      (fails.length ? "<br><small>" + esc(fails.join(" · ")) + "</small>" : "");
    $("#bannerSettings").onclick = openSettings;
  }
  const p = health ? health.providers : {}, t = health ? health.text || {} : {};
  const chip = (ok, label) => `<span class="chip ${ok ? "chip--ok" : "chip--off"}">${ok ? "✓" : "✗"} ${esc(label)}</span>`;
  $("#availability").innerHTML = chip(p.openai, "OpenAI") + chip(p.google, "Google") + chip(p.elevenlabs, "ElevenLabs") +
    chip(t.openai || t.google, "Szövegmodell: " + (textChoice().model || t.openai || t.google || "nincs"));
}

function optionState(opt) {
  if (!health) return { ok: false, why: "nincs hitelesítési forrás" };
  const p = health.providers || {};
  if (!p[opt.provider]) return { ok: false, why: { openai: "nincs OpenAI-kulcs", google: "nincs Google-kulcs", elevenlabs: "nincs ElevenLabs-kulcs" }[opt.provider] };
  if (opt.variant && !(health.elevenlabs_agents || {})[opt.variant]) return { ok: false, why: "nincs ügynökazonosító" };
  return { ok: true };
}
function textChoice() {
  const t = (health && health.text) || {};
  const provider = settings.textProvider || (t.openai ? "openai" : t.google ? "google" : "");
  const model = settings.textModel && (!health || health.text?.model_override !== false) ? settings.textModel : (t[provider] || "");
  return { provider, model, ok: !!(provider && t[provider]) };
}

// ------------------------------------------------------------------ pickers (option / model / voice)
const pickerState = LS.get("pickers", {});
function buildPicker(el, role) {
  const opts = OPTIONS.filter(o => o.roles.includes(role));
  const st = pickerState[role] || {};
  const optSel = document.createElement("select"), modelSel = document.createElement("select"), voiceSel = document.createElement("select");
  optSel.innerHTML = opts.map(o => { const s = optionState(o); return `<option value="${o.id}"${s.ok ? "" : " data-off=\"1\""}>${esc(o.label)}${o.preferred ? " ★" : ""}${s.ok ? "" : " – " + esc(s.why)}</option>`; }).join("");
  const first = opts.find(o => optionState(o).ok);
  optSel.value = (st.opt && opts.some(o => o.id === st.opt) && optionState(optionById(st.opt)).ok) ? st.opt : (first || opts[0]).id;
  const fill = () => {
    const o = optionById(optSel.value);
    modelSel.innerHTML = o.models.map(m => `<option>${esc(m)}</option>`).join("");
    voiceSel.innerHTML = o.voices.map(v => `<option>${esc(v)}</option>`).join("");
    const s = pickerState[role] || {};
    if (s.opt === o.id && o.models.includes(s.model)) modelSel.value = s.model;
    voiceSel.value = s.opt === o.id && o.voices.includes(s.voice) ? s.voice : (role === "buyer" && o.buyerVoice) || o.voice || o.voices[0];
    modelSel.disabled = o.models.length < 2; voiceSel.disabled = o.voices.length < 2;
    kind.textContent = o.kind + (optionState(o).ok ? "" : " · nem elérhető: " + optionState(o).why);
    if (role === "human") $("#overrideWrap").hidden = o.provider !== "elevenlabs";
  };
  const persist = () => { pickerState[role] = { opt: optSel.value, model: modelSel.value, voice: voiceSel.value }; LS.set("pickers", pickerState); };
  const kind = document.createElement("p"); kind.className = "hint";
  const wrap = (label, sel) => { const l = document.createElement("label"); l.className = "field"; l.append(label, sel); return l; };
  el.replaceChildren(wrap("Modell / szolgáltató", optSel), wrap("Modellváltozat", modelSel), wrap("Hang", voiceSel), kind);
  optSel.onchange = () => { fill(); persist(); }; modelSel.onchange = persist; voiceSel.onchange = persist;
  fill();
  el.get = () => ({ opt: optionById(optSel.value), model: modelSel.value, voice: voiceSel.value });
}
function renderPickers() { buildPicker($("#pickHuman"), "human"); buildPicker($("#pickSeller"), "seller"); buildPicker($("#pickBuyer"), "buyer"); }

// ------------------------------------------------------------------ scripts (versions in IndexedDB)
const KIND_LABEL = { alap: "alap", kezi: "kézi", generalt: "AI-generált", finomitott: "AI-finomított", elemzesbol: "elemzésből", import: "importált" };
const verLabel = s => `v${s.n} · ${KIND_LABEL[s.kind] || s.kind} · ${fmtTime(s.createdAt)}${s.note ? " · " + s.note : ""}`;
const byId = id => scripts.find(s => s.id === id);

async function loadScripts() {
  scripts = (await store.all("scripts")).map(normScript).filter(Boolean).sort((a, b) => a.n - b.n);
  try {
    const r = await fetch(CONFIG.defaultScriptUrl, { cache: "no-cache" });
    if (r.ok) {
      const text = await r.text(), h = hashStr(text).toString(36);
      if (!scripts.some(s => s.builtinHash === h)) await addScript({ text, kind: "alap", note: "a demó alapforgatókönyve (LATE20)", builtinHash: h, activate: !scripts.length });
    }
  } catch (e) { setStatus("#aiStatus", "Az alapforgatókönyv nem tölthető be: " + e.message, true); }
  activeId = (await store.kvGet("activeScript")) || null;
  if (!byId(activeId) && scripts.length) { activeId = scripts.at(-1).id; await store.kvSet("activeScript", activeId); }
  selectedId = activeId;
  renderScripts();
}
async function addScript({ text, kind, note = "", parent = null, builtinHash, activate = false }) {
  const s = { id: uid("s-"), n: (scripts.reduce((m, x) => Math.max(m, x.n), 0) || 0) + 1, kind, note, parent, text, createdAt: Date.now() };
  if (builtinHash) s.builtinHash = builtinHash;
  await store.put("scripts", s); scripts.push(s);
  if (activate) { activeId = s.id; await store.kvSet("activeScript", s.id); }
  return s;
}
function renderScripts() {
  const opts = [...scripts].reverse().map(s => `<option value="${esc(s.id)}">${esc(verLabel(s))}${s.id === activeId ? " (aktív)" : ""}</option>`).join("");
  $("#verSel").innerHTML = opts; $("#verSel").value = selectedId || "";
  const s = byId(selectedId);
  $("#editor").value = s ? s.text : "";
  $("#verBadge").textContent = s && s.id === activeId ? "aktív" : "nem aktív";
  $("#verBadge").className = "pill " + (s && s.id === activeId ? "pill--ok" : "");
  $("#verMeta").textContent = s ? (s.parent && byId(s.parent) ? `Előzmény: v${byId(s.parent).n}. ` : "") + `Létrehozva: ${fmtTime(s.createdAt)}.` : "";
  $("#activateVer").disabled = !s || s.id === activeId;
  const a = byId(activeId);
  $("#activeScriptLabel").textContent = a ? verLabel(a) : "–";
  $("#cmpSel").innerHTML = [...scripts].reverse().filter(x => x.id !== selectedId).map(x => `<option value="${esc(x.id)}">${esc(verLabel(x))}</option>`).join("");
  const parent = s && s.parent && byId(s.parent);
  if (parent) $("#cmpSel").value = parent.id; else if (a && a.id !== selectedId) $("#cmpSel").value = a.id;
  renderLint(); renderDiff(); renderAssembled();
}
function renderLint() {
  const text = $("#editor").value, s = byId(selectedId), dirty = s && s.text !== text;
  const w = lintScript(text);
  $("#lint").innerHTML = (dirty ? "<strong>Nem mentett módosítás.</strong> A beszélgetés a mentett, aktív verziót használja. " : "") +
    (w.length ? "Figyelem: " + esc(w.join("; ")) + "." : "");
  $("#lint").className = "lint" + (w.length ? " lint--warn" : "");
}
function renderDiff() {
  const other = byId($("#cmpSel").value), text = $("#editor").value;
  if (!other) { $("#diff").innerHTML = "<p class=\"hint\">Nincs másik verzió.</p>"; return; }
  const d = diffLines(other.text, text), changed = d.filter(x => x.op !== " ").length;
  // Show changed lines with two lines of context; collapse long unchanged runs.
  const keep = d.map((x, i) => x.op !== " " || d.slice(Math.max(0, i - 2), i + 3).some(y => y.op !== " "));
  let html = "", skipped = 0;
  d.forEach((x, i) => {
    if (!keep[i]) { skipped++; return; }
    if (skipped) { html += `<div class="d d--skip">… ${skipped} változatlan sor …</div>`; skipped = 0; }
    html += `<div class="d d--${x.op === "+" ? "add" : x.op === "-" ? "del" : "eq"}"><span aria-hidden="true">${x.op === " " ? " " : x.op}</span>${esc(x.text) || "&nbsp;"}</div>`;
  });
  if (skipped) html += `<div class="d d--skip">… ${skipped} változatlan sor …</div>`;
  $("#diff").innerHTML = `<p class="hint">v${esc(other.n)} → ${byId(selectedId) ? "v" + esc(byId(selectedId).n) : "szerkesztő"}${$("#editor").value !== (byId(selectedId) || {}).text ? " (a szerkesztő tartalma)" : ""}: ${changed} eltérő sor.</p>` + (changed ? html : "");
}
function sellerFor(scriptText, firstName) { return sellerInstructions(scriptText, { firstName, agentName: CONFIG.agentName }); }
function renderAssembled() {
  const s = byId(selectedId);
  $("#assembled").textContent = s ? sellerFor($("#editor").value, $("#firstName").value).instructions : "";
}

// ------------------------------------------------------------------ persona
function renderPersona() {
  persona = genPersona($("#seed").value || "1", locks);
  $("#personaFields").innerHTML = FIELDS.map(f => {
    const v = persona.fields[f.key], locked = locks[f.key] !== undefined;
    const ctl = f.multi
      ? `<select id="pf-${f.key}" multiple size="3">${f.values.map(x => `<option${v.includes(x) ? " selected" : ""}>${esc(x)}</option>`).join("")}</select>`
      : `<select id="pf-${f.key}">${f.values.map(x => `<option${x === v ? " selected" : ""}>${esc(x)}</option>`).join("")}</select>`;
    return `<div class="pfield"><label for="pf-${f.key}">${esc(f.label)}</label>${ctl}<label class="check check--small"><input type="checkbox" data-lock="${f.key}"${locked ? " checked" : ""}> rögzít</label></div>`;
  }).join("");
  for (const f of FIELDS) {
    $("#pf-" + f.key).onchange = e => { locks[f.key] = f.multi ? [...e.target.selectedOptions].map(o => o.value) : e.target.value; saveLocks(); renderPersona(); };
  }
  $$("[data-lock]").forEach(cb => { cb.onchange = () => { const k = cb.dataset.lock; if (cb.checked) locks[k] = persona.fields[k]; else delete locks[k]; saveLocks(); renderPersona(); }; });
  $("#personaSummary").textContent = "Kitalált persona: " + personaSummary(persona);
  $("#personaLine").textContent = personaSummary(persona);
  $("#buyerIns").textContent = buyerInstructions(persona);
}
const saveLocks = () => { LS.set("personaLocks", locks); LS.set("personaSeed", $("#seed").value); };

// ------------------------------------------------------------------ run
const setStatus = (sel, msg, err) => { const el = $(sel); el.textContent = msg; el.classList.toggle("status--err", !!err); };
const ROLE_NAMES = { user: "Te", agent: "Ügynök", seller: "Eladó", buyer: "Érdeklődő", sys: "rendszer" };
function renderTranscript(lines, box = $("#transcript")) {
  const stick = box.scrollTop + box.clientHeight >= box.scrollHeight - 40;
  box.innerHTML = lines.length ? [...lines].sort((a, b) => (a.ts || Date.parse(a.t)) - (b.ts || Date.parse(b.t))).map(l =>
    `<p class="line line--${ROLE_NAMES[l.role] ? l.role : "sys"}"><span class="line__t">${esc(clock(l.ts || Date.parse(l.t)))}</span><span class="line__who">${esc(ROLE_NAMES[l.role] || l.role)}</span><span class="line__text">${esc(l.text)}</span></p>`).join("")
    : "<p class=\"empty\">Az átirat itt jelenik meg.</p>";
  if (stick) box.scrollTop = box.scrollHeight;
}
function metricsHtml(metrics) {
  const rows = [];
  for (const [k, m] of Object.entries(metrics || {})) {
    if (k === "text_turn_ms") { if (Array.isArray(m)) rows.push(`<div class="metric"><span>Szövegmodell válaszideje (medián)</span><b>${esc(median(m.map(x => +x.ms || 0)) ?? "–")} ms</b><small>${m.length} megszólalás</small></div>`); continue; }
    const name = { agent: "Ügynök válaszideje", seller: "Eladó válaszideje", buyer: "Érdeklődő válaszideje" }[k];
    if (!name || !m || !Array.isArray(m.latency_ms)) continue;
    const last = m.latency_ms.at(-1);
    const bi = Array.isArray(m.barge_ins) ? m.barge_ins : [];
    rows.push(`<div class="metric"><span>${name}</span><b>${esc(m.latency_median_ms ?? "–")} ms</b><small>medián · utolsó ${esc(last ?? "–")} ms · ${m.latency_ms.length} kör` +
      (m.event_latency_median_ms != null ? ` · szerveresemény ${esc(m.event_latency_median_ms)} ms` : "") +
      (bi.length ? ` · közbevágás ${bi.length}×${m.barge_stop_median_ms != null ? ", elhallgatás " + esc(m.barge_stop_median_ms) + " ms" : ""}${m.barge_not_stopped ? `, ${esc(m.barge_not_stopped)}× nem hallgatott el` : ""}` : "") + "</small></div>");
  }
  return rows.join("");
}
function renderLive(conv) {
  renderTranscript(conv.lines);
  $("#meters").innerHTML = conv.meters.map(m => {
    const [i, o] = m.levels || [0, 0];
    const names = { agent: ["Te", "Ügynök"], seller: ["Érdeklődő", "Eladó"], buyer: null }[m.label];
    if (!names) return "";
    return `<div class="meter"><span>${names[0]}</span><i style="--v:${Math.min(100, i * 30)}%" class="bar bar--in"></i></div><div class="meter"><span>${names[1]}</span><i style="--v:${Math.min(100, o * 30)}%" class="bar bar--out"></i></div>`;
  }).join("");
  const live = Object.fromEntries(conv.meters.map(m => [m.label, m.summary()]));
  if (conv.turnTimes) live.text_turn_ms = conv.turnTimes;
  $("#metrics").innerHTML = metricsHtml(live);
}
function setRunning(on) {
  $("#startBtn").disabled = on; $("#stopBtn").disabled = !on;
  $$("input[name=mode], input[name=engine]").forEach(x => { x.disabled = on; });
}

async function start() {
  const a = byId(activeId);
  if (!a) return setStatus("#status", "Nincs aktív forgatókönyv.", true);
  const mode = settings.mode, engine = settings.engine;
  if (mode === "duel" && engine === "text" ? !textChoice().ok : !creds) {
    return setStatus("#status", mode === "duel" && engine === "text" ? "A szöveges szimulációhoz szövegmodell kell (Beállítások)." : "Nincs hitelesítési forrás (Beállítások).", true);
  }
  const s = byId(selectedId);
  if (s && s.text !== $("#editor").value) setStatus("#aiStatus", "Figyelem: a szerkesztő nem mentett módosítása nem kerül a beszélgetésbe.", true);
  const conv = new Conversation({ mode: mode === "human" ? "human" : engine === "voice" ? "voice-duel" : "text-duel",
    thresholds: () => ({ inTh: mode === "human" ? (+settings.thIn || 0.02) : (+settings.thOut || 0.01), outTh: +settings.thOut || 0.01 }),
    onUpdate: renderLive, onStatus: (m, err) => setStatus("#status", m, err) });
  const firstName = mode === "human" ? $("#firstName").value.trim() : (persona.fields.nameKnown === "igen" ? persona.fields.firstName : "");
  const seller = sellerFor(a.text, firstName);
  const meta = { script: { id: a.id, n: a.n, kind: a.kind, note: a.note }, first_name_used: firstName || null };
  if (mode === "duel") meta.persona = persona;
  run = { conv, meta, stopping: false };
  setRunning(true); renderTranscript([]); $("#metrics").innerHTML = ""; $("#meters").innerHTML = "";
  conv.onRemoteClose = reason => stop(reason);
  try {
    conv.status("Indítás…");
    if (mode === "human") {
      const p = $("#pickHuman").get();
      if (!optionState(p.opt).ok) throw new Error("Ez a modell nem elérhető: " + optionState(p.opt).why);
      meta.first_name_used = firstName || null;
      await startHuman(conv, { creds, opt: p.opt, model: p.model, voice: p.voice, seller, record: settings.recordAudio,
        override: $("#override").checked, dynVars: vars({ firstName, agentName: CONFIG.agentName }) });
    } else if (engine === "voice") {
      const sp = $("#pickSeller").get(), bp = $("#pickBuyer").get();
      for (const p of [sp, bp]) if (!optionState(p.opt).ok) throw new Error(p.opt.label + " nem elérhető: " + optionState(p.opt).why);
      conv.onLine = l => { if (l.role === "seller" && isFarewell(l.text)) scheduleFarewellStop(); };
      await startVoiceDuel(conv, { creds, sellerSide: sp, buyerSide: bp, seller, buyerInstructions: buyerInstructions(persona), record: settings.recordAudio });
      run.limit = setTimeout(() => stop("elérte az időkorlátot"), Math.max(30, +$("#maxSec").value || 180) * 1000);
    } else {
      const reason = await runTextDuel(conv, { creds, text: textChoice(), seller, buyerInstructions: buyerInstructions(persona, { text: true }),
        maxTurns: Math.max(4, Math.min(40, +$("#maxTurns").value || 16)), speak: $("#speak").checked });
      return stop(reason);
    }
  } catch (e) {
    if (e.message === CANCELLED || conv.closed) return;
    conv.status("Hiba: " + e.message, true);
    return stop("indítási hiba");
  }
}
function scheduleFarewellStop() {
  if (!run || run.farewell) return;
  run.farewell = Date.now();
  const conv = run.conv, m = conv.sellerMeter;
  const poll = setInterval(() => {
    if (!run || run.conv !== conv) return clearInterval(poll);
    const quiet = !m || (!m.m.on && performance.now() - m.m.lastOut > 1500);
    if ((quiet && Date.now() - run.farewell > 2000) || Date.now() - run.farewell > 15000) { clearInterval(poll); stop("az eladó elköszönt"); }
  }, 250);
}

async function stop(reason = "leállítva") {
  if (!run || run.stopping) return;
  const r = run; r.stopping = true;
  if (r.saved) { await r.conv.finish(reason); run = null; setRunning(false); return; } clearTimeout(r.limit);
  setStatus("#status", "Lezárás…");
  const res = await r.conv.finish(reason);
  run = null; setRunning(false);
  if (!res) return;
  const errs = res.record.errors.filter(Boolean);
  if (!res.record.transcript.some(l => l.role !== "sys") && !res.audio) {   // nothing happened: keep the error visible, store nothing
    setStatus("#status", errs.length ? "Nem indult el: " + errs.at(-1).replace(/^Hiba: /, "") : `Leállítva (${reason}); nem volt beszélgetés, nem mentettem.`, !!errs.length);
    return;
  }
  const record = { id: uid("c-"), ...res.record, ...r.meta };
  if (res.audio) record.audio = { mime: res.audio.type, bytes: res.audio.size };
  await store.put("convs", record);
  if (res.audio) await store.put("audio", { id: record.id, blob: res.audio });
  if (settings.diskCopy && creds && creds.kind === "local") {
    try { await creds.archive(record); if (res.audio) await creds.archiveAudio(record.id, res.audio); } catch (e) { record.errors.push("lemezmásolat: " + e.message); }
  }
  setStatus("#status", `Mentve (${reason}). ${record.transcript.length} sor, ${record.duration_s} s.` + (errs.length ? " Hibák: " + errs.join(" · ") : ""), !!errs.length);
  await renderHistory(record.id);
  if (settings.autoAnalyze && textChoice().ok && record.transcript.filter(l => l.role !== "sys").length >= 2) analyze(record.id).catch(e => setStatus("#anaStatus", e.message, true));
}

// ------------------------------------------------------------------ analysis
async function analyze(id) {
  const conv = normConv(await store.get("convs", id));
  if (!conv) return;
  if (!creds || !textChoice().ok) return setStatus("#anaStatus", "Az elemzéshez szövegmodell kell (Beállítások).", true);
  const script = byId(conv.script && conv.script.id) || byId(activeId);
  setStatus("#anaStatus", "Elemzés folyamatban…"); $("#anaSel").value = id;
  try {
    const tc = textChoice();
    const r = await creds.text({ provider: tc.provider, model: tc.model, ...analysisRequest({ script: script ? script.text : "", conv }) });
    const a = parseJsonLoose(r.text);
    conv.analysis = normAnalysis({ ...a, model: r.provider + "/" + r.model, at: new Date().toISOString() });
    await store.put("convs", conv);
    lastAnalysis = { convId: id, analysis: conv.analysis };
    setStatus("#anaStatus", "Kész (" + conv.analysis.model + ").");
    await renderHistory(); showAnalysis(id);
  } catch (e) { setStatus("#anaStatus", "Az elemzés nem sikerült: " + e.message, true); }
}
async function showAnalysis(id) {
  try { await renderAnalysis(id); } catch (e) { $("#anaView").innerHTML = ""; setStatus("#anaStatus", "Az elemzés nem jeleníthető meg: " + e.message, true); }
}
async function renderAnalysis(id) {
  const conv = normConv(await store.get("convs", id)), v = $("#anaView");
  if (!conv) { v.innerHTML = "<p class=\"hint\">Még nincs rögzített beszélgetés.</p>"; return; }
  const a = conv.analysis;
  if (!a) { v.innerHTML = "<p class=\"hint\">Ehhez a beszélgetéshez még nincs elemzés.</p>"; return; }
  const sc = a.scores || {};
  v.innerHTML = `<p class="prose">${esc(a.summary || "")}</p>
    <p><span class="pill">Kimenet: ${esc(a.outcome || "–")}</span> <span class="hint">${esc(a.model || "")}</span></p>
    <div class="scores">${ANALYSIS_KEYS.map(([k, label]) => { const s = sc[k] || {}, n = Math.max(0, Math.min(5, +s.score || 0));
      return `<div class="score"><span>${label}</span><meter min="0" max="5" low="2.5" high="3.9" optimum="5" value="${n}" aria-label="${label}: ${n} az 5-ből"></meter><b>${n || "–"}/5</b><small>${esc(s.reason || "")}</small></div>`; }).join("")}</div>
    ${(a.factual_errors || []).length ? `<h3>Ténybeli hibák</h3><ul class="list list--bad">${a.factual_errors.map(e => `<li><q>${esc(e.quote)}</q> – ${esc(e.issue)} <em>Helyesen: ${esc(e.correct)}</em></li>`).join("")}</ul>` : "<p class=\"hint\">Ténybeli hibát nem talált.</p>"}
    ${(a.strengths || []).length ? `<h3>Erősségek</h3><ul class="list">${a.strengths.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    ${(a.issues || []).length ? `<h3>Problémák</h3><ul class="list">${a.issues.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
    ${(a.script_suggestions || []).length ? `<h3>Javaslatok a forgatókönyvhöz</h3><ol class="list">${a.script_suggestions.map(s => `<li><strong>${esc(s.section)}:</strong> ${esc(s.change)} <small>(${esc(s.why)})</small></li>`).join("")}</ol>
      <div class="actions"><button id="applySugg" class="btn btn--primary" type="button">Javaslatok alkalmazása → új forgatókönyv-verzió</button></div>` : ""}`;
  const btn = $("#applySugg"); if (btn) btn.onclick = () => applySuggestions(conv);
}
async function applySuggestions(conv) {
  const base = byId(conv.script && conv.script.id) || byId(activeId);
  await aiScript("elemzesbol", refineRequest({ script: base.text, instruction: "", analysis: conv.analysis }), base.id, `a ${fmtTime(Date.parse(conv.started_at))} beszélgetés elemzéséből`);
}

// ------------------------------------------------------------------ AI script generation / refinement
async function aiScript(kind, req, parent, note) {
  if (!creds || !textChoice().ok) return setStatus("#aiStatus", "Ehhez szövegmodell kell (Beállítások).", true);
  setStatus("#aiStatus", "A szövegmodell dolgozik… (fél perc is lehet)"); selectTab("script");
  $$("#genBtn, #refineBtn").forEach(b => { b.disabled = true; });
  try {
    const tc = textChoice(), r = await creds.text({ provider: tc.provider, model: tc.model, ...req });
    const text = stripFences(r.text);
    if (text.length < 200) throw new Error("túl rövid válasz");
    const s = await addScript({ text, kind, parent, note: note || "" });
    selectedId = s.id; renderScripts();
    const w = lintScript(text);
    setStatus("#aiStatus", `Elmentve: v${s.n} (${r.model}). Nézd át az eltéréseket, és ha jó, aktiváld.` + (w.length ? " Figyelem: " + w.join("; ") + "." : ""), !!w.length);
    $("#diff").closest("details").open = true;
  } catch (e) { setStatus("#aiStatus", "Nem sikerült: " + e.message, true); }
  finally { $$("#genBtn, #refineBtn").forEach(b => { b.disabled = false; }); }
}

// ------------------------------------------------------------------ history
async function renderHistory(openId) {
  const convs = (await store.all("convs")).map(normConv).filter(Boolean).sort((a, b) => Date.parse(b.started_at) - Date.parse(a.started_at));
  const modeName = { human: "Ember ↔ modell", "voice-duel": "Modell ↔ modell (hang)", "text-duel": "Modell ↔ modell (szöveg)" };
  const avg = c => { const s = c.analysis && c.analysis.scores; if (!s) return null; const v = ANALYSIS_KEYS.map(([k]) => +((s[k] || {}).score) || 0).filter(Boolean); return v.length ? (v.reduce((x, y) => x + y, 0) / v.length).toFixed(1) : null; };
  $("#histList").innerHTML = convs.length ? convs.map(c => `<li><button class="hist__item" type="button" data-id="${esc(c.id)}">
      <span class="hist__when">${esc(fmtTime(Date.parse(c.started_at)))}</span>
      <span class="hist__what">${esc(modeName[c.mode] || c.mode)} · ${esc(c.participants.map(p => p.model).join(" ↔ "))}</span>
      <span class="hist__meta">v${esc(c.script ? c.script.n : "?")} · ${esc(c.duration_s)} s${c.audio ? " · hang" : ""}${avg(c) ? " · átlag " + avg(c) + "/5" : c.analysis ? "" : " · nincs elemzés"}</span></button></li>`).join("")
    : "<li class=\"hint\">Még nincs rögzített beszélgetés.</li>";
  $$("#histList .hist__item").forEach(b => { b.onclick = () => openHistory(b.dataset.id); });
  $("#anaSel").innerHTML = convs.map(c => `<option value="${esc(c.id)}">${esc(fmtTime(Date.parse(c.started_at)))} · ${esc(modeName[c.mode] || c.mode)}${c.analysis ? " · elemezve" : ""}</option>`).join("");
  if (openId) { $("#anaSel").value = openId; await showAnalysis(openId); }
  else if (convs[0] && !$("#anaView").innerHTML) await showAnalysis($("#anaSel").value);
  const latest = convs.find(c => c.analysis); if (latest && !lastAnalysis) lastAnalysis = { convId: latest.id, analysis: latest.analysis };
}
async function openHistory(id) {
  const c = normConv(await store.get("convs", id)), au = await store.get("audio", id), d = $("#histDetail");
  if (!c) return;
  const url = au && au.blob instanceof Blob ? URL.createObjectURL(au.blob) : null;
  d.innerHTML = `<div class="box"><h3>${esc(fmtTime(Date.parse(c.started_at)))} · ${esc(c.end_reason || "")}</h3>
    <p class="meta">${esc(c.participants.map(p => `${ROLE_NAMES[p.role] || p.role}: ${p.option} ${p.model}${p.voice ? " (" + p.voice + ")" : ""}`).join(" · "))} · forgatókönyv v${esc(c.script ? c.script.n : "?")}${c.persona ? " · persona: " + esc(personaSummary(c.persona)) : ""}</p>
    ${url ? `<audio controls src="${url}"></audio>` : "<p class=\"hint\">Ehhez a beszélgetéshez nincs hangfelvétel.</p>"}
    <div class="metrics">${metricsHtml(c.metrics)}</div>
    <div class="transcript transcript--static" tabindex="0" aria-label="Átirat"></div>
    ${(c.errors || []).length ? `<p class="status status--err">Hibák: ${esc(c.errors.join(" · "))}</p>` : ""}
    <div class="actions"><button class="btn" type="button" data-act="ana">${c.analysis ? "Elemzés megnyitása" : "Elemzés futtatása"}</button>
      ${url ? `<button class="btn btn--ghost" type="button" data-act="audio">Hang letöltése</button>` : ""}
      <button class="btn btn--ghost" type="button" data-act="json">JSON letöltése</button>
      <button class="btn btn--danger" type="button" data-act="del">Törlés</button></div></div>`;
  renderTranscript(c.transcript, $(".transcript--static", d));
  $("[data-act=ana]", d).onclick = () => { selectTab("analysis"); $("#anaSel").value = id; if (c.analysis) showAnalysis(id); else analyze(id); };
  if (url) $("[data-act=audio]", d).onclick = () => download(`hangugynok-${id}.${/ogg/.test(au.blob.type) ? "ogg" : /mp4/.test(au.blob.type) ? "m4a" : "webm"}`, au.blob);
  $("[data-act=json]", d).onclick = () => download(`hangugynok-${id}.json`, JSON.stringify(c, null, 1));
  $("[data-act=del]", d).onclick = async () => { if (!confirm("Törlöd ezt a beszélgetést és a felvételét?")) return; await store.del("convs", id); await store.del("audio", id); d.innerHTML = ""; renderHistory(); };
}

// ------------------------------------------------------------------ tabs, settings, theme
function selectTab(name) {
  $$("[role=tab]").forEach(t => { const on = t.id === "tab-" + name; t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1; $("#" + t.getAttribute("aria-controls")).hidden = !on; });
}
function initTabs() {
  const tabs = $$("[role=tab]");
  tabs.forEach((t, i) => {
    t.onclick = () => selectTab(t.id.slice(4));
    t.onkeydown = e => { const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0; if (!d) return; const n = tabs[(i + d + tabs.length) % tabs.length]; selectTab(n.id.slice(4)); n.focus(); };
  });
}
function openSettings() {
  $$("input[name=source]").forEach(r => { r.checked = r.value === settings.source; });
  $("#brokerUrl").value = settings.brokerUrl || ""; $("#localUrl").value = settings.localUrl || "";
  $("#accessCode").value = keys.accessCode || ""; $("#keyOpenai").value = keys.openai || ""; $("#keyGoogle").value = keys.google || "";
  $("#keyEleven").value = keys.elevenlabs || ""; $("#elRealtime").value = keys.elRealtime || ""; $("#elCascade").value = keys.elCascade || "";
  $("#rememberKeys").checked = remember;
  $("#textProvider").value = settings.textProvider || ""; $("#textModel").value = settings.textModel || "";
  for (const k of ["recordAudio", "autoAnalyze", "diskCopy"]) $("#" + k).checked = !!settings[k];
  $("#thIn").value = settings.thIn; $("#thOut").value = settings.thOut;
  $("#settings").returnValue = ""; $("#settings").showModal();
}
function readSettings() {
  settings.source = ($$("input[name=source]").find(r => r.checked) || {}).value || "auto";
  settings.brokerUrl = $("#brokerUrl").value.trim(); settings.localUrl = $("#localUrl").value.trim() || CONFIG.localHelperUrl;
  settings.textProvider = $("#textProvider").value; settings.textModel = $("#textModel").value.trim();
  for (const k of ["recordAudio", "autoAnalyze", "diskCopy"]) settings[k] = $("#" + k).checked;
  settings.thIn = +$("#thIn").value || 0.02; settings.thOut = +$("#thOut").value || 0.01;
  keys = { accessCode: $("#accessCode").value.trim(), openai: $("#keyOpenai").value.trim(), google: $("#keyGoogle").value.trim(),
    elevenlabs: $("#keyEleven").value.trim(), elRealtime: $("#elRealtime").value.trim(), elCascade: $("#elCascade").value.trim() };
  remember = $("#rememberKeys").checked;
  storeKeys(keys, remember); saveSettings();
}
function applyTheme() {
  const t = settings.theme;
  if (t === "auto") document.documentElement.removeAttribute("data-theme"); else document.documentElement.dataset.theme = t;
  $("#themeBtn").textContent = "Téma: " + { auto: "auto", light: "világos", dark: "sötét" }[t];
}

// ------------------------------------------------------------------ wiring
function syncMode() {
  settings.mode = ($$("input[name=mode]").find(r => r.checked) || {}).value || "human";
  settings.engine = ($$("input[name=engine]").find(r => r.checked) || {}).value || "voice";
  $("#humanCfg").hidden = settings.mode !== "human"; $("#duelCfg").hidden = settings.mode !== "duel";
  const text = settings.engine === "text";
  $("#pickSeller").closest("fieldset").hidden = $("#pickBuyer").hidden = text;
  $("#maxTurnsWrap").hidden = $("#speakWrap").hidden = !text; $("#maxSec").closest("label").hidden = text;
  saveSettings();
}

async function init() {
  applyTheme();
  $$("input[name=mode]").forEach(r => { r.checked = r.value === settings.mode; r.onchange = syncMode; });
  $$("input[name=engine]").forEach(r => { r.checked = r.value === settings.engine; r.onchange = syncMode; });
  syncMode(); initTabs();
  $("#themeBtn").onclick = () => { settings.theme = { auto: "light", light: "dark", dark: "auto" }[settings.theme]; saveSettings(); applyTheme(); };
  $("#settingsBtn").onclick = openSettings;
  // Only "Mentés és bezárás" saves; Escape (cancel) closes the dialog without saving.
  $("#settings").addEventListener("close", () => {
    if ($("#settings").returnValue !== "close") return;
    const oldCode = keys.accessCode; readSettings(); if (keys.accessCode !== oldCode) brokerRejected = false; resolveCreds();
  });
  $("#clearKeys").onclick = () => { for (const id of ["accessCode", "keyOpenai", "keyGoogle", "keyEleven", "elRealtime", "elCascade"]) $("#" + id).value = ""; $("#rememberKeys").checked = false; keys = {}; remember = false; storeKeys({}, false); setStatus("#probeResult", "Kulcsok törölve."); };
  $("#probeLocal").onclick = async () => {
    setStatus("#probeResult", "Keresés…");
    try { const h = await new BrokerSource($("#localUrl").value.trim() || CONFIG.localHelperUrl, $("#accessCode").value.trim(), "local").health(4000);
      setStatus("#probeResult", `Elérhető. Kulcsok: OpenAI ${h.providers.openai ? "van" : "nincs"}, Google ${h.providers.google ? "van" : "nincs"}, ElevenLabs ${h.providers.elevenlabs ? "van" : "nincs"}.`);
    } catch (e) { setStatus("#probeResult", "Nem érhető el: " + e.message, true); }
  };
  $("#listModels").onclick = async () => {
    readSettings(); await resolveCreds();
    const provider = settings.textProvider || textChoice().provider;
    if (!creds || !provider) return setStatus("#listResult", "Nincs szövegmodell-forrás.", true);
    try { const r = await creds.textModels(provider); $("#textModelList").innerHTML = r.models.map(m => `<option value="${esc(m)}">`).join(""); setStatus("#listResult", r.models.length + " modell; kattints a mezőbe a listához."); }
    catch (e) { setStatus("#listResult", e.message, true); }
  };
  $("#wipeAll").onclick = async () => {
    if (!confirm("Biztosan törlöd az összes helyi beszélgetést, felvételt, elemzést és forgatókönyv-verziót?")) return;
    for (const s of ["convs", "audio", "scripts", "kv"]) await store.clear(s);
    scripts = []; activeId = null; await loadScripts(); await renderHistory(); $("#histDetail").innerHTML = ""; $("#anaView").innerHTML = "";
  };
  $("#startBtn").onclick = start; $("#stopBtn").onclick = () => stop("leállítva");
  $("#firstName").oninput = renderAssembled;
  $("#verSel").onchange = () => { selectedId = $("#verSel").value; renderScripts(); };
  $("#editor").oninput = () => { renderLint(); renderDiff(); renderAssembled(); };
  $("#cmpSel").onchange = renderDiff;
  $("#saveVer").onclick = async () => {
    const text = $("#editor").value, cur = byId(selectedId);
    if (cur && cur.text === text) return setStatus("#aiStatus", "Nincs változás a kiválasztott verzióhoz képest.");
    const s = await addScript({ text, kind: "kezi", parent: cur ? cur.id : null, note: $("#verNote").value.trim() });
    $("#verNote").value = ""; selectedId = s.id; renderScripts(); setStatus("#aiStatus", `Elmentve: v${s.n}. Aktiváld, ha ezzel akarsz beszélgetni.`);
  };
  $("#activateVer").onclick = async () => { activeId = selectedId; await store.kvSet("activeScript", activeId); renderScripts(); setStatus("#aiStatus", "Aktív verzió: v" + byId(activeId).n + "."); };
  $("#dlVer").onclick = () => { const s = byId(selectedId); if (s) download(`forgatokonyv-v${s.n}.md`, $("#editor").value, "text/markdown"); };
  $("#genBtn").onclick = () => aiScript("generalt", generateRequest({ brief: $("#brief").value.trim(), reference: (byId(selectedId) || {}).text }), selectedId, $("#brief").value.trim().slice(0, 80));
  $("#refineBtn").onclick = () => {
    const base = byId(selectedId); if (!base) return;
    const ana = $("#useAnalysis").checked && lastAnalysis ? lastAnalysis.analysis : null;
    if (!$("#refineIns").value.trim() && !ana) return setStatus("#aiStatus", "Írd le, mit javítson, vagy jelöld be az elemzés felhasználását (ehhez előbb kell egy elemzett beszélgetés).", true);
    aiScript("finomitott", refineRequest({ script: base.text, instruction: $("#refineIns").value.trim(), analysis: ana }), base.id, $("#refineIns").value.trim().slice(0, 80) || "elemzés alapján");
  };
  $("#seed").value = LS.get("personaSeed", String(Math.floor(Math.random() * 1e6)));
  locks = LS.get("personaLocks", {});
  $("#seed").onchange = () => { saveLocks(); renderPersona(); };
  $("#rollBtn").onclick = () => { $("#seed").value = String(Math.floor(Math.random() * 1e6)); saveLocks(); renderPersona(); };
  $("#unlockBtn").onclick = () => { locks = {}; saveLocks(); renderPersona(); };
  $("#anaSel").onchange = () => showAnalysis($("#anaSel").value);
  $("#anaRun").onclick = () => $("#anaSel").value && analyze($("#anaSel").value);
  $("#exportBtn").onclick = async () => download(`hangugynok-labor-export-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(await store.exportAll(), null, 1));
  $("#importFile").onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try { const r = await store.importAll(JSON.parse(await f.text())); await loadScripts(); await renderHistory(); alert(r.n + " elem importálva" + (r.skipped ? ", " + r.skipped + " hibás elem kihagyva." : ".")); }
    catch (err) { alert("Az importálás nem sikerült: " + err.message); }
    e.target.value = "";
  };
  window.addEventListener("pagehide", () => {   // best effort: store what we have before the page goes away
    if (!run || run.saved) return;
    const snap = run.conv.snapshot("oldal bezárva");
    if (snap.transcript.some(l => l.role !== "sys")) { run.saved = true; store.put("convs", { id: uid("c-"), ...snap, ...run.meta }).catch(() => {}); }
    run.conv.finish("oldal bezárva");
  });
  renderPersona();
  try { await loadScripts(); await renderHistory(); }
  catch (e) { setStatus("#status", "A böngésző helyi tárolója nem érhető el (privát ablak?): " + e.message, true); }
  await resolveCreds();
}
init();
