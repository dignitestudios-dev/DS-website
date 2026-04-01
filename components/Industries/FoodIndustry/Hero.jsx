"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = ({
  header = "Your Trusted Food Delivery App ",
  header2 = "Development Company",
  para = " Finding the professional food delivery app development company? We’re the perfect choice. Dignite Studios provides different services in the category of food delivery app development with commitment. We are a team of dedicated app developers in the food industry. ",
  btn = "Book a consultation",
}) => {
  const [mobileAnimationComplete, setMobileAnimationComplete] = useState(false);

  return (
    <div className="w-full grid grid-cols-1 bg-[url('/ecommerce/shopify-app/grad.webp')] bg-cover bg-center bg-no-repeat justify-start items-start ">
      <div className="flex relative z-20 w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          {header}
          <span className="text-[#F15C20] text-nowrap">{header2}</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">{para}</p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
            {btn}
          </button>
          <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>

      <div className="relative flex justify-center items-center my-12 mt-20 h-[600px]">
        {/* Ring Image - Placed behind the mobile */}
        <div className="absolute z-0 w-[600px] h-[600px]">
          <Image
            src="/industries/food-industry/ring.webp"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* L1 Animation */}
        {mobileAnimationComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute z-10 lg:block hidden left-[22%] top-20 xl:left-[25%] 2xl:left-[29%]"
          >
            <Image
              src="/industries/food-industry/l1.webp"
              width={200}
              height={200}
            />
          </motion.div>
        )}

        {/* R1 Animation */}
        {mobileAnimationComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute z-10 top-10 xl:right-[23%] 2xl:right-[29%] lg:block hidden right-[21%]"
          >
            <Image
              src="/industries/food-industry/r1.webp"
              width={200}
              height={200}
            />
          </motion.div>
        )}

        {/* R2 Animation */}
        {mobileAnimationComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute z-10 top-[60%] xl:right-[27%] 2xl:right-[32%] lg:block hidden right-[24%]"
          >
            <Image
              src="/industries/food-industry/r2.webp"
              width={200}
              height={200}
            />
          </motion.div>
        )}

        {/* Mobile Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
          onAnimationComplete={() => setMobileAnimationComplete(true)}
          className="absolute z-10"
        >
          <Image
            src="/industries/food-industry/mob.webp"
            alt="Mobile"
            width={450}
            height={450}
          />
        </motion.div>
      </div>

      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;