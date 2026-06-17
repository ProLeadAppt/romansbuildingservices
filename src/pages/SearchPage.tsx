import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Search as SearchIcon, MapPin, Hammer } from 'lucide-react';
import { serviceHierarchy } from '@/data/serviceHierarchy';
import { getAllSuburbs } from '@/data/suburbs';
import { AREAS } from '@/data/areas';

type Result = {
  type: 'service' | 'suburb' | 'area';
  title: string;
  description: string;
  href: string;
  meta?: string;
};

const flattenServices = (): Result[] => {
  const out: Result[] = [];
  for (const cat of serviceHierarchy) {
    out.push({
      type: 'service',
      title: cat.title,
      description: cat.metaDescription,
      href: cat.route,
      meta: 'Service'
    });
    for (const sub of cat.subServices) {
      out.push({
        type: 'service',
        title: sub.title,
        description: sub.metaDescription,
        href: `${cat.route}/${sub.slug}`,
        meta: cat.title
      });
    }
  }
  return out;
};

const flattenSuburbs = (): Result[] => {
  return getAllSuburbs().map((s) => ({
    type: 'suburb' as const,
    title: s.name,
    description: s.metaDescription,
    href: `/suburbs/${s.slug}`,
    meta: s.parentAreaName
  }));
};

const flattenAreas = (): Result[] => {
  return Object.values(AREAS).map((a) => ({
    type: 'area' as const,
    title: a.name,
    description: a.housingProfile,
    href: a.href,
    meta: 'Area'
  }));
};

const ALL_RESULTS: Result[] = [
  ...flattenServices(),
  ...flattenAreas(),
  ...flattenSuburbs()
];

const SearchPage = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get('q') ?? '';
  const [query, setQuery] = useState(initial);

  useEffect(() => {
    setQuery(initial);
  }, [initial]);

  const results = useMemo<Result[]>(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    return ALL_RESULTS.filter((r) => {
      const haystack = `${r.title} ${r.description} ${r.meta ?? ''}`.toLowerCase();
      return haystack.includes(q);
    }).slice(0, 40);
  }, [query]);

  const updateQuery = (val: string) => {
    setQuery(val);
    const next = new URLSearchParams(params);
    if (val) next.set('q', val);
    else next.delete('q');
    setParams(next, { replace: true });
  };

  const grouped = useMemo(() => {
    const groups: Record<string, Result[]> = {};
    for (const r of results) {
      const key = r.type === 'service' ? 'Services' : r.type === 'area' ? 'Areas' : 'Suburbs';
      (groups[key] ||= []).push(r);
    }
    return groups;
  }, [results]);

  return (
    <>
      <SEO
        title="Search | Romans Building Services"
        description="Search Romans Building Services for masonry, heritage restoration, structural repairs and Sydney suburb service pages."
        canonical="/search"
      />

      <div className="min-h-screen font-body bg-white">
        <section className="bg-navy texture-grain py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-4xl md:text-5xl text-white mb-4 text-center"
            >
              Search Romans Building Services
            </motion.h1>
            <p className="text-white/80 text-center mb-8">
              Find a service, suburb or area page across Sydney.
            </p>

            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                type="search"
                autoFocus
                value={query}
                onChange={(e) => updateQuery(e.target.value)}
                placeholder="Try: tuckpointing, Paddington, retaining wall..."
                className="w-full pl-12 pr-4 py-4 rounded-md text-lg bg-white text-text-primary border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber"
                aria-label="Search Romans Building Services"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            {query.trim().length < 2 && (
              <div className="text-text-muted text-center py-12">
                Type at least 2 characters to search.
              </div>
            )}

            {query.trim().length >= 2 && results.length === 0 && (
              <div className="text-text-muted text-center py-12">
                No matches for &ldquo;{query}&rdquo;. Try a suburb name (e.g. Paddington) or a service (e.g. repointing).
              </div>
            )}

            {Object.entries(grouped).map(([group, items]) => (
              <div key={group} className="mb-10">
                <h2 className="font-heading text-2xl text-navy mb-4">{group}</h2>
                <ul className="divide-y divide-gray-200 border border-gray-200 rounded-md overflow-hidden">
                  {items.map((r) => (
                    <li key={r.href}>
                      <Link
                        to={r.href}
                        className="flex items-start gap-4 p-4 hover:bg-bg-light transition-colors"
                      >
                        <span className="mt-1 text-navy shrink-0">
                          {r.type === 'suburb' || r.type === 'area' ? (
                            <MapPin className="w-5 h-5" />
                          ) : (
                            <Hammer className="w-5 h-5" />
                          )}
                        </span>
                        <span className="flex-1">
                          <span className="block font-heading text-lg text-navy">{r.title}</span>
                          <span className="block text-text-muted text-sm mt-1">{r.description}</span>
                          {r.meta && (
                            <span className="inline-block mt-2 text-xs uppercase tracking-wide text-text-muted">
                              {r.meta}
                            </span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default SearchPage;
