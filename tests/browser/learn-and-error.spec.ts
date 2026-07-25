import { expect, test } from '@playwright/test';

const blockedThirdParties = [
  'googletagmanager.com',
  'google-analytics.com',
  'clarity.ms',
  'searchatlas.com',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
];

test.beforeEach(async ({ page }) => {
  await page.route('**/*', async (route) => {
    const url = route.request().url();
    if (blockedThirdParties.some((host) => url.includes(host))) {
      await route.abort();
      return;
    }
    await route.continue();
  });
});

test('Learn page is customer-facing, stable and free of broken first-party media', async ({ page }) => {
  const errors: string[] = [];
  const failedFirstPartyRequests: string[] = [];
  page.on('console', (message) => {
    if (message.type() !== 'error') return;
    // Chromium reports our deliberate third-party route aborts as generic
    // resource failures. First-party failures are asserted independently.
    if (message.text() === 'Failed to load resource: net::ERR_FAILED') return;
    errors.push(message.text());
  });
  page.on('requestfailed', (request) => {
    const url = request.url();
    if (url.startsWith('http://127.0.0.1:4174')) failedFirstPartyRequests.push(url);
  });

  await page.goto('/learn/', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Understand the problem');
  await expect(page.getByText('Choose the question closest to your job')).toBeVisible();

  const mainText = await page.locator('main').innerText();
  expect(mainText).not.toMatch(/SEO\s*\/\s*GEO\s*\/\s*AEO/i);
  expect(mainText).not.toMatch(/Google AI overviews|query clusters|entity authority|own masonry/i);

  const firstQuestion = page.locator('details').first();
  await firstQuestion.locator('summary').click();
  await expect(firstQuestion).toHaveAttribute('open', '');

  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(window.innerHeight * 0.7));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 20));
    }
    window.scrollTo(0, 0);
  });

  const geometry = await page.evaluate(() => ({
    viewport: window.innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));
  expect(geometry.scrollWidth).toBeLessThanOrEqual(geometry.viewport);

  const brokenImages = await page.locator('img').evaluateAll((images) =>
    images
      .filter((image) => image.complete && image.naturalWidth === 0)
      .map((image) => image.getAttribute('src')),
  );
  expect(brokenImages).toEqual([]);
  expect(failedFirstPartyRequests).toEqual([]);
  expect(errors).toEqual([]);
});

test('generated error document is visible and noindex', async ({ page }) => {
  await page.goto('/404.html', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('heading', { level: 1, name: '404' })).toBeVisible({ timeout: 10_000 });
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('remote hosting returns a real 404 for an unknown URL', async ({ page }) => {
  test.skip(!process.env.PLAYWRIGHT_BASE_URL, 'Netlify behavior is only available on remote previews');
  const response = await page.goto('/definitely-not-a-real-romans-page/', { waitUntil: 'domcontentloaded' });
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1, name: '404' })).toBeVisible();
});
