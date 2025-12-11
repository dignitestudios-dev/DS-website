import React from 'react'
import Hero from './hero'
import Workflow from './Workflow'
import Discorvery from './Discorvery'
import ProblemSol from './ProblemSol'
import Wireframes from './Wireframes'
import BrandIdentity from './Brand'
import TechStack from './TechStack'
import AdminDashboard from './AdminDashboard'
import FinalOutcome from './FinalOutcome'
import CTA from './CTA'

const HarmoniosLearning = () => {
  return (
  <div className="w-full flex flex-col gap-8 ">
  <img src='/hl-ellipse.png' alt='ellipse' className='fixed -top-44 -left-[30%] w-[1000px] ' />
  <img src='/hl-ellipse.png' alt='ellipse' className='fixed -top-20 -right-[30%] w-[1000px]' />
  <Hero/>
  <Workflow/>
  <Discorvery/>
  <ProblemSol/>
  <Wireframes/>
  <BrandIdentity/>
  <TechStack/>
  <AdminDashboard/>
  <FinalOutcome/>
  <CTA/>
</div>

  )
}

export default HarmoniosLearning