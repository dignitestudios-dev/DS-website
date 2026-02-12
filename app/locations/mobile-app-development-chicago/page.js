import MobileAppChicago from "@/components/Locations/mobile-app-chicago/MobileAppChicago";

import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";
export const metadata = {
  title: "Mobile App Development Company Chicago | Dignite Studio",
  description:
    "Dignite Studios is a trusted mobile app development company Chicago businesses choose for scalable iOS, Android, and cross-platform apps built for growth.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
  return <GlobalLayout page={<MobileAppChicago />} />;
};

export default page;
