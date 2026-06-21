import { Link } from 'react-router-dom';
import { Layers, Home, Shield } from 'lucide-react';

const featuredServices = [
  {
    title: 'Heritage Restoration',
    description: 'Restoring heritage-listed buildings and period features across Sydney.',
    image: '/gallery/thumbs/romansstone_1572902412_2169985170382604428_2394650725.webp',
    link: '/services/heritage-restoration',
  },
  {
    title: 'Stone & Masonry',
    description: 'Walls, chimneys, feature stone, retaining walls. New builds, repairs, and remedial masonry.',
    image: '/gallery/thumbs/romansstone_1452415091_1159264269511646168_2394650725.webp',
    link: '/services/masonry',
  },
  {
    title: 'Structural Repairs',
    description: 'Crack stitching, lintel replacement, load-bearing wall repairs, and remediation.',
    image: '/gallery/thumbs/romansstone_1575487721_2191672319871916475_2394650725.webp',
    link: '/services/structural-repairs',
  },
];

const secondaryServices = [
  {
    icon: Layers,
    title: 'Repointing',
    description: 'Brick pointing, repointing, and mortar joint repairs.',
    link: '/services/masonry/repointing',
  },
  {
    icon: Home,
    title: 'Foundation Work',
    description: 'Underpinning, restumping, foundation crack repairs.',
    link: '/services/foundation-repairs',
  },
  {
    icon: Shield,
    title: 'Concrete & Remedial',
    description: 'Concrete cancer, spalling repairs, render replacement, and defect rectification.',
    link: '/services/concrete-repairs',
  },
];

export const InteractiveServicesSection = () => {
  return (
    <section className="bg-navy texture-grain py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading — left-aligned */}
        <div>
          <h2 className="font-heading text-3xl lg:text-4xl text-white">What We Do</h2>
          <span className="accent-line mt-4 mb-6" />
          <p className="font-body text-lg text-white/60 max-w-xl">
            Sydney masonry and remedial construction, plus restoration and structural repairs. 30 years of getting it right.
          </p>
        </div>

        {/* Featured services — large photo cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {featuredServices.map((service) => (
            <div
              key={service.title}
              className="relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent transition-opacity duration-700 group-hover:opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-body text-xl font-medium text-white">{service.title}</h3>
                <p className="font-body text-sm text-white/70 mt-1">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block text-white/60 hover:text-white text-sm mt-3 link-animated">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary services — compact horizontal cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {secondaryServices.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-lg p-5">
              <service.icon className="text-blue-bright w-6 h-6 mt-1 shrink-0" />
              <div>
                <h3 className="font-body text-base font-medium text-white">{service.title}</h3>
                <p className="font-body text-sm text-white/50 mt-1">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block text-white/50 hover:text-white text-sm mt-2 link-animated">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
