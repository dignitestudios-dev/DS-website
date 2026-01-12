
import MobileAppCalifornia from '@/components/Locations/mobile-app-california/MobileAppCalifornia';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Mobile App Development Services in California - Dignite Studios",
  description:
    "Discover top-tier mobile app development services in California with Dignite Studios. We specialize in creating custom, high-performance apps that drive business growth and user engagement.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<MobileAppCalifornia />} />
    )
}

export default page
