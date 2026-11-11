import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

// Exercise the real orchestration with fake browser I/O. Never launch Chromium
// or generate substitute production HTML in these unit tests.
const source = fs.readFileSync('scripts/prerender.mjs', 'utf8');
const mainSource = source.slice(source.indexOf('async function main() {'), source.indexOf('\nmain().catch'));
function harness({ routes = ['/', '/about/'], render = async () => {}, launchError } = {}) {
  const calls = [], logs = [];
  let launches = 0, closes = 0, serverCloses = 0;
  const context = {
    fs: { existsSync: () => true }, path, DIST: '/fake-dist', Date,
    console: { log: (message) => logs.push(message), error: () => {} },
    loadRoutes: () => routes,
    startServer: async () => ({ address: () => ({ port: 1234 }), close: () => { serverCloses++; } }),
    launchBrowser: async () => {
      launches++;
      if (launchError) throw new Error(launchError);
      return { connected: true, close: async () => { closes++; } };
    },
    prerenderRoute: async (_browser, route, _port, output) => { calls.push({ route, output }); await render(route); },
  };
  const main = vm.runInNewContext(`${mainSource}\nmain`, context);
  return { main, calls, logs, stats: () => ({ launches, closes, serverCloses }) };
}

test('complete capture includes required 404 and reports success only afterwards', async () => {
  const h = harness(); await h.main();
  assert.deepEqual(h.calls.map((x) => x.route), ['/', '/about/', '/__not-found__']);
  assert.equal(h.calls.at(-1).output, '/fake-dist/404.html');
  assert.ok(h.logs.some((x) => x.includes('done — 2/2 routes and 404.html')));
  assert.deepEqual(h.stats(), { launches: 1, closes: 1, serverCloses: 1 });
});

test('one permanent route failure rejects partial output and names the route', async () => {
  const h = harness({ render: async (route) => { if (route === '/about/') throw new Error('metadata timeout'); } });
  await assert.rejects(h.main(), /Incomplete prerender: 1\/2.*\/about\//);
  assert.equal(h.calls.length, 2);
  assert.ok(!h.logs.some((x) => x.includes('done —')));
  assert.equal(h.stats().serverCloses, 1);
  assert.equal(h.stats().closes, 1);
});

test('exhausted recoverable retries cannot turn a partial build green', async () => {
  const h = harness({ render: async (route) => { if (route === '/') throw new Error('Target closed'); } });
  await assert.rejects(h.main(), /Incomplete prerender: 1\/2/);
  assert.equal(h.calls.filter((x) => x.route === '/').length, 2);
  assert.ok(!h.logs.some((x) => x.includes('done —')));
  assert.equal(h.stats().serverCloses, 1);
});

test('successful retry counts a route once and permits complete output', async () => {
  let attempts = 0;
  const h = harness({ render: async (route) => { if (route === '/' && ++attempts === 1) throw new Error('Target closed'); } });
  await h.main();
  assert.equal(h.calls.filter((x) => x.route === '/').length, 2);
  assert.ok(h.logs.some((x) => x.includes('done — 2/2 routes')));
});

test('404 capture failure rejects and still closes resources', async () => {
  const h = harness({ render: async (route) => { if (route === '/__not-found__') throw new Error('404 capture failed'); } });
  await assert.rejects(h.main(), /404 capture failed/);
  assert.ok(!h.logs.some((x) => x.includes('done —')));
  assert.deepEqual(h.stats(), { launches: 1, closes: 1, serverCloses: 1 });
});

test('empty sitemap fails before starting a browser', async () => {
  const h = harness({ routes: [] });
  await assert.rejects(h.main(), /No sitemap routes/);
  assert.equal(h.stats().launches, 0);
});

test('browser launch failure closes the static server', async () => {
  const h = harness({ launchError: 'launch failed' });
  await assert.rejects(h.main(), /launch failed/);
  assert.equal(h.stats().serverCloses, 1);
});

test('fatal CLI boundary retains nonzero exit for rejected captures', () => {
  assert.match(source, /main\(\)\.catch\([\s\S]*process\.exit\(1\)/);
});
