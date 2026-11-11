import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { caseStudies } from '@/data/caseStudies';

const studies = caseStudies.slice(0, 3);

export const HomeCaseStudiesSection = () => (
  <section data-p2-section="case-studies" className="bg-navy px-5 py-16 text-white sm:px-6 md:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber">Repair references</p>
          <h2 className="max-w-3xl font-heading text-4xl leading-[1.05] sm:text-5xl">The repair should make sense before the work begins.</h2>
        </div>
        <Link to="/case-studies" className="inline-flex min-h-11 items-center gap-2 self-start font-semibold text-white underline decoration-amber decoration-2 underline-offset-8 md:self-auto">
          View all repair references <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-3">
        {studies.map((study) => (
          <article key={`/case-studies/${study.slug}`} className="group flex min-w-0 flex-col bg-navy">

            <div className="flex flex-1 flex-col p-6 md:p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-amber">Case-study archive</p>
              <h3 className="font-heading text-2xl leading-tight text-white">{study.metaTitle}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-white/70">{study.metaDescription}</p>
              <Link to={`/case-studies/${study.slug}`} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-white">
                Read the reference <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
