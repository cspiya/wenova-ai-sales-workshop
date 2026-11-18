// Normalisation of stored/imported records. Everything that comes from IndexedDB or an import file is treated as
// untrusted: unknown fields are dropped, ids/enums are validated, strings and numbers are coerced and capped.
import { ANALYSIS_KEYS } from "./prompts.js";

export const ID_RE = /^[A-Za-z0-9_-]{1,80}$/;
const ROLES = ["user", "agent", "seller", "buyer", "sys"];
const MODES = ["human", "voice-duel", "text-duel"];
const SCRIPT_KINDS = ["alap", "kezi", "generalt", "finomitott", "elemzesbol", "import"];
const METRIC_KEYS = ["agent", "seller", "buyer"];

const str = (v, max = 4000) => (typeof v === "string" ? v.slice(0, max) : v == null ? "" : String(v).slice(0, max));
const strOrNull = (v, max = 200) => (v == null || v === "" ? null : str(v, max));
const num = (v, d = null) => (v === null || v === "" || v === undefined || !Number.isFinite(+v) ? d : +v);
const arr = v => (Array.isArray(v) ? v : []);
const iso = (v, d) => (typeof v === "string" && !Number.isNaN(Date.parse(v)) ? new Date(Date.parse(v)).toISOString() : d);
const id = v => (ID_RE.test(String(v ?? "")) ? String(v) : null);

export function normAnalysis(a) {
  if (!a || typeof a !== "object") return null;
  const scores = {};
  for (const [k] of ANALYSIS_KEYS) {
    const s = (a.scores && typeof a.scores === "object" && a.scores[k]) || {};
    scores[k] = { score: Math.max(0, Math.min(5, Math.round(num(s.score, 0)))), reason: str(s.reason, 600) };
  }
  return {
    summary: str(a.summary, 3000), outcome: str(a.outcome, 80), model: str(a.model, 120), at: iso(a.at, null),
    scores,
    factual_errors: arr(a.factual_errors).slice(0, 30).map(e => ({ quote: str(e && e.quote, 600), issue: str(e && e.issue, 600), correct: str(e && e.correct, 600) })),
    strengths: arr(a.strengths).slice(0, 20).map(x => str(x, 600)),
    issues: arr(a.issues).slice(0, 20).map(x => str(x, 600)),
    script_suggestions: arr(a.script_suggestions).slice(0, 10).map(s => ({ section: str(s && s.section, 120), change: str(s && s.change, 1500), why: str(s && s.why, 600) })),
  };
}

function normMeter(m) {
  m = m && typeof m === "object" ? m : {};
  const nums = v => arr(v).slice(0, 500).map(x => num(x, null));
  return { label: str(m.label, 20), latency_ms: nums(m.latency_ms).filter(x => x != null), latency_median_ms: num(m.latency_median_ms),
    event_latency_ms: nums(m.event_latency_ms).filter(x => x != null), event_latency_median_ms: num(m.event_latency_median_ms),
    barge_ins: nums(m.barge_ins), barge_stop_median_ms: num(m.barge_stop_median_ms), barge_not_stopped: num(m.barge_not_stopped, 0) };
}

function normPersona(p) {
  if (!p || typeof p !== "object" || !p.fields || typeof p.fields !== "object") return null;
  const fields = {};
  for (const [k, v] of Object.entries(p.fields).slice(0, 30)) {
    if (!/^[A-Za-z]{1,30}$/.test(k)) continue;
    fields[k] = Array.isArray(v) ? v.slice(0, 10).map(x => str(x, 200)) : str(v, 200);
  }
  return { seed: str(p.seed, 40), fields, fictitious: true };
}

/** A conversation record, or null if it cannot be used. */
export function normConv(c) {
  if (!c || typeof c !== "object" || !id(c.id)) return null;
  const metrics = {};
  const m = c.metrics && typeof c.metrics === "object" ? c.metrics : {};
  for (const k of METRIC_KEYS) if (m[k]) metrics[k] = normMeter(m[k]);
  if (Array.isArray(m.text_turn_ms)) metrics.text_turn_ms = m.text_turn_ms.slice(0, 200).map(x => ({ role: ROLES.includes(x && x.role) ? x.role : "sys", ms: num(x && x.ms, 0) }));
  const started = iso(c.started_at, new Date(0).toISOString());
  return {
    id: c.id, mode: MODES.includes(c.mode) ? c.mode : "human", started_at: started, ended_at: iso(c.ended_at, started),
    end_reason: str(c.end_reason, 200), duration_s: Math.max(0, Math.round(num(c.duration_s, 0))),
    participants: arr(c.participants).slice(0, 4).map(p => ({ role: ROLES.includes(p && p.role) ? p.role : "agent", option: str(p && p.option, 40),
      provider: str(p && p.provider, 40), model: str(p && p.model, 80), voice: strOrNull(p && p.voice, 60), session_id: strOrNull(p && p.session_id, 120) })),
    transcript: arr(c.transcript).slice(0, 2000).filter(l => l && typeof l === "object").map(l => ({ t: iso(l.t, started), role: ROLES.includes(l.role) ? l.role : "sys", text: str(l.text, 4000) })),
    metrics, errors: arr(c.errors).slice(0, 50).map(e => str(e, 500)),
    script: c.script && typeof c.script === "object" ? { id: id(c.script.id), n: Math.max(0, Math.round(num(c.script.n, 0))), kind: SCRIPT_KINDS.includes(c.script.kind) ? c.script.kind : "import", note: str(c.script.note, 200) } : null,
    persona: normPersona(c.persona), first_name_used: strOrNull(c.first_name_used, 40),
    audio: c.audio && typeof c.audio === "object" ? { mime: str(c.audio.mime, 60), bytes: Math.max(0, num(c.audio.bytes, 0)) } : null,
    analysis: normAnalysis(c.analysis),
  };
}

/** A script version, or null. */
export function normScript(s) {
  if (!s || typeof s !== "object" || !id(s.id) || typeof s.text !== "string" || !s.text.trim()) return null;
  const out = { id: s.id, n: Math.max(1, Math.round(num(s.n, 1))), kind: SCRIPT_KINDS.includes(s.kind) ? s.kind : "import", note: str(s.note, 200),
    parent: id(s.parent), text: s.text.slice(0, 60000), createdAt: num(s.createdAt, Date.now()) };
  if (typeof s.builtinHash === "string" && /^[a-z0-9]{1,16}$/.test(s.builtinHash)) out.builtinHash = s.builtinHash;
  return out;
}
