import RightAway from '@/components/CaseStudy/RightAway/RightAway';
import GlobalLayout from '@/layout/GlobalLayout';
import React from 'react';

export const metadata = {
  title: "RightAway Case Study | Dignite Studios Portfolio",
  description:
    "Explore how Dignite Studios built RightAway, a scalable ride hailing platform with real time tracking, secure payments, and connected mobility solutions.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/case-studies/right-away',
  },
};

const page = () => {
    return (
        <GlobalLayout page={<RightAway />} />
    )
}

export default page;
