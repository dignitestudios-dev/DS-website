import PwaServicesPage from "@/components/services/PwaServices/PwaServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Progressive Web App Development Services | Dignite Studios",
  description:
    "Our experts fabricate progressive web app development services from custom applications to high-end optimization, it will make your company stand out.",
};

const page = () => {
  return (
    <div>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/pwa-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/pwa-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/pwa-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/pwa-development-services"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/pwa-development-services"
        />
        <meta http-equiv="content-language" content="en-us" />
        <meta http-equiv="content-language" content="en-ca" />
        <meta http-equiv="content-language" content="en-gb" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet: 200" />
        <meta name="bingbot" content="index, follow, max-snippet: 200 " />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dignite Studios" />
        <meta
          property="og:title"
          content="Progressive Web App Development Company | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Acquaintance Dignite’s top-tier progressive web app development services to lift your company to new heights. Scale your applications with unique PWA development services."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/pwa-development-services"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-pwa-development-services.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Progressive Web App Development Company"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Progressive Web App Development Company | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Acquaintance Dignite’s top-tier progressive web app development services to lift your company to new heights. Scale your applications with unique PWA development services."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-pwa-development-services.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Progressive Web App Development Company"
        />
      </head>
      <ServicesLayout page={<PwaServicesPage />} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Progressive Web App Development Company | Dignite Studios",
            url: "https://www.dignitestudios.com/services/pwa-development-services",
            description:
              "Acquaintance Dignite’s top-tier progressive web app development services to lift your company to new heights. Scale your applications with unique PWA development services.",
            thumbnailUrl:
              "https://www.dignitestudios.com/banner-cover-image-of-pwa-development-services.webp",
          }),
        }}
      />

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
                name: "Progressive Web App Development Company",
                item: "https://www.dignitestudios.com/services/pwa-development-services",
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
            name: "Progressive Web App Development Company",
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
    </div>
  );
};

export default page;
