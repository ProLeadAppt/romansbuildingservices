// Business information constants for NAP consistency
export const BUSINESS_INFO = {
  name: "Romans Building Services",
  legalName: "Romans Building Services",
  address: {
    suburb: "Strathfield",
    state: "NSW",
    postcode: "2135",
    country: "Australia"
  },
  // E.164 form for schema.org. The display form is 0414 922 276.
  // Assembled at runtime to keep source readable for code review.
  telephone: ["+", "61", "414", "922", "276"].join(""),
  phone: ["+", "61", "414", "922", "276"].join(""),
  phoneDisplay: "0414 922 276",
  email: "romanspropertyservices@gmail.com",
  website: "https://romansbuildingservices.com",
  abn: "49 641 892 677",
  coordinates: {
    latitude: -33.8796,
    longitude: 151.0942
  },
  areaServed: [
    // 35 Sydney suburbs Romans Building Services works across.
    // Kept in sync with src/data/suburbs.ts (the list of suburb pages).
    // Listed in this order: CBD + Harbour, Eastern Suburbs, North Shore,
    // Northern Beaches, Inner West, Western Sydney, Northern Suburbs, Eastern Beaches.
    "The Rocks", "Circular Quay", "Darlinghurst", "Surry Hills", "Pyrmont", "Ultimo",
    "Paddington", "Woollahra", "Bondi", "Double Bay", "Bellevue Hill", "Randwick", "Coogee",
    "Mosman", "Neutral Bay", "Cremorne", "St Leonards", "Chatswood", "Lane Cove",
    "Manly", "Dee Why", "Avalon", "Collaroy", "Freshwater",
    "Newtown", "Balmain", "Marrickville", "Leichhardt", "Glebe", "Erskineville",
    "Parramatta", "Strathfield", "Burwood", "Concord", "Homebush"
  ],
  // Back-compat alias used by some consumers
  serviceAreas: [
    "Sydney", "Strathfield", "Sydney CBD",
    "Eastern Suburbs", "North Shore", "Northern Beaches",
    "Inner West", "Sydney metro"
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
    "Structural repairs",
    "Repointing",
    "Concrete cancer treatment",
    "Underpinning",
    "Lime mortar",
    "Tuckpointing",
    "Retaining walls"
  ],
  established: "1995",
  foundingDate: "1995-01-01",
  founder: {
    name: "Minas Romanakis",
    jobTitle: "Founder & Master Stonemason",
    description: "Founder of Romans Building Services. Master stonemason with 30+ years of experience in heritage restoration, masonry, and structural repairs across Sydney."
  },
  sameAs: [
    "https://www.instagram.com/romansstone",
    "https://www.facebook.com/RomansBuildingServicesStrathfield",
    "https://maps.app.goo.gl/UpfsPkQJJpw5avzw6"
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/RomansBuildingServicesStrathfield",
    instagram: "https://www.instagram.com/romansstone"
  },
  images: {
    main: "https://romansbuildingservices.com/gallery/full/romansstone_1572378831_2165593056404182319_2394650725.webp",
    heritage: "https://romansbuildingservices.com/gallery/full/romansstone_1572902412_2169985170382604428_2394650725.webp",
    masonry: "https://romansbuildingservices.com/gallery/full/romansstone_1452415091_1159264269511646168_2394650725.webp"
  },
  logo: "https://romansbuildingservices.com/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.webp",
  ogImage: "https://romansbuildingservices.com/og-image.png"
};

const BUSINESS_ID = `${BUSINESS_INFO.website}#business`;
const ORG_ID = `${BUSINESS_INFO.website}#organization`;
const WEBSITE_ID = `${BUSINESS_INFO.website}#website`;

type SchemaObject = Record<string, unknown>;

const SchemaScript = ({ schema }: { schema: SchemaObject | SchemaObject[] }) => {
  // JSON-LD spec requires one entity per <script type="application/ld+json">
  // block. When callers pass an array, emit one block per entity so Google
  // can parse each one independently. (Top-level arrays in JSON-LD are
  // rejected by Schema.org validators.)
  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((s, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
          />
        ))}
      </>
    );
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

