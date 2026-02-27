import AiAutomation from "@/components/Technologies/AiAutomation/AiAutomation";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: " AI Automation Services | Dignite Studios",
  description:
    " AI automation services that streamline workflows reduce manual effort and improve business efficiency with scalable solutions built for growth.",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id":
    "https://www.dignitestudios.com/technologies/ai-automation-services/#business",
  name: "AI Automation Services | Dignite Studios",
  description:
    "AI automation services that streamline workflows reduce manual effort and improve business efficiency with scalable solutions built for growth.",
  url: "https://www.dignitestudios.com/technologies/ai-automation-services",
  image: "https://www.dignitestudios.com/logo.webp",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  telephone: "+1 877 714 1770",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.dignitestudios.com/technologies/ai-automation-services/#service",
  name: "AI Automation Services",
  description:
    "Dignite Studios delivers high performance AI automation services helping businesses streamline workflows, reduce manual effort and improve productivity with secure, reliable and goal-focussed AI solutions.",
  provider: {
    "@type": "Organization",
    name: "Dignite Studios",
    url: "https://www.dignitestudios.com/technologies/ai-automation-services",
    logo: "https://www.dignitestudios.com/logo.webp",
  },
  serviceType: "AI Automation Services",
  areaServed: "Worldwide",
  url: "https://www.dignitestudios.com/technologies/ai-automation-services",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id":
    "https://www.dignitestudios.com/technologies/ai-automation-services/#breadcrumb",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dignitestudios.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Technologies",
      item: "https://www.dignitestudios.com/technologies/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "AI Automation",
      item: "https://www.dignitestudios.com/technologies/ai-automation-services",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id":
    "https://www.dignitestudios.com/technologies/ai-automation-services/#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "What can AI automation do for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI automation can streamline repetitive tasks, improve data accuracy, enhance customer service through chatbots, and provide deep insights through predictive analytics, allowing your team to focus on high-value work.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to implement AI automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on the complexity of the processes being automated and the technologies used. We provide customized quotes after a thorough discovery phase to ensure maximum ROI.",
      },
    },
    {
      "@type": "Question",
      name: "Is my data secure during AI automation implementation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, data security is our top priority. We implement robust security protocols, including encryption and strict access controls, to ensure your business data remains secure and compliant with industry standards.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to implement an AI automation solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Implementation timelines vary depending on the scope. A pilot project might take 4-8 weeks, while full-scale enterprise automation can take several months. We follow an agile process to deliver value incrementally.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer post-implementation support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide ongoing maintenance, monitoring, and updates to ensure your AI automation solutions continue to perform optimally as your business grows.",
      },
    },
  ],
};

const page = () => {
  return (
    <>
      {/* <script
        key="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      /> */}
      <script
        key="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        key="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        key="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GlobalLayout page={<AiAutomation />} />
    </>
  );
};

export default page;
