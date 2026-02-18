
import CaseStudies from '@/components/CaseStudy/CaseStudies';
import Wing from '@/components/CaseStudy/Wing/Wing';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
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
        <GlobalLayout page={<CaseStudies />} />
    )
}

export default page
