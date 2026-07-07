import fs from 'node:fs';
import path from 'node:path';

const SITE = 'https://romansbuildingservices.com';
function files(dir) {
  let out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(files(p));
    else out.push(p);
  }
  return out;
}

const xmls = files('public').filter((f) => /sitemap.*\.xml$/.test(f));
let badSitemap = [];
for (const f of xmls) {
  const xml = fs.readFileSync(f, 'utf8');
  for (const m of xml.matchAll(/<loc>(https:\/\/romansbuildingservices\.com[^<]+)<\/loc>/g)) {
    const u = new URL(m[1]);
    if (u.pathname !== '/' && !u.pathname.endsWith('/') && !/\.[a-z0-9]{2,8}$/i.test(u.pathname)) {
      badSitemap.push(`${f}: ${m[1]}`);
    }
  }
}

const htmls = files('dist').filter((f) => f.endsWith('index.html'));
let badCanon = [];
let noH1 = [];
let missingDesc = [];
let noSchema = [];
let badLinks = [];
for (const f of htmls) {
  const html = fs.readFileSync(f, 'utf8');
  const rel = f.split(path.sep).join('/');
  const canon = (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i) || [])[1] || '';
  if (!canon) badCanon.push(`${rel}: missing`);
  else {
    const u = new URL(canon);
    if (u.hostname !== 'romansbuildingservices.com' || (u.pathname !== '/' && !u.pathname.endsWith('/'))) {
      badCanon.push(`${rel}: ${canon}`);
    }
  }
  if (!/<h1\b/i.test(html)) noH1.push(rel);
  const desc = (html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || [])[1] || '';
  if (desc.length < 80) missingDesc.push(`${rel}: ${desc.length}`);
  if (!/application\/ld\+json/.test(html)) noSchema.push(rel);
  for (const m of html.matchAll(/href="(https:\/\/romansbuildingservices\.com\/[^"#?]+|\/[^"#?]+)"/g)) {
    const href = m[1];
    const u = new URL(href, SITE);
    if (/\.[a-z0-9]{2,8}$/i.test(u.pathname)) continue;
    if (u.pathname !== '/' && !u.pathname.endsWith('/')) badLinks.push(`${rel}: ${href}`);
    if (badLinks.length > 20) break;
  }
}

const robots = fs.readFileSync('public/robots.txt', 'utf8');
const checks = {
  htmlPages: htmls.length,
  sitemapFiles: xmls.length,
  badSitemap: badSitemap.length,
  badCanon: badCanon.length,
  noH1: noH1.length,
  shortOrMissingDescriptions: missingDesc.length,
  noSchema: noSchema.length,
  badInternalLinks: badLinks.length,
  robotsBlocksJson: /Disallow:\s*\/\*\.json/.test(robots),
  hasLlmSitemap: fs.existsSync('public/sitemap-llms.xml'),
  hasOpenAI: /GPTBot|OAI-SearchBot|ChatGPT-User/.test(robots),
  hasClaude: /ClaudeBot|Claude-Web|anthropic-ai/.test(robots),
  hasPerplexity: /PerplexityBot/.test(robots),
  hasGeminiGoogle: /Googlebot|GoogleOther|Google-Extended|Google-InspectionTool/.test(robots),
  hasGrok: /GrokBot|xAI-Bot/.test(robots),
};
console.log(JSON.stringify(checks, null, 2));
if (badSitemap.length) console.log('badSitemap', badSitemap.slice(0, 10));
if (badCanon.length) console.log('badCanon', badCanon.slice(0, 10));
if (missingDesc.length) console.log('shortDesc', missingDesc.slice(0, 10));
if (noSchema.length) console.log('noSchema', noSchema.slice(0, 10));
if (badLinks.length) console.log('badLinks', badLinks.slice(0, 10));
if (checks.badSitemap || checks.badCanon || checks.noH1 || checks.noSchema || checks.robotsBlocksJson) process.exit(1);
