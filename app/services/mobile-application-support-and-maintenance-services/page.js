import SupportAndMaintenanceServicesPage from "@/components/services/SupportAndMaintenanceServices/SupportAndMaintenanceServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "App Maintenance and Support Services | Dignite Studios",
  description: "Our mobile app support and maintenance services foster effective solutions and potent planning to thrive mobile applications.",
};

const page = () => {
  <Head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link
      rel="canonical"
      href="https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services"
    />
    <link
      rel="alternate"
      hreflang="en-ca"
      href="https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services"
    />
    <link
      rel="alternate"
      hreflang="en-us"
      href="https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services"
    />
    <link
      rel="alternate"
      hreflang="en-gb"
      href="https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services"
    />
    <link
      rel="alternate"
      hreflang="x-default"
      href="https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services"
    />
    <meta http-equiv="content-language" content="en-us" />
    <meta http-equiv="content-language" content="en-ca" />
    <meta http-equiv="content-language" content="en-gb" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow, max-snippet: 200" />
    <meta name="bingbot" content="index, follow, max-snippet: 200 " />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Dignite Studios" />
    <meta
      property="og:title"
      content="Mobile App Maintenance and Support Services | Dignite Studios"
    />
    <meta
      property="og:description"
      content="Our mobile app support and maintenance services foster effective solutions and potent planning to thrive mobile applications."
    />
    <meta
      property="og:url"
      content="https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services"
    />
    <meta
      property="og:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-mobile-application-support-and-maintenance-services.webp"
    />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta
      property="og:image:alt"
      content="Mobile App Maintenance and Support Services"
    />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Mobile App Maintenance and Support Services | Dignite Studios"
    />
    <meta name="twitter:site" content="@dignitestudios" />
    <meta
      name="twitter:description"
      content="Our mobile app support and maintenance services foster effective solutions and potent planning to thrive mobile applications."
    />
    <meta
      name="twitter:image"
      content="https://www.dignitestudios.com/banner-cover-image-of-mobile-application-support-and-maintenance-services.webp"
    />
    <meta
      name="twitter:image:alt"
      content="Mobile App Maintenance and Support Services"
    ></meta>
  </Head>;
  return (
    <div>
      <ServicesLayout page={<SupportAndMaintenanceServicesPage />} />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Mobile App Maintenance and Support Services | Dignite Studios",
            url: "https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services",
            description:
              "Our mobile app support and maintenance services foster effective solutions and potent planning to thrive mobile applications.",
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
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
                name: "Mobile App Development Services",
                item: "https://www.dignitestudios.com/services/mobile-app-development-services",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Mobile App Design Services",
                item: "https://www.dignitestudios.com/services/mobile-app-design-services",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Mobile App Consulting Services",
                item: "https://www.dignitestudios.com/services/mobile-app-consulting-services",
              },
              {
                "@type": "ListItem",
                position: 5,
                name: "Mobile App Testing Services",
                item: "https://www.dignitestudios.com/services/mobile-app-testing-services",
              },
              {
                "@type": "ListItem",
                position: 6,
                name: "Mobile App Maintenance and Support Services",
                item: "https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services",
              },
            ],
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Product",
            name: "Mobile App Maintenance and Support Services",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              worstRating: "1",
              bestRating: "5",
              reviewCount: "37",
            },
          }),
        }}
      />

      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is App Maintenance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "App maintenance is a crucial process that needs subsequent monitoring of bugs, security, and performance of the mobile app. It ensures the rise in app engagements and boosts sales.",
                },
              },
              {
                "@type": "Question",
                name: "How much does it cost for mobile app maintenance?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We provide multiple mobile app support and maintenance packages under reasonable cost measures.",
                },
              },
              {
                "@type": "Question",
                name: "How long does app maintenance take?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It depends on the complexities of the project and its dimensions.",
                },
              },
              {
                "@type": "Question",
                name: "What does app maintenance include?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "It includes bug fixing, performance optimization, security updates, context monitoring, security tracking, app analytics, strong marketing, and user engagement.",
                },
              },
              {
                "@type": "Question",
                name: "What is the difference between application maintenance and support?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Support is typically furnished after the application is launched and being used by the masses. Whereas, application maintenance is an ongoing process in the app development lifecycle.",
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
