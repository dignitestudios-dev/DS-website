import Games4Fun from '@/components/CaseStudy/Games4Fun/Games4Fun';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: " Games4Fun Case Study | Web Application Development Services",
  description:
    " Explore how Games4Fun delivers a gamer-focused platform with smart PC building and FPS tools through expert Web Application Development Services.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<Games4Fun />} />
    )
}

export default page
