// Centralized project image data with proper categorization and SEO metadata
export interface ProjectImageData {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  location: string;
  date: string;
  category: 'masonry' | 'restoration' | 'structural' | 'heritage' | 'concrete' | 'general';
  beforeAfter?: 'before' | 'after';
  featured?: boolean;
  tags: string[];
  seoKeywords: string[];
}

// All project images with proper metadata (no stock photos)
export const projectImages: ProjectImageData[] = [
  {
    id: 'heritage-restoration-paddington-before',
    src: '/lovable-uploads/2020-06-04.png',
    alt: 'Heritage terrace house in Paddington Sydney before restoration showing weathered stonework and deteriorated masonry',
    title: 'Heritage Terrace Restoration - Before',
    description: 'Victorian terrace showing weathered stonework requiring restoration',
    location: 'Paddington, Sydney',
    date: '2020-06-04',
    category: 'heritage',
    beforeAfter: 'before',
    featured: true,
    tags: ['heritage restoration', 'Victorian terrace', 'stonework repair'],
    seoKeywords: ['heritage restoration Sydney', 'Victorian terrace repair', 'stonework restoration Paddington']
  },
  {
    id: 'heritage-restoration-paddington-after',
    src: '/lovable-uploads/2020-06-04 (1).png',
    alt: 'Restored heritage terrace house in Paddington Sydney showing beautiful renovated stonework and masonry',
    title: 'Heritage Terrace Restoration - After',
    description: 'Completed Victorian terrace restoration with beautiful renewed stonework',
    location: 'Paddington, Sydney',
    date: '2020-06-04',
    category: 'heritage',
    beforeAfter: 'after',
    featured: true,
    tags: ['heritage restoration', 'completed project', 'stonework restoration'],
    seoKeywords: ['heritage restoration Sydney', 'Victorian terrace restoration', 'completed stonework repair']
  },
  {
    id: 'stonework-repair-bondi-before',
    src: '/lovable-uploads/2020-08-12.png',
    alt: 'Damaged stonework and masonry before repair by Romans Building Services in Bondi Sydney',
    title: 'Stonework Repair - Before',
    description: 'Damaged stonework requiring professional restoration',
    location: 'Bondi, Sydney',
    date: '2020-08-12',
    category: 'masonry',
    beforeAfter: 'before',
    tags: ['stonework repair', 'masonry restoration', 'damaged stone'],
    seoKeywords: ['stonework repair Sydney', 'masonry restoration Bondi', 'stone repair specialist']
  },
  {
    id: 'masonry-work-progress',
    src: '/lovable-uploads/2020-08-27.png',
    alt: 'Professional masonry work in progress by Romans Building Services showing skilled craftsmanship',
    title: 'Professional Masonry Work',
    description: 'Skilled masonry work in progress showing attention to detail',
    location: 'Sydney',
    date: '2020-08-27',
    category: 'masonry',
    tags: ['professional masonry', 'skilled craftsmanship', 'work in progress'],
    seoKeywords: ['professional masonry Sydney', 'skilled mason', 'quality masonry work']
  },
  {
    id: 'restoration-project-completed',
    src: '/lovable-uploads/2020-09-01.png',
    alt: 'Completed restoration project by Romans Building Services showing excellent stonework and masonry finish',
    title: 'Completed Restoration Project',
    description: 'Beautifully completed restoration showing excellent craftsmanship',
    location: 'Inner West, Sydney',
    date: '2020-09-01',
    category: 'restoration',
    tags: ['completed restoration', 'excellent finish', 'quality work'],
    seoKeywords: ['building restoration Sydney', 'completed restoration project', 'quality stonework']
  },
  {
    id: 'detailed-stonework-restoration',
    src: '/lovable-uploads/2020-09-27.png',
    alt: 'Detailed stonework restoration by Romans Building Services showing intricate masonry craftsmanship',
    title: 'Detailed Stonework Restoration',
    description: 'Intricate stonework restoration requiring specialized skills',
    location: 'Eastern Suburbs, Sydney',
    date: '2020-09-27',
    category: 'restoration',
    featured: true,
    tags: ['detailed stonework', 'intricate restoration', 'specialized skills'],
    seoKeywords: ['detailed stonework restoration', 'intricate masonry repair', 'specialist stone restoration']
  },
  {
    id: 'commercial-facade-before',
    src: '/lovable-uploads/2020-10-13.png',
    alt: 'Commercial building facade before restoration by Romans Building Services in Sydney CBD',
    title: 'Commercial Facade - Before',
    description: 'Commercial building facade requiring professional restoration',
    location: 'Sydney CBD',
    date: '2020-10-13',
    category: 'structural',
    beforeAfter: 'before',
    tags: ['commercial facade', 'building restoration', 'Sydney CBD'],
    seoKeywords: ['commercial building restoration Sydney', 'facade repair CBD', 'commercial masonry Sydney']
  },
  {
    id: 'commercial-facade-completed',
    src: '/lovable-uploads/2020-11-02.png',
    alt: 'Restored commercial building facade by Romans Building Services showing professional finish in Sydney CBD',
    title: 'Commercial Facade - Completed',
    description: 'Professionally restored commercial facade with excellent finish',
    location: 'Sydney CBD',
    date: '2020-11-02',
    category: 'structural',
    beforeAfter: 'after',
    featured: true,
    tags: ['completed facade', 'commercial restoration', 'professional finish'],
    seoKeywords: ['completed commercial restoration', 'facade restoration Sydney CBD', 'professional building repair']
  },
  {
    id: 'retaining-wall-before',
    src: '/lovable-uploads/2020-11-22.png',
    alt: 'Steep slope area before retaining wall construction by Romans Building Services in North Shore Sydney',
    title: 'Retaining Wall Project - Before',
    description: 'Steep slope requiring professional retaining wall construction',
    location: 'North Shore, Sydney',
    date: '2020-11-22',
    category: 'structural',
    beforeAfter: 'before',
    tags: ['retaining wall', 'slope stabilization', 'structural work'],
    seoKeywords: ['retaining wall Sydney', 'slope stabilization', 'structural masonry North Shore']
  },
  {
    id: 'retaining-wall-progress',
    src: '/lovable-uploads/2020-11-22 (1).png',
    alt: 'Retaining wall construction in progress by Romans Building Services showing professional stonework',
    title: 'Retaining Wall Construction',
    description: 'Professional retaining wall construction in progress',
    location: 'North Shore, Sydney',
    date: '2020-11-22',
    category: 'structural',
    tags: ['construction progress', 'retaining wall', 'structural masonry'],
    seoKeywords: ['retaining wall construction', 'structural masonry Sydney', 'professional stonework']
  },
  {
    id: 'retaining-wall-completed',
    src: '/lovable-uploads/2020-11-30.png',
    alt: 'Completed retaining wall with landscaping by Romans Building Services in North Shore Sydney',
    title: 'Retaining Wall - Completed',
    description: 'Completed retaining wall with beautiful landscaping integration',
    location: 'North Shore, Sydney',
    date: '2020-11-30',
    category: 'structural',
    beforeAfter: 'after',
    featured: true,
    tags: ['completed retaining wall', 'landscaping integration', 'structural completion'],
    seoKeywords: ['completed retaining wall Sydney', 'landscaping integration', 'structural masonry North Shore']
  },
  {
    id: 'precision-stonework',
    src: '/lovable-uploads/2020-12-07.png',
    alt: 'Precision stonework and masonry by Romans Building Services showing expert craftsmanship',
    title: 'Precision Stonework',
    description: 'Expert stonework demonstrating precision and skill',
    location: 'Sydney',
    date: '2020-12-07',
    category: 'masonry',
    tags: ['precision stonework', 'expert craftsmanship', 'skilled masonry'],
    seoKeywords: ['precision stonework Sydney', 'expert mason', 'skilled stonework craftsman']
  },
  {
    id: 'heritage-building-restoration',
    src: '/lovable-uploads/2020-12-29.png',
    alt: 'Heritage building restoration project by Romans Building Services preserving historical architecture',
    title: 'Heritage Building Restoration',
    description: 'Careful heritage building restoration preserving historical character',
    location: 'Surry Hills, Sydney',
    date: '2020-12-29',
    category: 'heritage',
    featured: true,
    tags: ['heritage building', 'historical preservation', 'careful restoration'],
    seoKeywords: ['heritage building restoration Sydney', 'historical preservation', 'heritage masonry Surry Hills']
  },
  {
    id: 'foundation-repair-work',
    src: '/lovable-uploads/2021-01-07.png',
    alt: 'Foundation repair and structural work by Romans Building Services ensuring building stability',
    title: 'Foundation Repair Work',
    description: 'Professional foundation repair ensuring structural integrity',
    location: 'Balmain, Sydney',
    date: '2021-01-07',
    category: 'structural',
    tags: ['foundation repair', 'structural integrity', 'building stability'],
    seoKeywords: ['foundation repair Sydney', 'structural repair Balmain', 'building foundation specialist']
  },
  {
    id: 'craftsmanship-showcase',
    src: '/lovable-uploads/2021-10-09.jpg',
    alt: 'Showcase of exceptional craftsmanship by Romans Building Services demonstrating quality masonry work',
    title: 'Craftsmanship Showcase',
    description: 'Exceptional craftsmanship demonstrating quality and attention to detail',
    location: 'Sydney',
    date: '2021-10-09',
    category: 'masonry',
    featured: true,
    tags: ['exceptional craftsmanship', 'quality work', 'attention to detail'],
    seoKeywords: ['exceptional masonry craftsmanship', 'quality stonework Sydney', 'master craftsman']
  }
];

