"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[70%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] capitalize lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Expert App Development Company Washington DC Building{" "}
          <span className="text-[#F15C20] text-nowrap">
            Scalable Apps{" "}
          </span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Building a mobile app in Washington? You need a dedicated team of app
          developers like ours. Dignite Studios is one of the trusted mobile app
          development companies in Washington dc that understands quality and
          market fit. We have a team of professional app developers who develop
          mobile apps for the future.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Share Your Idea With Us!
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center items-center my-12 ">
        <Image
          src="/location/mobile-washington/b-grad.webp"
          className="absolute left-[50%] translate-x-[-50%] -bottom-24 -z-0"
         width={1200} height={1200} priority alt="Building a mobile app in Washington? You need a de - B Grad"/>
        <motion.img
          src="/location/mobile-washington/mob.webp"
          alt="bg"
          width={400}
          height={400}
          className="object-cover relative -bottom-10"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
        <Image
          src="/location/mobile-washington/r.webp"
          alt="r"
          className="absolute bottom-[20%] lg:block hidden left-[0%] md:left-[67%] translate-x-[-50%]"
         width={200} height={200} priority/>
        <Image
          src="/location/mobile-washington/l.webp"
          alt="l"
          className="absolute top-[30%] lg:block hidden left-[0%] md:left-[30%] translate-x-[-50%]"
         width={200} height={200} priority/>
        <div className="absolute -bottom-24 left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
