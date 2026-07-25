import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');

test('public Learn page uses customer language rather than exposing the SEO playbook', () => {
  const learn = read('src/pages/LearnPage.tsx');
  const internalMarketingLanguage = [
    /SEO\s*\/\s*GEO\s*\/\s*AEO/i,
    /Google AI overviews/i,
    /query clusters/i,
    /entity authority/i,
    /own masonry/i,
    /SEO hub/i,
  ];

  for (const phrase of internalMarketingLanguage) {
    assert.doesNotMatch(learn, phrase);
  }
  assert.match(learn, /Practical advice/i);
  assert.match(learn, /cost|price/i);
  assert.match(learn, /choose|contractor/i);
});

test('Netlify returns a real 404 document instead of rewriting unknown URLs with 200', () => {
  const config = read('netlify.toml');
  assert.doesNotMatch(config, /from\s*=\s*"\/\*"[\s\S]{0,160}to\s*=\s*"\/index\.html"[\s\S]{0,80}status\s*=\s*200/);
  assert.match(config, /from\s*=\s*"\/\*"[\s\S]{0,160}to\s*=\s*"\/404\.html"[\s\S]{0,80}status\s*=\s*404/);
});

test('query-dependent search retains direct-entry SPA access and is noindex', () => {
  const config = read('netlify.toml');
  assert.match(config, /from\s*=\s*"\/search"[\s\S]{0,160}to\s*=\s*"\/index\.html"[\s\S]{0,80}status\s*=\s*200/);
  assert.match(config, /for\s*=\s*"\/search"[\s\S]{0,200}X-Robots-Tag\s*=\s*"noindex, nofollow"/);
});

const distPath = path.join(root, 'dist');
const notFoundPath = path.join(distPath, '404.html');

test('build output includes an indexable-safe 404 document', { skip: !fs.existsSync(notFoundPath) }, () => {
  assert.equal(fs.existsSync(notFoundPath), true, 'dist/404.html must exist after build');
  const html = fs.readFileSync(notFoundPath, 'utf8');
  assert.match(html, /<h1[^>]*>404<\/h1>/i);
  assert.match(html, /name="robots"[^>]*content="noindex, (?:follow|nofollow)"/i);
});

test('prerender output does not serialize runtime-injected scripts or lazy module hints', { skip: !fs.existsSync(distPath) }, () => {
  const htmlFiles = [];
  const visit = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) visit(fullPath);
      else if (entry.name.endsWith('.html')) htmlFiles.push(fullPath);
    }
  };
  visit(distPath);

  for (const htmlFile of htmlFiles) {
    const html = fs.readFileSync(htmlFile, 'utf8');
    assert.doesNotMatch(html, /<link\b[^>]*rel="modulepreload"[^>]*as="script"[^>]*>/i, htmlFile);
    assert.doesNotMatch(html, /<script\b[^>]*src="https:\/\/www\.clarity\.ms\/tag\//i, htmlFile);
    assert.doesNotMatch(html, /<script\b[^>]*id="sa-dynamic-optimization-loader"/i, htmlFile);
    assert.doesNotMatch(html, /<style\b[^>]*>[\s\S]*?data-sonner-toaster[\s\S]*?<\/style>/i, htmlFile);
  }
});

test('direct production dependencies use patched mail and router releases', () => {
  const packageJson = JSON.parse(read('package.json'));
  assert.equal(packageJson.dependencies.nodemailer, '^9.0.3');
  assert.equal(packageJson.dependencies['react-router-dom'], '^7.18.1');
});

test('Netlify defines the baseline browser security headers supported without breaking prerendered routes', () => {
  const config = read('netlify.toml');
  assert.match(config, /X-Content-Type-Options\s*=\s*"nosniff"/);
  assert.match(config, /Referrer-Policy\s*=/);
  assert.match(config, /Permissions-Policy\s*=/);
});
