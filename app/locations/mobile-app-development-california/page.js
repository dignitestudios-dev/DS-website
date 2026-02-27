import MobileAppCalifornia from "@/components/Locations/mobile-app-california/MobileAppCalifornia";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Mobile App Development Company in California | Top Apps",
  description:
    "Top mobile app development company in California. We create scalable apps with smooth UX that bring engagement and business success. Get a free quote now!",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/locations/mobile-app-development-california",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-california/#business",
  name: "Dignite Studios - Mobile App Development California",
  url: "https://www.dignitestudios.com/locations/mobile-app-development-california",
  telephone: "+1-877-714-1770",
  description:
    "Custom mobile app development services in California including iOS, Android, and cross-platform solutions for startups and enterprises.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your California Office Address",
    addressLocality: "California",
    addressRegion: "CA",
    postalCode: "Enter ZIP Code",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "California",
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
    "https://www.dignitestudios.com/locations/mobile-app-development-california/#service",
  serviceType: "Mobile App Development",
  name: "Mobile App Development in California",
  description:
    "Custom mobile app development services in California including iOS, Android, cross-platform solutions, UI/UX design, QA, and consulting for businesses of all sizes.",
  provider: {
    "@type": "ProfessionalService",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/locations/mobile-app-development-california",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "California",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-california/#breadcrumb",
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
      name: "Mobile App Development California",
      item: "https://www.dignitestudios.com/locations/mobile-app-development-california",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/locations/mobile-app-development-california/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much time do you need to develop a mobile app in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary by features and complexity. A simple build may take weeks, while feature-rich apps take longer. To understand your exact timeline, simply request a project estimate from our mobile app development company in California.",
      },
    },
    {
      "@type": "Question",
      name: "Do you develop apps for iOS and Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We've got the best professional mobile app developers in California at Dignite Studios, ensuring that we build high-quality iOS and Android apps that work so smoothly.",
      },
    },
    {
      "@type": "Question",
      name: "Can you create cross-platform apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We are a team of expert mobile app developers in California who use Flutter app development and React Native to build cross-platform apps that feel fully native.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-launch maintenance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We support you long after launch. Our mobile app development company in california handles updates, fixes, enhancements, and ongoing optimization.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help refine my app idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Definitely, when unsure where to start, discuss your idea or project plan with our strategists so that we can guide you through features and user flow.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve in California?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer our services in various sectors. The list continues with healthcare, fintech, retail, real estate, logistics, education, and more. To get access to the expert mobile app development company california, contact us now!",
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
      <GlobalLayout page={<MobileAppCalifornia />} />
    </>
  );
};

export default page;
