import React from 'react'
import Hero from './hero'
import Workflow from './Workflow'
import Discorvery from './Discorvery'
import Challenges from './Challenges'
// import Wireframe from './Wireframe'
import Brand from './Brand'
import TechStack from './TechStack'
import FinalOutcome from './FinalOutcome'
import CTA from './CTA'

const HomeHero = () => {
  return (
   <div className="w-full flex flex-col gap-8 ">
     <img src='/home-hero/hero-bg.png' alt='ellipse' className='fixed  top-0  w-screen h-screen' />
     <img src='/home-hero/bg.png' alt='ellipse' className='fixed  top-[20%]  w-screen h-screen' />
    <Hero/>
    <Workflow/>
    <Discorvery/>
    <Challenges/>
    {/* <Wireframe/> */}
    <Brand/>
    <TechStack/>
    <FinalOutcome/>
    <CTA/>
   </div>
  )
}

export default HomeHero