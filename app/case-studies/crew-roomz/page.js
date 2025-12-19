// import BioYap from '@/components/CaseStudy/BioYap/BioYap';
import CrewRoomz from '@/components/CaseStudy/CrewRoomz/CrewRoomz';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<CrewRoomz />} />
    )
}

export default page
