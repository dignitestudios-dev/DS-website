import MobileAppDevelopmentPPCPage from "@/components/services/MobileAppDevelopmentppc/MobileAppDevelopmentPPCPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import React from "react";

const page = () => {
  <Head>
    <meta name="robots" content="noindex, nofollow" />
  </Head>;
  return (
    <div>
      <ServicesLayout page={<MobileAppDevelopmentPPCPage />} />
    </div>
  );
};

export default page;
