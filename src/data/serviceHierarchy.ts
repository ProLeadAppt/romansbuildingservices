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
      { title: 'Structural Brickwork', slug: 'structural-brickwork', metaTitle: 'Structural Brickwork Sydney | Romans Building Services', metaDescription: 'Load-bearing brickwork construction and repairs. Structural brick walls, piers, and arches across Greater Sydney.' },
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
      { title: 'Heritage Masonry Restoration', slug: 'heritage-masonry', metaTitle: 'Heritage Masonry Restoration Sydney | Romans Building Services', metaDescription: 'Specialist heritage masonry restoration for listed buildings across Sydney. Period-correct methods and materials.' },
      { title: 'Heritage Stone Restoration', slug: 'heritage-stone', metaTitle: 'Heritage Stone Restoration Sydney | Romans Building Services', metaDescription: 'Sandstone and natural stone restoration for heritage buildings. Matching original finishes and techniques across Sydney.' },
      { title: 'Heritage Brick Repairs', slug: 'heritage-brick-repairs', metaTitle: 'Heritage Brick Repairs Sydney | Romans Building Services', metaDescription: 'Period-correct brick repairs for heritage buildings. Matching original bricks, mortar, and pointing styles across Sydney.' },
      { title: 'Traditional Stonework Methods', slug: 'traditional-stonework', metaTitle: 'Traditional Stonework Methods Sydney | Romans Building Services', metaDescription: 'Hand-cut stone, lime mortar, and traditional masonry techniques for heritage restoration across Sydney.' },
      { title: 'Period-Appropriate Materials', slug: 'period-materials', metaTitle: 'Period-Appropriate Materials Sourcing Sydney | Romans Building Services', metaDescription: 'Sourcing period-appropriate stone, brick, and mortar for heritage restoration projects across Sydney.' },
      { title: 'Historic Stuccos & Renders', slug: 'historic-stuccos-renders', metaTitle: 'Historic Stuccos & Renders Sydney | Romans Building Services', metaDescription: 'Lime render, historic stucco, and period-correct rendering for heritage buildings across Sydney.' },
    ],
  },
  {
    title: 'Structural Repairs',
    slug: 'structural-repairs',
    route: '/services/structural-repairs',
    metaTitle: 'Structural Repairs Sydney | Romans Building Services',
    metaDescription: 'Structural crack repair, lintel replacement, load-bearing wall repairs, and building reinforcement across Sydney. Licensed and insured.',
    subServices: [
      { title: 'Load-Bearing Wall Repairs', slug: 'load-bearing-walls', metaTitle: 'Load-Bearing Wall Repairs Sydney | Romans Building Services', metaDescription: 'Expert load-bearing wall repairs and reconstruction across Sydney. Structural assessments and engineered solutions.' },
      { title: 'Beam & Column Restoration', slug: 'beam-column-restoration', metaTitle: 'Beam & Column Restoration Sydney | Romans Building Services', metaDescription: 'Concrete and masonry beam and column restoration across Sydney. Structural reinforcement and repair.' },
      { title: 'Structural Crack Repair', slug: 'structural-crack-repair', metaTitle: 'Structural Crack Repair Sydney | Romans Building Services', metaDescription: 'Crack stitching, epoxy injection, and structural crack repair across Sydney. Diagnosing the cause and fixing it properly.' },
      { title: 'Building Reinforcement', slug: 'building-reinforcement', metaTitle: 'Building Reinforcement Sydney | Romans Building Services', metaDescription: 'Structural reinforcement for residential and commercial buildings across Sydney. Steel, carbon fibre, and masonry solutions.' },
      { title: 'Steel Structure Repairs', slug: 'steel-structure-repairs', metaTitle: 'Steel Structure Repairs Sydney | Romans Building Services', metaDescription: 'Steel beam, lintel, and structural steel repairs across Sydney. Rust treatment, replacement, and reinforcement.' },
    ],
  },
  {
    title: 'Building Restoration',
    slug: 'building-restoration',
    route: '/services/building-restoration',
    metaTitle: 'Building Restoration Sydney | Romans Building Services',
    metaDescription: 'Full building facade restoration, render replacement, and structural upgrades across Sydney. Bringing tired buildings back to life.',
    subServices: [
      { title: 'Complete Building Restoration', slug: 'complete-restoration', metaTitle: 'Complete Building Restoration Sydney | Romans Building Services', metaDescription: 'Full building restoration from facade to structure. Comprehensive restoration services across Greater Sydney.' },
      { title: 'Facade Renovation & Repair', slug: 'facade-renovation', metaTitle: 'Facade Renovation & Repair Sydney | Romans Building Services', metaDescription: 'Building facade renovation, repair, and restoration across Sydney. Brick, stone, render, and cladding.' },
      { title: 'Interior Restoration', slug: 'interior-restoration', metaTitle: 'Interior Restoration Sydney | Romans Building Services', metaDescription: 'Interior masonry and stonework restoration. Fireplaces, feature walls, and interior structural repairs across Sydney.' },
      { title: 'Historic Building Upgrades', slug: 'historic-upgrades', metaTitle: 'Historic Building Upgrades Sydney | Romans Building Services', metaDescription: 'Upgrading historic buildings to meet modern standards while preserving character. Structural and compliance upgrades across Sydney.' },
      { title: 'Building Defect Rectification', slug: 'defect-rectification', metaTitle: 'Building Defect Rectification Sydney | Romans Building Services', metaDescription: 'Identifying and rectifying building defects. Structural assessments and repair solutions across Sydney.' },
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
      { title: 'Spalling Concrete Repair', slug: 'spalling-repair', metaTitle: 'Spalling Concrete Repair Sydney | Romans Building Services', metaDescription: 'Spalling and delaminating concrete repairs across Sydney. Balconies, facades, carparks, and structural elements.' },
      { title: 'Structural Concrete Restoration', slug: 'structural-concrete', metaTitle: 'Structural Concrete Restoration Sydney | Romans Building Services', metaDescription: 'Structural concrete restoration for residential and commercial buildings across Sydney. Engineered repair solutions.' },
      { title: 'Concrete Resurfacing', slug: 'concrete-resurfacing', metaTitle: 'Concrete Resurfacing Sydney | Romans Building Services', metaDescription: 'Concrete resurfacing and overlay systems across Sydney. Restoring worn and damaged concrete surfaces.' },
      { title: 'Protective Stone Coatings', slug: 'protective-coatings', metaTitle: 'Protective Stone Coatings Sydney | Romans Building Services', metaDescription: 'Protective coatings for stone, brick, and concrete across Sydney. Anti-graffiti, water repellent, and UV protection.' },
    ],
  },
  {
    title: 'Foundation Repairs',
    slug: 'foundation-repairs',
    route: '/services/foundation-repairs',
    metaTitle: 'Foundation Repairs Sydney | Romans Building Services',
    metaDescription: 'Foundation underpinning, restumping, and structural foundation repairs across Sydney. The bit you cannot see but cannot ignore.',
    subServices: [
      { title: 'Foundation Underpinning', slug: 'underpinning', metaTitle: 'Foundation Underpinning Sydney | Romans Building Services', metaDescription: 'Professional foundation underpinning across Sydney. Stabilising foundations for residential and commercial buildings.' },
      { title: 'Structural Foundation Repairs', slug: 'structural-foundation', metaTitle: 'Structural Foundation Repairs Sydney | Romans Building Services', metaDescription: 'Structural foundation repairs across Sydney. Crack repair, reinforcement, and stabilisation.' },
      { title: 'Foundation Stone Repairs', slug: 'foundation-stone', metaTitle: 'Foundation Stone Repairs Sydney | Romans Building Services', metaDescription: 'Sandstone and brick foundation repairs across Sydney. Restoring original foundation stonework.' },
      { title: 'Pier & Beam Foundation Work', slug: 'pier-beam', metaTitle: 'Pier & Beam Foundation Work Sydney | Romans Building Services', metaDescription: 'Pier and beam foundation construction and repairs across Sydney. New installations and restumping.' },
      { title: 'Settlement Stabilisation', slug: 'settlement-stabilisation', metaTitle: 'Settlement Stabilisation Sydney | Romans Building Services', metaDescription: 'Building settlement stabilisation across Sydney. Stopping further movement and restoring structural integrity.' },
    ],
  },
  {
    title: 'Remedial Building',
    slug: 'remedial-building',
    route: '/services/remedial-building',
    metaTitle: 'Remedial Building Services Sydney | Romans Building Services',
    metaDescription: 'Structural assessments, remedial engineering, strata repairs, and building compliance work across Sydney.',
    subServices: [
      { title: 'Strata Building Repairs', slug: 'strata-repairs', metaTitle: 'Strata Building Repairs Sydney | Romans Building Services', metaDescription: 'Strata building repairs and maintenance across Sydney. Working with strata managers and owners corporations.' },
      { title: 'Structural Defect Repair', slug: 'structural-defect', metaTitle: 'Structural Defect Repair Sydney | Romans Building Services', metaDescription: 'Identifying and repairing structural defects in residential and commercial buildings across Sydney.' },
      { title: 'Building Compliance Upgrades', slug: 'compliance-upgrades', metaTitle: 'Building Compliance Upgrades Sydney | Romans Building Services', metaDescription: 'Bringing buildings up to current compliance standards across Sydney. Structural upgrades and remedial work.' },
      { title: 'Emergency Building Repairs', slug: 'emergency-repairs', metaTitle: 'Emergency Building Repairs Sydney | Romans Building Services', metaDescription: 'Urgent building repairs across Sydney. Storm damage, structural failures, and emergency stabilisation.' },
      { title: 'Emergency Structural Support', slug: 'emergency-structural', metaTitle: 'Emergency Structural Support Sydney | Romans Building Services', metaDescription: 'Emergency structural support and shoring across Sydney. Temporary and permanent stabilisation solutions.' },
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
