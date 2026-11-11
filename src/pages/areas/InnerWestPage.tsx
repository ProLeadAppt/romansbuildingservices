import { SEO } from '@/components/SEO';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { PlaceSchema, ServiceSchema } from '@/components/LocalSEO/StructuredData';
import { AreaSuburbsLinks } from '@/components/AreaSuburbsLinks';
import { AreaProblemLinks } from '@/components/AreaProblemLinks';
import { AreaServiceLinks } from '@/components/AreaServiceLinks';
import { QuoteCTAButton } from '@/components/quote';

const services = [
  'Terrace house brick restoration',
  'Heritage streetscape repairs',
  'Sandstone and tuckpointing',
  'Structural crack stitching',
  'Retaining wall repairs',
  'Mortar matching for period brickwork',
];

const InnerWestPage = () => (
  <>
    <SEO
      title="Inner West Masonry and Building Services | Romans"
      description="Masonry and restoration in Sydney's Inner West. Terrace houses, brick heritage, and retaining walls across Newtown, Balmain, and Strathfield."
      canonical="/areas/inner-west"
    />
    <PlaceSchema
      name="Inner West, Sydney"
      description="Terrace house brick restoration and heritage streetscape repairs across Sydney's Inner West."
      url="https://romansbuildingservices.com/areas/inner-west"
    />
    <ServiceSchema
      service="Masonry and Heritage Restoration — Inner West"
      description="Terrace house brick restoration, tuckpointing, heritage repointing and retaining wall repairs across Newtown, Marrickville, Leichhardt, Balmain and Strathfield."
      url="https://romansbuildingservices.com/areas/inner-west"
    />

    {/* Hero */}
    <section className="bg-navy py-24">
      <div className="container mx-auto px-4 text-center">
        <h1
          className="font-heading text-4xl md:text-5xl text-white mb-4">
          Inner West
        </h1>
        <p
          className="font-body text-white/70 max-w-xl mx-auto text-lg">
          Terrace houses, brick restoration and heritage streetscapes. Explore our existing Inner West service guide.
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div>
          <p className="font-body text-text-secondary mb-6">
            This existing Inner West guide remains available for enquiries about terraces, cottages, shopfronts and other masonry buildings. Include your suburb, photographs and a short description of the work when discussing scope and availability with Romans.
          </p>
          <p className="font-body text-text-secondary mb-6">
            On older brickwork, the existing material and joint condition guide repointing and restoration. Later paint, render and repairs can affect the options. Retain sound fabric where appropriate and agree any trial work, material match and finish before extending the repair.
          </p>
          <p className="font-body text-text-secondary mb-10">
            Party walls, narrow access and occupied neighbours can influence the work. Check the individual property’s heritage requirements with the relevant local authority. Structural concerns and significant original fabric may require engineering or heritage advice as part of the scope.
          </p>
        </div>

        {/* Services list */}
        <div>
          <h2 className="font-heading text-2xl text-navy mb-6">What we do in the Inner West</h2>
          <ul className="space-y-3 mb-12">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green mt-0.5 shrink-0" />
                <span className="font-body text-text-secondary">{s}</span>
              </li>
            ))}
          </ul>
        </div>

        <AreaSuburbsLinks parentAreaHref="/areas/inner-west" parentAreaName="Inner West" />

        {/* CTA */}
        <div>
          <QuoteCTAButton
            className="inline-flex items-center gap-2 bg-amber text-navy font-body font-bold px-8 py-4 rounded-lg hover:bg-amber/90 transition-colors">
            Get a quote for Inner West <ArrowRight className="w-4 h-4" />
          </QuoteCTAButton>
        </div>
      </div>
    </section>

    <AreaProblemLinks areaSlug="inner-west" />
    <AreaServiceLinks areaSlug="inner-west" />
  </>
);

export default InnerWestPage;
