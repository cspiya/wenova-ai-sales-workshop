'use strict';
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {check}=require('./check-repository.cjs');
const dir=fs.mkdtempSync(path.join(__dirname,'.validation-test-'));
const materials=path.join(dir,'materials'),operations=path.join(dir,'operations');
fs.mkdirSync(materials);fs.mkdirSync(operations);
const participant=path.join(materials,'index.html'),notes=path.join(operations,'notes.html');
const wrap=body=>'<!doctype html><html lang="hu"><head><title>Test</title></head><body><h1>Test</h1>'+body+'</body></html>';
try{
 fs.writeFileSync(notes,wrap('<p>Private note</p>'));
 fs.writeFileSync(participant,wrap('<section id="exercise">Exercise</section><a href="#exercise">Start</a>'));
 assert.equal(check(dir).result,'PASS');
 fs.writeFileSync(participant,wrap('<a href="../operations/notes.html">Private notes</a>'));
 assert(check(dir).errors.some(x=>x.includes('escapes materials')));
 fs.writeFileSync(participant,wrap('<a href="#missing">Start</a>'));
 assert(check(dir).errors.some(x=>x.includes('missing anchor')));
 fs.writeFileSync(participant,wrap('<iframe src="../operations/notes.html"></iframe>'));
 assert(check(dir).errors.some(x=>x.includes('participant content contains iframe')));
 fs.writeFileSync(participant,wrap('<div id="one"></div><div id="one"></div>'));
 assert(check(dir).errors.some(x=>x.includes('duplicate id')));
 const instructorLink=x=>x.includes('participant page links to an instructor page');
 for(const href of ['../operations/notes.html','../authoring/index.html','../index.html','https://cspiya.github.io/wenova-ai-sales-workshop/operations/notes.html','https://cspiya.github.io/wenova-ai-sales-workshop/authoring/index.html','https://cspiya.github.io/wenova-ai-sales-workshop/index.html','https://cspiya.github.io/wenova-ai-sales-workshop/','//cspiya.github.io/wenova-ai-sales-workshop/operations/notes.html','/wenova-ai-sales-workshop/operations/notes.html','https://cspiya.github.io:443/wenova-ai-sales-workshop/operations/index.html','http://cspiya.github.io:80/wenova-ai-sales-workshop/authoring/index.html','HTTPS://CSPIYA.GITHUB.IO/wenova-ai-sales-workshop/operations/index.html','https://cspiya.github.io/WENOVA-AI-SALES-WORKSHOP/Operations/index.html','https://cspiya.github.io/wenova-ai-sales-workshop/materials/../operations/index.html','https://cspiya.github.io/wenova-ai-sales-workshop/materials/%2e%2e/operations/index.html','https://cspiya.github.io/wenova-ai-sales-workshop/materials/..%2Foperations/index.html','https://cspiya.github.io/wenova-ai-sales-workshop/%6Fperations/index.html','&#46;&#46;/operations/notes.html']){
  fs.writeFileSync(participant,wrap('<a href="'+href+'">Tiltott</a>'));
  assert(check(dir).errors.some(instructorLink),href);
 }
 for(const href of ['https://cspiya.github.io/wenova-ai-sales-workshop/materials/index.html','https://cspiya.github.io:443/wenova-ai-sales-workshop/materials/index.html','https://cspiya.github.io/wenova-ai-sales-workshop/materials/modules/../index.html','https://cspiya.github.io/other-project/operations/index.html','https://example.com/operations/notes.html','mailto:info@example.com','index.html']){
  fs.writeFileSync(participant,wrap('<a href="'+href+'">Megengedett</a>'));
  assert(!check(dir).errors.some(instructorLink),href);
 }
 fs.writeFileSync(participant,wrap('<p>Tiszta oldal</p>'));
 const lab=path.join(materials,'app.htm');
 try{for(const link of ['<a href="../operations/notes.html">Tiltott</a>',"<a href='../operations/notes.html'>Tiltott</a>",'<a href=../operations/notes.html>Tiltott</a>','<a href=../index.html>Tiltott</a>','<a title="a>b" href=../operations/notes.html>Tiltott</a>','<a href=https://cspiya.github.io:443/wenova-ai-sales-workshop/operations/index.html>Tiltott</a>']){fs.writeFileSync(lab,wrap(link));assert(check(dir).errors.some(instructorLink),link);}}finally{fs.rmSync(lab,{force:true});}
 console.log('PASS: participant boundary, instructor links, missing anchors, private iframe and duplicate IDs detected.');
}finally{
 if(path.dirname(dir)!==__dirname||!path.basename(dir).startsWith('.validation-test-'))throw Error('Unexpected fixture directory');
 fs.unlinkSync(participant);fs.unlinkSync(notes);fs.rmdirSync(materials);fs.rmdirSync(operations);fs.rmdirSync(dir);
}
