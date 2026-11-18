'use strict';
// Regenerates the plugin's byte-identical copies and its upload package.
// The ZIP uses stored entries and fixed timestamps, so the same input gives the same bytes on every Node version.
const fs=require('node:fs'),path=require('node:path'),zlib=require('node:zlib');
const ROOT=path.resolve(__dirname,'../..');
const SOURCE='materials/starter-kit/agents';
const PLUGIN='materials/plugin/wenova-sales-workshop';
const PACKAGE='materials/plugin/wenova-sales-workshop.plugin';
const AGENTS=['writer','reviewer','inbox','crm','ceo','marketing','sales'];
const COPIES=[
 ...AGENTS.map(name=>[SOURCE+'/'+name+'.md',PLUGIN+'/agents/'+name+'.md']),
 [SOURCE+'/orchestrator.md',PLUGIN+'/skills/karmester/references/orchestrator.md'],
];
function listFiles(dir,prefix=''){
 const result=[];
 for(const e of fs.readdirSync(dir,{withFileTypes:true})){
  if(e.isSymbolicLink())throw Error('Symlink is not supported: '+prefix+e.name);
  if(e.isDirectory())result.push(...listFiles(path.join(dir,e.name),prefix+e.name+'/'));
  else result.push(prefix+e.name);
 }
 return result.sort((a,b)=>Buffer.compare(Buffer.from(a),Buffer.from(b)));
}
function zipBytes(root=ROOT){
 const base=path.join(root,PLUGIN),locals=[],centrals=[];let offset=0;
 const names=listFiles(base);
 for(const name of names){
  const data=fs.readFileSync(path.join(base,name)),file=Buffer.from(name),crc=zlib.crc32(data);
  const local=Buffer.alloc(30);
  local.writeUInt32LE(0x04034b50,0);local.writeUInt16LE(20,4);local.writeUInt16LE(0x0800,6);local.writeUInt16LE(0,8);
  local.writeUInt16LE(0,10);local.writeUInt16LE(0x0021,12);local.writeUInt32LE(crc,14);
  local.writeUInt32LE(data.length,18);local.writeUInt32LE(data.length,22);local.writeUInt16LE(file.length,26);
  const central=Buffer.alloc(46);
  central.writeUInt32LE(0x02014b50,0);central.writeUInt16LE(0x0314,4);central.writeUInt16LE(20,6);central.writeUInt16LE(0x0800,8);
  central.writeUInt16LE(0,10);central.writeUInt16LE(0,12);central.writeUInt16LE(0x0021,14);central.writeUInt32LE(crc,16);
  central.writeUInt32LE(data.length,20);central.writeUInt32LE(data.length,24);central.writeUInt16LE(file.length,28);
  central.writeUInt32LE(0o100644*65536,38);central.writeUInt32LE(offset,42);
  locals.push(local,file,data);centrals.push(central,file);offset+=30+file.length+data.length;
 }
 const directory=Buffer.concat(centrals),end=Buffer.alloc(22);
 end.writeUInt32LE(0x06054b50,0);end.writeUInt16LE(names.length,8);end.writeUInt16LE(names.length,10);
 end.writeUInt32LE(directory.length,12);end.writeUInt32LE(offset,16);
 return Buffer.concat([...locals,directory,end]);
}
function build(root=ROOT){
 for(const [from,to] of COPIES){fs.mkdirSync(path.dirname(path.join(root,to)),{recursive:true});fs.copyFileSync(path.join(root,from),path.join(root,to));}
 fs.writeFileSync(path.join(root,PACKAGE),zipBytes(root));
}
function verify(root=ROOT){
 const errors=[];
 for(const [from,to] of COPIES){
  const target=path.join(root,to);
  if(!fs.existsSync(target))errors.push('Missing copy: '+to);
  else if(!fs.readFileSync(path.join(root,from)).equals(fs.readFileSync(target)))errors.push('Copy differs from '+from+': '+to);
 }
 const pack=path.join(root,PACKAGE);
 if(!fs.existsSync(pack))errors.push('Missing package: '+PACKAGE);
 else if(!errors.length&&!fs.readFileSync(pack).equals(zipBytes(root)))errors.push('Stale package: '+PACKAGE);
 return errors;
}
if(require.main===module){try{
 if(process.argv.includes('--check')){const errors=verify();if(errors.length)throw Error(errors.join('\n')+'\nRun npm run plugin:build');}
 else build();
 console.log('PASS: '+COPIES.length+' plugin copies and '+PACKAGE);
}catch(e){console.error(e.message);process.exitCode=1;}}
module.exports={SOURCE,PLUGIN,PACKAGE,AGENTS,COPIES,listFiles,zipBytes,build,verify};
