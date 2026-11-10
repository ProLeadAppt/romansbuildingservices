import { SEO } from '@/components/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceSchema, ServiceSchema } from '@/components/LocalSEO/StructuredData';
import { AreaSuburbsLinks } from '@/components/AreaSuburbsLinks';
import { AreaProblemLinks } from '@/components/AreaProblemLinks';
import { AreaServiceLinks } from '@/components/AreaServiceLinks';
import { QuoteCTAButton } from '@/components/quote';

const services = [
  'Residential masonry repairs',
  'Heritage and federation home restoration',
  'Sandstone repointing and conservation',
  'Structural crack stitching',
  'Retaining wall repairs',
  'Brick replacement and mortar matching',
];

const NorthShorePage = () => (
  <>
    <SEO
      title="North Shore Masonry and Building Services | Romans"
      description="Masonry and heritage work across Sydney's North Shore. Mosman, Neutral Bay, Lane Cove, and Chatswood. Licenced and insured since 1995."
      canonical="/areas/north-shore"
    />
    <PlaceSchema
      name="North Shore, Sydney"
      description="Residential masonry, heritage homes and federation-era repairs across Sydney's North Shore."
      url="https://romansbuildingservices.com/areas/north-shore"
    />
    <ServiceSchema
      service="Masonry and Heritage Restoration — North Shore"
      description="Residential masonry repairs, heritage home restoration, sandstone repointing and structural work across Mosman, Neutral Bay, Cremorne, Chatswood and Lane Cove."
      url="https://romansbuildingservices.com/areas/north-shore"
    />

    {/* Hero */}
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="font-heading text-4xl md:text-5xl text-white mb-4">
          North Shore
        </h1>
        <p
          className="font-body text-white/70 max-w-xl mx-auto text-lg">
          Residential masonry, heritage homes and federation-era repairs across the North Shore.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div>
          <p className="font-body text-text-secondary mb-6">
            North Shore enquiries can range from a masonry detail at a Mosman house to a larger repair in a Chatswood or Lane Cove building. Identify what needs attention, whether it carries load or retains ground, and whether people pass beneath it.
          </p>
          <p className="font-body text-text-secondary mb-6">
            For older fabric, surviving joints, stone details and previous alterations help inform the repair. Drainage and exposure need consideration at the actual site. A regional description cannot establish the ground conditions, heritage status or correct treatment.
          </p>
          <p className="font-body text-text-secondary mb-10">
            Share photographs taken safely and any earlier reports when contacting Romans. Discuss the next assessment step, engineering or heritage input, practical access and availability before work is arranged.
          </p>
        </div>

        {/* Services list */}
        <div>
          <h2 className="font-heading text-2xl text-navy mb-6">What we do on the North Shore</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <AreaSuburbsLinks parentAreaHref="/areas/north-shore" parentAreaName="North Shore" />

        {/* CTA */}
        <div>
          <QuoteCTAButton
            className="inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors">
            Get a quote for North Shore <ArrowRight className="w-4 h-4" />
          </QuoteCTAButton>
        </div>
      </div>
    </section>

    <AreaProblemLinks areaSlug="north-shore" />
    <AreaServiceLinks areaSlug="north-shore" />
  </>
);

export default NorthShorePage;
