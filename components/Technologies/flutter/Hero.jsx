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
          Expert App Development Company  {" "}
          <span className="text-[#F15C20] text-nowrap">Washington DC</span>{" "}
           – Building Scalable Apps 
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Building a mobile app in Washington? You need a dedicated team of app developers like ours. Dignite Studios is one of the trusted mobile app development companies in Washington dc that understands quality and market fit. We have a team of professional app developers who develop mobile apps for the future.
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Share Your Idea With Us!
          </button>
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
     <div className="relative w-full h-[450px] my-10 flex items-center justify-center" >
       <img src={"/technologies/flutter/circles.png"} className="w-full" alt="circles"  />
       <img src={"/technologies/flutter/mob.png"} width={250} height={250} className="absolute top-0 left-1/2 translate-x-[-50%]  object-contain" />
           <div className="absolute -bottom-24 left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" />
     </div>
      <div>
     <Platforms/>
      </div>
    </div>
  );
};

export default Hero;
