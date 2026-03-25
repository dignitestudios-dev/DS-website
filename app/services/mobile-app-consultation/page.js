import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const MobileAppConsultation = lazy(() => import("@/components/services/MobileAppConsultation/MobileAppConsultation"));

export const metadata = {
  title: "Top mobile app consulting services | Dignite Studios",
  description:
    " Offering our expert mobile app consulting services to help you build scalable mobile applications aligned with your business goals through our guidance.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/mobile-app-consultation",
  },
};

const page = () => {
  return (
    <div>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile App Consultation",
            "description": "Professional mobile app consultation services to help businesses plan, strategize, and build scalable mobile applications with the right technology and user experience.",
            "serviceType": "Mobile App Consultation",
            "provider": {
              "@type": "Organization",
              "name": "Dignite Studios",
              "url": "https://www.dignitestudios.com/"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "url": "https://www.dignitestudios.com/services/mobile-app-consultation"
          })
        }}
      />
      <Script
        id="breadcrumb-schema"
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
                "item": "https://www.dignitestudios.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Mobile App Consultation",
                "item": "https://www.dignitestudios.com/services/mobile-app-consultation"
              }
            ]
          })
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "Do you provide complete mobile app consulting services that actually helps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we are expert consultants. We can take your mobile app from idea to launch. The consulting we offer would help you with validating concepts. You can get a growth strategy and a lot more. The team would provide clear guidance that aligns with your business goals."
              }
            },{
              "@type": "Question",
              "name": "How much time does your typical mobile app consulting take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Honestly, it all depends on your app and business needs. Consulting usually lasts a few weeks to a few months. But if you need us to be, we'd be there for you during the development to clear up any confusions. By the end, you will have a clear plan and strategy."
              }
            },{
              "@type": "Question",
              "name": "If help is needed on MVP and feature prioritization, can you provide that?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, gladly. We would love to help you launch an MVP and decide which features to build first. The main goal is to focus on what's important to users and what's not. So by reducing unnecessary work, we can definitely guarantee you that your app will deliver value quickly."
              }
            },{
              "@type": "Question",
              "name": "Can you provide assistance with the strategies even after we're done launching?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Dignite Studios' consulting service isn't just limited to planning and helping beforehand. We're experienced consultants and you'd get help with monitoring performance and growing your app after launch. This makes sure that your app is going to continue to attract users."
              }
            },{
              "@type": "Question",
              "name": "Do you also offer your consultation for both startups and enterprises?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Well, we work with businesses of all sizes gladly. The experts are there for startups and enterprises and every type of business whoever needs our help. You get guidance accordingly because consultation is tailored and every client receives practical solutions that match their needs and goals."
              }
            },{
              "@type": "Question",
              "name": "Can you help with technology and platform recommendations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Of course. We can suggest the best technologies and platforms based on your growth plans. When it comes to guidance, we can assure that your app is efficient and secure. You get a solution that performs well across devices and it can adapt as your business and user base grow."
              }
            }]
          })
        }}
      />
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <MobileAppConsultation />
        </Suspense>
      } />
    </div>
  );
};

export default page;
