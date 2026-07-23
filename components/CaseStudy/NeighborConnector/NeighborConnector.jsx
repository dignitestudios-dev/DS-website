import React from 'react'
import { Poppins } from 'next/font/google'
import Hero from './hero'
import Workflow from './Workflow'
import Discovery from './Discovery'
import Challenges from './Challenges'
import Wireframe from './Wireframe'
import Brand from './Brand'
import TechStack from './TechStack'
import LandingPage from './LandingPage'
import FinalOutcome from './FinalOutcome'
import CTA from './CTA'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

const NeighborConnector = () => {
  return (
   <div className={`w-full flex flex-col bg-[#FFFFFF] ${poppins.variable} font-poppins`}>
    <Hero/>
    <Workflow/>
    <Discovery/>
    <Challenges/>
    <Wireframe/>
    <Brand/>
    <TechStack/>
    <LandingPage/>
    <FinalOutcome/>
    <CTA/>
   </div>
  )
}

export default NeighborConnector
