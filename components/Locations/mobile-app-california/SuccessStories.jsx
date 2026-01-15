import FlickCardStack from '@/components/Home/CaseStudiesCaraousel'
import React from 'react'

const SuccessStories = () => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start md:py-10 ">
          <div className="flex relative z-20 -mb-28  w-[90%] md:w-[55%] flex-col text-center mx-auto items-center">
            <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
             Success Stories with 
              <span className="text-[#F15C20]"> Dignite Studios</span>{" "}
            </h1>
            <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
             Curious how Dignite Studios works? Check out our case studies to see real projects, clever solutions, and apps we’ve built that actually make life easier for businesses like yours.
            </p>
    
       
          </div>
          <div className='pt-10' >
      <FlickCardStack/>
    
        </div>
        </div>
  )
}

export default SuccessStories