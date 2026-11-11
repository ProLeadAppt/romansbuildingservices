import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read = p => fs.readFileSync(p, 'utf8');
test('seven template families expose named breadcrumb landmarks and decorative separators', () => {
  for (const name of ['CaseStudy', 'HeritageEraPage', 'ProblemAreaPage', 'ProblemPage', 'ServiceAreaPage', 'ServicePage', 'SuburbPage']) {
    const source = read(`src/components/${name}Template.tsx`);
    assert.match(source, /aria-label="Breadcrumb" className="[^"]*pt-20/, name);
    assert.doesNotMatch(source, /<ChevronRight className=/, name);
  }
});
test('homepage preload matches the actual hero and approved quote label remains testable', () => {
  const home = read('src/pages/SinglePageApp.tsx'), hero = read('src/components/RomansPremiumHeroSection.tsx');
  const asset = home.match(/preloadHero="([^"]+)"/)[1];
  assert.ok(hero.includes(asset));
  assert.ok(fs.existsSync('public'+asset));
  assert.match(home, /videoSrc=""/);
  assert.match(hero, /Discuss your project/);
  assert.match(read('scripts/verify-quote-prefills.mjs'), /Discuss your project/);
});
test('shared design retains brands and removes decorative navigation numbering', () => {
  assert.match(read('tailwind.config.ts'), /heading: \['DM Sans'/);
  assert.match(read('src/components/Layout.tsx'), /romans-site/);
  assert.doesNotMatch(read('src/components/home/HomeProblemNavigator.tsx'), /0\{index/);
  assert.match(read('src/components/RelatedLinksBlock.tsx'), /grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4/);
});
