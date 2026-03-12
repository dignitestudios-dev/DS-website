import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import BigCommerceAppDevelopment from "@/components/Ecommerce/BigCommerceAppDevelopment/BigCommerceAppDevelopment";

export const metadata = {
  title: " Expert BigCommerce Development Services | Dignite Studios",
  description:
    "Boost your online store with Dignite Studios’ BigCommerce development services. Plugins and integrations for scalable, reliable, high-performing stores.  ",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/big-commerce-app-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <BigCommerceAppDevelopment />
        </Suspense>
      } />
    </>
  );
};

export default page;
