"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className=" w-full relative flex flex-col items-center">

      {/* Cloud Background */}
      <div className="absolute hidden lg:block inset-0 top-[30%] left-10  z-0">
        <Image src="/services/digital/l.webp" alt="Cloud Background" width={300} height={300} priority className="object-cover object-top" />
      </div>
      <div className="absolute hidden lg:block  top-[30%] right-[5%]  z-0">
        <Image src="/services/digital/r.webp" alt="Cloud Background" width={300} height={300} priority className="object-cover object-top" />
      </div>


      <div className="flex relative z-20 w-[90%] md:w-[80%] lg:w-[850px] flex-col text-center mx-auto items-center mt-12 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight font-bold text-[#0C0C0C] capitalize"
        >
          Digital Marketing Expert <span className="text-[#F15C20]">for Business Growth</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[16px] md:text-[18px] leading-[161%] my-8 text-[#5C5C5C] w-full"
        >
          Get a digital marketing expert team to increase your brand visibility and attract qualified leads. Maximize your revenue through customized data driven strategies. Marketing strategies that are created to help your business outperform competitors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact-us"
            className="flex items-center group justify-center "
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
              Discuss Your Requirements
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="relative flex justify-center w-full px-4 md:px-0 mt-8 z-20 mb-20 md:mb-12">
        <motion.div
          className="relative flex flex-col items-center"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Interactive URL Bar */}
          <div className="relative mb-8 w-[60%] lg:w-[95%] max-w-[802px] h-[64px]  rounded-[22px] flex items-center justify-center z-10" style={{ filter: "drop-shadow(0px 0px 30px rgba(241, 92, 32, 0.15))" }}>
            <div className="w-[500px] h-[57px] bg-[#F2F2F2] border border-[#FFD4C3] rounded-[18px] flex items-center justify-between px-[6px]">
              <div className="flex items-center gap-[10px] md:gap-[15px] pl-[10px] md:pl-[15px] w-full">
                <FiSearch className="text-[#5A5A5B] text-[18px]" />
                <input 
                  type="text" 
                  placeholder="Enter your Website URL|" 
                  className="bg-transparent outline-none text-[#5C5C5C] text-[12px] font-semibold w-full placeholder:text-[#5C5C5C]" 
                />
              </div>
              <Link href="/contact-us">
                <button className="w-[100px] md:w-[114px] h-[37px] bg-[#F15C20] rounded-[12.7px] text-white text-[10px] font-bold flex items-center justify-center hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          
          {/* Features Below Input */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10 mt-6 text-[#5C5C5C] text-[13px] md:text-[15px] font-medium z-10 relative">
            <span className="flex items-center gap-1.5">
              🔍 Free audit in 24 hours
            </span>
            <span className="flex items-center gap-1.5">
              🚀 ASO + SEO under one roof
            </span>
            <span className="flex items-center gap-1.5">
              ⭐ Trusted by 100+ app founders
            </span>
          </div>
        </motion.div>
      </div>

      {/* Trusted Logos Footer */}
      <div className="w-full relative z-20  h-64 bg-gradient-to-t from-white to-transparent via-white   py-[30px]">
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
