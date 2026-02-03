"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="w-[80%] text-white bg-[url('/location/mobile-chicago/s-cta.png')] bg-cover bg-center hover:scale-105 transition-all ease-linear relative md:px-36 px-10 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex flex-row-reverse gap-20 items-center">
        <div className="w-[40%]">
          <motion.img
            src="/location/mobile-chicago/cta-m.png"
            alt="cta-mobile"
            className="-mb-48"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-[60%]">
          <h1 className="text-4xl capitalize font-bold mb-4">
            Got an app idea that needs expert execution?
          </h1>
          <p>
            Each case study started with an idea and a clear execution plan.
            Let’s explore yours and see how our team can bring it to life
            exactly as you envision it.
          </p>
          <div className="flex items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-orange-600 text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Discuss Your App Idea
            </button>
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-orange-600 text-white w-11 h-11 rounded-full
                         flex items-center justify-center transition-colors text-lg"
            >
              <MdArrowOutward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
