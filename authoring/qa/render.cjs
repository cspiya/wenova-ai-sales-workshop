'use strict';
const fs = require('node:fs');
const path = require('node:path');
const MarkdownIt = require('markdown-it');
const crypto = require('node:crypto');
const ROOT = path.resolve(__dirname, '../..');
const unix = p => p.split(path.sep).join('/');
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const output = p => p === 'README.md' ? 'index.html' : p.replace(/\/README\.md$/, '/index.html').replace(/\.md$/, '.html');
const slug = s => s.toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').replace(/\s/g, '-');
function files(root = ROOT) {
  const result = [];
  function walk(dir) {
    for (const e of fs.readdirSync(path.join(root, dir), {withFileTypes:true})) {
      if (e.name.startsWith('.') || ['node_modules','artifacts'].includes(e.name)) continue;
      const p = unix(path.join(dir, e.name));
      if (e.isSymbolicLink()) throw Error('Symlink is not supported: '+p);
      if (e.isDirectory()) walk(p); else result.push(p);
    }
  }
  walk(''); return result.sort();
}
function inventory(root = ROOT) {
  return files(root).filter(p => p.endsWith('.md') && (
    ['README.md','materials/README.md','authoring/README.md','operations/README.md','authoring/template.md'].includes(p) ||
    /^(materials\/modules|operations\/instructor-notes)\/[^/]+\.md$/.test(p) ||
    /^<!-- presentation(?:: custom)? -->\r?\n/.test(fs.readFileSync(path.join(root,p),'utf8'))));
}
const custom = (source,root=ROOT) => /^<!-- presentation: custom -->\r?\n/.test(fs.readFileSync(path.join(root,source),'utf8'));
const reviewBody = html => html.replace(/\r\n/g,'\n').replace(/<!-- Presentation-review SHA-256: [a-f0-9]{64} -->\n?/g,'');
const sourceHash = (source,root=ROOT) => crypto.createHash('sha256').update(fs.readFileSync(path.join(root,source),'utf8').replace(/\r\n/g,'\n')).update('\0').update(reviewBody(fs.readFileSync(path.join(root,output(source)),'utf8'))).digest('hex');
function acceptCustom(source,root=ROOT){
  if(!inventory(root).includes(source)||!custom(source,root))throw Error('Expected a custom presentation Markdown source');
  const target=path.join(root,output(source));
  const html=reviewBody(fs.readFileSync(target,'utf8'));
  fs.writeFileSync(target,'<!-- Presentation-review SHA-256: '+sourceHash(source,root)+' -->\n'+html);
}
function rewrite(href, source, pages) {
  if (/^[a-z][\w+.-]*:|^\/\//i.test(href)) return href;
  const match = href.match(/^([^?#]*)(.*)$/), file = match[1];
  if (!file) return href;
  const target = path.posix.normalize(path.posix.join(path.posix.dirname(source),file));
  return pages.has(target) ? path.posix.relative(path.posix.dirname(output(source)),output(target))+match[2] : href;
}
function render(source, root = ROOT, pages = new Set(inventory(root))) {
  const text = fs.readFileSync(path.join(root,source),'utf8').replace(/\r\n/g,'\n');
  const md = new MarkdownIt({html:true, linkify:false, typographer:false});
  md.renderer.rules.table_open=()=>'<div class="table-wrap" role="region" aria-label="Táblázat" tabindex="0"><table>\n';
  md.renderer.rules.table_close=()=>'</table></div>\n';
  md.block.ruler.before('html_block','stable_anchor',(state,start,end,silent)=>{
    const line=state.src.slice(state.bMarks[start]+state.tShift[start],state.eMarks[start]);
    if(!/^<a (?:name|id)="[\w.:-]+"><\/a>$/.test(line))return false;
    if(!silent){const token=state.push('html_block','',0);token.content=line+'\n';token.map=[start,start+1];state.line=start+1;}
    return true;
  });
  const tokens = md.parse(text, {});
  // Prose stays Markdown. Only stable anchors, line breaks and the presentation opt-in are raw HTML.
  for (const t of tokens.flatMap(t => [t,...(t.children || [])])) {
    if (['html_block','html_inline'].includes(t.type) && t.content.replace(/<a\s+(?:name|id)="[\w.:-]+"><\/a>|<br\s*\/?\s*>|<!-- presentation -->/g,'').trim()) {
      throw Error(source+': use Markdown, not raw HTML: '+t.content.slice(0,100));
    }
  }
  const moduleId = /^materials\/modules\/([^/]+)\.md$/.exec(source)?.[1];
  const noteModule = /^operations\/instructor-notes\/([^/]+)\.md$/.exec(source)?.[1];
  const mainId = noteModule ? 'notes' : 'main';
  const toc = [], used = new Set([mainId]);
  let title = '', skipToc = false;
  const rendered = [];
  for (let i=0; i<tokens.length; i++) {
    const token = tokens[i];
    if (token.type === 'heading_open' && token.tag === 'h2' && tokens[i+1]?.content === 'Tartalom') { skipToc = true; i+=2; continue; }
    if (skipToc) {
      if (token.type === 'html_block' || token.type === 'heading_open') skipToc = false;
      else continue;
    }
    if (token.type === 'html_block') {
      const anchor = token.content.trim().match(/^<a (?:name|id)="([\w.:-]+)"><\/a>$/);
      if (anchor) {
        const id = anchor[1];
        if (id === mainId) continue;
        if (used.has(id)) throw Error(source+': duplicate anchor '+id);
        used.add(id);
        const lesson = moduleId && !id.includes('--') && new RegExp('^'+moduleId.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'\\.\\d{2}-[a-z0-9-]+$').test(id);
        token.content = '<a id="'+id+'"'+(lesson?' data-lesson-id="'+id+'"':'')+'></a>\n';
        if (tokens[i+1]?.type === 'heading_open') tokens[i+1].meta = {anchor:id};
      }
    }
    if (token.type === 'heading_open') {
      const label = tokens[i+1].content;
      if (token.tag === 'h1') { if (title) throw Error(source+': expected one h1'); title = label; }
      else {
        let id = token.meta?.anchor;
        if (!id) { const base = slug(label) || 'section'; id = base; let n=0; while(used.has(id)) id=base+'-'+(++n); used.add(id); token.attrSet('id',id); }
        if (token.tag === 'h2') toc.push({id,label});
        if (/--(?:prompt|steps|check|help)$/.test(id) || /^(prompt|steps|check|help)$/.test(id)) token.attrSet('class','cell-heading '+id.split('--').at(-1));
      }
    }
    for (const child of token.children || []) {
      if (child.type === 'link_open') {
        const href = rewrite(child.attrGet('href'),source,pages); child.attrSet('href',href);
        if (noteModule && href.startsWith('../../materials/modules/'+noteModule+'.html')) child.attrSet('target','lesson');
      }
      if (child.type === 'image') child.attrSet('src',rewrite(child.attrGet('src'),source,pages));
    }
    rendered.push(token);
  }
  if (!title) throw Error(source+': missing h1');
  const relative = p => path.posix.relative(path.posix.dirname(output(source)),p);
  const css = relative('materials/assets/notebook.css');
  const home = source.startsWith('materials/') ? relative('materials/index.html') : relative('index.html');
  const body = md.renderer.render(rendered,md.options,{});
  const sidebar = '<nav class="toc" aria-label="Tartalom"><p>Tartalom</p><ol>'+toc.map(t=>'<li><a href="#'+escape(t.id)+'">'+escape(t.label)+'</a></li>').join('')+'</ol></nav>';
  const frame = noteModule ? '<div class="lesson-pane"><iframe name="lesson" src="../../materials/modules/'+noteModule+'.html" title="Résztvevői tananyag"></iframe></div>' : sidebar;
  return '<!doctype html>\n<!-- Generated from '+source+'; edit Markdown and run npm run render. -->\n'+
    '<html lang="hu"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>'+escape(title)+'</title><link rel="stylesheet" href="'+css+'">'+
    (noteModule?'<link rel="stylesheet" href="notes.css">':'')+'</head><body>\n'+
    '<a class="skip" href="#'+mainId+'">Ugrás a tartalomhoz</a><header class="topbar"><a class="brand" href="'+home+'">WENOVA · Workshop</a><a href="'+path.posix.basename(source)+'">Markdown-forrás</a></header>\n'+
    '<div class="'+(noteModule?'instructor-grid':'layout')+'">'+frame+'<main id="'+mainId+'"'+(moduleId?' data-module-id="'+moduleId+'"':'')+(noteModule?' class="notes"':'')+'>\n'+body+'</main></div>\n</body></html>\n';
}
function run({root=ROOT, check=false, selected=null}={}) {
  const pages = new Set(inventory(root)), stale=[];
  const expected = new Set([...pages].map(output));
  // Reject any unpaired/hand-edited HTML, including after source deletion or rename.
  const orphans = files(root).filter(p=>p.endsWith('.html')&&!expected.has(p));
  if (orphans.length) throw Error('HTML without a presentation source: '+orphans.join(', '));
  let count=0;
  for (const source of pages) {
    if (selected && !selected.has(source) && !selected.has(output(source))) continue;
    const target = path.join(root,output(source)); count++;
    if(custom(source,root)){
      if(!fs.existsSync(target)||!fs.readFileSync(target,'utf8').includes('<!-- Presentation-review SHA-256: '+sourceHash(source,root)+' -->'))stale.push(output(source)+' (custom: review script correspondence, then --accept-custom)');
      continue;
    }
    const content = render(source,root,pages);
    if (check) { if (!fs.existsSync(target)||fs.readFileSync(target,'utf8').replace(/\r\n/g,'\n')!==content) stale.push(output(source)); }
    else fs.writeFileSync(target,content);
  }
  if (stale.length) throw Error('Run npm run render; stale HTML: '+stale.join(', '));
  return count;
}
if (require.main === module) { try { const i=process.argv.indexOf('--accept-custom');if(i>=0)acceptCustom(process.argv[i+1]);else console.log('PASS: '+run({check:process.argv.includes('--check')})+' presentation sources.'); } catch(e) { console.error(e.message); process.exitCode=1; } }
module.exports = {ROOT, files, inventory, output, slug, rewrite, render, run,custom,sourceHash,acceptCustom};
