import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { JSDOM } from 'jsdom';

const home = 'dist/index.html';
test('home leads with Enfield, keeps Sydney-wide scope and does not name the Hawkesbury', { skip: !fs.existsSync(home) }, () => {
  const dom = new JSDOM(fs.readFileSync(home, 'utf8'));
  const doc = dom.window.document;
  assert.match(doc.title, /Enfield.*Inner West/i);
  assert.match(doc.body.textContent, /Enfield/i);
  assert.match(doc.body.textContent, /across Sydney/i);
  assert.doesNotMatch(doc.body.textContent + doc.title + (doc.querySelector('meta[name="description"]')?.content ?? ''), /Hawkesbury/i);
  assert.ok(doc.querySelector('a[href="/areas"]'));
  const business = [...doc.querySelectorAll('script[type="application/ld+json"]')].flatMap(script => JSON.parse(script.textContent)).find(s => [].concat(s['@type']).includes('LocalBusiness'));
  assert.ok(business);
  for (const area of ['Enfield', 'Inner West', 'Sydney', 'Sydney CBD', 'Balmain']) {
    assert.ok(business.areaServed.some(entry => entry.name === area), area);
  }
  assert.equal(business.address, undefined);
  assert.equal(business.geo, undefined);
  dom.window.close();
});

const areas = 'dist/areas/index.html';
test('the service hub still links to a distinct Hawkesbury area guide', { skip: !fs.existsSync(areas) }, () => {
  const dom = new JSDOM(fs.readFileSync(areas, 'utf8'));
  const doc = dom.window.document;
  assert.ok([...doc.querySelectorAll('a[href]')].some(a => /^\/areas\/hawkesbury-western-sydney\/?$/.test(a.getAttribute('href')) && /hawkesbury/i.test(a.textContent)));
  assert.ok(fs.existsSync('dist/areas/hawkesbury-western-sydney/index.html'));
  dom.window.close();
});
