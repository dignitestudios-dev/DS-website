import React from 'react'
import Hero from './hero'
import Workflow from './Workflow'
import Discovery from './Discorvery'
import Challenges from './Challenges'
import BrandIdentity from './Brand'
import TechStack from './TechStack'
import FinalOutcome from './FinalOutcome'
import CTA from './CTA'
import Wireframe from './Wireframe'

const Games4Fun = () => {
  return (
      <div className="w-full flex flex-col gap-8 -mb-4 ">
        <Hero/>
          <div className='relative z-50' >
    <img src='/gamesfun/bg.png' alt='bg' className='absolute -top-[6%] w-screen z-0' />
    <div className='relative z-50' >
        <Workflow/>
        <Discovery/>
        <Challenges/>
        <Wireframe/>
        <BrandIdentity/>
        <TechStack/>
        <FinalOutcome/>
        </div>
        </div>
        <CTA/>
      </div>
  )
}

export default Games4Fun