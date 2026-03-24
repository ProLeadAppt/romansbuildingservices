import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, ClipboardCheck, Wrench, ShieldCheck, FileCheck } from 'lucide-react';

const DefectRectificationPage = () => {
  const siblings = getSiblingServices('building-restoration', 'defect-rectification');
  return (
    <ServicePageTemplate
      title="Building Defect Rectification"
      metaTitle="Building Defect Rectification Sydney | Romans Building Services"
      metaDescription="Identifying and rectifying building defects. Structural assessments and repair solutions across Sydney."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Building Restoration', href: '/services/building-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Building Restoration', href: '/services/building-restoration' },
        { label: 'Building Defect Rectification', href: '' },
      ]}
      intro={[
        'Building defects cost money if you ignore them. Cracking, water leaks, spalling concrete, and failed waterproofing only get worse with time. The sooner they are fixed, the less it costs.',
        'We identify defects, work out what caused them, and carry out the repairs. We deal with structural defects, water ingress, masonry failures, and concrete deterioration across residential and commercial buildings.',
        'Whether you are a strata manager dealing with a defect report, a homeowner with cracking walls, or a builder needing rectification work done properly, we can help.',
      ]}
      features={[
        { icon: Search, title: 'Defect Investigation', description: 'Thorough inspection to identify all defects and their root causes. We do not just list problems, we explain why they happened.' },
        { icon: ClipboardCheck, title: 'Scope of Works', description: 'Clear, detailed scope of work for every defect. You know exactly what we are fixing, how we are fixing it, and what it will cost.' },
        { icon: Wrench, title: 'Rectification Works', description: 'Structural repairs, waterproofing, masonry rebuilding, concrete restoration, and render replacement. Whatever the defect requires.' },
        { icon: ShieldCheck, title: 'Preventive Measures', description: 'We address the cause of the defect, not just the symptom. Drainage, waterproofing, and protection to stop it happening again.' },
        { icon: FileCheck, title: 'Documentation', description: 'Full documentation of defects found, works completed, and materials used. Important for strata records and future reference.' },
      ]}
      faqs={[
        { question: 'What are the most common building defects you see?', answer: 'Water ingress through failed waterproofing, cracking from settlement or thermal movement, concrete cancer in carparks and balconies, and corroded steel lintels. These make up most of our rectification work.' },
        { question: 'Can you work from an existing defect report?', answer: 'Yes. If you already have an engineer or building inspector report, we can quote directly from that scope. We can also carry out our own assessment if needed.' },
        { question: 'Do you work with strata managers?', answer: 'All the time. We understand the strata process, attend meetings when needed, provide detailed quotes for owners corporations, and coordinate access with building managers.' },
        { question: 'Is there a warranty on rectification work?', answer: 'Yes. All our work is covered by warranty. The period depends on the type of work, but we stand behind everything we do. We also use materials with manufacturer warranties.' },
      ]}
    />
  );
};
export default DefectRectificationPage;
