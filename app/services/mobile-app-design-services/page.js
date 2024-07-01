import MobileAppDesignServicesPage from "@/components/services/MobileAppDesignServices/MobileAppDesignServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const webPageData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Mobile app design services",
  url: "https://www.dignitestudios.com/services/mobile-app-design-services",
  description:
    "Recruit top mobile app design services that flawlessly create innovative UI/UX designs, and deliver smooth UX wireframes that fit your match. A highly experienced suite of designing application services will elevate your app’s design at a pace of breakneck.",
};

const breadcrumbData = {
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
  ],
};

const productData = {
  "@context": "http://schema.org",
  "@type": "Product",
  name: "Mobile App Design Services",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    worstRating: "1",
    bestRating: "5",
    reviewCount: "37",
  },
};

const page = () => {
  <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="canonical"
      href="https://www.dignitestudios.com/services/mobile-app-design-services"
    />
    <link
      rel="alternate"
      hreflang="en-ca"
      href="https://www.dignitestudios.com/services/mobile-app-design-services"
    />
    <link
      rel="alternate"
      hreflang="en-us"
      href="https://www.dignitestudios.com/services/mobile-app-design-services"
    />
    <link
      rel="alternate"
      hreflang="en-gb"
      href="https://www.dignitestudios.com/services/mobile-app-design-services"
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href="https://www.dignitestudios.com/services/mobile-app-design-services"
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
      content="Mobile app design services | Dignite Studios"
    />
    <meta
      property="og:description"
      content="Recruit top mobile app design services that flawlessly create innovative UI/UX designs, and deliver smooth UX wireframes that fit your match. A highly experienced suite of designing application services will elevate your app’s design at a pace of breakneck."
    />
    <meta
      property="og:url"
      content="https://www.dignitestudios.com/services/mobile-app-design-services"
    />
    <meta
      property="og:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-design-services.webp"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Mobile app design services" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Mobile app design services | Dignite Studios"
    />
    <meta name="twitter:site" content="@dignitestudios" />
    <meta
      name="twitter:description"
      content="Recruit top mobile app design services that flawlessly create innovative UI/UX designs. Experienced suite of designing application services will elevate your app’s design at a pace of breakneck."
    />
    <meta
      name="twitter:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-design-services.webp"
    />
    <meta name="twitter:image:alt" content="Mobile app design services" />
  </Head>;
  return (
    <div>
      <ServicesLayout page={<MobileAppDesignServicesPage />} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageData) }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productData) }}
      />
    </div>
  );
};

export default page;