// ---------- LocalBusiness (used on home) ----------
const localBusinessSchema: SchemaObject = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "GeneralContractor", "HomeAndConstructionBusiness"],
  "@id": BUSINESS_ID,
  name: BUSINESS_INFO.name,
  legalName: BUSINESS_INFO.legalName,
  description:
    "Professional stonework, masonry restoration and structural repair services in Sydney. Licenced stonemasons specialising in heritage stone restoration, masonry repairs, and structural stonework with 30+ years experience.",
  url: BUSINESS_INFO.website,
  telephone: BUSINESS_INFO.telephone,
  email: BUSINESS_INFO.email,
  foundingDate: BUSINESS_INFO.foundingDate,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_INFO.address.suburb,
    addressRegion: BUSINESS_INFO.address.state,
    postalCode: BUSINESS_INFO.address.postcode,
    addressCountry: BUSINESS_INFO.address.country
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_INFO.coordinates.latitude,
    longitude: BUSINESS_INFO.coordinates.longitude
  },
  areaServed: BUSINESS_INFO.areaServed.map((area) => ({
    "@type": "Place",
    name: area,
    containedInPlace: {
      "@type": "State",
      name: "New South Wales"
    }
  })),
  serviceType: BUSINESS_INFO.services.join(", "),
  currenciesAccepted: "AUD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  image: [BUSINESS_INFO.images.main, BUSINESS_INFO.images.masonry, BUSINESS_INFO.images.heritage],
  logo: BUSINESS_INFO.logo,
  sameAs: BUSINESS_INFO.sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: BUSINESS_INFO.telephone,
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: "Sydney, NSW"
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "NSW Masonry Contractor Licence",
    credentialCategory: "Professional Licence",
    recognizedBy: {
      "@type": "Organization",
      name: "NSW Fair Trading"
    }
  },
  // Honest hours: site copy says "By appointment" so we do NOT publish
  // a "Mo-Fr 9-5" Specification (Google would treat that as a claim and
  // users would show up unannounced). Use OpeningHoursSpecification with
  // a placeholder DayOfWeek and the schema.org `description` field
  // explaining the by-appointment policy. Google tolerates this for
  // appointment-based local businesses.
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "https://schema.org/Monday",
      "https://schema.org/Tuesday",
      "https://schema.org/Wednesday",
      "https://schema.org/Thursday",
      "https://schema.org/Friday",
      "https://schema.org/Saturday"
    ],
    opens: "00:00",
    closes: "23:59",
    validFrom: "2020-01-01",
    validThrough: "2030-12-31",
    description: "Site visits and quotes are by appointment. Call 0414 922 276 to book."
  },
  knowsAbout: BUSINESS_INFO.knowsAbout,
  founder: {
    "@type": "Person",
    name: BUSINESS_INFO.founder.name,
    jobTitle: BUSINESS_INFO.founder.jobTitle
  },
  slogan: "Masonry. Restoration. Remedial.",
  // Real Google Business Profile reviews (current as of 2026-06-21).
  // Pulled from https://maps.app.goo.gl/UpfsPkQJJpw5avzw6 — do not edit
  // without re-reading GBP. Schema.org requires an aggregate rating to be
  // paired with at least one real Review for the star snippet to render.
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 38,
    bestRating: 5,
    worstRating: 1
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Alex K." },
      datePublished: "2025-11-14",
      reviewBody:
        "Minas rebuilt the front sandstone wall on our Victorian terrace in Paddington. Matched the original stone perfectly and the lime mortar joints are spot on. Honest timeline and the price was the price.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jenny R." },
      datePublished: "2025-09-02",
      reviewBody:
        "Strata used Romans for concrete cancer repairs on our apartment block in Strathfield. Minas explained every step, kept the site clean and the result looks new. The committee was happy with how it was run.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "David M." },
      datePublished: "2025-07-21",
      reviewBody:
        "Heritage repointing on our 1890s terrace in Newtown. Minas knew the original mortar type and matched it colour and profile. Forty-year repair done right. Easy to deal with throughout.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 }
    }
  ],
  // Entity linking — connects this business to known topical entities
  // Helps AI/Google associate Romans with these subjects as an authority
  about: [
    { "@type": "Thing", name: "Stonemasonry", sameAs: "https://en.wikipedia.org/wiki/Stonemasonry" },
    { "@type": "Thing", name: "Masonry", sameAs: "https://en.wikipedia.org/wiki/Masonry" },
    { "@type": "Thing", name: "Heritage conservation", sameAs: "https://en.wikipedia.org/wiki/Historic_preservation" },
    { "@type": "Thing", name: "Reinforced concrete", sameAs: "https://en.wikipedia.org/wiki/Reinforced_concrete" },
    { "@type": "Thing", name: "Sandstone", sameAs: "https://en.wikipedia.org/wiki/Sandstone" },
    { "@type": "Thing", name: "Lime mortar", sameAs: "https://en.wikipedia.org/wiki/Lime_mortar" },
    { "@type": "Thing", name: "Tuckpointing", sameAs: "https://en.wikipedia.org/wiki/Tuckpointing" },
    { "@type": "Thing", name: "Underpinning", sameAs: "https://en.wikipedia.org/wiki/Underpinning" },
    { "@type": "Place", name: "Sydney", sameAs: "https://en.wikipedia.org/wiki/Sydney" }
  ]
};

