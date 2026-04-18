import React from 'react';
import { useEffect } from 'react';

// Business information constants for NAP consistency
export const BUSINESS_INFO = {
  name: "Romans Building Services",
  address: {
    streetAddress: "Strathfield",
    suburb: "Strathfield",
    state: "NSW",
    postcode: "2135",
    country: "Australia"
  },
  telephone: "+61414922276",
  phone: "+61414922276",
  email: "romanspropertyservices@gmail.com",
  website: "https://www.romansbuildingservices.com",
  abn: "49 641 892 677",
  coordinates: {
    latitude: -33.8796,
    longitude: 151.0942
  },
  areaServed: [
    "Sydney",
    "Strathfield",
    "Sydney CBD",
    "Eastern Suburbs",
    "North Shore",
    "Northern Beaches",
    "Inner West",
    "Greater Sydney"
  ],
  // Back-compat alias used by some consumers
  serviceAreas: [
    "Sydney",
    "Strathfield",
    "Sydney CBD",
    "Eastern Suburbs",
    "North Shore",
    "Northern Beaches",
    "Inner West",
    "Greater Sydney"
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
  knowsAbout: [
    "Heritage restoration",
    "Masonry repairs",
    "Sandstone restoration",
    "Structural repairs"
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
  foundingDate: "1995-01-01",
  sameAs: [
    "https://www.instagram.com/romansstone",
    "https://www.facebook.com/RomansBuildingServicesStrathfield"
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/RomansBuildingServicesStrathfield",
    instagram: "https://www.instagram.com/romansstone"
  },
  images: {
    main: "https://www.romansbuildingservices.com/gallery/full/romansstone_1572378831_2165593056404182319_2394650725.webp",
    heritage: "https://www.romansbuildingservices.com/gallery/full/romansstone_1572902412_2169985170382604428_2394650725.webp",
    masonry: "https://www.romansbuildingservices.com/gallery/full/romansstone_1452415091_1159264269511646168_2394650725.webp"
  },
  logo: "https://www.romansbuildingservices.com/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.webp"
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
    "telephone": BUSINESS_INFO.telephone,
    "email": BUSINESS_INFO.email,
    "foundingDate": BUSINESS_INFO.foundingDate,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.streetAddress,
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
    "areaServed": BUSINESS_INFO.areaServed.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": {
        "@type": "State",
        "name": "New South Wales"
      }
    })),
    "serviceType": BUSINESS_INFO.services,
    "currenciesAccepted": "AUD",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "openingHours": [
      "Mo-Fr 07:00-18:00",
      "Sa 08:00-16:00"
    ],
    "image": [
      BUSINESS_INFO.images.main,
      BUSINESS_INFO.images.masonry,
      BUSINESS_INFO.images.heritage
    ],
    "logo": BUSINESS_INFO.logo,
    "sameAs": BUSINESS_INFO.sameAs,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.telephone,
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
    "knowsAbout": BUSINESS_INFO.knowsAbout
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
    "areaServed": BUSINESS_INFO.areaServed,
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
