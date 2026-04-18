interface BreadcrumbItem {
  label: string;
  href: string;
}

const SITE_URL = 'https://romansbuildingservices.com';

export const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const validItems = items.filter((item) => item.href);
  if (validItems.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: validItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
