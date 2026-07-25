import { defineConfig } from '@playwright/test';

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;
const baseURL = externalBaseURL || 'http://127.0.0.1:4174';

const viewports = [
  { name: 'narrow', width: 320, height: 800 },
  { name: 'fold-cover', width: 344, height: 882 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 900 },
];

export default defineConfig({
  testDir: './tests/browser',
  timeout: 45_000,
  workers: 3,
  reporter: [['list']],
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: ['chromium', 'firefox', 'webkit'].flatMap((browserName) =>
    viewports.map((viewport) => ({
      name: `${browserName}-${viewport.name}`,
      use: { browserName, viewport: { width: viewport.width, height: viewport.height } },
    })),
  ),
  webServer: externalBaseURL ? undefined : {
    command: 'npm run preview -- --host 127.0.0.1 --port 4174',
    url: 'http://127.0.0.1:4174/learn/',
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
