import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { getSuburbsForArea } from '@/data/suburbs';

interface AreaSuburbsLinksProps {
  parentAreaHref: string;
  parentAreaName: string;
}

export const AreaSuburbsLinks = ({ parentAreaHref, parentAreaName }: AreaSuburbsLinksProps) => {
  const suburbs = getSuburbsForArea(parentAreaHref);
  if (suburbs.length === 0) return null;

  return (
    <div
      className="my-12 bg-bg-light rounded-xl p-8">
      <h2 className="font-heading text-2xl text-navy mb-3">
        Suburbs we cover in {parentAreaName}
      </h2>
      <p className="font-body text-text-secondary mb-6">
        We work on masonry, heritage and remedial jobs right across{' '}
        {parentAreaName.toLowerCase()}. Pick your suburb for detail on the local housing stock and
        the work we do there.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {suburbs.map((suburb) => (
          <Link
            key={suburb.slug}
            to={`/suburbs/${suburb.slug}`}
            className="group flex items-center justify-between bg-white rounded-md px-4 py-3 shadow-premium hover:shadow-premium-lg transition-shadow">
            <span className="flex items-center gap-2 font-body text-text-primary group-hover:text-navy transition-colors">
              <MapPin className="w-4 h-4 text-navy-light" />
              {suburb.name}
            </span>
            <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-navy transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
};
