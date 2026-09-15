/* Optional reviewer helper. Node built-ins only. Does not build or modify lessons. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '../..');
const rel = p => path.relative(root, p).split(path.sep).join('/');
const inside = p => p === root || p.startsWith(root + path.sep);
const hash = text => crypto.createHash('sha256').update(text).digest('hex');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map(m => [m[1].toLowerCase(), m[3]]));
const tags = (text, name) => [...text.matchAll(new RegExp('<'+name+'\\b[^>]*>', 'gi'))].map(m => attrs(m[0]));
const clean = text => text.replace(/<!--[\s\S]*?-->/g, '');
const ids = text => [...clean(text).matchAll(/<[a-z][^>]*>/gi)].map(m => attrs(m[0]).id).filter(Boolean);
function validate(file) {
  const checks = [], dependencies = new Map();
  const add = (id, ok, detail) => checks.push({id, result: ok ? 'Megfelel' : 'Javítandó', detail});
  function read(p) { const bytes=fs.readFileSync(p); dependencies.set(rel(p),hash(bytes)); return bytes.toString('utf8'); }
  if (!inside(file) || path.extname(file) !== '.html' || !fs.existsSync(file)) {
    return {file: rel(file), checks:[{id:'INPUT', result:'Javítandó', detail:'Létező, repón belüli HTML-fájl szükséges.'}], dependencies:{}};
  }
  const text=clean(read(file)), allIds=ids(text);
  add('T1-source', /<!doctype html>/i.test(text) && tags(text,'html').some(a=>a.lang==='hu') &&
    /<title>[^<]+<\/title>/i.test(text) && (text.match(/<h1\b/gi)||[]).length===1 &&
    tags(text,'meta').some(a=>a.name==='viewport'), 'DOCTYPE, magyar nyelv, cím, egy h1 és viewport. Nem böngészős próba.');
  add('T3-ids', new Set(allIds).size===allIds.length, 'Egyedi HTML-azonosítók.');
  const links=[...text.matchAll(/<(?:a|link|img|script|source)\b[^>]*>/gi)].map(m=>({tag:m[0].match(/^<(\w+)/)[1].toLowerCase(),a:attrs(m[0])}));
  const cssFiles=[];
  for (const {tag,a} of links) {
    const target=a.href||a.src;
    if (!target) continue;
    if (/^(https?:)?\/\//i.test(target)) {
      checks.push({id:tag==='a'?'T3-external':'T2-external',result:tag==='a'?'Nem ellenőrzött':'Javítandó',detail:target});
      continue;
    }
    if (/^(data:|mailto:|tel:)/i.test(target)) continue;
    if (/^[a-z][\w+.-]*:/i.test(target) || target.startsWith('/')) {
      add('T3-link',false, 'Nem hordozható helyi hivatkozás: '+target); continue;
    }
    let decoded;
    try { decoded=decodeURIComponent(target.replace(/&amp;/g,'&')); } catch { add('T3-link',false,'Hibás URL: '+target); continue; }
    const [dest,anchor]=decoded.split('#');
    const resolved=dest ? path.resolve(path.dirname(file),dest.split('?')[0]) : file;
    const exists=inside(resolved)&&fs.existsSync(resolved);
    add('T3-link',exists,target);
    if (!exists || !fs.statSync(resolved).isFile()) continue;
    const linked=read(resolved);
    if (anchor && /\.html$/i.test(resolved)) add('T3-anchor',ids(linked).includes(anchor),target);
    if (tag==='link' && a.rel==='stylesheet') cssFiles.push(resolved);
    if (tag==='script') checks.push({id:'T2-script',result:'Nem ellenőrzött',detail:'Olvasás JavaScript nélkül is kipróbálandó: '+target});
  }
  add('T2-css',cssFiles.includes(path.join(root,'materials','assets','notebook.css')), 'A közös materials/assets/notebook.css hivatkozott és elérhető.');
  for (const css of cssFiles) {
    const content=fs.readFileSync(css,'utf8');
    add('T2-css-offline',!/@import\b|url\s*\(\s*["']?(?:https?:|\/\/)/i.test(content),'CSS külső import nélkül: '+rel(css));
  }
  const visible=text.replace(/<[^>]*>/g,' ');
  add('T4-placeholder',!(/\{\{|\bTODO\b|\bTBD\b|Szerzői feladat:|\[IDE[^\]]*\]|\[KITÖLTENDŐ\]/i.test(visible)), 'Ismert kitöltetlen sablonjelölések szűrése; szemantikai review külön szükséges.');
  add('T4-meta',/data-(?:lesson|module)-id\s*=/.test(text) && /\b(?:draft|review|ready)\b/.test(visible) && /\d+\s*perc/.test(visible), 'Leckeazonosító, állapot és időkeret szerepel. Partner és tartalom kézi reviewban.');
  for (const item of ['T1-render','T5','R1–R8','P1–P4']) checks.push({id:item,result:'Nem ellenőrzött',detail:'Böngészős, tartalmi vagy emberi ellenőrzést igényel.'});
  return {file:rel(file),checks,dependencies:Object.fromEntries(dependencies)};
}
function run(args) {
  if (!args.length) { console.error('Adj meg legalább egy tananyag HTML-útvonalat.'); return 2; }
  const results=args.map(arg=>validate(path.resolve(root,arg)));
  console.log(JSON.stringify({tool:'Wenova static material checks v1',date:new Date().toISOString(),scope:'Statikus alapszűrés; nem elfogadás.',results},null,2));
  return results.some(r=>r.checks.some(c=>c.result==='Javítandó'))?1:0;
}
if (require.main===module) process.exitCode=run(process.argv.slice(2));
module.exports={validate,root};
