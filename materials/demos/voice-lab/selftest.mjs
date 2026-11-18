// Offline self-test of the browser modules' pure logic (no browser, no network, no keys): node selftest.mjs
import { readFileSync } from "node:fs";
import assert from "node:assert/strict";
import { parseScript, sellerInstructions, buyerInstructions, lintScript, analysisRequest, refineRequest, generateRequest, parseJsonLoose, isFarewell, simTurnRequest } from "./js/prompts.js";
import { generate, FIELDS } from "./js/persona.js";
import { diffLines } from "./js/util.js";
import { OPTIONS } from "./js/catalog.js";
import { geminiSetup } from "./js/creds.js";

const script = readFileSync(new URL("./prompts/sales-call-hu.md", import.meta.url), "utf8");
const results = [];
const t = (name, fn) => { try { fn(); results.push(["OK", name]); } catch (e) { results.push(["HIBA", name + ": " + e.message]); } };

t("a forgatókönyvnek van nyitómondata", () => assert.ok(parseScript(script).hasOpening));
t("név nélküli köszönés, ha nincs keresztnév", () => {
  const s = sellerInstructions(script, { firstName: "" });
  assert.match(s.opening, /^Jó napot kívánok! Nova vagyok, a Vínova/);
  assert.ok(!s.instructions.includes("{{"), "kitöltetlen változó maradt");
});
t("névvel köszön, ha van keresztnév", () => assert.match(sellerInstructions(script, { firstName: "Anna" }).opening, /^Jó napot kívánok, Anna!/));
t("csak a LATE20 ajánlat, nincs 50%, nincs holnapi", () => {
  const ins = sellerInstructions(script).instructions.toLowerCase();
  assert.ok(ins.includes("late20") && ins.includes("húsz százalék") && ins.includes("kilencvenhétezer-ötszázharminchat"));
  assert.ok(!/ötven százalék|50 ?%|hatvanezer|holnapi|ma éjfélig érvényes/.test(ins));
  assert.deepEqual(lintScript(script), []);
});
t("a forgatókönyv a megjegyzést nem küldi a modellnek", () => assert.ok(!sellerInstructions(script).instructions.includes("<!--")));
t("a lint jelzi az 50%-ot", () => assert.ok(lintScript("## Nyitómondat\n\n\"Szia\"\n\nötven százalék").length >= 2));
t("persona determinisztikus", () => assert.deepEqual(generate("42"), generate("42")));
t("rögzített mező nem változik, a többi független", () => {
  const a = generate("1"), b = generate("2", { attitude: "szkeptikus" }), c = generate("2");
  assert.equal(b.fields.attitude, "szkeptikus");
  for (const f of FIELDS) if (f.key !== "attitude") assert.deepEqual(b.fields[f.key], c.fields[f.key]);
  assert.ok(a.fictitious);
});
t("persona-utasítás magyar, kitalált", () => { const s = buyerInstructions(generate("7")); assert.match(s, /kitalált magyar érdeklődőt/); assert.ok(s.includes(generate("7").fields.firstName)); });
t("diff", () => { const d = diffLines("a\nb\nc", "a\nx\nc"); assert.deepEqual(d.map(x => x.op).join(""), " -+ "); });
t("elemzési kérés JSON-t kér és tartalmazza a tényeket", () => {
  const r = analysisRequest({ script, conv: { transcript: [{ role: "agent", text: "Szia" }], metrics: {} } });
  assert.ok(r.json && r.input.includes("97 536") && r.system.includes("factual_errors"));
});
t("finomítás/új forgatókönyv kérés", () => {
  assert.ok(refineRequest({ script, instruction: "rövidebb", analysis: { summary: "x", issues: ["y"] } }).input.includes("Probléma: y"));
  assert.ok(generateRequest({ brief: "teszt" }).system.includes("LATE20"));
});
t("laza JSON-olvasás", () => assert.equal(parseJsonLoose("```json\n{\"a\":1}\n```").a, 1));
t("elköszönés felismerése", () => { assert.ok(isFarewell("Köszönöm, viszonthallásra!")); assert.ok(!isFarewell("Hall engem?")); });
t("szöveges szimuláció kérés", () => assert.ok(simTurnRequest({ role: "buyer", sellerIns: "S", buyerIns: "B", history: [{ role: "seller", text: "Halló" }] }).input.includes("ELADÓ: Halló")));
t("katalógus: két előnyben részesített modell, gpt-live-1 és gemini-3.8-live", () => {
  const pref = OPTIONS.filter(o => o.preferred); assert.equal(pref.length, 2);
  assert.ok(pref[0].models.includes("gpt-live-1") && pref[1].models[0] === "gemini-3.8-live");
});
t("Gemini setup forma", () => { const s = geminiSetup("gemini-3.8-live", "Kore", "x", false); assert.equal(s.model, "models/gemini-3.8-live"); assert.ok(!s.inputAudioTranscription); });

for (const [r, n] of results) console.log(r.padEnd(5), n);
process.exitCode = results.some(([r]) => r !== "OK") ? 1 : 0;
