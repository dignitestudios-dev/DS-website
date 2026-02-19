"use client";

import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] capitalize lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Flutter App Development Company for Business Driven  {" "}
          <span className="text-[#F15C20] text-nowrap">Mobile Products </span>{" "}
         
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Dignite Studios is the reputable Flutter app development company which helps businesses and startups in the USA and California create mobile applications which are rapid, reliable and ready for expansion. 
We focus on the performance, usability and the long term scalability. Our Flutter experts design the products which load faster, scale smoothly and deliver consistent user express across various platforms. 
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
           Get the Free Flutter App Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20]  text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
     <div className="relative w-full h-[450px] my-10 flex items-center justify-center" >
       <img src={"/technologies/flutter/circles.png"} className="w-full relative mt-20 z-20" alt="circles"  />
       <img src={"/technologies/flutter/mob.png"} width={250} height={250} className="absolute top-0 z-20 left-1/2 translate-x-[-50%]  object-contain" />
       <img src={"/technologies/bg-grad.png"} width={1400} height={1400} className="absolute top-[50%] translate-y-[-50%] left-1/2 z-10 translate-x-[-50%]  object-contain" />
           <div className="absolute -bottom-24 left-0 w-full border-none h-52 bg-gradient-to-t z-30 from-white to-transparent via-white" />
     </div>
      <div>
     <Platforms/>
      </div>
    </div>
  );
};

export default Hero;
