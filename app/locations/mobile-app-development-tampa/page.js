
import MobileAppTampa from '@/components/Locations/mobile-app-tampa/MobileAppTampa';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "App Development Services in Tampa designed for Startups",
  description:
    "Looking for app development services in Tampa? We build custom high-performance mobile apps designed to grow with your business. Talk to the experts now",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<MobileAppTampa />} />
    )
}

export default page
