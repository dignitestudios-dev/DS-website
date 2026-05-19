import HomePage from "@/components/Home/HomePage";
import GlobalLayout from "@/layout/GlobalLayout";
import Script from "next/script";
import React from "react";
import RootLayout from "./layout";

export const metadata = {
  title: "Dignite Studios: Top Mobile App Development Company in US",
  description:
    "Software application to stand out among top mobile app development companies. Our agency fabricates mobile application process with effecent solution.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/',
    languages: {
      'en-ca': 'https://www.dignitestudios.com/',
      'en-us': 'https://www.dignitestudios.com/',
      'en-gb': 'https://www.dignitestudios.com/',
      'x-default': 'https://www.dignitestudios.com/',
    },
  },
  robots: 'index, follow',
  otherBots: 'googlebot: index, follow, max-snippet: 200; bingbot: index, follow, max-snippet: 200',
  openGraph: {
    type: 'website',
    siteName: 'Dignite Studios',
    title: 'Top Mobile App Development Company | Dignite Studios',
    description: 'Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.',
    url: 'https://www.dignitestudios.com/',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp',
        width: 1200,
        height: 630,
        alt: 'Top Mobile App Development Company | Dignite Studios',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Mobile App Development Company | Dignite Studios',
    site: '@dignitestudios',
    description: 'Explore interactive user experience to transform your software application to stand out among top mobile app development companies.',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp',
        alt: 'Top Mobile App Development Company',
      },
    ],
  },
  verification: {
    google: '94BB860CACBBFCA50505F40D3B4C33CC',
  },
};

