import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const FoodIndustry = lazy(() => import("@/components/Industries/FoodIndustry/FoodIndustry"));

export const metadata = {
  title: " Food delivery app development company - Dignite Studios",
  description:
    "Looking for an expert food delivery app development company? Dignite Studios builds scalable food apps to help restaurants grow and serve customers faster.",
  alternates: {
    canonical: "https://www.dignitestudios.com/industries/food-industry",
  },
};

const page = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Food Industry Software & App Development Services",
    "url": "https://www.dignitestudios.com/industries/food-industry",
    "description": "Custom software and mobile app development services for the food industry including food delivery apps, restaurant management systems, and online ordering solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "url": "https://www.dignitestudios.com"
    },
    "areaServed": "Global",
    "serviceType": "Food Industry Software Development",
    "audience": {
      "@type": "Audience",
      "audienceType": "Food Industry Businesses"
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
        "name": "Food Industry",
        "item": "https://www.dignitestudios.com/industries/food-industry"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "How much time does it usually take to build a food delivery mobile app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dignite Studios doesn’t provide a fixed, similar timeline for each food mobile app during development. The time always depends on the complexity and features of every food delivery application. Usually, a mid-level application would take up to 8-12 weeks, but it all depends, again. If you need a final cost and pricing estimate, contact our team and share your app idea."
      }
    },{
      "@type": "Question",
      "name": "Can you build iOS applications for Food delivery apps, too?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We’re experts, building both iOS and Android food delivery apps. Hire food delivery mobile app developer who creates high-performance applications for businesses. The developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality."
      }
    },{
      "@type": "Question",
      "name": "Would you provide support after we’re done with the app launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. It’s called post-launch support, and we definitely stay with you even when your food delivery app is launched. Providing proper post-launch maintenance and updates about the app. So that we know that the food app would stay aligned with the vision and users’ needs."
      }
    },{
      "@type": "Question",
      "name": "What if I have a rough idea? Can you guide me?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Here’s a thing: There’s no app that starts with the perfect, flawless idea. With this understanding, we show guidance through a free consultation and explain the concepts in much easier way. The food app experts can help you out by adding practical aspects to your application and preparing it for the future."
      }
    },{
      "@type": "Question",
      "name": "How much does a food delivery application usually cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Basically, we don’t have fixed pricing rules for all the applications. The cost completely depends on the features and the integrations you want your food application to have. It’s up to your food delivery app’s vision, but at Dignite Studios, we keep pricing transparent with no hidden fees."
      }
    },{
      "@type": "Question",
      "name": "Are you currently working with startups, too, or just the enterprises?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The food app development team works with both startups and enterprises. So, it doesn’t matter if you’re a startup or enterprise, we would definitely work with you. Whether you’re building an MVP or scaling an existing application. We would look forward to building an amazing app together either way."
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
          <FoodIndustry />
        </Suspense>
      } />
    </>
  );
};

export default page;
