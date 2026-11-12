import { Link } from 'react-router-dom';
import { BreadcrumbSchema } from '@/components/LocalSEO/BreadcrumbSchema';
import { QuoteCTAButton } from '@/components/quote';
import { SEO } from '@/components/SEO';
import { getSuburbsForArea } from '@/data/suburbs';
import { hawkesburyResources } from '@/data/hawkesburyResources';
import { PlaceSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';

const enquiryNotes = [["North Richmond", "Photograph the wall and surrounding ground together. Note whether dampness follows rain and whether any nearby drainage or landscaping has changed; the suburb alone cannot establish the cause."], ["Richmond", "For older brick or sandstone, include close photographs of original joints and previous repairs. Tell us if the property is listed or in a conservation area so the assessment can account for material matching and any approvals."], ["Kurmond", "For a retaining wall or boundary structure, show both the damaged face and the ground it supports where safe. Include height, access restrictions and any signs of leaning; a repair scope may require engineering advice."], ["Kurrajong", "Explain the access to the affected wall: steps, slopes, gates and available working space. Ground-level photographs help plan an assessment without asking you to climb or approach unstable masonry."], ["Penrith", "For cracking around doors or windows, send a wide view and close views of the opening and joints. Note whether the crack is changing or the opening is sticking; an inspection is needed before choosing a repair method."], ["Windsor", "If a masonry repair concerns an older or heritage property, check its status with council and include any existing reports. A quote should distinguish retained original material from proposed replacement and specialist work."], ["Blacktown", "For brick, block or concrete damage, identify the element: house wall, garage, pier, retaining wall or shared building. Include safe access, occupancy and strata approval requirements where relevant."]];
const faqs = [{ question: 'Do photographs replace an inspection?', answer: 'No. Photographs help explain the enquiry, but an inspection or specialist input may be needed before the cause and appropriate scope can be established.' }, { question: 'How do I check whether a property is heritage-listed?', answer: 'Start with Hawkesbury City Council heritage information and the applicable planning records. Check the individual property and proposed work rather than assuming every property in a suburb has the same requirements.' }, { question: 'Which local areas do you serve?', answer: 'North Richmond, Richmond, Kurmond, Kurrajong, Penrith, Windsor, Blacktown and surrounding areas. Send your suburb and repair details to discuss assessment and availability.' }, { question: 'Can I visit a showroom or office?', answer: 'Romans is a service-area business. Contact Minas to discuss your property and arrange the next step; no public customer-visit address is advertised.' }];
const localGuides = getSuburbsForArea('/areas/hawkesbury-western-sydney');
export default function HawkesburyWesternSydneyPage() {
 return <>
 <SEO title="Hawkesbury & Western Sydney Masonry Repairs | Romans" description="Brick, sandstone and masonry repairs in North Richmond, Richmond, Kurmond, Kurrajong, Penrith, Windsor and Blacktown. Discuss your repair with Minas." canonical="/areas/hawkesbury-western-sydney" />
 <PlaceSchema name="Hawkesbury and Western Sydney" description="Service coverage for masonry and restoration enquiries." url="https://romansbuildingservices.com/areas/hawkesbury-western-sydney" />
 <FAQSchema faqs={faqs} />
 <BreadcrumbSchema items={[{label: "Home", href: "/"}, {label: "Service areas", href: "/areas"}, {label: "Hawkesbury & Western Sydney", href: "/areas/hawkesbury-western-sydney"}]} />
 <nav aria-label="Breadcrumb" className="bg-bg-light px-6 pb-4 pt-24 text-sm"><div className="craft-container flex flex-wrap gap-3"><Link to="/">Home</Link><span aria-hidden="true">/</span><Link to="/areas">Service areas</Link><span aria-hidden="true">/</span><span aria-current="page">Hawkesbury & Western Sydney</span></div></nav>
 <section className="bg-navy py-14"><div className="container mx-auto px-4 max-w-3xl"><h1 className="font-heading text-4xl text-white">Masonry repairs in Hawkesbury and Western Sydney</h1><p className="text-white/80 mt-6">Brick, sandstone, stone, block and concrete repairs for owners planning a careful assessment and a clear repair scope.</p></div></section>
 <section className="container mx-auto px-4 py-16 max-w-3xl font-body text-text-secondary space-y-8">
 <p>Romans Building Services is based in The Slopes, NSW and operates as a service-area business. Our focus is North Richmond, Richmond, Kurmond, Kurrajong, Penrith, Windsor, Blacktown and surrounding areas. Contact Minas with your suburb and photographs to discuss the practical next step.</p>
 <section aria-labelledby="local-guides-heading" className="space-y-5">
   <h2 id="local-guides-heading" className="font-heading text-2xl text-navy">Local repair enquiry guides</h2>
   <p>Explore property checks, useful records and council resources for these localities. Each guide helps you prepare an enquiry; it does not establish your property's condition or approval requirements.</p>
   <nav aria-label="Individual local repair guides" className="grid gap-3 sm:grid-cols-2">
     {localGuides.map((guide) => <Link key={guide.slug} to={`/suburbs/${guide.slug}`} className="inline-flex min-h-11 items-center rounded border border-border px-4 py-3 text-navy underline">{guide.name}</Link>)}
   </nav>
 </section>
 <nav aria-label="Local enquiry guidance" className="flex flex-wrap gap-2">{enquiryNotes.map(([name]) => <a key={name} className="inline-flex min-h-11 items-center rounded border border-border px-3 text-sm text-navy underline" href={`#${name.toLowerCase().replace(/ /g, '-')}`}>{name}</a>)}</nav>
 <h2 className="font-heading text-2xl text-navy">Prepare an enquiry for your property</h2>
 <p>Choose the information that fits your property and the damage you can see. Conditions vary from building to building; an assessment helps establish the appropriate scope.</p>
 {enquiryNotes.map(([name, note]) => <section key={name} id={name.toLowerCase().replace(/ /g, '-')}><h3 className="font-heading text-xl text-navy mb-3">{name}</h3><p>{note}</p></section>)}
 <section aria-labelledby="property-resources-heading" className="space-y-5">
   <h2 id="property-resources-heading" className="text-navy">Useful property checks in Hawkesbury</h2>
   <p>Use the resources that fit your proposed work. You do not need to obtain every report before making an enquiry. For properties outside Hawkesbury, including Penrith or Blacktown, confirm requirements with the relevant council.</p>
   {hawkesburyResources.map((resource) => <section key={resource.url} className="craft-card">
     <h3 className="text-xl text-navy">{resource.title}</h3>
     <p className="mt-4">{resource.description}</p>
     <a className="mt-4 inline-flex min-h-11 items-center text-navy underline" href={resource.url}>{resource.label}</a>
   </section>)}
 </section>
 <h2 className="font-heading text-2xl text-navy">Match the repair to the cause</h2>
 <p>Failed mortar, damaged stone, water entry and wall movement can require different work. An inspection may be needed before a final quote. Ask what an assessment includes and whether there is a fee; timing depends on access, scope and availability.</p>
 <div className="flex flex-wrap gap-5"><Link className="underline" to="/services/masonry">Masonry services</Link><Link className="underline" to="/learn/brick-sandstone-repair-quotes-hawkesbury">Prepare a repair quote enquiry</Link><Link className="underline" to="/contact">Discuss your repair</Link><Link className="underline" to="/areas">Existing Sydney area guides</Link></div>
 <QuoteCTAButton className="min-h-12 rounded bg-amber px-6 py-3 font-semibold text-navy">Discuss your property with Minas</QuoteCTAButton>
 {faqs.map(f => <section key={f.question}><h2 className="font-heading text-xl text-navy mb-3">{f.question}</h2><p>{f.answer}</p></section>)}
 </section></>;
}
