/**
 * Static prerender for the Romans Building Services SPA.
 *
 * Runs as a postbuild step. For every URL listed in the public sitemap files,
 * boots a tiny static server pointing at dist/, drives Puppeteer through each
 * route, and writes the fully-rendered HTML back to dist/<route>/index.html.
 *
 * Result: crawlers (Google, Bing, GPTBot, ClaudeBot, etc.) receive real HTML
 * with the rendered title, meta tags, JSON-LD schema and visible content,
 * instead of an empty React shell. Humans still get the SPA after hydration.
 */

import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const PUBLIC = path.join(ROOT, 'public');
const SITE_HOST = 'romansbuildingservices.com';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function loadRoutes() {
  const files = fs
    .readdirSync(PUBLIC)
    .filter((f) => f.startsWith('sitemap-') && f.endsWith('.xml') && !['sitemap-images.xml', 'sitemap-llms.xml'].includes(f));
  // sitemap-images.xml's <loc> values overlap with the others (they are page
  // URLs that contain images), so excluding it avoids duplicate work without
  // missing any routes.
  const routes = new Set();
  const locRegex = new RegExp(`<loc>https://${SITE_HOST.replace('.', '\\.')}([^<]*)</loc>`, 'g');
  for (const file of files) {
    const xml = fs.readFileSync(path.join(PUBLIC, file), 'utf8');
    for (const match of xml.matchAll(locRegex)) {
      const route = match[1] === '' ? '/' : match[1];
      routes.add(route);
    }
  }
  return [...routes].sort();
}

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const stream = fs.createReadStream(filePath);
  stream.on('error', (err) => {
    console.error(`[server] failed to read ${filePath}: ${err.code}`);
    if (!res.headersSent) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('not found');
    }
  });
  stream.on('open', () => {
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    stream.pipe(res);
  });
}

function startServer() {
  const server = http.createServer((req, res) => {
    try {
      const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
      const filePath = path.join(DIST, pathname);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        return serveFile(res, filePath);
      }
      // SPA fallback — mirrors netlify.toml /* -> /index.html 200
      return serveFile(res, path.join(DIST, 'index.html'));
    } catch (err) {
      res.writeHead(500);
      res.end(String(err));
    }
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function launchBrowser() {
  return puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
}

async function closePage(page) {
  if (!page || page.isClosed()) return;
  try {
    await page.close();
  } catch {
    // Ignore page-close races after browser crashes.
  }
}

async function prerenderRoute(browser, route, port) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (err) => {
    errors.push(err.message);
  });
  page.on('requestfailed', (req) => {
    // SearchAtlas, fonts, images, etc. are blocked on purpose during
    // prerender. Only log first-party document/script/style failures.
    const url = req.url();
    const type = req.resourceType();
    if (['image', 'media', 'font'].includes(type)) return;
    if (url.includes('googletagmanager.com') || url.includes('google-analytics.com') || url.includes('clarity.ms') || url.includes('searchatlas.com')) return;
    if (url.startsWith('http://127.0.0.1')) {
      errors.push(`requestfailed ${url} (${req.failure()?.errorText})`);
    }
  });
  try {
    await page.setViewport({ width: 1280, height: 800 });
    page.setDefaultNavigationTimeout(30000);
    // Block third-party scripts and heavy media during prerender. The HTML we
    // capture doesn't need them and they cause networkidle to never settle.
    // Real visitors still load everything normally — this is build-time only.
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const url = req.url();
      const type = req.resourceType();
      if (
        url.includes('googletagmanager.com') ||
        url.includes('google-analytics.com') ||
        url.includes('clarity.ms') ||
        url.includes('leadconnector') ||
        url.includes('fonts.googleapis.com') ||
        url.includes('fonts.gstatic.com') ||
        url.includes('searchatlas.com') ||
        type === 'image' ||
        type === 'media' ||
        type === 'font'
      ) {
        return req.abort();
      }
      req.continue();
    });

    const url = `http://127.0.0.1:${port}${route}`;
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    // Wait for the React route to paint its main content. The previous
    // 1500ms hard timeout was too short for the home page (5 lazy
    // components + video hero + 162KB JS chunk), and the pageerror
    // handler above would surface a fatal JS error if the route
    // never produced content. We wait up to 8s for either an h1
    // OR an application/ld+json schema block to appear — both
    // indicate the React tree has mounted and produced content.
    const isHome = route === '/';
    try {
      await page.waitForSelector('main, h1, script[type="application/ld+json"]', {
        timeout: isHome ? 8000 : 4000
      });
    } catch {
      // Best-effort: capture whatever rendered and let the post-process
      // logging below surface what was missing.
    }
    // Additional settle for late-arriving schema scripts (helmet injects
    // them on mount). Home gets a longer settle because it's the heaviest
    // route and lazy components resolve sequentially.
    const settleMs = isHome ? 1200 : 250;
    await new Promise((r) => setTimeout(r, settleMs));

    if (errors.length) {
      console.error(`[prerender] ${route} pageerror(s): ${errors.join(' | ').slice(0, 300)}`);
    }

    // Force Framer Motion's initial inline styles to their final visible state
    // before capture. Without this, crawlers see h1/h2/h3 etc with opacity:0
    // and report "missing H1" warnings (Bing in particular). Real visitors are
    // unaffected — the React app re-mounts on hydration and animations replay.
    await page.evaluate(() => {
      document.querySelectorAll('[style]').forEach((el) => {
        const style = el.getAttribute('style') || '';
        if (
          style.includes('opacity: 0') ||
          style.includes('opacity:0') ||
          style.includes('translateY') ||
          style.includes('translateX') ||
          style.includes('blur(') ||
          style.includes('scale(')
        ) {
          el.style.opacity = '';
          el.style.transform = '';
          el.style.filter = '';
        }
      });
    });

    let html = await page.content();
    if (!html.startsWith('<!DOCTYPE')) {
      html = '<!DOCTYPE html>\n' + html;
    }
    // Strip the placeholder meta tags that came from index.html so search
    // engines don't see two competing <meta name="description"> etc.
    // react-helmet-async marks its tags with data-rh="true"; we drop any
    // matching default tag if a helmet-managed one exists.
    html = dedupeHelmetTags(html);
    html = normalizeInternalIndexableUrls(html);

    const outDir = route === '/' ? DIST : path.join(DIST, route);
    ensureDir(outDir);
    const outPath = path.join(outDir, 'index.html');
    fs.writeFileSync(outPath, html);
  } finally {
    await closePage(page);
  }
}

