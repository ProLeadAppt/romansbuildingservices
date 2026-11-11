import { SEO } from '@/components/SEO';
import { GalleryGrid } from '@/components/GalleryGrid';
import { projectGalleryImages } from '@/data/projectGallery';
import galleryVideo from '@/assets/videos/romansstone_1704887055_3277152517439331908_2394650725.mp4';
import { ImageGallerySchema, FAQSchema } from '@/components/LocalSEO/StructuredData';
import { Link } from 'react-router-dom';

const SITE_URL = 'https://romansbuildingservices.com';
const schemaImages = projectGalleryImages
  .filter((img) => img.featured)
  .slice(0, 20)
  .map((img) => ({
    url: img.full.startsWith('http') ? img.full : `${SITE_URL}${img.full}`,
    caption: img.alt,
  }));

const galleryFaqs = [
  {
    question: 'What does this gallery show?',
    answer:
      'This selection from the Romans photo archive shows masonry details, work in progress and visible finishes. Use it to explore ideas and discuss the needs of your property; photographs do not establish a repair specification.',
  },
  {
    question: 'How old is the work shown here?',
    answer:
      'The archive is not a dated list of current jobs. Dates and project histories have not been confirmed for these photographs. Ask about a particular image if its context matters to your plans.',
  },
  {
    question: 'Can you do work like this for me?',
    answer:
      'The gallery covers sandstone, heritage repointing, structural brickwork, garden walls, chimneys, seawalls and fireplaces. If something here resembles your plans, call 0414 922 276 to discuss the location, access and scope. Suitability depends on your property and any design or approval requirements.',
  },
  {
    question: 'Do you only work on big jobs?',
    answer:
      'No. Enquiries can cover a small repair or a larger masonry project. Scope, access, materials and the condition of the existing structure all affect the work and its cost.',
  },
  {
    question: 'How long does this kind of work take?',
    answer:
      'Timing depends on the condition of the masonry, access, materials, weather and any engineering or approval requirements. A photograph cannot establish a repair programme. Discuss the scope and current availability before making arrangements.',
  },
  {
    question: 'Where do you work?',
    answer:
      'Our current service focus is Hawkesbury and Western Sydney: North Richmond, Richmond, Kurmond, Kurrajong, Penrith, Windsor, Blacktown and surrounding areas. The gallery also preserves earlier Sydney projects.',
  },
];

// Captions describe visible features, not verified project histories.
const featuredProjects: Array<{ id: string; title: string; copy: string }> = [
  {
    id: 'romansstone_1572902412_2169985170382604428_2394650725',
    title: 'Stonework at the waterline',
    copy: 'Stone block walls beside the water, with a bridge in the background. For a seawall repair, the condition, exposure and structural requirements need assessment beyond what a photograph shows.',
  },
  {
    id: 'romansstone_1617135591_2541039971017938059_2394650725',
    title: 'Stonework above a roof',
    copy: 'Two people working around stone blocks above roof level. The image does not establish which materials were retained or replaced, or the repair specification.',
  },
  {
    id: 'romansstone_1610308835_2483772994075744932_2394650725',
    title: 'Stone-faced fireplace surround',
    copy: 'A textured stone face around a fireplace opening. Facing weight, backing, fixings and fireplace clearances need checking for each installation; a photograph does not confirm readiness for use.',
  },
  {
    id: 'romansstone_1466993917_1281560327394079553_2394650725',
    title: 'Stone wall detail',
    copy: 'A stone block wall with loose blocks above it and tools nearby. The building identity, repair method and material source are not confirmed here.',
  },
  {
    id: 'romansstone_1571599727_2159057455018301350_2394650725',
    title: 'Low garden wall',
    copy: 'A low stone wall beside a hedge and lawn, with a brick building behind it. The photo shows the visible finish, not the concealed construction or drainage.',
  },
  {
    id: 'romansstone_1545465691_1939829271515579573_2394650725',
    title: 'Paved garden path',
    copy: 'A paved path beside stone edging and a planted slope. Materials, bedding and drainage details need to be specified for the site rather than inferred from this view.',
  },
  {
    id: 'romansstone_1625099894_2607849386215395716_2394650725',
    title: 'Stone walls in a bathroom',
    copy: 'Textured stone walls around a bathroom basin and mirror. A stone sealer is not a substitute for wet-area waterproofing; the photograph does not identify any products used.',
  },
  {
    id: 'romansstone_1571801227_2160747763900813654_2394650725',
    title: 'Stone wall beside the water',
    copy: 'A close view of stone blocks and mortar joints, with water behind the wall. The stone source, building age and construction history are not confirmed here.',
  },
];

const featuredById = Object.fromEntries(projectGalleryImages.map((img) => [img.id, img]));

