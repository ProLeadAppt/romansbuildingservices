import { Link } from 'react-router-dom';
import { Hammer, ArrowRight } from 'lucide-react';
import { getArea } from '@/data/areas';
import { getServicesForArea, getServiceData } from '@/data/serviceAreas';

// Surfaces the service-area combo pages for a given area on its hub page.
// Renders nothing if no combos exist for the area.
export const AreaServiceLinks = ({ areaSlug }: { areaSlug: string }) => {
  const area = getArea(areaSlug);
  const combos = getServicesForArea(areaSlug);
  if (!area || combos.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-heading text-2xl text-navy mb-2">Service guides for {area.name}</h2>
        <p className="font-body text-text-muted mb-6">
          Area-specific guides to the services we offer most often across {area.name}.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {combos.map((combo) => {
            const service = getServiceData(combo.serviceSlug);
            if (!service) return null;
            return (
              <Link
                key={combo.serviceSlug}
                to={`/services/${combo.serviceSlug}/${area.slug}`}
                className="flex items-start gap-3 p-4 bg-stone-50 border border-stone-200 rounded-md hover:border-amber transition-colors group"
              >
                <Hammer className="w-5 h-5 text-amber flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <div className="font-heading text-navy">
                    {service.title} in {area.name}
                  </div>
                  <div className="font-body text-sm text-text-muted">{combo.heroLine.slice(0, 100)}…</div>
                </div>
                <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-amber transition-colors flex-shrink-0 mt-1" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
