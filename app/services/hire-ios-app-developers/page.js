import HireIosAppDevelopersPage from "@/components/services/HireIosAppDevelopers/HireIosAppDevelopersPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

export const metadata = {
  title: "Hire iOS App Developers",
  description:
    "iPhone app developers can develop applications in a mere time so hire an iOS app developer to reduce the risk patterns.",
};

const page = () => {
  return (
    <div>
      <ServicesLayout page={<HireIosAppDevelopersPage />} />
    </div>
  );
};

export default page;
