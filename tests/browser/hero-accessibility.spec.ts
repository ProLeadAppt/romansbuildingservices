import { expect, test } from '@playwright/test';

const loop = 'minas-sandstone-hero-loop.mp4';
test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => {
    const request = route.request();
    return new URL(request.url()).hostname === '127.0.0.1' && request.method() === 'GET' ? route.continue() : route.abort();
  });
});

test('hero copy is protected from even white moving-image backgrounds', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero-heading')).toHaveText('Brick, stone & sandstone repairs.');
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
  const quote = page.locator('[data-hero-copy]').getByRole('button', { name: 'Get a Sydney Quote' });
  await quote.focus(); await quote.press('Enter');
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  const phone = page.locator('[data-hero-copy]').getByRole('link', { name: 'Call Minas', exact: true });
  await phone.focus(); await expect(phone).toBeFocused();
  await expect(phone).toHaveAttribute('href', 'tel:0414922276');
  expect(await phone.evaluate(el => parseFloat(getComputedStyle(el).outlineWidth))).toBeGreaterThanOrEqual(2);
});

test('decorative loop defers load, has pause control and causes no hero layout shift', async ({ page }) => {
  const requests: string[] = []; page.on('request', r => { if (r.url().includes(loop)) requests.push(r.url()); });
  await page.goto('/'); await page.waitForTimeout(400); expect(requests).toEqual([]);
  const panel = page.locator('[data-hero-media]'); await panel.scrollIntoViewIfNeeded(); await page.waitForTimeout(150);
  const before = await page.locator('[data-p2-section=hero]').boundingBox();
  await panel.click({ position: { x: 10, y: 120 } });
  const video = panel.locator('video'); await expect(video).toBeAttached();
  await expect(video).toHaveAttribute('aria-hidden', 'true'); await expect(video).toHaveAttribute('preload', 'none');
  expect(await video.evaluate(v => (v as HTMLVideoElement).muted && (v as HTMLVideoElement).playsInline)).toBeTruthy();
  const pause = panel.getByRole('button', { name: 'Pause background video' }); await expect(pause).toBeVisible({ timeout: 15000 });
  await pause.focus(); await page.keyboard.press('Enter');
  await expect.poll(() => video.evaluate(v => (v as HTMLVideoElement).paused)).toBeTruthy();
  const play = panel.getByRole('button', { name: 'Play background video' }); await expect(play).toBeVisible();
  expect((await play.boundingBox())!.width).toBeGreaterThanOrEqual(44);
  const after = await page.locator('[data-p2-section=hero]').boundingBox(); expect(after!.height).toBe(before!.height);
});

for (const preference of ['reduced-motion', 'save-data']) {
  test(`${preference} keeps the authentic still and makes no loop request`, async ({ page }) => {
    if (preference === 'reduced-motion') await page.emulateMedia({ reducedMotion: 'reduce' });
    else await page.addInitScript(() => { const connection = new EventTarget(); Object.assign(connection, { saveData: true }); Object.defineProperty(navigator, 'connection', { value: connection, configurable: true }); });
    const requests: string[] = []; page.on('request', r => { if (r.url().includes(loop)) requests.push(r.url()); });
    await page.goto('/'); const panel = page.locator('[data-hero-media]'); await panel.scrollIntoViewIfNeeded(); await panel.click({ position: { x: 10, y: 120 } }); await page.keyboard.press('Tab'); await page.waitForTimeout(500);
    expect(requests).toEqual([]); await expect(panel.locator('video')).toHaveCount(0);
    await expect(panel.locator('img')).toHaveAttribute('src', /romansstone_1572378831/);
  });
}
