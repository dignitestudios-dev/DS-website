import HomePage from "@/components/Home/HomePage";
import GlobalLayout from "@/layout/GlobalLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import RootLayout from "./layout";

export const metadata = {
  title: "Dignite Studios: Top Mobile App Development Company",
  description:
    "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
};

const Page = () => {
  return (
    <>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="canonical" href="https://www.dignitestudios.com/" />
        <link
          rel="alternate"
          hreflang="en-ca"
          href="https://www.dignitestudios.com/"
        />
        <link
          rel="alternate"
          hreflang="en-us"
          href="https://www.dignitestudios.com/"
        />
        <link
          rel="alternate"
          hreflang="en-gb"
          href="https://www.dignitestudios.com/"
        />
        <link
          rel="alternate"
          hreflang="x-default"
          href="https://www.dignitestudios.com/"
        />
        <meta httpEquiv="content-language" content="en-us" />
        <meta httpEquiv="content-language" content="en-ca" />
        <meta httpEquiv="content-language" content="en-gb" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-snippet: 200" />
        <meta name="bingbot" content="index, follow, max-snippet: 200" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Dignite Studios" />
        <meta
          property="og:title"
          content="Top Mobile App Development Company | Dignite Studios"
        />
        <meta
          property="og:description"
          content="Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution."
        />
        <meta property="og:url" content="https://www.dignitestudios.com/" />
        <meta
          property="og:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Top Mobile App Development Company | Dignite Studios"
        />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Top Mobile App Development Company | Dignite Studios"
        />
        <meta name="twitter:site" content="@dignitestudios" />
        <meta
          name="twitter:description"
          content="Explore interactive user experience to transform your software application to stand out among top mobile app development companies."
        />
        <meta
          name="twitter:image"
          content="https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp"
        />
        <meta
          name="twitter:image:alt"
          content="Top Mobile App Development Company"
        />
      </head>
      <GlobalLayout page={<HomePage />} />

      <Script
        id="image-object-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            url: "https://www.dignitestudios.com/logo.png",
          }),
        }}
      />

      <Script
        id="breadcrumb-list-schema"
        type="application/ld+json"
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
            ],
          }),
        }}
      />
      <Script
        id="web-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Top Mobile App Development Company | Dignite Studios",
            url: "https://www.dignitestudios.com/",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with a significant solution.",
          }),
        }}
      />

      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: "https://www.dignitestudios.com/",
            name: "Dignite Studios",
            description: "Top Mobile App Development Company",
            inLanguage: "en",
            publisher: {
              "@type": "Organization",
              url: "https://www.dignitestudios.com/",
              name: "Dignite Studios",
              logo: "https://www.dignitestudios.com/logo.png",
              sameAs: [
                "https://facebook.com/dignitestudios",
                "https://twitter.com/dignitestudios",
                "https://www.instagram.com/dignitestudios/",
                "https://www.linkedin.com/company/dignitestudios/",
                "https://www.pinterest.com/dignitestudios/",
                "https://g.page/r/CTqywDbEQFRNEBM",
              ],
            },
          }),
        }}
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Dignite Studios",
            alternateName: "DS",
            url: "https://www.dignitestudios.com/",
            logo: "https://www.dignitestudios.com/logo.png",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
            email: "support@dignitestudios.com",
            telephone: "+1 877-714-1770",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 877-714-1770",
              contactType: "customer service",
              contactOption: "TollFree",
              email: "support@dignitestudios.com",
              availableLanguage: "en",
            },
            sameAs: [
              "https://facebook.com/dignitestudios",
              "https://twitter.com/dignitestudios",
              "https://www.instagram.com/dignitestudios/",
              "https://www.linkedin.com/company/dignitestudios/",
              "https://www.pinterest.com/dignitestudios/",
            ],
          }),
        }}
      />

      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "Mobile App Development Company",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              worstRating: "1",
              bestRating: "5",
              reviewCount: "7",
            },
          }),
        }}
      />

      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Dignite Studios",
            image: "https://www.dignitestudios.com/logo.png",
            url: "https://www.dignitestudios.com/",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
            email: "support@dignitestudios.com",
            telephone: "+1 877-714-1770",
            priceRange: "$$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3505 Lake Lynda Dr #200",
              addressLocality: "Orlando",
              addressRegion: "FL",
              postalCode: "32817",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 28.6008727,
              longitude: -81.2219365,
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1 877-714-1770",
              contactType: "customer service",
              contactOption: "TollFree",
              email: "support@dignitestudios.com",
              availableLanguage: "en",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://facebook.com/dignitestudios",
              "https://twitter.com/dignitestudios",
              "https://www.instagram.com/dignitestudios/",
              "https://www.linkedin.com/company/dignitestudios/",
              "https://www.pinterest.com/dignitestudios/",
            ],
          }),
        }}
      />
    </>
  );
};

export default Page;
