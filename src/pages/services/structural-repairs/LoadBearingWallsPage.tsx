import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns, ShieldCheck, Ruler, HardHat, Search } from 'lucide-react';

const LoadBearingWallsPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'load-bearing-walls');
  return (
    <ServicePageTemplate
      title="Load-Bearing Wall Repairs"
      metaTitle="Load-Bearing Wall Repairs Sydney | Romans Building Services"
      metaDescription="Expert load-bearing wall repairs and reconstruction across Sydney. Structural assessments and engineered solutions."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Load-Bearing Wall Repairs', href: '' },
      ]}
      intro={[
        'Load-bearing walls hold your building up. When they crack, bow or settle, the whole structure is at risk. We see this regularly across Sydney, especially in older brick and masonry buildings.',
        'We work with structural engineers to assess the damage and carry out repairs properly. That means temporary propping, removing damaged sections, rebuilding with the right materials, and making sure everything ties back into the existing structure.',
        'Whether it is a single wall in a terrace house or multiple walls in a commercial building, we get it sorted. No guesswork. Engineered solutions backed by 30 years on the tools.',
      ]}
      features={[
        { icon: Search, title: 'Structural Assessment', description: 'We inspect the wall, identify what is causing the damage, and work with engineers to design the repair.' },
        { icon: Columns, title: 'Temporary Propping', description: 'Safe temporary support while we carry out the repair. We do not cut corners on safety.' },
        { icon: HardHat, title: 'Wall Reconstruction', description: 'Damaged sections removed and rebuilt to match existing brickwork or masonry. Tied into the structure properly.' },
        { icon: ShieldCheck, title: 'Reinforcement', description: 'Steel reinforcement, crack stitching, or carbon fibre wrapping where additional strength is needed.' },
        { icon: Ruler, title: 'Engineer Certification', description: 'All work completed to engineered specifications. Certified on completion so you have the paperwork.' },
      ]}
      faqs={[
        { question: 'How do I know if a wall is load-bearing?', answer: 'Generally, walls that run perpendicular to floor joists or sit directly above foundations are load-bearing. We always confirm with a structural assessment before any work starts.' },
        { question: 'Can you remove part of a load-bearing wall?', answer: 'Yes, with the right engineering. We install steel beams or lintels to carry the load before removing any section. This needs a structural engineer and council approval.' },
        { question: 'How long does a load-bearing wall repair take?', answer: 'Most residential jobs take one to two weeks depending on the scope. Commercial jobs can take longer. We will give you a clear timeline before we start.' },
      ]}
    />
  );
};
export default LoadBearingWallsPage;
