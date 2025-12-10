import React from 'react'
import Hero from './hero'
import Workflow from './Workflow'
import Discorvery from './Discorvery'
import Challenges from './Challenges'
import Wireframe from './Wireframe'

const BioYap = () => {
  return (
   <div className="w-full flex flex-col gap-8 px-4 md:px-0">
    <Hero/>
    <Workflow/>
    <Discorvery/>
    <Challenges/>
    <Wireframe/>
   </div>
  )
}

export default BioYap