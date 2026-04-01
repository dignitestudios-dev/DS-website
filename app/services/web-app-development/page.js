import WebAppDevelopment from "@/components/services/WebAppDevelopment/WebAppDevelopment";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Web Application Development Services | Custom Solution",
  description:
    "Get reliable Web Application Development Services for secure and custom solutions that enhance user experience and drive growth. Get our services today!",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/web-app-development",
  },
};

const page = () => {
  return (
    <div>
      <meta name="geo.region" content="US" />
<meta name="geo.position" content="39.78373;-100.445882" />
<meta name="ICBM" content="39.78373, -100.445882" />


 
      <GlobalLayout page={<WebAppDevelopment />} />

      {/* Service Schema */}
      <Script
        type="application/ld+json"
        id="service-schema"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.dignitestudios.com/services/web-app-development/",
            name: "Web Application Development Services",
            description:
              "Custom web application development including enterprise web apps, progressive web apps, single-page apps, and cross-platform solutions.",
            serviceType: "Web Application Development",
            provider: {
              "@type": "Organization",
              name: "Dignite Studios",
              url: "https://www.dignitestudios.com",
            },
            url: "https://www.dignitestudios.com/services/web-app-development",
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
                  "@id": "https://www.dignitestudios.com/services",
                  name: "Services",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@id":
                    "https://www.dignitestudios.com/services/web-app-development",
                  name: "Web App Development Services",
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
                name: "What’s actually a web application anyways?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A web app is like an app that you could use but on a browser. It doesn’t just work like a single page website, it literally lets you do the actual stuff. You could book appointments, manage info, or interact with other users. It’s basically perfect for businesses that want to grow and make life way easier for everyone using it.",
                },
              },
              {
                "@type": "Question",
                name: "How much time does it usually take for you to build a web app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Honestly, the whole timeline depends on your requirements. A basic and simple app might take a month or two. When you want a complex application with features, custom one could take a few months. We do provide regular updates though so you always know where the project stands.",
                },
              },
              {
                "@type": "Question",
                name: "So, what’s Web Application Development Cost usually?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The Web Application Development Cost depends on features. It’s up to you how many features and complexity you want in your app. However, custom apps usually cost more at first, but they save you time and money in the long run. So, knowing exactly what you need keeps things under control.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I just get a pre-made app?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Pre-built applications are like trying your whole business to fit into one app that’s not even made for your business and doesn’t even align with any of your goals. Web Application Development Services are designed for your business. They work exactly how you need them.",
                },
              },
              {
                "@type": "Question",
                name: "What tech is being used behind the application?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The team is trained to use the best modern tech. The tech stack includes: React, Angular, Vue, Node.js, Python, PHP, or .NET., MySQL and MongoDB. We understand the importance of picking the right tech stack. Because that makes your app fast and secure.",
                },
              },
              {
                "@type": "Question",
                name: "How do you keep the web app safe and secure?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We don’t treat Security as optional. It’s a big deal for us. We use strong passwords, encryption, access controls, and constant testing. Basically, your data stays protected, hackers get blocked, and users can relax knowing their information is safe and secure.",
                },
              },
              {
                "@type": "Question",
                name: "Do you create web apps that work offline?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yep! Your app can still work without an internet connection. With Progressive Web Apps, Users can access key features even if Wi-Fi drops. It keeps everyone productive, no matter where they are. It is super handy for people on the go.",
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
