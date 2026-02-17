"use client";

import { motion } from "framer-motion";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start  ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-5xl leading-10 tracking-tighter md:text-7xl font-bold ">
          Miami Mobile App Development Company for{" "}
          <span className="text-[#F15C20] text-nowrap">
            Scalable Digital Products
          </span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Dignite Studios delivers the reliable Miami mobile app development
          solutions for the startups and growing businesses focused on the
          scalability, strong performance and the long term digital business
          success as the mobile app development company in Miami.
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Get Your App Estimate
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-center my-12 ">
        <img
          src="/location/grad.webp"
          className="absolute left-[50%] translate-x-[-50%] -top-[60%] -z-0"
        />
        <img
          src="/location/mobile-miami/bg.png"
          alt="bg"
          className="absolute"
        />
        <motion.img
          src="/location/mobile-miami/mob.png"
          alt="bg"
          width={400}
          height={400}
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
          src="/location/mobile-miami/r.png"
          alt="r"
          className="absolute top-[40%] left-[0%] md:left-[75%] translate-x-[-50%]"
        />
        <img
          src="/location/mobile-newyork/l.png"
          alt="l"
          className="absolute top-[30%] left-[0%] md:left-[30%] translate-x-[-50%]"
        />
        <div className="absolute -bottom-24 left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
