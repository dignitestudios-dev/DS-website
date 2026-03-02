"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = ({
  header = "If these apps started as ideas, so can yours.",
  para = "Every project started with a simple conversation, and all you need is just a conversation. We help you refine and turn your idea into a working product without confusion or overpromising.",
  btn = "Discuss Your App Idea",
}) => {
  return (
    <div className="w-[95%] h-[550px] lg:w-[80%] text-black md:bg-[url('/ecommerce/shopify-app/s-cta.png')] bg-contain bg-no-repeat bg-center transition-all ease-linear relative md:px-36 px-10  md:my-0 py-14 mx-auto overflow-hidden ">
      <div className="flex items-center  h-full justify-center">
        <div className="hidden lg:block absolute top-24 left-[55%] -translate-x-1/2 w-full">
          <motion.img
            src="/ecommerce/shopify-app/sides.png"
            alt="cta-mobile"
            className=" "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-full lg:w-[60%] relative z-30 text-center">
          <h2 className="text-4xl md:text-5xl capitalize font-bold mb-4">{header}</h2>
          <p>{para}</p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-center  pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
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
        </div>
      </div>
    </div>
  );
};

export default CTA;