// Filter functions for easy data access
export const getFeaturedImages = () => projectImages.filter(img => img.featured);
export const getImagesByCategory = (category: string) => projectImages.filter(img => img.category === category);
export const getBeforeAfterPairs = () => {
  const pairs: Array<{ before: ProjectImageData; after: ProjectImageData }> = [];
  const beforeImages = projectImages.filter(img => img.beforeAfter === 'before');
  
  beforeImages.forEach(beforeImg => {
    const afterImg = projectImages.find(img => 
      img.beforeAfter === 'after' && 
      img.location === beforeImg.location &&
      img.category === beforeImg.category
    );
    if (afterImg) {
      pairs.push({ before: beforeImg, after: afterImg });
    }
  });
  
  return pairs;
};

// Minas working photo (hero background)
export const minasWorkingPhoto = {
  id: 'minas-working',
  src: '/lovable-uploads/fca9df0e-1672-43ed-a1a0-4d254b541a48.png',
  alt: 'Minas Romanakis, owner of Romans Building Services, working on professional stonework and masonry in Sydney',
  title: 'Minas at Work',
  description: 'Professional stonework and masonry craftsmanship by Minas Romanakis',
  location: 'Sydney',
  category: 'general' as const,
  tags: ['professional craftsmanship', 'Minas Romanakis', 'quality work'],
  seoKeywords: ['Minas Romanakis mason', 'professional stonework Sydney', 'Romans Building Services owner']
};

// Company logo
export const companyLogo = {
  id: 'romans-logo',
  src: '/lovable-uploads/03e057ec-f76b-425e-99fd-289e0c734fa3.png',
  alt: 'Romans Building Services logo - Sydney masonry and building restoration specialists',
  title: 'Romans Building Services',
  description: 'Professional masonry and building restoration specialists serving Sydney',
  seoKeywords: ['Romans Building Services', 'Sydney masonry specialist', 'building restoration Sydney']
};