import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const NativeAppDevelopment = lazy(() => import("@/components/services/NativeAppDevelopment/NativeAppDevelopment"));

export const metadata = {
  title: " Expert native app development company - Dignite Studios",
  description:
    " Leading top native app development company delivering highly functional iOS and Android apps with scalability and customized solutions for businesses.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/native-app-development",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <NativeAppDevelopment />
        </Suspense>
      } />
    </div>
  );
};

export default page;
