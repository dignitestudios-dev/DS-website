import IosPage from "@/components/services/IosAppDevelopmentServices/IosPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "iOS App Development Services | Dignite Studios",
  description:
    "Elevate your mobile landscape with our iOS application development services of custom iPhone apps with the company’s top experts.",
};

const page = () => {
  return (
    <div>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/ios-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/ios-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/ios-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/ios-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/ios-app-development-services"
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
          content="iOS app development services | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Elevate your mobile landscape with our iOS application development services of custom iPhone apps with the company’s top experts."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/ios-app-development-services"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-ios-app-development-services.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ios app development services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ios app development services | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Elevate your mobile landscape with our iOS application development services of custom iPhone apps with the company’s top experts."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-ios-app-development-services.webp"
        />
        <meta
          name="twitter:image:alt"
          content="ios app development services"
        ></meta>
      </head>
      <ServicesLayout page={<IosPage />} />

      <Script
        type="application/ld+json"
        id="ios-app-development-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ios app development services | Dignite Studios",
            url: "https://www.dignitestudios.com/services/ios-app-development-services",
            description:
              "Elevate your mobile landscape with our iOS application development services of custom iPhone apps with the company’s top experts.",
            thumbnailUrl:
              "https://www.dignitestudios.com/banner-cover-image-of-ios-app-development-services.webp",
          }),
        }}
      />

      <Script type="application/ld+json" id="breadcrumb-json-ld">
        {`
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
            "name": "iOS App Development Services",
            "item": "https://www.dignitestudios.com/services/ios-app-development-services"  
          }]
        }
      `}
      </Script>

      <Script type="application/ld+json" id="product-json-ld">
        {`
        {
          "@context": "http://schema.org",
          "@type": "Product",
          "name": "ios app development services",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "worstRating": "1",
            "bestRating": "5",
            "reviewCount": "37"
          }
        }
      `}
      </Script>
    </div>
  );
};

export default page;
