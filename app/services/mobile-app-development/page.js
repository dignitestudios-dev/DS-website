import MobileAppDevelopment from "@/components/services/MobileAppDevelopment/MobileAppDevelopment";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Mobile App Development Services | Dignite Studios",
  description:
    "Professional mobile app development services encompassing app solutions. Our team crafts ingenious applications to stand out in mobile services.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/mobile-app-development",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={<MobileAppDevelopment />} />

      {/* Service Schema */}
      <Script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.dignitestudios.com/services/mobile-app-development/",
            name: "Mobile App Development Services",
            url: "https://www.dignitestudios.com/services/mobile-app-development",
            description:
              "Dignite Studios provides end-to-end mobile app development services including consulting, UI/UX design, development, testing, integration, and maintenance for Android and iOS applications.",
            serviceType: "Mobile App Development",
            provider: {
              "@type": "Organization",
              name: "Dignite Studios",
              url: "https://www.dignitestudios.com",
            },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
            },
            availableChannel: {
              "@type": "ServiceChannel",
              serviceLocation: {
                "@type": "Place",
              },
              serviceUrl:
                "https://www.dignitestudios.com/services/mobile-app-development",
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
                name: "Mobile App Development",
                item: "https://www.dignitestudios.com/services/mobile-app-development",
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
                name: "How much time does it usually take to build a mobile app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Dignite Studios doesn’t provide a fixed, similar timeline for each mobile app during development. The time always depends on the complexity and features of every application. Usually, a mid-level application would take up to 8-12 weeks, but it all depends. If you need a final cost estimate, contact our team and share your app idea.",
                },
              },
              {
                "@type": "Question",
                name: "Can you build iOS applications too?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We’re experts, building both iOS and Android apps. Our trusted developers create high-performance applications. The developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality.",
                },
              },
              {
                "@type": "Question",
                name: "Would you provide support after we’re done with the launch?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. It’s called post-launch support, and we definitely stay with you even when the app is launched. Providing proper post-launch maintenance and updates. So that we know that the app would stay aligned with the vision and users’ needs.",
                },
              },
              {
                "@type": "Question",
                name: "What if I have a rough idea? Can you guide me?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Here’s a thing: There’s no app that starts with the perfect idea. With this understanding, we show guidance through a free consultation and explain the concepts. The app experts can help you out by adding practical aspects to your application and preparing it for the future.",
                },
              },
              {
                "@type": "Question",
                name: "How much does a mobile application usually cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Basically, we don’t have the fixed pricing rules for all the applications. The cost completely depends on the features and the integrations you want your application to have. It’s up to your app’s vision, but at Dignite Studios, we keep pricing transparent with no hidden fees.",
                },
              },
              {
                "@type": "Question",
                name: "Are you currently working with startups, too, or just the enterprises?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The app development team works with both startups and enterprises. So, it doesn’t matter if you’re a startup or enterprise, we would definitely work with you. Whether you’re building an MVP or scaling an existing application. We would look forward to building an amazing app together either way.",
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
