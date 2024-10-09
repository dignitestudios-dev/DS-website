import MobileAppDevelopmentPPC1Page from "@/components/services/MobileAppDevelopmentppc1/MobileAppDevelopmentPPCPage1";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import React from "react";

const page = () => {
  <Head>
    <meta name="robots" content="noindex, nofollow" />
  </Head>;
  return (
    <div>
      <ServicesLayout page={<MobileAppDevelopmentPPC1Page />} />
    </div>
  );
};

export default page;
