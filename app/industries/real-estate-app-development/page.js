import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const RealState = lazy(() => import("@/components/Industries/RealState/RealState"));

export const metadata = {
  title: "Real Estate App Development Company – Scalable Mobile Apps",
  description:
    "Hire a top real estate app development company to create scalable mobile apps for property platforms, agents, and businesses with smooth user experiences",
  alternates: {
    canonical: "https://www.dignitestudios.com/industries/real-estate-app-development",
  },
};

const page = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate App Development Services",
    "url": "https://www.dignitestudios.com/industries/real-estate",
    "description": "Dignite Studios provides real estate app development services including property listing platforms, CRM systems, and custom real estate software solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "url": "https://www.dignitestudios.com/",
      "logo": "https://www.dignitestudios.com/logo.webp"
    },
    "serviceType": "Real Estate Software Development",
    "areaServed": {
      "@type": "Place",
      "name": "US"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        "name": "Industries",
        "item": "https://www.dignitestudios.com/industries/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Real Estate",
        "item": "https://www.dignitestudios.com/industries/real-estate"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How much does it cost to build a real estate app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The real estate app development company cost depends mostly on features, design complexity, integrations and platform choice. A simple app can cost less, while advanced apps with AI dashboards and the custom features require a higher budget. The final cost varies based on project scope and also the business requirements."
      }
    },{
      "@type": "Question",
      "name": "How long does development take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline for real estate applications depends on the app’s complexity and features. The basic app may also take a few weeks, while medium or complex apps can also take several months. Proper planning, design and testing also affect the overall development time and final delivery schedule."
      }
    },{
      "@type": "Question",
      "name": "What features are essential in a real estate app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Essential features include property listings, advanced search filters, map integration, user profiles, chat options and push notifications. These features improve user experience and make property discovery easier. Additional features like virtual tours and analytics can further enhance overall app performance."
      }
    },{
      "@type": "Question",
      "name": "Can you integrate MLS or third party property APIs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we integrate MLS systems and third party APIs such as maps, payment gateways and property databases. These integrations improve the app functionality and also provide the real time data. Our mobile app development for real estate approach ensures the smooth and secure API integration without affecting performance or user experience."
      }
    },{
      "@type": "Question",
      "name": "Do you provide post launch support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer complete post launch support as part of our real estate app development services. This also includes regular updates, bug fixes, performance optimization and feature improvements. Our team also ensures your app runs smoothly and stays updated as your business grows and users also need to evolve."
      }
    }]
  };

  return (
    <>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <RealState />
        </Suspense>
      } />
    </>
  );
};

export default page;