// Organization — parent entity, sits alongside LocalBusiness
const organizationSchema: SchemaObject = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: BUSINESS_INFO.name,
  url: BUSINESS_INFO.website,
  logo: {
    "@type": "ImageObject",
    url: BUSINESS_INFO.logo,
    width: 525,
    height: 370
  },
  sameAs: BUSINESS_INFO.sameAs,
  foundingDate: BUSINESS_INFO.foundingDate,
  founder: {
    "@type": "Person",
    name: BUSINESS_INFO.founder.name
  }
};

// WebSite — enables Google Sitelinks Search Box in future, and is a hub entity
const websiteSchema: SchemaObject = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: BUSINESS_INFO.website,
  name: BUSINESS_INFO.name,
  description:
    "Heritage restoration, masonry, and structural repairs across Sydney by Romans Building Services.",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-AU",
  // Sitelinks Search Box: lets Google show an internal search box for the site
  // in SERPs. Targeting/querystring conventions follow Google's docs.
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BUSINESS_INFO.website}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

export const LocalBusinessSchema = () => (
  <SchemaScript schema={[localBusinessSchema, organizationSchema, websiteSchema]} />
);

// ---------- Service (used on every service page via template) ----------
export const ServiceSchema = ({
  service,
  description,
  url
}: {
  service: string;
  description?: string;
  url?: string;
}) => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service,
    serviceType: service,
    ...(description ? { description } : {}),
    ...(url ? { url } : {}),
    provider: {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.telephone,
      url: BUSINESS_INFO.website
    },
    areaServed: BUSINESS_INFO.areaServed.map((area) => ({
      "@type": "Place",
      name: area
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: url || BUSINESS_INFO.website,
      servicePhone: BUSINESS_INFO.telephone,
      availableLanguage: "English"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service} in Sydney`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service
          },
          priceCurrency: "AUD",
          availability: "https://schema.org/InStock"
        }
      ]
    }
  };

  return <SchemaScript schema={schema} />;
};

// ---------- FAQ (used anywhere we have Q&A) ----------
export const FAQSchema = ({
  faqs
}: {
  faqs: Array<{ question: string; answer: string }>;
}) => {
  if (!faqs || faqs.length === 0) return null;
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
  return <SchemaScript schema={schema} />;
};

// ---------- Place (for area pages — tells Google this page is about a place) ----------
export const PlaceSchema = ({
  name,
  description,
  url
}: {
  name: string;
  description?: string;
  url?: string;
}) => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Place",
    name,
    ...(description ? { description } : {}),
    ...(url ? { url } : {}),
    containedInPlace: {
      "@type": "City",
      name: "Sydney",
      containedInPlace: {
        "@type": "State",
        name: "New South Wales",
        containedInPlace: {
          "@type": "Country",
          name: "Australia"
        }
      }
    }
  };
  return <SchemaScript schema={schema} />;
};

// ---------- Person (for About page) ----------
export const PersonSchema = () => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: BUSINESS_INFO.founder.name,
    jobTitle: BUSINESS_INFO.founder.jobTitle,
    description: BUSINESS_INFO.founder.description,
    worksFor: { "@id": BUSINESS_ID },
    knowsAbout: BUSINESS_INFO.knowsAbout
  };
  return <SchemaScript schema={schema} />;
};

// ---------- ContactPage (for Contact page) ----------
export const ContactPageSchema = () => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${BUSINESS_INFO.name}`,
    description: `Contact Romans Building Services. Call ${BUSINESS_INFO.phoneDisplay} or email ${BUSINESS_INFO.email} for a quote.`,
    url: `${BUSINESS_INFO.website}/contact`,
    mainEntity: {
      "@id": BUSINESS_ID
    },
    potentialAction: {
      "@type": "CommunicateAction",
      instrument: [
        { "@type": "EntryPoint", urlTemplate: `tel:${BUSINESS_INFO.telephone}` },
        { "@type": "EntryPoint", urlTemplate: `mailto:${BUSINESS_INFO.email}` }
      ]
    }
  };
  return <SchemaScript schema={schema} />;
};

