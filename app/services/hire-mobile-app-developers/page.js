import HireMobileAppDevelopersPage from "@/components/services/HireMobileAppDevelopers/HireMobileAppDevelopersPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Hire the best Mobile App developers | Dignite Studios",
  description:
    "Hire the best Mobile App developers to build intuitive applications with a well-organized company holding dedicated and talented developers.",
};

const page = () => {
  return (
    <div>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/hire-mobile-app-developers"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/hire-mobile-app-developers"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/hire-mobile-app-developers"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/hire-mobile-app-developers"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/hire-mobile-app-developers"
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
          content="Hire Mobile App Developers | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Hire Android app Developers of Dignite Studios. Our platform conducts top Android app developers for hire with dedicated strong expertise."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/hire-mobile-app-developers"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-hire-mobile-app-developers.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hire Mobile App Developers" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hire Mobile App Developers | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Hire Android app Developers of Dignite Studios. Our platform conducts top Android app developers for hire with dedicated strong expertise."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-hire-mobile-app-developers.webp"
        />
        <meta name="twitter:image:alt" content="Hire Mobile App Developers" />
      </head>
      <ServicesLayout page={<HireMobileAppDevelopersPage />} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hire Mobile App Developers | Dignite Studios",
            url: "https://www.dignitestudios.com/services/hire-mobile-app-developers",
            description:
              "Hire Android app Developers of Dignite Studios. Our platform conducts top Android app developers for hire with dedicated strong expertise.",
            thumbnailUrl:
              "https://www.dignitestudios.com/banner-cover-image-of-hire-mobile-app-developers.webp",
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
                item: "https://www.dignitestudios.com/services/mobile-app-development-services",
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
              {
                "@type": "ListItem",
                position: 6,
                name: "Mobile Application Support And Maintenance Services",
                item: "https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services",
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "Hire Mobile App Developers",
                item: "https://www.dignitestudios.com/services/hire-mobile-app-developers",
              },
            ],
          }),
        }}
      />

      {/* Product JSON-LD */}
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "Hire Mobile App Developers",
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
