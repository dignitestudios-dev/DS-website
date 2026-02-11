import MobileAppCalifornia from "@/components/Locations/mobile-app-california/MobileAppCalifornia";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
export const metadata = {
  title: "Mobile App Development Company in California | Top Apps",
  description:
    "Top mobile app development company in California. We create scalable apps with smooth UX that bring engagement and business success. Get a free quote now!",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
  return <GlobalLayout page={<MobileAppCalifornia />} />;
};

export default page;
