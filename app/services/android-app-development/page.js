import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import AndroidAppDev from "@/components/services/AndroidAppDev/AndroidAppDev";

export const metadata = {
  title: "Top Android App Development Services - Dignite Studios",
  description:
    " Get expert Android app development services to build secure and user friendly applications that drive growth and enhance user experience. Contact us today!",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/android-app-development",
  },  
};

const page = () => {
  return (
    <div>
      <meta name="geo.region" content="US" />
      <meta name="geo.position" content="39.78373;-100.445882" />
      <meta name="ICBM" content="39.78373, -100.445882" />
      
      {/* Canonical Tag */}
      <link rel="canonical" href="https://www.dignitestudios.com/services/android-app-development" />
      
      {/* Service Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Android App Development Services",
          "url": "https://www.dignitestudios.com/services/android-app-development",
          "description": "Professional Android app development services by Dignite Studios, delivering scalable, secure, and high-performance mobile applications tailored to business needs.",
          "serviceType": "Android App Development",
          "provider": {
            "@type": "Organization",
            "name": "Dignite Studios",
            "url": "https://www.dignitestudios.com"
          },
          "areaServed": {
            "@type": "Place",
            "name": "Worldwide"
          }
        })
      }} />
      
      {/* BreadcrumbList Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
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
              "name": "Android App Development",
              "item": "https://www.dignitestudios.com/services/android-app-development"
            }
          ]
        })
      }} />
      
      {/* FAQPage Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "Do you build Android apps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We're professionals at building Android apps. Our development team creates applications that grow with your business. We focus on smooth performance, scalability, and easy management so your Android app can handle more users and traffic while delivering a reliable experience."
            }
          },{
            "@type": "Question",
            "name": "How long does Android development take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The timeline and Android app development cost depend on your app's complexity and integrations. Our Android app development team follows a structured process to complete projects efficiently, focusing on quality, clear communication, and timely delivery so your Android app launches on schedule."
            }
          },{
            "@type": "Question",
            "name": "Do you support Android app feature development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. With our Android app services, we create custom features and integrations for your app. These improvements enhance functionality, connect third-party tools, automate tasks, and provide a seamless user experience across Android devices."
            }
          },{
            "@type": "Question",
            "name": "Can you refine my Hybrid app idea for Android?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our Android development team helps refine your app idea, plan features, and implement the design. We guide you step by step to ensure your app is easy to use, scalable, visually appealing, and aligned with your business goals and customer expectations."
            }
          },{
            "@type": "Question",
            "name": "Do you work with startups and enterprises?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our team works with businesses of all sizes. As a custom Android app development provider, we deliver tailored solutions for startups and enterprises, ensuring your app is secure, scalable, and optimized to support long-term growth."
            }
          }]
        })
      }} />
      
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <AndroidAppDev />
        </Suspense>
      } />
    </div>
  );
};

export default page;