const GalleryPage = () => {
  return (
    <>
      <SEO
        title="Our Work | Real Sydney Masonry & Heritage Projects | Romans"
        description="Explore sandstone, heritage and structural masonry from the Romans photo archive, including earlier Sydney projects. Now focused on Hawkesbury and Western Sydney."
        canonical="/gallery"
        ogImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      />
      <ImageGallerySchema url={`${SITE_URL}/gallery`} images={schemaImages} />
      <FAQSchema faqs={galleryFaqs} />

      {/* Page header with video background */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
          className="absolute inset-0 w-full h-full object-cover">
          <source src={galleryVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/75" />
        <div
          className="relative z-10 text-center px-4 py-24">
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 text-shadow">
            See Our Work
          </h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            Masonry details, work in progress and earlier Sydney projects from the Romans archive.
          </p>
        </div>
      </section>

      {/* Intro essay */}
      <section className="py-16 md:py-20 px-4 bg-bg-light">
        <div className="max-w-3xl mx-auto font-body text-text-muted space-y-5 text-base md:text-lg leading-relaxed">
          <p>
            The gallery brings together masonry details, work in progress and completed work from
            the Romans photo archive. The featured notes describe visible features;
            photographs alone cannot establish the condition or repair needs of another property.
          </p>
          <p>
            Browse the stone finishes, joint patterns and construction details to find examples
            relevant to your plans. Earlier Sydney projects remain here alongside our current
            service focus in Hawkesbury and Western Sydney.
          </p>
          <p>
            If you see a project on this page that looks like what you need, call us on{' '}
            <a href="tel:0414922276" className="text-navy underline underline-offset-4">
              0414 922 276
            </a>{' '}
            and talk it through.
          </p>
        </div>
      </section>

      {/* What you're looking at - categories */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 text-center">
            What you are looking at
          </h2>
          <p className="font-body text-text-muted text-center mb-12 max-w-2xl mx-auto">
            The filters group photos by type of work and stage of completion. Use the filter on the grid below to jump to
            whichever one matches your project.
          </p>
          <div className="grid md:grid-cols-2 gap-6 font-body text-text-muted">
            <div className="bg-bg-light p-6 rounded-md">
              <h3 className="font-heading text-xl text-navy mb-2">Heritage</h3>
              <p className="leading-relaxed">
                Masonry details associated with older buildings. A photo cannot establish a
                heritage listing or building age. Check the property records and any conservation
                requirements before choosing materials or methods.
              </p>
            </div>
            <div className="bg-bg-light p-6 rounded-md">
              <h3 className="font-heading text-xl text-navy mb-2">Stonework</h3>
              <p className="leading-relaxed">
                Stone walls, steps, paving and architectural details. Appearance alone does not
                establish a stone type, quarry source or suitability for a repair. Compare materials
                and their properties with the requirements of the site.
              </p>
            </div>
            <div className="bg-bg-light p-6 rounded-md">
              <h3 className="font-heading text-xl text-navy mb-2">Structural</h3>
              <p className="leading-relaxed">
                Brickwork, openings and support details. A photograph does not establish structural
                capacity or compliance. Seek the relevant design and assessment, with{' '}
                <Link to="/services/structural-repairs" className="text-navy underline underline-offset-4">
                  AS 3700 masonry standards
                </Link>{' '}
                considered as part of the applicable design and specification.
              </p>
            </div>
            <div className="bg-bg-light p-6 rounded-md">
              <h3 className="font-heading text-xl text-navy mb-2">Concrete and remedial</h3>
              <p className="leading-relaxed">
                Concrete cancer, spalling, render replacement, waterproofing repairs. The fix-it
                work. Staining, loose finishes or exposed reinforcement can prompt an assessment,
                but the cause and extent of damage need to be checked before choosing a repair.
              </p>
            </div>
            <div className="bg-bg-light p-6 rounded-md md:col-span-2">
              <h3 className="font-heading text-xl text-navy mb-2">On the tools</h3>
              <p className="leading-relaxed">
                Photos of the work happening. Hands, mallets, chisels, mortar boards. Useful if you
                want to see how the work actually gets done rather than just the finished product.
                Tools visible in a photograph do not establish the full repair method or specification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-16 md:py-20 px-4 bg-navy texture-grain">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-3 text-center">
            A closer look at the photo archive
          </h2>
          <p className="font-body text-white/70 text-center mb-12 max-w-2xl mx-auto">
            Eight archive photographs with visual notes. Use them to compare finishes and details, not to infer project locations, dates, repair methods or outcomes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProjects.map((project) => {
              const img = featuredById[project.id];
              if (!img) return null;
              return (
                <article key={project.id} className="bg-white rounded-md overflow-hidden">
                  <img
                    src={img.thumb}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="font-heading text-lg text-navy mb-2">{project.title}</h3>
                    <p className="font-body text-sm text-text-muted leading-relaxed">
                      {project.copy}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-3 text-center">
            Browse the gallery
          </h2>
          <p className="font-body text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Filter by category or browse the lot. Click any image to open it full size.
          </p>
          <GalleryGrid images={projectGalleryImages} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 px-4 bg-bg-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl text-navy mb-10 text-center">
            Questions people ask about the work
          </h2>
          <div className="space-y-6">
            {galleryFaqs.map((faq) => (
              <div key={faq.question} className="bg-white p-6 rounded-md">
                <h3 className="font-heading text-lg text-navy mb-2">{faq.question}</h3>
                <p className="font-body text-text-muted leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center font-body text-text-muted">
            <p className="mb-4">Got a project in mind? Give Minas a call.</p>
            <a
              href="tel:0414922276"
              className="inline-block bg-navy text-white font-heading text-lg px-8 py-3 rounded-md hover:bg-navy/90 transition-colors">
              0414 922 276
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
