"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] lg:w-[80%] text-white bg-[url('/location/mobile-boston/s-cta.png')] bg-cover bg-center hover:scale-105 transition-all ease-linear relative md:px-36 px-10 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex items-center">
        <div className="hidden lg:block lg:w-[40%]">
          <motion.img
            src="/location/mobile-boston/cta-m.png"
            alt="cta-mobile"
            className="-mb-20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-full lg:w-[60%]">
          <h2 className="text-5xl capitalize font-bold mb-4">
           If these apps started as ideas, so can yours.
          </h2>
          <p>
           Every project started with a simple conversation, and all you need is just a conversation. We help you refine and turn your idea into a working product without confusion or overpromising.
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
