import { expect, test } from '@playwright/test';

const isVideo = (url: string) => /\.(mp4|webm)(?:\?|$)/i.test(url);
test.beforeEach(async ({ page, baseURL }) => {
  if (!baseURL) throw new Error('Browser checks require an explicit base URL.');
  const allowedOrigin = new URL(baseURL).origin;
  await page.route('**/*', route => {
    const request = route.request();
    return new URL(request.url()).origin === allowedOrigin && request.method() === 'GET' ? route.continue() : route.abort();
  });
});

test('hero copy retains contrast even against a white media panel', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero-heading')).toHaveText('Skilled stonework. Careful restoration.');
  await page.locator('[data-hero-media]').evaluate(panel => {
    (panel as HTMLElement).style.background = 'white';
    panel.querySelectorAll('img, video').forEach(el => (el as HTMLElement).style.visibility = 'hidden');
  });
  const measurements = await page.locator('[data-p2-section=hero]').evaluate(hero => {
    const rgb = (s: string) => (s.match(/[\d.]+/g) || []).map(Number);
    const luminance = (c: number[]) => c.slice(0, 3).map(v => v / 255).map(v => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((a, v, i) => a + v * [.2126, .7152, .0722][i], 0);
    return [...hero.querySelectorAll('h1, [data-hero-copy] p, [data-hero-copy] span, button, a, [data-hero-media] p, [data-hero-media] span')].map(el => {
      let parent: Element | null = el; let background = [255, 255, 255];
      while (parent) { const colour = rgb(getComputedStyle(parent).backgroundColor); if (colour[3] === undefined || colour[3] === 1) { background = colour; break; } parent = parent.parentElement; }
      const foreground = rgb(getComputedStyle(el).color); const a = luminance(foreground), b = luminance(background);
      return { text: el.textContent?.trim(), ratio: (Math.max(a, b) + .05) / (Math.min(a, b) + .05), large: el.tagName === 'H1' };
    });
  });
  for (const item of measurements) expect(item.ratio, item.text).toBeGreaterThanOrEqual(item.large ? 3 : 4.5);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBeTruthy();
});

test('quote and phone CTAs are keyboard reachable with visible focus', async ({ page }) => {
  await page.goto('/');
  const quote = page.locator('[data-hero-copy]').getByRole('button', { name: 'Discuss your project' });
  await quote.focus(); await expect(quote).toBeFocused();
  expect(await quote.evaluate(el => parseFloat(getComputedStyle(el).outlineWidth))).toBeGreaterThanOrEqual(2);
  await quote.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  await expect(quote).toBeFocused();
  const phone = page.locator('[data-hero-copy]').getByRole('link', { name: 'Call Minas', exact: true });
  await phone.focus(); await expect(phone).toBeFocused();
  await expect(phone).toHaveAttribute('href', 'tel:0414922276');
  expect(await phone.evaluate(el => parseFloat(getComputedStyle(el).outlineWidth))).toBeGreaterThanOrEqual(2);
});

test('approved still loads without video or hero layout shift after interaction', async ({ page }) => {
  const requests: string[] = [];
  page.on('request', r => { if (isVideo(r.url())) requests.push(r.url()); });
  await page.goto('/');
  const panel = page.locator('[data-hero-media]');
  const still = panel.getByRole('img', { name: 'Minas Romanakis working sandstone by hand with a mallet and chisel' });
  await expect(still).toBeVisible();
  await expect(still).toHaveAttribute('fetchpriority', 'high');
  await expect.poll(() => still.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  await page.evaluate(() => document.fonts.ready);
  await panel.scrollIntoViewIfNeeded();
  const before = await page.locator('[data-p2-section=hero]').boundingBox();
  await panel.click({ position: { x: 10, y: 120 } });
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await expect(panel.locator('video')).toHaveCount(0);
  await expect(panel.getByRole('button', { name: /background video/ })).toHaveCount(0);
  expect(requests).toEqual([]);
  const after = await page.locator('[data-p2-section=hero]').boundingBox();
  expect(after!.height).toBe(before!.height);
});

for (const preference of ['reduced-motion', 'save-data']) {
  test(`${preference} keeps the authentic still and makes no video request`, async ({ page }) => {
    if (preference === 'reduced-motion') await page.emulateMedia({ reducedMotion: 'reduce' });
    else await page.addInitScript(() => { const connection = new EventTarget(); Object.assign(connection, { saveData: true }); Object.defineProperty(navigator, 'connection', { value: connection, configurable: true }); });
    const requests: string[] = []; page.on('request', r => { if (isVideo(r.url())) requests.push(r.url()); });
    await page.goto('/'); const panel = page.locator('[data-hero-media]'); await panel.scrollIntoViewIfNeeded(); await panel.click({ position: { x: 10, y: 120 } }); await page.keyboard.press('Tab'); await page.waitForTimeout(500);
    expect(requests).toEqual([]); await expect(panel.locator('video')).toHaveCount(0);
    await expect(panel.locator('img')).toHaveAttribute('src', /romansstone_1572378831/);
  });
}
