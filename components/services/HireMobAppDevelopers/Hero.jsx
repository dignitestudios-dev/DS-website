"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  bg-none lg:bg-[url('/services/hybrid-app/grad.webp')] bg-contain bg-no-repeat bg-center justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Expert Hybrid Mobile App Development Services for{" "}
          <span className="text-[#F15C20] ">
            Businesses 
          </span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
       Providing hybrid mobile app development services that create scalable applications with your ideas. apps that work smoothly on both iOS and Android. We focus on creating experiences that simplify your audience’s journey and make your business stand out in the digital world. 
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Let’s Talk Now
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center h-[200px] md:h-[500px] items-center my-12 ">
        <motion.div
          className="relative hidden md:block"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Image
           
            src="/services/hybrid-app/mob.webp"
            alt="Mobile app development showcase Boston"
            width={821}
            height={827}
            fetchPriority="high"
            priority
            quality={100}
            />
        </motion.div>
        <div className="relative md:hidden">
          <Image
           
            src="/services/hybrid-app/mob.webp"
            alt="Mobile app development showcase Boston"
            width={1021}
            height={827}
            fetchPriority="high"
            priority
            quality={80}
            className="px-4"
            />
        </div>
        {/* <Imagesrc="/location/mobile-boston/r.webp"
          alt=""
          width={150}
          height={150}
          className="absolute top-[10%] lg:block hidden left-[0%] md:left-[70%] translate-x-[-50%]"
         />
        <Imagesrc="/location/mobile-boston/l.webp"
          alt=""
          width={150}
          height={150}
          className="absolute top-[30%] lg:block hidden left-[0%] md:left-[32%] translate-x-[-50%]"
         /> */}
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
