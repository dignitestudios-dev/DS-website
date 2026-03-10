import GlobalLayout from '@/layout/GlobalLayout';
import LazyLoader from '@/components/global/LazyLoader';
import React, { lazy, Suspense } from 'react';

const CaseStudies = lazy(() => import('@/components/CaseStudy/CaseStudies'));
export const metadata = {
  title: "Dignite Studios Archive – Explore Our Projects & Insights",
  description:
    "Discover Dignite Studios’ archive showcasing our projects case studies and insights on automation technology and business growth solutions.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={
          <Suspense fallback={<LazyLoader />}>
            <CaseStudies />
          </Suspense>
        } />
    )
}

export default page
