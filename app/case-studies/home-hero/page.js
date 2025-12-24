
import HomeHero from '@/components/CaseStudy/HomeHero/HomeHero';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "Home Hero Case Study Mobile App Development Services",
  description:
    "Explore how our mobile app development services built Home Hero with secure workflows, intuitive design verified providers and a balanced job system on.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<HomeHero />} />
    )
}

export default page
