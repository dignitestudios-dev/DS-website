import AndroidAppPage from "@/components/services/AndroidAppDevelopment/AndroidAppPage";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import React from "react";

const page = () => {
  <Head>
    <meta name="robots" content="noindex, nofollow" />
  </Head>;
  return <ServicesLayout page={<AndroidAppPage />} />;
};

export default page;
