"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { m as motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="-mt-12 lg:-mt-28 -mb-8 lg:-mb-16 w-[95%] lg:w-[80%] text-white bg-[url('/location/mobile-texas/s-cta.webp')] bg-cover bg-center hover:scale-105 transition ease-linear relative md:px-14 px-10 my-10 md:my-0 py-10 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex justify-center gap-20 items-center">
     
        <div className="w-full lg:w-[60%] text-center flex justify-center flex-col items-center mx-auto">
          <h2 className="text-5xl capitalize font-bold mb-4">
            What’s Stopping Your Project From Becoming Our Next Success Story?
          </h2>
          <p>
           A successful app starts with the right team and the right questions. Share your challenges with us and build something as amazing as you envisioned.  
          </p>
          <Link href="/contact-us" className="flex w-fit items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
          Share Your Idea Today!
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
