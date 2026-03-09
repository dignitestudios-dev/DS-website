import ProgressiveWebAppDevelopment from "@/components/services/ProgressiveWebAppDevelopment/ProgressiveWebAppDevelopment";
import GlobalLayout from "@/layout/GlobalLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Expert PWA Development Services for Building Reliable Apps",
  description:
    "Elevate your business with PWA Development Services. Build fast and engaging progressive web apps that bring user satisfaction. Get your app built today!",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/services/progressive-web-app-development",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={<ProgressiveWebAppDevelopment />} />
      <Script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.dignitestudios.com/services/progressive-web-app-development#service",
            name: "Progressive Web App Development Services",
            serviceType: "Progressive Web App Development",
            description:
              "Dignite Studios offers expert Progressive Web App (PWA) development services, delivering fast, reliable, and engaging web applications that function seamlessly across all devices and platforms.",
            url: "https://www.dignitestudios.com/services/progressive-web-app-development",
            provider: {
              "@type": "Organization",
              name: "Dignite Studios",
              url: "https://www.dignitestudios.com",
              logo: "https://www.dignitestudios.com/logo.webp",
            },
            areaServed: {
              "@type": "Place",
              name: "Worldwide",
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
                item: {
                  "@id": "https://www.dignitestudios.com/",
                  name: "Home",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@id": "https://www.dignitestudios.com/services/",
                  name: "Services",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@id":
                    "https://www.dignitestudios.com/services/progressive-web-app-development",
                  name: "Progressive Web App Development",
                },
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
                name: "How does a Progressive Web Application work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "So, by a PWA, we mean building an app like a web application that works exactly like a mobile app, but on a browser. You can also “install” it on your device. It works offline, loads super fast, and can send push notifications.",
                },
              },
              {
                "@type": "Question",
                name: "What’s the difference between a Progressive Web app and a regular website?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A progressive web app would offer features such as offline functionality, push notifications, fast loading, and home screen installation, which isn’t usually offered by a website. This creates a more engaging experience for users.",
                },
              },
              {
                "@type": "Question",
                name: "What if I have a website? Can it be converted into a PWA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ofcourse! Your current website or web app can easily be moved to a progressive web app with PWA migration. You’ll get offline support, faster loading, push notifications, and an app-like experience.",
                },
              },
              {
                "@type": "Question",
                name: "Will my Progressive Web Apps work well with all devices and operating systems?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Progressive Web Apps are built to be responsive to all devices, so they can work on all kinds of devices. A PWA will provide a consistent experience across different screens and operating systems.",
                },
              },
              {
                "@type": "Question",
                name: "Are PWAs secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PWAs use HTTPS to encrypt data and make the communication secure between the app and servers. Your users can interact safely, and security is always a key part of our PWA Development Services.",
                },
              },
              {
                "@type": "Question",
                name: "Why should I invest in a PWA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "PWAs improve user experience, engagement, and performance. They reduce the development cost compared to native applications. That means your business is to reach users across devices. PWAs are reliable and installable.",
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
