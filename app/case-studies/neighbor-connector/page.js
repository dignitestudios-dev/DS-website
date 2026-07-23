import NeighborConnector from '@/components/CaseStudy/NeighborConnector/NeighborConnector';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

export const metadata = {
  title: "Neighbor Connector Case Study | Dignite Studios",
  description:
    "Discover how Dignite Studios built Neighbor Connector, a secure community platform with real-time chat, safety check-ins, event planning, and collaboration. ",
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
