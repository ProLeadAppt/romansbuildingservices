import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const expectedAgents = ['Googlebot','Googlebot-Image','Googlebot-News','Google-InspectionTool','GoogleOther','Bingbot','msnbot','BingPreview','DuckDuckBot','Applebot','YandexBot','GPTBot','ChatGPT-User','OAI-SearchBot','ClaudeBot','Claude-Web','anthropic-ai','PerplexityBot','Perplexity-User','Google-Extended','Applebot-Extended','Bytespider','CCBot','cohere-ai','FacebookBot','Meta-ExternalAgent','Amazonbot','DiffbotBot','Diffbot','MistralAI-User','MistralAI','YouBot','Timpibot','xAI-Bot','GrokBot','*'];
const expectedSitemaps = ['sitemap.xml','sitemap-main.xml','sitemap-services.xml','sitemap-areas.xml','sitemap-problems.xml','sitemap-problem-areas.xml','sitemap-service-areas.xml','sitemap-heritage.xml','sitemap-images.xml','sitemap-llms.xml'];

// Evaluate the file's literal-prefix rules with REP group selection and
// longest-match precedence. No HTTP requests, including excluded paths.
function parse(text) {
 const groups=[]; let group;
 for (const line of text.split('\n')) {
  const match=line.replace(/#.*/, '').trim().match(/^([^:]+):\s*(.*)$/);
  if (!match) continue;
  const [,raw,value]=match; const key=raw.toLowerCase();
  if (key==='user-agent') {
   if (!group || group.rules.length) { group={agents:[],rules:[]}; groups.push(group); }
   group.agents.push(value.toLowerCase());
  } else if (['allow','disallow'].includes(key) && group) group.rules.push({allow:key==='allow',path:value});
 }
 return groups;
}
function allowed(groups,agent,path) {
 let selected=groups.filter(g=>g.agents.includes(agent.toLowerCase()));
 if (!selected.length) selected=groups.filter(g=>g.agents.includes('*'));
 const rules=selected.flatMap(g=>g.rules).filter(r=>r.path && path.startsWith(r.path));
 rules.sort((a,b)=>b.path.length-a.path.length || Number(b.allow)-Number(a.allow));
 return !rules.length || rules[0].allow;
}
for (const file of ['public/robots.txt','dist/robots.txt']) {
 test(`${file}: named and fallback crawlers share public access and exclusions`, {skip:file.startsWith('dist/')&&!fs.existsSync(file)},()=>{
  const text=fs.readFileSync(file,'utf8'); const groups=parse(text);
  assert.equal(groups.length,1,'Named groups must not override wildcard exclusions');
  assert.deepEqual(groups[0].agents,['*']);
  assert.deepEqual(groups[0].rules,[{allow:true,path:'/'},{allow:false,path:'/admin'},{allow:false,path:'/api/'}]);
  for (const agent of [...expectedAgents,'UnknownCrawler','gOoGlEbOt']) {
   for (const path of ['/','/contact/','/areas/hawkesbury-western-sydney/','/learn/brick-sandstone-repair-quotes-hawkesbury/','/llms.txt','/llms-full.txt','/site.webmanifest','/knowledge.json','/sitemap.xml','/apiary/']) assert.equal(allowed(groups,agent,path),true,`${agent} ${path}`);
   for (const path of ['/admin','/admin/','/admin/settings','/api/','/api/quote']) assert.equal(allowed(groups,agent,path),false,`${agent} ${path}`);
  }
  const sitemaps=[...text.matchAll(/^Sitemap:\s*(\S+)$/gm)].map(m=>m[1]);
  assert.deepEqual(sitemaps,expectedSitemaps.map(s=>`https://romansbuildingservices.com/${s}`));
 });
}

test('sitemap index keeps ten child URLs without fabricated index modification dates',()=>{
 const text=fs.readFileSync('public/sitemap.xml','utf8');
 const files=['main','services','areas','problems','problem-areas','service-areas','heritage','case-studies','images','llms'];
 assert.match(text,/<sitemapindex xmlns="http:\/\/www.sitemaps.org\/schemas\/sitemap\/0.9">/);
 assert.deepEqual([...text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]),files.map(s=>`https://romansbuildingservices.com/sitemap-${s}.xml`));
 assert.doesNotMatch(text,/<lastmod>/);

 assert.match(fs.readFileSync('src/pages/learn/RepairQuotesPage.tsx','utf8'),/datePublished: '2026-10-11'/);
 if (fs.existsSync('dist/sitemap.xml')) assert.equal(fs.readFileSync('dist/sitemap.xml','utf8'),text);
});
