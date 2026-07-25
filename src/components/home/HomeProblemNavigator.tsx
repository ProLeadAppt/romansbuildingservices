import { ArrowUpRight, Blocks, Droplets, Landmark, MoveDiagonal } from 'lucide-react';
import { Link } from 'react-router-dom';

const problems = [
  {
    title: 'Cracks or movement',
    body: 'Cracked brickwork, stepped joints, movement around openings or a wall that no longer looks straight.',
    to: '/problems/cracked-brick-walls',
    icon: MoveDiagonal,
  },
  {
    title: 'Water or salt damage',
    body: 'Rising damp, white salts, leaking masonry or stone and render breaking away after wet weather.',
    to: '/problems/rising-damp',
    icon: Droplets,
  },
  {
    title: 'Mortar or stone failing',
    body: 'Loose joints, weathered sandstone, damaged chimneys or original masonry that needs the right repair method.',
    to: '/problems/crumbling-mortar',
    icon: Landmark,
  },
  {
    title: 'Concrete or structural damage',
    body: 'Spalling concrete, rust stains, damaged lintels or signs that a repair needs more than a surface patch.',
    to: '/problems/concrete-cancer',
    icon: Blocks,
  },
] as const;

export const HomeProblemNavigator = () => (
  <section data-p2-section="problem-navigator" className="bg-stone-50 px-5 py-16 sm:px-6 md:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.65fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-navy/60">Start with what you can see</p>
          <h2 className="font-heading text-4xl leading-[1.05] text-navy sm:text-5xl">
            You do not need to know the trade name for the problem.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
            Choose the closest sign. Each guide explains common causes, what to watch and when an on-site assessment makes sense.
          </p>
          <Link to="/problems" className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-navy underline decoration-amber decoration-2 underline-offset-8">
            See every problem guide <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="divide-y divide-navy/15 border-y border-navy/15">
          {problems.map(({ title, body, to, icon: Icon }, index) => (
            <Link key={to} to={to} className="group grid min-h-40 gap-5 py-7 sm:grid-cols-[3rem_1fr_auto] sm:items-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-navy/15 bg-white text-navy transition-colors group-hover:border-amber group-hover:bg-amber/10">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="mb-2 block font-heading text-2xl text-navy">{title}</span>
                <span className="block max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">{body}</span>
              </span>
              <span className="hidden text-xs font-semibold tracking-[0.18em] text-navy/40 sm:block">0{index + 1}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);
