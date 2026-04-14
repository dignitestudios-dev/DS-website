import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const HealthcareAppDevelopment = lazy(() => import("@/components/Industries/HealthcareAppDevelopment/HealthcareAppDevelopment"));

export const metadata = {
  title: "Healthcare app development company - Dignite Studios",
  description:
    " Looking for an expert healthcare app development company? Dignite Studios creates healthcare apps to improve patient care and enhance medical services.",
  alternates: {
    canonical: "https://www.dignitestudios.com/industries/healthcare-app-development",
  },
};

const page = () => {

  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <HealthcareAppDevelopment />
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
            "name": "Healthcare App Development",
            "url": "https://www.dignitestudios.com/industries/healthcare-app-development",
            "description": "Healthcare app development services by Dignite Studios to build secure, scalable, and HIPAA-compliant mobile and web applications for healthcare providers, patients, and medical businesses.",
            "serviceType": "Healthcare App Development",
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
                "name": "Industries",
                "item": "https://www.dignitestudios.com/industries"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Healthcare App Development",
                "item": "https://www.dignitestudios.com/industries/healthcare-app-development"
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
              "name": "How much time does it usually take to build a healthcare mobile app?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Dignite Studios doesn’t provide a fixed, similar timeline for each healthcare mobile app during development. The time always depends on the complexity and features of every healthcare application. Generally, a mid-level application would take up to 8-12 weeks, but it all depends, again. If you need a final cost and pricing estimate for your app, contact our team and share your app idea."
              }
            },{
              "@type": "Question",
              "name": "Can you build iOS applications for healthcare apps, too?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We’re an expert healthcare mobile app development company USA, building both iOS and Android healthcare apps. Hire healthcare mobile app developers who create high-performance applications for businesses. The healthcare developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality."
              }
            },{
              "@type": "Question",
              "name": "Would you provide support after we’re done with the app launch?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. It’s called post-launch support, and we definitely stay with you even when your healthcare delivery app is launched. Providing proper post-launch maintenance and updates about the healthcare app. So that we know that the app would stay aligned with the vision and users’ needs."
              }
            },{
              "@type": "Question",
              "name": "What if I have a rough idea? Can you guide me?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Here’s a thing: There’s no app that starts with the perfect, flawless idea. With this understanding, we guide through a free consultation and explain the concepts in a much easier way. The healthcare app experts can help you out by adding practical aspects to your application and preparing it for the future."
              }
            },{
              "@type": "Question",
              "name": "How much does a healthcare application usually cost?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Basically, we don’t have fixed pricing rules for all the applications. The cost completely depends on the features and the integrations you want your healthcare application to have. It’s up to your healthcare app’s vision, but at Dignite Studios, we keep pricing transparent with no random hidden fees."
              }
            },{
              "@type": "Question",
              "name": "Are you currently working with startups, too, or just the enterprises?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The healthcare app development team works with both startups and enterprises. So, it doesn’t really matter if you’re a startup or an enterprise; we would definitely work with you. Whether you’re building an MVP or scaling an existing healthcare application. We would look forward to building an amazing healthcare app together either way."
              }
            }]
          }),
        }}
      />
    </>
  );
};

export default page;
