import { useEffect } from 'react';
import { GoogleAnalytics } from '../analytics/GoogleAnalytics';

interface SitewideSEOProps {
  children?: React.ReactNode;
}

export const SitewideSEO: React.FC<SitewideSEOProps> = ({ children }) => {
  useEffect(() => {
    // Ensure canonical tag is always present and correct
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.romansbuildingservices.com/');

    // Add Google Search Console verification if not present
    let verification = document.querySelector('meta[name="google-site-verification"]');
    if (!verification) {
      verification = document.createElement('meta');
      verification.setAttribute('name', 'google-site-verification');
      verification.setAttribute('content', 'REPLACE_WITH_YOUR_VERIFICATION_CODE');
      document.head.appendChild(verification);
    }

    // Add robots meta if not present
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      robots.setAttribute('content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
      document.head.appendChild(robots);
    }

    // Add schema.org breadcrumb for homepage
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.romansbuildingservices.com/"
        }
      ]
    };

    let breadcrumbScript = document.querySelector('script[data-schema="breadcrumb"]');
    if (!breadcrumbScript) {
      breadcrumbScript = document.createElement('script');
      breadcrumbScript.setAttribute('type', 'application/ld+json');
      breadcrumbScript.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(breadcrumbScript);
    }
    breadcrumbScript.textContent = JSON.stringify(breadcrumbSchema);

  }, []);

  return (
    <>
      <GoogleAnalytics measurementId="G-M9SZ1334SV" />
      {children}
    </>
  );
};