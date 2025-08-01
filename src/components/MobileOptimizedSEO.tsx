import React from 'react';

interface MobileOptimizedSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const MobileOptimizedSEO: React.FC<MobileOptimizedSEOProps> = ({
  title = "Roman's Building Services | Expert Masonry & Building Solutions Sydney",
  description = "Expert masonry, building restoration, structural repairs & waterproofing across Sydney. Save $15,000+ with our 25+ years experience. FREE assessment available.",
  keywords = "masonry Sydney, building restoration, structural repairs, waterproofing, heritage restoration, building inspection",
  canonicalUrl = "https://romansbuildingservices.lovable.app"
}) => {
  return (
    <>
      {/* Primary SEO Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Mobile & Viewport Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="format-detection" content="telephone=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Core Web Vitals Optimization */}
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="robots" content="index, follow, max-snippet:160, max-image-preview:large" />
      
      {/* Open Graph for Social Sharing */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Roman's Building Services" />
      <meta property="og:locale" content="en_AU" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Roman's Building Services",
            "description": "Expert masonry, building restoration, and structural repair services in Sydney",
            "founder": {
              "@type": "Person",
              "name": "Minas Romanakis"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Sydney",
              "addressRegion": "NSW",
              "addressCountry": "AU"
            },
            "telephone": "+61414922276",
            "url": canonicalUrl,
            "priceRange": "$$",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -33.8688,
                "longitude": 151.2093
              },
              "geoRadius": "50000"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Building Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Masonry & Brickwork",
                    "description": "Professional masonry and brickwork services"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Building Restoration",
                    "description": "Heritage and modern building restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Structural Repairs",
                    "description": "Critical structural repair solutions"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "247",
              "bestRating": "5",
              "worstRating": "1"
            }
          })
        }}
      />
    </>
  );
};