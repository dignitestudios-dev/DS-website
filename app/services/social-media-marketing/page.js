import SocialMediaMarketing from "@/components/services/SocialMediaMarketing/SocialMediaMarketing";
import GlobalLayout from "@/layout/GlobalLayout";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React from "react";

export const metadata = {
  title: "Social Media Marketing Services - Dignite Studios",
  description:
    "Elevate your brand with our social media marketing services. We build communities, increase brand awareness, and drive revenue through strategic campaigns.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/social-media-marketing",
  },
};

const page = () => {
  return (
    <div>



 
      <GlobalLayout page={<SocialMediaMarketing />} />


      {/* Service Schema */}
</div>
  );
};

export default page;
