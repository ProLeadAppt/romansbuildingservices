import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

// Confirmed by Tyson via Sandra and checked against ABR on 10 November 2026.
// https://abr.business.gov.au/ABN/View?abn=85004290080
const surfaces = [
  'src/components/Footer.tsx',
  'src/components/ServicePageTemplate.tsx',
  'src/components/LocalSEO/StructuredData.tsx',
  'public/llms.txt',
  'public/llms-full.txt',
];
for (const path of surfaces) {
  test(`${path} uses the confirmed business ABN`, () => {
    const source = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
    assert.ok(source.includes('85 004 290 080'));
    assert.doesNotMatch(source, /49\s*641\s*892\s*677/);
  });
}
test('confirmed ABN passes the Australian checksum', () => {
  const digits = [...'85004290080'].map(Number);
  digits[0] -= 1;
  const weights = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  assert.equal(digits.reduce((sum, digit, i) => sum + digit * weights[i], 0) % 89, 0);
});
