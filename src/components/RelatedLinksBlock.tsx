import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, type LucideIcon } from 'lucide-react';

export interface RelatedLink {
  label: string;
  href: string;
  sublabel?: string;
}

interface RelatedLinksBlockProps {
  heading: string;
  intro?: string;
  items: RelatedLink[];
  icon?: LucideIcon;
  columns?: 2 | 3 | 4;
  background?: 'white' | 'light' | 'off-white' | 'navy';
}

export const RelatedLinksBlock = ({
  heading,
  intro,
  items,
  icon: Icon,
  columns = 3,
  background = 'light',
}: RelatedLinksBlockProps) => {
  if (items.length === 0) return null;

  const bgClass =
    background === 'white'
      ? 'bg-white'
      : background === 'off-white'
        ? 'bg-bg-off-white'
        : background === 'navy'
          ? 'bg-navy text-white'
          : 'bg-bg-light';

  const gridClass =
    columns === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : columns === 4
        ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';

  const isDark = background === 'navy';

  return (
    <section className={`py-12 ${bgClass}`}>
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2
            className={`font-heading text-xl md:text-2xl ${isDark ? 'text-white' : 'text-navy'} mb-2`}
          >
            {heading}
          </h2>
          {intro && (
            <p
              className={`font-body text-sm ${isDark ? 'text-white/70' : 'text-text-secondary'} max-w-3xl`}
            >
              {intro}
            </p>
          )}
        </motion.div>

        <div className={`grid ${gridClass} gap-3`}>
          {items.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={item.href}
                className={`group flex items-start gap-3 rounded-lg px-4 py-3 shadow-premium hover:shadow-premium-lg transition-shadow h-full ${
                  isDark ? 'bg-white/10 hover:bg-white/15' : 'bg-white'
                }`}
              >
                {Icon && (
                  <Icon
                    className={`w-4 h-4 mt-1 shrink-0 ${isDark ? 'text-amber' : 'text-navy-light'}`}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <span
                    className={`font-body text-sm font-medium block ${
                      isDark ? 'text-white' : 'text-text-primary group-hover:text-navy'
                    } transition-colors`}
                  >
                    {item.label}
                  </span>
                  {item.sublabel && (
                    <span
                      className={`font-body text-xs ${isDark ? 'text-white/60' : 'text-text-muted'}`}
                    >
                      {item.sublabel}
                    </span>
                  )}
                </div>
                <ArrowRight
                  className={`w-4 h-4 mt-1 shrink-0 ${isDark ? 'text-white/60' : 'text-text-muted'} group-hover:translate-x-0.5 transition-transform`}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
