"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] lg:w-[80%] text-white bg-[url('/location/mobile-texas/s-cta.png')] bg-cover bg-center hover:scale-105 transition-all ease-linear relative md:px-14 px-10 my-24 md:my-0 py-24 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex justify-center gap-20 items-center">
     
        <div className="w-full lg:w-[50%] text-center flex justify-center flex-col items-center mx-auto">
          <h1 className="text-5xl capitalize font-bold mb-4">
            Be a Part of Our Successful Projects
          </h1>
          <p>
            Have a discussion with our experts and find out more about our custom app development services in Tampa. We would love to create apps for you. 
          </p>
          <Link href="/contact-us" className="flex w-fit items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
               Discuss Your Idea With Us
            </button>
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-orange-600 text-white w-11 h-11 rounded-full
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
