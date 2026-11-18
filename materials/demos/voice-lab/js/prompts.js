// Prompt assembly: the single source for what every model receives (voice sessions, text simulation, LLM helpers).
// Brand rule: written/UI text says "Wenova"; text that a voice agent speaks may use the phonetic "Vínova".

// Canonical facts the analysis checks against (they must match the default script).
export const FACTS = [
  "Esemény: Wenova AI Sales & Marketing Workshop, 2026. november 19., csütörtök, 9:00–17:00 (érkezés 8:30-tól).",
  "Helyszín: CEU Nádor Event Center, Budapest V., Nádor utca 15.",
  "Listaár: 96 000 Ft + ÁFA (bruttó 121 920 Ft).",
  "Egyetlen ajánlat: LATE20 kupon = 20% kedvezmény a listaárból → 76 800 Ft + ÁFA = 97 536 Ft bruttó; a kupont a foglalási rendszerben, jelentkezéskor kell megadni.",
  "Más kedvezmény (pl. 50%, ingyenes hely, csoportos ár, részletfizetés) NINCS. A kupon határideje nem ismert (a kolléga e-mailben megírja).",
  "Laptop kötelező, kölcsöngép nincs; Claude-előfizetés (Pro vagy magasabb) ajánlott.",
  "A hívás néhány nappal a workshop előtt történik (hétfő, november 16.): \"holnap\", \"utolsó nap\", \"ma éjfélig\" téves.",
  "Az asszisztens mesterséges intelligencia; ha kérdezik, ezt őszintén meg kell mondania.",
].join("\n");

const HEADER = `# Hangos beszélgetés

Anyanyelvi magyar kiejtéssel, természetes magyar hanglejtéssel beszélj; ne használj angol akcentust.
Mindig magyarul beszélj, akkor is, ha a másik fél más nyelven szól. Ha közbeszólnak, azonnal hagyd abba, hallgasd meg, és arra válaszolj.
A nyitómondatot akkor mondd, amikor erre utasítást kapsz. A nyitómondat:

"{opening}"

Ezután kövesd az alábbi forgatókönyvet. Ha elköszöntél, ne beszélj tovább.

`;
const FALLBACK_OPENING = "{{greeting}} {{agent_name}} vagyok, a Vínova mesterséges intelligencia asszisztense. Van két perce?";

export const stripComments = s => String(s || "").replace(/<!--[\s\S]*?-->/g, "");
export const fill = (text, vars) => String(text).replace(/\{\{\s*(\w+)\s*\}\}/g, (m, k) => (k in vars ? vars[k] : m));

/** Split a script into its opening sentence (## Nyitómondat, first paragraph, quotes removed) and the rest. */
export function parseScript(md) {
  const text = stripComments(md).replace(/\r\n/g, "\n");
  const m = /^#{1,3}\s*Nyitómondat\s*\n+([\s\S]*?)(?=\n#{1,3}\s|\s*$)/m.exec(text);
  if (!m) return { opening: FALLBACK_OPENING, body: text.trim(), hasOpening: false };
  const para = m[1].trim().split(/\n\s*\n/)[0].trim().replace(/^["„“]+|["”“]+$/g, "").trim();
  return { opening: para || FALLBACK_OPENING, body: (text.slice(0, m.index) + text.slice(m.index + m[0].length)).replace(/\n{3,}/g, "\n\n").trim(), hasOpening: !!para };
}

export function vars({ firstName = "", agentName = "Nova" } = {}) {
  const n = String(firstName || "").trim();
  return { first_name: n, agent_name: agentName, greeting: n ? `Jó napot kívánok, ${n}!` : "Jó napot kívánok!" };
}

/** Seller (voice agent) instructions + the opening line and the command that makes the model say it. */
export function sellerInstructions(scriptMd, opts = {}) {
  const v = vars(opts), p = parseScript(scriptMd);
  const opening = fill(p.opening, v).replace(/\s+/g, " ").trim();
  const instructions = HEADER.replace("{opening}", opening) + fill(p.body, v);
  const openingCmd = `Azonnal mondd el a következőt szó szerint és teljes egészében, magyarul: "${opening}"`;
  return { instructions, opening, openingCmd };
}

