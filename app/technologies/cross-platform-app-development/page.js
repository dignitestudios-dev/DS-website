import CrossPlatform from "@/components/Technologies/CrossPlatform/CrossPlatform";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: " Cross Platform App Development Services | Dignite",
  description:
    " Get expert cross platform app development services to build fast, scalable, and user-friendly apps for startups and enterprises with Dignite Studios.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/technologies/cross-platform-app-development",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/technologies/cross-platform-app-development/#business",
  name: "Cross-Platform App Development",
  description:
    "Cross-Platform app development services by Dignite Studios to build scalable and high-performance mobile applications that run on multiple platforms including iOS and Android.",
  url: "https://www.dignitestudios.com/technologies/cross-platform-app-development",
  image: "https://www.dignitestudios.com/logo.webp",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  telephone: "+1 877 714 1770",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.dignitestudios.com/technologies/cross-platform-app-development/#service",
  name: "Cross Platform App Development Services",
  description:
    "Dignite Studios delivers high performance cross platform mobile app development services helping businesses launch faster, scale smarter and engage users across platforms with secure, reliable and goal‑focused mobile solutions.",
  provider: {
    "@type": "Organization",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/technologies/cross-platform-app-development",
    logo: "https://www.dignitestudios.com/logo.webp",
    sameAs: [
      "https://www.facebook.com/dignitestudios",
      "https://www.linkedin.com/company/dignitestudios",
      "https://twitter.com/dignitestudios",
    ],
  },
  serviceType: "Cross Platform App Development",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cross Platform Development Offerings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Application Architecture & Planning",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Testing & Quality Assurance",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Deployment & Store Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "App Modernization & Upgrades",
        },
      },
    ],
  },
  url: "https://www.dignitestudios.com/technologies/cross-platform-app-development",
  mainEntityOfPage:
    "https://www.dignitestudios.com/technologies/cross-platform-app-development",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/technologies/cross-platform-app-development/#breadcrumb",
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
      name: "Cross‑Platform App Development",
      item: "https://www.dignitestudios.com/technologies/cross-platform-app-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/technologies/cross-platform-app-development/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build scalable cross platform apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our team supports growth, smooth performance and secure integrations. We ensure smooth performance and secure integrations. We try if new features can be added without disturbing the workflow and to make your app stay reliable and increase over time.",
      },
    },
    {
      "@type": "Question",
      name: "How long does cross-platform app development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The time highly depends on the project scope, features, integrations and tests. Most cross platform projects take around three to five months prior launch. More platforms for advanced functionality require more time for better quality and performance in devices it mainly be supported too.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After introducing our app we provide support which includes updates, monitoring of performance, fixing of bugs and feature improvements. Our team stays involved to keep your app secure, improved and compatible with new platform updates for the product to run fluently for users.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refine my app idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We work closely with you to shape raw ideas into practical, business ready solutions. Through discovery sessions, planning and user focused design, we help define features, workflows and technology choices which turn your concept into a functional, market ready application.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We partner with both early stage startups and established enterprises. Startups benefit from fast, flexible builds, while larger organizations receive scalable, secure systems. Our approach adapts to your goals, budget and growth plans to ensure long term success.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      {/* <script
        key="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      /> */}
      <script
        key="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GlobalLayout page={<CrossPlatform />} />
    </>
  );
};

export default page;
