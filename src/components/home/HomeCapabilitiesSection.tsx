import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    number: '01',
    title: 'Heritage restoration',
    body: 'Traditional brick, sandstone, lime mortar and facade work for buildings where material compatibility and original character matter.',
    to: '/services/heritage-restoration',
    link: 'Explore heritage work',
  },
  {
    number: '02',
    title: 'Stone and masonry',
    body: 'Repointing, brick and blockwork, retaining walls, chimneys and stone repairs built around the condition of the existing masonry.',
    to: '/services/masonry',
    link: 'Explore masonry',
  },
  {
    number: '03',
    title: 'Structural and remedial',
    body: 'Cracking, failed lintels, concrete damage, foundations and building defects that need diagnosis before a durable repair is specified.',
    to: '/services/remedial-building',
    link: 'Explore remedial work',
  },
] as const;

export const HomeCapabilitiesSection = () => (
  <section data-p2-section="capabilities" className="bg-white px-5 py-16 sm:px-6 md:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 max-w-3xl md:mb-14">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/80">Core capabilities</p>
        <h2 className="font-heading text-4xl leading-[1.05] text-navy sm:text-5xl">One masonry discipline, applied to very different buildings.</h2>
      </div>
      <div className="grid border-y border-navy/15 lg:grid-cols-3 lg:divide-x lg:divide-navy/15">
        {capabilities.map((item) => (
          <article key={item.to} className="border-b border-navy/15 py-8 last:border-b-0 lg:border-b-0 lg:px-8 lg:first:pl-0 lg:last:pr-0">
            <p className="text-xs font-semibold tracking-[0.2em] text-navy/80">{item.number}</p>
            <h3 className="mt-5 font-heading text-3xl text-navy">{item.title}</h3>
            <p className="mt-4 text-base leading-7 text-slate-600">{item.body}</p>
            <Link to={item.to} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-navy">
              {item.link} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  </section>
);
