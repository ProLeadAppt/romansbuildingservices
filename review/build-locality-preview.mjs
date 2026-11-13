import { mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// This branch is an editorial snapshot, never a production release candidate.
if (process.env.CONTEXT !== 'deploy-preview') throw new Error('Review-only build: deploy-preview context required. Production is prohibited.');
const out = resolve(root, 'review-dist');
rmSync(out, {recursive:true, force:true});
mkdirSync(out, {recursive:true});
for (const name of ['index.html','kurrajong-heights.html','grose-wold.html']) copyFileSync(resolve(root,'review/locality-pages',name),resolve(out,name));
console.log('Built three static review pages. No application code, forms, functions or analytics.');
