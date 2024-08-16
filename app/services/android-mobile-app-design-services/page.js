import AndroidMobileAppDesignServicesPage from "@/components/services/AndroidMobileAppDesignServices/AndroidMobileAppDesignServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div className="w-full">
      <ServicesLayout page={<AndroidMobileAppDesignServicesPage />} />
    </div>
  );
};

export default page;
