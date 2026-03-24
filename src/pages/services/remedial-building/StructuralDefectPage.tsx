import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Wrench, FileCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const StructuralDefectPage = () => {
  const siblings = getSiblingServices('remedial-building', 'structural-defect');

  return (
    <ServicePageTemplate
      title="Structural Defect Repair"
      metaTitle="Structural Defect Repair Sydney | Romans Building Services"
      metaDescription="Identifying and repairing structural defects in residential and commercial buildings across Sydney."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Structural Defect Repair', href: '' },
      ]}
      intro={[
        "Structural defects can show up in new builds and old buildings alike. Cracking walls, bowing masonry, failed lintels, and movement in the structure all point to something that needs fixing. We find the defect and repair it properly.",
        "We work with structural engineers to diagnose the root cause. Then we carry out the repair to their specification. Crack stitching, wall rebuilds, lintel replacement, reinforcement, whatever the job needs.",
        "Romans has repaired structural defects on everything from Federation terraces to modern apartment blocks. If your building has a problem, call Minas. We will tell you straight what is going on."
      ]}
      features={[
        { icon: Search, title: 'Defect Investigation', description: 'We inspect the building, document the defects, and work with engineers to pinpoint the cause. No guessing.' },
        { icon: AlertTriangle, title: 'Crack Stitching & Repair', description: 'Structural cracks repaired with stainless steel stitching bars, epoxy injection, or full wall rebuilds depending on severity.' },
        { icon: Wrench, title: 'Lintel Replacement', description: 'Failed steel or timber lintels replaced with new galvanised or stainless steel. We support the wall properly during the swap.' },
        { icon: FileCheck, title: 'Engineer Certified', description: 'All structural repairs are designed and certified by a qualified structural engineer. Proper documentation for your records.' },
        { icon: CheckCircle, title: 'Builder Defect Claims', description: 'We carry out rectification work for defects identified in building reports and insurance claims. Clear scope and pricing.' },
      ]}
      faqs={[
        { question: 'What counts as a structural defect?', answer: 'Anything that affects the structural integrity of the building. Cracking in load-bearing walls, failed lintels, bowing walls, foundation movement, and inadequate reinforcement are all structural defects.' },
        { question: 'Can defects in new buildings be fixed?', answer: 'Yes. Defects in new builds are usually covered by the builder warranty or home building insurance. We carry out the rectification work to the engineer specification.' },
        { question: 'How do you repair bowing walls?', answer: 'It depends on the severity. Minor bowing can be stabilised with tie bars or reinforcement. Severe cases may need partial demolition and rebuild. The engineer will specify the method.' },
      ]}
    />
  );
};

export default StructuralDefectPage;
