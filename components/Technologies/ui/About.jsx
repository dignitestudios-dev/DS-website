import Link from 'next/link'
import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const About = ({heading,heading2 , para , button}) => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start pb-12">
      <div className="flex relative z-20  w-[90%] md:w-[75%] flex-col text-center mx-auto items-center">
        <h2 className="text-4xl leading-[42px] md:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          {heading}{" "}
          <span className="text-[#F15C20]"> {heading2}</span>{" "}
        </h2>
        <p className="text-sm md:text-lg my-6 dark:text-white text-black/50 md:text-[#0C0C0C]">
         {para}
        </p>

        <Link href={"/contact-us"} className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20]  text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
         {button ? button : " Talk to our California-based team"}
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
  
      <div>

    </div>
    </div>
  )
}

export default About