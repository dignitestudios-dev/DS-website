"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = ({
  header = "Custom Mobile Application Development Boston ",
  header2 = "Companies Rely On",
  para = "We don’t just claim to be the best mobile app development company in Boston, we prove it through our services. Our team specializes in mobile application development that brands choose for reliable, custom-built apps. We combine modern frameworks to create mobile solutions that work smoothly. So, your business grows in a competitive digital landscape.",
  btn = "Discuss Your App Idea",
}) => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          {header}
          <span className="text-[#F15C20] text-nowrap">{header2}</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">{para}</p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            {btn}
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center items-center my-12 ">
        <Image
          loader={customLoader}
          src="/ecommerce/shopify-app/grad.webp"
          alt=""
          fill
          priority
          className="absolute left-[50%] translate-x-[-50%] -top-24 -z-0 object-contain"
        />
        <motion.div
          className="relative"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Image
            loader={customLoader}
            src="/location/mobile-boston/mob.png"
            alt="Mobile app development showcase Boston"
            width={300}
            height={300}
            priority
            className="object-cover"
          />
        </motion.div>
        <Image
          loader={customLoader}
          src="/location/mobile-boston/r.png"
          alt=""
          width={150}
          height={150}
          className="absolute top-[10%] lg:block hidden left-[0%] md:left-[70%] translate-x-[-50%]"
        />
        <Image
          loader={customLoader}
          src="/location/mobile-boston/l.png"
          alt=""
          width={150}
          height={150}
          className="absolute top-[30%] lg:block hidden left-[0%] md:left-[32%] translate-x-[-50%]"
        />
        <div className="absolute -bottom-24 left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
