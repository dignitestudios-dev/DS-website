import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const DatingApp = lazy(() => import("@/components/Industries/DatingApp/DatingApp"));

export const metadata = {
  title: " Expert dating app development company - Dignite Studios",
  description:
    "Looking for the leading dating app development company? Dignite Studios builds scalable food apps to help restaurants grow and serve customers faster.",
  alternates: {
    canonical: "https://www.dignitestudios.com/industries/dating-app-development",
  },
};

const page = () => {

  return (
    <>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <DatingApp />
        </Suspense>
      } />
    </>
  );
};

export default page;
