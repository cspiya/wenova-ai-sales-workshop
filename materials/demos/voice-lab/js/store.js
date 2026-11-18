// Browser-side storage (IndexedDB): script versions, conversations (+ analyses), audio blobs, small settings.
// Everything stays in this browser profile; export/import moves it between machines.
const DB = "wenova-voice-lab", VERSION = 1;
let dbp = null;

function open() {
  if (dbp) return dbp;
  dbp = new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      for (const s of ["scripts", "convs", "audio", "kv"]) if (!db.objectStoreNames.contains(s)) db.createObjectStore(s, s === "kv" ? undefined : { keyPath: "id" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  return dbp;
}
async function tx(store, mode, fn) {
  const db = await open();
  return new Promise((resolve, reject) => {
    const t = db.transaction(store, mode), s = t.objectStore(store);
    const r = fn(s);
    t.oncomplete = () => resolve(r && "result" in r ? r.result : undefined);
    t.onerror = () => reject(t.error);
    t.onabort = () => reject(t.error);
  });
}
export const all = store => tx(store, "readonly", s => s.getAll());
export const get = (store, id) => tx(store, "readonly", s => s.get(id));
export const put = (store, obj, key) => tx(store, "readwrite", s => (key === undefined ? s.put(obj) : s.put(obj, key)));
export const del = (store, id) => tx(store, "readwrite", s => s.delete(id));
export const clear = store => tx(store, "readwrite", s => s.clear());
export const kvGet = key => get("kv", key);
export const kvSet = (key, value) => put("kv", value, key);

export async function exportAll() {
  return { format: "wenova-voice-lab-export", version: 1, exported_at: new Date().toISOString(),
    scripts: await all("scripts"), conversations: await all("convs"), active_script: await kvGet("activeScript") };
}
export async function importAll(data) {
  if (!data || data.format !== "wenova-voice-lab-export") throw new Error("Ez nem a hangügynök-labor exportfájlja.");
  let n = 0;
  for (const s of data.scripts || []) if (s && s.id && typeof s.text === "string") { await put("scripts", s); n++; }
  for (const c of data.conversations || []) if (c && c.id) { await put("convs", c); n++; }
  return n;
}
