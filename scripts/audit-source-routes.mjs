/** Source inventory only. This does not run a browser or validate prerendered HTML. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const canonicalPath = (value) => `${new URL(value, 'https://romansbuildingservices.com').pathname.replace(/\/+$/, '')}/`;
const read = (root, file) => fs.readFileSync(path.join(root, file), 'utf8');
const walk = (directory) => fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
  const full = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(full) : [full];
});

// Import only local typed data modules, not page components or browser code.
function dataLoader(root) {
  const cache = new Map();
  const load = (relative) => {
    const file = path.resolve(root, relative);
    if (!file.startsWith(path.join(root, 'src/data') + path.sep) || !file.endsWith('.ts')) throw new Error(`Not a data module: ${relative}`);
    if (cache.has(file)) return cache.get(file).exports;
    const module = { exports: {} };
    cache.set(file, module);
    const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: {
      module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
    } }).outputText;
    new Function('require', 'module', 'exports', compiled)((specifier) => {
      if (!specifier.startsWith('@/data/')) throw new Error(`Unexpected runtime import: ${specifier}`);
      return load(`src/${specifier.slice(2)}.ts`);
    }, module, module.exports);
    return module.exports;
  };
  return load;
}

const reviewPatterns = [
  ['response-promise', /within\s+24\s+hours|same.day response|24\/7|mobilise quickly/i],
  ['fixed-outcome', /essentially permanent|permanent (?:fix|solution|repair)|stops? (?:all )?(?:further )?movement|guarantee|will last \d|lasts? \d+ (?:to|–|-) \d+ years|safe to (?:live|remain)|never (?:fails?|lasts?)/i],
  ['blanket-threshold', /(?:over|under|above|below|wider than) (?:600\s*mm|1\s*m|5\s*mm)|all pre.1930|every (?:heritage|strata|listed) (?:building|property)/i],
  ['unverified-local-proof', /we(?:'ve| have) (?:worked|restored|repaired|staged)|we (?:do this constantly|routinely|see this constantly)|highest .*in Sydney|more .*than any other|most .*over 20 years/i],
  ['price-or-return', /\$\d|\d+\s*(?:percent|%)|lifts? value|adds? .*value|return on investment/i],
  ['internal-marketing-copy', /SEO authority|exact .*searcher|query clusters|page you want to land on/i],
];

export function auditSourceRoutes(root = projectRoot) {
  const load = dataLoader(root);
  const main = read(root, 'src/main.tsx');
  const imports = new Map();
  for (const match of main.matchAll(/const (\w+) = lazy\(\(\) => import\('([^']+)'\)\)/g)) imports.set(match[1], `src/${match[2].replace(/^\.\//, '')}.tsx`);
  for (const match of main.matchAll(/import (\w+) from ['"]\.\/([^'"]+)['"]/g)) imports.set(match[1], `src/${match[2]}.tsx`);
  const routes = [];
  const add = (route, family, source, content, metaTitle = '') => routes.push({
    route: canonicalPath(route), family, source, metaTitle,
    reviewFlags: reviewPatterns.filter(([, pattern]) => pattern.test(content)).map(([name]) => name),
  });
  for (const match of main.matchAll(/<Route path="([^"]+)" element=\{<L><(\w+)\s*\/>/g)) {
    if (match[1].includes(':') || match[1] === '*') continue;
    const source = imports.get(match[2]);
    if (!source) throw new Error(`Missing import for ${match[2]}`);
    const content = read(root, source);
    const family = match[1].startsWith('/services/') ? (match[1].split('/').length === 3 ? 'service-hub' : 'service-detail') : match[1].startsWith('/areas/') ? 'area-hub' : match[1].startsWith('/learn/') ? 'article' : 'main-page';
    const metaTitle = content.match(/(?:metaTitle|<SEO(?:Head)?\s+title)="([^"]+)"/)?.[1] ?? '';
    add(match[1], family, source, content, metaTitle);
  }
  const { SUBURB_SLUGS, getSuburb } = load('src/data/suburbs.ts');
  for (const slug of SUBURB_SLUGS) { const data = getSuburb(slug); add(`/suburbs/${slug}`, 'suburb', 'src/data/suburbs.ts', JSON.stringify(data), data.metaTitle); }
  const { PROBLEMS } = load('src/data/problems.ts');
  for (const data of Object.values(PROBLEMS)) add(`/problems/${data.slug}`, 'problem', 'src/data/problems.ts', JSON.stringify(data), data.metaTitle);
  const { AREAS, PROBLEM_AREA_COMBOS } = load('src/data/areas.ts');
  const invalidCombos = [];
  for (const combo of PROBLEM_AREA_COMBOS()) {
    if (!PROBLEMS[combo.problem] || !AREAS[combo.area]?.problemNotes[combo.problem]) { invalidCombos.push(combo); continue; }
    add(`/problems/${combo.problem}/${combo.area}`, 'problem-area', 'src/data/areas.ts', `${AREAS[combo.area].housingProfile} ${AREAS[combo.area].problemNotes[combo.problem]}`, `${PROBLEMS[combo.problem].name} in ${AREAS[combo.area].name} | Romans`);
  }
  const { SERVICE_AREA_COMBOS, getServiceData } = load('src/data/serviceAreas.ts');
  for (const combo of SERVICE_AREA_COMBOS) {
    const service = getServiceData(combo.serviceSlug), area = AREAS[combo.areaSlug];
    if (!service || !area) { invalidCombos.push(combo); continue; }
    add(`/services/${combo.serviceSlug}/${combo.areaSlug}`, 'service-area', 'src/data/serviceAreas.ts', JSON.stringify(combo), `${service.title} ${area.name} | Romans`);
  }
  const { HERITAGE_ERAS } = load('src/data/heritage.ts');
  for (const data of Object.values(HERITAGE_ERAS)) add(`/heritage/${data.slug}`, 'heritage-era', 'src/data/heritage.ts', JSON.stringify(data), data.metaTitle);
  const { getAllCaseStudies } = load('src/data/caseStudies.ts');
  for (const data of getAllCaseStudies()) add(`/case-studies/${data.slug}`, 'case-study', 'src/data/caseStudies.ts', JSON.stringify(data), data.metaTitle);
  routes.sort((a, b) => a.route.localeCompare(b.route));
  const routeSet = new Set(routes.map((record) => record.route));
  const redirects = new Map([...main.matchAll(/<Route path="([^"]+)" element=\{<Navigate to="([^"]+)"/g)].map((match) => [canonicalPath(match[1]), canonicalPath(match[2])]));
  const xmlFiles = fs.readdirSync(path.join(root, 'public')).filter((file) => /^sitemap-.*\.xml$/.test(file) && !['sitemap-images.xml', 'sitemap-llms.xml'].includes(file));
  const sitemapRoutes = new Set(xmlFiles.flatMap((file) => [...read(root, `public/${file}`).matchAll(/<loc>https:\/\/romansbuildingservices\.com([^<]*)<\/loc>/g)].map((match) => canonicalPath(match[1]))));
  const sourceLinkCandidates = [];
  for (const file of walk(path.join(root, 'src')).filter((file) => /\.(tsx?|jsx?)$/.test(file))) {
    const content = fs.readFileSync(file, 'utf8');
    for (const match of content.matchAll(/(?:\b(?:href|to|parentAreaHref|primaryServiceHref|locationHref)\s*[=:]\s*)['"](\/(?!\/)[^'"]*)['"]/g)) {
      const target = canonicalPath(match[1]);
      if (/\.[a-z0-9]{2,8}\/?$/i.test(target) || target.startsWith('/api/')) continue;
      if (!routeSet.has(target) && !redirects.has(target)) sourceLinkCandidates.push({ source: path.relative(root, file), target: match[1] });
    }
  }
  const unresolvedDataLinks = [];
  const checkLink = (source, value) => {
    if (typeof value !== 'string' || !value.startsWith('/')) return;
    const target = canonicalPath(value);
    if (!routeSet.has(target) && !redirects.has(target)) unresolvedDataLinks.push({ source, target: value });
  };
  const inspectLinks = (source, value) => {
    if (!value || typeof value !== 'object') return;
    for (const [key, entry] of Object.entries(value)) {
      if (/^(?:href|route|parentAreaHref|primaryServiceHref|locationHref)$/.test(key)) checkLink(source, entry);
      else if (entry && typeof entry === 'object') inspectLinks(source, entry);
    }
  };
  for (const area of Object.values(AREAS)) {
    checkLink(`area:${area.slug}`, area.href);
    for (const slug of area.suburbs) checkLink(`area:${area.slug}`, `/suburbs/${slug}`);
  }
  for (const slug of SUBURB_SLUGS) inspectLinks(`suburb:${slug}`, getSuburb(slug));
  for (const data of Object.values(PROBLEMS)) inspectLinks(`problem:${data.slug}`, data);
  for (const data of Object.values(HERITAGE_ERAS)) inspectLinks(`heritage:${data.slug}`, data);
  for (const data of getAllCaseStudies()) {
    inspectLinks(`case-study:${data.slug}`, data);
    checkLink(`case-study:${data.slug}`, data.locationHref ?? `/suburbs/${data.suburbSlug}`);
  }
  const { serviceHierarchy } = load('src/data/serviceHierarchy.ts');
  for (const service of serviceHierarchy) {
    checkLink(`service:${service.slug}`, service.route);
    for (const detail of service.subServices) checkLink(`service:${service.slug}`, `${service.route}/${detail.slug}`);
  }
  const counts = routes.reduce((result, record) => ({ ...result, [record.family]: (result[record.family] ?? 0) + 1 }), {});
  return {
    mode: 'source-only; not browser, HTTP, visual or prerender verification',
    counts,
    totalRoutes: routes.length,
    indexableRoutes: routes.filter((record) => record.route !== '/search/').length,
    sitemapRoutes: sitemapRoutes.size,
    missingFromSitemaps: routes.filter((record) => record.route !== '/search/' && !sitemapRoutes.has(record.route)).map((record) => record.route),
    unknownSitemapRoutes: [...sitemapRoutes].filter((route) => !routeSet.has(route)),
    duplicateRoutes: routes.filter((record, index) => routes.findIndex((other) => other.route === record.route) !== index).map((record) => record.route),
    invalidComboData: invalidCombos,
    invalidRedirectTargets: [...redirects].filter(([, target]) => !routeSet.has(target)).map(([route, target]) => ({ route, target })),
    // Static literals may live in unused configuration. Review consumers before calling them live broken links.
    unresolvedSourceLinkCandidates: sourceLinkCandidates,
    unresolvedDataLinks,
    routes,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) console.log(JSON.stringify(auditSourceRoutes(), null, 2));
