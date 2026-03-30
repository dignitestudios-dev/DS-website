"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = ({
  header = "Real Estate App ",
  header2 = "Development Company",
  para = "We are a trusted real estate app development company that builds scalable apps for the property market places, agents and real estate businesses. Our apps help users search properties, manage the listings and connect easily on one platform.",
  btn = "Get Free Consultation",
}) => {
  return (
    <div className="w-full grid grid-cols-1 bg-[url('/ecommerce/shopify-app/grad.webp')] bg-cover bg-center bg-no-repeat  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          {header}
          <span className="text-[#F15C20] text-nowrap">{header2}</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">{para}</p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            {btn}
          </button>
          <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex  justify-center items-center my-12 mt-20 ">
         <div className="relative flex items-center justify-center md:w-[600px] md:h-[600px] w-[250px] h-[250px] mx-auto">

      {/* Orange base with glow */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#F15C20]"
        animate={{ boxShadow: [
          "0 0 40px 10px #F15C2088, 0 0 80px 30px #F15C2044",
          "0 0 70px 20px #F15C20bb, 0 0 130px 60px #F15C2066",
          "0 0 40px 10px #F15C2088, 0 0 80px 30px #F15C2044",
        ]}}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Dashed ring — clockwise, inside the orange */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 500"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="250" cy="250" r="175"
          fill="none" stroke="white" strokeWidth="3"
          strokeDasharray="18 10" strokeLinecap="round"
        />
      </motion.svg>

      {/* Solid arc segments — counter-clockwise, inside the orange */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 500 500"
        animate={{ rotate: -360 }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="250" cy="250" r="200"
          fill="none" stroke="white" strokeWidth="2.5"
          strokeDasharray="110 500" strokeLinecap="round"
        />
        <circle cx="250" cy="250" r="200"
          fill="none" stroke="white" strokeWidth="2.5"
          strokeDasharray="55 500" strokeDashoffset="180" strokeLinecap="round"
        />
      </motion.svg>

      
    </div>
   <div className="absolute left-1/2 -translate-x-1/2" >
   <Image src={"/industries/food-industry/mob.webp"} alt="Mobile" width={450} height={450} /></div>
        {/* <div className="absolute -bottom-32  left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" /> */}
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
