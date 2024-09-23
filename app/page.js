import HomePage from "@/components/Home/HomePage";
import GlobalLayout from "@/layout/GlobalLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";
import RootLayout from "./layout";

export const metadata = {
  title: "Dignite Studios: Top Mobile App Development Company in US",
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
        <meta name="msvalidate.01" content="94BB860CACBBFCA50505F40D3B4C33CC" />
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Top Mobile App Development Company | Dignite Studios",
            url: "https://www.dignitestudios.com/",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with a significant solution.",
            thumbnailUrl:
              "https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp",
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
            address: {
              "@type": "PostalAddress",
              streetAddress: "3505 Lake Lynda Dr #200",
              addressLocality: "Orlando",
              addressRegion: "FL",
              postalCode: "32817",
              addressCountry: "US",
            },
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

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "SiteNavigationElement",
                position: 1,
                name: "Home",
                description:
                  "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
                url: "https://www.dignitestudios.com/",
              },
              {
                "@type": "SiteNavigationElement",
                position: 2,
                name: "Mobile app development services | Dignite Studios",
                description:
                  "Recruit top mobile app design services that flawlessly create innovative UI/UX designs, and deliver smooth UX wireframes that fit your match. A highly experienced suite of designing application services will elevate your app’s design at a pace of breakneck.",
                url: "https://www.dignitestudios.com/services/mobile-app-design-services",
              },
              {
                "@type": "SiteNavigationElement",
                position: 3,
                name: "Mobile app design services | Dignite Studios",
                description:
                  "Let's delve into professional mobile app development services encompassing multiple app solutions for your tailored needs. Our high-ranking team crafts ingenious and state-of-the-art applications to stand out in your mobile services.",
                url: "https://www.dignitestudios.com/services/mobile-app-design-services",
              },
              {
                "@type": "SiteNavigationElement",
                position: 4,
                name: "Mobile app consulting services | Dignite Studios",
                description:
                  "Explore professional mobile application consulting services with our expert agency to thrive your innovative application solutions. Here, you’ll experience modern mobile application development strategies to make your company bulge out.",
                url: "https://www.dignitestudios.com/services/mobile-app-consulting-services",
              },
              {
                "@type": "SiteNavigationElement",
                position: 5,
                name: "Mobile app testing services | Dignite Studios",
                description:
                  "Embark on top-tier mobile app testing services from the leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts.",
                url: "https://www.dignitestudios.com/services/mobile-app-testing-services",
              },
              {
                "@type": "SiteNavigationElement",
                position: 6,
                name: "Mobile app development services | Dignite Studios",
                description:
                  "The first-class Android app development company Dignite Studios bestows the best international development mobile app standards so that the agency can fulfill custom application solutions and other mobile projects.",
                url: "https://www.dignitestudios.com/services/android-app-development-services",
              },
            ],
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Dignite Studios",
            url: "https://www.dignitestudios.com/",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with a significant solution.",
            image: "https://www.dignitestudios.com/logo.webp",
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
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Person",
            name: "Dignite Studios",
            url: "https://www.dignitestudios.com/",
            description:
              "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with a significant solution.",
            image: "https://www.dignitestudios.com/logo.webp",
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
