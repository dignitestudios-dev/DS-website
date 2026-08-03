import RightAway from '@/components/CaseStudy/RightAway/RightAway';
import GlobalLayout from '@/layout/GlobalLayout';
import React from 'react';

export const metadata = {
  title: "RightAway Case Study | Dignite Studios Portfolio",
  description:
    " See how Dignite Studios built RightAway, a construction materials marketplace with supplier management, delivery tracking, and secure online ordering.",
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
