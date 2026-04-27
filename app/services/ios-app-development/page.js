import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { Suspense } from "react";
import IOSAppDev from "@/components/services/iOSAppDev/iOSAppDev";

export const metadata = {
  title: "Top iOS App Development Services - Dignite Studios",
  description:
    "Get trusted iOS app development services to build secure and user friendly iOS applications that drive growth and enhance user experience. Contact us!",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/ios-app-development",
  },
};

const page = () => {
  return (
    <div>
      <link rel="canonical" href="https://www.dignitestudios.com/services/ios-app-development" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "iOS App Development Services",
            "description": "Professional iOS app development services including custom iPhone and iPad application development, UI/UX design, testing, and App Store deployment.",
            "url": "https://www.dignitestudios.com/services/ios-app-development",
            "provider": {
              "@type": "Organization",
              "name": "Dignite Studios",
              "url": "https://www.dignitestudios.com",
              "logo": "https://www.dignitestudios.com/logo.webp"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "serviceType": "iOS App Development",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceLocation": {
                "@type": "Place",
                "name": "Online Service"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
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
                "name": "iOS App Development",
                "item": "https://www.dignitestudios.com/services/ios-app-development"
              }
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Do you build iOS apps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our iOS app development services create apps that grow with your business. We ensure smooth performance and easy management so your iOS app can handle more users and traffic while delivering a reliable and fluent experience across iOS devices."
              }
            },{
              "@type": "Question",
              "name": "How long does iOS development take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The timeline and iOS app development cost depend on your app's complexity and integrations. Our iOS app development agency follows a structured process to complete projects efficiently while maintaining quality, clear communication, and timely delivery."
              }
            },{
              "@type": "Question",
              "name": "Do you support iOS app feature development?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. With our iOS mobile app development services, we create custom features and integrations that improve functionality, connect third-party tools, automate tasks, and deliver a seamless user experience across iOS devices."
              }
            },{
              "@type": "Question",
              "name": "Can you refine my hybrid app idea?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our iOS development agency helps refine your app idea, plan features, and implement the design. The team guides you step by step to ensure your app is easy to use, scalable, visually appealing, and aligned with business goals and customer expectations."
              }
            },{
              "@type": "Question",
              "name": "Do you work with startups and enterprises?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our team works with businesses of all sizes. As a professional custom iOS app development services provider, we deliver tailored solutions for startups and large enterprises, ensuring your app is secure, scalable, and optimized to grow your business."
              }
            }]
          })
        }}
      />
      <meta name="geo.region" content="US" />
      <meta name="geo.position" content="39.78373;-100.445882" />
      <meta name="ICBM" content="39.78373, -100.445882" />
      <GlobalLayout
        page={
          <Suspense fallback={<LazyLoader />}>
            <IOSAppDev />
          </Suspense>
        }
      />
    </div>
  );
};

export default page;
