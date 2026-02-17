"use client";

import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start  ">
      <div className="flex relative z-20  w-[98%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[40px] md:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Mobile App Development Company in{" "}
          <span className="text-[#F15C20]">California</span>
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Looking for mobile app development services in California? Dignite
          Studios is a trusted mobile app development company in California that
          understands quality and market fit. We have a team of professional app
          developers in California.
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Book a Free Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="w-[80%] mx-auto z-10 flex justify-center mt-20 md:-mt-10 relative">
        <img src="/location/mobile-california/bg-grad.png" fill alt="bg" />
        <motion.img
          src="/location/mobile-california/mob.png"
          alt="bg"
          width={800}
          height={800}
          className="absolute bottom-0 left-[0%] md:left-[20%] translate-x-[-50%]"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
