import DigitalMarketingServices from "@/components/services/DigitalMarketingServices/DigitalMarketingServices";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Digital Marketing Expert Services - Dignite Studios",
  description:
    "Work with a digital marketing expert to increase your visibility and to generate qualified leads. Drive measurable business growth through our strategies.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/digital-marketing-services",
  },
};

const page = () => {
  return (
    <div>



 
      <GlobalLayout page={<DigitalMarketingServices />} />


      {/* Service Schema */}
</div>
  );
};

export default page;
