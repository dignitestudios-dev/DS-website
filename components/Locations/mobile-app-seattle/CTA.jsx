"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] lg:w-[80%] relative  text-white bg-[url('/location/mobile-seattle/s-cta.png')] bg-cover bg-center hover:scale-105 transition-all ease-linear relative md:px-36 px-4 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex items-center">
        <motion.img
          src="/location/mobile-seattle/cta-m1.png"
          alt="cta-mobile"
          className="-bottom-[80%] lg:block hidden -left-36 absolute"
          initial={{ y: 100, opacity: 0, rotate: -15 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="/location/mobile-seattle/cta-m2.png"
          alt="cta-mobile"
          className="-bottom-[75%] lg:block hidden -right-28 absolute"
          initial={{ y: 100, opacity: 0, rotate: 15 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div className="w-full lg:w-[60%] mx-auto justify-center lg:h-[350px] flex flex-col items-center text-center">
          <h2 className="text-5xl capitalize font-bold mb-4">
            Got an app idea that needs expert execution?
          </h2>
          <p>
            Each case study started with an idea and a clear execution plan.
            Let’s explore yours and see how our team can bring it to life
            exactly as you envision it.
          </p>
          <Link href="/contact-us" className="flex items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Discuss Your App Idea
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
