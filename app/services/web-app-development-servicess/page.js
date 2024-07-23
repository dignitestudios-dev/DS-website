import WebAppDevServicePage from "@/components/services/WebAppDevelopmentServices/WebAppDevServicePage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<WebAppDevServicePage />} />
    </div>
  );
};

export default page;
