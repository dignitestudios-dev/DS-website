import MobileAppDesignServicesPage from "@/components/services/MobileAppDesignServices/MobileAppDesignServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<MobileAppDesignServicesPage />} />
    </div>
  );
};

export default page;
