// import BioYap from '@/components/CaseStudy/BioYap/BioYap';
import CrewRoomz from '@/components/CaseStudy/CrewRoomz/CrewRoomz';
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'
export const metadata = {
  title: "CrewRoomz Case Study | Custom Web Application Build",
  description:
    "CrewRoomz case study showcasing a custom web application built for cabin crews, featuring secure bookings, admin control, and scalable web app development.",
};
const page = () => {
  //   <head>
  //   <meta name="robots" content="noindex, nofollow" />
  // </head>;
    return (
        <GlobalLayout page={<CrewRoomz />} />
    )
}

export default page
