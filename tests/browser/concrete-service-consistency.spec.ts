import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', route => {
    const request = route.request();
    return new URL(request.url()).hostname === '127.0.0.1' && request.method() === 'GET' ? route.continue() : route.abort();
  });
});

test('concrete repair visible FAQs exactly match JSON-LD and avoid unsupported general claims', async ({ page }) => {
  await page.goto('/services/concrete-repairs/');
  await expect(page.locator('main h1')).toHaveText('Concrete Repairs');
  await expect.poll(async () => (await page.locator('script[type="application/ld+json"]').allTextContents())
    .filter(schema => JSON.parse(schema)['@type'] === 'FAQPage').length).toBe(1);
  const schemas = (await page.locator('script[type="application/ld+json"]').allTextContents()).map(s => JSON.parse(s));
  const faqs = schemas.filter(s => s['@type'] === 'FAQPage');
  expect(faqs).toHaveLength(1); expect(faqs[0].mainEntity).toHaveLength(7);
  for (const question of faqs[0].mainEntity) {
    const heading = page.getByRole('heading', { name: question.name, exact: true });
    await expect(heading).toHaveCount(1);
    await expect(heading.locator('..').locator('p')).toHaveText(question.acceptedAnswer.text);
  }
  const text = await page.locator('main').innerText();
  const faqText = JSON.stringify(faqs);
  for (const content of [text, faqText]) {
    expect(content).not.toMatch(/\$[\d,]+|20 to 30|3–5 years|seven times|Most apartment blocks|built before 1990|hollow sound|prevent future damage/);
    expect(content).toContain('carbonation'); expect(content).toContain('chlorides');
    expect(content).toContain('moisture and oxygen');
    expect(content).toContain('Do not tap or chip suspect concrete');
    expect(content).toContain('not a warranty');
  }
  await expect(page.locator('main')).toContainText('falling-material hazard');
  await expect(page.locator('main')).toContainText('space below loose material');
  await expect(page.locator('main')).toContainText('Spalling can also have other causes');
  await expect(page.locator('main')).toContainText('do not provide a general guarantee');
  await expect(page.locator('link[rel=canonical]')).toHaveAttribute('href','https://romansbuildingservices.com/services/concrete-repairs/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
});
