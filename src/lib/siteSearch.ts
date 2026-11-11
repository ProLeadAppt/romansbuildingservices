export type SearchResult = {
  type: 'service' | 'suburb' | 'area' | 'advice';
  title: string;
  description: string;
  href: string;
  meta?: string;
  keywords?: string[];
};

export const normalizeSearchQuery = (value: string) => value
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

export const searchSite = (entries: SearchResult[], query: string, limit = 40) => {
  const normalized = normalizeSearchQuery(query);
  if (normalized.length < 2) return { results: [], total: 0 };
  const terms = normalized.split(/\s+/);
  const seen = new Set<string>();
  const matches = entries.flatMap((entry) => {
    const title = normalizeSearchQuery(entry.title);
    const keywords = normalizeSearchQuery((entry.keywords ?? []).join(' '));
    const haystack = normalizeSearchQuery(`${entry.title} ${entry.description} ${entry.meta ?? ''} ${keywords}`);
    const identity = entry.href.replace(/\/$/, '');
    if (!terms.every((term) => haystack.includes(term)) || seen.has(identity)) return [];
    seen.add(identity);
    const score = title === normalized ? 4 : title.includes(normalized) ? 3 : keywords.includes(normalized) ? 2 : 1;
    return [{ entry, score }];
  }).sort((a, b) => b.score - a.score);
  return { results: matches.slice(0, Math.max(0, limit)).map(({ entry }) => entry), total: matches.length };
};
