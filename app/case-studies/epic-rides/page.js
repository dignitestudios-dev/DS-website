import EpicRides from '@/components/CaseStudy/EpicRides/EpicRides';
import Games4Fun from '@/components/CaseStudy/Games4Fun/Games4Fun';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: " Epic Rides Case Study | Dignite Studios Portfolio",
  description:
    "Explore how Dignite Studios built Epic Rides, a ride hailing platform with driver first earnings, capped pricing, carpooling, and real time trip management.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/case-studies/epic-rides',
  },
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<EpicRides />} />
    )
}

export default page
