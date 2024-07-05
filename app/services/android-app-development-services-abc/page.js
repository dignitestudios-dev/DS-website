import AndroidAppDevelopmentServicesPage from "@/components/services/AndroidAppDevelopmentServices/AndroidAppDevelopmentServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const page = () => {
  <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="canonical"
      href="https://www.dignitestudios.com/services/android-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-ca"
      href="https://www.dignitestudios.com/services/android-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-us"
      href="https://www.dignitestudios.com/services/android-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-gb"
      href="https://www.dignitestudios.com/services/android-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href="https://www.dignitestudios.com/services/android-app-development-services"
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
      content="Mobile app development services | Dignite Studios"
    />
    <meta
      property="og:description"
      content="The first-class Android app development company Dignite Studios bequeath exceptional standards of mobile app development so that the agency can fulfill custom application solutions and other mobile projects adeptly."
    />
    <meta
      property="og:url"
      content="https://www.dignitestudios.com/services/android-app-development-services"
    />
    <meta
      property="og:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-android-app-development-services.webp"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Android app development services" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Android app development services | Dignite Studios"
    />
    <meta name="twitter:site" content="@dignitestudios" />
    <meta
      name="twitter:description"
      content="Android app development company Dignite Studios bestows the best international development mobile app standards so that the agency can fulfill custom application solutions and other mobile projects."
    />
    <meta
      name="twitter:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-android-app-development-services.webp"
    />
    <meta
      name="twitter:image:alt"
      content="Android app development services"
    ></meta>
  </Head>;
  return (
    <div>
      <ServicesLayout page={<AndroidAppDevelopmentServicesPage />} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Android app development services | Dignite Studios",
      "url": "https://www.dignitestudios.com/services/android-app-development-services",
      "description": "The first-class Android app development company Dignite Studios bequeath exceptional standards of mobile app development so that the agency can fulfill custom application solutions and other mobile projects adeptly."
    }
    `,
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home Page",
        "item": "https://www.dignitestudios.com/"
      },{
        "@type": "ListItem",
        "position": 2,
        "name": "Android App Development Services",
        "item": "https://www.dignitestudios.com/android-app-development-services"
      }]
    }
    `,
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
    {
      "@context": "http://schema.org",
      "@type": "Product",
      "name": "Android app development services",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "worstRating": "1",
        "bestRating": "5",
        "reviewCount": "37"
      }
    }
    `,
        }}
      />
    </div>
  );
};

export default page;
