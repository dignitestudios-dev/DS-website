import ShopifyAppDevelopment from "@/components/Ecommerce/ShopifyAppDevelopment/ShopifyAppDevelopment";
import ShopifyStoreDevelopment from "@/components/Ecommerce/ShopifyStoreDevelopment/ShopifyStoreDevelopment";
import MobileAppBoston from "@/components/Locations/mobile-app-boston/MobileAppBoston";
import GlobalLayout from "@/layout/GlobalLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Expert Shopify Store Development Services for Your Business",
  description:
    "Boost your online store with our reliable Shopify store development services. We deliver scalable, secure, and high-performing solutions for growth.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/shopify-store-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={<ShopifyStoreDevelopment />} />

      {/* Service Schema */}
      <Script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.dignitestudios.com/ecommerce/shopify-store-development/",
            name: "Shopify Store Development",
            url: "https://www.dignitestudios.com/ecommerce/shopify-store-development",
            description:
              "Professional Shopify store development services including custom Shopify store design, theme customization, app integrations, performance optimization, and scalable ecommerce solutions.",
            serviceType: "Shopify Store Development",
            provider: {
              "@type": "Organization",
              name: "Dignite Studios",
              url: "https://www.dignitestudios.com",
            },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
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
                name: "eCommerce",
                item: "https://www.dignitestudios.com/ecommerce",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Shopify Store Development",
                item: "https://www.dignitestudios.com/ecommerce/shopify-store-development",
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
                name: "Do you build scalable Shopify stores?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we build scalable shopify stores that grow through the business. Our shopify development company focuses on creating the stores with the clean code, reliable architecture and the flexible features. Each store is designed to handle the increased traffic, product catalogs and customer activity efficiently, ensuring the smooth performance while supporting the long term business growth and the fluent user experience.",
                },
              },
              {
                "@type": "Question",
                name: "How long does shopify development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The development timeline varies depending on your store's complexity. Our shopify web development company delivers simple stores in a few weeks, including the planning, design and deployment. Advanced stores with the custom features, third party integrations and complex workflow require more time. Our team ensures every store meets the hig quality standards and is delivered efficiently.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support Shopify App Store submissions?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we assist with the complete Shopify App Store submission process. As a shopify website development company our team ensures your store is properly configured, tested and optimized for performance. We handle all the requirements and documentation needed for the approval, helping the app reach the marketplace efficiently. This ensures the smooth submission process and increases the chances of the successful app approval.",
                },
              },
              {
                "@type": "Question",
                name: "Can you refine my Shopify store idea?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our shopify ecommerce development company team helps refine your store concept. We analyze your business goals, target audience, and operational needs by suggesting improvements in design, features and usability. We ensure your shopify store delivers the better performance, enhances the user experience and supports the long term growth. Turning your initial idea into a scalable and practical online solution.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with startups and enterprises?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we work with both startups and large enterprises, providing the customized shopify store solutions. As the shopify website development company, our approach adapts to varying business needs, ensuring scalability , reliability and long term growth. From small businesses seeking efficient stores to enterprises requiring complex integrations and high performance systems. Our team delivers structured, practical solutions that help every client achieve their ecommerce goals effectively.",
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
