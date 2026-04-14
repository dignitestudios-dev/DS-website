import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import HireAndroidDevs from "@/components/services/HireAndroidApplicationDevelopers/HireAndroidDevs";
import Script from "next/script";

export const metadata = {
  title: "Hire Android Developers | Expert Android App Team",
  description:
    "Hire android developers to build secure and scalable apps. Get expert solutions with fast onboarding, reliable support, and high performance.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/services/hire-android-application-developers",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <HireAndroidDevs />
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
            "name": "Hire Android Application Developers",
            "url": "https://www.dignitestudios.com/services/hire-android-application-developers",
            "description": "Hire dedicated Android application developers from Dignite Studios to build scalable, secure, and high-performance Android apps tailored to your business needs.",
            "serviceType": "Android App Development",
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
                "name": "Hire Android Application Developers",
                "item": "https://www.dignitestudios.com/services/hire-android-application-developers"
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
              "name": "Do you build scalable Android applications?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Businesses hire android developers from our team to build scalable applications which handle growing users and features. We focus on the strong architecture, smooth performance and secure systems. This also allows apps to perform well under the high traffic and ensures the long term stability without any technical limitations or the performance issues."
              }
            },{
              "@type": "Question",
              "name": "How long does Android app development take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The development timelines depend on the apps's complexity and features. Basic apps may take a few weeks, meanwhile the advanced applications require more time. Many businesses hire developer services to ensure faster delivery through the proper planning structured development and consistent progress throughout the project lifecycle."
              }
            },{
              "@type": "Question",
              "name": "Do you provide app maintenance and support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer ongoing maintenance and support after the app launch. Clients can get developers to manage updates, fix bugs and improve performance. This also helps ensure the application stays secure, updated and fully functional while adapting to new user needs and platform changes quite over time."
              }
            },{
              "@type": "Question",
              "name": "Can you improve my existing Android application?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our team reviews your current application to identify performance issues and improvement areas. Businesses often hire android application developer to optimize speed, enhance user experience and upgrade features. This ensures the app performs better, meets the user expectation and supports the long term growth."
              }
            },{
              "@type": "Question",
              "name": "Do you work with startups and enterprises?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Indeed. We collaborate with both big businesses and startups. It can hire developers to launch new applications quickly, while enterprises rely on us to scale and improve existing platforms. Our flexible approach helps businesses of all sizes build reliable, secure and high performance android applications."
              }
            }]
          }),
        }}
      />
    </div>
  );
};

export default page;
