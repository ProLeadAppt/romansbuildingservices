import { Link } from 'react-router-dom';
import { QuoteCTAButton } from '@/components/quote';

const services = [
  ['Masonry', '/services/masonry', 'Brick, stone, mortar joints and retaining walls.'],
  ['Heritage restoration', '/services/heritage-restoration', 'Care for original materials and period details.'],
  ['Structural repairs', '/services/structural-repairs', 'Understand movement and cracking before choosing a repair.'],
  ['Building restoration', '/services/building-restoration', 'Assess damaged building fabric and the scope of restoration.'],
  ['Concrete repairs', '/services/concrete-repairs', 'Explore repair options for damaged concrete.'],
  ['Foundation repairs', '/services/foundation-repairs', 'Investigate settlement and support concerns.'],
  ['Remedial building', '/services/remedial-building', 'Find the underlying problem before specifying the work.'],
] as const;
const photos = [
  ['romansstone_1451942270_1155297957273885284_2394650725.webp', 'Rough-faced sandstone blocks arranged in courses with a corner joint', 'Sandstone blockwork'],
  ['romansstone_1452415091_1159264269511646168_2394650725.webp', 'Textured sandstone masonry beside a doorway during building work', 'Stone masonry detail'],
] as const;

export const CraftHomeSections = () => <>
  <div className="border-b border-border bg-bg-light px-6 py-5"><ul className="craft-container flex flex-wrap gap-x-12 gap-y-3 text-sm font-medium text-navy"><li>Talk directly with Minas</li><li>Understand the scope</li><li>Care for the original work</li></ul></div>
  <section className="craft-section" aria-labelledby="craft-work"><div className="craft-container">
    <div className="mb-8 grid gap-5 md:grid-cols-2"><div><p className="craft-label">The workmanship</p><h2 id="craft-work" className="text-navy">A closer look at the work</h2></div><p className="self-end leading-7 text-text-muted">The face of the stone. The line of a joint. The finish around an opening. Explore real photographs from the Romans gallery.</p></div>
    <div className="grid gap-7 md:grid-cols-2">{photos.map(([file, alt, caption]) => <figure key={file}><Link to="/projects" className="block rounded focus-visible:ring-2 focus-visible:ring-navy"><img src={`/gallery/full/${file}`} alt={alt} width="720" height="720" loading="lazy" decoding="async" className="aspect-[1.35] w-full rounded object-cover" /></Link><figcaption className="mt-4 font-semibold text-navy">{caption}</figcaption></figure>)}</div>
    <Link to="/projects" className="mt-6 inline-flex min-h-11 items-center font-semibold text-navy underline">Explore the project gallery</Link><span className="mx-3" aria-hidden="true">·</span><Link to="/case-studies" className="inline-flex min-h-11 items-center font-semibold text-navy underline">Read the case studies</Link>
  </div></section>
  <section className="craft-section bg-bg-light" aria-labelledby="craft-services"><div className="craft-container">
    <div className="mb-8 grid gap-5 md:grid-cols-2"><div><p className="craft-label">Our services</p><h2 id="craft-services" className="text-navy">How we can help</h2></div><p className="self-end leading-7 text-text-muted">You do not need to know the technical name. Tell Minas what you can see, where it is and what has changed.</p></div>
    <div className="grid gap-4 md:grid-cols-2">{services.map(([title, href, description]) => <article className="craft-card" key={href}><h3 className="text-xl font-semibold text-navy"><Link to={href} className="inline-flex min-h-11 items-center underline">{title}</Link></h3><p className="mt-2 leading-7 text-text-muted">{description}</p></article>)}</div>
  </div></section>
  <section className="craft-section" aria-labelledby="craft-areas"><div className="craft-container grid gap-8 md:grid-cols-2"><div><p className="craft-label">Where we work</p><h2 id="craft-areas" className="text-navy">Hawkesbury &amp; Western Sydney</h2><p className="mt-5 leading-7 text-text-muted">Based in The Slopes. Working across North Richmond, Richmond, Kurmond, Kurrajong, Windsor, Penrith, Blacktown and surrounding areas.</p><Link to="/areas/hawkesbury-western-sydney" className="mt-5 inline-flex min-h-11 items-center font-semibold text-navy underline">Explore our service area</Link></div><div className="craft-card"><Link to="/about" className="mb-4 inline-flex min-h-11 items-center font-semibold text-navy underline">Meet Minas Romanakis</Link><h3 className="text-xl font-semibold text-navy">Start with what needs attention</h3><p className="mt-4 leading-7 text-text-muted">Share your suburb, a description of the problem and photographs taken from a safe position. An inspection may be needed to establish the cause and scope. Ask what the assessment includes and whether there is a fee.</p><QuoteCTAButton className="mt-6 min-h-12 rounded bg-amber px-6 py-3 font-semibold text-navy">Discuss your project</QuoteCTAButton></div></div></section>
</>;
