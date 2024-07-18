import MyMedicalJournalHero from "@/components/CaseStudy/MyMedicalJournal/MyMedicalJournalHero";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

const page = () => {
  <head>
    <meta name="robots" content="noindex, nofollow" />
  </head>;
  return <GlobalLayout page={<MyMedicalJournalHero />} />;
};

export default page;