/** Buyer persona instructions (voice or text). The persona is fictitious; it never contains real lead data. */
export function buyerInstructions(persona, { text = false } = {}) {
  const d = persona.fields;
  const lines = [
    "# Szerepjáték: a hívott érdeklődő",
    "",
    "Egy kitalált magyar érdeklődőt játszol, akit telefonon hív a Vínova mesterséges intelligencia asszisztense a Vínova AI Sales és Marketing Workshopja miatt. Ez gyakorló beszélgetés egy értékesítési forgatókönyv teszteléséhez.",
    "Mindig magyarul beszélj, természetes, hétköznapi magyarsággal, magázódva. Te vagy a hívott ember: ne mondd, hogy mesterséges intelligencia vagy, és ne lépj ki a szerepből.",
    "Egy megszólalásod legfeljebb egy-két rövid mondat. Ne segíts az eladónak, ne foglald össze helyette a workshopot; úgy reagálj, ahogy a lenti ember reagálna.",
    "Csak azt tudod a workshopról, amit az eladó elmond; ne találj ki árat, kupont vagy időpontot. Ha valami nem világos, kérdezz rá.",
    "Ha az eladó elköszön, köszönj el röviden te is, és utána ne szólj többet.",
    text ? "Ez szöveges szimuláció: csak a következő megszólalásod szövegét írd, idézőjel, szereplőnév és rendezői utasítás nélkül. Ha leteszed a telefont, a megszólalás végére írd: [LETESZI]" :
      "Amikor megszólal a telefon és az eladó beszélni kezd, hallgasd végig, és csak utána válaszolj.",
    "",
    "## Ki vagy",
    `- Keresztnév: ${d.firstName}${d.nameKnown === "igen" ? " (az eladó ismeri a nevedet)" : " (az eladó nem tudja a nevedet)"}`,
    `- Korosztály: ${d.ageBand}`,
    `- Munkakör: ${d.role}; cégméret: ${d.companySize}; iparág: ${d.industry}`,
    `- AI-tapasztalat: ${d.aiExperience}`,
    `- Laptop: ${d.laptop}`,
    `- Online formát jobban szeretnéd: ${d.prefersOnline}`,
    `- Döntés: ${d.decision}`,
    `- Beszédstílus: ${d.talkStyle}`,
    "",
    "## Hozzáállás",
    `- ${d.attitude}: ${ATTITUDE_HINT[d.attitude] || ""}`,
    `- Ezeket az ellenvetéseket hozd fel, ha a beszélgetés odáig jut (egyszerre egyet): ${d.objections.join("; ")}.`,
    "- Pár hete egy űrlapon érdeklődtél a workshop iránt, de nem jelentkeztél. Ha a beszélgetés meggyőz és nincs akadály, igent mondhatsz; ha nem, udvariasan elutasítod.",
  ];
  return lines.join("\n");
}
const ATTITUDE_HINT = {
  "érdeklődő": "nyitott vagy, kérdezel a tartalomról, és ha minden stimmel, szívesen jelentkezel.",
  "szkeptikus": "kételkedsz abban, hogy egy nap alatt bármi használható születik, és bizonyítékot vársz.",
  "elfoglalt": "épp dolgozol vagy úton vagy, türelmetlen vagy, gyorsan a lényeget akarod hallani.",
  "árérzékeny": "a pénz a fő kérdés, az árat sokallod, kedvezményre rákérdezel.",
  "zavarodott": "nem emlékszel pontosan, mire jelentkeztél, összekevered más tanfolyammal, és visszakérdezel.",
};

export const FAREWELL = /viszonthall[aá]sra|viszontl[aá]t[aá]sra/i;
export const isFarewell = t => FAREWELL.test(String(t || ""));

export function transcriptText(lines, names) {
  return lines.filter(l => l.role !== "sys" && String(l.text || "").trim())
    .map(l => `${names[l.role] || l.role}: ${String(l.text).trim()}`).join("\n");
}

