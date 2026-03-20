import GlobalLayout from "@/layout/GlobalLayout";
import LazyLoader from "@/components/global/LazyLoader";
import ServicesLayout from "@/layout/ServiceLayout";
import Script from "next/script";
import React, { lazy, Suspense } from "react";

const MobileAppConsultation = lazy(() => import("@/components/services/MobileAppConsultation/MobileAppConsultation"));

export const metadata = {
  title: "Top mobile app consulting services | Dignite Studios",
  description:
    " Offering our expert mobile app consulting services to help you build scalable mobile applications aligned with your business goals through our guidance.",
  alternates: {
    canonical: "https://www.dignitestudios.com/services/mobile-app-consultation",
  },
};

const page = () => {
  return (
    <div>
      <GlobalLayout page={
        <Suspense fallback={<LazyLoader />}>
          <MobileAppConsultation />
        </Suspense>
      } />
    </div>
  );
};

export default page;
