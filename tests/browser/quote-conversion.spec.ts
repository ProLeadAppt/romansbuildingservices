import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
  if (!baseURL) throw new Error('Browser checks require an explicit base URL.');
  const allowedOrigin = new URL(baseURL).origin;
  await page.route('**/*', route => {
    const request = route.request();
    return new URL(request.url()).origin === allowedOrigin && request.method() === 'GET' ? route.continue() : route.abort();
  });
});

test('quote survey reaches contact details without a runtime failure', async ({ page }) => {
  const pageErrors: string[] = [];
  const consoleErrors: string[] = [];
  const failedSameOriginRequests: string[] = [];
  page.on('requestfailed', request => {
    if (new URL(request.url()).origin === new URL(page.url()).origin) failedSameOriginRequests.push(request.url());
  });
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error' && message.text() !== 'Failed to load resource: net::ERR_FAILED') {
      consoleErrors.push(message.text());
    }
  });

  await page.goto('/', { waitUntil: 'domcontentloaded' });
  const openQuote = page.locator('[data-hero-copy]').getByRole('button', { name: 'Discuss your project', exact: true });
  await expect(openQuote).toBeVisible({ timeout: 15_000 });
  await openQuote.click();
  await expect(page.getByRole('dialog')).toBeVisible();

  const dialog = page.getByRole('dialog');
  await dialog.getByRole('button', { name: 'Heritage Restoration' }).click();
  await dialog.getByLabel('Suburb or postcode').fill('Paddington 2021');
  await dialog.getByRole('radio', { name: 'This month' }).click();
  await dialog.getByRole('button', { name: 'Next', exact: true }).click();
  await page.waitForTimeout(100);

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
  expect(failedSameOriginRequests).toEqual([]);
  await expect(dialog.getByRole('heading', { name: 'How do we reach you?' })).toBeVisible();
});

test('both project CTAs can reopen and dismiss the quote without navigation', async ({ page }) => {
  await page.goto('/');
  const startingURL = page.url();
  const triggers = page.getByRole('button', { name: 'Discuss your project', exact: true });
  await expect(triggers).toHaveCount(2);
  for (const trigger of await triggers.all()) {
    for (let attempt = 0; attempt < 2; attempt += 1) {
      await trigger.focus();
      await trigger.press('Enter');
      const dialog = page.getByRole('dialog');
      await expect(dialog).toBeVisible();
      await expect(dialog.getByRole('button', { name: 'Heritage Restoration' })).toBeVisible();
      if (attempt === 0) await page.keyboard.press('Escape');
      else await dialog.getByRole('button', { name: 'Close', exact: true }).click();
      await expect(dialog).toHaveCount(0);
      await expect(trigger).toBeFocused();
      expect(page.url()).toBe(startingURL);
    }
  }
});

test('phone links emit a conversion event without per-link wiring', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('a[href^="tel:"]').first()).toBeAttached({ timeout: 15_000 });
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
