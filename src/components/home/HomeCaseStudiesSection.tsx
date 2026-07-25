import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const studies = [
  {
    title: 'A heritage church repaired without rebuilding sound brickwork',
    location: 'Sydney CBD',
    discipline: 'Heritage brick restoration',
    summary: 'Failing cement pointing was removed by hand, replacement brick was matched and lime mortar was rebuilt in controlled coats.',
    image: '/gallery/full/romansstone_1466993917_1281560327394079553_2394650725.webp',
    alt: 'Romans worker carrying out heritage brick restoration on a Sydney church facade',
    to: '/case-studies/heritage-church-brick-restoration-sydney-cbd',
  },
  {
    title: 'A sandstone seawall rebuilt around tides and original material',
    location: 'Mosman',
    discipline: 'Sandstone seawall restoration',
    summary: 'Sound blocks were retained, damaged stone was matched and the wall was rebuilt in tidal work windows with drainage restored behind it.',
    image: '/gallery/full/romansstone_1572902412_2169985170382604428_2394650725.webp',
    alt: 'Completed sandstone seawall on Sydney Harbour with the Harbour Bridge behind it',
    to: '/case-studies/sandstone-seawall-restoration-mosman',
  },
  {
    title: 'A failing sandstone chimney rebuilt from the flashing up',
    location: 'Eastern Suburbs',
    discipline: 'Sandstone chimney rebuild',
    summary: 'The original chimney pot and sound stone were retained while damaged courses were rebuilt with matched sandstone and lime mortar.',
    image: '/gallery/full/romansstone_1617135591_2541039971017938059_2394650725.webp',
    alt: 'Romans stonemasons rebuilding a sandstone chimney on a Sydney roof',
    to: '/case-studies/sandstone-chimney-rebuild-eastern-suburbs',
  },
] as const;

export const HomeCaseStudiesSection = () => (
  <section data-p2-section="case-studies" className="bg-navy px-5 py-16 text-white sm:px-6 md:py-24">
    <div className="mx-auto max-w-7xl">
      <div className="mb-10 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber">Selected work</p>
          <h2 className="max-w-3xl font-heading text-4xl leading-[1.05] sm:text-5xl">The repair should make sense before the work begins.</h2>
        </div>
        <Link to="/case-studies" className="inline-flex min-h-11 items-center gap-2 self-start font-semibold text-white underline decoration-amber decoration-2 underline-offset-8 md:self-auto">
          View all case studies <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="grid gap-px overflow-hidden border border-white/15 bg-white/15 lg:grid-cols-3">
        {studies.map((study, index) => (
          <article key={study.to} className="group flex min-w-0 flex-col bg-navy">
            <Link to={study.to} className="relative block aspect-[4/3] overflow-hidden bg-navy-light">
              <img src={study.image} alt={study.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              <span className="absolute left-4 top-4 bg-navy/90 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                {study.location}
              </span>
            </Link>
            <div className="flex flex-1 flex-col p-6 md:p-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-amber">0{index + 1} / {study.discipline}</p>
              <h3 className="font-heading text-2xl leading-tight text-white">{study.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-white/70">{study.summary}</p>
              <Link to={study.to} className="mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-white">
                Read the project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
