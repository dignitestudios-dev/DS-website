import MobileAppWashington from "@/components/Locations/mobile-app-washington/MobileAppWashington";

import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
export const metadata = {
  title: "Expert App Development Company Washington DC | Top Apps",
  description:
    "Trustworthy app development company Washington DC. We create scalable apps with smooth UX that bring engagement and business success. Get a free quote now!",
};
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-washington/#business",
  name: "Dignite Studios - Mobile App Development Washington",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-washington",
  telephone: "+1-877-714-1770",
  description:
    "Mobile app development services in Washington DC, offering custom iOS, Android, and cross-platform mobile solutions for businesses and startups.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Service Area: Washington DC",
    addressLocality: "Washington",
    addressRegion: "DC",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Washington DC",
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
    "https://www.dignitestudios.com/locations/mobile-app-development-washington/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in Washington DC",
  description:
    "Custom mobile app development services in Washington DC for iOS, Android and cross-platform solutions tailored to business needs.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-washington",
  },
  areaServed: {
    "@type": "City",
    name: "Washington DC",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-washington/#breadcrumb",
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
      name: "Mobile App Development Washington",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-washington",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much time does it usually take to build a mobile app in Washington DC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's no fixed timeline for each mobile app during development. It always depends on the features, the integrations, and the complexity of each application. A simple basic application can take up to 8-12 weeks, but it all depends on each application. If you want a perfect estimate, contact our experts and discuss your app plan.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build iOS applications too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dignite Studios is a team of experts at building both iOS and Android apps. The team of developers creates applications that are high-performing and secure. The team can easily work with native and Swift to create applications that feel smooth while ensuring functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Would you provide support after we're done with the launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It's known as post-launch support, and we stay with the client even when the app is launched. We provide post-launch maintenance and updates. So that we know that the app stays optimized and aligned with the vision and users' needs.",
      },
    },
    {
      "@type": "Question",
      name: "What if I have a rough idea? Can you guide me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Trust us, no app starts with the perfect idea. Understanding this, we validate the concepts and provide guidance through complementary consultation. The experts can help you out by adding practical aspects to your app idea and preparing it for the future.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a mobile application usually cost in Washington DC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't have the fixed pricing rules. The pricing and cost usually depend on the features, the integrations, and how complex you want your application to be. It's upto your app idea, but we keep the pricing transparent, adding no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Are you currently working with startups, too, or just the enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The development team at Dignite Studios works with both startups and enterprises across Washington, DC. We would love to work with you. It really doesn't make a difference for us whether you're building an MVP or scaling an existing application. We would look forward to building something amazing together either way.",
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
      <GlobalLayout page={<MobileAppWashington />} />
    </>
  );
};

export default page;
