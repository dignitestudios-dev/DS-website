import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const ShopifyMigrationServices = lazy(() => import("@/components/Ecommerce/ShopifyMigrationServices/ShopifyMigrationServices"));

export const metadata = {
  title: "Expert Shopify Store Development Services for Your Business",
  description:
    "Boost your online store with our reliable Shopify store development services. We deliver scalable, secure, and high-performing solutions for growth.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/shopify-migration-services",
  },
};

const page = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Migration Services",
    "description": "Professional Shopify Migration Services for secure and accurate transfer of ecommerce stores — including products, customers, orders, SEO, and apps — from any platform to Shopify with zero downtime and data loss.",
    "provider": {
      "@type": "Organization",
      "name": "Dignite Studios",
      "url": "https://www.dignitestudios.com/",
      "logo": "https://www.dignitestudios.com/logo.webp"
    },
    "serviceType": "Ecommerce Platform Migration",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "url": "https://www.dignitestudios.com/ecommerce/shopify-migration-services"
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
        "name": "Ecommerce",
        "item": "https://www.dignitestudios.com/ecommerce/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Shopify Migration Services",
        "item": "https://www.dignitestudios.com/ecommerce/shopify-migration-services"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What platforms can be migrated to Shopify?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We migrate stores from WooCommerce, Magento, BigCommerce, Wix, Squarespace and custom platforms. Our Shopify Plus migration experts ensure all important data is transferred safely. This includes products, customers and orders without affecting store performance or structure."
      }
    },{
      "@type": "Question",
      "name": "How long does a Shopify migration take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Migration time depends on the store size and complexity. Small stores take a few weeks. Larger stores with custom features take more time. Our Shopify migration service follows a clear process to complete migration safely and efficiently."
      }
    },{
      "@type": "Question",
      "name": "Will SEO rankings be preserved after migration?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We protect your SEO during migration. Our team keeps the URL structure, metadata and redirects in place. This ensures rankings stay stable after migration and your store continues to perform well in search engines."
      }
    },{
      "@type": "Question",
      "name": "Will customer and order history be migrated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We transfer complete customer records and order history. This helps businesses continue operations without losing important data or customer trust."
      }
    },{
      "@type": "Question",
      "name": "What if my platform has custom features?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Shopify migration experts handle custom features carefully. We rebuild or integrate them into Shopify to maintain functionality and performance."
      }
    },{
      "@type": "Question",
      "name": "Do you provide post migration support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We provide ongoing support after launch. We monitor store performance and fix issues quickly to keep the store running smoothly."
      }
    }]
  };

  return (
    <>
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
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <ShopifyMigrationServices />
        </Suspense>
      } />
    </>
  );
};

export default page;
