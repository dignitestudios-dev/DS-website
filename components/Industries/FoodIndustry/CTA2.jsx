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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
      <div className="w-[95%] h-[550px] lg:w-[80%] text-black md:text-white md:bg-[url('/industries/food-industry/s-cta.webp')] bg-contain bg-no-repeat bg-center transition-all ease-linear relative 2xl:px-40 md:px-28 px-10 md:my-0 md:py-14 mx-auto overflow-hidden flex justify-center items-center">
      {/* <img src={"/services/mobile-app/s-cta.webp"} alt="img" width={800} height={800} className="absolute top-0 scale-105 md:block hidden left-0 w-full h-full object-contain z-10" /> */}
      <motion.div 
        className="flex  gap-8 justify-start items-center relative z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
       
        <motion.div 
          className="w-full lg:w-[45%] "
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl capitalize font-bold mb-4"
            variants={itemVariants}
          >
            {header}
          </motion.h2>
          <motion.p
            variants={itemVariants}
          >
         {para}
          </motion.p>
          <motion.div
            variants={itemVariants}
          >
            <Link
              href="/contact-us"
              className="flex items-center group justify-start  pt-4"
            >
              <button
                type="submit"
                className="bg-[#F15C20] border border-[#F15C20]  group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
              >
              {btn}
              </button>
              <button
                type="submit"
                className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full
                           flex items-center justify-center transition-colors text-lg"
              >
                <MdArrowOutward />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CTA2;
