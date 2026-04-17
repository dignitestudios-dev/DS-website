"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Flexible Web Application{" "}
          <span className="text-[#F15C20]">Development Services</span> for
          Startups
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Looking for web application development services you can trust? We’ve
          got you. We build digital solutions, not just web apps. Apps that
          deliver the outcomes you need by providing different services in the
          category of web application development.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Discuss Your Idea
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center h-[200px] md:h-[600px] items-center my-12 ">
        <div className="absolute  left-[50%] translate-x-[-50%]  lg:block hidden  -z-0 w-full h-full">
          <Image
            src="/services/web-app/grad.webp"
            alt="Looking for web application development services y - Grad"
            fill
            priority
            className=""/>
        </div>
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
            src="/services/web-app/laptop.webp"
            alt="web app development showcase dev"
            width={800}
            height={800}
            priority
            className="object-cover "/>
        </motion.div>
        {/* <Image src="/location/mobile-boston/r.webp"
          alt="Hero R"
          width={150}
          height={150}
          className="absolute top-[10%] lg:block hidden left-[0%] md:left-[70%] translate-x-[-50%]"
         />
        <Image src="/location/mobile-boston/l.webp"
          alt="Hero L"
          width={150}
          height={150}
          className="absolute top-[30%] lg:block hidden left-[0%] md:left-[32%] translate-x-[-50%]"
         /> */}
        <div className="absolute lg:block hidden -bottom-24 left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
