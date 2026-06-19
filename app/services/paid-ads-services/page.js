import PaidAdsServices from "@/components/services/PaidAdsServices/PaidAdsServices";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Paid Advertising Services - Top Ad Management USA",
  description:
    "Get paid advertising services and ad management to build scalable and conversion-focused campaigns that drive business growth.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/paid-ads-services",
  },
};

const page = () => {
  return (
    <div>



 
      <GlobalLayout page={<PaidAdsServices />} />

 
    </div>
  );
};

export default page;
