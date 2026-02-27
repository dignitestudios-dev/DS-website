import MobileAppMiami from "@/components/Locations/mobile-app-miami/MobileAppMiami";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Mobile App Development Company in Miami | Dignite Studios",
  description:
    "Custom mobile app development services in Miami including iOS, Android, and cross-platform solutions for businesses and startups. Get a free quote today!",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-miami",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-miami/#business",
  name: "Dignite Studios ‑ Mobile App Development Miami",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-miami",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in Miami including iOS, Android, and cross-platform solutions for businesses and startups.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Miami Office Address",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "Enter ZIP Code",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Miami",
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
    "https://www.dignitestudios.com/locations/mobile-app-development-miami/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in Miami",
  description:
    "Custom mobile app development services in Miami including iOS, Android, and cross-platform solutions tailored to your business needs.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-miami",
  },
  areaServed: {
    "@type": "City",
    name: "Miami, FL",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-miami/#breadcrumb",
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
      name: "Mobile App Development Miami",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-miami",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-miami/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build both iOS and Android apps in Miami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of the projects take almost three to six months based on the app features and also the overall complexity.",
      },
    },
    {
      "@type": "Question",
      name: "How long does mobile app development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most of the projects take almost three to six months based on the app features and also the overall complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our app development Miami provides the ongoing maintenance, updates and the support after the launch.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help refine my idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our mobile app developers in Miami help refine the idea by planning features, strategy and budget before the development.",
      },
    },
    {
      "@type": "Question",
      name: "How much does mobile app development in Miami cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on various features, platforms and scope. Our mobile app development team provides the next step after reviewing the requirements.",
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
      <GlobalLayout page={<MobileAppMiami />} />
    </>
  );
};

export default page;
