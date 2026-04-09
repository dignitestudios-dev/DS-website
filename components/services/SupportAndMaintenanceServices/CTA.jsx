"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] lg:w-[80%] relative  text-white bg-[url('/services/mobile-cons/s-cta.webp')] bg-auto bg-center  transition-all ease-linear relative md:px-28 px-4 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex justify-start w-full items-center">
   
        <motion.img
          src="/services/mobile-cons/mob1.webp"
          alt="cta-mobile"
                width={800}
          height={800}
          className="-bottom-[30%] lg:block hidden -right-44 absolute"
          initial={{ y: 100, opacity: 0, rotate: 15 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div className="w-full lg:w-[50%] justify-center lg:h-[350px] flex flex-col items-start text-start">
          <h2 className="text-5xl capitalize font-bold mb-4">
           Maximize Your App’s Performance Today
          </h2>
          <p>
          Your app is only as good as the experience it delivers. Dignite Studios monitors performance and implements timely updates. It continuously optimizes your app for the best user experience. 
          </p>
          <Link href="/contact-us" className="flex items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
          Contact us now
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
