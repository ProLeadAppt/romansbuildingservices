interface ImageInfo {
  url: string;
  caption?: string;
  title?: string;
  location?: string;
  geoLocation?: string;
  license?: string;
}

interface PageImages {
  pageUrl: string;
  images: ImageInfo[];
}

export const generateImageSitemap = (pagesWithImages: PageImages[]): string => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pagesWithImages.map(page => `
  <url>
    <loc>${page.pageUrl}</loc>
    ${page.images.map(image => `
    <image:image>
      <image:loc>${image.url}</image:loc>
      ${image.caption ? `<image:caption><![CDATA[${image.caption}]]></image:caption>` : ''}
      ${image.title ? `<image:title><![CDATA[${image.title}]]></image:title>` : ''}
      ${image.location ? `<image:geo_location>${image.location}</image:geo_location>` : ''}
      ${image.license ? `<image:license>${image.license}</image:license>` : ''}
    </image:image>`).join('')}
  </url>`).join('')}
</urlset>`;

  return sitemap;
};

// Image data for your website
export const siteImageData: PageImages[] = [
  {
    pageUrl: 'https://romansbuildingservices.com.au/',
    images: [
      {
        url: 'https://romansbuildingservices.com.au/images/sydney-masonry-contractor-minas-romanakis.webp',
        caption: 'Minas Romanakis, professional masonry contractor working on heritage building restoration in Sydney',
        title: 'Sydney Masonry Contractor - Romans Building Services',
        location: 'Sydney, NSW, Australia'
      },
      {
        url: 'https://romansbuildingservices.com.au/images/heritage-building-restoration-before-after-sydney.webp',
        caption: 'Before and after images of heritage building restoration project completed by Romans Building Services in Sydney',
        title: 'Heritage Building Restoration Sydney - Before and After',
        location: 'Sydney, NSW, Australia'
      },
      {
        url: 'https://romansbuildingservices.com.au/images/romans-building-services-team-sydney.webp',
        caption: 'Professional building restoration team from Romans Building Services working in Sydney',
        title: 'Professional Building Team Sydney',
        location: 'Sydney, NSW, Australia'
      }
    ]
  },
  {
    pageUrl: 'https://romansbuildingservices.com.au/services/masonry',
    images: [
      {
        url: 'https://romansbuildingservices.com.au/images/professional-masonry-work-sydney.webp',
        caption: 'Professional masonry and brickwork services in Sydney by qualified tradesman',
        title: 'Professional Masonry Services Sydney',
        location: 'Sydney, NSW, Australia'
      }
    ]
  },
  {
    pageUrl: 'https://romansbuildingservices.com.au/services/restoration',
    images: [
      {
        url: 'https://romansbuildingservices.com.au/images/building-restoration-showcase-sydney.webp',
        caption: 'Completed building restoration project showcasing expert craftsmanship in Sydney',
        title: 'Building Restoration Sydney Showcase',
        location: 'Sydney, NSW, Australia'
      }
    ]
  }
];

export const imageOptimizationConfig = {
  formats: {
    webp: {
      quality: 85,
      effort: 6
    },
    avif: {
      quality: 80,
      effort: 4
    },
    jpeg: {
      quality: 85,
      progressive: true
    }
  },
  
  breakpoints: [400, 800, 1200, 1600, 2000],
  
  // Critical images that should load first
  criticalImages: [
    'sydney-masonry-contractor-minas-romanakis',
    'sydney-building-restoration-hero-background'
  ],
  
  // SEO-optimized file naming convention
  namingConvention: {
    pattern: '{service}-{location}-{descriptor}-{width}w.{format}',
    examples: [
      'masonry-repair-sydney-heritage-building-800w.webp',
      'building-restoration-bondi-luxury-apartment-1200w.webp',
      'structural-repairs-cbd-commercial-property-1600w.webp'
    ]
  }
};