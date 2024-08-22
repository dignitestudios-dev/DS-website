import AndroidMobileAppDesignServicesPage from "@/components/services/AndroidMobileAppDesignServices/AndroidMobileAppDesignServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Android mobile app design services | Dignite Studios",
  description:
    "Our company bestows remarkable custom Android app design to develop modernized application services for our users.",
};

const page = () => {
  return (
    <div className="w-full">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/android-mobile-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/services/android-mobile-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/services/android-mobile-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/services/android-mobile-app-design-services"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/services/android-mobile-app-design-services"
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
          content="Android mobile app design services | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Our company bestows remarkable custom Android app design to develop modernized application services for our users."
        />
        <meta
          property="og:url"
          content="https://www.dignitestudios.com/services/android-mobile-app-design-services"
        />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-android-mobile-app-design-services.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Android mobile app design services"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Android mobile app design services | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Our company bestows remarkable custom Android app design to develop modernized application services for our users."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-android-mobile-app-design-services.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Android mobile app design services"
        />
      </head>
      <ServicesLayout page={<AndroidMobileAppDesignServicesPage />} />

      <Script
        type="application/ld+json"
        id="android-app-design-schema"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Android mobile app design services | Dignite Studios",
            url: "https://www.dignitestudios.com/services/android-mobile-app-design-services",
            description:
              "Our company bestows remarkable custom Android app design to develop modernized application services for our users.",
            thumbnailUrl:
              "https://www.dignitestudios.com/banner-cover-image-of-android-mobile-app-design-services.webp",
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
                name: "Android App Development Services",
                item: "https://www.dignitestudios.com/services/android-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Android Mobile App Design Services",
                item: "https://www.dignitestudios.com/services/android-mobile-app-design-services",
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
            name: "Android mobile app design services",
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
