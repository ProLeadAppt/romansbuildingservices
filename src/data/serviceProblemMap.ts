// Maps each tier-1 service (by title) to the problems most relevant to it.
// Used to render "Problems we fix" blocks on service pages.

export const SERVICE_TO_PROBLEMS: Record<string, string[]> = {
  'Concrete Repairs': [
    'concrete-cancer',
    'spalling-render',
    'efflorescence-salt-damage',
  ],
  'Structural Repairs': [
    'cracked-brick-walls',
    'foundation-movement',
    'chimney-cracks',
  ],
  'Foundation Repairs': [
    'foundation-movement',
    'cracked-brick-walls',
  ],
  'Heritage Restoration': [
    'crumbling-mortar',
    'rising-damp',
    'efflorescence-salt-damage',
    'chimney-cracks',
  ],
  'Stone & Masonry': [
    'crumbling-mortar',
    'cracked-brick-walls',
    'failing-retaining-walls',
    'chimney-cracks',
  ],
  'Building Restoration': [
    'spalling-render',
    'crumbling-mortar',
    'rising-damp',
    'efflorescence-salt-damage',
  ],
  'Remedial Building': [
    'concrete-cancer',
    'foundation-movement',
    'cracked-brick-walls',
    'spalling-render',
  ],
};

// Services → suburbs where that service is particularly relevant
// (based on local building stock and common issues)
export const SERVICE_TO_SUBURBS: Record<string, string[]> = {
  'Concrete Repairs': [
    'bondi',
    'manly',
    'dee-why',
    'double-bay',
    'parramatta',
  ],
  'Structural Repairs': [
    'chatswood',
    'parramatta',
    'strathfield',
    'lane-cove',
  ],
  'Foundation Repairs': [
    'chatswood',
    'parramatta',
    'strathfield',
    'marrickville',
  ],
  'Heritage Restoration': [
    'paddington',
    'woollahra',
    'darlinghurst',
    'the-rocks',
    'balmain',
    'strathfield',
  ],
  'Stone & Masonry': [
    'paddington',
    'mosman',
    'woollahra',
    'double-bay',
    'balmain',
    'strathfield',
  ],
  'Building Restoration': [
    'paddington',
    'circular-quay',
    'manly',
    'strathfield',
  ],
  'Remedial Building': [
    'dee-why',
    'manly',
    'bondi',
    'parramatta',
  ],
};

// Problems → suburbs where this problem is commonly seen
export const PROBLEM_TO_SUBURBS: Record<string, string[]> = {
  'concrete-cancer': ['bondi', 'manly', 'dee-why', 'double-bay'],
  'cracked-brick-walls': ['chatswood', 'parramatta', 'marrickville', 'strathfield'],
  'failing-retaining-walls': ['avalon', 'mosman', 'woollahra', 'double-bay', 'lane-cove'],
  'rising-damp': ['the-rocks', 'paddington', 'balmain', 'newtown', 'darlinghurst'],
  'spalling-render': ['bondi', 'manly', 'dee-why', 'paddington'],
  'crumbling-mortar': ['paddington', 'newtown', 'leichhardt', 'balmain', 'darlinghurst'],
  'foundation-movement': ['chatswood', 'parramatta', 'marrickville', 'strathfield'],
  'chimney-cracks': ['mosman', 'woollahra', 'strathfield', 'neutral-bay'],
  'efflorescence-salt-damage': ['bondi', 'manly', 'dee-why', 'avalon'],
};
