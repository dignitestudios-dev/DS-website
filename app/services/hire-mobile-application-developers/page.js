import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import MobAppDev from "@/components/services/HireMobAppDevelopers/MobAppDev";

// export const metadata = {
//   title: "Top Android App Development Services - Dignite Studios",
//   description:
//     " Get expert Android app development services to build secure and user friendly applications that drive growth and enhance user experience. Contact us today!",
//   alternates: {
//     canonical: "https://www.dignitestudios.com/services/android-app-development",
//   },  
// };

const page = () => {
  return (
    <div>

 
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <MobAppDev />
        </Suspense>
      } />
    </div>
  );
};

export default page;
