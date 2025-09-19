import React, { useEffect } from 'react';
import { BUSINESS_INFO } from './StructuredData';

interface LocalSEOMetaProps {
  page?: 'home' | 'services' | 'about' | 'contact' | 'projects';
  service?: string;
  location?: string;
  customTitle?: string;
  customDescription?: string;
}

export const LocalSEOMeta: React.FC<LocalSEOMetaProps> = ({
  page = 'home',
  service,
  location,
  customTitle,
  customDescription
}) => {
  
  const generateTitle = () => {
    if (customTitle) return customTitle;
    
    const baseTitles = {
      home: `Professional Stonework & Masonry Services Sydney | ${BUSINESS_INFO.name}`,
      services: `${service || 'Stonework Services'} Sydney | Licensed Stonemasons | ${BUSINESS_INFO.name}`,
      about: `About ${BUSINESS_INFO.name} | 30+ Years Stonework Experience Sydney`,
      contact: `Contact ${BUSINESS_INFO.name} | Sydney Stonework Specialists | Free Quotes`,
      projects: `Sydney Stonework Projects | ${BUSINESS_INFO.name} Portfolio`
    };

    let title = baseTitles[page];
    
    if (location) {
      title = title.replace('Sydney', location);
    }
    
    return title;
  };

  const generateDescription = () => {
    if (customDescription) return customDescription;
    
    const baseDescriptions = {
      home: `Professional stonework, masonry restoration & structural repairs in Sydney. Licensed stonemasons with 30+ years experience. Heritage buildings, stone repairs, brick pointing. Call ${BUSINESS_INFO.phone} for free assessment.`,
      services: `Expert ${service || 'stonework services'} in Sydney. Licensed stonemasons specializing in heritage restoration, structural repairs, stone masonry. 30+ years experience. Free quotes available.`,
      about: `${BUSINESS_INFO.name} - Sydney's trusted stonemasons since ${BUSINESS_INFO.established}. Licensed stonework experts, heritage restoration specialists. Professional, reliable, fully insured.`,
      contact: `Contact ${BUSINESS_INFO.name} for professional stonework services in Sydney. Licensed stonemasons in masonry, restoration, repairs. Call ${BUSINESS_INFO.phone} or request free quote online.`,
      projects: `View our Sydney stonework projects portfolio. Heritage restorations, stone masonry work, structural repairs. 30+ years experience with satisfied customers across Sydney.`
    };

    return baseDescriptions[page];
  };

  const generateKeywords = () => {
    const baseKeywords = [
      'stonemason Sydney',
      'stone masonry Sydney',
      'stonework restoration Sydney', 
      'structural stone repairs Sydney',
      'heritage stonework restoration',
      'stone pointing Sydney',
      'brick repairs Sydney',
      'licensed stonemason Sydney',
      'stone assessment Sydney'
    ];

    if (service) {
      baseKeywords.unshift(`${service} Sydney`);
    }

    if (location) {
      baseKeywords.push(`stonemason ${location}`, `stonework services ${location}`);
    }

    return baseKeywords.join(', ');
  };

  // Always use main domain for canonical - site-wide SEO requirement
  const canonicalUrl = 'https://www.romansbuildingservices.com/';

  useEffect(() => {
    // Update document title and meta tags
    document.title = generateTitle();
    
    // Update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) || 
                 document.querySelector(`meta[property="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update canonical link - always points to main domain
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Update all meta tags
    updateMeta('description', generateDescription());
    updateMeta('keywords', generateKeywords());
    updateMeta('og:title', generateTitle());
    updateMeta('og:description', generateDescription());
    updateMeta('og:url', canonicalUrl);
    updateMeta('geo.region', 'AU-NSW');
    updateMeta('geo.placename', 'Sydney');
    updateMeta('contact:phone_number', BUSINESS_INFO.phone);
    updateMeta('contact:email', BUSINESS_INFO.email);
    
  }, [page, service, location, customTitle, customDescription]);

  return null;
};

// Google Business Profile Integration Component
export const GoogleBusinessIntegration: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* Google My Business Embed */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h3 className="font-semibold mb-3">Find Us on Google</h3>
        
        {/* Google Map Embed */}
        <div className="aspect-video bg-muted rounded-lg mb-4 relative overflow-hidden">
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${encodeURIComponent(BUSINESS_INFO.name + ' ' + BUSINESS_INFO.address.street + ' ' + BUSINESS_INFO.address.suburb)}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Romans Building Services Location"
          />
        </div>

        {/* Google Review Link */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-medium">Leave us a review</div>
            <div className="text-sm text-muted-foreground">Help others find quality building services</div>
          </div>
          <a
            href={`https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Write Review
          </a>
        </div>
      </div>

      {/* Schema for Google Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Place",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": BUSINESS_INFO.coordinates.latitude,
            "longitude": BUSINESS_INFO.coordinates.longitude
          },
          "name": BUSINESS_INFO.name,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": BUSINESS_INFO.address.street,
            "addressLocality": BUSINESS_INFO.address.suburb,
            "addressRegion": BUSINESS_INFO.address.state,
            "postalCode": BUSINESS_INFO.address.postcode,
            "addressCountry": BUSINESS_INFO.address.country
          }
        })}
      </script>
    </div>
  );
};