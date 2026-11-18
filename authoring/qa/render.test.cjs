'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {run,acceptCustom}=require('./render.cjs');
function fixture(fn){
 const root=fs.mkdtempSync(path.join(__dirname,'.validation-test-'));
 const put=(p,s)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),s);};
 try{fn(root,put);}finally{if(path.dirname(root)!==__dirname||!path.basename(root).startsWith('.validation-test-'))throw Error('Unsafe fixture path');fs.rmSync(root,{recursive:true});}
}
test('deterministic Hungarian Markdown, prompt whitespace, tables, anchors and instructor frame',()=>fixture((root,put)=>{
 put('materials/modules/01-demo.md','# Árvíztűrő\n\n<a name="01-demo.01-start"></a>\n\n## Feladat\n\n<a name="01-demo.01-start--prompt"></a>\n\n### Prompt\n\n```text\n  <input> & két szó\n    második sor\n```\n\n| A | B |\n| --- | --- |\n| bal | jobb |\n');
 put('operations/instructor-notes/01-demo.md','# Oktató\n\n[Tananyag](../../materials/modules/01-demo.md#01-demo.01-start--prompt)\n');
 assert.equal(run({root}),2);
 const html=fs.readFileSync(path.join(root,'materials/modules/01-demo.html'),'utf8');
 assert.match(html,/<table>/);assert.match(html,/  &lt;input&gt; &amp; két szó\n    második sor/);
 assert.equal((html.match(/data-lesson-id=/g)||[]).length,1);
 assert.match(html,/id="01-demo.01-start--prompt"/);
 assert.doesNotMatch(html,/iframe|operations\//);
 const notes=fs.readFileSync(path.join(root,'operations/instructor-notes/01-demo.html'),'utf8');
 assert.match(notes,/<iframe name="lesson"/);assert.match(notes,/01-demo.html#01-demo.01-start--prompt" target="lesson"/);
 run({root});assert.equal(fs.readFileSync(path.join(root,'materials/modules/01-demo.html'),'utf8'),html);
 assert.equal(run({root,check:true}),2);
}));
test('stale output and changed Markdown fail check without repairing files',()=>fixture((root,put)=>{
 put('README.md','# Cím\n');run({root});put('index.html','manual change');
 assert.throws(()=>run({root,check:true}),/stale HTML/);assert.equal(fs.readFileSync(path.join(root,'index.html'),'utf8'),'manual change');
 run({root});put('README.md','# Másik cím\n');assert.throws(()=>run({root,check:true}),/stale HTML/);
}));
test('missing output, orphan output and new opted-in presentation',()=>fixture((root,put)=>{
 put('talk.md','<!-- presentation -->\n# Előadás\n');assert.throws(()=>run({root,check:true}),/stale HTML/);
 run({root});assert.equal(run({root,check:true}),1);
 fs.unlinkSync(path.join(root,'talk.md'));assert.throws(()=>run({root}),/without a presentation source/);
}));
test('custom HTML is preserved, and either changed file invalidates correspondence acceptance',()=>fixture((root,put)=>{
 const source='<!-- presentation: custom -->\n# Saját előadás\n\nTeljes forgatókönyv.\n';
 put('talk.md',source);put('talk.html','<!doctype html><html><body><h1>Saját előadás</h1></body></html>');
 assert.throws(()=>run({root}),/custom/);acceptCustom('talk.md',root);
 const accepted=fs.readFileSync(path.join(root,'talk.html'),'utf8');run({root});assert.equal(fs.readFileSync(path.join(root,'talk.html'),'utf8'),accepted);
 put('talk.md',source+'Új dia.\n');assert.throws(()=>run({root,check:true}),/custom/);
 put('talk.md',source);put('talk.html',accepted.replace('Saját előadás','Más tartalom'));assert.throws(()=>run({root,check:true}),/custom/);
}));
test('raw HTML injections and duplicate anchors in generated source fail',()=>fixture((root,put)=>{
 put('README.md','# Cím\n\n<script>alert(1)</script>\n');assert.throws(()=>run({root}),/use Markdown/);
 put('README.md','# Cím\n\n<a name="same"></a>\n\n## Egy\n\n<a name="same"></a>\n\n## Kettő\n');assert.throws(()=>run({root}),/duplicate anchor/);
}));
test('partner band on every page, block lead, step cards and schedule-driven timeline',()=>fixture((root,put)=>{
 put('materials/assets/logos/brandiseer-icon.png','x');
 put('materials/schedule.md','<!-- presentation -->\n# A nap menete\n\n| Idő | Blokk | Partner | Előadók | Mit építesz |\n| --- | --- | --- | --- | --- |\n| 10:45–12:15 | [2. Tartalom](modules/02-demo.md) | Brandiseer | Sorok Dániel | Márkabrief |\n| 12:15–13:00 | Ebéd |  |  |  |\n');
 put('materials/modules/02-demo.md','# Tartalom\n\n[HTML-változat](02-demo.html)\n\n<a name="02-demo.01-brief"></a>\n\n## Brief\n\n<a name="02-demo.01-brief--section-1"></a>\n\n### Ezt kérd Claude-tól\n\n```text\nprompt\n```\n\n### Ellenőrizd az eredményt\n\n- kész\n');
 put('operations/instructor-notes/02-demo.md','# Oktató\n');
 run({root});
 const html=fs.readFileSync(path.join(root,'materials/modules/02-demo.html'),'utf8');
 assert.equal((html.match(/<div class="partner-band /g)||[]).length,2);
 assert.match(html,/partner partner--brandiseer is-lead/);assert.match(html,/src="\.\.\/assets\/logos\/brandiseer-icon\.png"/);
 assert.match(html,/<span class="logo-word">EstiWise<\/span>/,'missing logo file falls back to text');
 assert.match(html,/block-banner block-banner--brandiseer.*10:45–12:15.*Sorok Dániel/s);
 assert.match(html,/<div class="cell cell--prompt">\n<a id="02-demo.01-brief--section-1"><\/a>\n<h3 class="cell-title"/);
 assert.match(html,/<div class="cell cell--check">/);assert.match(html,/class="lesson-heading"/);
 assert.doesNotMatch(html,/HTML-változat/);
 const day=fs.readFileSync(path.join(root,'materials/schedule.html'),'utf8');
 assert.match(day,/<ol class="timeline">/);assert.match(day,/slot slot--brandiseer slot--module/);assert.match(day,/href="modules\/02-demo.html"/);assert.match(day,/slot slot--pause/);
 assert.match(fs.readFileSync(path.join(root,'operations/instructor-notes/02-demo.html'),'utf8'),/is-lead/);
}));
module.exports={fixture};
