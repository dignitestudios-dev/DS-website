import WebDesignServices from "@/components/services/WebDesignServices/WebDesignServices";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Custom Web Development Services - Top Web Solutions USA",
  description:
    "Get web design and development services and custom web development services to build scalable and conversion-focused websites that drive business growth.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/web-design-services",
  },
};

const page = () => {
  return (
    <div>



 
      <GlobalLayout page={<WebDesignServices />} />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Design Services",
            "url": "https://www.dignitestudios.com/services/web-design-services",
            "description": "Professional web design services including custom website design, responsive layouts, UI/UX design, and SEO-friendly websites for businesses and startups.",
            "provider": {
              "@type": "Organization",
              "name": "Dignite Studios",
              "url": "https://www.dignitestudios.com"
            },
            "serviceType": "Web Design",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
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
                "item": "https://www.dignitestudios.com"
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
                "name": "Web Design Services",
                "item": "https://www.dignitestudios.com/services/web-design-services"
              }
            ]
          })
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What are website design and development services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Through the website design and development services, you can build websites with the help of experts that create an online presence for your business. Design focuses on how the website looks and the development focuses on how it works. These websites that are built through custom web development services are used for generating leads."
                }
              },
              {
                "@type": "Question",
                "name": "How much longer does it take for building a website?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "The timeline is usually highly dependent on the business and features requirements. A simple, basic website can take a few weeks or days. It can also take several months if you’re going for custom or ecommerce websites. Each stage takes time to ensure quality and usability. When requirements are clear and feedback is quick, faster timelines are possible."
                }
              },
              {
                "@type": "Question",
                "name": "An existing website can be redesigned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. An existing website can be fully redesigned. You can improve an existing website’s design and performance. Basically, a website redesign include the updates in layout, navigation, mobile responsiveness. A redesign can also fix usability issues. Speed, update technology, alignment with new business goals can be done. Businesses usually choose to redesign a website when it looks outdated."
                }
              },
              {
                "@type": "Question",
                "name": "How to know if your business website needs a redesign?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your website needs a redesign if it feels outdated and slow. More clear signs include poor mobile experience, low engagement, declining traffic, weak conversion rates. It is going to to affect your growth if your website no longer reflects your brand or business goals. A redesign is also needed when competitors have better performing websites."
                }
              },
              {
                "@type": "Question",
                "name": "What to choose between custom web development services or a no code platform?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Custom development and no code platforms are built for different business needs. Custom development is perfect for businesses that need long term flexibility. While the no code platforms are better for simple websites and MVPs. However, no code platforms have limitations in functionality. Simply, making a choice depends on your goals and budget."
                }
              },
              {
                "@type": "Question",
                "name": "What makes a website successful in 2026?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "In 2026 your website should be mobile friendly and highly secure. It should be focusing on user experience. Your website should load in secs, work smoothly and make it easy for the users to take action. Your website’s success in 2026 is highly dependant on how well it adapts to changing digital trends and customer expectations. Find out more through our web development consulting."
                }
              },
              {
                "@type": "Question",
                "name": "Can website improve or impact lead generation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Your website has a major impact on your entire process of lead generation. Through effective web development, you can create websites that guide users toward taking action. So, a well built website improves user experience through clear navigation. Mobile friendly design and optimized layouts increase engagement. When your website is actually focused on conversions, it can turns visitors into leads."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
};

export default page;
