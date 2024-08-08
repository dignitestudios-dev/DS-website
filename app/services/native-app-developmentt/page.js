import NativeAppDevelopmentServicesPage from "@/components/services/NativeAppDevelopmentServices/NativeAppDevelopmentServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<NativeAppDevelopmentServicesPage />} />
    </div>
  );
};

export default page;
