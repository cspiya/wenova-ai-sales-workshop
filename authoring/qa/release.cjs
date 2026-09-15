'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {ROOT,files,inventory,isLessonId}=require('./render.cjs');
const {hasPlaceholders}=require('./validate.cjs');
const {gate}=require('./gate.cjs');
const POINTS=['T1','T2','T3','T4','T5','R1','R2','R3','R4','R5','R6','R7','R8','P1','P2','P3','P4','REHEARSAL'];
const APPROVAL='authoring/qa/reports/release-approval.md';
function fingerprint(root=ROOT){
 const hash=crypto.createHash('sha256');
 for(const p of files(root).filter(p=>p.startsWith('materials/'))){hash.update(p+'\0');hash.update(fs.readFileSync(path.join(root,p)));hash.update('\0');}
 return hash.digest('hex');
}
function readiness(root=ROOT){
 const errors=[];
 const modules=inventory(root).filter(p=>p.startsWith('materials/modules/'));
 if(!modules.length)errors.push('No participant modules to release');
 for(const p of modules){
  const text=fs.readFileSync(path.join(root,p),'utf8');
  // Module introduction and each stable lesson are approved separately.
  const moduleId=path.basename(p,'.md');
  const boundaries=[...text.matchAll(/<a (?:name|id)="([\w.:-]+)"><\/a>/g)].filter(m=>isLessonId(m[1],moduleId)).map(m=>m.index);
  const starts=[0,...boundaries],chunks=starts.map((start,i)=>text.slice(start,starts[i+1]));
  for(let i=0;i<chunks.length;i++){
   if(!/^\*\*Állapot: ready\.\*\*$/m.test(chunks[i]))errors.push(p+': '+(i?'lesson '+i:'module')+' is not ready');
  }
  if(chunks.length<2)errors.push(p+': no stable lesson IDs');
  if(/(?:Állapot:|Státusz:|·)\s*(?:draft|review)\b/i.test(text)||hasPlaceholders(text))errors.push(p+': unfinished status or placeholder');
 }
 const approvalPath=path.join(root,APPROVAL),digest=fingerprint(root);
 if(!fs.existsSync(approvalPath))return [...errors,'Missing '+APPROVAL];
 const record=fs.readFileSync(approvalPath,'utf8');
 const field=name=>record.match(new RegExp('^- '+name+': (.+)$','m'))?.[1].trim();
 if(field('Decision')!=='approved')errors.push('Release decision is not approved');
 if(!field('Approver')||/pending|kitölt|\[|\]/i.test(field('Approver')))errors.push('Missing human approver');
 if(!/^\d{4}-\d{2}-\d{2}$/.test(field('Date')||''))errors.push('Missing approval date');
 if(field('Materials SHA-256')!==digest)errors.push('Approval does not match current materials SHA-256: '+digest);
 for(const point of POINTS){
  const row=record.split(/\r?\n/).find(line=>line.startsWith('| '+point+' |'));
  const cells=row?.split('|').map(s=>s.trim());
  if(!cells||!['Megfelel',...(point==='P3'?['Nem alkalmazható']:[])].includes(cells[2])||!cells[3]||/pending|kitölt|\[bizonyíték\]/i.test(cells[3]))errors.push('Missing release evidence: '+point);
 }
 return errors;
}
function release({root=ROOT,pack=false}={}){
 gate({root});
 const errors=readiness(root);if(errors.length)throw Error(errors.join('\n'));
 if(pack){
  const dest=path.join(root,'artifacts','materials');
  // Never leave stale files from a previous package. Use a fresh output directory.
  if(fs.existsSync(dest))throw Error('Package destination already exists: '+dest+'; use a clean checkout.');
  fs.mkdirSync(dest,{recursive:true});
  for(const p of files(root).filter(p=>p.startsWith('materials/'))){const target=path.join(dest,p.slice('materials/'.length));fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(root,p),target);}
 }
 console.log('PASS: approved participant release '+fingerprint(root));
}
if(require.main===module){try{if(process.argv.includes('--fingerprint'))console.log(fingerprint());else release({pack:process.argv.includes('--package')});}catch(e){console.error(e.message);process.exitCode=1;}}
module.exports={POINTS,APPROVAL,fingerprint,readiness,release};
