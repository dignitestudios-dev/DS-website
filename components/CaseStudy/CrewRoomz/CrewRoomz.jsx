import React from 'react'
import Hero from './hero'
import Workflow from './Workflow'
import Discorvery from './Discorvery'
import Challenges from './Challenges'
// import ProblemSol from './ProblemSol'
// import Wireframes from './Wireframes'
// import BrandIdentity from './Brand'
import TechStack from './TechStack'
import AdminDashboard from './AdminDashboard'
import BrandIdentity from './Brand'
import Wireframe from './Wireframe'
import FinalOutcome from './FinalOutcome'
import CTA from './CTA'
// import AdminDashboard from './AdminDashboard'
// import FinalOutcome from './FinalOutcome'
// import CTA from './CTA'

const CrewRoomz = () => {
  return (
  <div className="w-full flex flex-col gap-8 -mb-4 pb-20">
  {/* <img src='/hl-ellipse.png' alt='ellipse' className='fixed -top-44 -left-[30%] w-[1000px] ' />*/}
  {/* <img src='/crew/bg.png' alt='ellipse' className='absolute -top-20 -right-[30%] w-screen' />  */}
  <Hero/>
  <div className='relative' >
    <img src='/crew/bg.png' alt='bg' className='absolute -top-[6%] w-screen z-0' />
   <Workflow/>
  <Discorvery/>
  <Challenges/>
  <TechStack/>
  <AdminDashboard/>
  <BrandIdentity/>
  <Wireframe/>
  <FinalOutcome/>
  </div>
  <CTA/>
 {/* <ProblemSol/>
  <Wireframes/>
  <BrandIdentity/>
  <TechStack/>
  <AdminDashboard/>
  <FinalOutcome/>
  <CTA/> */}
</div>

  )
}

export default CrewRoomz