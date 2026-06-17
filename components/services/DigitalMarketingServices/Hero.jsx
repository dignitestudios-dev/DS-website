"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
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

    

      {/* Trusted Logos Footer */}
      <div className="w-full relative z-20  h-64 bg-gradient-to-t from-white to-transparent via-white   py-[30px]">
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
