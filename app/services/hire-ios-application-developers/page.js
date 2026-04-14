import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import IOSAppDev from "@/components/services/HireIOSApplicationDevelopers/IOSAppDev";
import Script from "next/script";

export const metadata = {
  title: "Hire iOS App Developer | Expert iOS Development Services",
  description:
    "Hire expert developers for reliable ios app development services. Build scalable iOS apps with fast onboarding, flexible hiring, and strong support.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/hire-ios-application-developers",
  },  
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <IOSAppDev />
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
            "name": "Hire iOS Application Developers",
            "url": "https://www.dignitestudios.com/services/hire-ios-application-developers",
            "description": "Hire expert iOS application developers from Dignite Studios to build high-performance, scalable, and secure iPhone and iPad applications tailored to your business needs.",
            "serviceType": "iOS App Development",
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
                "name": "Hire iOS Application Developers",
                "item": "https://www.dignitestudios.com/services/hire-ios-application-developers"
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
                "text": "The cost depends on project complexity, features and developer experience. Simple apps cost less, while advanced apps require more budget. Businesses can hire iOS app developer using flexible models to control expenses and get reliable iOS services within their budget."
              }
            },{
              "@type": "Question",
              "name": "How long does it take onboard developers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Onboarding developers is a quick process. In most cases, businesses can start working with a top iOS app development company within just a few days. The exact time depends on the project requirements, but our team also ensures fast onboarding so development can start without the delays."
              }
            },{
              "@type": "Question",
              "name": "Can I hire developers for the short term projects?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, businesses can also hire iOS app developer for short term tasks or small updates. Our flexible hiring models and ios application development service make it easy to manage costs and complete projects quickly."
              }
            },{
              "@type": "Question",
              "name": "Do you provide post-launch support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide ongoing support after the app is launched. Our team helps with the updates, bug fixes and performance improvements to ensure your application runs quite smoothly and stays updated with the business requirements."
              }
            },{
              "@type": "Question",
              "name": "Can I scale the development team later?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, you scale your team anytime based on your project needs. We provide the flexible options so you can add or reduce developers easily while continuing and smooth and efficient iOS development."
              }
            }]
          }),
        }}
      />
    </div>
  );
};

export default page;
