import EcommerceAppDevelopment from "@/components/Ecommerce/EcommerceAppDevelopment/EcommerceAppDevelopment";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

export const metadata = {
  title: "Ecommerce App Development Company for Scalable Growth",
  description:
    "Partner with our ecommerce app development company to build scalable apps that improve performance, boost sales, and support long term business growth.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/ecommerce/ecommerce-app-development",
  },
};

const page = () => {
  return (
    <>
      <GlobalLayout page={<EcommerceAppDevelopment />} />
    </>
  );
};

export default page;
