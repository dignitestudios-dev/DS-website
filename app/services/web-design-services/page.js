import WebDesignServices from "@/components/services/WebDesignServices/WebDesignServices";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Custom Web Development Services - Top Web Solutions USA",
  description:
    "Get web design and development services and custom web development services to build scalable and conversion-focused websites that drive business growth.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/web-app-development",
  },
};

const page = () => {
  return (
    <div>



 
      <GlobalLayout page={<WebDesignServices />} />


      {/* Service Schema */}
</div>
  );
};

export default page;
