import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const DatingApp = lazy(() => import("@/components/Industries/DatingApp/DatingApp"));

export const metadata = {
  title: " Expert dating app development company - Dignite Studios",
  description:
    "Looking for the leading dating app development company? Dignite Studios builds scalable food apps to help restaurants grow and serve customers faster.",
  alternates: {
    canonical: "https://www.dignitestudios.com/industries/dating-app-development",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dating App Development Services",
  "url": "https://www.dignitestudios.com/industries/dating-app-development",
  "description": "Professional dating app development services to build secure, scalable, and feature-rich matchmaking applications. Dignite Studios provides custom dating app solutions including real-time chat, matching algorithms, and user verification features.",
  "provider": {
    "@type": "Organization",
    "name": "Dignite Studios",
    "url": "https://www.dignitestudios.com/"
  },
  "areaServed": {
    "@type": "Place",
    "name": "united states"
  },
  "serviceType": "Dating App Development"
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
      "name": "Dating App Development",
      "item": "https://www.dignitestudios.com/industries/dating-app-development"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much time do your developers take to build a dating app?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dignite Studios doesn't provide a fixed, similar timeline for each dating app during development. The time always depends on the complexity and features of every dating application. Usually, a mid-level app would take up to 8–12 weeks, but it depends on requirements. If you need a final cost and pricing estimate for your app, contact our team and share your app idea."
    }
  },{
    "@type": "Question",
    "name": "Can you build iOS applications for dating and matchmaking apps, too?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're experts in building both iOS and Android dating apps. Hire dating app developers who create high-performance applications for businesses. The developers can easily work with native technologies and Swift to develop applications that feel simple while ensuring strong functionality."
    }
  },{
    "@type": "Question",
    "name": "Would you provide support after we're done with the app launch?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. It's called post-launch support, and we definitely stay with you even after your dating app is launched. We provide proper maintenance and updates so that the app stays aligned with your vision and users' needs."
    }
  },{
    "@type": "Question",
    "name": "What if I have a rough idea? Can your team guide me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "There's no matchmaking app that starts with a perfect idea. We provide guidance through a free consultation and explain concepts in a simple way. Our dating app experts help you add practical features and prepare your application for the future."
    }
  },{
    "@type": "Question",
    "name": "How much does a dating application usually cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We don't follow fixed pricing for all dating applications. The cost depends on the features and integrations you want in your dating application. At Dignite Studios, we maintain transparent pricing with no hidden fees."
    }
  },{
    "@type": "Question",
    "name": "Are you currently working with startups, too, or just enterprises?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our dating app team works with both startups and enterprises. Whether you want to build an MVP or scale an existing application, we are ready to help you build a strong dating platform together."
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
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <DatingApp />
        </Suspense>
      } />
    </>
  );
};

export default page;
