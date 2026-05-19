import SupportAndMaintenanceServicesPage from "@/components/services/SupportAndMaintenanceServices/SupportAndMaintenanceServicesPage";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Mobile App Maintenance and Support Services | Dignite Studios",
  description:
    "Our mobile application support and maintenance services foster effective solutions and potent planning to thrive mobile applications.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services',
    languages: {
      'en-ca': 'https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services',
      'en-us': 'https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services',
      'en-gb': 'https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services',
      'x-default': 'https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services',
    },
  },
  robots: 'index, follow',
  otherBots: 'googlebot: index, follow, max-snippet: 200; bingbot: index, follow, max-snippet: 200',
  openGraph: {
    type: 'website',
    siteName: 'Dignite Studios',
    title: 'Mobile App Maintenance and Support Services | Dignite Studios',
    description: 'Our mobile app support and maintenance services foster effective solutions and potent planning to thrive mobile applications.',
    url: 'https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-mobile-application-support-and-maintenance-services.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile App Maintenance and Support Services',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Maintenance and Support Services | Dignite Studios',
    site: '@dignitestudios',
    description: 'Our mobile app support and maintenance services foster effective solutions and potent planning to thrive mobile applications.',
    images: [
      {
        url: 'https://www.dignitestudios.com/banner-cover-image-of-mobile-application-support-and-maintenance-services.webp',
        alt: 'Mobile App Maintenance and Support Services',
      },
    ],
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={<SupportAndMaintenanceServicesPage />} />

      {/* Service Schema */}
      <Script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Mobile Application Support and Maintenance Services",
            "alternateName": "App Maintenance & Support Services",
            "description": "Comprehensive mobile application support and maintenance services including performance optimization, bug fixing, updates, security enhancements, and continuous monitoring to ensure seamless app functionality and improved user experience.",
            "serviceType": "Mobile App Support & Maintenance",
            "url": "https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services",
            "provider": {
              "@type": "Organization",
              "name": "Dignite Studios",
              "url": "https://www.dignitestudios.com"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Worldwide"
            },
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceLocation": {
                "@type": "Place",
                "name": "Online"
              }
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
                "name": "Mobile Application Support and Maintenance Services",
                "item": "https://www.dignitestudios.com/services/mobile-application-support-and-maintenance-services"
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
              "name": "Do you provide complete mobile app consulting services that actually helps?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we are expert support providers. We can take your mobile app from idea to launch. The support we offer would help you remove potential bugs. You can get a growth strategy and a lot more with us. The team would provide clear guidance that aligns with your business plans."
              }
            },{
              "@type": "Question",
              "name": "How much time does your typical mobile app maintenance take?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Honestly, it all depends on your app and business needs. App maintenance services usually lasts a few weeks to a few months. But if you need us to be, we’d be there for you even after the development to clear up any confusion. By the end, you will have a perfect product."
              }
            },{
              "@type": "Question",
              "name": "If help is needed on MVP and feature prioritization, can you provide that?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, gladly. We would love to help you launch an MVP through mobile app maintenance services and also decide which features to build first. The main plan is to focus on what’s important to users and what’s not. So by reducing bugs and unnecessary work, we can definitely guarantee you that your app will deliver value quickly."
              }
            },{
              "@type": "Question",
              "name": "Can you provide assistance with the strategies even after we’re done launching?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Dignite Studios’ mobile app maintenance services isn’t just limited to offering a little bit of support. We’re experienced service providers, and you’d get help with monitoring performance and growing your app after launch. This makes sure that your mobile app is going to continue to attract users."
              }
            },{
              "@type": "Question",
              "name": "Do you also offer your support for both startups and enterprises?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Well, we work with businesses of all sizes happily. The expert mobile app maintenance services providers are there for startups and enterprises and every type of business that needs our help. You get guidance accordingly because solutions are tailored and every client receives practical solutions that match their needs and goals."
              }
            },{
              "@type": "Question",
              "name": "Can you help with technology and platform recommendations?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Of course. We can recommend and suggest the best technologies and platforms based on your growth plans. When it comes to mobile app maintenance services, we make sure that your app is efficient and secure. You get a solution that performs well across devices, and it adapts as your business and user base grow."
              }
            }]
          }),
        }}
      />
    </div>
  );
};

export default page;