const Page = () => {
  return (
    <>

      <GlobalLayout page={<HomePage />} />

      <Script type="application/ld+json" id="image-object-schema">
        {`
    {
      "@context": "https://schema.org",
      "@type": "ImageObject",
      "url": "https://www.dignitestudios.com/logo.webp"
    }
  `}
      </Script>

      <Script type="application/ld+json" id="breadcrumb-list-schema">
        {`
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home Page",
          "item": "https://www.dignitestudios.com/"
        }
      ]
    }
  `}
      </Script>

      <Script type="application/ld+json" id="webpage-schema">
        {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": "https://www.dignitestudios.com/#webpage",
      "name": "Top Mobile App Development Company | Dignite Studios",
      "url": "https://www.dignitestudios.com/",
      "description": "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with a significant solution.",
      "thumbnailUrl": "https://www.dignitestudios.com/banner-cover-image-of-top-mobile-app-development-company.webp"
    }
  `}
      </Script>

      <Script type="application/ld+json" id="website-schema">
        {`
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      "url": "https://www.dignitestudios.com/",
      "name": "Dignite Studios",
      "description": "Top Mobile App Development Company",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "url": "https://www.dignitestudios.com/",
        "name": "Dignite Studios",
        "logo": "https://www.dignitestudios.com/logo.webp",
        "sameAs": [
          "https://facebook.com/dignitestudios",
          "https://twitter.com/dignitestudios",
          "https://www.instagram.com/dignitestudios/",
          "https://www.linkedin.com/company/dignitestudios/",
          "https://www.pinterest.com/dignitestudios/",
          "https://g.page/r/CTqywDbEQFRNEBM"
        ]
      }
    }
  `}
      </Script>

      <Script type="application/ld+json" id="organization-schema">
        {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.dignitestudios.com/#organization",
      "name": "Dignite Studios",
      "alternateName": "DS",
      "url": "https://www.dignitestudios.com/",
      "logo": "https://www.dignitestudios.com/logo.webp",
      "description": "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
      "email": "support@dignitestudios.com",
      "telephone": "+1 877-714-1770",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3505 Lake Lynda Dr #200",
        "addressLocality": "Orlando",
        "addressRegion": "FL",
        "postalCode": "32817",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 877-714-1770",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "email": "support@dignitestudios.com",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://facebook.com/dignitestudios",
        "https://twitter.com/dignitestudios",
        "https://www.instagram.com/dignitestudios/",
        "https://www.linkedin.com/company/dignitestudios/",
        "https://www.pinterest.com/dignitestudios/"
      ]
    }
  `}
      </Script>

      <Script type="application/ld+json" id="product-schema">
        {`
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Mobile App Development Company",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "worstRating": "1",
        "bestRating": "5",
        "reviewCount": "7"
      }
    }
  `}
      </Script>

      <Script type="application/ld+json" id="local-business-schema">
        {`
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Dignite Studios",
      "image": "https://www.dignitestudios.com/logo.webp",
      "url": "https://www.dignitestudios.com/",
      "description": "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
      "email": "support@dignitestudios.com",
      "telephone": "+1 877-714-1770",
      "priceRange": "$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3505 Lake Lynda Dr #200",
        "addressLocality": "Orlando",
        "addressRegion": "FL",
        "postalCode": "32817",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6008727,
        "longitude": -81.2219365
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 877-714-1770",
        "contactType": "customer service",
        "contactOption": "TollFree",
        "email": "support@dignitestudios.com",
        "availableLanguage": "en"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "sameAs": [
        "https://facebook.com/dignitestudios",
        "https://twitter.com/dignitestudios",
        "https://www.instagram.com/dignitestudios/",
        "https://www.linkedin.com/company/dignitestudios/",
        "https://www.pinterest.com/dignitestudios/"
      ]
    }
  `}
      </Script>

      <Script type="application/ld+json" id="navigation-list-schema">
        {`
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": "https://www.dignitestudios.com/#navigation",
      "itemListElement": [
        {
          "@type": "SiteNavigationElement",
          "position": 1,
          "name": "Home",
          "description": "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with significant solution.",
          "url": "https://www.dignitestudios.com/"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 2,
          "name": "Mobile app development services | Dignite Studios",
          "description": "Recruit top mobile app design services that flawlessly create innovative UI/UX designs, and deliver smooth UX wireframes that fit your match. A highly experienced suite of designing application services will elevate your app’s design at a pace of breakneck.",
          "url": "https://www.dignitestudios.com/services/mobile-app-development"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 3,
          "name": "Mobile app design services | Dignite Studios",
          "description": "Let's delve into professional mobile app development services encompassing multiple app solutions for your tailored needs. Our high-ranking team crafts ingenious and state-of-the-art applications to stand out in your mobile services.",
          "url": "https://www.dignitestudios.com/services/mobile-app-development"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 4,
          "name": "Mobile app consulting services | Dignite Studios",
          "description": "Explore professional mobile application consulting services with our expert agency to thrive your innovative application solutions. Here, you’ll experience modern mobile application development strategies to make your company bulge out.",
          "url": "https://www.dignitestudios.com/services/mobile-app-consulting-services"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 5,
          "name": "Mobile app testing services | Dignite Studios",
          "description": "Embark on top-tier mobile app testing services from the leading company. We provide comprehensive application solutions to ensure optimal performance by industry testing experts.",
          "url": "https://www.dignitestudios.com/services/mobile-app-testing-services"
        },
        {
          "@type": "SiteNavigationElement",
          "position": 6,
          "name": "Mobile app development services | Dignite Studios",
          "description": "The first-class Android app development company Dignite Studios bestows the best international development mobile app standards so that the agency can fulfill custom application solutions and other mobile projects.",
          "url": "https://www.dignitestudios.com/services/android-app-development-services"
        }
      ]
    }
  `}
      </Script>

      <Script type="application/ld+json" id="person-schema">
        {`
    {
      "@context": "https://schema.org/",
      "@type": "Person",
      "@id": "https://www.dignitestudios.com/#person",
      "name": "Dignite Studios",
      "url": "https://www.dignitestudios.com/",
      "description": "Explore interactive user experience to transform your software application to stand out among top mobile app development companies. Our agency fabricates your mobile application process effectively with a significant solution.",
      "image": "https://www.dignitestudios.com/logo.webp",
      "sameAs": [
        "https://facebook.com/dignitestudios",
        "https://twitter.com/dignitestudios",
        "https://www.instagram.com/dignitestudios/",
        "https://www.linkedin.com/company/dignitestudios/",
        "https://www.pinterest.com/dignitestudios/"
      ]
    }
  `}
      </Script>
    </>
  );
};

export default Page;
