'use strict';
const test=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),os=require('node:os'),path=require('node:path');
const {SOURCE,PLUGIN,PACKAGE,COPIES,zipBytes,build,verify}=require('./plugin.cjs');
const ROOT=path.resolve(__dirname,'../..');
function fixture(t){
 const dir=fs.mkdtempSync(path.join(os.tmpdir(),'plugin-test-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
 for(const p of [SOURCE,'materials/plugin'])fs.cpSync(path.join(ROOT,p),path.join(dir,p),{recursive:true});
 return dir;
}
function entries(zip){
 const names=[];let at=zip.readUInt32LE(zip.length-6);
 for(let i=0;i<zip.readUInt16LE(zip.length-12);i++){const n=zip.readUInt16LE(at+28);names.push(zip.toString('utf8',at+46,at+46+n));at+=46+n;}
 return names;
}
test('committed plugin copies and package match their sources',()=>assert.deepEqual(verify(ROOT),[]));
test('a changed, missing or stale copy fails, and a build repairs it',t=>{
 const dir=fixture(t);
 fs.appendFileSync(path.join(dir,COPIES[0][1]),'\nkézi módosítás\n');
 assert.match(verify(dir).join('\n'),/Copy differs/);
 fs.rmSync(path.join(dir,COPIES[1][1]));
 assert.match(verify(dir).join('\n'),/Missing copy/);
 build(dir);assert.deepEqual(verify(dir),[]);
 fs.appendFileSync(path.join(dir,PLUGIN,'README.md'),'\nváltozás\n');
 assert.match(verify(dir).join('\n'),/Stale package/);
});
test('package is reproducible and has the manifest at the ZIP root',()=>{
 const zip=zipBytes(ROOT),names=entries(zip);
 assert.ok(zip.equals(zipBytes(ROOT)));
 for(const name of ['.claude-plugin/plugin.json','.mcp.json','README.md','skills/karmester/SKILL.md','skills/karmester/references/orchestrator.md'])assert.ok(names.includes(name),name);
 assert.equal(names.filter(n=>/^agents\/[^/]+\.md$/.test(n)).length,7);
 assert.equal(names.filter(n=>/^skills\/[^/]+\/SKILL\.md$/.test(n)).length,8);
});
test('release list and fingerprint include the plugin dotfiles',t=>{
 const {packaged,fingerprint}=require('./release.cjs'),dir=fixture(t);
 for(const name of ['.claude-plugin/plugin.json','.mcp.json'])assert.ok(packaged(dir).includes(PLUGIN+'/'+name),name);
 const before=fingerprint(dir);fs.appendFileSync(path.join(dir,PLUGIN,'.mcp.json'),'\n');
 assert.notEqual(fingerprint(dir),before);
});
test('connector list holds only the four documented addresses',()=>{
 const {mcpServers}=JSON.parse(fs.readFileSync(path.join(ROOT,PLUGIN,'.mcp.json'),'utf8'));
 assert.deepEqual(Object.fromEntries(Object.entries(mcpServers).map(([k,v])=>[k,v.url])),{brandiseer:'https://brandiseer.com/api/mcp','sales-bot':'https://app.sales-bot.io/api/mcp',estiwise:'https://mcp.estiwise.ai/mcp',buffer:'https://mcp.buffer.com/mcp'});
});
test('scheduling rule is present wherever the assistant can schedule',()=>{
 for(const p of [PLUGIN+'/skills/tartalom/SKILL.md',PLUGIN+'/skills/karmester/SKILL.md',SOURCE+'/README.md',SOURCE+'/orchestrator.md',SOURCE+'/reviewer.md'])
  assert.match(fs.readFileSync(path.join(ROOT,p),'utf8'),/ténylegesen megjelenik/,p);
});
