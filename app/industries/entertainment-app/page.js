import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const EntertainmentApp = lazy(() => import("@/components/Industries/EntertainmentApp/EntertainmentApp"));

export const metadata = {
  title: " Entertainment App Development Company Services",
  description:
    " Expert entertainment app development company for streaming, gaming, and music apps. Build scalable, high-performance apps to boost engagement",
  alternates: {
    canonical: "https://www.dignitestudios.com/industries/entertainment-app",
  },
};

const page = () => {

  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <EntertainmentApp />
        </Suspense>
      } />
    </>
  );
};

export default page;
