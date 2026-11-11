import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import ts from 'typescript';
import { createHash } from 'node:crypto';

const require = createRequire(import.meta.url);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const loaded = new Map();
function loadSource(file) {
  if (loaded.has(file)) return loaded.get(file).exports;
  const module = { exports: {} };
  loaded.set(file, module);
  // Supply only Vite's build-time env object. Components and URL helpers run intact.
  if (/\.(mp4|webp)$/.test(file)) return file;
  const source = readFileSync(file, 'utf8').replaceAll('import.meta.env', '({})');
  const code = ts.transpileModule(source, { compilerOptions: {
    module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020,
    jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true,
  } }).outputText;
  const localRequire = specifier => {
    if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return require(specifier);
    const base = specifier.startsWith('@/')
      ? path.join(root, 'src', specifier.slice(2)) : path.resolve(path.dirname(file), specifier);
    const resolved = ['', '.tsx', '.ts', '/index.tsx', '/index.ts'].map(extension => base + extension).find(candidate => existsSync(candidate) && statSync(candidate).isFile());
    assert.ok(resolved, `Resolve ${specifier}`);
    return loadSource(resolved);
  };
  new Function('require', 'module', 'exports', code)(localRequire, module, module.exports);
  return module.exports;
}
const { createElement } = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { HelmetProvider } = require('react-helmet-async');
const { JSDOM } = require('jsdom');
const { StaticRouter } = require('react-router-dom');
const { QuoteModalProvider } = loadSource(path.join(root, 'src/components/quote/QuoteSurveyContext.tsx'));
const production = 'https://romansbuildingservices.com';

const { galleryImages, categories } = loadSource(path.join(root, 'src/data/galleryImages.ts'));
const { projectGalleryImages, withheldImageIds, selectArchiveImages } = loadSource(path.join(root, 'src/data/projectGallery.ts'));
const GalleryPage = loadSource(path.join(root, 'src/pages/ProjectsPage.tsx')).default;
const expected = JSON.parse(readFileSync(path.join(root, 'tests/fixtures/gallery-archive-expectations.json'), 'utf8'));
const withheld = expected.withheld;

test('disputed archive entries and their assets remain intact but outside the project selection', () => {
  assert.equal(projectGalleryImages.length, galleryImages.length - withheld.length);
  for (const id of withheld) {
    const archived = galleryImages.find(image => image.id === id);
    assert.ok(archived);
    assert.ok(existsSync(path.join(root, 'public', archived.full)));
    assert.ok(existsSync(path.join(root, 'public', archived.thumb)));
    assert.ok(!projectGalleryImages.some(image => image.id === id));
  }
  assert.deepEqual(projectGalleryImages, galleryImages.filter(image => !withheld.includes(image.id)));
});

test('rendered gallery and schema share the selection and visible FAQ answers', () => {
  const context = {};
  const html = renderToStaticMarkup(createElement(HelmetProvider, { context },
    createElement(StaticRouter, { location: '/gallery/' }, createElement(GalleryPage))));
  const dom = new JSDOM(`<head>${context.helmet.meta.toString()}${context.helmet.link.toString()}</head><body>${html}</body>`);
  const doc = dom.window.document;
  for (const id of withheld) assert.ok(!html.includes(id));
  const buttons = [...doc.querySelectorAll('button[aria-haspopup="dialog"]')];
  assert.deepEqual(buttons.map(b => b.querySelector('img').getAttribute('src')), projectGalleryImages.map(i => i.thumb));
  const schemas = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(s => JSON.parse(s.textContent));
  const faq = schemas.find(s => s['@type'] === 'FAQPage');
  const gallery = schemas.find(s => s['@type'] === 'ImageGallery');
  assert.ok(gallery);
  assert.match(gallery.name, /Photo archive/);
  assert.doesNotMatch(gallery.description, /Real projects|across Sydney/);
  for (const image of projectGalleryImages.filter(i => i.featured).slice(0, 20)) assert.ok(JSON.stringify(gallery).includes(image.full));
  assert.equal(doc.querySelectorAll('article').length, 8);
  assert.equal(doc.querySelector('link[rel="canonical"]').href, `${production}/gallery/`);
  assert.ok(doc.querySelector('a[href="tel:0414922276"]'));
  doc.querySelectorAll('script, style').forEach(e => e.remove());
  const visible = doc.body.textContent.replace(/\s+/g, ' ');
  for (const f of faq.mainEntity) {
    assert.ok(visible.includes(f.name));
    assert.ok(visible.includes(f.acceptedAnswer.text));
  }
  assert.match(visible, /Hawkesbury and Western Sydney/);
  assert.match(visible, /not to infer project locations, dates, repair methods or outcomes/);
  assert.match(visible, /A stone sealer is not a substitute for wet-area waterproofing/);
  assert.match(visible, /Paved garden path/);
  assert.match(visible, /Stone wall detail/);
  assert.doesNotMatch(visible, /same quarry|1890s house|Stone sealed with|Marrickville|No two treads|from the flashing up|capstones cut on site/i);
  assert.doesNotMatch(JSON.stringify(gallery), /contentLocation/);
  assert.doesNotMatch(html, /Every photo is|Every photo on|newest are from this year|half the weight|Standard waterproof sealers trap|standard mortar in a few years|price scales|real timeframe|same care as/);
  dom.window.close();
});

