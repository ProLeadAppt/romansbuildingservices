// Run against the built site in CI. No external requests or submissions are allowed.
import assert from 'node:assert/strict';
import { preview } from 'vite';
import puppeteer from 'puppeteer';

const server = await preview({ preview: { host: '127.0.0.1', port: 0 } });
const origin = `http://127.0.0.1:${server.httpServer.address().port}`;
let browser;
try {
  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.method() === 'GET' && new URL(request.url()).origin === origin) {
      void request.continue();
    } else {
      void request.abort();
    }
  });
  const cases = [
    ['/case-studies/', 'Get a quote'],
    ['/case-studies/heritage-church-brick-restoration-sydney-cbd/', 'Get a quote for similar work'],
    ['/case-studies/concrete-cancer-repair-strata-north-shore/', 'Get a quote for similar work'],
  ];
  for (const [route, label] of cases) {
    await page.goto(origin + route, { waitUntil: 'domcontentloaded' });
    await page.waitForFunction((text) => [...document.querySelectorAll('button')].some((b) => b.textContent.trim() === text), {}, label);
    await page.evaluate((text) => [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === text).click(), label);
    await page.waitForSelector('[role="dialog"]');
    await page.waitForFunction(() => document.querySelector('[role="dialog"]')?.textContent.includes('Where and when?'), { timeout: 10000 });
    assert.equal(await page.$eval('[role="dialog"] [role="progressbar"]', (e) => e.getAttribute('aria-valuenow')), '2');
    // Back remains available so visitors can change the preselected service.
    await page.evaluate(() => [...document.querySelectorAll('[role="dialog"] button')].find((b) => b.textContent.trim() === 'Back').click());
    await page.waitForFunction(() => document.querySelector('[role="dialog"]')?.textContent.includes('What needs doing?'));
    console.log(`[quote-prefill] PASS ${route}: opens at details; Back allows service changes`);
  }
  await page.close();
} finally {
  await browser?.close();
  await new Promise((resolve, reject) => server.httpServer.close((error) => error ? reject(error) : resolve()));
}
