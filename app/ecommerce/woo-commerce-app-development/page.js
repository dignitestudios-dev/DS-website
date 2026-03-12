import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";
import WooCommerceAppDevelopment from "@/components/Ecommerce/WooCommerceAppDevelopment/WooCommerceAppDevelopment";

export const metadata = {
  title: " Expert WooCommerce Development Services | Dignite Studios",
  description:
    "Boost your online store with Dignite Studios’ WooCommerce development services. Plugins and integrations for scalable, reliable, high-performing stores.  ",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/woo-commerce-app-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <WooCommerceAppDevelopment />
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
            name: "WooCommerce App Development",
            description:
              "WooCommerce app development services for building scalable, high-performance mobile applications for WooCommerce powered stores. Services include custom app development, UI/UX design, API integrations, and performance optimization.",
            serviceType: "WooCommerce App Development Services",
            url: "https://www.dignitestudios.com/ecommerce/woo-commerce-app-development",
            provider: {
              "@type": "Organization",
              name: "Dignite Studios",
              url: "https://www.dignitestudios.com",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
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
                name: "Ecommerce",
                item: "https://www.dignitestudios.com/ecommerce",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "WooCommerce App Development",
                item: "https://www.dignitestudios.com/ecommerce/woo-commerce-app-development",
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
                name: "Do you build Scalable WooCommerce stores?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our WooCommerce development services create stores that grow with your business. We ensure smooth performance, fast loading and easy management so your store can handle more products, more traffic and more orders, providing a reliable and fluent shopping experience for your customers at all times.",
                },
              },
              {
                "@type": "Question",
                name: "How long does WooCommerce development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The timeline depends on your store’s complexity, features and integrations. Our WooCommerce development agency follows a structured process to complete the project efficiently. We focus on quality, clear communication and timely delivery so your store launches on schedule and operates smoothly for your business.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support WooCommerce plugin development?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. With our custom WooCommerce development services, we build public, private and custom plugins. These plugins improve your store’s functionality, integrate third-party tools, automate processes and enhance the shopping experience, making your WooCommerce store more flexible, efficient and user friendly.",
                },
              },
              {
                "@type": "Question",
                name: "Can you refine my WooCommerce store idea?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Our WooCommerce development agency helps refine your store idea, plan features and implement the design. We guide you step by step to ensure your store is easy to use, scalable, visually appealing and fully aligned with your business goals and customer expectations.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with startups and enterprises?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We serve businesses of all sizes. As the WooCommerce development company in USA, we deliver tailored WooCommerce solutions for startups and large enterprises, ensuring your store is secure, scalable and optimized to grow your business while providing a smooth experience for your customers.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default page;
