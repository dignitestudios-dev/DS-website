import MobileAppCharlotte from "@/components/Locations/mobile-app-charlotte/MobileAppCharlotte";

import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
export const metadata = {
  title: "App Development Services in Charlotte designed for Startups",
  description:
    "Looking for app development services in Charlotte? We build custom high-performance mobile apps designed to grow with your business. Talk to the experts now",
};
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-charlotte/#business",
  name: "Dignite Studios - Mobile App Development Charlotte",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-charlotte",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in Charlotte, NC, offering iOS, Android, and cross-platform solutions tailored to your business needs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Charlotte",
    addressLocality: "Charlotte",
    addressRegion: "NC",
    postalCode: "Insert ZIP Code",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Charlotte",
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
    "https://www.dignitestudios.com/locations/mobile-app-development-charlotte/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in Charlotte",
  description:
    "Custom mobile app development services in Charlotte including iOS, Android, and cross-platform solutions tailored to your business needs.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-charlotte",
  },
  areaServed: {
    "@type": "City",
    name: "Charlotte, NC",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-charlotte/#breadcrumb",
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
      name: "Mobile App Development Charlotte",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-charlotte",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-charlotte/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much time does it usually take to build a mobile app in Charlotte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It always depends on the features, the integrations, and the complexity of each application. There's no single timeline for each mobile app during development. A simple basic application can take around 8-12 weeks, but it all depends on the application. If you want a final estimate, contact our experts and discuss your app plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build iOS applications as well?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are a team of experts, building iOS and Android apps. The team creates applications that are secure and perform well. The team can work with native and Swift to create applications that feel smooth while ensuring functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Would you provide support after we're done with the launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It's known as post-launch support, and we continue to support the client even when the app is launched. Dignite Studios provides post-launch maintenance and updates. So that we know that the app is optimized and aligned with the vision and users' needs.",
      },
    },
    {
      "@type": "Question",
      name: "What if I have a rough idea? Can you guide me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trust us, not even a single app starts with the perfect idea. With this understanding, we validate the concepts and provide guidance through a free consultation. We can help you out by adding practical aspects to your app idea and preparing it for the future.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a mobile application usually cost in Charlotte, NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dignite Studios doesn't have fixed pricing rules. The pricing usually depends on the features, the integrations, and how complex you want your application to be. It's upto your app idea, but we keep the pricing simple and transparent, adding no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Are you currently working with startups, too, or just the enterprises in NC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The development team at Dignite Studios works with both startups and enterprises across Charlotte, NC. It really doesn't make much difference for us whether you're building an MVP or scaling an existing application. We would look forward to building something amazing together either way.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        key="professional-service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        key="service-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        key="breadcrumb-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        key="faq-schema"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GlobalLayout page={<MobileAppCharlotte />} />
    </>
  );
};

export default page;
