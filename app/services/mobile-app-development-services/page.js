import MobileAppDevelopmentSeoPage from "@/components/services/MobileAppDevelopmentSeo/MobileAppDevelopmentSeoPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

const page = () => {
  <Head>
    <title>Dignite Studis</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="canonical"
      href="https://www.dignitestudios.com/services/mobile-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-ca"
      href="https://www.dignitestudios.com/services/mobile-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-us"
      href="https://www.dignitestudios.com/services/mobile-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-gb"
      href="https://www.dignitestudios.com/services/mobile-app-development-services"
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href="https://www.dignitestudios.com/services/mobile-app-development-services"
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
      content="Let's delve into professional mobile app development services encompassing multiple app solutions for your tailored needs. Our high-ranking team crafts ingenious and state-of-the-art applications to stand out in your mobile services."
    />
    <meta
      property="og:url"
      content="https://www.dignitestudios.com/services/mobile-app-development-services"
    />
    <meta
      property="og:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-development-services.webp"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Mobile app development services" />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Mobile app development services | Dignite Studios"
    />
    <meta name="twitter:site" content="@dignitestudios" />
    <meta
      name="twitter:description"
      content="Professional mobile app development services encompassing multiple app solutions for your tailored needs. Our team crafts state-of-the-art applications to stand out in your mobile services."
    />
    <meta
      name="twitter:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-mobile-app-development-services.webp"
    />
    <link
    rel="preload"
    href="https://dignitestudios.com//Mobile-app-design-services.webp"
    as="image"
  />
    <meta name="twitter:image:alt" content="Mobile app development services" />
  </Head>;
  return (
    <div>
      <ServicesLayout page={<MobileAppDevelopmentSeoPage />} />

      <Script
        type="application/ld+json"
        async
        dangerouslySetInnerHTML={{
          __html: `
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Mobile App Development Services",
          "url": "https://www.dignitestudios.com/services/mobile-app-development-services",
          "description": "Let's delve into professional mobile app development services encompassing multiple app solutions for your tailored needs. Our high-ranking team crafts ingenious and state-of-the-art applications to stand out in your mobile services."
        }
      `,
        }}
      />

      <Script
        type="application/ld+json"
        async
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <Script
        type="application/ld+json"
        async
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "Mobile App Development Services",
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
