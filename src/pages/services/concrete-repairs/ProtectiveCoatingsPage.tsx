import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Droplets, Sun, SprayCan, ShieldCheck, Building } from 'lucide-react';

const ProtectiveCoatingsPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'protective-coatings');

  return (
    <ServicePageTemplate
      title="Protective Stone Coatings"
      metaTitle="Protective Coatings Sydney | Romans"
      metaDescription="Sydney protective coatings by Minas Romanakis. Silane water repellents, anti-carbonation, anti-graffiti, heritage-breathable. Stone, brick, concrete and render."
      heroImage="/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Protective Stone Coatings', href: '' },
      ]}
      intro={[
        'A good protective coating extends the life of stone, brick, render or concrete by decades. Water repellents stop rain from soaking into porous masonry. Anti-carbonation coatings slow the chemical degradation of concrete. Anti-graffiti coatings make tags clean off easily. UV-stable systems stop solar degradation. Heritage-breathable coatings protect old masonry without trapping moisture inside it. Choose the right product for the substrate and exposure and the coating saves you ten or twenty times its cost in deferred repairs.',
        'The wrong coating does the opposite. Modern urethane or acrylic sealers on heritage sandstone trap moisture inside the stone and the face spalls off within five years. Anti-carbonation coatings without breathability on lime render cause render delamination. Silane impregnations on already-water-saturated concrete just seal in the problem. We pick the coating based on the substrate, the exposure, and the building condition, not by what is cheapest or quickest to apply.',
        'We apply protective coatings as part of bigger restoration jobs (almost every facade restoration finishes with a protective coating system) and as standalone preventive work. Heritage sandstone facades, harbour seawalls, concrete carpark soffits, render facades, anti-graffiti for commercial walls. Each one needs a different system.',
      ]}
      features={[
        {
          icon: Droplets,
          title: 'Water repellents',
          description:
            'Silane and siloxane impregnations that penetrate the substrate and chemically bond to it. Repels water but lets moisture vapour out. Invisible finish.',
        },
        {
          icon: Sun,
          title: 'Anti-carbonation',
          description:
            'Two-coat acrylic or silicate elastomeric coatings that block CO2 ingress into concrete. Slows the carbonation that causes concrete cancer. 15 to 20 year warranty from manufacturer.',
        },
        {
          icon: SprayCan,
          title: 'Anti-graffiti',
          description:
            'Sacrificial wax coatings for heritage (clean off with hot water and reapply). Permanent silicone-based coatings for commercial walls. Graffiti wipes off without damaging the substrate.',
        },
        {
          icon: ShieldCheck,
          title: 'Salt and chemical resistance',
          description:
            'For coastal and industrial exposure. Resists chloride salt attack, acid rain, occasional chemical splash. Critical on harbour seawalls and coastal buildings.',
        },
        {
          icon: Building,
          title: 'Heritage breathable',
          description:
            'Approved by heritage consultants for use on listed buildings. Silane-based or mineral silicate paints (eg Keim). Never urethane or epoxy on heritage masonry.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Silane water repellent impregnations',
          detail:
            'Penetrating silane (eg Sika Sikagard, BASF MasterProtect H 303) that reacts chemically with the substrate. Forms a hydrophobic layer 5 to 10mm deep. Repels water but is fully vapour-permeable. Invisible. Standard for heritage stone.',
        },
        {
          title: 'Anti-carbonation coatings',
          detail:
            'Two-coat acrylic or silicate elastomeric coating systems (eg Sika Sikagard, Mapei Mapelastic, BASF MasterProtect). 200 to 300 micron DFT. Blocks CO2 ingress while remaining breathable to water vapour. 15 to 20 year manufacturer warranty.',
        },
        {
          title: 'Mineral silicate paint (heritage)',
          detail:
            'Keim mineral silicate paint. Chemically bonds to mineral substrates (lime render, stone, brick). Fully breathable, UV-stable, 30+ year life. Approved for heritage use.',
        },
        {
          title: 'Sacrificial anti-graffiti wax',
          detail:
            'Water-based wax coating for heritage stone or sensitive masonry. Sacrificial layer is removed with hot water when graffiti is cleaned, then reapplied. Does not change appearance of substrate.',
        },
        {
          title: 'Permanent silicone anti-graffiti',
          detail:
            'Silicone-based coating for commercial walls where the substrate is not heritage-sensitive. Graffiti wipes off with solvent without damaging the coating. 5 to 10 year service life.',
        },
        {
          title: 'Test patches before bulk application',
          detail:
            'Every coating system is tested on a small inconspicuous patch first. Substrate condition, application technique, finished appearance all checked. Heritage consultant signs off on listed buildings.',
        },
      ]}
      processSteps={[
        {
          step: 'Substrate assessment',
          detail:
            'On-site inspection. Substrate type (sandstone, brick, render, concrete), exposure (coastal, urban, sheltered), existing condition (clean, stained, painted), and intended outcome (water repellence, anti-carbonation, anti-graffiti) all assessed. Coating recommended.',
        },
        {
          step: 'Test patch',
          detail:
            'Sample patch applied to inconspicuous area. Cure for a week. Assess appearance, water repellency, breathability. Heritage consultant or owner signs off before bulk application.',
        },
        {
          step: 'Substrate preparation',
          detail:
            'Substrate cleaned of dirt, biological growth, soluble salts. Loose material removed. Any defects repaired before coating. Substrate must be fully dry for most coatings (silane, urethane). Some coatings tolerate damp substrate (silicate paints).',
        },
        {
          step: 'Apply coating',
          detail:
            'Coating applied per manufacturer instruction. Spray, brush or roller depending on system. Two coats for anti-carbonation and silicate paints. Saturation application for silane impregnations.',
        },
        {
          step: 'Cure',
          detail:
            'Cure time depends on system. Silanes are tack-free in hours and fully cured in days. Anti-carbonation coatings cure in 24 to 72 hours. Silicate paints cure in 24 hours. Substrate protected from rain during cure.',
        },
        {
          step: 'Documentation and warranty',
          detail:
            'Product specifications, batch numbers, application dates documented. Manufacturer warranty registered. Photos before and after for the property file. Maintenance schedule provided.',
        },
      ]}
      faqs={[
        {
          question: 'Do protective coatings change the look of the stone?',
          answer:
            'Most penetrating coatings (silane, silicate) are completely invisible once cured. Surface-applied coatings (anti-carbonation, decorative) change appearance slightly: some darken the substrate, some add a subtle satin sheen, some are pigmented to match. We always do a test patch so you can see the finished appearance before bulk application.',
        },
        {
          question: 'How often do coatings need to be reapplied?',
          answer:
            'Depends on the coating. Silane water repellents typically last 10 to 15 years before re-application. Anti-carbonation coatings last 15 to 20 years with manufacturer warranty. Mineral silicate paints last 30 plus years. Sacrificial anti-graffiti waxes need reapplication after each cleaning. Permanent anti-graffiti silicone lasts 5 to 10 years.',
        },
        {
          question: 'Can you coat heritage sandstone?',
          answer:
            'Yes, but only with breathable products. Silane or siloxane water repellents are the standard for heritage stone. Penetrate into the stone, repel water, fully vapour-permeable, invisible. Never urethane or epoxy coatings on heritage stone, they trap moisture and the stone face spalls within five years. Heritage consultants sign off on coating products before application.',
        },
        {
          question: 'What does anti-carbonation coating do?',
          answer:
            'Carbonation is the chemical process where atmospheric CO2 slowly reacts with the alkaline calcium hydroxide in concrete, lowering pH and removing the chemical protection of embedded steel. Anti-carbonation coatings block CO2 from penetrating the concrete surface. The substrate stays alkaline, the steel stays passive, and concrete cancer is delayed by decades.',
        },
        {
          question: 'How long does coating application take?',
          answer:
            'A small heritage facade is two to four days including cleaning, prep and two coats with curing in between. A large commercial building or carpark is one to four weeks. Most coatings need 24 to 48 hours between coats and protection from rain during cure. Wet weather extends timelines.',
        },
        {
          question: 'What does protective coating cost?',
          answer:
            'Silane water repellent on stone or brick is around 25 to 50 dollars per square metre. Anti-carbonation coating system on concrete or render is 60 to 120 dollars per square metre including two coats. Sacrificial anti-graffiti wax is 35 to 60 dollars per square metre. Permanent silicone anti-graffiti is 50 to 90 dollars per square metre. Fixed quote after site assessment.',
        },
      ]}
    />
  );
};

export default ProtectiveCoatingsPage;
