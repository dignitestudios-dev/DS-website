"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoIosArrowRoundDown } from "react-icons/io";

const CTA2 = ({
  header = "If these apps started as ideas, so can yours.",
  para = "Every project started with a simple conversation, and all you need is just a conversation. We help you refine and turn your idea into a working product without confusion or overpromising.",
  btn = "Discuss Your App Idea",
}) => {
  return (
    <div>
      {" "}
      <div className="w-[95%]  md:h-[550px] lg:w-[80%] text-white bg-black md:bg-transparent md:bg-[url('/industries/food-industry/s-cta2.webp')] md:bg-contain md:bg-no-repeat md:bg-center transition-all ease-linear rounded-2xl md:rounded-none relative px-6 md:pl-24 md:pr-20 py-20 md:py-12 mx-auto overflow-hidden">
        <div className="flex items-start gap-20 overflow-hidden flex-row-reverse h-full justify-center">
          <div className="hidden lg:block  w-[79%] -mt-16 overflow-hidden">
            <motion.img
              src="/industries/food-industry/mobiles.webp"
              alt="cta-mobile"
              className=""
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="w-full lg:w-[60%] flex flex-col items-start h-full justify-center relative z-20 text-start">
            <h2 className="text-3xl md:text-4xl capitalize font-bold mb-4">
              {header}
            </h2>
            <p className="font-extralight text-sm md:text-base">{para}</p>
             <Link
            href="/contact-us"
            className="flex items-center group justify-center pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              {btn}
            </button>
            <button
              type="submit"
              className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full
                         flex items-center justify-center transition-colors text-lg"
            >
              <MdArrowOutward />
            </button>
          </Link>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default CTA2;
