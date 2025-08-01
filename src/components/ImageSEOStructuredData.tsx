import React from 'react';

interface ImageStructuredDataProps {
  images: Array<{
    url: string;
    description: string;
    caption?: string;
    width?: number;
    height?: number;
    contentLocation?: string;
  }>;
  organizationName?: string;
  websiteUrl?: string;
}

export const ImageSEOStructuredData: React.FC<ImageStructuredDataProps> = ({
  images,
  organizationName = "Roman's Building Services",
  websiteUrl = "https://romansbuildingservices.lovable.app"
}) => {
  const imageStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": `${organizationName} - Professional Building and Masonry Services Portfolio`,
    "description": "Showcase of professional masonry, restoration, and building services across Sydney",
    "url": websiteUrl,
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": img.url.startsWith('http') ? img.url : `${websiteUrl}${img.url}`,
      "description": img.description,
      "caption": img.caption || img.description,
      "width": img.width,
      "height": img.height,
      "contentLocation": img.contentLocation || "Sydney, Australia",
      "creator": {
        "@type": "Organization",
        "name": organizationName
      },
      "copyrightHolder": {
        "@type": "Organization", 
        "name": organizationName
      }
    })),
    "publisher": {
      "@type": "Organization",
      "name": organizationName,
      "url": websiteUrl
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(imageStructuredData)
      }}
    />
  );
};