import { Link } from 'react-router-dom';
import { SEOHead } from '@/components/SEOHead';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { FAQSchema } from '@/components/LocalSEO/StructuredData';

const faqs = [
  {
    "question": "Can I paint over concrete cancer?",
    "answer": "Painting does not treat corroded reinforcement or restore damaged concrete. A coating may form part of an appropriate repair system after the underlying condition has been assessed."
  },
  {
    "question": "Is concrete cancer only a coastal problem?",
    "answer": "No. Marine exposure is one risk factor, but carbonation, moisture and other building conditions can also contribute. Inland buildings can be affected."
  },
  {
    "question": "Can it be diagnosed from a photo?",
    "answer": "Photos can help start an enquiry. They cannot establish the extent of hidden damage or confirm structural safety."
  },
  {
    "question": "Will a repair last a set number of years?",
    "answer": "That depends on the cause, the repair design, workmanship, exposure and ongoing maintenance. Ask about the proposed system and its specific terms; a general article cannot promise a fixed lifespan."
  },
  {
    "question": "Can Romans help with the next step?",
    "answer": "Romans works on concrete, masonry and remedial repairs. Describe the building, the visible issue and the suburb so the team can discuss whether a site assessment or another specialist is needed."
  }
];
const articleSchema = {
 '@context': 'https://schema.org', '@type': 'Article',
 headline: "What causes concrete cancer?",
 description: "Learn what causes concrete cancer, which signs need attention and what Sydney owners should ask before repairs. A clear guide from Romans Building Services.",
 url: 'https://romansbuildingservices.com/learn/concrete-cancer-sydney/',
 mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://romansbuildingservices.com/learn/concrete-cancer-sydney/' },
 dateModified: '2026-10-12',
 inLanguage: 'en-AU',
 author: { '@type': 'Organization', name: 'Romans Building Services', url: 'https://romansbuildingservices.com' },
 publisher: { '@type': 'Organization', name: 'Romans Building Services', logo: { '@type': 'ImageObject', url: 'https://romansbuildingservices.com/og-image.png' } },
 image: { '@type': 'ImageObject', url: 'https://romansbuildingservices.com/images/learn/concrete-cancer/concrete-cutaway-text-free-1536.webp', width: 1536, height: 1024, caption: "AI-generated educational cutaway showing how reinforcement corrosion can crack and spall concrete. Cover is partly removed to reveal the steel. Not to scale or a construction detail." },
};

