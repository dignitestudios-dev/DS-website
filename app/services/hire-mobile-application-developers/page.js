import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";
import MobAppDev from "@/components/services/HireMobAppDevelopers/MobAppDev";

export const metadata = {
  title: "Hire Mobile App Developers for Scalable App Solutions",
  description:
    " Hire Mobile App Developers at Dignite Studios to build iOS, Android, and cross-platform apps with fast onboarding, expert support, and scalable solutions. ",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/hire-mobile-application-developers",
  },  
};

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
