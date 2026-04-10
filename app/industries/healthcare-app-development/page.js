import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const HealthcareAppDevelopment = lazy(() => import("@/components/Industries/HealthcareAppDevelopment/HealthcareAppDevelopment"));

export const metadata = {
  title: "Healthcare app development company - Dignite Studios",
  description:
    " Looking for an expert healthcare app development company? Dignite Studios creates healthcare apps to improve patient care and enhance medical services.",
  alternates: {
    canonical: "https://www.dignitestudios.com/industries/healthcare-app-development",
  },
};

const page = () => {

  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <HealthcareAppDevelopment />
        </Suspense>
      } />
    </>
  );
};

export default page;
