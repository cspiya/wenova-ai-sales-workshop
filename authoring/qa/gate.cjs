'use strict';
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const {ROOT,inventory,run}=require('./render.cjs');
const {check}=require('./check-repository.cjs');
const {validate}=require('./validate.cjs');
function git(root,args){return cp.execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();}
function changed(root=ROOT,base='origin/main'){
  const ancestor=git(root,['merge-base',base,'HEAD']);
  const tracked=git(root,['diff','--name-only','--no-renames','-z',ancestor]);
  const untracked=git(root,['ls-files','--others','--exclude-standard','-z']);
  return new Set((tracked+'\0'+untracked).split('\0').filter(Boolean));
}
function selection(paths){
  // A renamed/new/deleted page can change links in any generated page.
  // Render all presentations for Markdown/HTML changes; every other Markdown is still link-checked.
  const shared=[...paths].some(p=>/\.(md|html|css|cjs)$/.test(p)||/^package(?:-lock)?\.json$/.test(p)||p.startsWith('.github/'));
  return shared?null:paths;
}
function gate({root=ROOT,prepare=false,paths=null}={}){
  const selected=paths?selection(paths):null;
  if(prepare)run({root,selected});
  const count=run({root,check:true,selected});
  const result=check(root);
  if(result.errors.length)throw Error(result.errors.join('\n'));
  if(root===ROOT)for(const p of inventory(root).filter(p=>p.startsWith('materials/modules/'))){
    const failures=validate(path.join(root,p.replace(/\.md$/,'.html'))).checks.filter(c=>c.result==='Javítandó'&&c.id!=='T4-placeholder');
    if(failures.length)throw Error(p+': '+JSON.stringify(failures));
  }
  console.log('PASS: '+count+' current HTML pages; '+result.localReferences+' local references; '+result.lessonIds.length+' lessons.');
  return result;
}
if(require.main===module){try{
 const args=process.argv.slice(2),baseIndex=args.indexOf('--base');
 if(baseIndex>=0&&!args[baseIndex+1])throw Error('--base requires a revision');
 const paths=args.includes('--changed')?changed(ROOT,baseIndex>=0?args[baseIndex+1]:'origin/main'):null;
 if(paths)console.log('Changed files: '+[...paths].join(', '));
 gate({prepare:args.includes('--prepare'),paths});
}catch(e){console.error(e.message);process.exitCode=1;}}
module.exports={changed,selection,gate};