/** One text-simulation turn (seller or buyer) for the text LLM. */
export function simTurnRequest({ role, sellerIns, buyerIns, history }) {
  const names = { seller: "ELADÓ", buyer: "ÉRDEKLŐDŐ" };
  const sofar = history.map(h => `${names[h.role]}: ${h.text}`).join("\n");
  const system = role === "seller"
    ? sellerIns + "\n\n# Szöveges szimuláció\n\nEz most szöveges szimuláció: csak a következő megszólalásod szövegét írd, idézőjel, szereplőnév és rendezői utasítás nélkül."
    : buyerIns;
  return { system, input: `Az eddigi telefonbeszélgetés:\n${sofar}\n\nMost ${names[role]} következik. Csak a következő megszólalás szövegét írd.`, max_output_tokens: 2000 };
}

const SCRIPT_RULES = `Kötelező szabályok az új forgatókönyvre:
- Szerkezet (Markdown): "# <cím>", "## Nyitómondat" (egyetlen idézőjeles mondat, a {{greeting}} és {{agent_name}} változóval kezdve), "## Személyiség", "## Kiejtés", "## Helyzet", "## A workshop tényei", "## A beszélgetés menete", "## Szabályok".
- A tények pontosan az alábbiak; ne találj ki árat, kedvezményt, határidőt, helyszámot, referenciát. Az egyetlen ajánlat a LATE20 kupon (20%). 50% vagy más kedvezmény soha nem szerepelhet.
- A hívás néhány nappal a workshop előtt történik: ne szerepeljen "holnap", "utolsó nap", "ma éjfélig".
- Előbb kérdezzen (legfeljebb 3 minősítő kérdés, egyszerre egy), csak utána ajánljon; ne legyen nyomulós; a döntésre egyszer kérdezzen rá.
- Ha kérdezik, őszintén mondja meg, hogy mesterséges intelligencia. Ha a {{first_name}} üres, ne szólítsa néven. Tiszteletteljes kilépés, "ne hívjanak többet" kezelése.
- Kiejtés: a cég neve írásban Wenova, de a hangügynök által kimondott mondatokban fonetikusan "Vínova" áll (ezt a Kiejtés szakasz írja le).
- Rövid megszólalások (legfeljebb két rövid mondat), számok kiírva. Fizetési adatot telefonon nem kér.`;

export function generateRequest({ brief, reference }) {
  return {
    system: "Magyar nyelvű telefonos értékesítési forgatókönyveket írsz egy hangalapú AI-asszisztensnek (beszédből beszéd modell). Pontos, tömör, gyakorlatias vagy.\n\n" + SCRIPT_RULES + "\n\nA workshop tényei:\n" + FACTS,
    input: `Írj egy új forgatókönyvet ehhez a megbízáshoz:\n${brief || "(nincs külön kérés: a tényekhez és a szabályokhoz illő, kiegyensúlyozott forgatókönyv)"}\n\n` +
      (reference ? `Stílusminta (a jelenlegi forgatókönyv; a jó részeit megtarthatod):\n<<<\n${reference}\n>>>\n\n` : "") +
      "Csak a forgatókönyv Markdown-szövegét add vissza, bevezető és kódblokk nélkül.",
    max_output_tokens: 12000,
  };
}

export function refineRequest({ script, instruction, analysis }) {
  const sugg = analysis ? [
    "Egy tesztbeszélgetés elemzése (ebből dolgozz):",
    `Összegzés: ${analysis.summary || ""}`,
    ...(analysis.issues || []).map(i => `- Probléma: ${i}`),
    ...(analysis.factual_errors || []).map(e => `- Ténybeli hiba: „${e.quote}” → ${e.issue} (helyesen: ${e.correct})`),
    ...(analysis.script_suggestions || []).map(s => `- Javaslat (${s.section}): ${s.change}, mert ${s.why}`),
  ].join("\n") : "";
  return {
    system: "Magyar telefonos értékesítési forgatókönyvet javítasz egy hangalapú AI-asszisztensnek. Csak azt változtasd meg, amit a kérés és az elemzés indokol; a többi részt hagyd szó szerint. \n\n" + SCRIPT_RULES + "\n\nA workshop tényei:\n" + FACTS,
    input: `A jelenlegi forgatókönyv:\n<<<\n${script}\n>>>\n\n` + (instruction ? `A szerkesztő kérése: ${instruction}\n\n` : "") + (sugg ? sugg + "\n\n" : "") +
      "Add vissza a teljes, javított forgatókönyvet Markdownban, bevezető, magyarázat és kódblokk nélkül.",
    max_output_tokens: 12000,
  };
}

