import BioYap from '@/components/CaseStudy/BioYap/BioYap';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<BioYap />} />
    )
}

export default page
