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

test('quote survey reaches contact details without a runtime failure', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error' && !message.text().includes('Failed to load resource')) {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('/', { waitUntil: 'networkidle' });
  await page.getByRole('button', { name: 'Get a Sydney Quote' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();

  await page.getByRole('button', { name: 'Heritage Restoration' }).click();
  await page.getByLabel('Suburb or postcode').fill('Paddington 2021');
  await page.getByRole('radio', { name: 'This month' }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.waitForTimeout(100);

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
  await expect(page.getByRole('heading', { name: 'How do we reach you?' })).toBeVisible();
});

test('hero video waits for interaction instead of competing with the initial page load', async ({ page }) => {
  const videoRequests: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('romansstone_1705577418') && /\.mp4(?:\?|$)/i.test(request.url())) {
      videoRequests.push(request.url());
    }
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(500);
  expect(videoRequests).toEqual([]);

  await page.keyboard.press('Tab');
  await expect(page.locator('video source[src*="romansstone_1705577418"]')).toHaveCount(1);
});

test('phone links emit a conversion event without per-link wiring', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a[href^="tel:"]')) event.preventDefault();
    }, { capture: true });
  });

  await page.evaluate(() => {
    const link = document.querySelector<HTMLAnchorElement>('a[href^="tel:"]');
    if (!link) throw new Error('Expected a phone link on the home page.');
    link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
  });
  const phoneEvents = await page.evaluate(() =>
    ((window as Window & { dataLayer?: unknown[] }).dataLayer || []).filter((entry: unknown) => {
      if (!entry || typeof entry !== 'object') return false;
      const values = Array.from(entry as ArrayLike<unknown>);
      return values[0] === 'event' && values[1] === 'phone_click';
    }),
  );
  expect(phoneEvents).toHaveLength(1);
});
