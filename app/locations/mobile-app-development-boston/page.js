import MobileAppBoston from "@/components/Locations/mobile-app-boston/MobileAppBoston";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Mobile Application Development Boston | Dignite Studios",
  description:
    "Mobile Application Development Boston services by Dignite Studios. We build high-performing apps for startups and growing businesses working worldwide.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-boston",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-boston/#business",
  name: "Dignite Studios - Mobile App Development Boston",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-boston",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in Boston, offering iOS, Android, and cross-platform solutions tailored to your business needs.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Boston",
    addressLocality: "Boston",
    addressRegion: "MA",
    postalCode: "Insert ZIP Code",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Boston",
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
    "https://www.dignitestudios.com/locations/mobile-app-development-boston/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in Boston",
  description:
    "Custom mobile app development services in Boston including iOS, Android, and cross-platform solutions tailored to your business needs.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-boston",
  },
  areaServed: {
    "@type": "City",
    name: "Boston, MA",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-boston/#breadcrumb",
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
      name: "Mobile App Development Boston",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-boston",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-boston/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What tools and technologies do you use to build mobile apps in Boston?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We keep our tech stack modern and flexible. Depending on your product, we provide Flutter app development services, React Native app development services, Kotlin app development services, and Firebase development services. For mobile application development Boston teams can depend on, we offer a wide range of tools and tech.",
      },
    },
    {
      "@type": "Question",
      name: "How much time does it take to build an application?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A simple MVP can take around 2 or 3 months. If the features are heavy, apps take longer. For mobile application development in Boston, we divide the work into easy steps, so you always know what's happening and when.",
      },
    },
    {
      "@type": "Question",
      name: "How can I schedule a consultation with Dignite Studios?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You don't need a detailed plan to start. Just book a call with us. We'd listen to your idea and guide you on the next steps. We are experts at mobile application development Boston for a reason, so you no longer have to figure things out on your own. Just contact us!",
      },
    },
    {
      "@type": "Question",
      name: "How much should I expect to spend on a mobile app?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There's really not a \"one price fits all\" rule when it comes to developing an app. Because mobile application development in Boston means that pricing usually depends on features and timelines. And for that, we'd need to understand your idea to prepare a clear number for you so contact our experts today to get a cost estimate!",
      },
    },
    {
      "@type": "Question",
      name: "What are the services in mobile app development services are you offering?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Dignite Studios, we're offering end-to-end services. This includes strategy, UI/UX design, iOS and Android development, cross-platform apps, testing, and post-launch support. Our mobile application development Boston services are designed to support startups and growing businesses at every stage.",
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
      <GlobalLayout page={<MobileAppBoston />} />
    </>
  );
};

export default page;
