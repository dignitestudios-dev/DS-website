
import MobileAppBoston from '@/components/Locations/mobile-app-boston/MobileAppBoston';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Mobile Application Development Boston | Dignite Studios",
  description:
    "Mobile Application Development Boston services by Dignite Studios. We build high-performing apps for startups and growing businesses working worldwide.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<MobileAppBoston />} />
    )
}

export default page
