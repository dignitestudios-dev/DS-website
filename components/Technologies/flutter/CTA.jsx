"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="w-[95%]  lg:w-[80%] 2xl:w-[65%] h-[500px] text-white lg:bg-transparent bg-black lg:bg-[url('/technologies/flutter/s-cta.png')] bg-contain bg-no-repeat flex items-center justify-center bg-center  transition-all ease-linear relative md:px-14 px-10 my-24 md:my-0 py-14 mx-auto rounded-[43px] overflow-hidden ">
      <div className="flex flex-row-reverse gap-20 items-center">
        <div className="hidden lg:block lg:w-[40%]">
          <motion.img
            src="/technologies/flutter/cta-m.png"
            alt="cta-mobile"
            className=" absolute right-16 bottom-24 object-contain w-[500px] pointer-events-none"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
        <div className="w-full lg:w-[50%]">
          <h2 className="text-4xl capitalize font-bold mb-4">
            Ready to Build a High Performance Flutter App for Your Business
          </h2>
          <p>
            Partner with the Flutter app development team which builds fast,
            scalable and user friendly apps. Let’s explore your idea, business
            goals and the right technical approach together.
          </p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-start  pt-4"
          >
            <button
              type="submit"
              className="bg-[#36A0B9] group-hover:bg-white group-hover:text-[#36A0B9] text-black text-sm px-7 py-3 rounded-full transition-colors"
            >
              Talk to Flutter Expert
            </button>
            <button
              type="submit"
              className="bg-[#36A0B9] group-hover:bg-white group-hover:text-[#36A0B9] text-black w-11 h-11 rounded-full
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
