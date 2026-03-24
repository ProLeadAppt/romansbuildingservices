import React from 'react';
import { useEffect } from 'react';

// Business information constants for NAP consistency
export const BUSINESS_INFO = {
  name: "Romans Building Services",
  address: {
    street: "",
    suburb: "Strathfield",
    state: "NSW",
    postcode: "2135",
    country: "Australia"
  },
  phone: "+61 414 922 276",
  email: "romanspropertyservices@gmail.com",
  website: "https://www.romansbuildingservices.com",
  abn: "49 641 892 677",
  coordinates: {
    latitude: -33.8796,
    longitude: 151.0942
  },
  serviceAreas: [
    "Sydney CBD",
    "North Sydney", 
    "Eastern Suburbs",
    "Inner West",
    "Northern Beaches",
    "Lower North Shore",
    "Upper North Shore"
  ],
  services: [
    "Masonry Services",
    "Building Restoration", 
    "Structural Repairs",
    "Heritage Building Restoration",
    "Stone Protection",
    "Brick Repairs",
    "Stone Restoration",
    "Building Inspections"
  ],
  businessHours: {
    monday: "07:00-18:00",
    tuesday: "07:00-18:00", 
    wednesday: "07:00-18:00",
    thursday: "07:00-18:00",
    friday: "07:00-18:00",
    saturday: "08:00-16:00",
    sunday: "Priority Only"
  },
  established: "1995",
  licenseNumber: "NSW123456", // Replace with actual license
  socialMedia: {
    facebook: "https://facebook.com/romansbuildingservices",
    instagram: "https://instagram.com/romansstone"
  }
};

// Local Business Structured Data Schema
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_INFO.website}#business`,
    "name": BUSINESS_INFO.name,
    "description": "Professional stonework, masonry restoration and structural repair services in Sydney. Licensed stonemasons specializing in heritage stone restoration, masonry repairs, and structural stonework with 30+ years experience.",
    "url": BUSINESS_INFO.website,
    "telephone": BUSINESS_INFO.phone,
    "email": BUSINESS_INFO.email,
    "foundingDate": BUSINESS_INFO.established,
    "address": {
      "@type": "PostalAddress", 
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.suburb,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.postcode,
      "addressCountry": BUSINESS_INFO.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": BUSINESS_INFO.coordinates.latitude,
      "longitude": BUSINESS_INFO.coordinates.longitude
    },
    "areaServed": BUSINESS_INFO.serviceAreas.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State", 
        "name": "New South Wales"
      }
    })),
    "serviceType": BUSINESS_INFO.services,
    "priceRange": "$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "image": [
      `${BUSINESS_INFO.website}/images/romans-building-services.jpg`,
      `${BUSINESS_INFO.website}/images/masonry-work-sydney.jpg`,
      `${BUSINESS_INFO.website}/images/heritage-restoration.jpg`
    ],
    "logo": `${BUSINESS_INFO.website}/lovable-uploads/romans-business-logo.webp`,
    "sameAs": [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.instagram
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service",
      "availableLanguage": "English",
      "areaServed": "AU"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "name": "NSW Masonry Contractor License",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "NSW Fair Trading"
      }
    },
    "knowsAbout": [
      "Heritage restoration",
      "Masonry repairs",
      "Sandstone restoration",
      "Structural repairs"
    ]
  };

  useEffect(() => {
    // Add schema to head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

// Service-specific structured data
export const ServiceSchema = ({ service }: { service: string }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "@id": `${BUSINESS_INFO.website}#business`
    },
    "areaServed": BUSINESS_INFO.serviceAreas,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service} in Sydney`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          }
        }
      ]
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

// FAQ Schema for local SEO
export const FAQSchema = ({ faqs }: { faqs: Array<{question: string, answer: string}> }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};