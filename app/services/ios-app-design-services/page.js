import IosAppDesignServicesPage from "@/components/services/IosAppDesignServices/IosAppDesignServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<IosAppDesignServicesPage />} />
    </div>
  );
};

export default page;
