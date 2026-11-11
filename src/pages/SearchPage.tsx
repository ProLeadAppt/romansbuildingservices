import { useEffect, useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Search as SearchIcon, MapPin, Hammer, BookOpen } from 'lucide-react';
import { serviceHierarchy } from '@/data/serviceHierarchy';
import { getAllSuburbs } from '@/data/suburbs';
import { areaGuides } from '@/data/areaGuides';
import { featuredGuides } from '@/data/adviceGuides';
import { normalizeSearchQuery, searchSite } from '@/lib/siteSearch';
import type { SearchResult } from '@/lib/siteSearch';

const ALL_RESULTS: SearchResult[] = [
  ...serviceHierarchy.flatMap((category) => [
    { type: 'service' as const, title: category.title, description: category.metaDescription, href: category.route, meta: 'Service' },
    ...category.subServices.map((service) => ({
      type: 'service' as const,
      title: service.title,
      description: service.metaDescription,
      href: `${category.route}/${service.slug}`,
      meta: category.title,
    })),
  ]),
  ...areaGuides.map((area) => ({
    type: 'area' as const,
    title: area.name,
    description: area.description,
    href: area.href,
    meta: 'Area guide',
    keywords: area.places,
  })),
  ...getAllSuburbs().map((suburb) => ({
    type: 'suburb' as const,
    title: suburb.name,
    description: suburb.metaDescription,
    href: `/suburbs/${suburb.slug}`,
    meta: suburb.parentAreaName,
  })),
  ...featuredGuides.map((guide) => ({
    type: 'advice' as const,
    title: guide.name,
    description: guide.description,
    href: guide.href,
    meta: 'Repair advice',
  })),
];

const groupLabels: Record<SearchResult['type'], string> = {
  service: 'Services', area: 'Area guides', suburb: 'Suburb guides', advice: 'Repair advice',
};

const SearchPage = () => {
  const [params, setParams] = useSearchParams();
  const initial = params.get('q') ?? '';
  const [query, setQuery] = useState(initial);

  useEffect(() => { setQuery(initial); }, [initial]);

  const { results, total } = useMemo(() => searchSite(ALL_RESULTS, query), [query]);
  const canSearch = normalizeSearchQuery(query).length >= 2;
  const grouped = useMemo(() => {
    const groups: Record<string, SearchResult[]> = {};
    for (const result of results) (groups[groupLabels[result.type]] ||= []).push(result);
    return groups;
  }, [results]);

  const updateQuery = (value: string) => {
    setQuery(value);
    const next = new URLSearchParams(params);
    if (value) next.set('q', value);
    else next.delete('q');
    setParams(next, { replace: true });
  };

  return (
    <>
      <SEO
        title="Search services, areas & repair advice | Romans"
        description="Find masonry services, Hawkesbury and Sydney area guides, and practical advice for planning your building repair."
        canonical="/search"
        noIndex
      />
      <section className="bg-navy px-6 pb-14 pt-28">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-white mb-5">Find the right repair information</h1>
          <p className="text-white/85 text-lg mb-8">Search by service, suburb or the repair you are planning.</p>
          <form role="search" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="site-search" className="block text-white font-semibold mb-3">Search Romans Building Services</label>
            <div className="relative">
              <SearchIcon aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
              <input
                id="site-search"
                type="search"
                autoFocus
                value={query}
                onChange={(event) => updateQuery(event.target.value)}
                placeholder="Try North Richmond or repointing"
                aria-describedby="search-help"
                aria-controls="search-results"
                className="w-full pl-12 pr-4 py-4 rounded text-base bg-white text-text-primary focus:outline-none focus:ring-2 focus:ring-amber"
              />
            </div>
            <p id="search-help" className="text-sm text-white/80 mt-3">Use at least two letters or numbers. Results update as you type.</p>
          </form>
        </div>
      </section>
      <section className="craft-section" aria-label="Search results">
        <div className="mx-auto max-w-3xl">
          <p role="status" aria-live="polite" aria-atomic="true" className="text-text-secondary mb-8">
            {!canSearch ? 'Enter a service, suburb or repair topic to start.' : total === 0 ? 'No matching pages found.' : total > results.length ? `Showing ${results.length} of ${total} matching pages. Add another word to narrow the search.` : `${total} matching ${total === 1 ? 'page' : 'pages'}.`}
          </p>
          <div id="search-results">
            {canSearch && total === 0 && (
              <div className="craft-card mb-10">
                <h2 className="text-navy mb-4">Need help finding the next step?</h2>
                <p className="text-text-secondary mb-5">Try a shorter phrase, such as “brick”, “sandstone” or “Kurrajong”. A missing suburb page does not mean your property is outside our service area.</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  <Link to="/areas" className="min-h-11 inline-flex items-center text-navy underline">Browse service areas</Link>
                  <Link to="/contact" className="min-h-11 inline-flex items-center text-navy underline">Ask about your property</Link>
                </div>
              </div>
            )}
            {Object.entries(grouped).map(([group, items]) => (
              <div key={group} className="mb-10">
                <h2 className="text-navy mb-5">{group}</h2>
                <ul className="divide-y divide-border border border-border rounded">
                  {items.map((result) => (
                    <li key={result.href}>
                      <Link to={result.href} className="flex items-start gap-4 p-5 hover:bg-bg-light transition-colors">
                        <span aria-hidden="true" className="mt-1 text-navy shrink-0">
                          {result.type === 'area' || result.type === 'suburb' ? <MapPin className="w-5 h-5" /> : result.type === 'advice' ? <BookOpen className="w-5 h-5" /> : <Hammer className="w-5 h-5" />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-heading text-lg text-navy">{result.title}</span>
                          <span className="block text-text-secondary text-base mt-2">{result.description}</span>
                          {result.meta && <span className="inline-block mt-3 text-sm text-text-secondary">{result.meta}</span>}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {!canSearch && (
              <nav aria-label="Popular starting points" className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Hawkesbury & Western Sydney', href: '/areas/hawkesbury-western-sydney' },
                  { label: 'Compare masonry services', href: '/services/masonry' },
                  { label: 'Prepare a repair enquiry', href: '/learn/brick-sandstone-repair-quotes-hawkesbury' },
                  { label: 'Explore repair advice', href: '/learn' },
                ].map((link) => <Link key={link.href} to={link.href} className="craft-card min-h-14 text-navy underline">{link.label}</Link>)}
              </nav>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
