"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] lg:w-[80%] text-white bg-[url('/location/mobile-charlotte/s-cta.png')] bg-cover bg-center hover:scale-105 transition-all ease-linear relative md:px-14 px-10 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex  gap-20 items-center">
        <div className="hidden lg:block lg:w-[40%] mx-auto">
          <motion.img
            src="/location/mobile-charlotte/cta-m.png"
            alt="cta-mobile"
            className="-mb-28 ml-24"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-full lg:w-[50%] pr-10">
          <h1 className="text-5xl capitalize font-bold mb-4">
            Be Our Next Success Story!
          </h1>
          <p>
           Every successful app starts with the right team and right collaboration. Share your vision and challenges with us and build something as amazing as you envisioned. 
          </p>
          <Link href="/contact-us" className="flex items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Begin Your Journey Now!
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
