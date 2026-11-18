export const $ = (s, el = document) => el.querySelector(s);
export const $$ = (s, el = document) => [...el.querySelectorAll(s)];
export const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const median = a => { const v = a.filter(x => x != null); if (!v.length) return null; const s = [...v].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2); };
export const uid = (p = "") => p + new Date().toISOString().replace(/[-:T.Z]/g, "").slice(0, 14) + "-" + Math.random().toString(36).slice(2, 7);
export const fmtTime = ts => new Date(ts).toLocaleString("hu-HU", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
export const clock = ts => { const d = new Date(ts); return d.toTimeString().slice(0, 8); };
export const sleep = ms => new Promise(r => setTimeout(r, ms));

/** Deterministic PRNG (mulberry32). */
export function rng(seed) {
  let a = seed >>> 0;
  return () => { a = (a + 0x6D2B79F5) >>> 0; let t = a; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
export const hashStr = s => { let h = 2166136261; for (const c of String(s)) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); } return h >>> 0; };

/** Line diff (LCS). Returns [{op:" "|"-"|"+", text}]. */
export function diffLines(a, b) {
  const x = String(a).replace(/\r\n/g, "\n").split("\n"), y = String(b).replace(/\r\n/g, "\n").split("\n");
  const n = x.length, m = y.length;
  if (n * m > 4e6) return [...x.map(t => ({ op: "-", text: t })), ...y.map(t => ({ op: "+", text: t }))];
  const L = Array.from({ length: n + 1 }, () => new Uint32Array(m + 1));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) L[i][j] = x[i] === y[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const out = []; let i = 0, j = 0;
  while (i < n && j < m) {
    if (x[i] === y[j]) { out.push({ op: " ", text: x[i] }); i++; j++; }
    else if (L[i + 1][j] >= L[i][j + 1]) out.push({ op: "-", text: x[i++] });
    else out.push({ op: "+", text: y[j++] });
  }
  while (i < n) out.push({ op: "-", text: x[i++] });
  while (j < m) out.push({ op: "+", text: y[j++] });
  return out;
}

export function download(name, data, type = "application/json") {
  const blob = data instanceof Blob ? data : new Blob([data], { type });
  const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
  document.body.append(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
