import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { getArea } from '@/data/areas';
import { PROBLEMS } from '@/data/problems';

// Renders the top 5 problem-in-area links for an area page.
// Used on each area hub page to surface the programmatic problem×area pages.
export const AreaProblemLinks = ({ areaSlug }: { areaSlug: string }) => {
  const area = getArea(areaSlug);
  if (!area) return null;

  const items = area.topProblems
    .map((slug) => ({ slug, problem: PROBLEMS[slug] }))
    .filter((x) => x.problem);

  if (items.length === 0) return null;

  return (
    <section className="py-16 bg-stone-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-2xl text-navy mb-2">Common problems we see in {area.name}</h2>
        <p className="font-body text-text-muted mb-6">
          The structural and masonry issues that come up most often across {area.name} housing stock.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {items.map(({ slug, problem }) => (
            <Link
              key={slug}
              to={`/problems/${slug}/${area.slug}`}
              className="flex items-start gap-3 p-4 bg-white border border-stone-200 rounded-md hover:border-amber transition-colors group"
            >
              <AlertCircle className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                <div className="font-heading text-navy">
                  {problem.name} in {area.name}
                </div>
                <div className="font-body text-sm text-text-muted">{problem.heroTagline.slice(0, 90)}…</div>
              </div>
              <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-amber transition-colors flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
