"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] h-[450px] lg:h-[550px] lg:w-[80%] rounded-2xl lg:rounded-none bg-black lg:bg-transparent text-white md:bg-[url('/services/ios-app/s-cta.webp')] bg-contain bg-no-repeat bg-center transition-all ease-linear relative 2xl:px-40 md:px-28 px-10 md:my-0 md:py-14 mx-auto overflow-hidden flex justify-center items-center">
      {/* <img src={"/services/mobile-app/s-cta.webp"} alt="img" width={800} height={800} className="absolute top-0 scale-105 md:block hidden left-0 w-full h-full object-contain z-10" /> */}
      <div className="flex flex-row-reverse justify-center items-center relative z-20">
    
        <div className="w-full lg:w-[45%] text-center ">
          <h2 className="text-4xl capitalize font-bold mb-4">
            Start Your Own iOS Success Story
          </h2>
          <p>
           Inspired by our case studies? Let Dignite Studios help you build a highly functional iOS application that engages users and delivers measurable results.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-center  pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] border border-[#F15C20]  group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Work With Our iOS Experts
            </button>
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full
                         flex items-center justify-center transition-colors text-lg"
            >
              <MdArrowOutward />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
