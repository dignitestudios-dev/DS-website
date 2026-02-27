import MobileAppTexas from "@/components/Locations/mobile-app-texas/MobileAppTexas";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
import Script from "next/script";

export const metadata = {
  title: "Trustable Mobile App Development in Texas | Top Apps",
  description:
    "Trustworthy mobile app development in Texas. Dignite Studios creates scalable apps with smooth UX that bring engagement and business success. Get a free quote now!",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-texas",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-texas/#business",
  name: "Dignite Studios ‑ Mobile App Development Texas",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-texas",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in Texas including iOS, Android, and cross-platform solutions for businesses and startups.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Texas",
    addressRegion: "TX",
    postalCode: "Enter ZIP Code",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Texas",
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
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-texas/#business",
  name: "Dignite Studios ‑ Mobile App Development Texas",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-texas",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in Texas including iOS, Android, and cross-platform solutions for businesses and startups.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Texas",
    addressRegion: "TX",
    postalCode: "",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Texas",
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
      name: "Mobile App Development Texas",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-texas",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much time does it usually take to build a mobile app development in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We don't provide a fixed, similar timeline for each mobile app during development. The time always depends on the features and the complexity of each application. Usually, a basic application would take up to 8-12 weeks, but it all depends. If you want a final estimate, contact our experts and discuss your app idea.",
      },
    },
    {
      "@type": "Question",
      name: "Can you build iOS applications too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We're a team of experts building both iOS and Android apps. Our professional developers create high-performance applications. The developers can easily work with native and Swift to create applications that feel simple and smooth while ensuring functionality.",
      },
    },
    {
      "@type": "Question",
      name: "Would you provide support after we're done with the launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We call it post-launch support, and of course we stay with the client even when the app is launched—providing post-launch maintenance and updates. This ensures the app stays aligned with the vision and users' needs.",
      },
    },
    {
      "@type": "Question",
      name: "What if I have a rough idea? Can you guide me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Here's a fact: No app starts with the perfect idea. With this understanding, we validate concepts and offer guidance through a free consultation. The experts help by adding practical aspects to your app and preparing it for the future.",
      },
    },
    {
      "@type": "Question",
      name: "How much does a mobile application usually cost in Texas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Similarly, we don't have the same fixed pricing rules for all applications. The pricing and cost depend completely on the features and integrations you want your application to have. It's all based on your app's vision, but we keep pricing transparent with no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "Are you currently working with startups, too, or just enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The development team works with both startups and enterprises across Texas. We would definitely work with you—whether you're building an MVP or scaling an existing application. We look forward to building something amazing together either way.",
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
      <GlobalLayout page={<MobileAppTexas />} />
    </>
  );
};

export default page;
