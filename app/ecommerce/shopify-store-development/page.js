import ShopifyAppDevelopment from "@/components/Ecommerce/ShopifyAppDevelopment/ShopifyAppDevelopment";
import ShopifyStoreDevelopment from "@/components/Ecommerce/ShopifyStoreDevelopment/ShopifyStoreDevelopment";
import MobileAppBoston from "@/components/Locations/mobile-app-boston/MobileAppBoston";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

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
      <GlobalLayout page={<ShopifyStoreDevelopment />} />
    </>
  );
};

export default page;
