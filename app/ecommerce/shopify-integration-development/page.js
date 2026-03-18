import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";
import ShopifyIntegrationDevelopment from "@/components/Ecommerce/ShopifyIntegrationDevelopment/ShopifyIntegrationDevelopment";

const ShopifyStoreDevelopment = lazy(() => import("@/components/Ecommerce/ShopifyStoreDevelopment/ShopifyStoreDevelopment"));

export const metadata = {
  title: "Expert Shopify Store Development Services for Your Business",
  description:
    "Boost your online store with our reliable Shopify store development services. We deliver scalable, secure, and high-performing solutions for growth.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/shopify-store-development",
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
