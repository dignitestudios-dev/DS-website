import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";

const RealState = lazy(() => import("@/components/Industries/RealState/RealState"));

export const metadata = {
  title: "Real Estate App Development Company – Scalable Mobile Apps",
  description:
    "Hire a top real estate app development company to create scalable mobile apps for property platforms, agents, and businesses with smooth user experiences",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/industries/real-state",
  },
};



const page = () => {
  return (
    <>
  
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <RealState />
        </Suspense>
      } />
    </>
  );
};

export default page;
