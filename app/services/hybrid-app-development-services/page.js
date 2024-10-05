import HybridAppDevelopmentServicesPage from "@/components/services/HybridAppDevelopment/HybridAppDevelopmentServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const page = () => {
  return (
    <div>
 <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <link rel="canonical" href="https://www.dignitestudios.com/services/hybrid-app-development-services" />
      <link rel="alternate" hreflang="en-ca" href="https://www.dignitestudios.com/services/hybrid-app-development-services" />
      <link rel="alternate" hreflang="en-us" href="https://www.dignitestudios.com/services/hybrid-app-development-services" />
      <link rel="alternate" hreflang="en-gb" href="https://www.dignitestudios.com/services/hybrid-app-development-services" />
      <link rel="alternate" hreflang="x-default" href="https://www.dignitestudios.com/services/hybrid-app-development-services" />
      <meta httpEquiv="content-language" content="en-us" />
      <meta httpEquiv="content-language" content="en-ca" />
      <meta httpEquiv="content-language" content="en-gb" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet: 200" />
      <meta name="bingbot" content="index, follow, max-snippet: 200" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Dignite Studios" />
      <meta property="og:title" content="hybrid app development services | Dignite Studios" />
      <meta property="og:description" content="Dignite Studios provides the finest custom hybrid mobile application development services for startup businesses or large company holders." />
      <meta property="og:url" content="https://www.dignitestudios.com/services/hybrid-app-development-services" />
      <meta property="og:image" content="https://www.dignitestudios.com/banner-cover-image-of-hybrid-app-development-services.webp" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="hybrid app development services" />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="hybrid app development services | Dignite Studios" />
      <meta name="twitter:site" content="@dignitestudios" />
      <meta name="twitter:description" content="Dignite Studios provides the finest custom hybrid mobile application development services for startup businesses or large company holders." />
      <meta name="twitter:image" content="https://www.dignitestudios.com/banner-cover-image-of-hybrid-app-development-services.webp" />
      <meta name="twitter:image:alt" content="hybrid app development services" />
    </Head>
      <ServicesLayout page={<HybridAppDevelopmentServicesPage />} />



      <Script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "hybrid App Development Services | Dignite Studios",
          "url": "https://www.dignitestudios.com/services/hybrid-app-development-services",
          "description": "Dignite Studios provides the finest custom hybrid mobile application development services for startup businesses or large company holders.",
          "thumbnailUrl": "https://www.dignitestudios.com/banner-cover-image-of-hybrid-app-development-services.webp"
        })
      }} />
      
      <Script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org/",
          "@type": "BreadcrumbList",
          "itemListElement": [{
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.dignitestudios.com/"
          }, {
            "@type": "ListItem",
            "position": 2,
            "name": "hybrid app development services",
            "item": "https://www.dignitestudios.com/services/hybrid-app-development-services"
          }]
        })
      }} />

      <Script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "http://schema.org",
          "@type": "Product",
          "name": "hybrid App Development Services | Dignite Studios",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "worstRating": "1",
            "bestRating": "5",
            "reviewCount": "37"
          }
        })
      }} />

    

    </div>
  );
};

export default page;