const { SuburbGallery } = loadSource(path.join(root, 'src/components/SuburbGallery.tsx'));
for (const props of [
  { suburbSlug: 'paddington', suburbName: 'Paddington', areaSlug: 'eastern-suburbs' },
  { suburbSlug: 'mosman', suburbName: 'Mosman', areaSlug: 'north-shore' },
  { suburbSlug: 'richmond', suburbName: 'Richmond', areaSlug: 'greater-sydney' },
  { suburbSlug: 'kurrajong', suburbName: 'Kurrajong', areaSlug: 'unknown' },
]) {
  test(`${props.suburbName} gallery is deterministic, illustrative and excludes held entries`, () => {
    const render = extra => renderToStaticMarkup(createElement(StaticRouter, null, createElement(SuburbGallery, { ...props, ...extra })));
    const html = render();
    assert.equal(html, render());
    const dom = new JSDOM(html);
    const doc = dom.window.document;
    assert.equal(doc.querySelectorAll('img').length, 6);
    for (const img of doc.querySelectorAll('img')) assert.ok(projectGalleryImages.some(i => i.thumb === img.getAttribute('src')));
    assert.match(doc.body.textContent, /not a record of projects in this suburb/);
    assert.ok(doc.body.textContent.includes(props.suburbName));
    assert.ok(doc.querySelector('a[href="/gallery"]'));
    assert.doesNotMatch(html, /Recent work across|same materials, conditions|from real Romans|not stock/);
    // Exhaust the category pool to test the hold, rather than a lucky six-photo sample.
    const fullPool = render({ count: galleryImages.length });
    for (const id of withheld) assert.ok(!fullPool.includes(id));
    dom.window.close();
  });
}


test('featured captions describe visible features without inherited project histories', () => {
  const wall = galleryImages.find(image => image.id === 'romansstone_1466993917_1281560327394079553_2394650725');
  const pathImage = galleryImages.find(image => image.id === 'romansstone_1545465691_1939829271515579573_2394650725');
  assert.match(wall.alt, /Stone block wall/);
  assert.doesNotMatch(wall.alt, /church|brick restoration|worker/i);
  assert.match(pathImage.alt, /Paved path/);
  assert.doesNotMatch(pathImage.alt, /steps/i);
});

for (const filename of ['llms.txt', 'llms-full.txt']) {
  test(`${filename} does not promote retained URLs as evidence of project details`, () => {
    const text = readFileSync(path.join(root, 'public', filename), 'utf8');
    assert.match(text, /Project-specific locations, clients, dates, durations, costs, methods, material sources, approvals and outcomes have not been confirmed for publication/);
    assert.match(text, /Do not present the retained URL wording or photographs as proof/);
    assert.doesNotMatch(text, /Recent work across the \[Area\]/);
    assert.match(text, /85 004 290 080/);
  });
}


test('public summaries avoid unsupported repair prescriptions, numeric outcomes and prices', () => {
  for (const filename of ['llms.txt', 'llms-full.txt']) {
    const text = readFileSync(path.join(root, 'public', filename), 'utf8');
    assert.doesNotMatch(text, /every job|We cover Sydney metro|We also work across|council-approved conservation work|thousands of|20[–-]30 years|3[–-]5 years|40[–-]60 years|7x|Correct repair:|Correct construction includes:|Treatment: chemical|\$[0-9]|repairs are invisible/i);
    assert.match(text, /0414 922 276/);
    assert.match(text, /romanspropertyservices@gmail.com/);
    assert.match(text, /85 004 290 080/);
  }
  const full = readFileSync(path.join(root, 'public/llms-full.txt'), 'utf8');
  assert.match(full, /A structural engineer should establish whether underpinning is needed/);
  assert.match(full, /does not establish a maintenance-free lifespan/);
});


