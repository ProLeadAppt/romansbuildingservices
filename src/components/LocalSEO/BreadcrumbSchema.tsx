interface BreadcrumbItem {
  label: string;
  href: string;
}

const SITE_URL = 'https://romansbuildingservices.com';

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  if (items.length === 0) return null;

  const currentUrl =
    typeof window !== 'undefined'
      ? `${window.location.origin}${window.location.pathname}${window.location.search}${window.location.hash}`
      : SITE_URL;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${SITE_URL}${item.href}` : currentUrl,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
