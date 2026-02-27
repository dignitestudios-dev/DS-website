import MobileAppTampa from "@/components/Locations/mobile-app-tampa/MobileAppTampa";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "App Development Services in Tampa designed for Startups",
  description:
    "Looking for app development services in Tampa? We build custom high-performance mobile apps designed to grow with your business. Talk to the experts now",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-tampa",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-tampa/#business",
  name: "Dignite Studios - Mobile App Development Tampa",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-tampa",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in Tampa including iOS, Android, and cross-platform solutions tailored to business needs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Insert Tampa Office Address Here",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "Insert ZIP Code",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Tampa",
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
    "https://www.dignitestudios.com/locations/mobile-app-development-tampa/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in Tampa",
  description:
    "Custom mobile app development services in Tampa including iOS, Android, and cross-platform solutions tailored to your business needs.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-tampa",
  },
  areaServed: {
    "@type": "City",
    name: "Tampa, FL",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-tampa/#breadcrumb",
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
      name: "Mobile App Development Tampa",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-tampa",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-tampa/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build both iOS and Android apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We are both an Android and iOS app development company in Tampa so when we discuss mobile app development services in Tampa, we mean both iOS and Android. Built through different technologies like Flutter and Swift, the apps are secure and highly functional.",
      },
    },
    {
      "@type": "Question",
      name: "How long do your developers take to build a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's up to the project type, integrations, and features. Usually, app developers can build applications in 10-16 weeks. It can take longer if the project is more complex, but updates will be provided regularly for Tampa custom app development.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help me with my idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! We guide you from idea to execution, providing expert advice on feasibility, technology selection, and development approach to bring your app concept to life.",
      },
    },
    {
      "@type": "Question",
      name: "Does your team help us after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! The service doesn't end at launch. We stay with you even after the launch to provide post-launch support and help you with updates and scalability.",
      },
    },
    {
      "@type": "Question",
      name: "What industries have you worked with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Being experienced app developers, we have worked with multiple industries: Healthcare, Fintech, Ecommerce, Real Estate, Education, Logistics, and much more. We understand the compliance and standards of each industry.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      <script
        key="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
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
      <GlobalLayout page={<MobileAppTampa />} />
    </>
  );
};

export default page;
