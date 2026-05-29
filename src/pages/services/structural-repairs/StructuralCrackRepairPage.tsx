import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Syringe, Layers, ShieldCheck, FileCheck } from 'lucide-react';

const StructuralCrackRepairPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'structural-crack-repair');
  return (
    <ServicePageTemplate
      title="Structural Crack Repair"
      metaTitle="Structural Crack Repair Sydney | Romans"
      metaDescription="Sydney structural crack repair by Minas Romanakis. Helical stitching, epoxy injection, resin grouting. Diagnose the cause, fix it properly. Engineer signed off."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Structural Crack Repair', href: '' },
      ]}
      intro={[
        'Most cracks are not structural. Hairline cracks in render, settlement cracks under a metre wide, cracks around door and window openings, cracks following the wall ties on cavity work, most of these are cosmetic and only need filling. Structural cracks are different. They run diagonally, they step through the mortar joints, they keep growing year on year, and they often appear on both sides of a wall. Diagonal stepped cracks usually mean foundation movement. Horizontal cracks at lintel height mean a lintel has rusted and expanded.',
        'Diagnosing what is causing the crack matters more than the repair itself. Stitch the crack without addressing the cause and the crack comes back two metres along the wall. We assess the cause first. Foundation movement (drainage, tree roots, clay heave), lintel failure, wall tie failure, overloading, thermal movement. Each one has a different fix.',
        'Repair methods include helical stainless rod stitching, epoxy injection, flexible resin grouting, helibar reinforcement, and full section rebuild for cracks that are beyond stitching. We use whichever method matches the crack type and what is causing it. Engineer signed off on anything significant. Most cracks we deal with are in residential terraces and houses across Sydney.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Crack diagnosis',
          description:
            'On-site assessment. Crack pattern, width, location, whether it runs through brick or follows mortar joints. Identification of the underlying cause. Active or settled.',
        },
        {
          icon: Syringe,
          title: 'Epoxy injection',
          description:
            'For hairline structural cracks in concrete or masonry that have stabilised. Two-part epoxy injected under pressure restores full structural capacity. Common on concrete beams and slabs.',
        },
        {
          icon: Layers,
          title: 'Helical rod stitching',
          description:
            'Stainless helical rods set into bed joints across the crack, bonded in grout. Distributes load across the wall and prevents the crack reopening. Industry standard for masonry crack repair.',
        },
        {
          icon: ShieldCheck,
          title: 'Flexible resin grouting',
          description:
            'For cracks where some ongoing minor movement is expected. Flexible polyurethane resin seals the crack while allowing it to flex without opening up again. Used on settlement cracks.',
        },
        {
          icon: FileCheck,
          title: 'Crack monitoring',
          description:
            'For active cracks where the movement is ongoing, we install Avongard or Tell-Tale crack monitors before repair. Three to six months of monitoring confirms whether the crack has stabilised before repair.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Helifix or similar helical rod systems',
          detail:
            '6mm to 10mm stainless steel helical rod. Cut into bed joints 30 to 60mm deep with diamond blade. Bonded in proprietary grout. Standard repair for masonry cracks since the 1990s. Concealed under new pointing.',
        },
        {
          title: 'Two-part structural epoxy',
          detail:
            'Low-viscosity epoxy for hairline cracks. Injected at low pressure through ports drilled along the crack. Cures rapidly to full structural strength. Used on concrete beams, slabs and tight masonry cracks.',
        },
        {
          title: 'Polyurethane flexible resin',
          detail:
            'Two-part flexible polyurethane grout. Stays elastic after curing, so the crack can move slightly without re-opening. Used on settlement cracks where some ongoing movement is expected.',
        },
        {
          title: 'Crack monitors (Avongard, Tell-Tale)',
          detail:
            'Two-piece transparent plastic monitor screwed across the crack. Calibrated grid shows movement in millimetres. Installed for 3 to 6 months before any repair to confirm the crack is stable.',
        },
        {
          title: 'Diamond blade saws',
          detail:
            'For cutting bed joint slots accurately to depth without damaging surrounding brick. Dust extraction attached. Hand chasing only on heritage where blade marks would be visible.',
        },
        {
          title: 'Engineer scope on anything significant',
          detail:
            'Structural engineer specifies repair method, rod spacing, injection pressure and protocol for anything beyond minor cracking. Engineer signs off on completion.',
        },
      ]}
      processSteps={[
        {
          step: 'Site visit and diagnosis',
          detail:
            'On-site inspection. Crack pattern photographed and measured. Width measured at multiple points. We check whether the crack runs through brick or follows joints, and what is around it (door frame, lintel, retaining wall behind).',
        },
        {
          step: 'Address the underlying cause first',
          detail:
            'For foundation movement we look at drainage and trees. For lintel failure we replace the lintel before stitching. For wall tie failure we install new ties first. Stitching without fixing the cause is wasted work.',
        },
        {
          step: 'Monitor if needed',
          detail:
            'For cracks that appear active, monitors go on for 3 to 6 months. We come back to read them. If movement is still significant, we extend the cause investigation. If stable, we proceed with repair.',
        },
        {
          step: 'Method selection',
          detail:
            'Method matches the crack. Active settlement cracks get flexible polyurethane. Stable masonry cracks get helical stitching. Hairline cracks in concrete get epoxy injection. Wider settled cracks get stitching plus full repointing of the crack itself.',
        },
        {
          step: 'Execute the repair',
          detail:
            'For stitching: bed joints raked out, rods set in grout, joints repointed. For epoxy: ports drilled, crack edges sealed, epoxy injected at low pressure until refusal. For flexible resin: similar to epoxy but with elastomeric grout. Engineer inspects on the bigger jobs.',
        },
        {
          step: 'Document and reinstate',
          detail:
            'Photos and engineer certificate stay with the property file. Render and paint reinstated. We come back six months later on monitored jobs to check the crack has not reopened.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if a crack is structural?',
          answer:
            'Cracks wider than 2mm, cracks that step through mortar joints diagonally, cracks that appear on both sides of a wall, cracks that keep getting wider each year. Horizontal cracks in retaining walls. Cracks that opened up after a hot dry summer or heavy rain. If any of these match, get it assessed. Cosmetic cracks are usually under 0.5mm, in one direction only, and stable over time.',
        },
        {
          question: 'Will the crack come back after repair?',
          answer:
            'Not if the underlying cause is dealt with. Settlement from poor drainage, foundation movement from tree roots, lintel rust pushing brick up, wall ties failing in cavity construction. Fix the cause and the repair holds. Stitch the crack without addressing the cause and a new crack opens up two metres along the wall within a year or two.',
        },
        {
          question: 'What is crack stitching exactly?',
          answer:
            'Stainless steel helical rods are bedded into horizontal slots cut into the mortar joints across the crack line. Bonded in grout. The rods tie the wall back together and redistribute load so the crack does not reopen. Typical installation is rods at 450mm vertical spacing, extending 500mm either side of the crack. Concealed under new pointing.',
        },
        {
          question: 'Can you fix cracks in concrete the same way?',
          answer:
            'Different method. Concrete cracks get epoxy injection rather than stitching. Two-part low-viscosity epoxy is injected through ports drilled along the crack. The epoxy penetrates the full depth of the crack and cures to higher strength than the surrounding concrete. The crack becomes structurally re-integrated.',
        },
        {
          question: 'How long does crack repair take?',
          answer:
            'A 2 metre stitched crack is one to two days. A 5 metre crack is two to four days. Epoxy injection is similar timeframe per metre. Engineer scope and crack monitoring add weeks at the front for significant cracks.',
        },
        {
          question: 'What does crack repair cost?',
          answer:
            'Helical stitching is 250 to 500 dollars per linear metre of crack. Epoxy injection is 300 to 600 dollars per linear metre. Flexible resin grouting is similar. Engineer report and monitoring add 1500 to 3500 dollars at the start for significant cracks. Fixed quote after site visit.',
        },
      ]}
    />
  );
};
export default StructuralCrackRepairPage;
