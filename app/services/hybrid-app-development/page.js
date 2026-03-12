import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React, { lazy, Suspense } from "react";
import HybridAppDev from "@/components/services/HybridAppDev/HybridAppDev";

const MobileAppDevelopment = lazy(() => import("@/components/services/MobileAppDevelopment/MobileAppDevelopment"));

export const metadata = {
  title: "Hybrid Mobile App Development Services - Scalable Apps",
  description:
    "Upgrade your business with our hybrid mobile app development services. Launch apps with us that engage and attract users on iOS & Android. Get started now!",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/hybrid-app-development",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <HybridAppDev />
        </Suspense>
      } />

      {/* Service Schema */}
      <Script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.dignitestudios.com/services/progressive-web-app-development#service",
            name: "Hybrid App Development Services",
            url: "https://www.dignitestudios.com/services/hybrid-app-development",
            description:
              "Hybrid app development services by Dignite Studios to build scalable cross-platform mobile applications using a single codebase for iOS and Android. The service includes UI/UX design, development, migration, testing, deployment, and ongoing support.",
            serviceType: "Hybrid Mobile App Development",
            provider: {
              "@type": "Organization",
              name: "Dignite Studios",
              url: "https://www.dignitestudios.com",
            },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            offers: {
              "@type": "Offer",
              url: "https://www.dignitestudios.com/services/hybrid-app-development",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <Script
        type="application/ld+json"
        id="breadcrumb-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Services",
                item: "https://www.dignitestudios.com/services/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Hybrid App Development Services",
                item: "https://www.dignitestudios.com/services/hybrid-app-development",
              },
            ],
          }),
        }}
      />

      {/* FAQPage Schema */}
      <Script
        type="application/ld+json"
        id="faq-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do you build Hybrid apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our hybrid mobile app development services create apps that grow with your business. We ensure smooth performance, fast loading and easy management so your app can handle more users and traffic while delivering a reliable and fluent experience across both iOS and Android devices.",
                },
              },
              {
                "@type": "Question",
                name: "How long does hybrid development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The timeline depends on your app’s complexity, features and integrations. Our hybrid app development agency follows a structured process to complete the project efficiently. We focus on quality, clear communication and timely delivery so your app launches on schedule and operates smoothly for your business.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support hybrid app feature development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. With our hybrid mobile app development services, we create custom features and integrations for your app. These enhancements improve functionality, connect third-party tools, automate tasks, and deliver a seamless user experience across both iOS and Android.",
                },
              },
              {
                "@type": "Question",
                name: "Can you refine my Hybrid app idea?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our hybrid development agency helps refine your app idea, plan features and implement the design. We guide you step by step to ensure your app is easy to use, scalable, visually appealing and aligned with your business goals and customer expectations.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with startups and enterprises?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We work with businesses of all sizes. As a professional hybrid app development agency, we deliver tailored solutions for startups and large enterprises, ensuring your app is secure, scalable and optimized to grow your business while providing a smooth customer experience.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
};

export default page;
