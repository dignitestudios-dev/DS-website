import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const About = ({heading,heading2 , para , button}) => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start md:py-20 ">
      <div className="flex relative z-20  w-[90%] md:w-[75%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          {heading}{" "}
          <span className="text-[#F15C20]"> {heading2}</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
         {para}
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
         {button ? button : " Talk to our California-based team"}
          </button>
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
  
      <div>

    </div>
    </div>
  )
}

export default About