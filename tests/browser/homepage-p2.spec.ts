import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page, baseURL }) => {
  if (!baseURL) throw new Error('Browser checks require an explicit base URL.');
  const allowedOrigin = new URL(baseURL).origin;
  // Read-only QA on the configured origin: never contact providers or submit an enquiry.
  await page.route('**/*', route => {
    const request = route.request();
    return new URL(request.url()).origin === allowedOrigin && request.method() === 'GET' ? route.continue() : route.abort();
  });
});

test('homepage follows the approved grounded decision sequence', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  // Wait for React hydration to replace any prerendered Suspense markup, then
  // query and scroll the current conversion node in one page-context operation.
  const conversionSection = page.locator('[data-p2-section="conversion"]');
  await page.waitForTimeout(250);
  await expect.poll(() => conversionSection.count(), { timeout: 10_000 }).toBe(1);
  await page.evaluate(() => {
    document.querySelector('[data-p2-section="conversion"]')?.scrollIntoView({ block: 'center' });
  });
  await expect(conversionSection).toBeVisible({ timeout: 10_000 });

  const sectionOrder = await page.locator('main section').evaluateAll(sections =>
    sections.map(section => section.getAttribute('data-p2-section') || section.getAttribute('aria-labelledby')),
  );
  expect(sectionOrder).toEqual([
    'hero', 'craft-work', 'craft-services', 'craft-areas',
    'problem-navigator', 'process', 'questions', 'conversion',
  ]);
  const workmanship = page.locator('section[aria-labelledby="craft-work"]');
  await expect(workmanship.locator('figure')).toHaveCount(2);
  await expect(workmanship.getByRole('link', { name: 'Explore the project gallery' })).toHaveAttribute('href', '/projects');
  await expect(workmanship.getByRole('link', { name: 'Read the case studies' })).toHaveAttribute('href', '/case-studies');
  await expect(page.locator('section[aria-labelledby="craft-services"] article')).toHaveCount(7);
  expect(await page.locator('section[aria-labelledby="craft-services"] h3 a').evaluateAll(links => links.map(link => link.getAttribute('href')))).toEqual([
    '/services/masonry', '/services/heritage-restoration', '/services/structural-repairs',
    '/services/building-restoration', '/services/concrete-repairs', '/services/foundation-repairs', '/services/remedial-building',
  ]);
  await expect(page.getByRole('link', { name: 'Explore our service area' })).toHaveAttribute('href', '/areas/hawkesbury-western-sydney');
  await expect(page.getByRole('link', { name: 'Meet Minas Romanakis' })).toHaveAttribute('href', '/about');
  await expect(page.locator('[data-p2-section="process"]')).toHaveCount(1);
  await expect(page.locator('[data-hero-copy]').getByRole('button', { name: 'Discuss your project', exact: true })).toBeVisible();
  await expect(page.locator('[data-hero-copy]').getByRole('link', { name: 'Call Minas', exact: true })).toHaveAttribute('href', 'tel:0414922276');

  const images = workmanship.locator('img');
  for (const image of await images.all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveAttribute('alt', /\S/);
    await expect.poll(() => image.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
});

test('the complete approved homepage stays still while scrolling and interacting', async ({ page }) => {
  const videoRequests: string[] = [];
  page.on('request', request => {
    if (/\.(mp4|webm)(?:\?|$)/i.test(request.url())) videoRequests.push(request.url());
  });
  await page.goto('/');
  for (const section of await page.locator('main section').all()) {
    await section.scrollIntoViewIfNeeded();
  }
  await page.locator('[data-hero-media]').click({ position: { x: 10, y: 120 } });
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await expect(page.locator('main video')).toHaveCount(0);
  expect(videoRequests).toEqual([]);
});

test('homepage stays within responsive containment and mobile decision-length budgets', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => document.fonts.ready);

  const dimensions = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    scrollWidth: document.documentElement.scrollWidth,
    scrollHeight: document.documentElement.scrollHeight,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
  if (dimensions.viewportWidth <= 344) {
    // Fold/narrow viewports: content is taller due to narrower text columns
    expect(dimensions.scrollHeight / dimensions.viewportHeight).toBeLessThanOrEqual(24);
  } else if (dimensions.viewportWidth <= 430) {
    expect(dimensions.scrollHeight / dimensions.viewportHeight).toBeLessThanOrEqual(17);
  }
});

test('reduced-motion visitors receive the full journey without non-essential animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const animated = page.locator('[data-reveal]');
  const count = await animated.count();
  for (let index = 0; index < count; index += 1) {
    const styles = await animated.nth(index).evaluate((element) => {
      const computed = getComputedStyle(element);
      return {
        animationDuration: computed.animationDuration,
        transitionDuration: computed.transitionDuration,
        opacity: computed.opacity,
        transform: computed.transform,
      };
    });
    expect(styles.animationDuration).toBe('0s');
    expect(styles.transitionDuration).toBe('0s');
    expect(styles.opacity).toBe('1');
    expect(styles.transform).toBe('none');
  }

  const hero = page.locator('[data-p2-section="hero"]');
  await expect(hero.locator('img')).toBeVisible();
  await expect(hero.locator('img')).toHaveAttribute('src', /romansstone_1572378831/);
  await expect(hero.locator('video')).toHaveCount(0);
  await expect(page.locator('main video')).toHaveCount(0);
  // These sections exist even if the current design has no data-reveal nodes.
  for (const section of await page.locator('main section').all()) {
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();
    expect(await section.evaluate(el => getComputedStyle(el).opacity)).toBe('1');
  }

});

test('keyboard users can bypass the persistent navigation', async ({ page }) => {
  await page.goto('/', { waitUntil: 'domcontentloaded' });

  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  const isFirstFocusable = await page.evaluate(() => {
    const focusable = document.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    return focusable?.textContent?.trim() === 'Skip to main content';
  });
  expect(isFirstFocusable).toBe(true);

  await skipLink.focus();
  await expect(skipLink).toBeFocused();
  await page.keyboard.press('Enter');

  await expect(page.locator('main#main-content')).toBeFocused();
  expect(new URL(page.url()).hash).toBe('#main-content');
});
