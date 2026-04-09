import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import HireAndroidDevs from "@/components/services/HireAndroidApplicationDevelopers/HireAndroidDevs";

export const metadata = {
  title: "Hire Android Developers | Expert Android App Team",
  description:
    "Hire android developers to build secure and scalable apps. Get expert solutions with fast onboarding, reliable support, and high performance.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/services/hire-android-application-developers",
  },
};

const page = () => {
  return (
    <div>

 
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <HireAndroidDevs />
        </Suspense>
      } />
    </div>
  );
};

export default page;
