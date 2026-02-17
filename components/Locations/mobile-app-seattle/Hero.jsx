"use client";

import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start   ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[40px] md:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Mobile App Development Seattle: Build Scalable, High Performance{" "}
          <span className="text-[#F15C20]"> Apps</span>
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Dignite Studios is a trusted mobile app development Seattle company
          helping the startups and growing businesses build reliable, scalable
          mobile products that are aligned with the real business goals.
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Get a Project Estimate Today
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-center my-12 ">
        <img
          src="/location/grad.webp"
          className="absolute left-[50%] lg:block hidden translate-x-[-50%] -top-[80%] -z-0"
        />
        <motion.img
          src="/location/mobile-seattle/mob.png"
          alt="bg"
          width={700}
          height={700}
          className="object-cover relative"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />

        <img
          src="/location/mobile-seattle/lr.png"
          alt="l"
          className="absolute top-[30%] left-[0%] md:left-[50%] translate-x-[-50%]"
        />
        <div className="absolute -bottom-24 lg:block hidden left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
