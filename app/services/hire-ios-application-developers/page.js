import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import IOSAppDev from "@/components/services/HireIOSApplicationDevelopers/IOSAppDev";

export const metadata = {
  title: "Hire iOS App Developer | Expert iOS Development Services",
  description:
    "Hire expert developers for reliable ios app development services. Build scalable iOS apps with fast onboarding, flexible hiring, and strong support.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/hire-ios-application-developers",
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
