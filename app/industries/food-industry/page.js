import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import React, { lazy, Suspense } from "react";

const FoodIndustry = lazy(() => import("@/components/Industries/FoodIndustry/FoodIndustry"));

export const metadata = {
  title: " Food delivery app development company - Dignite Studios",
  description:
    "Looking for an expert food delivery app development company? Dignite Studios builds scalable food apps to help restaurants grow and serve customers faster.",
  alternates: {
    canonical:
      "https://www.dignitestudios.com/industries/food-industry",
  },
};



const page = () => {
  return (
    <>
  
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <FoodIndustry />
        </Suspense>
      } />
    </>
  );
};

export default page;
