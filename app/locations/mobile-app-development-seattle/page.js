import MobileAppBoston from "@/components/Locations/mobile-app-boston/MobileAppBoston";
import MobileAppSeattle from "@/components/Locations/mobile-app-seattle/MobileAppSeattle";

import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
export const metadata = {
  title: "Mobile App Development Seattle – Build Scalable Apps",
  description:
    "Dignite Studios is a leading mobile app development Seattle company delivering custom apps that engage users, drive revenue, and ensure long-term growth.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
  return <GlobalLayout page={<MobileAppSeattle />} />;
};

export default page;
