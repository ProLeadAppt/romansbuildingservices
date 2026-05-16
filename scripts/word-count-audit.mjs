import fs from 'fs';
import path from 'path';

function getAllHtml(dir, results = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) getAllHtml(full, results);
    else if (entry.name === 'index.html') results.push(full);
  }
  return results;
}

const files = getAllHtml('dist');
const counts = files.map((f) => {
  const html = fs.readFileSync(f, 'utf8');
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const wc = text.split(/\s+/).filter(Boolean).length;
  const route = f.split(path.sep).slice(1, -1).join('/') || '/';
  return { route, wc };
});

counts.sort((a, b) => a.wc - b.wc);

console.log('TOP 40 THINNEST PAGES:');
counts.slice(0, 40).forEach((c) => console.log(String(c.wc).padStart(5), c.route));

console.log('\nPAGE COUNT BUCKETS:');
const buckets = { '<300': 0, '300-499': 0, '500-699': 0, '700-999': 0, '1000+': 0 };
counts.forEach((c) => {
  if (c.wc < 300) buckets['<300']++;
  else if (c.wc < 500) buckets['300-499']++;
  else if (c.wc < 700) buckets['500-699']++;
  else if (c.wc < 1000) buckets['700-999']++;
  else buckets['1000+']++;
});
Object.entries(buckets).forEach(([k, v]) => console.log(k.padEnd(10), v));
console.log('Total pages:', counts.length);
