'use strict';
// The Karmester skill keeps a hand-written copy of orchestrator.md's workflow. This test fails when the two drift.
// Allowed differences are listed explicitly; everything else must be identical.
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path');
const {SOURCE,PLUGIN}=require('./plugin.cjs');
const ROOT=path.resolve(__dirname,'../..');
const ORCHESTRATOR=SOURCE+'/orchestrator.md',SKILL=PLUGIN+'/skills/karmester/SKILL.md';
const START='## Munkamenet';
// Allowed difference 1: each file has its own frontmatter, title and intro before START (not compared).
// Allowed difference 2: the skill names the writer with the plugin prefix.
const WRITER_NAMES=[['`wenova-sales-workshop:writer`','`writer`']];
// Allowed difference 3: only orchestrator.md has the customer-case section; the skill points to it in its intro.
const ORCHESTRATOR_ONLY=['## Ügyféleset az 5. blokkban'];
function shared(text,{normalise=[],dropSections=[]}={}){
 text=text.replace(/\r\n/g,'\n');
 const at=text.indexOf(START+'\n');
 if(at<0)throw Error('Missing section: '+START);
 let body=text.slice(at);
 for(const heading of dropSections){
  const from=body.indexOf('\n'+heading+'\n');
  if(from<0)throw Error('Missing section: '+heading);
  const next=body.indexOf('\n## ',from+1);
  body=body.slice(0,from+1)+(next<0?'':body.slice(next+1));
 }
 for(const [from,to] of normalise){
  if(!body.includes(from))throw Error('Expected text not found: '+from);
  body=body.split(from).join(to);
 }
 return body.trimEnd()+'\n';
}
function steps(body){
 const end=body.indexOf('\n## ',1);
 return (end<0?body:body.slice(0,end)).split('\n').filter(l=>/^\d+\. /.test(l));
}
const read=p=>fs.readFileSync(path.join(ROOT,p),'utf8');
test('Karmester skill workflow matches orchestrator.md apart from the listed differences',()=>{
 const source=shared(read(ORCHESTRATOR),{dropSections:ORCHESTRATOR_ONLY});
 const skill=shared(read(SKILL),{normalise:WRITER_NAMES});
 assert.deepEqual(steps(skill).map(l=>l.match(/^\d+/)[0]),['1','2','3','4','5','6','7','8','9','10']);
 assert.deepEqual(steps(skill),steps(source));
 assert.equal(skill,source);
});
test('a changed step in either file is detected',()=>{
 const source=read(ORCHESTRATOR),skill=read(SKILL);
 const changed=skill.replace('Legfeljebb három kör lehet.','Legfeljebb négy kör lehet.');
 assert.notEqual(changed,skill);
 assert.notEqual(shared(changed,{normalise:WRITER_NAMES}),shared(source,{dropSections:ORCHESTRATOR_ONLY}));
 const renamed=skill.replace('`wenova-sales-workshop:writer`','`writer`');
 assert.throws(()=>shared(renamed,{normalise:WRITER_NAMES}),/Expected text not found/);
});
