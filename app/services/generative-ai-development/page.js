import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";
import AiAppDevelopment from "@/components/services/AiAppDevelopment/AiAppDevelopment";

export const metadata = {
  title: "Generative AI development services | Dignite Studios",
  description:
    " Offering our expert generative AI development services to help you build scalable mobile applications aligned with your business goals through our guidance",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/ai-app-development",
  },  
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Generative AI Development Services",
  "url": "https://www.dignitestudios.com/services/generative-ai-development",
  "description": "Dignite Studios provides generative AI development services to build intelligent solutions using advanced AI models. Services include LLM integration, AI chatbots, content generation, automation tools, and custom AI model development tailored to business needs.",
  "provider": {
    "@type": "Organization",
    "name": "Dignite Studios",
    "url": "https://www.dignitestudios.com"
  },
  "areaServed": {
    "@type": "Place",
    "name": "united states"
  },
  "serviceType": "Generative AI Development",
  "category": "Artificial Intelligence Services",
  "offers": {
    "@type": "Offer",
    "url": "https://www.dignitestudios.com/services/generative-ai-development",
    "availability": "https://schema.org/InStock"
  }
};

const breadcrumbSchema = {
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
      "name": "Generative AI Development",
      "item": "https://www.dignitestudios.com/services/generative-ai-development"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How much time does it usually take to build a AI mobile app?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Dignite Studios doesn't provide a fixed, similar timeline for each AI mobile app during development. The time always depends on the complexity and features of every AI application. Usually, a mid level basic application would take up to 8-12 weeks, but it all depends, again. If you need a final cost and pricing estimate, contact our team and share your AI app idea."
    }
  },{
    "@type": "Question",
    "name": "Can you build iOS applications for Food delivery apps, too?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "We're experts, building both iOS and Android AI apps through AI Copilot development services. Hire AI app developer who creates high-performance applications for businesses. The AI developers can easily work with native and Swift to develop applications that feel simple while ensuring functionality."
    }
  },{
    "@type": "Question",
    "name": "Would you provide support after we're done with our app launch?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. It's called post-launch support, and we definitely stay with you even when your AI app is launched. Providing proper post launch maintenance and updates about the AI application. So that we know that the AI app would stay aligned with the vision and users' needs."
    }
  },{
    "@type": "Question",
    "name": "What if I have a rough idea? Can you guide me?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Here's what happens: There's no functional application that starts with the perfect, flawless idea. With this understanding, we show guidance through a free call or a consultation and explain the concepts in a much easier way. The AI app experts can help you out by adding practical aspects to your application and preparing it for the future."
    }
  },{
    "@type": "Question",
    "name": "How much do generative AI development services usually cost?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Basically, we don't have fixed pricing rules for all kinds of applications. The cost completely depends on the features and the integrations you want your AI application to have. It's up to your AI app's vision, but at Dignite Studios, we keep pricing transparent with no hidden fees."
    }
  },{
    "@type": "Question",
    "name": "Are you currently working with startups, too, or just the enterprises?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The AI app development team works with both startups and enterprises. So, it doesn't really matter if you're a startup or enterprise; we would definitely work with you. Whether you're building an MVP or scaling an existing AI application. We would look forward to building an amazing app together anyway."
    }
  }]
};

const page = () => {
  return (
    <div>
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* <meta name="geo.region" content="US" />
<meta name="geo.position" content="39.78373;-100.445882" />
<meta name="ICBM" content="39.78373, -100.445882" /> */}


 
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <AiAppDevelopment />
        </Suspense>
      } />
    </div>
  );
};

export default page;
