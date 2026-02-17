"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[80%] text-white bg-[url('/location/mobile-miami/s-cta.png')] bg-cover bg-center hover:scale-105 transition-all ease-linear relative md:px-14 px-10 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden border border-[#DDDDDD]">
      <div className="flex flex-row-reverse gap-20 items-center">
        <div className="lg:block hidden w-[40%]">
          <motion.img
            src="/location/mobile-miami/cta-m.png"
            alt="cta-mobile"
            className="-mb-28 ml-32"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="lg:w-[60%] w-full">
          <h1 className="text-5xl capitalize font-bold mb-4">
            Build Your Mobile App with the Confidence
          </h1>
          <p>
            Dignite Studios helps the businesses plan the budgets and understand
            mobile app costs through the clear strategy and expert mobile app
            development Miami guidance
          </p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-start  pt-4"
          >
            <button
              type="submit"
              className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              Start Your App Journey Today
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
