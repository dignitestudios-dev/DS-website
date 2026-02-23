import MobileAppSeattle from "@/components/Locations/mobile-app-seattle/MobileAppSeattle";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Mobile App Development Seattle – Build Scalable Apps",
  description:
    "Dignite Studios is a leading mobile app development Seattle company delivering custom apps that engage users, drive revenue, and ensure long-term growth.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-seattle",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-seattle/#business",
  name: "Dignite Studios - Mobile App Development Seattle",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-seattle",
  telephone: "+1-877-714-1770",
  description:
    "Mobile app development services in Seattle, offering custom iOS, Android, and cross-platform mobile solutions for businesses and startups.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Service Area: Seattle",
    addressLocality: "Seattle",
    addressRegion: "WA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Seattle",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-seattle/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in Seattle",
  description:
    "Custom mobile app development services in Seattle for iOS, Android and cross-platform solutions tailored to business needs.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-seattle",
  },
  areaServed: {
    "@type": "City",
    name: "Seattle, WA",
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
      name: "Locations",
      item: "https://www.dignitestudios.com/locations/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Mobile App Development Seattle",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-seattle",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do you handle iOS and Android app development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We develop apps for iOS and Android using the native and cross platform technologies as a part of our mobile app development Seattle done according to the needs of your projects, budget and performance goals.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it actually cost to develop the custom mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of an app depends on the features, design, platform and complexity. We provide the clear estimates after understanding requirements as part of our custom mobile app development services Seattle.",
      },
    },
    {
      "@type": "Question",
      name: "How long does mobile app development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Development timelines vary, but projects handled through a mobile app development company seattle typically take 3-6 months depending on the scope and the testing needs.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our mobile app development company Seattle delivers the ongoing app support and the maintenance which ensures that the app runs quite smoothly over the time.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help refine my app idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our team helps shape the custom mobile app development services Seattle strategy before development even begins.",
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
      <GlobalLayout page={<MobileAppSeattle />} />
    </>
  );
};

export default page;
