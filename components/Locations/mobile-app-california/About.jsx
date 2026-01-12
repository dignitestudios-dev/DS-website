import React from 'react'
import { MdArrowOutward } from 'react-icons/md'

const About = () => {
  return (
     <div className="w-full grid grid-cols-1  justify-start items-start md:py-40 ">
      <div className="flex relative z-20  w-[90%] md:w-[75%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          About{" "}
          <span className="text-[#F15C20]"> Dignite Studios</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#0C0C0C]">
          Looking for a top mobile app company in California? That's us. Dignite Studios is a team of 200+ expert mobile app developers who work with startups and growing businesses and help them turn their ideas into scalable, high-performing mobile apps. Including strategy, UI/UX design with agile development and deployment, we make sure to build apps that are reliable, engaging, and built to grow with your business. With 5+ years of experience and an expert team of designers, project managers, and app developers California, we build apps exactly the way you envisioned. 
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
           Talk to our California-based team
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