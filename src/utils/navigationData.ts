export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: any;
  badge?: string;
  children?: NavigationItem[];
}

export interface ServiceCategory {
  id: string;
  label: string;
  description: string;
  icon: any;
  services: NavigationItem[];
}

export interface ServiceArea {
  id: string;
  label: string;
  description: string;
  suburbs: string[];
  href: string;
}

// Main navigation structure
export const mainNavigation: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/'
  },
  {
    id: 'services',
    label: 'Services',
    href: '/services',
    children: [] // Will be populated from serviceCategories
  },
  {
    id: 'areas',
    label: 'Service Areas',
    href: '/areas',
    children: [] // Will be populated from serviceAreas
  },
  {
    id: 'about',
    label: 'About',
    href: '/about'
  },
  {
    id: 'projects',
    label: 'Projects',
    href: '/projects'
  },
  {
    id: 'contact',
    label: 'Contact',
    href: '/contact'
  }
];

// Service categories with logical grouping
export const serviceCategories: ServiceCategory[] = [
  {
    id: 'structural',
    label: 'Structural Work',
    description: 'Foundation and structural integrity services',
    icon: 'Building',
    services: [
      {
        id: 'masonry',
        label: 'Masonry & Brickwork',
        href: '/services/masonry',
        description: 'Expert brick repairs and masonry restoration'
      },
      {
        id: 'foundation',
        label: 'Foundation Repairs',
        href: '/services/foundation-repairs',
        description: 'Structural foundation and underpinning work'
      },
      {
        id: 'structural-repairs',
        label: 'Structural Repairs',
        href: '/services/structural-repairs',
        description: 'Comprehensive structural problem solving'
      }
    ]
  },
  {
    id: 'restoration',
    label: 'Restoration Services',
    description: 'Heritage and building restoration expertise',
    icon: 'Hammer',
    services: [
      {
        id: 'heritage',
        label: 'Heritage Restoration',
        href: '/services/heritage-restoration',
        description: 'Specialized heritage building conservation',
        badge: 'Heritage Certified'
      },
      {
        id: 'building-restoration',
        label: 'Building Restoration',
        href: '/services/building-restoration',
        description: 'Complete building renewal and restoration'
      },
      {
        id: 'concrete-repairs',
        label: 'Concrete Repairs',
        href: '/services/concrete-repairs',
        description: 'Concrete cancer and spalling repairs'
      }
    ]
  },
  {
    id: 'protection',
    label: 'Protection & Prevention',
    description: 'Waterproofing and preventive building care',
    icon: 'Shield',
    services: [
      {
        id: 'waterproofing',
        label: 'Waterproofing',
        href: '/services/waterproofing',
        description: 'Advanced waterproofing and leak prevention'
      },
      {
        id: 'remedial',
        label: 'Remedial Building',
        href: '/services/remedial-building',
        description: 'Building defect rectification and remedial work'
      },
      {
        id: 'inspections',
        label: 'Building Inspections',
        href: '/services/inspections',
        description: 'Professional building assessments and reports'
      }
    ]
  }
];

// Service areas with geographic logic
export const serviceAreas: ServiceArea[] = [
  {
    id: 'inner-sydney',
    label: 'Inner Sydney',
    description: 'CBD and inner-city building services',
    suburbs: ['Sydney CBD', 'Surry Hills', 'Paddington', 'Darlinghurst', 'Potts Point'],
    href: '/areas/inner-sydney'
  },
  {
    id: 'eastern-suburbs',
    label: 'Eastern Suburbs',
    description: 'Premium residential building services',
    suburbs: ['Bondi', 'Double Bay', 'Woollahra', 'Rose Bay', 'Vaucluse'],
    href: '/areas/eastern-suburbs'
  },
  {
    id: 'north-shore',
    label: 'North Shore',
    description: 'Lower and upper north shore services',
    suburbs: ['Chatswood', 'Mosman', 'Lane Cove', 'Willoughby', 'St Leonards'],
    href: '/areas/north-shore'
  },
  {
    id: 'northern-beaches',
    label: 'Northern Beaches',
    description: 'Coastal building and restoration services',
    suburbs: ['Manly', 'Dee Why', 'Avalon', 'Mona Vale', 'Collaroy'],
    href: '/areas/northern-beaches'
  },
  {
    id: 'inner-west',
    label: 'Inner West',
    description: 'Heritage and modern building services',
    suburbs: ['Newtown', 'Leichhardt', 'Balmain', 'Rozelle', 'Glebe'],
    href: '/areas/inner-west'
  },
  {
    id: 'greater-sydney',
    label: 'Greater Sydney',
    description: 'Extended Sydney metropolitan services',
    suburbs: ['Parramatta', 'Hornsby', 'Sutherland', 'Blacktown', 'Liverpool'],
    href: '/areas/greater-sydney'
  }
];

// Urgent services - priority response
export const emergencyServices = {
  phone: '0414 922 276',
  label: 'Urgent Repairs',
  description: 'Same-day structural repair response',
  href: '/emergency'
};

// Quick actions for improved UX
export const quickActions = [
  {
    id: 'quote',
    label: 'Get Free Quote',
    href: '/quote',
    primary: true
  },
  {
    id: 'assessment',
    label: 'Book Assessment',
    href: '/assessment'
  },
  {
    id: 'urgent',
    label: 'Urgent Help',
    href: '/emergency',
    urgent: true
  }
];

// Popular searches for autocomplete
export const popularSearches = [
  'Brick repair Sydney',
  'Waterproofing',
  'Heritage restoration',
  'Structural assessment',
  'Concrete cancer',
  'Foundation repairs',
  'Building inspection',
  'Urgent repairs'
];

// Utility functions
export const getServiceBySlug = (slug: string): NavigationItem | null => {
  for (const category of serviceCategories) {
    const service = category.services.find(s => s.href.includes(slug));
    if (service) return service;
  }
  return null;
};

export const getAreaBySlug = (slug: string): ServiceArea | null => {
  return serviceAreas.find(area => area.href.includes(slug)) || null;
};

export const getCategoryByServiceId = (serviceId: string): ServiceCategory | null => {
  return serviceCategories.find(cat => 
    cat.services.some(service => service.id === serviceId)
  ) || null;
};

export const generateBreadcrumbs = (pathname: string): NavigationItem[] => {
  const breadcrumbs: NavigationItem[] = [
    { id: 'home', label: 'Home', href: '/' }
  ];

  if (pathname.startsWith('/services/')) {
    breadcrumbs.push({ id: 'services', label: 'Services', href: '/services' });
    const slug = pathname.replace('/services/', '');
    const service = getServiceBySlug(slug);
    if (service) {
      const category = getCategoryByServiceId(service.id);
      if (category) {
        breadcrumbs.push({
          id: category.id,
          label: category.label,
          href: `/services#${category.id}`
        });
      }
      breadcrumbs.push(service);
    }
  } else if (pathname.startsWith('/areas/')) {
    breadcrumbs.push({ id: 'areas', label: 'Service Areas', href: '/areas' });
    const slug = pathname.replace('/areas/', '');
    const area = getAreaBySlug(slug);
    if (area) {
      breadcrumbs.push({ id: area.id, label: area.label, href: area.href });
    }
  } else if (pathname !== '/') {
    const segments = pathname.split('/').filter(Boolean);
    segments.forEach(segment => {
      breadcrumbs.push({
        id: segment,
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        href: `/${segment}`
      });
    });
  }

  return breadcrumbs;
};