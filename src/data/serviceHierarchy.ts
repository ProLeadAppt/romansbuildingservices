export interface SubService {
  title: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  route: string;
  metaTitle: string;
  metaDescription: string;
  subServices: SubService[];
}

export const serviceHierarchy: ServiceCategory[] = [
  {
    title: 'Stonemasonry & Masonry',
    slug: 'masonry',
    route: '/services/masonry',
    metaTitle: 'Stone & Masonry Services Sydney | Romans Building Services',
    metaDescription: 'Professional stonemasonry, brick and block work, retaining walls, and repointing across Sydney. 30 years experience. Call Minas for a quote.',
    subServices: [
      { title: 'Brick & Block Work', slug: 'brick-block-work', metaTitle: 'Brick & Block Work Sydney | Romans Building Services', metaDescription: 'Expert brick and block construction, repairs, and restoration across Sydney. Residential and commercial. Licensed and insured.' },
      { title: 'Repointing & Brick Pointing', slug: 'repointing', metaTitle: 'Repointing & Brick Pointing Sydney | Romans Building Services', metaDescription: 'Professional repointing and brick pointing services across Sydney. Matching mortar colours for heritage and modern buildings.' },
      { title: 'Stone Masonry Repairs', slug: 'stone-masonry-repairs', metaTitle: 'Stone Masonry Repairs Sydney | Romans Building Services', metaDescription: 'Sandstone, limestone, and natural stone repairs across Sydney. Matching original materials and techniques. 30 years experience.' },
      { title: 'Structural Brickwork', slug: 'structural-brickwork', metaTitle: 'Structural Brickwork Sydney | Romans Building Services', metaDescription: 'Structural brickwork repairs across Sydney. Load-bearing walls, piers, arches and crack repairs assessed properly by Minas Romanakis.' },
      { title: 'Retaining Wall Construction', slug: 'retaining-walls', metaTitle: 'Retaining Wall Construction Sydney | Romans Building Services', metaDescription: 'Stone, brick, and block retaining wall construction across Sydney. Engineered designs for residential and commercial properties.' },
    ],
  },
  {
    title: 'Heritage Restoration',
    slug: 'heritage-restoration',
    route: '/services/heritage-restoration',
    metaTitle: 'Heritage Restoration Sydney | Romans Building Services',
    metaDescription: 'Heritage-listed building restoration across Sydney since 1995. Sandstone, convict brick, period details. Working with councils and heritage architects.',
    subServices: [
      { title: 'Heritage Masonry Restoration', slug: 'heritage-masonry', metaTitle: 'Heritage Masonry Sydney | Romans Building Services', metaDescription: 'Heritage masonry restoration across Sydney. Lime mortar, sandstone, brick matching and council-ready repair methods for period buildings.' },
      { title: 'Heritage Stone Restoration', slug: 'heritage-stone', metaTitle: 'Heritage Stone Restoration Sydney | Romans Building Services', metaDescription: 'Sandstone and natural stone restoration for heritage buildings. Matching original finishes and techniques across Sydney.' },
      { title: 'Heritage Brick Repairs', slug: 'heritage-brick-repairs', metaTitle: 'Heritage Brick Repairs Sydney | Romans Building Services', metaDescription: 'Period-correct brick repairs for heritage buildings. Matching original bricks, mortar, and pointing styles across Sydney.' },
      { title: 'Traditional Stonework Methods', slug: 'traditional-stonework', metaTitle: 'Traditional Stonework Sydney | Romans Building Services', metaDescription: 'Traditional Sydney stonework using hand-cut stone, lime mortar and heritage masonry methods for period homes, walls and facades.' },
      { title: 'Period-Appropriate Materials', slug: 'period-materials', metaTitle: 'Heritage Materials Sydney | Romans Building Services', metaDescription: 'Period-appropriate stone, brick and mortar sourcing for Sydney heritage restoration, with materials matched to building age and suburb.' },
      { title: 'Historic Stuccos & Renders', slug: 'historic-stuccos-renders', metaTitle: 'Historic Stuccos Sydney | Romans Building Services', metaDescription: 'Historic stucco and lime render repairs across Sydney. Breathable period-correct render systems for heritage walls and facades.' },
    ],
  },
  {
    title: 'Structural Repairs',
    slug: 'structural-repairs',
    route: '/services/structural-repairs',
    metaTitle: 'Structural Repairs Sydney | Romans Building Services',
    metaDescription: 'Structural crack repair, lintel replacement, load-bearing wall repairs, and building reinforcement across Sydney. Licensed and insured.',
    subServices: [
      { title: 'Load-Bearing Wall Repairs', slug: 'load-bearing-walls', metaTitle: 'Load-Bearing Wall Repairs Sydney | Romans', metaDescription: 'Load-bearing wall repairs and reconstruction across Sydney. Structural brick, masonry and support work assessed before repair begins.' },
      { title: 'Beam & Column Restoration', slug: 'beam-column-restoration', metaTitle: 'Beam & Column Repairs Sydney | Romans', metaDescription: 'Beam and column restoration across Sydney. Concrete, steel and masonry structural repairs for homes, strata and commercial buildings.' },
      { title: 'Structural Crack Repair', slug: 'structural-crack-repair', metaTitle: 'Structural Crack Repair Sydney | Romans Building Services', metaDescription: 'Crack stitching, epoxy injection, and structural crack repair across Sydney. Diagnosing the cause and fixing it properly.' },
      { title: 'Building Reinforcement', slug: 'building-reinforcement', metaTitle: 'Building Reinforcement Sydney | Romans Building Services', metaDescription: 'Structural reinforcement for residential and commercial buildings across Sydney. Steel, carbon fibre, and masonry solutions.' },
      { title: 'Steel Structure Repairs', slug: 'steel-structure-repairs', metaTitle: 'Steel Structure Repairs Sydney | Romans', metaDescription: 'Steel beam, lintel and structural steel repairs across Sydney. Rust treatment, replacement and reinforcement for masonry buildings.' },
    ],
  },
  {
    title: 'Building Restoration',
    slug: 'building-restoration',
    route: '/services/building-restoration',
    metaTitle: 'Building Restoration Sydney | Romans Building Services',
    metaDescription: 'Full building facade restoration, render replacement, and structural upgrades across Sydney. Bringing tired buildings back to life.',
    subServices: [
      { title: 'Complete Building Restoration', slug: 'complete-restoration', metaTitle: 'Building Restoration Sydney | Romans Building Services', metaDescription: 'Complete building restoration across Sydney, from facades and render to structural masonry, brick repairs and period detail.' },
      { title: 'Facade Renovation & Repair', slug: 'facade-renovation', metaTitle: 'Facade Renovation Sydney | Romans Building Services', metaDescription: 'Facade renovation and repair across Sydney. Brick, stone, render and masonry facade work for homes, strata and heritage buildings.' },
      { title: 'Interior Restoration', slug: 'interior-restoration', metaTitle: 'Interior Restoration Sydney | Romans Building Services', metaDescription: 'Interior masonry and stonework restoration across Sydney, including fireplaces, feature walls and internal structural repairs.' },
      { title: 'Historic Building Upgrades', slug: 'historic-upgrades', metaTitle: 'Historic Building Upgrades Sydney | Romans', metaDescription: 'Historic building upgrades across Sydney, with structural and compliance work that protects original masonry, stone and brick.' },
      { title: 'Building Defect Rectification', slug: 'defect-rectification', metaTitle: 'Building Defect Repairs Sydney | Romans', metaDescription: 'Building defect rectification across Sydney. Structural cracks, masonry failures, water damage and remedial repairs assessed properly.' },
    ],
  },
  {
    title: 'Concrete Repairs',
    slug: 'concrete-repairs',
    route: '/services/concrete-repairs',
    metaTitle: 'Concrete Repairs Sydney | Romans Building Services',
    metaDescription: 'Concrete cancer treatment, spalling repairs, and structural concrete restoration across Sydney. Diagnosing the problem and fixing it properly.',
    subServices: [
      { title: 'Concrete Cancer Treatment', slug: 'concrete-cancer', metaTitle: 'Concrete Cancer Treatment Sydney | Romans Building Services', metaDescription: 'Professional concrete cancer diagnosis and treatment across Sydney. Stopping corrosion and restoring structural integrity.' },
      { title: 'Spalling Concrete Repair', slug: 'spalling-repair', metaTitle: 'Spalling Concrete Repair Sydney | Romans', metaDescription: 'Spalling concrete repairs across Sydney. Balcony, facade, carpark and structural concrete repairs with steel treatment and coatings.' },
      { title: 'Structural Concrete Restoration', slug: 'structural-concrete', metaTitle: 'Structural Concrete Repairs Sydney | Romans', metaDescription: 'Structural concrete restoration across Sydney for homes, strata and commercial buildings with proper diagnosis and repair systems.' },
      { title: 'Concrete Resurfacing', slug: 'concrete-resurfacing', metaTitle: 'Concrete Resurfacing Sydney | Romans', metaDescription: 'Concrete resurfacing and overlay repairs across Sydney. Restoring worn, damaged and weathered concrete surfaces properly.' },
      { title: 'Protective Stone Coatings', slug: 'protective-coatings', metaTitle: 'Stone & Concrete Coatings Sydney | Romans', metaDescription: 'Protective coatings for stone, brick and concrete across Sydney, including breathable water repellent and anti-graffiti systems.' },
    ],
  },
  {
    title: 'Foundation Repairs',
    slug: 'foundation-repairs',
    route: '/services/foundation-repairs',
    metaTitle: 'Foundation Repairs Sydney | Romans Building Services',
    metaDescription: 'Foundation underpinning, restumping, and structural foundation repairs across Sydney. The bit you cannot see but cannot ignore.',
    subServices: [
      { title: 'Foundation Underpinning', slug: 'underpinning', metaTitle: 'Foundation Underpinning Sydney | Romans', metaDescription: 'Foundation underpinning across Sydney for homes and commercial buildings, with movement diagnosis before stabilisation work begins.' },
      { title: 'Structural Foundation Repairs', slug: 'structural-foundation', metaTitle: 'Foundation Repairs Sydney | Romans Building Services', metaDescription: 'Structural foundation repairs across Sydney, including crack repair, reinforcement, stabilisation and footing assessment.' },
      { title: 'Foundation Stone Repairs', slug: 'foundation-stone', metaTitle: 'Foundation Stone Repairs Sydney | Romans', metaDescription: 'Sandstone and brick foundation repairs across Sydney. Original foundation stonework restored with matched masonry methods.' },
      { title: 'Pier & Beam Foundation Work', slug: 'pier-beam', metaTitle: 'Pier & Beam Foundations Sydney | Romans', metaDescription: 'Pier and beam foundation construction and repairs across Sydney. New installations, restumping and support work for homes.' },
      { title: 'Settlement Stabilisation', slug: 'settlement-stabilisation', metaTitle: 'Settlement Stabilisation Sydney | Romans', metaDescription: 'Building settlement stabilisation across Sydney. Movement diagnosis, structural repair and foundation support to stop further damage.' },
    ],
  },
  {
    title: 'Remedial Building',
    slug: 'remedial-building',
    route: '/services/remedial-building',
    metaTitle: 'Remedial Building Services Sydney | Romans Building Services',
    metaDescription: 'Remedial building services across Sydney. Structural assessments, strata repairs and building compliance work for damaged masonry and concrete.',
    subServices: [
      { title: 'Strata Building Repairs', slug: 'strata-repairs', metaTitle: 'Strata Building Repairs Sydney | Romans', metaDescription: 'Strata building repairs across Sydney. Concrete cancer, masonry defects, facade damage and maintenance for owners corporations.' },
      { title: 'Structural Defect Repair', slug: 'structural-defect', metaTitle: 'Structural Defect Repairs Sydney | Romans', metaDescription: 'Structural defect repairs across Sydney for homes, strata and commercial buildings, with cause checked before the repair is scoped.' },
      { title: 'Building Compliance Upgrades', slug: 'compliance-upgrades', metaTitle: 'Compliance Upgrades Sydney | Romans Building Services', metaDescription: 'Building compliance upgrades across Sydney. Structural, masonry and remedial work for council, insurance and strata requirements.' },
      { title: 'Emergency Building Repairs', slug: 'emergency-repairs', metaTitle: 'Emergency Building Repairs Sydney | Romans', metaDescription: 'Urgent building repairs across Sydney. Storm damage, structural failures, masonry make-safe work and emergency stabilisation.' },
      { title: 'Emergency Structural Support', slug: 'emergency-structural', metaTitle: 'Emergency Structural Support Sydney | Romans', metaDescription: 'Emergency structural support and shoring across Sydney. Temporary stabilisation and permanent structural repair for damaged buildings.' },
    ],
  },
];

// Helper: get all sub-service routes for a category
export const getSubServiceRoutes = (categorySlug: string) => {
  const category = serviceHierarchy.find(c => c.slug === categorySlug);
  if (!category) return [];
  return category.subServices.map(sub => ({
    title: sub.title,
    href: `${category.route}/${sub.slug}`,
  }));
};

// Helper: get sibling services for a sub-service
export const getSiblingServices = (categorySlug: string, currentSubSlug: string) => {
  const category = serviceHierarchy.find(c => c.slug === categorySlug);
  if (!category) return [];
  return category.subServices
    .filter(sub => sub.slug !== currentSubSlug)
    .map(sub => ({
      title: sub.title,
      href: `${category.route}/${sub.slug}`,
    }));
};

// Helper: flat list of all services for sitemap
export const getAllServiceRoutes = () => {
  const routes: string[] = [];
  serviceHierarchy.forEach(cat => {
    routes.push(cat.route);
    cat.subServices.forEach(sub => {
      routes.push(`${cat.route}/${sub.slug}`);
    });
  });
  return routes;
};
