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

const toAbsolute = (url: string) => {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const path = url.startsWith('/') ? url : `/${url}`;
  return `${SITE_URL}${path}`;
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
