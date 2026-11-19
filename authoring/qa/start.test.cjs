'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const MarkdownIt=require('markdown-it');
const ROOT=path.resolve(__dirname,'../..'),START='https://cspiya.github.io/wenova-ai-sales-workshop/materials/';
const read=p=>fs.readFileSync(path.join(ROOT,p),'utf8');
function links(text){
 const out=[];
 for(const t of new MarkdownIt({html:true}).parse(text,{}))for(const c of t.children||[])if(c.type==='link_open')out.push(c.attrGet('href'));
 return out;
}
test('root README opens with the start page, QR code and downloads',()=>{
 const top=read('README.md').split('## Tartalom')[0];
 for(const s of [START,'https://cspiya.github.io/wenova-ai-sales-workshop/operations/','https://cspiya.github.io/wenova-ai-sales-workshop/authoring/','materials/assets/indulas-qr.png','https://github.com/cspiya/wenova-ai-sales-workshop/archive/refs/heads/main.zip','Kezdjük a felkészülést.'])assert.ok(top.includes(s),s);
});
test('root README never links to a repository HTML file',()=>{
 for(const href of links(read('README.md'))){
  assert.doesNotMatch(href,/^(?!https?:)[^#]*\.html?(?:[?#]|$)/i,href);
  assert.doesNotMatch(href,/github\.com\/.*\/blob\/.*\.html?/i,href);
 }
});
test('runbook updates safely and never names restricted plans',()=>{
 const text=read('materials/TELEPITES.md');
 for(const s of ['Tananyag.uj-','hashlist','claude plugin marketplace update wenova-workshop','raw.githubusercontent.com','bármilyen okból'])assert.ok(text.includes(s),s);
 assert.doesNotMatch(text,/Enterprise/);
});
test('projection page is generated, script-free and linked from the start page',()=>{
 const html=read('materials/indulas.html');
 assert.match(html,/page--projection/);assert.doesNotMatch(html,/<script/i);assert.ok(html.includes(START));
 assert.match(read('materials/index.html'),/href="indulas\.html"/);
});
test('install runbook threshold does not exceed the delivered file count',()=>{
 const n=Number(/legalább (\d+) legyen/.exec(read('materials/TELEPITES.md'))[1]);
 const all=[];(function walk(d){for(const e of fs.readdirSync(path.join(ROOT,d),{withFileTypes:true})){const p=d+'/'+e.name;if(e.isDirectory())walk(p);else all.push(p);}})('materials');
 assert.ok(n<=all.length,n+' > '+all.length);
});
