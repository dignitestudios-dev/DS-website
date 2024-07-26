import WebAppDevServicePage from "@/components/services/WebAppDevelopmentServices/WebAppDevServicePage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Web application development services | Dignite Studios",
  description: "Dignite’s top experts fabricate stellar web app development services from custom applications to high-end optimization, our value-driven approach will make your company stand out among the utmost industries.",
};

const page = () => {
  <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="canonical"
      href="https://www.dignitestudios.com/services/web-application-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-ca"
      href="https://www.dignitestudios.com/services/web-application-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-us"
      href="https://www.dignitestudios.com/services/web-application-development-services"
    />
    <link
      rel="alternate"
      hreflang="en-gb"
      href="https://www.dignitestudios.com/services/web-application-development-services"
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href="https://www.dignitestudios.com/services/web-application-development-services"
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
      content="Web application development Services | Dignite Studios"
    />
    <meta
      property="og:description"
      content="Dignite’s top experts fabricate stellar web app development services from custom applications to high-end optimization, our value-driven approach will make your company stand out among the utmost industries."
    />
    <meta
      property="og:url"
      content="https://www.dignitestudios.com/services/web-application-development-services"
    />
    <meta
      property="og:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-web-application-development-services.webp"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Web application development Services"
    />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Web application development Services | Dignite Studios"
    />
    <meta name="twitter:site" content="@dignitestudios" />
    <meta
      name="twitter:description"
      content="Dignite’s top experts of web app development services from custom applications to high-end optimization, our value-driven approach will make your company stand out among the utmost industries."
    />
    <meta
      name="twitter:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-web-application-development-services.webp"
    />
    <meta
      name="twitter:image:alt"
      content="Web application development Services"
    ></meta>
  </Head>;
  return (
    <div>
      <ServicesLayout page={<WebAppDevServicePage />} />

      <Script
        id="webpage-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Web application development Services | Dignite Studios",
            url: "https://www.dignitestudios.com/services/web-application-development-services",
            description:
              "Dignite’s top experts fabricate stellar web app development services from custom applications to high-end optimization, our value-driven approach will make your company stand out among the utmost industries.",
          }),
        }}
      />
      <Script
        id="breadcrumblist-json-ld"
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
                name: "Mobile App Development Services",
                item: "https://www.dignitestudios.com/services/mobile-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mobile App Design Services",
                item: "https://www.dignitestudios.com/services/mobile-app-design-services",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mobile App Consulting Services",
                item: "https://www.dignitestudios.com/services/mobile-app-consulting-services",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Mobile App Testing Services",
                item: "https://www.dignitestudios.com/services/mobile-app-testing-services",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Mobile App Maintenance and Support Services",
                item: "https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services",
              },
              {
                "@type": "ListItem",
                position: 7,
                name: "Web application development Services",
                item: "https://www.dignitestudios.com/services/web-application-development-services",
              },
            ],
          }),
        }}
      />
      <Script
        id="product-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "Web application development Services",
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
