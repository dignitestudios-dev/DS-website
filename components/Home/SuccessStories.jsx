import FlickCardStack from '@/components/Home/CaseStudiesCaraousel'
import React from 'react'

const SuccessStories = ({header , para , header2}) => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start md:py-10 pb-20 ">
          <div className="flex relative z-20 -mb-28  w-[90%] md:w-[70%] flex-col text-center mx-auto items-center">
            <h1 className="text-5xl   md:text-7xl leading-[42px] lg:leading-[1.1] tracking-tighter font-bold ">
           Success Stories from Our Startup App Development Company
              {/* <span className="text-[#F15C20]"> {header2 || "Dignite Studios"}</span>{" "} */}
            </h1>
            <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
          Check out our case studies. See how we help founders launch apps by the best mobile app development agency for startups. Each story shows strategy, execution, and results.
            </p>
    
       
          </div>
          <div className='pt-10' >
      <FlickCardStack/>
    
        </div>
        </div>
  )
}

export default SuccessStories