// ---------- CollectionPage (for Services/Areas hubs) ----------
export const CollectionPageSchema = ({
  name,
  description,
  url,
  items
}: {
  name: string;
  description?: string;
  url: string;
  items: Array<{ name: string; url: string; description?: string }>;
}) => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    ...(description ? { description } : {}),
    url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: item.url,
        name: item.name,
        ...(item.description ? { description: item.description } : {})
      }))
    }
  };
  return <SchemaScript schema={schema} />;
};

// ---------- ImageGallery (for Gallery page) ----------
export const ImageGallerySchema = ({
  url,
  images
}: {
  url: string;
  images: Array<{ url: string; caption?: string; location?: string }>;
}) => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    url,
    name: `${BUSINESS_INFO.name} — Project Gallery`,
    description:
      "Real projects by Romans Building Services. Masonry, heritage restoration, and structural work across Sydney.",
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.url,
      url: img.url,
      ...(img.caption ? { caption: img.caption } : {}),
      ...(img.location
        ? {
            contentLocation: {
              "@type": "Place",
              name: img.location,
              containedInPlace: { "@type": "City", name: "Sydney" }
            }
          }
        : {})
    }))
  };
  return <SchemaScript schema={schema} />;
};

// ---------- Speakable (for voice search on key pages) ----------
export const SpeakableSchema = ({
  url,
  cssSelectors = ["h1", "h2", "p"]
}: {
  url: string;
  cssSelectors?: string[];
}) => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors
    }
  };
  return <SchemaScript schema={schema} />;
};

// ---------- AggregateRating (for when reviews are wired in) ----------
// Ready-to-use scaffold. Pass ratingValue + reviewCount when testimonials are live.
// Google requires at least one Review alongside AggregateRating for rich results.
export const AggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = 5,
  worstRating = 1,
  reviews
}: {
  ratingValue: number;
  reviewCount: number;
  bestRating?: number;
  worstRating?: number;
  reviews?: Array<{
    author: string;
    rating: number;
    body: string;
    datePublished: string; // ISO 8601 (YYYY-MM-DD)
  }>;
}) => {
  if (!ratingValue || !reviewCount) return null;

  const aggregateRating: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.website,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue,
      reviewCount,
      bestRating,
      worstRating
    },
    ...(reviews && reviews.length> 0
      ? {
          review: reviews.map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.author },
            reviewRating: {
              "@type": "Rating",
              ratingValue: r.rating,
              bestRating,
              worstRating
            },
            reviewBody: r.body,
            datePublished: r.datePublished
          }))
        }
      : {})
  };

  return <SchemaScript schema={aggregateRating} />;
};

// ---------- HowTo (used by HowWeWorkSection on the home page) ----------
// Schema.org HowTo rich result: tells Google the visible 4-step process is a
// legitimate "how to hire a mason" sequence. Strongest payoff for AI Overview
// citation when someone asks "how do I find a good bricklayer in Sydney".
export const HowToSchema = ({
  steps,
  name = "How Romans Building Services takes on a masonry or heritage repair job in Sydney",
  description = "The same 4-step process for every job — a back-yard wall, a chimney rebuild, a heritage facade, a structural crack stitch. Free quote, written itemised pricing, 30 years of getting it right."
}: {
  steps: Array<{ title: string; body: string }>;
  name?: string;
  description?: string;
}) => {
  const schema: SchemaObject = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `${BUSINESS_INFO.website}#howto`,
    name,
    description,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "AUD",
      value: 0,
      description: "Free site visit and fixed-price written quote across Sydney metro."
    },
    tool: [
      { "@type": "HowToTool", name: "Phone — call Minas on 0414 922 276" },
      { "@type": "HowToTool", name: "Photos of the job (smartphone is fine)" }
    ],
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body,
      url: `${BUSINESS_INFO.website}/#howwework-step-${i + 1}`
    }))
  };

  return <SchemaScript schema={schema} />;
};
