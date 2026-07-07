import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile' | 'product';
  noIndex?: boolean;
  schemaJson?: Record<string, unknown> | Array<Record<string, unknown>>;
  preloadHero?: string; // absolute or root-relative URL of the LCP image (homepage hero poster)
  heroPreloadAs?: 'image' | 'video';
  heroType?: string; // mime type for the preload tag (e.g. 'image/webp', 'image/avif')
}

const SITE_URL = 'https://romansbuildingservices.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Set VITE_GSC_VERIFICATION in .env / Netlify env to wire Google Search Console.
// Leave empty in dev — the meta tag is omitted entirely so it never emits
// `content=""` (which GSC rejects as "tag present but value missing").
const GSC_VERIFICATION = (import.meta.env.VITE_GSC_VERIFICATION as string | undefined)?.trim();

const hasFileExtension = (pathname: string) => /\.[a-z0-9]{2,8}$/i.test(pathname);

const withCanonicalTrailingSlash = (absoluteUrl: string) => {
  const parsed = new URL(absoluteUrl);
  if (parsed.pathname !== '/' && !parsed.pathname.endsWith('/') && !hasFileExtension(parsed.pathname)) {
    parsed.pathname = `${parsed.pathname}/`;
  }
  parsed.hash = '';
  return parsed.toString();
};

const toAbsolute = (url: string) => {
  if (!url) return url;
  const absolute = url.startsWith('http://') || url.startsWith('https://')
    ? url
    : `${SITE_URL}${url.startsWith('/') ? url : `/${url}`}`;
  return withCanonicalTrailingSlash(absolute);
};

export const SEOHead = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex = false,
  schemaJson,
  preloadHero,
  heroPreloadAs = 'image',
  heroType,
}: SEOHeadProps) => {
  const canonicalUrl = toAbsolute(canonical);
  const imageUrl = toAbsolute(ogImage || DEFAULT_OG_IMAGE);
  const heroHref = preloadHero ? toAbsolute(preloadHero) : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-AU" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* LLM / answer-engine knowledge files. Discoverable from every page,
          not just the home page. Both are also referenced from robots.txt. */}
      <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms.txt`} title="LLM knowledge base (index)" />
      <link rel="alternate" type="text/plain" href={`${SITE_URL}/llms-full.txt`} title="LLM knowledge base (full technical reference)" />
      <link rel="alternate" type="application/xml" href={`${SITE_URL}/sitemap.xml`} title="XML sitemap index" />
      <meta name="date" content="2026-07-07" />
      <meta name="last-modified" content="2026-07-07" />
      <html lang="en-AU" />
      {GSC_VERIFICATION && (
        <meta name="google-site-verification" content={GSC_VERIFICATION} />
      )}
      {heroHref && (
        <link rel="preload" as={heroPreloadAs} href={heroHref} type={heroType} fetchpriority="high" />
      )}
      {noIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      <meta property="og:title" content={title} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Romans Building Services" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {schemaJson && (
        <script type="application/ld+json">
          {JSON.stringify(schemaJson)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