export default function ConcreteCancerSydneyPage() {
 return <>
 <SEOHead title="What Causes Concrete Cancer? Sydney Guide | Romans" description="Learn what causes concrete cancer, which signs need attention and what Sydney owners should ask before repairs. A clear guide from Romans Building Services." canonical="/learn/concrete-cancer-sydney" ogType="article" ogImage="/images/learn/concrete-cancer/concrete-cutaway-text-free-1536.webp" schemaJson={articleSchema} />
 <BreadcrumbSchema items={[{label:'Home',href:'/'},{label:'Learn',href:'/learn'},{label:'Concrete cancer in Sydney',href:'/learn/concrete-cancer-sydney'}]} />
 <FAQSchema faqs={faqs} />
 <article aria-labelledby="concrete-guide-title">
 <header className="bg-navy px-5 pb-12 pt-28 text-white md:pb-16 md:pt-32">
 <div className="mx-auto max-w-4xl text-center"><p className="mb-4 font-body text-sm font-semibold uppercase tracking-[0.16em] text-amber">Learn / concrete repairs</p>
 <h1 id="concrete-guide-title" className="mb-5 font-heading text-4xl leading-tight md:text-5xl">What causes concrete cancer?</h1>
 <p className="mx-auto max-w-2xl font-body text-lg leading-8">{"A Sydney owner’s guide to rust stains, spalling concrete and the next step before repair."}</p>
 <p className="mt-5 font-body text-sm">Updated <time dateTime="2026-10-12">12 October 2026</time></p></div></header>
 <figure className="mx-auto my-8 max-w-6xl overflow-hidden rounded-xl border border-border bg-white md:my-12">
 <div className="relative aspect-[3/5] bg-navy md:aspect-[3/2]"><picture>
 <source media="(max-width: 767px)" type="image/avif" srcSet="/images/learn/concrete-cancer/romans-concrete-cancer-premium-mobile-540.avif 540w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-mobile-720.avif 720w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-mobile-1080.avif 1080w" sizes="100vw" width="1080" height="1800" />
 <source media="(max-width: 767px)" type="image/webp" srcSet="/images/learn/concrete-cancer/romans-concrete-cancer-premium-mobile-540.webp 540w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-mobile-720.webp 720w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-mobile-1080.webp 1080w" sizes="100vw" width="1080" height="1800" />
 <source type="image/avif" srcSet="/images/learn/concrete-cancer/romans-concrete-cancer-premium-desktop-900.avif 900w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-desktop-1350.avif 1350w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-desktop-1800.avif 1800w" sizes="(max-width: 1152px) 100vw, 1152px" width="1800" height="1200" />
 <source type="image/webp" srcSet="/images/learn/concrete-cancer/romans-concrete-cancer-premium-desktop-900.webp 900w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-desktop-1350.webp 1350w, /images/learn/concrete-cancer/romans-concrete-cancer-premium-desktop-1800.webp 1800w" sizes="(max-width: 1152px) 100vw, 1152px" width="1800" height="1200" />
 <img src="/images/learn/concrete-cancer/romans-concrete-cancer-premium-desktop-900.webp" alt="Educational cutaway illustration of a reinforcing bar, corrosion and cracking within a concrete specimen." width="1800" height="1200" fetchPriority="high" decoding="async" className="absolute inset-0 h-full w-full object-contain" />
 </picture></div>
 <figcaption className="px-5 py-5 font-body text-sm leading-6 text-text-muted md:px-8">{"AI-generated educational cutaway showing how reinforcement corrosion can crack and spall concrete. Cover is partly removed to reveal the steel. Not to scale or a construction detail."}<ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 font-semibold text-navy"><li>Steel can corrode</li><li>Rust can create pressure</li><li>Concrete can crack or spall</li></ul></figcaption></figure>
 <div className="mx-auto max-w-[68ch] px-5 pb-16 font-body text-lg leading-8 text-text-secondary [&_p]:mb-6 [&_h2]:mb-5 [&_h2]:mt-12 [&_h2]:scroll-mt-24 [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:leading-tight [&_h2]:text-navy [&_h3]:mb-3 [&_h3]:mt-8 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:text-navy [&_ul]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_a]:font-semibold [&_a]:text-navy [&_a]:underline [&_a]:underline-offset-4 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-navy">
<p>{"Concrete cancer is a common name for damage caused by corrosion of steel reinforcement inside concrete. Rust can occupy more space than the steel it replaces, creating pressure that cracks the surrounding concrete or causes pieces to break away, known as spalling."}</p>
<p>{"Common triggers include chlorides reaching the steel and carbonation reducing the concrete’s protective alkalinity. Moisture and oxygen allow corrosion to develop when the steel’s protection is compromised. A rust mark or photograph alone cannot establish the cause, extent of damage or structural safety."}</p>
<p>{"If concrete is loose or falling, keep people away from the affected area and arrange prompt professional advice. Do not stand beneath damaged balconies, parapets or concrete edges to inspect them."}</p>
<p>{"Need to discuss an affected area? "}<Link to="/contact/">{"Tell Romans what you have noticed"}</Link>{" or "}<a href="tel:0414922276">{"call Minas on 0414 922 276"}</a>{"."}</p>
<h2 id="what-allows-the-steel-inside-concrete-to-corrode">{"What allows the steel inside concrete to corrode?"}</h2>
<p>{"Concrete normally helps protect the reinforcing steel within it. That protection can be reduced by the conditions around the steel."}</p>
<h3>{"Chlorides"}</h3>
<p>{"Chlorides can enter concrete in marine environments and contribute to corrosion when they reach the reinforcement. This is one reason coastal exposure matters in an assessment. Distance from the water alone does not determine a building’s condition."}</p>
<h3>{"Carbonation"}</h3>
<p>{"Over time, carbon dioxide can react with the concrete and reduce its alkalinity. If that change reaches the reinforcement, the steel can become more vulnerable to corrosion."}</p>
<h3>{"Water entry and the building’s condition"}</h3>
<p>{"Cracks, failed joints, drainage problems or deteriorated waterproofing can contribute to wet conditions around an affected element. The depth and quality of concrete covering the steel also matter."}</p>
<p>{"A useful assessment considers these factors together. Simply covering a visible patch does not establish which conditions need to be addressed."}</p>
<p>{"The "}<a href="https://www.concrete.org/topicsinconcrete/topicdetail.aspx?search=concrete+corrosion">{"American Concrete Institute’s corrosion overview"}</a>{" explains how chlorides can affect the steel’s protection and how expanding corrosion products stress the surrounding concrete. "}<a href="https://www.concrete.org.uk/fingertips/carbonation-of-concrete/">{"The Concrete Society’s carbonation guide"}</a>{" explains the loss of alkalinity and the conditions in which corrosion becomes possible."}</p>
<h2 id="what-signs-should-an-owner-notice">{"What signs should an owner notice?"}</h2>
<p>{"Signs that deserve attention include:"}</p>
<ul><li>{"Rust-coloured staining from a concrete edge or crack"}</li><li>{"Flaking concrete or pieces breaking away"}</li><li>{"Exposed reinforcement"}</li><li>{"Cracking or bulging around an affected area"}</li><li>{"Damage that returns after a previous repair"}</li></ul>
<p>{"Peeling paint or a surface crack does not, by itself, confirm concrete cancer. Other causes are possible, and the condition behind the surface may differ from what is visible."}</p>
<p>{"Keep any observation to a safe position. Leave tapping, opening up and close inspection of suspect concrete to the people assessing it. NSW Government’s "}<a href="https://www.nsw.gov.au/housing-and-construction/building-or-renovating-a-home/after/safety-and-standards">{"building safety guidance"}</a>{" explains the need for regular inspection and maintenance of balconies, decks and railings."}</p>
<h2 id="is-spalling-the-same-as-concrete-cancer">{"Is spalling the same as concrete cancer?"}</h2>
<p>{"Spalling describes concrete breaking or flaking away. Corroding reinforcement is one possible cause, but the appearance of spalling does not establish the whole diagnosis."}</p>
<p>{"The practical question is what caused the damage in this particular location. A repair scope should follow that assessment rather than assuming every broken surface needs the same treatment."}</p>
<h2 id="what-should-i-do-first">{"What should I do first?"}</h2>
<h3>{"1. Take the immediate safety concern seriously"}</h3>
<p>{"If material is loose or falling, avoid the affected area and tell the building manager or responsible owner. Keep away from the area below it as well. If there is an immediate danger to people, contact emergency services."}</p>
<p>{"A building professional may need to arrange exclusion zones, temporary measures or engineering advice. Do not climb, chip away loose concrete or test the area yourself."}</p>
<h3>{"2. Record what you can safely see"}</h3>
<p>{"Useful information includes the suburb, the affected part of the building, when you first noticed the damage and whether it has changed. Photographs from a safe position can provide context."}</p>
<p>{"Mention known leaks, earlier repairs and any existing inspection reports. A wider photograph can be as useful as a close detail, but safety comes first."}</p>
<h3>{"3. Arrange the right assessment"}</h3>
<p>{"An inspection should help establish the extent of the affected concrete, the condition of the reinforcement and the likely causes. Some jobs need testing or a structural engineer before the repair can be specified."}</p>
<p>{"Ask what the proposed inspection includes, who will carry it out and whether there is a separate fee. An initial quote conversation and a detailed technical investigation may involve different work."}</p>
<p>{"For balconies and handrails, the "}<a href="https://www.cityofsydney.nsw.gov.au/guides/building-maintenance">{"City of Sydney recommends regular structural-engineer inspections"}</a>{"."}</p>
<h2 id="what-should-a-repair-plan-address">{"What should a repair plan address?"}</h2>
<p>{"A site-specific plan may involve removing unsound concrete, assessing and treating affected reinforcement, reinstating the concrete with suitable repair materials, and addressing relevant water-entry or protection issues."}</p>
<p>{"The details depend on the condition and engineering requirements. Ask the contractor to explain:"}</p>
<ul><li>{"How the extent of deterioration has been assessed"}</li><li>{"Which parts will be retained, repaired or replaced"}</li><li>{"Whether engineering design or further testing is needed"}</li><li>{"How access and safety around the building will be managed"}</li><li>{"What is proposed for relevant drainage, joints, waterproofing or protective finishes"}</li><li>{"How unexpected findings will be handled"}</li><li>{"What completion records and maintenance advice will be provided"}</li></ul>
<p>{"Romans provides "}<Link to="/services/concrete-repairs/">{"concrete repairs"}</Link>{", including work on damaged concrete and reinforcement. Where a structural element needs an engineer’s specification, that requirement should be established before the repair proceeds."}</p>
<h2 id="how-much-does-concrete-cancer-repair-cost">{"How much does concrete-cancer repair cost?"}</h2>
<p>{"A generic price cannot account for the differences between two buildings. Cost can be affected by the repair area and depth, reinforcement condition, access equipment, working height, waterproofing, protection for occupants and the finishes that need to be reinstated."}</p>
<p>{"A small visible patch may be part of a wider issue. Equally, a photograph cannot establish that a whole building needs the same repair. Ask for a written scope and clear assumptions, rather than comparing prices before the extent of work is understood."}</p>
<p>{"If you are seeking quotes, identify what is included, what is excluded and what may change after investigation. No price in a general article can replace a project-specific assessment."}</p>
<h2 id="what-if-i-live-in-a-strata-building">{"What if I live in a strata building?"}</h2>
<p>{"Tell the strata manager or committee about the damage and provide the location, photographs taken safely and any earlier reports. Responsibility depends on the affected element, the strata plan and any relevant by-laws."}</p>
<p>{"NSW Government explains the roles of owners and the owners corporation in its "}<a href="https://www.nsw.gov.au/housing-and-construction/strata/living/repairs-and-maintenance">{"strata repairs and maintenance guidance"}</a>{"."}</p>
<p>{"Before work is arranged, the responsible parties should establish who is authorising the investigation, how urgent safety measures will be handled and what approvals or specialist input the proposed work needs."}</p>
<h2 id="quick-answers">{"Quick answers"}</h2>
<h3>{"Can I paint over concrete cancer?"}</h3>
<p>{"Painting does not treat corroded reinforcement or restore damaged concrete. A coating may form part of an appropriate repair system after the underlying condition has been assessed."}</p>
<h3>{"Is concrete cancer only a coastal problem?"}</h3>
<p>{"No. Marine exposure is one risk factor, but carbonation, moisture and other building conditions can also contribute. Inland buildings can be affected."}</p>
<h3>{"Can it be diagnosed from a photo?"}</h3>
<p>{"Photos can help start an enquiry. They cannot establish the extent of hidden damage or confirm structural safety."}</p>
<h3>{"Will a repair last a set number of years?"}</h3>
<p>{"That depends on the cause, the repair design, workmanship, exposure and ongoing maintenance. Ask about the proposed system and its specific terms; a general article cannot promise a fixed lifespan."}</p>
<h3>{"Can Romans help with the next step?"}</h3>
<p>{"Romans works on concrete, masonry and remedial repairs. Describe the building, the visible issue and the suburb so the team can discuss whether a site assessment or another specialist is needed."}</p>
<h2 id="discuss-the-condition-before-choosing-the-repair">{"Discuss the condition before choosing the repair"}</h2>
<p>{"You do not need to diagnose the problem yourself. Share what you have noticed, any existing reports and photographs taken from a safe position."}</p>
<p>{""}<Link to="/contact/">{"Tell Romans about the repair"}</Link>{" or "}<a href="tel:0414922276">{"call Minas on 0414 922 276"}</a>{" to discuss your building and the next step."}</p>
<p>{"This guide provides general information. It does not determine the safety of a building or replace property-specific engineering advice."}</p>
 </div></article>
 <section aria-labelledby="related-reading" className="bg-bg-light px-5 py-12"><div className="mx-auto max-w-5xl"><h2 id="related-reading" className="mb-6 font-heading text-3xl text-navy">Related reading</h2><div className="grid gap-4 md:grid-cols-2">
 <Link to="/learn/masonry-vs-remedial-building" className="rounded-xl border border-border bg-white p-6 text-text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"><h3 className="mb-3 font-heading text-2xl text-navy">Masonry vs remedial building</h3><p>How masonry repairs and remedial building differ, and what to consider before choosing the next step.</p></Link>
 <Link to="/learn/repointing-signs" className="rounded-xl border border-border bg-white p-6 text-text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"><h3 className="mb-3 font-heading text-2xl text-navy">Signs you need repointing</h3><p>Common signs of worn mortar joints and the questions to ask before repointing.</p></Link>
 </div></div></section>
 </>;
}
