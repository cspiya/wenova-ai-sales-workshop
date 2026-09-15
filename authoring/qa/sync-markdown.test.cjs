'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const {convert}=require('./sync-markdown.cjs');
const root=path.resolve(__dirname,'../..'),dir=fs.mkdtempSync(path.join(__dirname,'.validation-test-'));
const file=path.join(dir,'index.html'),source=path.relative(root,file).split(path.sep).join('/');
try{
 fs.writeFileSync(file,'<!doctype html><html><body><nav class="toc"><a href="#task">Feladat</a></nav><main id="main"><h1>Magyar cím</h1><section id="task"><h2>Feladat</h2><p>Árvíztűrő <strong>tükörfúrógép</strong>.</p><pre>  x &lt; y\n\n[adat] | `kód`</pre><table><tr><th>Mező</th></tr><tr><td>A | B</td></tr></table><a href="index.html#task">Folytatás</a></section></main></body></html>');
 const text=convert(source,new Set([source]));
 assert.equal((text.match(/^# /gm)||[]).length,1);
 assert(text.includes('<a name="task"></a>'));
 assert(text.includes('[Folytatás](#task)'));
 assert(text.includes('Árvíztűrő **tükörfúrógép**.'));
 assert(text.includes('```text\n  x < y\n\n[adat] | `kód`\n```'));
 assert(text.includes('| A \\| B |'));
 console.log('PASS: headings, GitHub anchors, relative links, Hungarian text, exact prompt whitespace and table escaping.');
}finally{
 if(path.dirname(dir)!==__dirname||!path.basename(dir).startsWith('.validation-test-'))throw Error('Unexpected fixture path');
 fs.unlinkSync(file);fs.rmdirSync(dir);
}
