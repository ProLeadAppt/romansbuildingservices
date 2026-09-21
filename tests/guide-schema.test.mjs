import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const builtAdvice = 'dist/learn/index.html';

test('prerendered advice collection identifies every featured guide with its canonical URL', {
  skip: !fs.existsSync(builtAdvice),
}, () => {
  const html = fs.readFileSync(builtAdvice, 'utf8');
  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap((match) => JSON.parse(match[1]));
  const collection = schemas.find((schema) => schema['@type'] === 'CollectionPage');
  assert.ok(collection, 'Advice page must expose its guide collection');
  const items = collection.mainEntity.itemListElement;
  assert.equal(items.length, 6);
  assert.equal(collection.mainEntity.numberOfItems, items.length);
  for (const item of items) {
    assert.equal(typeof item.url, 'string', `${item.name} is missing its destination`);
    const destination = new URL(item.url);
    assert.equal(destination.origin, 'https://romansbuildingservices.com');
    assert.ok(destination.pathname.endsWith('/'), 'Guide URL must use the canonical trailing slash');
    assert.ok(html.includes(`href="${destination.pathname}"`), 'Structured guide URL must match a visible link');
  }
});
