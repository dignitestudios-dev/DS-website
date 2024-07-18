import NyknHero from "@/components/CaseStudy/Nykn/NyknHero";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

const page = () => {
  <head>
    <meta name="robots" content="noindex, nofollow" />
  </head>;
  return <GlobalLayout page={<NyknHero />} />;
};

export default page;
