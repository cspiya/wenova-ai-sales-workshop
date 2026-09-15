'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {validate,root}=require('./validate.cjs');
const dir=fs.mkdtempSync(path.join(__dirname,'.validation-test-'));
const file=path.join(dir,'lesson.html');
const valid='<!doctype html><html lang="hu"><head><meta name="viewport" content="width=device-width"><title>Próba</title><link rel="stylesheet" href="../../../materials/assets/notebook.css"></head><body><main id="main" data-lesson-id="test.lesson"><h1>Próba</h1><p>review · 20 perc</p><a href="#main">Ugrás</a></main></body></html>';
function check(text) { fs.writeFileSync(file,text); return validate(file).checks; }
function fails(text,id) { assert(check(text).some(c=>c.id===id&&c.result==='Javítandó'),id); }
try {
  assert(!check(valid).some(c=>c.result==='Javítandó'));
  assert(check(valid).some(c=>c.id==='T5'&&c.result==='Nem ellenőrzött'));
  fails(valid.replace('#main','#absent'),'T3-anchor');
  fails(valid.replace('../../../materials/assets/notebook.css','absent.css'),'T2-css');
  fails(valid.replace('</main>','<p id="main">Másolat</p></main>'),'T3-ids');
  fails(valid.replace('Próba</h1>','TODO</h1>'),'T4-placeholder');
  fails(valid.replace('lang="hu"','lang="en"'),'T1-source');
  fails(valid.replace('#main','https://example.com/x').replace('<a ','<script ').replace('</a>','</script>'),'T2-external');
  assert(validate(path.resolve(root,'../outside.html')).checks.some(c=>c.id==='INPUT'&&c.result==='Javítandó'));
  console.log('PASS: valid sample, unverified render retained, broken anchor/CSS, duplicate ID, placeholder, language, external script and out-of-root input.');
} finally {
  if (path.dirname(dir)!==__dirname || !path.basename(dir).startsWith('.validation-test-')) throw new Error('Unexpected test path');
  if(fs.existsSync(file)) fs.unlinkSync(file);
  fs.rmdirSync(dir);
}
