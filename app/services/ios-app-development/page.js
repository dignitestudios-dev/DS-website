import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { Suspense } from "react";
import IOSAppDev from "@/components/services/iOSAppDev/iOSAppDev";

export const metadata = {
  title: "Top iOS App Development Services - Dignite Studios",
  description:
    "Get trusted iOS app development services to build secure and user friendly iOS applications that drive growth and enhance user experience. Contact us!",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/ios-app-development",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <IOSAppDev />
        </Suspense>
      } />
    </div>
  );
};

export default page;
