import NativeAppDevelopmentServicesPage from "@/components/services/NativeAppDevelopmentServices/NativeAppDevelopmentServicesPage";
import ServicesLayout from "@/layout/ServiceLayout";
import React from "react";

// export const metadata = {
//   title: "Native App Development Company | Dignite Studios",
//   description: "",
// };

const page = () => {
  return (
    <div>
      <ServicesLayout page={<NativeAppDevelopmentServicesPage />} />
    </div>
  );
};

export default page;
