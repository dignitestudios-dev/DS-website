"use client";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const CTA = ({
  header = "Ready to Take Your Entertainment App Idea Forward?",
  para = "Our team helps you plan and build your app step by step. As an Entertainment app development company, we create apps which match your audience and content needs. We prioritise user experience and performance to support the expansion of your app. ",
  btn = "Schedule up a Free Consultation ",
}) => {


  return (
    <div className="w-[95%] h-[550px] lg:w-[80%] text-black md:text-white md:bg-[url('/industries/ent-app/s-cta.webp')] bg-contain bg-no-repeat bg-center transition-all ease-linear relative md:px-36 px-10 md:my-0 md:py-14 mx-auto overflow-hidden">
      <div className="flex items-center h-full gap-12 justify-between">
        <div className="w-full lg:w-[55%] flex flex-col items-start relative z-30 text-start">
          <h2 className="text-4xl  capitalize font-bold mb-4">
            {header}
          </h2>
          <p>{para}</p>
          <Link
            href="/contact-us"
            className="flex items-center group justify-center pt-4"
          >
            <button
              type="submit"
              className="bg-[#F8585A] border border-[#F8585A] group-hover:bg-white group-hover:border group-hover:border-[#F8585A] group-hover:text-[#F8585A] text-white text-sm px-7 py-3 rounded-full transition-colors"
            >
              {btn}
            </button>
            <button
              type="submit"
              className="bg-[#F8585A] border-[#F8585A] group-hover:bg-white group-hover:border group-hover:border-[#F8585A] group-hover:text-[#F8585A] text-white w-11 h-11 rounded-full
                         flex items-center justify-center transition-colors text-lg"
            >
              <MdArrowOutward />
            </button>
          </Link>
        </div>
        {/* <Image className="md:block hidden"  src={"/industries/real-state/cta-mob.webp"} width={400} height={400} alt="CTA Image" /> */}
      </div>
    </div>
  );
};

export default CTA;
