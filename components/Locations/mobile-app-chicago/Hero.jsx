"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
      <div className="flex relative z-20  w-[95%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] md:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Mobile App Development Company Chicago for Scalable{" "}
          <span className="text-[#F15C20] text-nowrap">
            Digital Products
          </span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Dignite Studios is a trusted mobile app development company Chicago,
          delivering secure and scalable digital products for startups and
          enterprises. With deep market understanding and proven technical
          expertise, the Chicago based team builds the high performance mobile
          applications which are designed for the growth, usability and long
          term success.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Book a Free Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center items-center my-12 ">
        <img
          src="/location/grad.webp"
          className="absolute md:block hidden left-[50%] translate-x-[-50%] -top-[50%] -z-0"
        />
        <motion.img
          src="/location/mobile-chicago/mob.png"
          alt="bg"
          width={400}
          height={400}
          className="object-cover relative md:w-fit w-[65%]"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        />
        <img
          src="/location/mobile-chicago/r.png"
          alt="r"
          className="absolute top-[20%] left-[0%] md:left-[75%] translate-x-[-50%] md:block hidden"
        />
        <img
          src="/location/mobile-chicago/l.png"
          alt="l"
          className="absolute top-[30%] left-[0%] md:left-[32%] translate-x-[-50%] md:block hidden"
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
