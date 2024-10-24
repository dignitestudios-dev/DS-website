import IosAppDesignServicesPage from "@/components/services/IosAppDesignServices/IosAppDesignServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "iOS App Design Company | Dignite Studios",
  description:
    "We ensure vision-oriented iOS app design services with innovative UI/UX design features for custom iPhone applications.",
};

const page = () => {
  return (
    <div>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/ios-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/ios-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/ios-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/ios-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/ios-app-design-services"
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
          content="iOS app design services | Dignite Studios"
        />
        <meta
          property="og:description"
          content="We ensure vision-oriented iOS app design services with innovative UI/UX design features for custom iPhone applications. "
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/ios-app-design-services"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-ios-app-design-services.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="iOS app design services" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="iOS app design services | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="We ensure vision-oriented iOS app design services with innovative UI/UX design features for custom iPhone applications."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-ios-app-design-services.webp"
        />
        <meta name="twitter:image:alt" content="iOS app design services" />
      </head>
      <ServicesLayout page={<IosAppDesignServicesPage />} />

      <Script
        type="application/ld+json"
        id="ios-app-design-webpage-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "iOS app design services | Dignite Studios",
            url: "https://www.dignitestudios.com/services/ios-app-design-services",
            description:
              "We ensure vision-oriented iOS app design services with innovative UI/UX design features for custom iPhone applications.",
            thumbnailUrl:
              "https://www.dignitestudios.com/banner-cover-image-of-ios-app-design-services.webp",
          }),
        }}
      />

      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        strategy="afterInteractive"
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
                name: "iOS app development services",
                item: "https://www.dignitestudios.com/services/ios-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "iOS app design services",
                item: "https://www.dignitestudios.com/services/ios-app-design-services",
              },
            ],
          }),
        }}
      />

      <Script
        type="application/ld+json"
        id="product-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "iOS app design services",
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
