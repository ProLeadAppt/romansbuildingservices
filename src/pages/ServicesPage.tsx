import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { CollectionPageSchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { ProblemsLinksSection } from '@/components/ProblemsLinksSection';
import { RelatedLinksBlock } from '@/components/RelatedLinksBlock';
import { QuoteCTAButton } from '@/components/quote';
import {
  Hammer,
  Landmark,
  Building2,
  Wrench,
  Construction,
  Shovel,
  ClipboardCheck,
} from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Masonry',
    slug: 'masonry',
    description:
      'Stone, brick and block. Garden walls, retaining walls, chimneys, feature walls, repointing. New builds and repairs across Sydney.',
    bestFor:
      'Anyone with stonework, brick or block on their place that needs building, repairing or rebuilding.',
  },
  {
    icon: Landmark,
    title: 'Heritage Restoration',
    slug: 'heritage-restoration',
    description:
      'Restoring listed and period buildings using materials and methods matched to the original era. Federation, Victorian, Colonial sandstone, Art Deco, Inter-war.',
    bestFor:
      'Owners of heritage-listed homes, terraces and commercial buildings where the work has to be done to era.',
  },
  {
    icon: Building2,
    title: 'Building Restoration',
    slug: 'building-restoration',
    description:
      'Facade restoration, render repairs and interior masonry, with coordinated repair stages where several parts of a building need attention.',
    bestFor:
      'Strata buildings, commercial facades and homes needing a defined restoration scope, access planning and coordination between trades.',
  },
  {
    icon: Wrench,
    title: 'Structural Repairs',
    slug: 'structural-repairs',
    description:
      'Crack stitching, lintel replacement, load-bearing wall repairs, pier rebuilds. Engineered repairs where the wall is carrying weight.',
    bestFor:
      'Cracks in load-bearing walls, doors and windows that have gone out of square, walls that are bulging or moving.',
  },
  {
    icon: Construction,
    title: 'Concrete Repairs',
    slug: 'concrete-repairs',
    description:
      'Concrete cancer treatment, spalling repairs, protective coatings, render replacement. The fix-it work older buildings need.',
    bestFor:
      'Apartment blocks, balconies and any concrete structure where rust spots or chunks of concrete are coming off.',
  },
  {
    icon: Shovel,
    title: 'Foundation Repairs',
    slug: 'foundation-repairs',
    description:
      'Underpinning, restumping, foundation crack repairs, settlement stabilisation. Repairs below the ground floor to an assessed design and scope.',
    bestFor:
      'Homes that have settled or are still moving, especially older terraces and houses on clay soils.',
  },
  {
    icon: ClipboardCheck,
    title: 'Remedial Building',
    slug: 'remedial-building',
    description:
      'Strata defect repairs, defined compliance upgrade scopes and temporary support work, with engineering or specialist input where required.',
    bestFor:
      'Strata managers, building owners and insurance jobs where a defect report needs to turn into completed work.',
  },
];

