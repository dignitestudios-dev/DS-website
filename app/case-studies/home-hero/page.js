
import HomeHero from '@/components/CaseStudy/HomeHero/HomeHero';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<HomeHero />} />
    )
}

export default page