function normalizeUrlMaybe(value) {
  if (!value) return value;
  if (value.startsWith('mailto:') || value.startsWith('tel:') || value.startsWith('#')) return value;
  if (/\.[a-z0-9]{2,8}(?:[?#].*)?$/i.test(value)) return value;
  if (value.startsWith('/')) {
    const [pathOnly, suffix = ''] = value.split(/(?=[?#])/);
    if (pathOnly !== '/' && !pathOnly.endsWith('/')) return pathOnly + '/' + suffix;
    return value;
  }
  if (value.startsWith('https://romansbuildingservices.com')) {
    try {
      const u = new URL(value);
      if (u.pathname !== '/' && !u.pathname.endsWith('/') && !/\.[a-z0-9]{2,8}$/i.test(u.pathname)) {
        u.pathname += '/';
        u.hash = '';
        return u.toString();
      }
    } catch {
      // Keep original if URL parsing fails.
    }
  }
  return value;
}

function normalizeInternalIndexableUrls(html) {
  return html
    .replace(/\b(href|src|content|url)=(['"])(https:\/\/romansbuildingservices\.com\/[^'"]+|\/[^'"]+)\2/gi, (m, attr, q, value) => {
      if ((attr === 'src' || attr === 'content') && /\.[a-z0-9]{2,8}(?:[?#].*)?$/i.test(value)) return m;
      return `${attr}=${q}${normalizeUrlMaybe(value)}${q}`;
    })
    .replace(/https:\/\/romansbuildingservices\.com\/([A-Za-z0-9_\-/]+)(?=[\"'\s<])/g, (m) => normalizeUrlMaybe(m));
}

function dedupeHelmetTags(html) {
  const helmetTags = [...html.matchAll(/<(meta|link)\b[^>]*data-rh="true"[^>]*>/gi)].map((m) => m[0]);
  const keyOf = (tag) => {
    const name = tag.match(/\s(name|property|rel)="([^"]+)"/i);
    if (!name) return null;
    // For canonical/alternate link, key by rel
    if (name[1] === 'rel') {
      const hreflang = tag.match(/hreflang="([^"]+)"/i);
      return `link:${name[2]}${hreflang ? ':' + hreflang[1] : ''}`;
    }
    return `meta:${name[2]}`;
  };
  const helmetKeys = new Set(helmetTags.map(keyOf).filter(Boolean));
  // Remove non-helmet duplicates that helmet has overridden
  return html.replace(
    /<(meta|link)\b(?![^>]*data-rh="true")[^>]*>/gi,
    (tag) => {
      const k = keyOf(tag);
      if (k && helmetKeys.has(k)) return '';
      return tag;
    },
  );
}

async function main() {
  if (!fs.existsSync(DIST) || !fs.existsSync(path.join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html not found — run `npm run build` first.');
    process.exit(1);
  }

  const routes = loadRoutes();
  console.log(`[prerender] discovered ${routes.length} routes from sitemaps`);

  const server = await startServer();
  const port = server.address().port;
  console.log(`[prerender] static server on http://127.0.0.1:${port}`);
  let browser = await launchBrowser();

  const startedAt = Date.now();
  let done = 0;
  let staleBrowserErrors = 0;
  for (const route of routes) {
    let success = false;
    for (let attempt = 1; attempt <= 2 && !success; attempt++) {
      if (!browser.isConnected()) {
        browser = await launchBrowser();
      }
      try {
        await prerenderRoute(browser, route, port);
        done++;
        success = true;
        if (done % 10 === 0 || done === routes.length) {
          console.log(`[prerender] ${done}/${routes.length}`);
        }
      } catch (err) {
        const message = err?.message || String(err);
        console.error(`[prerender] FAILED ${route} (attempt ${attempt}): ${message}`);
        const recoverable = /detached Frame|Connection closed|Target closed|Execution context was destroyed/i.test(message);
        if (!recoverable || attempt === 2) {
          break;
        }
        staleBrowserErrors += 1;
        try {
          await browser.close();
        } catch {
          // ignore
        }
        browser = await launchBrowser();
      }
    }
  }

  try {
    await browser.close();
  } catch {
    // ignore
  }
  server.close();

  if (staleBrowserErrors > 0) {
    console.log(`[prerender] browser relaunched ${staleBrowserErrors} time(s) to finish unstable routes`);
  }

  const elapsed = ((Date.now() - startedAt) / 1000).toFixed(1);
  console.log(`[prerender] done — ${done}/${routes.length} routes in ${elapsed}s`);
}

main().catch((err) => {
  console.error('[prerender] fatal:', err);
  process.exit(1);
});