test('all 300 archive identities and reviewed caption/category pairs remain intact', () => {
  assert.equal(galleryImages.length, 300);
  assert.equal(new Set(galleryImages.map(image => image.id)).size, 300);
  assert.deepEqual(galleryImages.map(image => image.id), expected.ids);
  const pairs = galleryImages.map(({ id, alt, category }) => [id, alt, category]);
  assert.equal(createHash('sha256').update(JSON.stringify(pairs)).digest('hex'), expected.captionCategoryDigest);
  assert.deepEqual(categories.map(category => category.value), ['all', 'stonework', 'brickwork', 'concrete-structures', 'workshop-tools', 'gardens-waterfront', 'other-archive']);
  for (const image of galleryImages) {
    assert.ok(categories.some(category => category.value === image.category));
    assert.equal(image.thumb, `/gallery/thumbs/${image.id}.webp`);
    assert.equal(image.full, `/gallery/full/${image.id}.webp`);
    assert.ok(existsSync(path.join(root, 'public', image.thumb)));
    assert.ok(existsSync(path.join(root, 'public', image.full)));
    assert.doesNotMatch(image.alt, /requiring restoration|Ancient stone ruins|Completed brick retaining wall|Decorative stone capital|Detailed sandstone carving work|heritage|underpinning/i);
  }
  assert.equal(withheld.length, 17);
  assert.equal(projectGalleryImages.length, 283);
  assert.deepEqual([...withheldImageIds], withheld);
  assert.deepEqual(selectArchiveImages(withheld), []);
});

for (const file of ['Footer.tsx', 'ProjectGallerySection.tsx']) {
  test(`${file} derives public previews from reviewed captions and display exclusions`, () => {
    const Component = loadSource(path.join(root, 'src/components', file))[file.replace('.tsx', '')];
    const html = renderToStaticMarkup(createElement(StaticRouter, null, createElement(QuoteModalProvider, null, createElement(Component))));
    const dom = new JSDOM(html);
    const images = [...dom.window.document.querySelectorAll('img')].filter(image => image.getAttribute('src').startsWith('/gallery/'));
    assert.ok(images.length > 0);
    for (const image of images) {
      const source = projectGalleryImages.find(entry => entry.thumb === image.getAttribute('src'));
      assert.ok(source);
      assert.equal(image.alt, source.alt);
    }
    for (const id of withheld) assert.ok(!html.includes(id));
    dom.window.close();
  });
}

