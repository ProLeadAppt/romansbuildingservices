import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('repair reference navigation uses customer language', () => {
  const source = readFileSync(new URL('../src/pages/case-studies/CaseStudiesIndexPage.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /remedial intent|authority page/);
  assert.match(source, /Practical guides to masonry, heritage and building repairs/);
});

test('quote location copy checks availability without promising Sydney-wide coverage', () => {
  const source = readFileSync(new URL('../src/components/quote/QuoteSurvey.tsx', import.meta.url), 'utf8');
  assert.doesNotMatch(source, /We work right across Sydney/);
  assert.match(source, /Tell us your suburb so we can check availability/);
  assert.match(source, /Hawkesbury and Western Sydney/);
});

test('sampled gallery descriptions retain visible subjects without inferred methods or completion', () => {
  const source = readFileSync(new URL('../src/data/galleryImages.ts', import.meta.url), 'utf8');
  assert.match(source, /Brick-edged grave plot among cemetery headstones/);
  assert.match(source, /Crane lifting a pale block above a truck/);
  assert.doesNotMatch(source, /alt: 'Foundation waterproofing and drainage system installation'|alt: 'Sandstone arch with rebar reinforcement being built'|alt: 'Completed structural retaining wall with drainage system'/);
});
