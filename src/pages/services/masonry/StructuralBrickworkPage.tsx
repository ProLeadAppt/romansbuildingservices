import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Building2, ArrowUpFromLine, Columns3, ShieldCheck } from 'lucide-react';

const StructuralBrickworkPage = () => {
  const siblings = getSiblingServices('masonry', 'structural-brickwork');

  return (
    <ServicePageTemplate
      title="Structural Brickwork"
      metaTitle="Structural Brickwork Sydney | Load-Bearing Walls, Piers, Arches | Romans Building Services"
      metaDescription="Sydney structural brickwork by Minas Romanakis. Load-bearing walls, piers, arches, lintels. Engineered repairs, crack stitching, pier rebuilds. AS 3700 compliant."
      heroImage="/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp"
      parentService={{ title: 'Stonemasonry & Masonry', href: '/services/masonry' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Stonemasonry & Masonry', href: '/services/masonry' },
        { label: 'Structural Brickwork', href: '' },
      ]}
      intro={[
        'Structural brickwork carries the weight of the building. When it cracks, leans or fails, the building above it moves. Doors stop closing, ceilings start sagging, render cracks the same way every winter. We build, repair and reinforce load-bearing brick walls, piers, columns and arches across Sydney.',
        'We work from structural engineers drawings when the job calls for it. For most repairs the engineering is straightforward, for some it needs a full structural assessment first. Crack stitching with stainless helical rods, pier rebuilds, lintel replacements, full wall reconstructions, helibar reinforcement. The right repair depends on what is causing the failure.',
        'Romans holds a full NSW builders licence covering structural masonry. Minas is on site for any engineered work and we coordinate with the structural engineer through the build. All work signed off and to AS 3700.',
      ]}
      features={[
        {
          icon: Building2,
          title: 'Load-bearing walls',
          description:
            'New construction, repairs and rebuilds of failed sections. Double-brick walls, cavity walls, party walls and shared masonry. To AS 3700 with engineered design where required.',
        },
        {
          icon: Columns3,
          title: 'Piers and columns',
          description:
            'Brick piers and columns supporting verandahs, balconies, upper floors. Rebuilds of leaning piers, full replacement of failed piers, retrofit reinforcement with stainless ties.',
        },
        {
          icon: ArrowUpFromLine,
          title: 'Arches and lintels',
          description:
            'Brick arch construction and repair, steel angle lintel replacement, concrete lintels for heavier spans. Common on Federation and Victorian buildings where the original lintel has rusted.',
        },
        {
          icon: ShieldCheck,
          title: 'Engineered repairs',
          description:
            'We work with structural engineers on anything carrying significant load. Crack stitching, helibar reinforcement, stitching plates. All work meets BCA and AS 3700.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Stainless helical rods (Helifix or similar)',
          detail:
            'For crack stitching across structural brickwork. Cut into bed joints, set in epoxy-based grout, tied across the crack to redistribute load. Stainless so it lasts the life of the building.',
        },
        {
          title: 'Type S structural mortar',
          detail:
            'High-strength cement mortar for new load-bearing work. Mixed to the design strength required by the engineer (usually M3 or M4 to AS 3700). Tested with cube samples on bigger jobs.',
        },
        {
          title: 'Hot-dip galvanised lintels',
          detail:
            'Steel angle lintels for openings up to 2.4 metres. Hot-dip galv because painted steel rusts at the bedding face inside ten to fifteen years. Concrete lintels for longer spans.',
        },
        {
          title: 'Engineered stitch plates',
          detail:
            'Stainless steel plate stitches across major cracks where helical rod alone is not enough. Engineered, signed off, fully concealed under the next layer of mortar.',
        },
        {
          title: 'Temporary acrow propping',
          detail:
            'Adjustable steel props (acrow props) to take the weight off the wall while it is being repaired. Sized to the load above. Mandatory on any work that goes through a load-bearing wall.',
        },
        {
          title: 'Engineer involvement',
          detail:
            'For significant structural work, we coordinate with a structural engineer through the job. Scope of works, design certificates, site inspections during construction, completion certificate.',
        },
      ]}
      processSteps={[
        {
          step: 'Initial assessment',
          detail:
            'Site visit. We look at the cracking pattern, check whether the wall is load-bearing, look at what is above it. For visible failure we recommend a structural engineer come out and write a report before any repair starts.',
        },
        {
          step: 'Engineer scope (if required)',
          detail:
            'For anything more than minor crack stitching, the engineer writes a scope of works specifying the repair method. We quote off that scope. Most jobs need engineering. Some councils require it.',
        },
        {
          step: 'Propping and protection',
          detail:
            'Acrow props go in to take weight off the wall section being repaired. Adjacent floors and finishes are protected with sheeting. Dust extraction set up if we are cutting into masonry inside.',
        },
        {
          step: 'Cutting out and rebuilding',
          detail:
            'For full rebuilds, the failed section is cut out cleanly. New brick laid up course by course, bonded into the existing wall on each side. For crack stitching, helical rods set into bed joints across the crack.',
        },
        {
          step: 'Engineer site inspection',
          detail:
            'Before we close up the work, the engineer inspects on site to confirm the repair matches the scope. Sign-off documented for council and for any future buyer.',
        },
        {
          step: 'Reinstate and finish',
          detail:
            'Mortar joints pointed to match the original wall. Render or paint reinstated. Props removed in sequence as the wall takes load again. Completion certificate issued.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if my brickwork is structural?',
          answer:
            'If removing the wall would affect what is above it, it is structural. Double-brick walls, walls running from foundation to roof, walls supporting beams or floor joists are usually load-bearing. Single-skin partition walls between rooms are usually not. We can tell you definitively on a site visit.',
        },
        {
          question: 'Can cracked structural brickwork be repaired?',
          answer:
            'Most of the time, yes. Helical stainless rod stitching is the standard repair for active cracks and works on most cases. For severe damage where bricks have crushed or the wall is leaning, we cut out and rebuild the failed section. Whichever is right depends on what is causing the crack.',
        },
        {
          question: 'Do I need an engineer for structural brickwork?',
          answer:
            'For significant structural work, yes. We coordinate with structural engineers regularly and can arrange that as part of the job. Council usually requires engineer certification for anything that changes the load path. The engineer fee is usually 1500 to 4000 dollars depending on scope.',
        },
        {
          question: 'What causes structural cracking in brick walls?',
          answer:
            'Most common causes in Sydney are foundation movement on clay soils, rusted steel lintels above doors and windows, failed wall ties in cavity walls, and overloaded piers. The crack pattern tells you which one. Diagonal stepped cracks usually mean settlement. Horizontal cracks at lintel height mean lintel failure. We diagnose before we quote.',
        },
        {
          question: 'How long does a structural brickwork repair take?',
          answer:
            'Crack stitching is one to three days depending on length. A pier rebuild is two to five days. A full wall section reconstruction is one to three weeks including engineering and council sign-off. We give a real timeline with the quote.',
        },
        {
          question: 'Do you give a structural warranty?',
          answer:
            'Yes. Six years on structural work under the NSW Home Building Act. The engineering certificate stays with the property and gives any future buyer or insurer evidence that the repair was done to spec.',
        },
      ]}
    />
  );
};

export default StructuralBrickworkPage;
