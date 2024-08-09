import NativeAppDevelopmentServicesPage from "@/components/services/NativeAppDevelopmentServices/NativeAppDevelopmentServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Native App Development Services | Dignite Studios",
  description:
    "Expeditious native app development company Dignite Studios is set to deliver compelling custom mobile application services from highly qualified experts.",
};

const page = () => {
  return (
    <div>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/native-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/native-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/native-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/native-app-development-services"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/native-app-development-services"
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
          content="Native app development services | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Expeditious native app development company Dignite Studios is set to deliver compelling custom mobile application services from highly qualified experts."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/native-app-development-services"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-native-app-development-services.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Native app development services"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Native app development services | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Expeditious native app development company Dignite Studios is set to deliver compelling custom mobile application services from highly qualified experts."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-native-app-development-services.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Native app development services"
        />
      </head>
      <ServicesLayout page={<NativeAppDevelopmentServicesPage />} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Native App Development Services | Dignite Studios",
            url: "https://www.dignitestudios.com/services/native-app-development-services",
            description:
              "Expeditious native app development company Dignite Studios is set to deliver compelling custom mobile application services from highly qualified experts.",
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
                name: "Home",
                item: "https://www.dignitestudios.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Mobile app development services",
                item: "https://www.dignitestudios.com/services/mobile-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Native app development services",
                item: "https://www.dignitestudios.com/services/native-app-development-services",
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
            name: "Native App Development Services | Dignite Studios",
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
