import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer, premiumEase } from '@/utils/animations';

const galleryImages = [
  {
    src: '/gallery/thumbs/romansstone_1572902412_2169985170382604428_2394650725.webp',
    alt: 'Heritage sandstone seawall with Sydney Harbour Bridge',
  },
  {
    src: '/gallery/thumbs/romansstone_1452415091_1159264269511646168_2394650725.webp',
    alt: 'Stone block wall with fresh mortar joints',
  },
  {
    src: '/gallery/thumbs/romansstone_1575487721_2191672319871916475_2394650725.webp',
    alt: 'Steel beam installation for structural support',
  },
  {
    src: '/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp',
    alt: 'Stone wall rebuild',
  },
  {
    src: '/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp',
    alt: 'Concrete cancer repair on residential building',
  },
  {
    src: '/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp',
    alt: 'Rendered wall restoration',
  },
  {
    src: '/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp',
    alt: 'Foundation underpinning project',
  },
  {
    src: '/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp',
    alt: 'Tuckpointing and repointing brickwork',
  },
  {
    src: '/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp',
    alt: 'Remedial building work in progress',
  },
  {
    src: '/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp',
    alt: 'Professional masonry craftsmanship',
  },
];

const cardVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: premiumEase, delay: i * 0.08 },
  }),
};

export const ProjectGallerySection = () => {
  return (
    <section className="bg-bg-light py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl text-text-primary">Our Work</h2>
          <p className="font-body text-base text-text-muted mt-2">
            Real projects. Real craftsmanship. No stock photos.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/gallery"
            className="link-animated text-navy font-body font-medium inline-flex items-center gap-2 hover:text-navy-light transition"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Full-bleed horizontal carousel */}
      <motion.div
        className="overflow-x-auto scrollbar-hide"
        variants={staggerContainer(0.08, 0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        <div className="flex gap-5 px-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              viewport={{ once: true }}
            >
              <Link
                to="/gallery"
                className="flex-shrink-0 w-[300px] md:w-[380px] aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer block"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-sm text-white inline-flex items-center gap-2">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
