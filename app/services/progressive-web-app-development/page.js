import MobileAppDevelopment from "@/components/services/MobileAppDevelopment/MobileAppDevelopment";
import ProgressiveWebAppDevelopment from "@/components/services/ProgressiveWebAppDevelopment/ProgressiveWebAppDevelopment";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Expert PWA Development Services for Building Reliable Apps",
  description:
    "Elevate your business with PWA Development Services. Build fast and engaging progressive web apps that bring user satisfaction. Get your app built today!",
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={<ProgressiveWebAppDevelopment />} />
    </div>
  );
};

export default page;
