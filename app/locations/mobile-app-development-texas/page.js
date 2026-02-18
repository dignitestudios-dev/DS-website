

import MobileAppTexas from '@/components/Locations/mobile-app-texas/MobileAppTexas';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Trustable Mobile App Development in Texas | Top Apps",
  description:
    "Trustworthy mobile app development in Texas. Dignite Studios creates scalable apps with smooth UX that bring engagement and business success. Get a free quote now!",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<MobileAppTexas/>} />
    )
}

export default page
