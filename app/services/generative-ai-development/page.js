import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import AiAppDevelopment from "@/components/services/AiAppDevelopment/AiAppDevelopment";

export const metadata = {
  title: "Generative AI development services | Dignite Studios",
  description:
    " Offering our expert generative AI development services to help you build scalable mobile applications aligned with your business goals through our guidance",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/ai-app-development",
  },  
};

const page = () => {
  return (
    <div>
      {/* <meta name="geo.region" content="US" />
<meta name="geo.position" content="39.78373;-100.445882" />
<meta name="ICBM" content="39.78373, -100.445882" /> */}


 
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <AiAppDevelopment />
        </Suspense>
      } />
    </div>
  );
};

export default page;
