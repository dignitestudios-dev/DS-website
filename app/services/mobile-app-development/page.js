import MobileAppDevelopment from "@/components/services/MobileAppDevelopment/MobileAppDevelopment";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Mobile App Development Services | Dignite Studios",
  description:
    "Professional mobile app development services encompassing app solutions. Our team crafts ingenious applications to stand out in mobile services.",
};

const page = () => {
  return (
    <div>
      <head>
        <title>Mobile App Development Company | Building Scalable apps</title>
        <meta
          name="description"
          content="Mobile app development company building secure and fully customized mobile applications aligned with your business goals. Contact us and get a quote today!."
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link
          rel="canonical"
          href="https://www.dignitestudios.com/services/mobile-app-development-services"
        />
        <link
          rel="alternate"
          hrefLang="en-ca"
          href="https://www.dignitestudios.com/services/mobile-app-development-services"
        />
        <link
          rel="alternate"
          hrefLang="en-us"
          href="https://www.dignitestudios.com/services/mobile-app-development-services"
        />
        <link
          rel="alternate"
          hrefLang="en-gb"
          href="https://www.dignitestudios.com/services/mobile-app-development-services"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://www.dignitestudios.com/services/mobile-app-development-services"
        />
        <meta httpEquiv="content-language" content="en-us" />
        <meta httpEquiv="content-language" content="en-ca" />
        <meta httpEquiv="content-language" content="en-gb" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet: 200" />
        <meta name="bingbot" content="index, follow, max-snippet: 200 " />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dignite Studios" />
        <meta
          property="og:title"
          content="Mobile App Development Company | Building Scalable apps"
        />
        <meta
          property="og:description"
          content="Mobile app development company building secure and fully customized mobile applications aligned with your business goals. Contact us and get a quote today!."
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
        <meta
          property="og:image:alt"
          content="Mobile App Development Company"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile App Development Company | Building Scalable apps"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Mobile app development company building secure and fully customized mobile applications aligned with your business goals. Contact us and get a quote today!."
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
        <meta
          name="twitter:image:alt"
          content="Mobile App Development Company"
        />
      </head>
      <GlobalLayout page={<MobileAppDevelopment />} />

      <Script type="application/ld+json" id="mobile-app-development-services">
        {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Mobile App Development Services",
      "url": "https://www.dignitestudios.com/services/mobile-app-development-services",
      "description": "Let's delve into professional mobile app development services encompassing multiple app solutions for your tailored needs. Our high-ranking team crafts ingenious and state-of-the-art applications to stand out in your mobile services.",
      "thumbnailUrl": "https://www.dignitestudios.com/banner-cover-image-of-mobile-app-development-services.webp"
    }
  `}
      </Script>

      <Script type="application/ld+json" async>
        {`
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.dignitestudios.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mobile App Development Services",
          "item": "https://www.dignitestudios.com/services/mobile-app-development-services"
        }
      ]
    }
  `}
      </Script>

      <Script type="application/ld+json" async>
        {`
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Mobile App Development Services",
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
