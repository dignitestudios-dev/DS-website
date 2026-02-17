

import MobileAppWashington from '@/components/Locations/mobile-app-washington/MobileAppWashington';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Expert App Development Company Washington DC | Top Apps",
  description:
    "Trustworthy app development company Washington DC. We create scalable apps with smooth UX that bring engagement and business success. Get a free quote now!",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<MobileAppWashington />} />
    )
}

export default page
