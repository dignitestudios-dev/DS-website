import HybridAppDevelopmentServicesPage from "@/components/services/HybridAppDevelopment/HybridAppDevelopmentServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<HybridAppDevelopmentServicesPage />} />
    </div>
  );
};

export default page;
