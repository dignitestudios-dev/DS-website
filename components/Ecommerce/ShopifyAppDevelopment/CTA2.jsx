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
   
      <div className="w-[95%]  md:h-[550px] lg:w-[80%] text-white bg-black md:bg-transparent md:bg-[url('/ecommerce/shopify-app/s-cta2.png')] md:bg-contain md:bg-no-repeat md:bg-center transition-all ease-linear rounded-2xl md:rounded-none relative px-6 md:px-36 py-20 md:py-14 mx-auto overflow-hidden">
        <div className="flex items-start h-full justify-center">
          <div className="hidden lg:block z-0 absolute -bottom-[35%] left-[65%] 2xl:left-[70%] -translate-x-1/2 w-full">
            <motion.img
              src="/ecommerce/shopify-app/mobiles.png"
              alt="cta-mobile"
              className=""
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="w-full lg:w-[80%] relative z-20 text-center">
            <h2 className="text-3xl md:text-5xl capitalize font-bold mb-4">{header}</h2>
            <p className="font-extralight text-sm md:text-base">{para}</p>
            <Link
              href="/contact-us"
              className="hidden md:flex items-center group justify-center pt-4"
            >
              <button
                type="submit"
                className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
              >
                {btn}
              </button>
              <button
                type="submit"
                className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg"
              >
                <MdArrowOutward />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center -mt-16 md:-mt-24 relative z-30">
        <Link
          href="/contact-us"
          className="flex items-center group justify-center"
        >
          <button
            type="submit"
            className="bg-[#F15C20] group-hover:bg-white group-hover:border-[#F15C20] group-hover:border-4 md:group-hover:border-8 group-hover:text-[#F15C20] text-white rounded-full border-4 md:border-8 border-white p-4 md:p-5 text-xs md:text-[15px] font-bold pt-12 md:pt-16 flex-col gap-2 flex items-center justify-center transition-colors h-40 w-40 md:h-52 md:w-52"
          >
            {btn}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <IoIosArrowRoundDown className="text-3xl md:text-4xl" />
            </motion.div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CTA2;
