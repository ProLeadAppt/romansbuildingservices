import { Link } from 'react-router-dom';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { PROBLEMS_LIST } from '@/data/problems';

interface ProblemsLinksSectionProps {
  heading?: string;
  intro?: string;
  limit?: number;
  background?: 'light' | 'white' | 'off-white';
}

export const ProblemsLinksSection = ({
  heading = 'Got a problem? Start here.',
  intro = 'Plain-English guides to the most common masonry, concrete and structural issues we see across Sydney. Pick what matches what you are seeing.',
  limit,
  background = 'light',
}: ProblemsLinksSectionProps) => {
  const problems = limit ? PROBLEMS_LIST.slice(0, limit) : PROBLEMS_LIST;

  const bgClass =
    background === 'white'
      ? 'bg-white'
      : background === 'off-white'
        ? 'bg-bg-off-white'
        : 'bg-bg-light';

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl text-navy mb-3">{heading}</h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">{intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((problem, i) => (
            <div
              key={problem.slug}>
              <Link
                to={`/problems/${problem.slug}`}
                className="group flex items-start gap-3 bg-white rounded-lg p-5 shadow-premium hover:shadow-premium-lg transition-shadow h-full">
                <AlertCircle className="w-5 h-5 text-amber mt-0.5 shrink-0" />
                <div className="flex-1">
                  <h3 className="font-body text-base font-semibold text-text-primary mb-1 group-hover:text-navy transition-colors">
                    {problem.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-navy-light text-sm font-medium group-hover:gap-2 transition-all">
                    Read guide <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {limit && PROBLEMS_LIST.length> limit && (
          <div className="text-center mt-8">
            <Link
              to="/problems"
              className="inline-flex items-center gap-2 font-body text-navy hover:text-navy-light transition-colors font-medium">
              See all building problems <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
