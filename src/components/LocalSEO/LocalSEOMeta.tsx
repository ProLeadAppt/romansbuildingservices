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
      home: `Professional Masonry & Building Services Sydney | ${BUSINESS_INFO.name}`,
      services: `${service || 'Building Services'} Sydney | Licensed Professionals | ${BUSINESS_INFO.name}`,
      about: `About ${BUSINESS_INFO.name} | 25+ Years Building Experience Sydney`,
      contact: `Contact ${BUSINESS_INFO.name} | Sydney Building Specialists | Free Quotes`,
      projects: `Sydney Building Projects | ${BUSINESS_INFO.name} Portfolio`
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
      home: `Professional masonry, building restoration & structural repairs in Sydney. Licensed specialists with 25+ years experience. Heritage buildings, waterproofing, brick repairs. Call ${BUSINESS_INFO.phone} for free assessment.`,
      services: `Expert ${service || 'building services'} in Sydney. Licensed professionals specializing in heritage restoration, structural repairs, waterproofing. 25+ years experience. Free quotes available.`,
      about: `${BUSINESS_INFO.name} - Sydney's trusted building specialists since ${BUSINESS_INFO.established}. Licensed masonry experts, heritage restoration specialists. Professional, reliable, fully insured.`,
      contact: `Contact ${BUSINESS_INFO.name} for professional building services in Sydney. Licensed specialists in masonry, restoration, repairs. Call ${BUSINESS_INFO.phone} or request free quote online.`,
      projects: `View our Sydney building projects portfolio. Heritage restorations, masonry work, structural repairs. 25+ years experience with satisfied customers across Sydney.`
    };

    return baseDescriptions[page];
  };

  const generateKeywords = () => {
    const baseKeywords = [
      'masonry Sydney',
      'building restoration Sydney', 
      'structural repairs Sydney',
      'heritage building restoration',
      'waterproofing Sydney',
      'brick repairs Sydney',
      'licensed masonry contractor Sydney',
      'building assessment Sydney'
    ];

    if (service) {
      baseKeywords.unshift(`${service} Sydney`);
    }

    if (location) {
      baseKeywords.push(`masonry ${location}`, `building services ${location}`);
    }

    return baseKeywords.join(', ');
  };

  const canonicalUrl = `${BUSINESS_INFO.website}${location ? `/${location.toLowerCase().replace(/\s+/g, '-')}` : ''}`;

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

    // Update canonical link
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