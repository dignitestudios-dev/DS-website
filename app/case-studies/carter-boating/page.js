import PerfectBoatHero from '@/components/CaseStudy/PerfectBoat/PerfectBoatHero'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    <head>
    <meta name="robots" content="noindex, nofollow" />
  </head>;
    return (
        <GlobalLayout page={<PerfectBoatHero />} />
    )
}

export default page
