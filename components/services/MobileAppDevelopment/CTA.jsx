"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] h-[550px] lg:w-[80%] text-white md:bg-[url('/services/mobile-app/s-cta.png')] bg-contain bg-no-repeat bg-center transition-all ease-linear relative 2xl:px-40 md:px-28 px-10 md:my-0 md:py-14 mx-auto overflow-hidden flex justify-center items-center">
      {/* <img src={"/services/mobile-app/s-cta.png"} alt="img" width={800} height={800} className="absolute top-0 scale-105 md:block hidden left-0 w-full h-full object-contain z-10" /> */}
      <div className="flex flex-row-reverse items-center relative z-20">
        <div className="hidden lg:block lg:w-[40%] ">
          <motion.img
            src="/services/mobile-app/cta-m.png"
            alt="cta-mobile"
            className="-mb-20 2xl:-mb-16"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-full lg:w-[60%] ">
          <h2 className="text-4xl capitalize font-bold mb-4">
            If these apps started as ideas, so can yours.
          </h2>
          <p>
            Every project started with a simple conversation, and all you need
            is just a conversation. We help you refine and turn your idea into a
            working product without confusion or overpromising.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-start  pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] border border-[#F15C20]  group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
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
