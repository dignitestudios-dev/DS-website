import MobileAppDevelopmentSeoPage from "@/components/services/MobileAppDevelopmentSeo/MobileAppDevelopmentSeoPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<MobileAppDevelopmentSeoPage />} />
    </div>
  );
};

export default page;
