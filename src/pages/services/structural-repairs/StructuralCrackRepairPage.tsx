import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Syringe, Layers, ShieldCheck, FileCheck } from 'lucide-react';

const StructuralCrackRepairPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'structural-crack-repair');
  return (
    <ServicePageTemplate
      title="Structural Crack Repair"
      metaTitle="Structural Crack Repair Sydney | Romans Building Services"
      metaDescription="Crack stitching, epoxy injection, and structural crack repair across Sydney. Diagnosing the cause and fixing it properly."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Structural Crack Repair', href: '' },
      ]}
      intro={[
        'Not every crack is structural, but the ones that are need proper attention. We diagnose what is causing the cracking, then carry out the right repair. No band-aid fixes.',
        'We use crack stitching, epoxy injection, resin injection, and helical bar reinforcement depending on the situation. The method depends on the crack type, the material, and whether the movement is ongoing.',
        'From hairline cracks in rendered walls to large stepped cracks in brickwork, we have seen it all across Sydney. We fix the crack and address the underlying cause so it does not come back.',
      ]}
      features={[
        { icon: Search, title: 'Crack Diagnosis', description: 'We assess whether cracks are structural or cosmetic, identify the cause, and recommend the right repair method.' },
        { icon: Syringe, title: 'Epoxy Injection', description: 'Structural epoxy injected into cracks to restore full strength. Used for concrete and masonry where the crack is stable.' },
        { icon: Layers, title: 'Crack Stitching', description: 'Helical bars bedded into slots across the crack line. Distributes load and prevents further movement in masonry walls.' },
        { icon: ShieldCheck, title: 'Resin Injection', description: 'Flexible resin injection for cracks where minor movement is expected. Seals the crack while allowing some flex.' },
        { icon: FileCheck, title: 'Monitoring', description: 'Where movement is ongoing, we install crack monitors before repair to confirm the crack is stable enough to fix.' },
      ]}
      faqs={[
        { question: 'How do I know if a crack is structural?', answer: 'Cracks wider than 2mm, stepped cracks following mortar joints, or cracks that keep growing are likely structural. Horizontal cracks in retaining walls are also a concern. We can assess it for you.' },
        { question: 'Will the crack come back after repair?', answer: 'Not if we address the cause. If the cracking is from settlement, tree roots, or drainage issues, those need fixing too. We repair the crack and deal with the source of the problem.' },
        { question: 'What is crack stitching?', answer: 'Helical stainless steel bars are bedded into horizontal slots cut across the crack. This ties the wall back together and spreads the load so the crack cannot reopen.' },
      ]}
    />
  );
};
export default StructuralCrackRepairPage;
