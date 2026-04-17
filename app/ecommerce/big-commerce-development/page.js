import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import BigCommerceAppDevelopment from "@/components/Ecommerce/BigCommerceAppDevelopment/BigCommerceAppDevelopment";

export const metadata = {
  title: "  Reliable BigCommerce developments Service for Growths",
  description:
    " Dignite Studios offers expert BigCommerce developments Service to build scalable, secure, and high performing ecommerce stores for growing businesses.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/big-commerce-development",
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
