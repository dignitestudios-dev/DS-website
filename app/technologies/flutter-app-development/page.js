import FlutterDev from "@/components/Technologies/flutter/FlutterDev";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Flutter App Development Company in USA | Dignite",
  description:
    "Dignite Studios is a flutter app development company in the USA building fast, mobile apps for startups with performance-driven execution.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/technologies/flutter-app-development",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://www.dignitestudios.com/technologies/flutter-app-development",
  name: "Flutter App Development",
  description:
    "Custom Flutter app development services delivering high-performance cross-platform mobile applications for startups and enterprises.",
  url: "https://www.dignitestudios.com/technologies/flutter-app-development",
  image: "https://www.dignitestudios.com/logo.webp",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Flutter App Development",
  description:
    "Dignite Studios offers expert Flutter app development services to build high-performance cross-platform mobile applications tailored to business needs.",
  url: "https://www.dignitestudios.com/technologies/flutter-app-development",
  provider: {
    "@type": "Organization",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com",
    logo: "https://www.dignitestudios.com/logo.webp",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "United States",
    },
    {
      "@type": "Country",
      name: "Canada",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Flutter App Development Service Options",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Flutter App Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Enterprise Flutter Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design for Flutter Apps",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "API & Third-Party Integrations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Testing & Maintenance",
        },
      },
    ],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
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
      name: "Technologies",
      item: "https://www.dignitestudios.com/technologies/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Flutter App Development",
      item: "https://www.dignitestudios.com/technologies/flutter-app-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build scalable Flutter apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we design Flutter apps using clean architecture, modular components and performance focused engineering. Unlike many flutter app development companies, our team plans from day one, making sure that your product can handle increasing users, new features and evolving business needs without slowing down or breaking under pressure.",
      },
    },
    {
      "@type": "Question",
      name: "How long does Flutter app development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The timeline varies based on your app's features, integrations and designs. Simple products may take a few weeks, while advanced platforms require several months. As a top flutter app development company, we follow a structured process to deliver gradually, keeping communication clear and avoiding unnecessary delays during development.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our work continues after launch. We provide ongoing monitoring, performance improvements, security updates and feature enhancements. This ensures that your app remains stable, adapts according to user feedback and continues to deliver value as your business grows over time.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refine my app idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We help turn early ideas into clear, workable product strategies. To create a targeted plan, our team examines objectives, users and features. This approach reduces risk, improves decision making and ensures the app solves real problems before development even begins.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we work with both early stage startups and established enterprises. Whether you're validating a concept or scaling an existing product, our team adapts its approach to match goals, budget and technical needs. As a trusted flutter app development company usa, we maintain quality and long term performance at every stage.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GlobalLayout page={<FlutterDev />} />
    </>
  );
};

export default page;
