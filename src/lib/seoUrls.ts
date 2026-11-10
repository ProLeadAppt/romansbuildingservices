export const SITE_URL = 'https://romansbuildingservices.com';

// Page metadata must never leak preview hosts, credentials or query parameters.
// Resolve only the pathname against production; media have different URL rules.
export const toCanonicalPageUrl = (value: string): string => {
  let pathname = '/';
  try {
    const parsed = new URL(value, `${SITE_URL}/`);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
      pathname = parsed.pathname;
    }
  } catch {
    // Invalid page input falls back to the production homepage, not a bad URL.
  }
  return `${SITE_URL}${pathname.replace(/\/+$/, '')}/`;
};

// Preserve media paths, query transformations and fragments, including on CDNs.
// In particular, extensionless image endpoints are not canonical page routes.
export const toAbsoluteMediaUrl = (value: string): string =>
  new URL(value, `${SITE_URL}/`).href;