const servicesFaqs = [
  {
    question: 'Which service do I need?',
    answer:
      "Tell us what you are seeing, when it appeared and whether it has changed. Photos taken safely can help plan the first assessment, but cannot establish structural safety or the cause of concealed damage. Include any existing reports and previous repair details.",
  },
  {
    question: 'Do you do residential and commercial?',
    answer:
      'We work with homeowners, strata managers and commercial property owners. The scope, access, safety planning and documentation depend on the project, so include the property type and any existing reports with your enquiry.',
  },
  {
    question: 'Can you handle a job that needs more than one of these services?',
    answer:
      'Several services can form part of one repair scope. Discuss the required trades, specialist design, approvals and inspection points before the work is priced. The quote should identify what Romans will undertake, what others will arrange and the sequence between them.',
  },
  {
    question: 'Are you licenced for structural work?',
    answer:
      'Ask for current licence and insurance details relevant to the proposed building scope. Structural assessment, design and certification require the appropriate professionals. We work with structural engineers and certifiers where the project requires their input.',
  },
  {
    question: 'What if my problem is not on this list?',
    answer:
      "Describe the affected part of the building and any immediate safety concerns. We can discuss whether it fits the building work offered here and what further assessment may be needed before a repair can be scoped.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Sydney Masonry, Heritage & Structural Repairs | Romans"
        description="Sydney masonry, heritage restoration, structural, concrete and foundation repair services by Minas Romanakis. Licenced and built for long-term results."
        canonical="/services"
      />
      <CollectionPageSchema
        name="Our Services"
        description="Masonry, heritage, structural, concrete, foundation and remedial building services from Romans Building Services across Sydney."
        url="https://romansbuildingservices.com/services"
        items={services.map((s) => ({
          name: s.title,
          url: `https://romansbuildingservices.com/services/${s.slug}`,
          description: s.description,
        }))}
      />
      <FAQSchema faqs={servicesFaqs} />

      <div className="min-h-screen font-body">
        {/* Hero Banner */}
        <section className="bg-navy texture-grain py-24">
          <div className="container mx-auto px-4 text-center">
            <h1
              className="font-heading text-4xl md:text-5xl text-white mb-4">
              Our Services
            </h1>
            <p
              className="text-white/80 text-lg max-w-2xl mx-auto">
              Masonry, restoration, and structural repairs. Whatever the job, the standard is the
              same.
            </p>
          </div>
        </section>

        {/* Lead essay */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto font-body text-text-muted space-y-5 text-base md:text-lg leading-relaxed">
            <p>
              The seven services below cover different parts of building repair and restoration.
              They can overlap: a facade repair may need masonry work, attention to water entry
              and structural advice. The assessment establishes which work is needed and who
              should be involved, rather than assuming every property needs the same package.
            </p>
            <p>
              Underneath all of it is masonry. That is what Minas trained in and that is what the
              business has been doing since 1995. Concrete, foundation and remedial work each have
              their own assessment and design requirements. A clear scope should identify
              responsibility for engineering, approvals, temporary support and inspection records,
              as well as the physical repair. Building work alone does not certify an entire property.
            </p>
            <p>
              Pick whichever heading below sounds closest to what you have. If you are not sure,
              skip to the questions further down the page or give us a ring.
            </p>
          </div>
        </section>

        {/* Services List */}
        <section className="bg-bg-light py-16 md:py-20 px-4">
          <div className="container mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-12 text-center">
              The seven services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.slug}
                  className="bg-white rounded-lg p-7 flex flex-col">
                  <div className="w-12 h-12 bg-navy/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-navy" />
                  </div>
                  <h3 className="font-heading text-xl text-text-primary mb-3">{service.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{service.description}</p>
                  <p className="text-text-muted text-sm leading-relaxed mb-5">
                    <span className="font-semibold text-navy">Best for: </span>
                    {service.bestFor}
                  </p>
                  <Link
                    to={`/services/${service.slug}`}
                    className="mt-auto text-navy font-semibold hover:text-navy-light transition-colors">
                    Learn more &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProblemsLinksSection
          heading="Got a problem? Here's what it might be."
          intro="Guides to visible masonry, concrete and structural warning signs, possible causes and what to discuss at an assessment."
          background="off-white"
        />

        <RelatedLinksBlock
          heading="Still deciding what page to read next?"
          intro="Read about repair options, check the service areas or explore project examples before discussing your property."
          items={[
            { label: 'Learn hub', href: '/learn', sublabel: 'Plain-English repair guides' },
            { label: 'Areas we service', href: '/areas', sublabel: 'Sydney suburbs and regions' },
            { label: 'Case studies', href: '/case-studies', sublabel: 'Proof from real jobs' },
            { label: 'Building problems', href: '/problems', sublabel: 'Warning signs and assessment guidance' },
            { label: 'Heritage hub', href: '/heritage', sublabel: 'Period materials and restoration guidance' },
            { label: 'About Romans', href: '/about', sublabel: 'The owner, the history and the crew' },
          ]}
          columns={3}
          background="white"
        />

        {/* FAQ */}
        <section className="bg-white py-16 md:py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 text-center">
              Questions before you call
            </h2>
            <p className="font-body text-text-muted text-center mb-12 max-w-2xl mx-auto">
              The stuff homeowners and strata managers ask before they pick up the phone.
            </p>
            <div className="space-y-4">
              {servicesFaqs.map((faq) => (
                <div key={faq.question} className="bg-bg-light p-6 rounded-md">
                  <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                  <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-bg-light py-16">
          <div className="container mx-auto px-4 text-center">
            <div>
              <h2 className="font-heading text-3xl text-text-primary mb-6">Need a quote?</h2>
              <QuoteCTAButton
                className="inline-block bg-amber text-white font-body font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity">
                Get in Touch
              </QuoteCTAButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
