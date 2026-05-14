import TopNotchMobileAppTestingServices from "@/components/services/TopNotchMobileAppTestingServices/TopNotchMobileAppTestingServices";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Mobile App Testing Services | Dignite Studios",
  description:
    "Mobile app testing services from the leading company. We provide application solutions to ensure optimal performance by industry testing experts.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/services/mobile-app-testing-services',
    languages: {
      'en-ca': 'https://www.dignitestudios.com/services/mobile-app-testing-services',
      'en-us': 'https://www.dignitestudios.com/services/mobile-app-testing-services',
      'en-gb': 'https://www.dignitestudios.com/services/mobile-app-testing-services',
      'x-default': 'https://www.dignitestudios.com/services/mobile-app-testing-services',
    },
  },
  robots: 'index, follow',
  otherBots: 'googlebot: index, follow, max-snippet: 200; bingbot: index, follow, max-snippet: 200',
  openGraph: {
    type: 'website',
    siteName: 'Dignite Studios',
    title: 'Mobile app testing services | Dignite Studios',
    description: 'Embarke top-tier mobile app testing services from the leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts.',
    url: 'https://www.dignitestudios.com/services/mobile-app-testing-services',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-mobile-app-testing-services.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile App Testing Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Testing Services | Dignite Studios',
    site: '@dignitestudios',
    description: 'Embarke top-tier mobile app testing services from our leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts.',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-mobile-app-testing-services.webp',
        alt: 'Mobile App Testing Services',
      },
    ],
  },
};

const page = () => {
  return (
    <>
      <ServicesLayout page={<TopNotchMobileAppTestingServices />} />

      <Script type="application/ld+json" id="ld-json-mobile-app-testing">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Mobile App Testing Services | Dignite Studios",
          url: "https://www.dignitestudios.com/services/mobile-app-testing-services",
          description:
            "Embark on top-tier mobile app testing services from our leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts.",
          thumbnailUrl:
            "https://www.dignitestudios.com/banner-cover-image-of-mobile-app-testing-services.webp",
        })}
      </Script>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home Page",
                item: "https://www.dignitestudios.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Mobile App Development Services",
                item: "https://www.dignitestudios.com/mobile-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mobile App Design Services",
                item: "https://www.dignitestudios.com/services/mobile-app-development",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mobile App Consulting Services",
                item: "https://www.dignitestudios.com/services/mobile-app-consulting-services",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Mobile App Testing Services",
                item: "https://www.dignitestudios.com/services/mobile-app-testing-services",
              },
            ],
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "Mobile App Testing Services",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              worstRating: "1",
              bestRating: "5",
              reviewCount: "37",
            },
          }),
        }}
      />
    </>
  );
};

export default page;
