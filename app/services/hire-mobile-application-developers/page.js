import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import MobAppDev from "@/components/services/HireMobAppDevelopers/MobAppDev";
import Script from "next/script";

export const metadata = {
  title: "Hire Mobile App Developers for Scalable App Solutions",
  description:
    " Hire Mobile App Developers at Dignite Studios to build iOS, Android, and cross-platform apps with fast onboarding, expert support, and scalable solutions. ",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/hire-mobile-application-developers",
  },  
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <MobAppDev />
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
            "name": "Hire Mobile Application Developers",
            "url": "https://www.dignitestudios.com/services/hire-mobile-application-developers",
            "description": "Hire dedicated mobile application developers from Dignite Studios to build scalable, secure, and high-performing apps for Android, iOS, and cross-platform solutions.",
            "serviceType": "Mobile App Development",
            "provider": {
              "@type": "Organization",
              "name": "Dignite Studios",
              "url": "https://www.dignitestudios.com",
              "logo": "https://www.dignitestudios.com/logo.webp"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
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
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.dignitestudios.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.dignitestudios.com/services/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Hire Mobile Application Developers",
                "item": "https://www.dignitestudios.com/services/hire-mobile-application-developers"
              }
            ]
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
            "mainEntity": [{
              "@type": "Question",
              "name": "How much does it cost to hire mobile app developers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The cost very much depends on the project scope, platform and complexity. You can also hire Developers on hourly, dedicated or the project based plans to match the budgets and ensure the optimal results."
              }
            },{
              "@type": "Question",
              "name": "How long does it take to onboard developers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Onboarding is fast and smooth. After selecting your developer, they can start working on the project in a few days, it ensures immediate progress and quick integration within your team."
              }
            },{
              "@type": "Question",
              "name": "Can I Hire developers for short term projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our hourly and project based hiring models also allow you to hire a mobile app developer for the short term projects, updates or specific tasks without committing to the long term contracts."
              }
            },{
              "@type": "Question",
              "name": "Do you provide post launch support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our developers offer continuous maintenance, performance monitoring and updates. They ensure your app runs smoothly while addressing issues promptly to maintain stability and user satisfaction."
              }
            },{
              "@type": "Question",
              "name": "Can I scale the development team later?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. You can expand your team whenever required. Our flexible options let you hire the dedicated mobile app developers to handle the increased workload and support growing project demands efficiently."
              }
            }]
          }),
        }}
      />
    </div>
  );
};

export default page;
