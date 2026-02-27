"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[75%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] capitalize lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Flexible Mobile App Development Specialists with Cross Platform{" "}
          <span className="text-[#F15C20] ">App Development Services</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Dignite Studios delivers high performance cross platform app
          development services which help businesses launch faster, scale
          smarter and engage users across devices through secure, reliable and
          goal focused mobile solutions.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Get the Free Platform App Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20]  text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative w-full h-[250px] lg:h-[550px]  my-10 flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full flex justify-center z-20">
          <motion.img
            src="/technologies/cross/mob.png"
            width={500}
            height={500}
            className="object-contain w-[250px] lg:w-[500px]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="absolute top-0 left-0 w-full pt-10  h-[500px] hidden lg:flex justify-center z-10">
          <img
            src={"/technologies/cross/grad.png"}
            alt="gradient"
            width={1200}
            height={1200}
          />
        </div>

        <div className="absolute -bottom-32 left-0 w-full border-none h-52 bg-gradient-to-t z-30 from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
