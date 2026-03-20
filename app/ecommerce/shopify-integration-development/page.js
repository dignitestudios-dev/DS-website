import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const ShopifyIntegrationDevelopment = lazy(() => import("@/components/Ecommerce/ShopifyIntegrationDevelopment/ShopifyIntegrationDevelopment"));

export const metadata = {
  title: "Professional Shopify Integration Services for Your Store",
  description:
    " Streamline your online store with expert Shopify Integration Services. Connect marketplaces, payment gateways, ERP, and marketing tools efficiently.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/shopify-integration-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <ShopifyIntegrationDevelopment />
        </Suspense>
      } />

    </>
  );
};

export default page;
