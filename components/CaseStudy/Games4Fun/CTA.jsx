"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CTA = () => {
  return (
    <div className="bg-[#60035D] z-50 rounded-3xl md:pb-0 pb-8 pt-8 to-[#F1F8FD] relative overflow-hidden">
      <img src="/gamesfun/c-bg.png" alt="cta-bg" className="absolute top-0 " />
      <div className="max-w-screen-2xl w-[85%]   mx-auto flex justify-between">

        <div className="md:block hidden">
          <motion.img
            src="/gamesfun/cta.png"
            alt="cta"
            className=" relative z-50"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="flex flex-col md:w-[60%] text-white gap-4 items-start text-start relative z-50 justify-center  ">
          <h1 className="text-3xl md:text-5xl  font-semibold capitalize">
         Looking to build an AI Powered Platform
          </h1>
          <p className=" text-lg md:text-xl">
            Let’s shape your next digital product through expert Web Application Development Services. 
          </p>
          <button className="px-8 py-5 flex gap-2 items-center text-base rounded-full border transition-all ease-linear hover:bg-black hover:text-white capitalize border-white">
           Contact us today to get started
           <FaArrowRightLong />

          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
