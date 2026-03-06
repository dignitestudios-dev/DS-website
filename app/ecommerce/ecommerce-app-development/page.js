import EcommerceAppDevelopment from "@/components/Ecommerce/EcommerceAppDevelopment/EcommerceAppDevelopment";
import GlobalLayout from "@/layout/GlobalLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Ecommerce App Development Company for Scalable Growth",
  description:
    "Partner with our ecommerce app development company to build scalable apps that improve performance, boost sales, and support long term business growth.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/ecommerce-app-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={<EcommerceAppDevelopment />} />

      {/* Service Schema */}
      <Script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.dignitestudios.com/ecommerce/ecommerce-app-development/",
            name: "Ecommerce App Development",
            url: "https://www.dignitestudios.com/ecommerce/ecommerce-app-development",
            description:
              "Dignite Studios provides ecommerce app development services to help businesses build scalable mobile commerce applications with secure payments, smooth user experience, and high-performance architecture.",
            provider: {
              "@type": "Organization",
              name: "Dignite Studios",
              url: "https://www.dignitestudios.com",
            },
            serviceType: "Ecommerce App Development",
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
                item: "https://www.dignitestudios.com/ecommerce/",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Ecommerce App Development",
                item: "https://www.dignitestudios.com/ecommerce/ecommerce-app-development",
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
                name: "Do you build scalable ecommerce apps?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we build scalable apps which grow through your business. As an ecommerce mobile app development company we ensure performance, flexibility and long term success.",
                },
              },
              {
                "@type": "Question",
                name: "How long does ecommerce app development take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The timeline depends on the requirements: simple apps take weeks while complex apps need more time for the quality delivery as the mobile app development for ecommerce.",
                },
              },
              {
                "@type": "Question",
                name: "Do you support app launch and deployment?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes we handle app launch and ensure the smooth deployment through the stable performance and proper setup for the business success.",
                },
              },
              {
                "@type": "Question",
                name: "Can you refine an ecommerce app idea?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, as a custom ecommerce app development company we suggest improvements that enhance the usability, performance and long term app success.",
                },
              },
              {
                "@type": "Question",
                name: "Do you work with startups and enterprises?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes we work with startups and enterprises and build solutions that match business needs and support the long term growth.",
                },
              },
              {
                "@type": "Question",
                name: "How can ecommerce apps improve my online store?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ecommerce web application development creates efficient and scalable solutions which enhance store performance, streamline the operations and boost the user experience.",
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
