import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const MobileAppTesting = lazy(() => import("@/components/services/MobileAppTesting/MobileAppTesting"));

export const metadata = {
  title: "Mobile App Testing | Dignite Studios",
  description:
    "Professional mobile app development services encompassing app solutions. Our team crafts ingenious applications to stand out in mobile services.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/mobile-app-testing",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <MobileAppTesting />
        </Suspense>
      } />
    </div>
  );
};

export default page;
