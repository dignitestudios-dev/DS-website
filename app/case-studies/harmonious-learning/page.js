import HarmoniosLearning from '@/components/CaseStudy/HarmoniosLearning/HarmoniosLearning';

import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Harmonious Learning | Mobile App Development Services",
  description:
    "Harmonious Learning case study showcasing mobile app development services that created a safe, kid-friendly app with parental controls and fun features.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<HarmoniosLearning />} />
    )
}

export default page
