import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Columns3, ShieldAlert, Wrench, HardHat, FileCheck } from 'lucide-react';

const EmergencyStructuralSupportPage = () => {
  const siblings = getSiblingServices('remedial-building', 'emergency-structural');

  return (
    <ServicePageTemplate
      title="Emergency Structural Support"
      metaTitle="Emergency Structural Propping & Shoring Sydney | Romans Building Services"
      metaDescription="Sydney emergency structural support by Minas Romanakis. Acrow propping, steel shoring, wall bracing, engineer-designed. Stabilises buildings until permanent repair."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Remedial Building', href: '/services/remedial-building' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Remedial Building', href: '/services/remedial-building' },
        { label: 'Emergency Structural Support', href: '' },
      ]}
      intro={[
        'When a building element has lost capacity or is at risk of collapse, temporary structural support has to go in before anything else can happen. Engineers cannot safely assess a partially collapsed structure. Permanent repairs cannot be designed without first making the site stable. Tenants cannot return to the building until the risk of further collapse is removed. Temporary propping, shoring and bracing is the first job on every structural emergency.',
        'We install temporary support using adjustable steel acrow props, structural steel beams, timber shoring, and bracing systems. Engineer designed where the structure being supported is significant. Sized to the load being carried. Positioned to keep access open for the permanent repair work. Stays in place for as long as needed, sometimes weeks while engineering and council approvals are sorted, sometimes months on heritage scopes with longer approval cycles.',
        'Most of our emergency structural support work is connected to insurance claims after storm damage, structural failures, or vehicle impacts. We make the site safe, document the damage for the insurer, support the engineer assessment, and then carry out the permanent repair scope. Single contractor from emergency call-out through to final completion. Simpler insurance process, less risk of work falling between contractors.',
      ]}
      features={[
        {
          icon: ShieldAlert,
          title: 'Emergency shoring',
          description:
            'Steel and timber shoring installed rapidly to support walls, slabs and beams at risk of collapse. Stock kept ready for immediate deployment. Sized to the load.',
        },
        {
          icon: Columns3,
          title: 'Temporary propping',
          description:
            'Adjustable acrow props rated to the load above. Steel beams where wider spans need supporting. Sequenced installation so the structure remains supported throughout.',
        },
        {
          icon: Wrench,
          title: 'Wall bracing',
          description:
            'External and internal bracing for leaning, bowing or partially collapsed walls. Stops movement, prevents further collapse, gives the engineer time to design the permanent fix.',
        },
        {
          icon: HardHat,
          title: 'Safe inspection access',
          description:
            'Once propping is in, we set up safe access for engineers, loss adjusters and other trades to inspect the damaged structure. Scaffolding, edge protection, controlled entry.',
        },
        {
          icon: FileCheck,
          title: 'Engineer designed',
          description:
            'For anything significant, structural engineer designs the temporary support: prop sizing, positioning, load ratings. Sign-off on installation before the building can be re-occupied.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Acrow props (adjustable steel)',
          detail:
            'Stock of acrow props in sizes 600mm to 3 metres extended length. Load-rated up to 30 kN per prop. Heads available for point loads or distributed loads via timber soldiers.',
        },
        {
          title: 'Structural steel beams',
          detail:
            'Stock UC and UB steel sections kept for emergency use. Set up over acrow props as needle beams when wider spans need supporting. Engineer-specified sizes for permanent load.',
        },
        {
          title: 'Heavy timber soldiers',
          detail:
            '300x100 oregon or hardwood timber soldiers for distributing loads onto floors and slabs. Spreads load over a wide area so the supporting floor does not get point-loaded.',
        },
        {
          title: 'Diagonal bracing system',
          detail:
            'Diagonal steel braces for stabilising leaning or bowing walls. Anchored to floor and ceiling structure. Stops lateral movement while waiting for permanent reinforcement.',
        },
        {
          title: 'Load monitoring',
          detail:
            'For long-term propping (weeks or months), load monitors track whether the props are still taking the design load. Daily or weekly readings depending on risk level.',
        },
        {
          title: 'Engineer documentation',
          detail:
            'Engineer-prepared temporary works design: prop schedule, layout drawing, load calculations, sequence of installation, removal sequence. Required for any prolonged propping.',
        },
      ]}
      processSteps={[
        {
          step: 'Assess the failure',
          detail:
            'On site, we look at what has failed and what is at risk of failing next. Hazard zone established. Photos taken. Engineer called if the structure is significant.',
        },
        {
          step: 'Plan the support layout',
          detail:
            'Quick design (or engineer detailed design for significant work). Prop positions chosen to take the load without blocking access for permanent repair. Sequence planned.',
        },
        {
          step: 'Install supports',
          detail:
            'Acrow props placed under failed beams or above failing wall sections. Tightened until they engage the load. Timber soldiers distributed loads onto stable floors. Diagonal bracing for walls.',
        },
        {
          step: 'Engineer verify',
          detail:
            'Engineer attends to verify props match the design and are positioned correctly. Sign-off issued. Building can now be considered safe for inspection and planning.',
        },
        {
          step: 'Maintain during planning phase',
          detail:
            'Props stay in place while engineer scope is finalised, council approval is obtained, insurance claim is processed. Load monitors checked periodically. Adjustments made if anything shifts.',
        },
        {
          step: 'Remove after permanent repair',
          detail:
            'Once permanent repair is complete and engineer signs off on the new structure taking load, the temporary props are removed in sequence (load is transferred carefully back to the permanent structure).',
        },
      ]}
      faqs={[
        {
          question: 'How long can temporary props stay in place?',
          answer:
            'As long as needed. Weeks for straightforward residential jobs. Months for complex commercial or heritage projects waiting on council approval. We monitor the props for any movement or fatigue throughout. Long-term propping (over 3 months) usually has load monitors installed to confirm the prop is still taking the design load.',
        },
        {
          question: 'Do you remove the props after permanent repairs?',
          answer:
            'Yes, removal is part of the job. The new permanent structure takes load gradually as the props are released in sequence per engineer drawing. Last prop comes out once engineer is satisfied the new structure is supporting the full load.',
        },
        {
          question: 'Can you prop a partially collapsed wall?',
          answer:
            'Yes. We stabilise what is left standing with shoring on both sides and bracing as needed. Engineer assesses what can be retained versus what needs demolition. Often more of the original wall can be saved than first appears.',
        },
        {
          question: 'How quickly can you respond?',
          answer:
            'For genuine structural emergencies, on site within 2 to 4 hours during business hours. After hours and weekend cover available for active emergencies. Minas direct: 0414 922 276. If someone is in immediate danger, call 000 first.',
        },
        {
          question: 'How is this different from regular construction propping?',
          answer:
            'Regular construction propping is planned in advance for known loads during a planned build. Emergency propping is reactive: figuring out the load on a partially failed structure, getting supports in fast, and adjusting as the engineer assesses. Different gear, different skills, different timeframes.',
        },
        {
          question: 'What does emergency structural support cost?',
          answer:
            'Initial call-out and propping for a typical residential emergency: 2500 to 8000 dollars. Larger commercial or strata emergencies with engineered temporary works design: 15,000 to 60,000 dollars. Ongoing prop hire is typically included in the initial cost for the expected duration. Most emergency works are covered by building insurance as part of the claim.',
        },
      ]}
    />
  );
};

export default EmergencyStructuralSupportPage;
