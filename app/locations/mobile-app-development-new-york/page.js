import MobileAppNewYork from "@/components/Locations/mobile-app-new-york/MobileAppNewYork";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Experienced Mobile App Development Company New York",
  description:
    "Mobile app development company New York delivering iOS, Android, and cross-platform apps with scalable tech, expert teams, and real business results today.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-new-york",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-new-york/#business",
  name: "Dignite Studios",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-new-york",
  telephone: "+1 877 714 1770",
  priceRange: ".",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your New York Address",
    addressLocality: "New York",
    addressRegion: "NY",
    postalCode: "10001",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "New York",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-new-york/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in New York",
  description:
    "Custom mobile app development services in New York including iOS, Android and cross-platform solutions.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-new-york",
  },
  areaServed: {
    "@type": "City",
    name: "New York",
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
      name: "Mobile App Development New York",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-new-york",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What technologies do you work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We use modern, proven tech. Flutter. React Native. Swift. Kotlin. Node JS. As one of the reliable mobile app development companies in New York, we choose what fits your product best.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire you for just iOS or Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. iOS, Android, or cross-platform. Our app development New York team helps you pick the right setup and builds it properly from day one.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle backend and cloud as well?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We do. Our mobile application development New York services include backend systems, real-time databases, and cloud infrastructure. Everything your app needs to scale smoothly.",
      },
    },
    {
      "@type": "Question",
      name: "How do you keep projects moving on time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clear sprints. Clear timelines. Regular updates. During the development, you will always be aware of what's happening and what's coming next.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. MVPs. Growing products. Complex platforms. We scale the team and process based on your goals.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after launch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We stay involved. Updates. Improvements. Performance checks. Your app keeps getting better over time.",
      },
    },
    {
      "@type": "Question",
      name: "Why work with a New York-based team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Faster communication. Better collaboration. A team that understands your market and treats your product seriously.",
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
      <GlobalLayout page={<MobileAppNewYork />} />
    </>
  );
};

export default page;
