import HireMobileAppDevelopersPage from "@/components/services/HireMobileAppDevelopers/HireMobileAppDevelopersPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

export const metadata = {
  title: "Hire the best Mobile App developers | Dignite Studios",
  description:
    "Hire the best Mobile App developers to build intuitive applications with a well-organized company holding dedicated and talented developers.",
};

const page = () => {
  return (
    <div>
      <ServicesLayout page={<HireMobileAppDevelopersPage />} />
    </div>
  );
};

export default page;
