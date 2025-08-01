import React from 'react';
import { useEffect } from 'react';

// Business information constants for NAP consistency
export const BUSINESS_INFO = {
  name: "Romans Building Services",
  address: {
    street: "123 Construction Lane", // Replace with actual address
    suburb: "Sydney",
    state: "NSW", 
    postcode: "2000",
    country: "Australia"
  },
  phone: "0414 922 276",
  email: "info@romansbuildingservices.com.au",
  website: "https://romansbuildingservices.com.au",
  abn: "12 345 678 901", // Replace with actual ABN
  coordinates: {
    latitude: -33.8688,
    longitude: 151.2093
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
    "Waterproofing",
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
    sunday: "Emergency Only"
  },
  established: "1995",
  licenseNumber: "NSW123456", // Replace with actual license
  socialMedia: {
    facebook: "https://facebook.com/romansbuildingservices",
    instagram: "https://instagram.com/romansbuildingservices", 
    linkedin: "https://linkedin.com/company/romansbuildingservices"
  }
};

// Local Business Structured Data Schema
export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BUSINESS_INFO.website}#business`,
    "name": BUSINESS_INFO.name,
    "description": "Professional masonry, building restoration and structural repair services in Sydney. Licensed specialists in heritage building restoration, brick repairs, and waterproofing with 25+ years experience.",
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
    "logo": `${BUSINESS_INFO.website}/images/romans-logo.png`,
    "sameAs": [
      BUSINESS_INFO.socialMedia.facebook,
      BUSINESS_INFO.socialMedia.instagram, 
      BUSINESS_INFO.socialMedia.linkedin
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
      "name": "NSW Building License",
      "credentialCategory": "Professional License",
      "recognizedBy": {
        "@type": "Organization",
        "name": "NSW Fair Trading"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewRating": {
          "@type": "Rating", 
          "ratingValue": "5"
        },
        "datePublished": "2024-01-15",
        "reviewBody": "Excellent heritage restoration work on our Victorian terrace. Professional service and attention to detail."
      }
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