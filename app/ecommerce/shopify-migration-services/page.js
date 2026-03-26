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
  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <ShopifyMigrationServices />
        </Suspense>
      } />


    </>
  );
};

export default page;
