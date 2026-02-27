import MobileAppChicago from "@/components/Locations/mobile-app-chicago/MobileAppChicago";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Mobile App Development Company Chicago | Dignite Studio",
  description:
    "Dignite Studios is a trusted mobile app development company Chicago businesses choose for scalable iOS, Android, and cross-platform apps built for growth.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-chicago",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-chicago/#business",
  name: "Dignite Studios - Mobile App Development Chicago",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-chicago",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in Chicago including iOS, Android, and cross-platform solutions for businesses and startups.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Insert Chicago Office Address Here",
    addressLocality: "Chicago",
    addressRegion: "IL",
    postalCode: "Insert ZIP Code",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Chicago",
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
    "https://www.dignitestudios.com/locations/mobile-app-development-chicago/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in Chicago",
  description:
    "Custom mobile app development services in Chicago including iOS, Android, and cross-platform solutions tailored to your business needs.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-chicago",
  },
  areaServed: {
    "@type": "City",
    name: "Chicago, IL",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-chicago/#breadcrumb",
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
      name: "Mobile App Development Chicago",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-chicago",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-chicago/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are your apps compatible with both iOS and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As a mobile app development company in Chicago, we deliver both native and cross-platform solutions to ensure consistent performance across all devices.",
      },
    },
    {
      "@type": "Question",
      name: "How long does mobile app development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most projects handled by our mobile app development company in Chicago take between 8 to 16 weeks, depending on features, integrations, and testing requirements.",
      },
    },
    {
      "@type": "Question",
      name: "Is post-launch support provided?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ongoing updates, performance monitoring, security enhancements, and optimization are all included after launch.",
      },
    },
    {
      "@type": "Question",
      name: "Can my app idea be refined before development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Discovery sessions and sprint planning as part of our mobile app development process in Chicago help refine ideas for market readiness.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support both startups and enterprises through scalable engagement models tailored to evolving business needs.",
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
      <GlobalLayout page={<MobileAppChicago />} />
    </>
  );
};

export default page;
