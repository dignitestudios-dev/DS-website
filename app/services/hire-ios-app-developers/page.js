import HireIosAppDevelopersPage from "@/components/services/HireIosAppDevelopers/HireIosAppDevelopersPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Hire iOS App Developers",
  description:
    "iPhone app developers can develop applications in a mere time so hire an iOS app developer to reduce the risk patterns.",
};

const page = () => {
  return (
    <div>
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/hire-ios-app-developer"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/hire-ios-app-developer"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/hire-ios-app-developer"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/hire-ios-app-developer"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/hire-ios-app-developer"
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
          content="Hire iOS App Developers | Dignite Studios"
        />
        <meta
          property="og:description"
          content="iPhone app developers can develop applications in a mere time so hire an iOS app developer to reduce the risk patterns."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/hire-ios-app-developer"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-hire-ios-app-developer.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Hire iOS App Developers" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Hire iOS App Developers | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="iPhone app developers can develop applications in a mere time so hire an iOS app developer to reduce the risk patterns."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-hire-ios-app-developer.webp"
        />
        <meta name="twitter:image:alt" content="Hire iOS App Developers" />
      </head>
      <ServicesLayout page={<HireIosAppDevelopersPage />} />

      <Script
        type="application/ld+json"
        id="webpage-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Hire iOS App Developers | Dignite Studios",
            url: "https://www.dignitestudios.com/services/hire-ios-app-developer",
            description:
              "iPhone app developers can develop applications in a mere time so hire an iOS app developer to reduce the risk patterns.",
            thumbnailUrl:
              "https://www.dignitestudios.com/banner-cover-image-of-hire-ios-app-developer.webp",
          }),
        }}
      />

      <Script
        type="application/ld+json"
        id="breadcrumb-schema-ios"
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
                name: "iOS App Development Services",
                item: "https://www.dignitestudios.com/services/android-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "iOS App Design Services",
                item: "https://www.dignitestudios.com/services/android-mobile-app-design-services",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Hire iOS App Developers",
                item: "https://www.dignitestudios.com/services/hire-ios-app-developer",
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
            name: "Hire iOS App Developers",
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
