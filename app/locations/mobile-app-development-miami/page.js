
import MobileAppBoston from '@/components/Locations/mobile-app-boston/MobileAppBoston';
import MobileAppMiami from '@/components/Locations/mobile-app-miami/MobileAppMiami';
import MobileAppSeattle from '@/components/Locations/mobile-app-seattle/MobileAppSeattle';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Experienced Mobile App Development Company New York",
  description:
    "Mobile app development company New York delivering iOS, Android, and cross-platform apps with scalable tech, expert teams, and real business results today.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<MobileAppMiami />} />
    )
}

export default page