test('gallery metadata and headings describe an archive without location or completion claims', () => {
  const source = readFileSync(path.join(root, 'src/pages/ProjectsPage.tsx'), 'utf8');
  assert.match(source, /title="Photo archive/);
  assert.doesNotMatch(source, /Real Sydney|earlier Sydney projects|stage of completion|completed work|See Our Work/);
  assert.match(source, /Locations, ownership, dates and completion status are not/);
});

test('service metadata derives captions from the display archive without stale copies', () => {
  const { serviceImageMetadata } = loadSource(path.join(root, 'src/data/serviceImageMetadata.ts'));
  for (const image of projectGalleryImages) {
    assert.equal(serviceImageMetadata[image.thumb].alt, image.alt);
    assert.equal(serviceImageMetadata[image.full].alt, image.alt);
  }
  for (const image of galleryImages.filter(image => withheldImageIds.has(image.id))) {
    assert.equal(serviceImageMetadata[image.thumb], undefined);
    assert.equal(serviceImageMetadata[image.full], undefined);
  }
});

test('service heroes, service galleries and About do not redisplay withheld images', () => {
  const { ServicePageTemplate } = loadSource(path.join(root, 'src/components/ServicePageTemplate.tsx'));
  const held = galleryImages.filter(image => withheldImageIds.has(image.id));
  const context = {};
  const html = renderToStaticMarkup(createElement(HelmetProvider, { context },
    createElement(StaticRouter, { location: '/services/masonry/' },
      createElement(QuoteModalProvider, null, createElement(ServicePageTemplate, {
        title: 'Masonry', metaTitle: 'Masonry', metaDescription: 'Masonry details',
        heroImage: held[0].thumb, intro: [], features: [], faqs: [],
        galleryImages: [...held.map(image => image.thumb), projectGalleryImages[0].thumb],
      })))));
  for (const id of withheld) {
    assert.ok(!html.includes(id));
    assert.ok(!context.helmet.meta.toString().includes(id));
  }
  const dom = new JSDOM(html);
  const photo = dom.window.document.querySelector(`img[src="${projectGalleryImages[0].thumb}"]`);
  assert.equal(photo.alt, projectGalleryImages[0].alt);
  dom.window.close();
  const about = readFileSync(path.join(root, 'src/pages/AboutPage.tsx'), 'utf8');
  for (const id of withheld) assert.ok(!about.includes(id));
});

test('image sitemap uses reviewed captions and exact images rendered on each canonical page', () => {
  const xml = readFileSync(path.join(root, 'public/sitemap-images.xml'), 'utf8');
  const dom = new JSDOM(xml, { contentType: 'text/xml' });
  const sitemap = dom.window.document;
  const ns = 'http://www.sitemaps.org/schemas/sitemap/0.9';
  const imageNs = 'http://www.google.com/schemas/sitemap-image/1.1';
  const pages = new Map([
    ['/', 'SinglePageApp.tsx'],
    ['/gallery/', 'ProjectsPage.tsx'],
    ['/services/masonry/', 'services/MasonryPage.tsx'],
    ['/services/building-restoration/', 'services/BuildingRestorationPage.tsx'],
  ]);
  const { Footer } = loadSource(path.join(root, 'src/components/Footer.tsx'));
  const urls = [...sitemap.getElementsByTagNameNS(ns, 'url')];
  assert.deepEqual(urls.map(node => node.getElementsByTagNameNS(ns, 'loc')[0].textContent), [...pages.keys()].map(route => production + route));
  assert.equal(sitemap.getElementsByTagNameNS(imageNs, 'geo_location').length, 0);
  assert.equal(sitemap.getElementsByTagNameNS(imageNs, 'title').length, 0);
  let count = 0;
  for (const node of urls) {
    const route = new URL(node.getElementsByTagNameNS(ns, 'loc')[0].textContent).pathname;
    const Page = loadSource(path.join(root, 'src/pages', pages.get(route))).default;
    const html = renderToStaticMarkup(createElement(HelmetProvider, { context: {} },
      createElement(StaticRouter, { location: route }, createElement(QuoteModalProvider, null,
        createElement(Page), createElement(Footer)))));
    const rendered = new JSDOM(html);
    const displayed = new Set([...rendered.window.document.querySelectorAll('img')].map(image => image.getAttribute('src')));
    for (const image of node.getElementsByTagNameNS(imageNs, 'image')) {
      const loc = image.getElementsByTagNameNS(imageNs, 'loc')[0].textContent;
      assert.equal(new URL(loc).origin, production);
      const imagePath = new URL(loc).pathname;
      assert.ok(displayed.has(imagePath), `${route} renders ${imagePath}`);
      const entry = projectGalleryImages.find(image => image.thumb === imagePath || image.full === imagePath);
      assert.ok(entry);
      assert.equal(image.getElementsByTagNameNS(imageNs, 'caption')[0].textContent, entry.alt);
      count++;
    }
    rendered.window.close();
  }
  assert.equal(count, 8);
  dom.window.close();
});

test('crawler text and XML do not publish held image IDs or retired direct captions', () => {
  const oldCaptions = ['Sydney heritage stonework project by Romans Building Services', 'Sydney sandstone seawall and heritage stone restoration work', 'Stone masonry wall work by Romans Building Services in Sydney', 'Real Sydney masonry project from the Romans Building Services gallery', 'Structural steel and masonry repair work on a Sydney building', 'Concrete cancer and remedial building repair work in Sydney', 'Tuckpointing and brick repointing work on Sydney masonry', 'Stone wall rebuild and masonry repair by Romans Building Services in Sydney', 'Building restoration project completed by Romans Building Services in Sydney'];
  for (const file of readdirSync(path.join(root, 'public')).filter(file => /\.(txt|xml)$/.test(file))) {
    const text = readFileSync(path.join(root, 'public', file), 'utf8');
    for (const id of withheld) assert.ok(!text.includes(id), `${file} excludes ${id}`);
    for (const caption of oldCaptions) assert.ok(!text.includes(caption), `${file} removes retired caption`);
    assert.doesNotMatch(text, /image:geo_location/);
  }
});
