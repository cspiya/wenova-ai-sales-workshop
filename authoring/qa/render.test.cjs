'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {run,acceptCustom,custom,render,files,output,inventory,ROOT,SITE_URL,AREAS}=require('./render.cjs');
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
test('copy hint, collapsible phone contents, status label and direct module link',()=>fixture((root,put)=>{
 put('materials/modules/01-demo.md','# Modul\n\n**Állapot: draft.** Ez a bevezető.\n\n<a name="01-demo.01-start"></a>\n\n## Lecke\n\n### Ezt kérd Claude-tól\n\n```text\negy\nkettő\n```\n\n```text\nhárom\n```\n');
 put('operations/instructor-notes/01-demo.md','# Oktató\n\n[Kapcsolódó tananyag](../../materials/modules/01-demo.md)\n\n[Lecke](../../materials/modules/01-demo.md#01-demo.01-start)\n');
 run({root});
 const html=fs.readFileSync(path.join(root,'materials/modules/01-demo.html'),'utf8');
 assert.equal((html.match(/class="copy-hint"/g)||[]).length,1,'one hint per section');
 assert.match(html,/<p class="state"><strong>Állapot: draft\.<\/strong><\/p>\n<p class="lead">Ez a bevezető\.<\/p>/);
 assert.match(html,/<\/header>\n<details class="toc-mobile"><summary>Tartalom<\/summary>.*href="#01-demo\.01-start"/);
 assert.match(html,/<nav class="toc" aria-label="Tartalom">/);assert.doesNotMatch(html,/<script/);
 const notes=fs.readFileSync(path.join(root,'operations/instructor-notes/01-demo.html'),'utf8');
 assert.match(notes,/<a href="\.\.\/\.\.\/materials\/modules\/01-demo\.html">Kapcsolódó tananyag<\/a>/);
 assert.match(notes,/01-demo\.html#01-demo\.01-start" target="lesson"/);assert.doesNotMatch(notes,/toc-mobile|copy-hint/);
}));
test('instructor lesson pane src has no fragment, so opening a note does not scroll the page',()=>fixture((root,put)=>{
 put('materials/modules/01-demo.md','# Modul\n\n<a name="overview"></a>\n\n## Áttekintés\n');
 put('operations/instructor-notes/01-demo.md','# Oktató\n');
 run({root});
 assert.match(fs.readFileSync(path.join(root,'operations/instructor-notes/01-demo.html'),'utf8'),/<iframe name="lesson" src="\.\.\/\.\.\/materials\/modules\/01-demo\.html"/);
}));
test('internal links stay on published pages, working files stay direct and prompt text is untouched',()=>fixture((root,put)=>{
 put('materials/README.md','# Kezdőlap\n\n[Modul](modules/01-demo.md#01-demo.01-start) · [Repo](https://github.com/cspiya/wenova-ai-sales-workshop/tree/main/materials) · [Oldal](https://github.com/cspiya/wenova-ai-sales-workshop/blob/main/materials/modules/01-demo.md) · [Labor](https://cspiya.github.io/wenova-ai-sales-workshop/materials/demos/app.htm) · [Lista](starter/leads.csv) · [Sablon](starter/plan.md) · [ZIP](https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip)\n\n```text\nhttps://github.com/cspiya/wenova-ai-sales-workshop/blob/main/materials/modules/01-demo.md\n```\n');
 put('materials/modules/01-demo.md','# Modul\n\n<a name="01-demo.01-start"></a>\n\n## Lecke\n\nMásold a lenti promptot.\n\n<a name="01-demo.01-start--prompt"></a>\n\n### Ezt kérd Claude-tól\n\n```text\negy\n```\n');
 run({root});
 const html=fs.readFileSync(path.join(root,'materials/index.html'),'utf8'),links=[...html.matchAll(/<a href="([^"]+)"[^>]*>([^<]*)<\/a>/g)].map(m=>m[1]);
 for(const href of ['modules/01-demo.html#01-demo.01-start','index.html','modules/01-demo.html','starter/leads.csv','starter/plan.md'])assert.ok(links.includes(href),href);
 assert.match(html,/<a href="https:\/\/cspiya\.github\.io\/wenova-ai-sales-workshop\/materials\/demos\/app\.htm" target="_blank" rel="noopener noreferrer">Labor<\/a>/,'the published lab address stays absolute');
 assert.doesNotMatch(html,/<a href="[^"]*(?:modules\/01-demo\.md|\/blob\/main|\/tree\/main)/);
 assert.match(html,/<code class="language-text">https:\/\/github\.com\/cspiya\/wenova-ai-sales-workshop\/blob\/main\/materials\/modules\/01-demo\.md/);
 assert.match(fs.readFileSync(path.join(root,'materials/modules/01-demo.html'),'utf8'),/<a href="#01-demo\.01-start--prompt">lenti promptot<\/a>/);
}));
test('external links open in a new window, internal links stay in the same one',()=>fixture((root,put)=>{
 put('materials/README.md','# Kezdőlap\n\n[Külső](https://example.com/a) · [Belső](modules/01-demo.md) · [Levél](mailto:info@example.com)\n');
 put('materials/modules/01-demo.md','# Modul\n');
 put('operations/README.md','# Szervezés\n\n[Külső](https://example.com/b)\n');
 run({root});
 assert.match(fs.readFileSync(path.join(root,'materials/index.html'),'utf8'),/<a href="https:\/\/example\.com\/a" target="_blank" rel="noopener noreferrer">/);
 assert.match(fs.readFileSync(path.join(root,'materials/index.html'),'utf8'),/<a href="modules\/01-demo\.html">Belső/);
 assert.match(fs.readFileSync(path.join(root,'materials/index.html'),'utf8'),/<a href="mailto:info@example\.com">/);
 assert.match(fs.readFileSync(path.join(root,'operations/index.html'),'utf8'),/<a href="https:\/\/example\.com\/b" target="_blank" rel="noopener noreferrer">/);
}));
test('Markdown source is only an invisible alternate link and instructor pages are marked',()=>fixture((root,put)=>{
 put('materials/modules/01-demo.md','# Modul\n\n[HTML-változat](01-demo.html)\n');
 put('operations/README.md','# Szervezés\n');put('operations/instructor-notes/01-demo.md','# Oktató\n');
 run({root});
 const html=fs.readFileSync(path.join(root,'materials/modules/01-demo.html'),'utf8');
 assert.match(html,/<head>.*<link rel="alternate" type="text\/markdown" href="01-demo\.md">.*<\/head>/s);
 assert.doesNotMatch(html,/Markdown-forrás|HTML-változat|<a [^>]*href="01-demo\.md"|<script|area--instructor/);
 for(const page of ['operations/index.html','operations/instructor-notes/01-demo.html']){const notes=fs.readFileSync(path.join(root,page),'utf8');assert.match(notes,/area--instructor/);assert.match(notes,/<div class="area-band" role="note">OKTATÓI OLDAL<\/div>/);assert.match(notes,/instructor-notes\/notes\.css|href="notes\.css"/);}
}));
test('each schedule row shows its exact workbook target and the presenter note as plain text',()=>{
 const html=render('materials/schedule.md');
 const row=time=>{const part=html.split('<li class="slot').find(s=>s.includes('<p class="slot__time">'+time+'</p>'));assert.ok(part,time);return part;};
 const note='Az előadó vetíti';
 for(const [time,links] of [
  ['08:30–09:00','<a href="modules/00-prework.html">Munkafüzet</a>'],
  ['09:00–09:20','<a href="presentations/00-nyito-eloadas.html">Előadás</a>'],
  ['09:20–10:30','<a href="modules/01-business-foundations.html">Munkafüzet</a> · '+note],
  ['10:45–12:15','<a href="modules/02-content-marketing.html">Munkafüzet</a> · '+note],
  ['13:00–14:30','<a href="modules/03-lead-generation.html">Munkafüzet</a> · '+note],
  ['14:45–16:15','<a href="modules/04-proposals-handoff.html">Munkafüzet</a> · '+note],
  ['16:15–16:50','<a href="modules/05-pipeline-review.html">Munkafüzet</a> · <a href="presentations/05-zaro-eloadas.html">Előadás</a> · <a href="presentations/05-zaro-eloadas-jegyzet.html">Előadói jegyzet</a>'],
  ['16:50–17:00','<a href="modules/05-pipeline-review.html#05-pipeline-review.03-measure-launch">Munkafüzet</a> · <a href="presentations/05-zaro-eloadas.html">Előadás</a>'],
 ])assert.ok(row(time).includes('<p class="slot__links">'+links+'</p>'),time);
});
test('every HTML-változat link in a Markdown source points to its published page',()=>{
 const sources=files().filter(p=>p==='README.md'||/^(?:materials|operations|authoring)\/.*\.md$/.test(p));let found=0;
 for(const source of sources)for(const [,target] of fs.readFileSync(path.join(ROOT,source),'utf8').matchAll(/\[HTML-változat\]\(([^)]*)\)/g)){
  found++;assert.equal(target,SITE_URL+output(source),source);assert.ok(fs.existsSync(path.join(ROOT,output(source))),output(source));
 }
 assert.ok(found>0,'no HTML-változat link found');
});
test('the published HTML-változat link stays hidden on the rendered page',()=>fixture((root,put)=>{
 put('materials/modules/01-demo.md','# Modul\n\n[HTML-változat]('+SITE_URL+'materials/modules/01-demo.html)\n');
 put('materials/README.md','# Kezdőlap\n\n[HTML-változat]('+SITE_URL+'materials/index.html)\n');
 run({root});
 for(const page of ['materials/modules/01-demo.html','materials/index.html'])assert.doesNotMatch(fs.readFileSync(path.join(root,page),'utf8'),/HTML-változat/,page);
}));
test('every page carries exactly its own audience band and theme class',()=>{
 const expected=p=>p.startsWith('materials/')?'participant':'instructor';
 const seen=new Set();
 assert.deepEqual(AREAS,{participant:'HALLGATÓI ANYAG',instructor:'OKTATÓI OLDAL'});
 for(const source of ['README.md','authoring/README.md','authoring/template.md','operations/README.md'])assert.equal(expected(source),'instructor',source);
 for(const source of inventory().filter(p=>!custom(p))){
  const html=render(source),area=expected(source);seen.add(area);
  assert.deepEqual([...html.matchAll(/<div class="area-band" role="note">([^<]*)<\/div>/g)].map(m=>m[1]),[AREAS[area]],source);
  assert.deepEqual([...html.match(/<body class="([^"]*)"/)[1].matchAll(/area--(\w+)/g)].map(m=>m[1]),[area],source);
  if(area==='participant')assert.doesNotMatch(html,/<script/,source);
 }
 assert.deepEqual([...seen].sort(),Object.keys(AREAS).sort());
});
test('the voice lab application carries the participant band after its skip link',()=>{
 const html=fs.readFileSync(path.join(ROOT,'materials/demos/voice-lab/app.htm'),'utf8').replace(/\r\n/g,'\n');
 assert.match(html,/<body class="area--participant">\n<a class="skip" href="#main">[^<]*<\/a>\n<div class="area-band" role="note">HALLGATÓI ANYAG<\/div>\n/);
 assert.equal((html.match(/class="area-band"/g)||[]).length,1);assert.doesNotMatch(html,/OKTATÓI OLDAL|area--instructor/);
 assert.match(fs.readFileSync(path.join(ROOT,'materials/demos/voice-lab/app.css'),'utf8'),/\.area-band \{ position:sticky; top:0;/);
});
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
