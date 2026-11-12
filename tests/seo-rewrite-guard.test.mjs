import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = file => readFileSync(path.join(root, file), 'utf8');
function runtimeFiles(directory) {
  return readdirSync(path.join(root, directory), { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? runtimeFiles(file)
      : /\.(?:[cm]?[jt]sx?|html)$/i.test(file) ? [file] : [];
  });
}

test('shipped source cannot restore the external SEO rewrite loader', () => {
  // Scan all runtime sources, not just main.tsx: moving the loader into another
  // component or a static script must not bypass this regression guard.
  for (const file of ['index.html', ...runtimeFiles('src'), ...runtimeFiles('public')]) {
    assert.doesNotMatch(read(file), /searchatlas\.com|dynamic_optimization\.js|sa-dynamic-optimization-loader|SearchAtlasDynamicOptimization/i, file);
  }
});

test('removing SEO rewrites preserves analytics and phone conversion tracking', () => {
  const html = read('index.html');
  assert.match(html, /googletagmanager\.com\/gtag\/js/);
  assert.match(html, /www\.clarity\.ms\/tag\//);
  const main = read('src/main.tsx');
  assert.match(main, /<ConversionClickTracking\s*\/>/);
  assert.match(main, /analytics\.gtag\?\.\('event', 'phone_click', params\)/);
  assert.match(main, /analytics\.clarity\?\.\('event', 'phone_click'\)/);
});
