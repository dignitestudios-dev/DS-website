import SupportAndMaintenanceServicesPage from "@/components/services/SupportAndMaintenanceServices/SupportAndMaintenanceServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<SupportAndMaintenanceServicesPage />} />
    </div>
  );
};

export default page;
