import Games4Fun from '@/components/CaseStudy/Games4Fun/Games4Fun';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<Games4Fun />} />
    )
}

export default page
