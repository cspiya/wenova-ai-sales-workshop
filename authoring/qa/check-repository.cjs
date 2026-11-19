'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const MarkdownIt=require('markdown-it');
const {slug}=require('./render.cjs');
function markdownInfo(text){
 const tokens=new MarkdownIt({html:true}).parse(text,{}), targets=[], anchors=[], used=new Map();
 for(let i=0;i<tokens.length;i++){
  const t=tokens[i];
  if(t.type==='heading_open'){const base=slug(tokens[i+1].content),n=used.get(base)||0;used.set(base,n+1);anchors.push(base+(n?'-'+n:''));}
  for(const c of t.children||[]){if(c.type==='link_open')targets.push(c.attrGet('href'));if(c.type==='image')targets.push(c.attrGet('src'));}
  for(const raw of [t,...(t.children||[])].filter(t=>t.type==='html_block'||t.type==='html_inline')){
   for(const {a} of elements(raw.content)){if(a.name||a.id)anchors.push(a.name||a.id);if(a.href)targets.push(a.href);if(a.src)targets.push(a.src);}
  }
 }return {targets,anchors};
}
const ROOT=path.resolve(__dirname,'../..');
const unix=p=>p.split(path.sep).join('/');
// Double-quoted, single-quoted and unquoted values; as in a browser, the first of a repeated attribute counts.
const attrs=tag=>{const found={};for(const m of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/g)){const name=m[1].toLowerCase();if(!(name in found))found[name]=m[2]??m[3]??m[4];}return found;};
const clean=s=>s.replace(/<!--[\s\S]*?-->/g,'');
const elements=s=>[...clean(s).matchAll(/<[a-z](?:"[^"]*"|'[^']*'|[^'">])*>/gi)].map(m=>({name:m[0].match(/^<(\w+)/)[1].toLowerCase(),a:attrs(m[0])}));
// Participant pages stay in materials/: the root home page, operations/ and authoring/ are instructor pages.
// The target is resolved like a browser does it, from the page's own published address.
const SITE_HOST='cspiya.github.io',SITE_PATH='/wenova-ai-sales-workshop';
const ENTITIES={amp:'&',colon:':',sol:'/',period:'.',lowbar:'_',num:'#',quest:'?'};
const decodeEntities=s=>s.replace(/&(?:#x([\da-f]+)|#(\d+)|(amp|colon|sol|period|lowbar|num|quest));?/gi,(all,hex,dec,name)=>hex?String.fromCodePoint(parseInt(hex,16)):dec?String.fromCodePoint(Number(dec)):ENTITIES[name.toLowerCase()]);
function sitePath(pathname){
 let current=pathname;
 for(let i=0;i<4;i++){let next;try{next=decodeURIComponent(current);}catch{break;}if(next===current)break;current=next;}
 return path.posix.normalize(current.replace(/\\/g,'/')).toLowerCase();
}
function leavesParticipantArea(target,file,root){
 const text=decodeEntities(target).trim();let url;
 try{url=new URL(text,'https://'+SITE_HOST+SITE_PATH+'/'+encodeURI(unix(path.relative(root,file))));}catch{return false;}
 if(!['http:','https:'].includes(url.protocol)||url.hostname!==SITE_HOST)return false;
 const absolute=/^(?:[a-z][\w+.-]*:|[/\\]{2})/i.test(text),where=sitePath(url.pathname),home=SITE_PATH.toLowerCase();
 if(where!==home&&!where.startsWith(home+'/'))return !absolute;
 const rest=where.slice(home.length);
 return rest!=='/materials'&&!rest.startsWith('/materials/');
}
function check(root=ROOT){
 const errors=[],files=[],hashes={},external=new Set();let links=0,htmlCount=0,materialLinks=0;const lessonIds=[];
 function walk(dir){for(const d of fs.readdirSync(dir,{withFileTypes:true})){if(['.git','node_modules','artifacts'].includes(d.name)||d.name.startsWith('.validation-test-'))continue;const p=path.join(dir,d.name);if(d.isSymbolicLink()){errors.push('Symlink requires explicit review: '+unix(path.relative(root,p)));continue;}if(d.isDirectory())walk(p);else files.push(p);}}
 walk(root);const inside=p=>p===root||p.startsWith(root+path.sep);const publicRoot=path.join(root,'materials');
 for(const file of files){const relative=unix(path.relative(root,file));const publicFile=file.startsWith(publicRoot+path.sep);const ext=path.extname(file);if(!['.html','.md','.css'].includes(ext))continue;
  const bytes=fs.readFileSync(file),text=bytes.toString('utf8');hashes[relative]=crypto.createHash('sha256').update(bytes).digest('hex');let targets=[];
  if(ext==='.html'){
   htmlCount++;const els=elements(text),ids=els.map(e=>e.a.id).filter(Boolean);
   if(new Set(ids).size!==ids.length)errors.push(relative+': duplicate id');
   if(els.filter(e=>e.name==='h1').length!==1)errors.push(relative+': expected one h1');
   const stack=[],voids=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
   for(const m of clean(text).matchAll(/<(\/?)([a-z][\w:-]*)\b[^>]*>/gi)){
    const tag=m[2].toLowerCase();if(voids.has(tag))continue;
    if(m[1]){if(stack.pop()!==tag)errors.push(relative+': mismatched '+tag);}else stack.push(tag);
   }if(stack.length)errors.push(relative+': unclosed '+stack.join(','));
   for(const {name,a} of els){
    if(a['data-lesson-id'])lessonIds.push(a['data-lesson-id']);
    if(a.href)targets.push(a.href);if(a.src)targets.push(a.src);
    if(publicFile&&['iframe','script'].includes(name))errors.push(relative+': participant content contains '+name+'; release review required');
   }
  } else if(ext==='.md'){
   targets=markdownInfo(text).targets;
  } else {
   targets=[...text.matchAll(/url\(\s*["']?([^)'"\s]+)["']?\s*\)/g)].map(m=>m[1]);
   if(publicFile && /@import\b/.test(text))errors.push(relative+': CSS import needs explicit dependency review');
  }
  for(let target of targets){target=target.replace(/&amp;/g,'&');if(/^(?:https?:)?\/\//i.test(target)){external.add(target);continue;}if(/^(?:mailto:|tel:|data:)/i.test(target))continue;
   if(/^[a-z][\w+.-]*:/i.test(target)){errors.push(relative+': unsupported URL '+target);continue;}
   links++;if(publicFile)materialLinks++;
   let decoded;try{decoded=decodeURIComponent(target);}catch{errors.push(relative+': invalid URL '+target);continue;}
   const [dest,fragment]=decoded.split('#');const resolved=dest?path.resolve(path.dirname(file),dest.split('?')[0]):file;
   if(!inside(resolved)||!fs.existsSync(resolved)){errors.push(relative+': missing '+target);continue;}
   if(publicFile&&resolved!==publicRoot&&!resolved.startsWith(publicRoot+path.sep))errors.push(relative+': escapes materials: '+target);
   if(fragment&&path.extname(resolved)==='.html'&&!elements(fs.readFileSync(resolved,'utf8')).some(e=>e.a.id===fragment))errors.push(relative+': missing anchor '+target);
   if(fragment&&path.extname(resolved)==='.md'){
    if(!markdownInfo(fs.readFileSync(resolved,'utf8')).anchors.includes(fragment))errors.push(relative+': missing Markdown anchor '+target);
   }
  }
 }
 for(const file of files){
  if(!file.startsWith(publicRoot+path.sep)||!/\.html?$/i.test(file))continue;
  for(const {a} of elements(fs.readFileSync(file,'utf8')))for(const value of [a.href,a.src,a.action,a.formaction,a['xlink:href'],a.data,a.poster].filter(Boolean)){
   if(leavesParticipantArea(value,file,root))errors.push(unix(path.relative(root,file))+': participant page links to an instructor page: '+value);
  }
 }
 if(new Set(lessonIds).size!==lessonIds.length)errors.push('Duplicate lesson IDs');
 const progressFile=path.join(publicRoot,'starter-kit','progress.json');if(fs.existsSync(progressFile)){const progress=JSON.parse(fs.readFileSync(progressFile,'utf8'));if(!lessonIds.includes(progress.current_lesson))errors.push('Starting lesson is not in materials');}
 return {date:new Date().toISOString(),result:errors.length?'FAIL':'PASS',htmlFiles:htmlCount,localReferences:links,participantReferences:materialLinks,lessonIds,errors,externalLinksNotChecked:[...external],sha256:hashes};
}
if(require.main===module){const result=check();console.log(JSON.stringify(result,null,2));process.exitCode=result.errors.length?1:0;}
module.exports={check};
