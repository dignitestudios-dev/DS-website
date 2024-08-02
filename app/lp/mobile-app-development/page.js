import TopRatedMobileAppDevelopmentPage from "@/components/services/TopRatedMobileAppDevelopment/TopRatedMobileAppDevelopmentPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import React from "react";

const page = () => {
  <Head>
    <meta name="robots" content="noindex, nofollow" />
  </Head>;
  return (
    <div>
      <ServicesLayout page={<TopRatedMobileAppDevelopmentPage />} />
    </div>
  );
};

export default page;
