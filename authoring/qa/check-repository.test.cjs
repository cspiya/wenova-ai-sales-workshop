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
 console.log('PASS: participant boundary, missing anchors, private iframe and duplicate IDs detected.');
}finally{
 if(path.dirname(dir)!==__dirname||!path.basename(dir).startsWith('.validation-test-'))throw Error('Unexpected fixture directory');
 fs.unlinkSync(participant);fs.unlinkSync(notes);fs.rmdirSync(materials);fs.rmdirSync(operations);fs.rmdirSync(dir);
}
