import FlickCardStack from '@/components/Home/CaseStudiesCaraousel'
import React from 'react'

const SuccessStories = ({header , para , header2}) => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start  ">
          <div className="flex relative z-20 -mb-28  w-[90%] md:w-[70%] flex-col text-center mx-auto items-center">
            <h2 className="text-4xl leading-10 tracking-tighter md:text-7xl font-bold ">
             {header || "Success Stories with "}
              <span className="text-[#F15C20]"> {header2 || "Dignite Studios"}</span>{" "}
            </h2>
            <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
             {para || "Curious how Dignite Studios works? Check out our case studies to see real projects, clever solutions, and apps we’ve built that actually make life easier for businesses like yours."}
            </p>
    
       
          </div>
          <div className='pt-10' >
      <FlickCardStack/>
    
        </div>
        </div>
  )
}

export default SuccessStories