import { serviceCategories, serviceAreas } from './navigationData';

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export const generateSitemapEntries = (): SitemapEntry[] => {
  const baseUrl = 'https://romansbuildingservices.com.au';
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

  const entries: SitemapEntry[] = [
    // Homepage - highest priority
    {
      url: `${baseUrl}/`,
      lastmod,
      changefreq: 'weekly',
      priority: 1.0
    },
    
    // Main navigation pages
    {
      url: `${baseUrl}/about`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/contact`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.6
    },
    {
      url: `${baseUrl}/services`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.9
    },
    {
      url: `${baseUrl}/projects`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/quote`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    },
    {
      url: `${baseUrl}/assessment`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.7
    },
    {
      url: `${baseUrl}/emergency`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    },
    
    // Service areas
    {
      url: `${baseUrl}/areas`,
      lastmod,
      changefreq: 'weekly',
      priority: 0.8
    },
    
    // Legal pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastmod,
      changefreq: 'yearly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastmod,
      changefreq: 'yearly',
      priority: 0.3
    },
    
    // Utility pages
    {
      url: `${baseUrl}/thank-you`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/search`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.4
    },
    {
      url: `${baseUrl}/sitemap`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.4
    }
  ];

  // Add all service pages
  serviceCategories.forEach(category => {
    category.services.forEach(service => {
      entries.push({
        url: `${baseUrl}${service.href}`,
        lastmod,
        changefreq: 'monthly',
        priority: 0.7
      });
    });
  });

  // Add all service area pages
  serviceAreas.forEach(area => {
    entries.push({
      url: `${baseUrl}${area.href}`,
      lastmod,
      changefreq: 'monthly',
      priority: 0.8
    });
  });

  return entries.sort((a, b) => b.priority - a.priority);
};

export const generateXMLSitemap = (entries: SitemapEntry[]): string => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>';
  const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const urlsetClose = '</urlset>';

  const urls = entries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('');

  return `${xmlHeader}\n${urlsetOpen}${urls}\n${urlsetClose}`;
};

export const seoMetadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: null, // Add Google Search Console verification ID when available
    bing: null,   // Add Bing verification ID when available
  }
};

export const generateRobotsTxt = (): string => {
  const baseUrl = 'https://romansbuildingservices.com.au';
  
  return `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
Sitemap: ${baseUrl}/sitemap-images.xml

# Host (optional but recommended)
Host: ${baseUrl}`;
};