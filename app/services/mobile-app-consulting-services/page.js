import InfluentialMobileAppConsultingServicesPage from "@/components/services/InfluentialMobileAppConsultingServices/InfluentialMobileAppConsultingServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Mobile app consulting services | Dignite Studios",
  description:
    "Our top mobile app development company in US, sets new standards in the digital venture of software solutions to lift your core business exclusively.",
};

const breadcrumbData = {
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dignitestudios.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Mobile App Development Services",
      item: "https://www.dignitestudios.com/services/mobile-app-development-services",
    },
  ],
};

const page = () => {
  return (
    <>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/mobile-app-consulting-services"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/mobile-app-consulting-services"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/mobile-app-consulting-services"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/mobile-app-consulting-services"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/mobile-app-consulting-services"
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
          content="Mobile app consulting services | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Explore professional mobile application consulting services with our expert agency to thrive your innovative application solutions. Here, you’ll experience modern mobile application development strategies to make your company bulge out."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/mobile-app-consulting-services"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-consulting-services.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Mobile app consulting services"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile app consulting services | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Professional mobile application consulting services that thrive your innovative application solutions. Experience modern mobile application development strategies to make your company bulge out."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-consulting-services.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Mobile app consulting services"
        />
      </head>
      <ServicesLayout page={<InfluentialMobileAppConsultingServicesPage />} />

      <Script type="application/ld+json" id="ld-json-mobile-app-consulting">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Mobile app consulting services | Dignite Studios",
          url: "https://www.dignitestudios.com/services/mobile-app-consulting-services",
          description:
            "Explore professional mobile application consulting services with our expert agency to thrive your innovative application solutions. Here, you’ll experience modern mobile application development strategies to make your company bulge out.",
          thumbnailUrl:
            "https://www.dignitestudios.com/banner-cover-image-of-mobile-app-consulting-services.webp",
        })}
      </Script>

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
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
                name: "Mobile App Development Services",
                item: "https://www.dignitestudios.com/mobile-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mobile app design services",
                item: "https://www.dignitestudios.com/services/mobile-app-design-services",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mobile app consulting services",
                item: "https://www.dignitestudios.com/services/mobile-app-consulting-services",
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
            name: "Mobile app consulting services",
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
