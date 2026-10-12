import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => {
    const r = route.request();
    return new URL(r.url()).hostname === '127.0.0.1' && r.method() === 'GET' ? route.continue() : route.abort();
  });
});

test('checked educational article, disclosure and metadata remain consistent', async ({ page }) => {
  await page.goto('/learn/concrete-cancer-sydney/');
  await expect(page.locator('main h1')).toHaveCount(1);
  await expect(page.locator('main h1')).toHaveText('What causes concrete cancer?');
  await expect(page.locator('figcaption')).toContainText('AI-generated educational cutaway');
  await expect(page.locator('figcaption')).toContainText('Cover is partly removed to reveal the steel. Not to scale or a construction detail.');
  await expect(page.locator('article')).toContainText('Moisture and oxygen');
  await expect(page.locator('article')).toContainText('Leave tapping, opening up and close inspection');
  await expect(page.locator('article')).not.toContainText('cheapest');
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href', 'https://romansbuildingservices.com/learn/concrete-cancer-sydney/');
  await expect(page.locator('time')).toHaveAttribute('datetime', '2026-10-12');
  const schemas = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(s => JSON.parse(s));
  const article = schemas.find(s => s['@type'] === 'Article');
  expect(article.dateModified).toBe('2026-10-12');
  expect(article.datePublished).toBeUndefined();
  expect(article.image.caption).toContain('AI-generated educational');
  const faq = schemas.find(s => s['@type'] === 'FAQPage'); expect(faq.mainEntity).toHaveLength(5);
  const safety = page.locator('article p').filter({ hasText: 'If concrete is loose or falling' });
  const contact = page.locator('article a[href="/contact/"]').first();
  expect(await safety.evaluate((el, href) => Boolean(el.compareDocumentPosition(document.querySelector(`article a[href="${href}"]`)!) & Node.DOCUMENT_POSITION_FOLLOWING), '/contact/')).toBeTruthy();
  await contact.focus(); await expect(contact).toBeFocused();
  expect(await contact.evaluate(el => parseFloat(getComputedStyle(el).outlineWidth))).toBeGreaterThanOrEqual(2);
  await expect(page.locator('article a[href="tel:0414922276"]').first()).toBeVisible();
});

test('responsive image is uncropped, loaded and readable at narrow and zoom-equivalent widths', async ({ page }) => {
  for (const width of [360, 390, 720, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/learn/concrete-cancer-sydney/');
    const img = page.locator('article figure img');
    await expect.poll(() => img.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    const data = await img.evaluate(el => ({ src: (el as HTMLImageElement).currentSrc, ratio: el.getBoundingClientRect().width / el.getBoundingClientRect().height, fit: getComputedStyle(el).objectFit }));
    expect(data.src).toContain(width < 768 ? 'premium-mobile-' : 'premium-desktop-');
    expect(data.ratio).toBeCloseTo(width < 768 ? .6 : 1.5, 2);
    expect(data.fit).toBe('contain');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
  }
});
