import fs from 'node:fs';
import path from 'node:path';
const context=process.env.CONTEXT;
if(context!=='deploy-preview') throw new Error(`Review-only branch refuses ${context || 'unspecified'} deployment context. Production is prohibited.`);
const root=process.cwd(), out=path.join(root,'review-dist');
fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out);
const excluded=n=>n.endsWith('.js')||n.endsWith('.mjs')||n.endsWith('.map')||n.startsWith('sitemap')||['llms.txt','llms-full.txt','robots.txt','_headers','_redirects','netlify.toml'].includes(n);
function copy(src,dest,publicSource=false){for(const entry of fs.readdirSync(src,{withFileTypes:true})){if(publicSource&&excluded(entry.name))continue;const from=path.join(src,entry.name),to=path.join(dest,entry.name);if(entry.isDirectory()){fs.mkdirSync(to,{recursive:true});copy(from,to,publicSource);}else fs.copyFileSync(from,to);}}
copy(path.join(root,'public'),out,true);copy(path.join(root,'review/snapshot'),out);
let count=0;
function verify(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()){verify(p);continue;}if(/\.(?:js|mjs|map)$/.test(e.name)||e.name.startsWith('sitemap')||e.name.startsWith('llms'))throw Error(`Unexpected executable/discovery file: ${p}`);if(e.name.endsWith('.html')){const h=fs.readFileSync(p,'utf8');if(!h.includes('content="noindex, nofollow"')||!h.includes('data-review-only')||/404 Slopes Road|-33\.8796|151\.0942/i.test(h))throw Error(`Unsafe review HTML: ${p}`);for(const script of h.matchAll(/<script\b([^>]*)>/g))if(!script[1].includes('application/ld+json'))throw Error(`Executable review script: ${p}`);count++;}}}
verify(out);console.log(`Verified ${count} static review pages. Production builds prohibited.`);
