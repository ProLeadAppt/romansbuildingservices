import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { GalleryGrid } from '@/components/GalleryGrid';
import { galleryImages } from '@/data/galleryImages';
import galleryVideo from '@/assets/videos/romansstone_1704887055_3277152517439331908_2394650725.mp4';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Our Work | Real Projects, Real Craftsmanship | Romans Building Services</title>
        <meta
          name="description"
          content="Browse 30 years of masonry, heritage restoration, and structural repair projects across Sydney. Real photos from real job sites."
        />
      </Helmet>

      {/* Page header with video background */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={galleryVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy/75" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center px-4 py-24"
        >
          <h1 className="font-heading text-4xl md:text-5xl text-white mb-4 text-shadow">
            See Our Work
          </h1>
          <p className="font-body text-lg text-white/80 max-w-xl mx-auto">
            30 years of real projects across Sydney. Every photo is from an actual job site.
          </p>
        </motion.div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
