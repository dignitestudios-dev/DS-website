import FlickCardStack from '@/components/Home/CaseStudiesCaraousel'
import React from 'react'

const SuccessStories = ({header , para , header2}) => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start md:py-10 pb-20 ">
          <div className="flex relative z-20 -mb-28  w-[90%] md:w-[70%] flex-col text-center mx-auto items-center">
            <h1 className="text-5xl   md:text-7xl font-bold ">
            From Problems to 
Measurable Design Impact
              {/* <span className="text-[#F15C20]"> {header2 || "Dignite Studios"}</span>{" "} */}
            </h1>
            <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
            This collection highlights my most effective design work, focusing on real challenges and strategic solutions. Each case study breaks down the problem, design process, and outcome—illustrating how user-centered thinking, collaboration, and iteration drive meaningful results.
            </p>
    
       
          </div>
          <div className='pt-10' >
      <FlickCardStack/>
    
        </div>
        </div>
  )
}

export default SuccessStories