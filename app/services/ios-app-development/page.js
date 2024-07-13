import IosAppPage from "@/components/services/IosAppDevelopment/IosAppPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import React from "react";

const page = () => {
  <Head>
    <meta name="robots" content="noindex, nofollow" />
  </Head>;
  return <ServicesLayout page={<IosAppPage />} />;
};

export default page;
