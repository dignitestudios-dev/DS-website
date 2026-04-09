"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] h-[550px] lg:w-[80%] text-black md:text-white md:bg-[url('/services/ios-hire/s-cta.webp')] bg-contain bg-no-repeat bg-center transition-all ease-linear relative 2xl:px-40 md:px-28 px-10 md:my-0 md:py-14 mx-auto overflow-hidden flex justify-center items-center">
      {/* <img src={"/services/hybrid-app/s-cta.webp"} alt="img" width={800} height={800} className="absolute top-0 scale-105 md:block hidden left-0 w-full h-full object-contain z-10" /> */}
      <div className="flex  justify-between items-center relative z-20">
   
        <div className="w-full lg:w-[50%] flex flex-col items-start text-left ">
          <h2 className="text-4xl capitalize font-bold mb-4">
            Hire Mobile App Developers Today
          </h2>
          <p>
            Grow your business with expert iOS developers from Dignite Studios.
            We offer fast onboarding, flexible hiring and reliable iOS services
            to help you scale your team easily. Start your project today and
            build high quality applications with confidence and long term
            support.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-start  pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] border border-[#F15C20]  group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Hire Mobile App Developers
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
