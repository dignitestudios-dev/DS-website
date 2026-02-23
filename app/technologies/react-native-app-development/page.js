
import ReactNative from '@/components/Technologies/ReactNative/ReactNative';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "React Native App Development Company | Dignite Studio",
  description:
    "Hire a trusted react native app development company to build fast, scalable, and user-friendly mobile apps for startups and enterprises across the USA.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<ReactNative />} />
    )
}

export default page
