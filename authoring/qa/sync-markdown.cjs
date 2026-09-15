'use strict';
// AI-maintained GitHub reading copies of the HTML documents.
const fs=require('node:fs'),path=require('node:path');
const ROOT=path.resolve(__dirname,'../..');
const unix=p=>p.split(path.sep).join('/');
const decode=s=>s.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi,(_,v)=>v[0]==='#'?String.fromCodePoint(v[1].toLowerCase()==='x'?parseInt(v.slice(2),16):Number(v.slice(1))):({amp:'&',lt:'<',gt:'>',quot:'"',apos:"'",nbsp:' '})[v.toLowerCase()]);
const destination=p=>p.endsWith('/index.html')?p.replace(/index\.html$/,'README.md'):p==='index.html'?'README.md':p.replace(/\.html$/,'.md');
function inventory(){const found=[];function walk(dir){for(const e of fs.readdirSync(path.join(ROOT,dir),{withFileTypes:true})){if(e.name.startsWith('.'))continue;const p=unix(path.join(dir,e.name));if(e.isDirectory())walk(p);else if(p.endsWith('.html'))found.push(p);}}walk('');return found.sort();}
function parse(html){
 const root={tag:'root',a:{},children:[]},stack=[root];
 const voids=new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
 for(const m of html.matchAll(/<!--[\s\S]*?-->|<![^>]*>|<\/?[a-z][^>]*>|[^<]+/gi)){
  const token=m[0];if(token.startsWith('<!'))continue;
  if(token.startsWith('</')){stack.pop();continue;}
  if(token.startsWith('<')){const tag=token.match(/^<(\w[\w:-]*)/)[1].toLowerCase();const a=Object.fromEntries([...token.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)].map(x=>[x[1],decode(x[3])]));const node={tag,a,children:[]};stack.at(-1).children.push(node);if(!voids.has(tag))stack.push(node);}
  else stack.at(-1).children.push({tag:'#text',value:decode(token)});
 }return root;
}
function all(node,tag){return (node.tag===tag?[node]:[]).concat((node.children||[]).flatMap(n=>all(n,tag)));}
function convert(source,known){
 const tree=parse(fs.readFileSync(path.join(ROOT,source),'utf8')),main=all(tree,'main')[0];if(!main)throw Error('Missing main: '+source);
 const out=destination(source),seen=new Set();
 const raw=n=>n.tag==='#text'?(seen.add(n),n.value):(n.children||[]).map(raw).join('');
 const esc=s=>s.replace(/([\\*_[\]])/g,'\\$1');
 function url(u){
  if(/^https:\/\/github\.com\/cspiya\/wenova-ai-sales-workshop\/blob\/main\//.test(u))return u.replace(/(\/blob\/main\/)([^#]+\.html)/,(_,prefix,p)=>prefix+(known.has(p)?destination(p):p));
  if(/^[a-z][\w+.-]*:|^\/\//i.test(u))return u;
  const [file,anchor]=u.split('#');const target=file?path.posix.normalize(path.posix.join(path.posix.dirname(source),file)):source;
  if(!known.has(target))return u;
  const dest=destination(target);return (dest===out?'':path.posix.relative(path.posix.dirname(out),dest))+(anchor?'#'+anchor:'')||path.posix.basename(out);
 }
 function render(n){
  if(n.tag==='#text'){seen.add(n);return esc(n.value.replace(/\s+/g,' '));}
  const anchor=n.a.id?`\n\n<a name="${n.a.id}"></a>\n\n`:'';
  const children=()=>n.children.map(render).join('');
  let body;
  if(n.tag==='h1'){raw(n);body='';}
  else if(/^h[1-6]$/.test(n.tag))body='\n\n'+'#'.repeat(Number(n.tag[1]))+' '+children().trim()+'\n\n';
  else if(n.tag==='pre'){const content=raw(n).replace(/\r/g,'');const fence='`'.repeat(Math.max(3,...[...content.matchAll(/`+/g)].map(m=>m[0].length+1)));body='\n\n'+fence+'text\n'+content+'\n'+fence+'\n\n';}
  else if(n.tag==='code'){const content=raw(n);const fence='`'.repeat(Math.max(1,...[...content.matchAll(/`+/g)].map(m=>m[0].length+1)));body=fence+content+fence;}
  else if(n.tag==='a')body=(n.a.class==='card'?'\n\n- ':'')+'['+(n.a.class==='card'?n.children.map(render).join(' '):children()).trim()+']('+url(n.a.href||'')+')'+(n.a.class==='card'?'\n':'');
  else if(n.tag==='strong'||n.tag==='b')body='**'+children().trim()+'**';
  else if(n.tag==='em'||n.tag==='i')body='*'+children().trim()+'*';
  else if(n.tag==='ul'||n.tag==='ol'){let i=0;body='\n\n'+n.children.filter(c=>c.tag==='li').map(c=>{const value=render(c).trim();return (n.tag==='ol'?++i+'. ':'- ')+value.replace(/\n/g,'\n  ');}).join('\n')+'\n\n';}
  else if(n.tag==='table'){
   const rows=all(n,'tr').map(tr=>tr.children.filter(c=>c.tag==='td'||c.tag==='th').map(c=>render(c).trim().replace(/\|/g,'\\|').replace(/\s*\n\s*/g,'<br>')));
   body='\n\n| '+rows[0].join(' | ')+' |\n| '+rows[0].map(()=> '---').join(' | ')+' |\n'+rows.slice(1).map(row=>'| '+row.join(' | ')+' |').join('\n')+'\n\n';
  }else if(n.tag==='blockquote')body='\n\n'+children().trim().split('\n').map(l=>'> '+l).join('\n')+'\n\n';
  else if(n.tag==='br')body='\n';
  else if(n.tag==='img')body='!['+esc(n.a.alt||'')+']('+url(n.a.src)+')';
  else if(n.tag==='iframe')body='\n\n[Tananyag]('+url(n.a.src)+')\n\n';
  else if(['p','div','section','header','footer','nav','main','details'].includes(n.tag))body='\n\n'+children()+'\n\n';
  else body=children();
  return anchor+body;
 }
 let body=render(main);
 // All meaningful main text must be represented, including tables and copyable prompts.
 for(const text of all(main,'#text'))if(text.value.trim()&&!seen.has(text))throw Error('Unconverted text in '+source+': '+text.value.slice(0,80));
 // Normalize whitespace only outside fenced code blocks.
 let inFence=false,fence='';body=body.split('\n').map(line=>{if(/^`{3,}/.test(line)){if(!inFence){inFence=true;fence=line.match(/^`+/)[0];}else if(line===fence)inFence=false;return line;}return inFence?line:line.trimEnd();}).join('\n');
 const blocks=body.split(/(^`{3,}[^\n]*\n[\s\S]*?^`{3,}$)/m);body=blocks.map((b,i)=>i%2?b:b.replace(/\n[ \t]*\n(?:[ \t]*\n)+/g,'\n\n')).join('').trim();
 const title=all(main,'h1')[0];const titleText=title?raw(title):source;
 // Add the HTML counterpart and the existing TOC; preserve explicit HTML IDs for GitHub anchors.
 const toc=all(tree,'nav').find(n=>(n.a.class||'').split(' ').includes('toc'));
 const tocText=toc?'\n\n## Tartalom\n\n'+all(toc,'a').map(n=>'- ['+raw(n)+']('+url(n.a.href)+')').join('\n'):'';
 const frame=all(tree,'iframe')[0];const frameText=frame?'\n\n[Kapcsolódó tananyag]('+url(frame.a.src)+')':'';
 return '# '+titleText+'\n\n[HTML-változat]('+path.posix.basename(source)+')'+frameText+tocText+'\n\n'+body+'\n';
}
function run(check=false){const files=inventory(),known=new Set(files),stale=[];for(const source of files){const target=destination(source),content=convert(source,known);if(check){if(!fs.existsSync(path.join(ROOT,target))||fs.readFileSync(path.join(ROOT,target),'utf8')!==content)stale.push(target);}else fs.writeFileSync(path.join(ROOT,target),content);}if(stale.length)throw Error('Markdown copies need updating: '+stale.join(', '));return files.length;}
if(require.main===module){try{console.log((process.argv.includes('--check')?'PASS: ':'Updated ')+run(process.argv.includes('--check'))+' Markdown documents.');}catch(error){console.error(error.message);process.exitCode=1;}}
module.exports={run,convert,destination};
