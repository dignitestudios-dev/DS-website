import MaidSimplHero from "@/components/CaseStudy/MaidSimpl/MaidSimplHero";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

const page = () => {
  <head>
    <meta name="robots" content="noindex, nofollow" />
  </head>;
  return <GlobalLayout page={<MaidSimplHero />} />;
};

export default page;
