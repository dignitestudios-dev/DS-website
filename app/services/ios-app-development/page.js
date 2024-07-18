import IosAppPage from "@/components/services/IosAppDevelopment/IosAppPage";
import ServicesLayout from "@/layout/ServiceLayout";
import Head from "next/head";
import React from "react";

const page = () => {
  <head>
    <meta name="robots" content="noindex, nofollow" />
  </head>;
  return <ServicesLayout page={<IosAppPage />} />;
};

export default page;
