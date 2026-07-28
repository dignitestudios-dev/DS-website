import FrameTheWorld from '@/components/CaseStudy/FrameTheWorld/FrameTheWorld';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

export const metadata = {
  title: "How We Built Frame The World - Travel App Case Study",
  description:
    "Explore how the team at Dignite Studios built Frame The World. A travel platform powered by AI with secure verification and top mobile and web development. ",
  alternates: {
    canonical: 'https://www.dignitestudios.com/case-studies/frame-the-world',
  },
};

const page = () => {
    return (
        <GlobalLayout page={<FrameTheWorld />} />
    )
}

export default page
