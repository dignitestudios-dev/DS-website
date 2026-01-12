import BioYap from '@/components/CaseStudy/BioYap/BioYap';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Dignite Locations - Dignite Studios",
  description:
    "Discover Dignite Studios' global locations. Connect with our expert mobile app development teams worldwide to bring your digital vision to life.",
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
