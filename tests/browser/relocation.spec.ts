import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => {
    const request = route.request();
    const local = new URL(request.url()).hostname === '127.0.0.1';
    return local && request.method() === 'GET' ? route.continue() : route.abort();
  });
});

for (const path of ['/contact/', '/about/', '/areas/', '/areas/hawkesbury-western-sydney/', '/suburbs/strathfield/', '/suburbs/burwood/', '/suburbs/concord/', '/suburbs/homebush/', '/learn/brick-sandstone-repair-quotes-hawkesbury/']) {
  test(`locality-only relocation renders ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('main h1')).toHaveCount(1);
    await expect(page.locator('footer')).toContainText('The Slopes, NSW');
    if (path === '/contact/') await expect(page.locator('main')).toContainText('Hawkesbury & Western Sydney');
    const text = await page.locator('body').innerText();
    expect(text).not.toMatch(/streetAddress|Strathfield.{0,12}2135|based in Strathfield|home base|\d+ minutes from|same-day/i);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical).toBe(`https://romansbuildingservices.com${path}`);
    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(schemas.length).toBeGreaterThan(0);
    for (const schema of schemas) {
      JSON.parse(schema);
      expect(schema).not.toMatch(/-33\.8796|151\.0942|streetAddress|"postalCode":"2135"/);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBeTruthy();
  });
}

test('hub covers the agreed areas and draft has no publication date', async ({ page }) => {
  await page.goto('/areas/hawkesbury-western-sydney/');
  for (const area of ['North Richmond', 'Richmond', 'Kurmond', 'Kurrajong', 'Penrith', 'Windsor', 'Blacktown']) {
    await expect(page.getByRole('heading', { name: area, exact: true })).toBeVisible();
  }
  await page.goto('/learn/brick-sandstone-repair-quotes-hawkesbury/');
  await expect(page.locator('main')).toContainText('Draft for owner review');
  const typography = await page.locator('article').evaluate(article => ({
    headingSize: parseFloat(getComputedStyle(article.querySelector('h1')!).fontSize),
    paragraphSpacing: parseFloat(getComputedStyle(article.querySelector('p')!).marginBottom),
    listStyle: getComputedStyle(article.querySelector('ul')!).listStyleType,
  }));
  expect(typography.headingSize).toBeGreaterThanOrEqual(28);
  expect(typography.paragraphSpacing).toBeGreaterThanOrEqual(16);
  expect(typography.listStyle).toBe('disc');
  expect((await page.locator('script[type="application/ld+json"]').allTextContents()).join('')).not.toContain('datePublished');
  await expect(page.getByRole('link', { name: 'Discuss your repair with Romans' })).toHaveAttribute('href', /^\/contact\/?$/);
});
