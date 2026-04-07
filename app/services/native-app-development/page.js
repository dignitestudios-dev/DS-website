import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const NativeAppDevelopment = lazy(() => import("@/components/services/NativeAppDevelopment/NativeAppDevelopment"));

export const metadata = {
  title: " Expert native app development company - Dignite Studios",
  description:
    " Leading top native app development company delivering highly functional iOS and Android apps with scalability and customized solutions for businesses.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/native-app-development",
  },
};

const page = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Native App Development",
    "description": "Professional native mobile app development services for iOS and Android — delivering custom, high-performance, and user-friendly mobile applications tailored to your business needs.",
    "provider": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "url": "https://www.dignitestudios.com/",
      "logo": "https://www.dignitestudios.com/logo.webp"
    },
    "serviceType": "Mobile App Development",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "url": "https://www.dignitestudios.com/services/native-app-development"
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
        "name": "Services",
        "item": "https://www.dignitestudios.com/services/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Native App Development",
        "item": "https://www.dignitestudios.com/services/native-app-development"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Do you build scalable Native apps?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we design Native apps using clean architecture, modular components and performance focused engineering. Unlike many native development companies, our team plans from day one, making sure that your product can handle the increasing users, new features and evolving business needs without slowing down or breaking it under the pressure."
      }
    },{
      "@type": "Question",
      "name": "How long does native app development take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The timeline varies based on your app’s features, integrations and the complex designs. Simple native apps may even take a few weeks, meanwhile the advanced platforms require quite several months. As a top native app development company, we follow a structured process to deliver gradually. By keeping the communication transparent and avoiding unnecessary delays during the development."
      }
    },{
      "@type": "Question",
      "name": "Do you offer the post launch support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our work continues even after launch. We provide ongoing monitoring, performance improvements, security updates and feature enhancements for native apps. This also makes sure that your native app remains stable, adapts according to the user feedback and continues to deliver value as your business grows over the time."
      }
    },{
      "@type": "Question",
      "name": "Can you refine my app idea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We help turn the early ideas into clear, workable native app strategies. To create a targeted plan, our development team also examines objectives, users and features. This approach also reduces the risk, improves the decision making and the native app also solves the real problems before the development even begins."
      }
    },{
      "@type": "Question",
      "name": "Do you work with startups and enterprises?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we work with both the startups and established enterprises. Whether you’re validating the concept or scaling the existing product, our native development team also adapts its approach to match the goals, budget and technical needs. As a trusted native app development company, we maintain quality and long term performance at every stage."
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
      <div>
        <GlobalLayout page={
          <Suspense fallback={<LazyLoader />}>
            <NativeAppDevelopment />
          </Suspense>
        } />
      </div>
    </>
  );
};

export default page;
