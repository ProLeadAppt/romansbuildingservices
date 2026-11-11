import { selectArchiveImages } from '@/data/projectGallery';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const galleryImages = selectArchiveImages([
  'romansstone_1572902412_2169985170382604428_2394650725',
  'romansstone_1452415091_1159264269511646168_2394650725',
  'romansstone_1575487721_2191672319871916475_2394650725',
  'romansstone_1576003161_2195996136622601152_2394650725',
  'romansstone_1575057672_2188064802893944247_2394650725',
  'romansstone_1570002705_2145660669121556728_2394650725',
  'romansstone_1700556302_3240823616257706375_2394650725',
  'romansstone_1451642255_1152781246863726646_2394650725',
  'romansstone_1569273163_2139540821744323162_2394650725',
  'romansstone_1451942270_1155297957273885284_2394650725',
]);

export const ProjectGallerySection = () => {
  return (
    <section className="bg-bg-light py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-10">
        <div>
          <h2 className="font-heading text-3xl text-text-primary">Our Work</h2>
          <p className="font-body text-base text-text-muted mt-2">
            Stonework, brickwork and other details from the photo archive.
          </p>
        </div>

        <div>
          <Link
            to="/gallery"
            className="link-animated text-navy font-body font-medium inline-flex items-center gap-2 hover:text-navy-light transition">
            View Photo Archive
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Full-bleed horizontal carousel */}
      <div
        className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 px-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}>
              <Link
                to="/gallery"
                className="flex-shrink-0 w-[300px] md:w-[380px] aspect-[3/4] rounded-xl overflow-hidden relative group cursor-pointer block">
                <img
                  src={image.thumb}
                  alt={image.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-body text-sm text-white inline-flex items-center gap-2">
                    View Photo
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
