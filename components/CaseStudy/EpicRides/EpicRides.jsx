import React from 'react'
import { Poppins } from 'next/font/google'
import Hero from './hero'
import Workflow from './Workflow'
import Discovery from './Discovery'
import Challenges from './Challenges'
import Solutions from './Solutions'
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

const EpicRides = () => {
  return (
   <div className={`w-full flex flex-col bg-[#000B00] pb-20 ${poppins.variable} font-poppins`}>
    <Hero/>
    <Workflow/>
    <Discovery/>
    <Challenges/>
    <Solutions/>
    <Wireframe/>
    <Brand/>
    <TechStack/>
    <LandingPage/>
    <FinalOutcome/>
    <CTA/>
   </div>
  )
}

export default EpicRides
