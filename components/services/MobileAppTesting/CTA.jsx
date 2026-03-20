"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%] lg:w-[80%] relative  text-white bg-[url('/services/mobile-testing/s-cta.webp')] bg-auto bg-center  transition-all ease-linear relative md:px-36 px-4 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex items-center">
        <motion.img
          src="/services/mobile-testing/mob1.webp"
          alt="cta-mobile"
          width={300}
          height={300}
          className="-bottom-[40%] lg:block hidden s -left-0 absolute"
          initial={{ y: 100, opacity: 0, rotate: -15 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src="/services/mobile-testing/mob2.webp"
          alt="cta-mobile"
                width={300}
          height={300}
          className="-bottom-[40%] lg:block hidden -right-14 absolute"
          initial={{ y: 100, opacity: 0, rotate: 15 }}
          whileInView={{ y: 0, opacity: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <div className="w-full lg:w-[60%] mx-auto justify-center lg:h-[350px] flex flex-col items-center text-center">
          <h2 className="text-5xl capitalize font-bold mb-4">
           Don’t Leave Your App’s Success to Chance 
          </h2>
          <p>
    Avoid costly mistakes and wasted resources. Connect with Dignite Studios for expert mobile app consulting and be a part of our success stories. 
          </p>
          <Link href="/contact-us" className="flex items-center group justify-start  pt-4">
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
           Book Your Strategy Call
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
