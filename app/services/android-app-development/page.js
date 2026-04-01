import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import AndroidAppDev from "@/components/services/AndroidAppDev/AndroidAppDev";

export const metadata = {
  title: "Top Android App Development Services - Dignite Studios",
  description:
    " Get expert Android app development services to build secure and user friendly applications that drive growth and enhance user experience. Contact us today!",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/android-app-development",
  },  
};

const page = () => {
  return (
    <div>
      <meta name="geo.region" content="US" />
<meta name="geo.position" content="39.78373;-100.445882" />
<meta name="ICBM" content="39.78373, -100.445882" />


 
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <AndroidAppDev />
        </Suspense>
      } />
    </div>
  );
};

export default page;
