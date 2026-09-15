'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const {changed,selection}=require('./gate.cjs');
test('changed selection includes commits, staged, unstaged, untracked, renamed and deleted Markdown',()=>{
 const root=fs.mkdtempSync(path.join(__dirname,'.validation-test-'));
 const git=(...args)=>cp.execFileSync('git',args,{cwd:root,encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 const put=(p,s)=>fs.writeFileSync(path.join(root,p),s);
 const commit=()=>git('-c','user.name=Fixture','-c','user.email=fixture@example.invalid','commit','-qm','fixture');
 try{
  git('init','-q');for(const p of ['committed.md','staged.md','working.md','old.md','deleted.md'])put(p,'initial\n');git('add','.');commit();
  const base=git('rev-parse','HEAD');put('committed.md','committed change\n');git('add','committed.md');commit();
  put('staged.md','staged change\n');git('add','staged.md');put('working.md','working change\n');put('new.md','new\n');
  fs.renameSync(path.join(root,'old.md'),path.join(root,'renamed.md'));fs.unlinkSync(path.join(root,'deleted.md'));
  const result=changed(root,base);
  for(const p of ['committed.md','staged.md','working.md','old.md','renamed.md','deleted.md','new.md'])assert(result.has(p),p);
  assert.equal(selection(result),null);assert.throws(()=>changed(root,'missing-ref'));
 }finally{if(path.dirname(root)!==__dirname||!path.basename(root).startsWith('.validation-test-'))throw Error('Unsafe fixture path');fs.rmSync(root,{recursive:true});}
});
