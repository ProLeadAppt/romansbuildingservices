import { expect, test } from '@playwright/test';

test('public crawler files are served with their intended policies', async ({ request }) => {
  // Only public discovery files are fetched; excluded paths are never requested.
  const robots = await request.get('/robots.txt');
  expect(robots.status()).toBe(200);
  expect(robots.headers()['content-type']).toMatch(/text\/plain/);
  const rules = await robots.text();
  expect(rules.match(/^Allow: \/$/gm)).toHaveLength(1);
  expect(rules.match(/^User-agent:/gm)).toHaveLength(1);
  expect(rules).toContain('User-agent: *');
  expect(rules).toContain('Disallow: /admin');
  expect(rules).toContain('Disallow: /api/');

  const index = await request.get('/sitemap.xml');
  expect(index.status()).toBe(200);
  expect(index.headers()['content-type']).toMatch(/(?:application|text)\/xml/);
  const xml = await index.text();
  expect(xml.match(/<sitemap>/g)).toHaveLength(10);
  expect(xml).not.toContain('<lastmod>');
  expect(xml).toContain('https://romansbuildingservices.com/sitemap-main.xml');
});
