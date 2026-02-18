import React from 'react'
import Hero from './hero'
import Workflow from './Workflow'
import Discorvery from './Discorvery'
import Challenges from './Challenges'
import Wireframe from './Wireframe'
import Brand from './Brand'
import TechStack from './TechStack'
import FinalOutcome from './FinalOutcome'
import CTA from './CTA'

const BioYap = () => {
  return (
   <div className="w-full flex flex-col gap-8 pb-20 ">
    <Hero/>
    <Workflow/>
    <Discorvery/>
    <Challenges/>
    <Wireframe/>
    <Brand/>
    <TechStack/>
    <FinalOutcome/>
    <CTA/>
   </div>
  )
}

export default BioYap