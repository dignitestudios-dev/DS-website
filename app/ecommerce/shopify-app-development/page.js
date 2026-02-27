import ShopifyAppDevelopment from "@/components/Ecommerce/ShopifyAppDevelopment/ShopifyAppDevelopment";
import MobileAppBoston from "@/components/Locations/mobile-app-boston/MobileAppBoston";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Shopify App Development for Scalable Business Growth",
  description:
    "Expert shopify app development to build scalable apps that improve performance enhance user experience and support long term business growth",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/shopify-app-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={<ShopifyAppDevelopment />} />
    </>
  );
};

export default page;
