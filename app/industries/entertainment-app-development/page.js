import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const EntertainmentApp = lazy(
  () => import("@/components/Industries/EntertainmentApp/EntertainmentApp"),
);

export const metadata = {
  title: " Entertainment App Development Company Services",
  description:
    " Expert entertainment app development company for streaming, gaming, and music apps. Build scalable, high-performance apps to boost engagement",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/industries/entertainment-app-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Entertainment App Development Services",
  "serviceType": "Entertainment App Development",
  "description": "Dignite Studios offers professional entertainment app development services to build scalable, high-performance mobile and web applications for the entertainment industry, including streaming platforms, media apps, and interactive entertainment solutions.",
  "provider": {
    "@type": "Organization",
    "name": "Dignite Studios",
    "url": "https://www.dignitestudios.com/"
  },
  "areaServed": {
    "@type": "Place",
    "name": "united states"
  },
  "category": "Mobile App Development Services"
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
      "item": "https://www.dignitestudios.com/industries"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Entertainment App Development",
      "item": "https://www.dignitestudios.com/industries/entertainment-app-development"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the price of creating an entertainment app?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The cost of developing an entertainment app depends on features, design complexity and integrations like streaming or payment systems. Basic apps are more affordable while advanced platforms cost more. We analyze your requirements and provide a custom quote which fits your business goals and budget."
    }
  },{
    "@type": "Question",
    "name": "How time-consuming is it to launch an app?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The development timeline depends on the scope and features of the app. Simple entertainment apps can take a few weeks, while complex apps with streaming or real time features may take a few months. We follow a structured and agile process to ensure timely delivery without compromising quality."
    }
  },{
    "@type": "Question",
    "name": "What platforms do you develop for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We develop entertainment apps for iOS, Android and web platforms. Our cross platform development approach ensures your app performs smoothly across devices. This helps you reach a wider audience and maintain a consistent user experience regardless of the platform your users prefer."
    }
  },{
    "@type": "Question",
    "name": "Can you integrate live streaming or AR/VR?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we can integrate live streaming, AR and VR features into your entertainment app. These technologies improve user engagement by offering immersive experiences. Whether it is live events, virtual concerts or interactive content, we build solutions which enhance user interaction and overall app performance."
    }
  },{
    "@type": "Question",
    "name": "Do you provide post-launch support?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we provide complete post launch support, including updates, bug fixes, performance improvements and security enhancements. As an entertainment app development company, we ensure your app stays up to date and runs smoothly. We also help you scale features as your business grows and user needs evolve."
    }
  }]
};

const page = () => {
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
      <GlobalLayout
        page={
          <Suspense fallback={<LazyLoader />}>
            <EntertainmentApp />
          </Suspense>
        }
      />
    </>
  );
};

export default page;
