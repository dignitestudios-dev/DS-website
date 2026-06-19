import GrowthAndConsultingServices from "@/components/services/GrowthAndConsultingServices/GrowthAndConsultingServices";
import GlobalLayout from "@/layout/GlobalLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Result-Driven Growth and Consulting Services - Dignite Studios",
  description:
    "Unlock your brand's full potential with our result-driven growth and consulting services. We scale operations, optimize conversions, and drive revenue growth.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/growth-and-consulting-services",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={<GrowthAndConsultingServices />} />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Growth and Consulting Services",
            "url": "https://www.dignitestudios.com/services/growth-and-consulting-services",
            "description": "Professional growth and consulting services including market research, conversion rate optimization, sales alignment, process automation, and tech stack consulting.",
            "provider": {
              "@type": "Organization",
              "name": "Dignite Studios",
              "url": "https://www.dignitestudios.com"
            },
            "serviceType": "Growth Consulting",
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
                "name": "Growth and Consulting Services",
                "item": "https://www.dignitestudios.com/services/growth-and-consulting-services"
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
                "name": "What is growth consulting and how does it help a business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Growth consulting involves analyzing a company's sales, marketing, operations, and technology to identify inefficiencies and create a strategic plan to scale revenue. A growth consultant helps you optimize your funnels, lower acquisition costs, and build a sustainable growth strategy."
                }
              },
              {
                "@type": "Question",
                "name": "How do you measure the success of a growth consulting engagement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We track clear, commercial key performance indicators (KPIs) such as Customer Acquisition Cost (CAC), Customer Lifetime Value (LTV), Conversion Rate (CR), Monthly Recurring Revenue (MRR), and overall Return on Investment (ROI). These metrics are defined in the strategic planning phase."
                }
              },
              {
                "@type": "Question",
                "name": "How long does it take to see results from growth consulting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Some quick-win optimizations, such as fixing checkout bugs or refining landing page copy, can show results within weeks. However, scaling channels and executing a complete growth strategy usually takes 3 to 6 months to yield sustainable, compounding results."
                }
              },
              {
                "@type": "Question",
                "name": "Do you help with executing the strategy or only provide advice?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We are an execution-focused agency. Beyond strategic consulting, our in-house team of designers, developers, and digital marketers help you set up CRMs, write email copy, build landing pages, implement analytics, and optimize search rankings."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you specialize in?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We have successfully partnered with businesses across e-commerce, healthcare, real estate, SaaS, EdTech, food & hospitality, and professional services. Our core growth methodologies are adaptable and tailored to your specific industry dynamics."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between marketing consulting and growth consulting?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "While marketing consulting focuses primarily on customer acquisition channels (like SEO or social media), growth consulting takes a holistic view of the entire customer journey, including product experience, operations, customer retention, sales funnels, and tech stack integrations."
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
