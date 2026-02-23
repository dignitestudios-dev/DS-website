
import CrossPlatform from '@/components/Technologies/CrossPlatform/CrossPlatform';
import ReactNative from '@/components/Technologies/ReactNative/ReactNative';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: " Cross Platform App Development Services | Dignite",
  description:
    " Get expert cross platform app development services to build fast, scalable, and user-friendly apps for startups and enterprises with Dignite Studios.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<CrossPlatform />} />
    )
}

export default page
