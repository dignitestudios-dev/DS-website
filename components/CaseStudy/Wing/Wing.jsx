import React from 'react'
import Hero from './hero'
import Workflow from './Workflow'
import Discorvery from './Discorvery'
import ProblemSol from './ProblemSol'
import BrandIdentity from './Brand'
import TechStack from './TechStack'
import CTA from './CTA'
import FinalOutcome from './FinalOutcome'

const Wing = () => {
  return (
   <div className="w-full flex flex-col overflow-x-hidden gap-8 -mb-4">
    <Hero/>
    <Workflow/>
    <Discorvery/>
    <ProblemSol/>
    <BrandIdentity/>
    <TechStack/>
    <FinalOutcome/>
    <CTA/>
   </div>
  )
}

export default Wing