import PwaServicesPage from "@/components/services/PwaServices/PwaServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<PwaServicesPage />} />
    </div>
  );
};

export default page;
