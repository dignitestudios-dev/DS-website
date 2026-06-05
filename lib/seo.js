const WEBSITE_URL = "https://www.dignitestudios.com";

export function generateBreadcrumbJsonLd(slug, title) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: WEBSITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${WEBSITE_URL}/blogs` },
      { "@type": "ListItem", position: 3, name: title, item: `${WEBSITE_URL}/blogs/${slug}` },
    ],
  };
}
