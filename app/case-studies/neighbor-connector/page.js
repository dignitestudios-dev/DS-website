import NeighborConnector from '@/components/CaseStudy/NeighborConnector/NeighborConnector';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

export const metadata = {
  title: " Neighbor Connector Case Study | Dignite Studios Portfolio",
  description:
    "Explore how Dignite Studios built Neighbor Connector, a community focused mobile application designed to help neighbors build safer and more connected communities.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/case-studies/neighbor-connector',
  },
};

const page = () => {
    return (
        <GlobalLayout page={<NeighborConnector />} />
    )
}

export default page
