// Fictitious buyer personas for model-vs-model runs. All names and traits are invented; never use real lead data.
import { rng, hashStr } from "./util.js";

export const FIELDS = [
  { key: "firstName", label: "Keresztnév (kitalált)", values: ["Anna", "Bence", "Csilla", "Dániel", "Eszter", "Gábor", "Hajnalka", "István", "Judit", "Károly", "Laura", "Márton", "Noémi", "Péter", "Réka", "Tamás", "Zsófia", "Viktor"] },
  { key: "nameKnown", label: "Az eladó ismeri a nevét", values: ["igen", "nem"] },
  { key: "ageBand", label: "Korosztály", values: ["25–34 év", "35–44 év", "45–54 év", "55–64 év"] },
  { key: "role", label: "Munkakör", values: ["ügyvezető, tulajdonos", "marketingvezető", "értékesítési vezető", "egyéni vállalkozó", "értékesítő", "irodavezető", "üzletfejlesztési munkatárs"] },
  { key: "companySize", label: "Cégméret", values: ["egyéni vállalkozás", "2–9 fő", "10–49 fő", "50–249 fő", "250 fő felett"] },
  { key: "industry", label: "Iparág", values: ["ingatlanközvetítés", "IT-szolgáltatás", "gyártás", "felnőttképzés, tréning", "magánrendelő", "könyvelőiroda", "webáruház", "építőipar", "rendezvényszervezés", "marketingügynökség"] },
  { key: "attitude", label: "Hozzáállás", values: ["érdeklődő", "szkeptikus", "elfoglalt", "árérzékeny", "zavarodott"] },
  { key: "objections", label: "Ellenvetések", multi: 2, values: ["drágának tartja", "csütörtökön nem biztos, hogy ráér", "nem tudja, mi pontosan a workshop", "már használ ChatGPT-t, nem érti, minek ez", "inkább online venne részt", "a főnöke vagy a társa dönt", "nem emlékszik, hogy érdeklődött", "épp vezet, nem alkalmas a beszélgetés"] },
  { key: "laptop", label: "Laptop", values: ["van, el tudja hozni", "nincs", "csak céges gép, nem biztos, hogy elhozhatja"] },
  { key: "prefersOnline", label: "Online formát preferál", values: ["igen", "nem", "mindegy"] },
  { key: "aiExperience", label: "AI-tapasztalat", values: ["még nem használt AI-t", "néha ChatGPT-t használ", "rendszeresen használ AI-eszközöket"] },
  { key: "talkStyle", label: "Beszédstílus", values: ["szűkszavú", "beszédes", "gyakran közbevág"] },
  { key: "decision", label: "Döntés", values: ["maga dönt", "egyeztetnie kell valakivel"] },
];

/** Same seed + same locks -> same persona. Each field draws from its own stream, so locking one never shifts the others. */
export function generate(seed, locked = {}) {
  const fields = {};
  for (const f of FIELDS) {
    if (locked[f.key] !== undefined) { fields[f.key] = locked[f.key]; continue; }
    const r = rng(hashStr(seed + ":" + f.key));
    if (f.multi) {
      const pool = [...f.values], pick = [];
      for (let i = 0; i < f.multi; i++) pick.push(pool.splice(Math.floor(r() * pool.length), 1)[0]);
      fields[f.key] = pick;
    } else fields[f.key] = f.values[Math.floor(r() * f.values.length)];
  }
  return { seed: String(seed), fields, fictitious: true };
}

export const summary = p => {
  const d = p.fields;
  return `${d.firstName}, ${d.ageBand}, ${d.role} (${d.companySize}, ${d.industry}) · ${d.attitude} · laptop: ${d.laptop}`;
};
