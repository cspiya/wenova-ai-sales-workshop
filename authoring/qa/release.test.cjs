'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {POINTS,APPROVAL,fingerprint,readiness,release}=require('./release.cjs');
const {run}=require('./render.cjs');
test('release blocks draft/missing evidence/stale approval and packages only approved materials',()=>{
 const root=fs.mkdtempSync(path.join(__dirname,'.validation-test-'));
 const put=(p,s)=>{fs.mkdirSync(path.dirname(path.join(root,p)),{recursive:true});fs.writeFileSync(path.join(root,p),s);};
 const source='# Próba\n\n**Állapot: ready.**\n\n<a name="01-demo.01-start"></a>\n\n## Lecke\n\n**Állapot: ready.**\n\n<a name="01-demo.01-start--prompt"></a>\n\n### Feladat\n\nKészíts pipeline-review eredményt.\n';
 try{
  put('materials/modules/01-demo.md',source);put('materials/README.md','# Tananyag\n');put('materials/assets/notebook.css','body {color:black;}');
  put('operations/internal.md','# Nem résztvevői anyag\n');run({root});
  assert(readiness(root).some(e=>e.startsWith('Missing')));
  const approved=()=>'- Decision: approved\n- Approver: Test Reviewer\n- Date: 2026-09-15\n- Materials SHA-256: '+fingerprint(root)+'\n\n'+POINTS.map(p=>'| '+p+' | Megfelel | Fixture evidence for '+p+' |').join('\n');
  put(APPROVAL,approved());assert.deepEqual(readiness(root),[]);
  for(const attribute of ['id','name']){
   put('materials/modules/01-demo.md',source.replaceAll('a name=', 'a '+attribute+'='));run({root});put(APPROVAL,approved());
   assert.deepEqual(readiness(root),[],attribute+' anchors must be releasable');
  }
  for(const marker of ['[IDE ÍRD BE]','{{value}}','TODO','TBD','Szerzői feladat:','[KITÖLTENDŐ]']){
   put('materials/modules/01-demo.md',source+'\n'+marker+'\n');run({root});put(APPROVAL,approved());
   assert(readiness(root).some(e=>e.includes('placeholder')),marker+' must block an otherwise approved release');
  }
  put('materials/modules/01-demo.md',source);run({root});put(APPROVAL,approved());
  put('materials/modules/01-demo.md',source.replace('Állapot: ready.','Állapot: draft.'));
  assert(readiness(root).some(e=>e.includes('not ready')));assert(readiness(root).some(e=>e.includes('SHA-256')));
  put('materials/modules/01-demo.md',source);put(APPROVAL,approved().replace('| T5 | Megfelel','| T5 | Nem ellenőrzött'));
  assert(readiness(root).some(e=>e.endsWith('T5')));assert.throws(()=>release({root,pack:true}),/T5/);
  assert(!fs.existsSync(path.join(root,'artifacts/materials')));
  put(APPROVAL,approved());release({root,pack:true});
  assert(fs.existsSync(path.join(root,'artifacts/materials/modules/01-demo.html')));
  assert(!fs.existsSync(path.join(root,'artifacts/materials/operations')));
  assert(!fs.existsSync(path.join(root,'artifacts/materials/authoring')));
  assert.throws(()=>release({root,pack:true}),/already exists/);
 }finally{if(path.dirname(root)!==__dirname||!path.basename(root).startsWith('.validation-test-'))throw Error('Unsafe fixture path');fs.rmSync(root,{recursive:true});}
});
