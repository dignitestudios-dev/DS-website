import ReactNative from "@/components/Technologies/ReactNative/ReactNative";

import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
export const metadata = {
  title: "React Native App Development Company | Dignite Studio",
  description:
    "Hire a trusted react native app development company to build fast, scalable, and user-friendly mobile apps for startups and enterprises across the USA.",
};
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "React Native App Development Company",
  description:
    "Hire a trusted react native app development company to build fast, scalable, and user-friendly mobile apps for startups and enterprises across the USA.",
  url: "https://www.dignitestudios.com/technologies/react-native-app-development",
  image: "https://www.dignitestudios.com/logo.webp",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  telephone: "+1 877 714 1770",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "React Native App Development Services",
  description:
    "Expert react native app development services helping businesses launch faster, scale smarter and engage users with high-performance mobile solutions.",
  provider: {
    "@type": "Organization",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/technologies/react-native-app-development",
    logo: "https://www.dignitestudios.com/logo.webp",
  },
  serviceType: "React Native App Development",
  areaServed: "Worldwide",
  url: "https://www.dignitestudios.com/technologies/react-native-app-development",
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
      name: "Technologies",
      item: "https://www.dignitestudios.com/technologies/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "React Native App Development",
      item: "https://www.dignitestudios.com/technologies/react-native-app-development",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you build scalable React Native apps?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We design architectures which support the growth, performance and the easy future updates without rebuilding the entire product.",
      },
    },
    {
      "@type": "Question",
      name: "How long does React Native development take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on the features and complexity, but most MVPs built by a top react native app development company launch within a few weeks with the agile delivery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post launch support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We provide maintenance, upgrades, monitoring and performance optimization after the deployment.",
      },
    },
    {
      "@type": "Question",
      name: "Can you refine my app idea?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We help shape concepts into the technical strategies which match user and business goals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with startups and enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support both the early stage startups and established enterprises through the flexible engagement models.",
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
      <GlobalLayout page={<ReactNative />} />
    </>
  );
};

export default page;
