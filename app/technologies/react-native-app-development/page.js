import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const ReactNative = lazy(() => import("@/components/Technologies/ReactNative/ReactNative"));
export const metadata = {
  title: "React Native App Development Company | Dignite Studio",
  description:
    "Hire a trusted react native app development company to build fast, scalable, and user-friendly mobile apps for startups and enterprises across the USA.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/technologies/react-native-app-development",
  },
};
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/technologies/react-native-app-development/#business",
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
  "@id":
    "https://www.dignitestudios.com/technologies/react-native-app-development/#service",
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
  "@id":
    "https://www.dignitestudios.com/technologies/react-native-app-development/#breadcrumb",
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
  "@id":
    "https://www.dignitestudios.com/technologies/react-native-app-development/#faq",
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
      <Script
        key="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        key="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <ReactNative />
        </Suspense>
      } />
    </>
  );
};

export default page;
