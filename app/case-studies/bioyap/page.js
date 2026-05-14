import BioYap from '@/components/CaseStudy/BioYap/BioYap';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "BioYap Case Study Mobile App Development Services",
  description:
    "Explore how Dignite Studios delivered mobile app development services for BioYap, a social and marketplace platform built for pharmaceutical professionals.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/case-studies/bioyap',
  },
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<BioYap />} />
    )
}

export default page
