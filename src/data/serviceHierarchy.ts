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
    metaTitle: 'Sydney Masonry & Stone Services | Romans',
    metaDescription: 'Brick, stone, block and repointing work across Sydney for homes, strata and commercial sites by Minas Romanakis. Repairs, rebuilding and new masonry.',
    subServices: [
      { title: 'Brick & Block Work', slug: 'brick-block-work', metaTitle: 'Brick & Block Work Sydney | Romans Building Services', metaDescription: 'Sydney brick and block construction, repairs and restoration for residential and commercial properties. Discuss your project with Minas.' },
      { title: 'Repointing & Brick Pointing', slug: 'repointing', metaTitle: 'Repointing & Brick Pointing Sydney | Romans Building Services', metaDescription: 'Repointing and tuckpointing across Sydney. Mortar repairs with compatible materials, colour and joint profiles for older and modern masonry.' },
      { title: 'Stone Masonry Repairs', slug: 'stone-masonry-repairs', metaTitle: 'Stone Masonry Repairs Sydney | Romans Building Services', metaDescription: 'Sydney sandstone, limestone and natural stone repairs with material assessment and compatible repair methods. 30 years experience.' },
      { title: 'Structural Brickwork', slug: 'structural-brickwork', metaTitle: 'Structural Brickwork Sydney | Romans Building Services', metaDescription: 'Structural brickwork repairs across Sydney, including walls, piers, arches and lintels. Building work to an agreed scope with engineer input where required.' },
      { title: 'Retaining Wall Construction', slug: 'retaining-walls', metaTitle: 'Retaining Wall Construction Sydney | Romans Building Services', metaDescription: 'Retaining wall construction and repairs across Sydney in sandstone, brick, block and concrete. Site-specific scope, drainage and engineering requirements.' },
    ],
  },
  {
    title: 'Heritage Restoration',
    slug: 'heritage-restoration',
    route: '/services/heritage-restoration',
    metaTitle: 'Sydney Heritage Restoration | Romans',
    metaDescription: 'Heritage masonry, sandstone, brick and lime mortar restoration across Sydney by Minas Romanakis, using period-correct methods that suit the building.',
    subServices: [
      { title: 'Heritage Masonry Restoration', slug: 'heritage-masonry', metaTitle: 'Heritage Masonry Sydney | Romans Building Services', metaDescription: 'Sydney heritage masonry restoration enquiries. Compatible repairs, retained original fabric, material samples and conservation planning.' },
      { title: 'Heritage Stone Restoration', slug: 'heritage-stone', metaTitle: 'Heritage Stone Restoration Sydney | Romans Building Services', metaDescription: 'Sydney heritage stone restoration enquiries. Condition surveys, cleaning trials, local stone repairs and compatible replacements.' },
      { title: 'Heritage Brick Repairs', slug: 'heritage-brick-repairs', metaTitle: 'Heritage Brick Repairs Sydney | Romans Building Services', metaDescription: 'Sydney heritage brick repair enquiries. Compatible brick and mortar, careful retention and matching for older masonry.' },
      { title: 'Traditional Stonework Methods', slug: 'traditional-stonework', metaTitle: 'Traditional Stonework Sydney | Romans Building Services', metaDescription: 'Sydney traditional stonework enquiries. Hand tooling, carved profiles and compatible mortar choices for assessed heritage repairs.' },
      { title: 'Period-Appropriate Materials', slug: 'period-materials', metaTitle: 'Heritage Materials Sydney | Romans Building Services', metaDescription: 'Sydney period-material enquiries. Assessing compatible brick, stone, mortar and fittings for heritage repair scopes.' },
      { title: 'Historic Stuccos & Renders', slug: 'historic-stuccos-renders', metaTitle: 'Historic Stuccos Sydney | Romans Building Services', metaDescription: 'Sydney historic render and stucco repair enquiries. Compatible finishes, retained plasterwork, sample areas and decorative profile repairs.' },
    ],
  },
  {
    title: 'Structural Repairs',
    slug: 'structural-repairs',
    route: '/services/structural-repairs',
    metaTitle: 'Sydney Structural Repairs | Romans',
    metaDescription: 'Sydney structural repairs by Minas Romanakis. Crack stitching, lintel replacement, load-bearing wall repairs and structural reinforcement done properly.',
    subServices: [
      { title: 'Load-Bearing Wall Repairs', slug: 'load-bearing-walls', metaTitle: 'Load-Bearing Wall Repairs Sydney | Romans', metaDescription: 'Sydney load-bearing wall repair enquiries. Structural assessment, temporary support, masonry repair and engineered rebuilding scopes.' },
      { title: 'Beam & Column Restoration', slug: 'beam-column-restoration', metaTitle: 'Beam & Column Repairs Sydney | Romans', metaDescription: 'Sydney beam and column repair enquiries. Assessment-led concrete, steel and masonry repair planning with structural design and safe support.' },
      { title: 'Structural Crack Repair', slug: 'structural-crack-repair', metaTitle: 'Structural Crack Repair Sydney | Romans Building Services', metaDescription: 'Sydney structural crack repair enquiries. Investigating movement and choosing suitable masonry stitching, concrete repair or rebuilding methods.' },
      { title: 'Building Reinforcement', slug: 'building-reinforcement', metaTitle: 'Building Reinforcement Sydney | Romans Building Services', metaDescription: 'Sydney building reinforcement enquiries. Assessing additional loads and planning engineered steel, masonry, concrete and foundation strengthening.' },
      { title: 'Steel Structure Repairs', slug: 'steel-structure-repairs', metaTitle: 'Steel Structure Repairs Sydney | Romans', metaDescription: 'Sydney steel and lintel repair enquiries. Corrosion assessment, designed replacement or repair, masonry reinstatement and protective detailing.' },
    ],
  },
  {
    title: 'Building Restoration',
    slug: 'building-restoration',
    route: '/services/building-restoration',
    metaTitle: 'Sydney Building Restoration | Romans',
    metaDescription: 'Facade repairs, render replacement, structural upgrades and full restorations across Sydney by Minas Romanakis. Fix the cause, restore the finish.',
    subServices: [
      { title: 'Complete Building Restoration', slug: 'complete-restoration', metaTitle: 'Sydney Building Restoration | Romans', metaDescription: 'Sydney building restoration enquiries. Coordinating masonry, facade and structural repairs with a clear scope, access plan and staged inspections.' },
      { title: 'Facade Renovation & Repair', slug: 'facade-renovation', metaTitle: 'Facade Renovation Sydney | Romans Building Services', metaDescription: 'Sydney facade repair enquiries. Brick, stone, render and architectural details, with material matching, safe access and assessed repair methods.' },
      { title: 'Interior Restoration', slug: 'interior-restoration', metaTitle: 'Interior Restoration Sydney | Romans Building Services', metaDescription: 'Sydney interior masonry restoration enquiries. Fireplaces, exposed brick and stone features with material assessment and a planned protection scope.' },
      { title: 'Historic Building Upgrades', slug: 'historic-upgrades', metaTitle: 'Historic Building Upgrades Sydney | Romans', metaDescription: 'Sydney historic building upgrade enquiries. Coordinating structural repair, conservation advice and project-specific compliance requirements.' },
      { title: 'Building Defect Rectification', slug: 'defect-rectification', metaTitle: 'Building Defect Repairs Sydney | Romans', metaDescription: 'Sydney building defect rectification enquiries. Clear repair scopes, investigation of causes, staged inspections and records for owners and strata.' },
    ],
  },
  {
    title: 'Concrete Repairs',
    slug: 'concrete-repairs',
    route: '/services/concrete-repairs',
    metaTitle: 'Sydney Concrete Repairs | Romans',
    metaDescription: 'Concrete repairs for Sydney buildings. Learn about spalling, corrosion warning signs and the need for a project-specific assessment and repair scope.',
    subServices: [
      { title: 'Concrete Cancer Treatment', slug: 'concrete-cancer', metaTitle: 'Concrete Cancer Treatment Sydney | Romans Building Services', metaDescription: 'Sydney concrete cancer repair enquiries. Corrosion investigation, reinforcement assessment and designed concrete repairs with maintenance planning.' },
      { title: 'Spalling Concrete Repair', slug: 'spalling-repair', metaTitle: 'Spalling Concrete Repair Sydney | Romans', metaDescription: 'Sydney spalling concrete repair enquiries. Falling-material precautions, assessment of the cause, repair planning and safe access arrangements.' },
      { title: 'Structural Concrete Restoration', slug: 'structural-concrete', metaTitle: 'Structural Concrete Repairs Sydney | Romans', metaDescription: 'Sydney structural concrete repair enquiries. Engineer-defined beam, column and slab repairs, strengthening options and inspection planning.' },
      { title: 'Concrete Resurfacing', slug: 'concrete-resurfacing', metaTitle: 'Concrete Resurfacing Sydney | Romans', metaDescription: 'Sydney concrete resurfacing enquiries. Substrate assessment, overlay selection, texture and drainage considerations for existing concrete surfaces.' },
      { title: 'Protective Stone Coatings', slug: 'protective-coatings', metaTitle: 'Stone & Concrete Coatings Sydney | Romans', metaDescription: 'Sydney protective coating enquiries for masonry and concrete. Substrate compatibility, moisture assessment, trial areas and maintenance requirements.' },
    ],
  },
  {
    title: 'Foundation Repairs',
    slug: 'foundation-repairs',
    route: '/services/foundation-repairs',
    metaTitle: 'Sydney Foundation Repairs | Romans',
    metaDescription: 'Underpinning, restumping, settlement stabilisation and foundation crack repairs across Sydney by Minas Romanakis. Project-specific repair scopes.',
    subServices: [
      { title: 'Foundation Underpinning', slug: 'underpinning', metaTitle: 'Foundation Underpinning Sydney | Romans', metaDescription: 'Sydney foundation underpinning enquiries. Assessment-led repair planning, engineering, access considerations and property-specific approvals.' },
      { title: 'Structural Foundation Repairs', slug: 'structural-foundation', metaTitle: 'Sydney Foundation Repairs | Romans', metaDescription: 'Sydney structural foundation repair enquiries. Investigating footing defects, selecting repairs and planning safe access, design and approvals.' },
      { title: 'Foundation Stone Repairs', slug: 'foundation-stone', metaTitle: 'Foundation Stone Repairs Sydney | Romans', metaDescription: 'Sydney stone and brick foundation repair enquiries. Compatible materials, moisture investigation and assessment-led heritage repair planning.' },
      { title: 'Pier & Beam Foundation Work', slug: 'pier-beam', metaTitle: 'Pier & Beam Foundations Sydney | Romans', metaDescription: 'Sydney pier and beam repair enquiries. Subfloor assessment, support repairs, timber selection and carefully planned floor reinstatement.' },
      { title: 'Settlement Stabilisation', slug: 'settlement-stabilisation', metaTitle: 'Settlement Stabilisation Sydney | Romans', metaDescription: 'Sydney settlement investigation and repair enquiries. Movement assessment, ground and drainage considerations, and engineer-led stabilisation planning.' },
    ],
  },
  {
    title: 'Remedial Building',
    slug: 'remedial-building',
    route: '/services/remedial-building',
    metaTitle: 'Sydney Remedial Building | Romans',
    metaDescription: 'Strata defects, compliance upgrades, emergency make-safe work and remedial repairs across Sydney by Minas Romanakis. Defined scopes with relevant engineer or consultant input.',
    subServices: [
      { title: 'Strata Building Repairs', slug: 'strata-repairs', metaTitle: 'Strata Building Repairs Sydney | Romans', metaDescription: 'Sydney strata building repair enquiries. Clear scopes, access planning, resident communication and documentation for masonry and concrete repairs.' },
      { title: 'Structural Defect Repair', slug: 'structural-defect', metaTitle: 'Structural Defect Repairs Sydney | Romans', metaDescription: 'Sydney structural defect repair enquiries. Engineer-defined repair scopes, safe access, documentation and coordination of required specialist work.' },
      { title: 'Building Compliance Upgrades', slug: 'compliance-upgrades', metaTitle: 'Compliance Upgrades Sydney | Romans Building Services', metaDescription: 'Sydney building upgrade enquiries. Defined compliance scopes, specialist design, approvals and documented construction work for existing buildings.' },
      { title: 'Emergency Building Repairs', slug: 'emergency-repairs', metaTitle: 'Emergency Building Repairs Sydney | Romans', metaDescription: 'Sydney emergency building repair enquiries. Safety precautions, assessment, temporary works and permanent repair planning, subject to availability.' },
      { title: 'Emergency Structural Support', slug: 'emergency-structural', metaTitle: 'Emergency Structural Support Sydney | Romans', metaDescription: 'Sydney structural support enquiries. Understand engineer-designed temporary works, safe access, monitoring and permanent repair planning.' },
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
