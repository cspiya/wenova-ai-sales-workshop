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
const isLessonId = (id,moduleId) => id.startsWith(moduleId+'.') && /^\d{2}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id.slice(moduleId.length+1));
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
// Presentation layer: Wenova look, partner band on every page, step cards, day overview.
// Content stays in Markdown; this only maps known Markdown structures to markup.
const PARTNERS = [
  {key:'wenova', name:'Wenova', role:'Szervező · AI-működés', logo:'wenova-wordmark.png', w:1060, h:124},
  {key:'brandiseer', name:'Brandiseer', role:'Márkaazonos tartalom', logo:'brandiseer-icon.png', w:167, h:192, word:true},
  {key:'blackhole', name:'Blackhole Media', role:'Ügyfélszerzés · Sales Bot', logo:'black-hole-media-logo.png', w:854, h:80},
  {key:'estiwise', name:'EstiWise', role:'Ajánlatadás 0–24', logo:'estiwise-logo-feher.svg', w:509, h:144},
];
const LEAD = {'00':'wenova','01':'wenova','02':'brandiseer','03':'blackhole','04':'estiwise','05':'wenova'};
const partnerOf = text => { const t=String(text||'').toLowerCase(); return PARTNERS.find(p=>t.includes(p.key))?.key || null; };
// Step-card kinds, matched on the stable headings of authoring/template.md (prefix match).
const KINDS = [
  ['Ezt készíted el','goal'],['Erre lesz szükséged','input'],['Így működik','how'],['Ezekről te döntesz','decide'],
  ['Ezt kérd Claude-tól','prompt'],['Haladj végig ezeken','steps'],['Ellenőrizd az eredményt','check'],['Ha elakadtál','help'],
  ['Ezt viszed tovább','output'],['Ha maradt időd','extra'],['Bemenet','input'],['Kimenet','output'],
  ['Folytatás elakadás esetén','help'],['Moduladatok','info'],['Bemutató','how'],
];
const kindOf = (label,id) => {
  const byId = /--(prompt|steps|check|help)$/.exec(id||'')?.[1] || /^(prompt|steps|check|help)$/.exec(id||'')?.[1];
  return byId || KINDS.find(([p])=>label.startsWith(p))?.[1] || null;
};
const SCHEDULE = 'materials/schedule.md';
// Participant pages have no JavaScript: code blocks are selected whole by CSS, and this line says how to copy them.
const COPY_HINT = 'Másolás: kattints a szövegbe, majd Ctrl+C (Macen Cmd+C). Telefonon tartsd rajta az ujjad, és válaszd a „Másolás” pontot.';
// Reads the agenda table of materials/schedule.md; the single source for times, partners and speakers.
function schedule(root = ROOT) {
  const file = path.join(root, SCHEDULE);
  if (!fs.existsSync(file)) return [];
  const tokens = new MarkdownIt({html:true}).parse(fs.readFileSync(file,'utf8').replace(/\r\n/g,'\n'), {});
  const rows = []; let row = null, inBody = false;
  for (const t of tokens) {
    if (t.type === 'tbody_open') inBody = true;
    if (t.type === 'tbody_close') break;
    if (!inBody) continue;
    if (t.type === 'tr_open') row = [];
    if (t.type === 'inline' && row) row.push(t);
    if (t.type === 'tr_close') { rows.push(row); row = null; }
  }
  return rows.map(cells => {
    const link = cells[1]?.children?.find(c=>c.type==='link_open')?.attrGet('href') || '';
    const text = i => (cells[i]?.content || '').replace(/\[([^\]]*)\]\([^)]*\)/g,'$1').trim();
    return {cells, time:text(0), title:text(1), partner:text(2), speakers:text(3), builds:text(4),
      partnerKey:partnerOf(text(2)), moduleId:/modules\/([^/]+)\.md$/.exec(link)?.[1] || null,
      pause:!text(2) && !text(3) && !text(4)};
  });
}
// A missing logo file (e.g. in a test fixture) falls back to the partner name as text.
function logoImg(p, rel, root = ROOT) {
  if (!fs.existsSync(path.join(root,'materials/assets/logos',p.logo))) return '<span class="logo-word">'+escape(p.name)+'</span>';
  const height = 28, width = Math.round(p.w/p.h*height);
  return '<img class="logo logo--'+p.key+'" src="'+escape(rel('materials/assets/logos/'+p.logo))+'" alt="'+(p.word?'':escape(p.name))+'" width="'+width+'" height="'+height+'">'+
    (p.word ? '<span class="logo-word">'+escape(p.name)+'</span>' : '');
}
function partnerBand(rel, lead, variant, root = ROOT) {
  return '<div class="partner-band partner-band--'+variant+(lead?' has-lead':'')+'"><p class="partner-band__label">'+
    (lead ? 'Wenova × Brandiseer × Blackhole Media × EstiWise' : 'Négy hazai csapat, egy közös értékesítési folyamat')+'</p><ul class="partner-band__list" aria-label="Partnerek">'+
    PARTNERS.map(p=>'<li class="partner partner--'+p.key+(p.key===lead?' is-lead':'')+'"><span class="partner__logo">'+logoImg(p,rel,root)+'</span><span class="partner__role">'+
      (p.key===lead ? '<span class="partner__lead">Blokkgazda</span> · ' : '')+escape(p.role)+'</span></li>').join('')+'</ul></div>';
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
  const isSchedule = source === SCHEDULE, isHome = source === 'materials/README.md';
  const lead = LEAD[(moduleId||noteModule||'').slice(0,2)] || null;
  const mainId = noteModule ? 'notes' : 'main';
  const relative = p => path.posix.relative(path.posix.dirname(output(source)),p);
  const agenda = schedule(root);
  const raw = s => { const t = new tokens[0].constructor('html_block','',0); t.content = s; return t; };
  const inlineHtml = t => { for (const c of t.children||[]) if (c.type==='link_open') c.attrSet('href',rewrite(c.attrGet('href'),source,pages)); return md.renderer.renderInline(t.children||[],md.options,{}); };
  const inMaterials = source.startsWith('materials/');
  const toc = [], used = new Set([mainId]);
  let title = '', skipToc = false, hero = false, heroParas = 0, cell = false, copyHinted = false;
  const tocSlot = raw('');
  const rendered = [];
  const closeCell = () => { if (cell) { rendered.push(raw('</div>\n')); cell = false; } };
  const closeHero = () => {
    if (!hero) return;
    const slot = agenda.find(r => r.moduleId && r.moduleId === (moduleId||noteModule));
    if (slot) {
      const p = PARTNERS.find(p=>p.key===slot.partnerKey);
      rendered.push(raw('<div class="block-banner'+(p?' block-banner--'+p.key:'')+'"><p class="block-banner__when"><span class="chip chip--time">'+escape(slot.time)+'</span> <span class="block-banner__title">A nap menetében: '+escape(slot.title)+'</span></p>'+
        (p ? '<p class="block-banner__lead"><span class="logo-tile">'+logoImg(p,relative,root)+'</span><span><span class="block-banner__label">Blokkgazda</span> <strong>'+escape(slot.partner)+'</strong>'+(slot.speakers?' · '+escape(slot.speakers):'')+'</span></p>' : '')+
        (slot.builds ? '<p class="block-banner__builds"><span class="block-banner__label">Ezt építed</span> '+escape(slot.builds)+'</p>' : '')+'</div>\n'));
    }
    if (isHome && pages.has(SCHEDULE)) {
      const firstModule = [...pages].filter(p=>/^materials\/modules\/0[1-9]/.test(p)).sort()[0];
      rendered.push(raw('<p class="hero-actions"><a class="btn btn--primary" href="'+relative(output(SCHEDULE))+'">A nap menete →</a>'+
        (firstModule ? ' <a class="btn" href="'+relative(output(firstModule))+'">Az első blokk</a>' : '')+'</p>\n'));
      // Compact agenda strip: the five blocks with time, partner logo and link, from materials/schedule.md.
      const blocks = agenda.filter(s=>s.moduleId && /^0[1-9]/.test(s.moduleId));
      if (blocks.length) rendered.push(raw('<ol class="day-strip" aria-label="A nap blokkjai">'+blocks.map(s=>{
        const p = PARTNERS.find(p=>p.key===s.partnerKey), target = 'materials/modules/'+s.moduleId+'.md';
        return '<li class="day-strip__item'+(p?' slot--'+p.key:'')+'"><span class="chip chip--time">'+escape(s.time)+'</span>'+
          (pages.has(target)?'<a href="'+relative(output(target))+'">'+escape(s.title)+'</a>':'<strong>'+escape(s.title)+'</strong>')+
          (p?'<span class="logo-tile">'+logoImg(p,relative,root)+'</span>':'')+'</li>';
      }).join('')+'</ol>\n'));
    }
    rendered.push(raw('</header>\n'), tocSlot); hero = false;
  };
  for (let i=0; i<tokens.length; i++) {
    const token = tokens[i];
    if (token.type === 'heading_open' && token.tag === 'h2' && tokens[i+1]?.content === 'Tartalom') { skipToc = true; i+=2; continue; }
    if (skipToc) {
      if (token.type === 'html_block' || token.type === 'heading_open') skipToc = false;
      else continue;
    }
    // A Markdown-only self link ("HTML-változat") is noise on the HTML page itself.
    if (token.type === 'paragraph_open') {
      const kids = tokens[i+1]?.children || [];
      if (kids.length===3 && kids[0].type==='link_open' && kids[0].attrGet('href')===path.posix.basename(output(source))) { i+=2; continue; }
    }
    if (token.type === 'html_block') {
      const anchor = token.content.trim().match(/^<a (?:name|id)="([\w.:-]+)"><\/a>$/);
      if (anchor) {
        const id = anchor[1];
        if (id === mainId) continue;
        if (used.has(id)) throw Error(source+': duplicate anchor '+id);
        used.add(id);
        closeHero(); closeCell();
        const lesson = moduleId && isLessonId(id,moduleId);
        token.content = '<a id="'+id+'"'+(lesson?' data-lesson-id="'+id+'"':'')+'></a>\n';
        if (tokens[i+1]?.type === 'heading_open') tokens[i+1].meta = {anchor:id, lesson};
      }
    }
    let opener = null;
    if (token.type === 'heading_open') {
      const label = tokens[i+1].content;
      if (token.tag === 'h1') {
        if (title) throw Error(source+': expected one h1');
        title = label; rendered.push(raw('<header class="page-hero">\n')); hero = true;
      } else {
        if (['h2','h3'].includes(token.tag)) { closeHero(); closeCell(); copyHinted = false; }
        let id = token.meta?.anchor;
        if (!id) { const base = slug(label) || 'section'; id = base; let n=0; while(used.has(id)) id=base+'-'+(++n); used.add(id); token.attrSet('id',id); }
        if (token.tag === 'h2') toc.push({id,label});
        if (token.meta?.lesson) token.attrSet('class','lesson-heading');
        const kind = ['h2','h3'].includes(token.tag) && !token.meta?.lesson ? kindOf(label,id) : null;
        if (kind) { token.attrSet('class','cell-title'); opener = raw('<div class="cell cell--'+kind+'">\n'); }
      }
    }
    if (hero && token.type === 'paragraph_open') {
      const inline = tokens[i+1], kids = inline?.children || [];
      // The status stays a short label; any text after it becomes the normal intro paragraph.
      const label = /^\*\*(?:Állapot|Státusz):[^*]*\*\*(?=\s*\S)/.exec(inline?.content || '')?.[0];
      const labelEnd = kids.findIndex(k=>k.type === 'strong_close') + 1;
      if (label && labelEnd) {
        const Token = token.constructor, close = new Token('paragraph_close','p',-1), open = new Token('paragraph_open','p',1), intro = new Token('inline','',0);
        close.block = open.block = intro.block = true; open.meta = {intro:true};
        intro.content = inline.content.slice(label.length).trim();
        intro.children = kids.slice(labelEnd); while (intro.children[0]?.type === 'softbreak') intro.children.shift();
        if (intro.children[0]?.type === 'text') intro.children[0].content = intro.children[0].content.trimStart();
        inline.content = label; inline.children = kids.slice(0,labelEnd);
        tokens.splice(i+2,0,close,open,intro);
      }
      const content = inline?.content || '';
      token.attrSet('class', token.meta?.intro ? 'lead' : /^\*\*(?:Állapot|Státusz):/.test(content) ? 'state' : /^\[[^\]]*\]\([^)]*\)$/.test(content) ? 'hero-links' : heroParas++ === 0 && content.length < 90 ? 'kicker' : 'lead');
    }
    if (isSchedule && token.type === 'ordered_list_open') token.attrSet('class','flow');
    if (isSchedule && token.type === 'table_open') {
      // The agenda table becomes the timeline; the same rows feed module banners.
      while (tokens[i].type !== 'table_close') i++;
      rendered.push(raw('<ol class="timeline">\n'+agenda.map(r=>{
        const p = PARTNERS.find(p=>p.key===r.partnerKey);
        return '<li class="slot'+(r.pause?' slot--pause':'')+(p?' slot--'+p.key:'')+(r.moduleId?' slot--module':'')+'"><p class="slot__time">'+escape(r.time)+'</p><div class="slot__body">'+
          '<p class="slot__title">'+inlineHtml(r.cells[1])+'</p>'+
          (p ? '<p class="slot__who"><span class="logo-tile">'+logoImg(p,relative,root)+'</span><span><strong>'+escape(r.partner)+'</strong>'+(r.speakers?'<br>'+escape(r.speakers):'')+'</span></p>' : '')+
          (r.builds ? '<p class="slot__builds"><span class="slot__label">Mit építesz</span> '+inlineHtml(r.cells[4])+'</p>' : '')+'</div></li>\n';
      }).join('')+'</ol>\n'));
      continue;
    }
    for (const child of token.children || []) {
      if (child.type === 'link_open') {
        const href = rewrite(child.attrGet('href'),source,pages); child.attrSet('href',href);
        // Section links open beside the note; the plain module link leads to the module page itself.
        if (noteModule && href.startsWith('../../materials/modules/'+noteModule+'.html#')) child.attrSet('target','lesson');
      }
      if (child.type === 'image') child.attrSet('src',rewrite(child.attrGet('src'),source,pages));
    }
    if (opener) {
      const prev = rendered.at(-1);
      if (prev?.type === 'html_block' && /^<a id=/.test(prev.content)) rendered.splice(rendered.length-1,0,opener); else rendered.push(opener);
      cell = true;
    }
    if (token.type === 'fence' && inMaterials && !copyHinted) { rendered.push(raw('<p class="copy-hint">'+escape(COPY_HINT)+'</p>\n')); copyHinted = true; }
    rendered.push(token);
  }
  closeHero(); closeCell();
  if (!title) throw Error(source+': missing h1');
  const css = relative('materials/assets/notebook.css');
  const home = inMaterials ? relative('materials/index.html') : relative('index.html');
  const nav = [['Kezdőlap',home]];
  if (pages.has(SCHEDULE)) nav.push(['A nap menete',relative(output(SCHEDULE))]);
  if (!inMaterials) nav.push(['Résztvevői tananyag',relative('materials/index.html')]);
  nav.push(['Markdown-forrás',path.posix.basename(source)]);
  // Previous / next module links keep the day's order visible at the end of every module.
  let pager = '';
  if (moduleId) {
    const mods = [...pages].filter(p=>p.startsWith('materials/modules/')).sort(), at = mods.indexOf(source);
    const label = p => { const m = /^# (.+)$/m.exec(fs.readFileSync(path.join(root,p),'utf8')); return escape(m ? m[1].trim() : path.posix.basename(p,'.md')); };
    const link = (p,dir) => p ? '<a class="pager__'+dir+'" href="'+relative(output(p))+'"><span>'+(dir==='prev'?'← Előző modul':'Következő modul →')+'</span>'+label(p)+'</a>' : '<span></span>';
    pager = '<nav class="pager" aria-label="Modulok">'+link(mods[at-1],'prev')+link(mods[at+1],'next')+'</nav>\n';
  }
  const tocItems = toc.map(t=>'<li><a href="#'+escape(t.id)+'">'+escape(t.label)+'</a></li>').join('');
  // Phones get the contents after the page title, collapsed; the desktop sidebar stays as it is.
  if (!noteModule && toc.length) tocSlot.content = '<details class="toc-mobile"><summary>Tartalom</summary><nav aria-label="Tartalom"><ol>'+tocItems+'</ol></nav></details>\n';
  const body = md.renderer.render(rendered,md.options,{});
  const sidebar = '<nav class="toc" aria-label="Tartalom"><p>Tartalom</p><ol>'+tocItems+'</ol></nav>';
  // The lesson pane opens on the module overview, so the page header is not repeated beside the note.
  const lessonSource = 'materials/modules/'+noteModule+'.md';
  const lessonStart = noteModule && fs.existsSync(path.join(root,lessonSource)) && /^<a name="overview"><\/a>$/m.test(fs.readFileSync(path.join(root,lessonSource),'utf8')) ? '#overview' : '';
  const frame = noteModule ? '<div class="lesson-pane"><iframe name="lesson" src="../../materials/modules/'+noteModule+'.html'+lessonStart+'" title="Résztvevői tananyag"></iframe></div>' : sidebar;
  const kind = noteModule ? 'notes' : moduleId ? 'module' : isSchedule ? 'schedule' : isHome ? 'home' : 'doc';
  return '<!doctype html>\n<!-- Generated from '+source+'; edit Markdown and run npm run render. -->\n'+
    '<html lang="hu"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>'+escape(title)+' · AI Sales &amp; Marketing Workshop</title><link rel="stylesheet" href="'+css+'">'+
    (noteModule?'<link rel="stylesheet" href="notes.css">':'')+'</head><body class="page page--'+kind+(lead?' lead--'+lead:'')+'">\n'+
    '<a class="skip" href="#'+mainId+'">Ugrás a tartalomhoz</a><header class="site-head"><div class="site-head__bar"><a class="site-head__brand" href="'+home+'">'+(fs.existsSync(path.join(root,'materials/assets/logos/wenova-wordmark.png'))?'<img src="'+relative('materials/assets/logos/wenova-wordmark.png')+'" alt="Wenova" width="154" height="18">':'<strong>Wenova</strong>')+'<span>AI Sales &amp; Marketing Workshop</span></a>'+
    '<nav class="site-head__nav" aria-label="Fő navigáció">'+nav.map(([l,h])=>'<a href="'+h+'"'+(l==='A nap menete'?' class="is-cta"':'')+'>'+l+'</a>').join('')+'</nav></div>'+partnerBand(relative,lead,'head',root)+'</header>\n'+
    '<div class="'+(noteModule?'instructor-grid':'layout')+'">'+frame+'<main id="'+mainId+'"'+(moduleId?' data-module-id="'+moduleId+'"':'')+(noteModule?' class="notes"':'')+'>\n'+body+pager+'</main></div>\n'+
    '<footer class="site-foot">'+partnerBand(relative,lead,'foot',root)+'<p class="site-foot__meta">AI Sales &amp; Marketing Workshop · 2026. november 19. · CEU, Budapest · a Wenova szervezésében</p></footer>\n</body></html>\n';
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
module.exports = {ROOT, files, inventory, output, slug, rewrite, render, run,custom,sourceHash,acceptCustom,isLessonId,PARTNERS,partnerOf,schedule};
