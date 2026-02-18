
import CaseStudies from '@/components/CaseStudy/CaseStudies';
import Wing from '@/components/CaseStudy/Wing/Wing';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Wing Dating Mobile App | Mobile App Development Service",
  description:
    "Wing case study showcasing a mobile app development service that built a secure, friend-powered dating app with smooth UX, verification, and subscriptions.",
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
