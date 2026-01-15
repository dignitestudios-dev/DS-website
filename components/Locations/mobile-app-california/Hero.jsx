"use client";

import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start pt-20 ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          Mobile App Development Company in California – Build Powerful{" "}
          <span className="text-[#F15C20]">Apps That Scale</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Dignite Studios is a mobile app development company in California, building high-performance, scalable mobile apps for startups, enterprises, and funded founders across competitive California markets.
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Book a Free Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-orange-600 text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
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

        <div className="flex flex-col items-center w-full my-20">
          <h4 className="text-sm text-[#1F222E] text-center font-semibold">Trusted by Clients. Recognized by Platforms</h4>
<div className="flex justify-center gap-16 items-center mt-8 lg:flex-row flex-col ">
  {[1, 2, 3, 4, 5 , 6 , 7].map((num) => (
    <img src={`/location/mobile-california/icons/${num}.png`} alt={`Logo ${num}`} className=" grayscale " />
  ))}
</div>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