export const ANALYSIS_KEYS = [
  ["script_adherence", "Forgatókönyv-követés"], ["qualification", "Minősítő kérdések"], ["objection_handling", "Ellenvetések kezelése"],
  ["non_pushiness", "Nem nyomulós"], ["factual_accuracy", "Ténybeli pontosság"],
];

export function analysisRequest({ script, conv }) {
  const names = { agent: "ELADÓ (AI)", user: "HÍVOTT", seller: "ELADÓ (AI)", buyer: "HÍVOTT (szimulált persona)" };
  const persona = conv.persona ? `\nA hívott szimulált persona: ${JSON.stringify(conv.persona.fields)}` : "";
  return {
    system: `Telefonos értékesítési beszélgetéseket értékelsz. Egy AI hangasszisztens (ELADÓ) hívott egy érdeklődőt a Wenova workshopja miatt.
Szigorú, de igazságos vagy; csak az átiratból dolgozol, nem találgatsz. A beszédfelismerés hibáit (elírt szavak) ne rójad fel az eladónak.
Az eladó szövegében a "Vínova" a Wenova fonetikus írásmódja, nem hiba.
Kizárólag egy JSON-objektumot adj vissza, ezzel a szerkezettel:
{"summary": "2-4 mondatos magyar összegzés",
 "outcome": "jelentkezik | e-mailt kér | visszahívás | nem jön | nem dőlt el | megszakadt",
 "scores": {${ANALYSIS_KEYS.map(([k]) => `"${k}": {"score": 1-5, "reason": "egy mondat"}`).join(", ")}},
 "factual_errors": [{"quote": "az eladó pontos mondata", "issue": "mi a hiba", "correct": "mi a helyes tény"}],
 "strengths": ["..."], "issues": ["..."],
 "script_suggestions": [{"section": "a forgatókönyv szakasza", "change": "konkrét új vagy átírt szabály, idézhető szöveggel", "why": "melyik átiratrész indokolja"}]}
Pontozás: 5 = kiváló, 1 = súlyos hiba. non_pushiness: 5 = egyáltalán nem nyomulós. qualification: kérdezett-e a hívott helyzetéről, mielőtt ajánlott.
factual_accuracy: hasonlítsd az eladó állításait a tényekhez (ár, dátum, helyszín, kupon, kedvezmény mértéke); minden eltérés kerüljön a factual_errors listába.
Legfeljebb 5 script_suggestions, a leghasznosabbak elöl.`,
    input: `A workshop tényei:\n${FACTS}\n\nA használt forgatókönyv:\n<<<\n${stripComments(script)}\n>>>\n${persona}\n\nMérőszámok: ${JSON.stringify(conv.metrics || {})}\n\nAz átirat:\n${transcriptText(conv.transcript || [], names)}\n\nAdd vissza az értékelést JSON-ként.`,
    json: true, max_output_tokens: 6000,
  };
}

export const stripFences = t => String(t || "").trim().replace(/^```[a-zA-Z]*\s*\n/, "").replace(/\n```\s*$/, "").trim();

export function parseJsonLoose(text) {
  const t = stripFences(text);
  try { return JSON.parse(t); } catch (e) { /* fall through */ }
  const a = t.indexOf("{"), b = t.lastIndexOf("}");
  if (a >= 0 && b > a) return JSON.parse(t.slice(a, b + 1));
  throw new Error("Az elemzés nem érvényes JSON.");
}

/** Minimal sanity checks on a generated/refined script before it is saved as a version. */
export function lintScript(md) {
  const warn = [], t = stripComments(md), low = t.toLowerCase();
  if (!parseScript(md).hasOpening) warn.push("nincs „## Nyitómondat” szakasz (alapértelmezett nyitómondat lesz)");
  if (!/LATE20/.test(t)) warn.push("nem szerepel a LATE20 kupon");
  if (/ötven százalék|50\s?%|hatvanezer/.test(low)) warn.push("50%-os kedvezmény szerepel benne");
  if (/holnapi |ma éjfélig érvényes/.test(low)) warn.push("„holnapi” vagy „ma éjfélig érvényes” szerepel benne (a hívás néhány nappal előtte van)");
  return warn;
}
