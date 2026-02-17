"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%]  lg:w-[80%] h-[500px] text-white bg-[url('/location/mobile-washington/s-cta.png')] bg-cover flex items-center justify-center bg-center hover:scale-105 transition-all ease-linear relative md:px-14 px-10 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex flex-row-reverse gap-20 items-center">
        <div className="hidden lg:block lg:w-[40%]">
          <motion.img
            src="/location/mobile-washington/cta-m.png"
            alt="cta-mobile"
            className=" absolute right-0 -bottom-20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <h1 className="text-5xl capitalize font-bold mb-4">
            Your Project Could Be Our Next Success Story!
          </h1>
          <p>
           Every successful app starts with the right collaboration. Discuss your vision and challenges with us and build something as amazing as you envisioned. 
          </p>
          <Link href="/contact-us" className="flex items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Start Your App Journey Now!
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
