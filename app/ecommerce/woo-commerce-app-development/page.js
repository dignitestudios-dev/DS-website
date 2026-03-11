import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";
import WooCommerceAppDevelopment from "@/components/Ecommerce/WooCommerceAppDevelopment/WooCommerceAppDevelopment";

const ShopifyAppDevelopment = lazy(() => import("@/components/Ecommerce/ShopifyAppDevelopment/ShopifyAppDevelopment"));

export const metadata = {
  title: " Expert WooCommerce Development Services | Dignite Studios",
  description:
    "Boost your online store with Dignite Studios’ WooCommerce development services. Plugins and integrations for scalable, reliable, high-performing stores.  ",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/woo-commerce-app-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <WooCommerceAppDevelopment />
        </Suspense>
      } />
    </>
  );
};

export default page;
