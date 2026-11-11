import { useLocation } from 'react-router-dom';
import { toCanonicalPageUrl } from '@/lib/seoUrls';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const { pathname } = useLocation();
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: toCanonicalPageUrl(item.href || pathname),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
