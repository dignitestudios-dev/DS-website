import TopNotchMobileAppTestingServices from "@/components/services/TopNotchMobileAppTestingServices/TopNotchMobileAppTestingServices";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Mobile app testing services | Dignite Studios",
  description:
    "Embarke top-tier mobile app testing services from the leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts.",
};

const page = () => {
  return (
    <>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/mobile-app-testing-services"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/mobile-app-testing-services"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/mobile-app-testing-services"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/mobile-app-testing-services"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/mobile-app-testing-services"
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
          content="Mobile app testing services | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Embarke top-tier mobile app testing services from the leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/mobile-app-testing-services"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-testing-services.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Mobile App Testing Services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile App Testing Services | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Embarke top-tier mobile app testing services from our leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-testing-services.webp"
        />
        <meta name="twitter:image:alt" content="Mobile App Testing Services" />
      </head>
      <ServicesLayout page={<TopNotchMobileAppTestingServices />} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mobile App Testing Services | Dignite Studios",
            url: "https://www.dignitestudios.com/services/mobile-app-testing-services",
            description:
              "Embarke top-tier mobile app testing services from our leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts.",
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
                name: "Mobile App Development Services",
                item: "https://www.dignitestudios.com/mobile-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mobile App Design Services",
                item: "https://www.dignitestudios.com/services/mobile-app-design-services",
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
