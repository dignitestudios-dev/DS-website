import HireAndroidDevelopersPage from "@/components/services/HireAndroidDevelopers/HireAndroidDevelopersPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

const page = () => {
  return (
    <div>
      <ServicesLayout page={<HireAndroidDevelopersPage />} />
    </div>
  );
};

export default page;
