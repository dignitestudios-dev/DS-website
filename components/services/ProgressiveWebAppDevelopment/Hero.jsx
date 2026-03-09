"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1 -mb-20 lg:mb-0 justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Build Expert Apps with Our{" "}
          <span className="text-[#F15C20] ">PWA Development Services</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Finding the right PWA development services you can rely on? We’re here
          for you. Progressive Web Apps combine the best of web and mobile, that
          can offer offline access and performance without the need for
          downloads.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Let's Talk in Details
          </button>
          <button className="bg-[#F15C20] border group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center h-[100px] md:h-[450px] items-center my-12 mt-28 ">
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
            src="/services/pwa-app/laptop.png"
            alt="Mobile app development showcase Boston"
            width={1000}
            height={1000}
            priority
            className="object-cover lg:mr-40"
            loader={customLoader} />
        </motion.div>
        <Image
          src="/services/pwa-app/r.png"
          alt=""
          width={200}
          height={200}
          className="absolute top-[0%] lg:block hidden left-[0%] md:left-[80%] translate-x-[-50%]"
         priority  loader={customLoader} />
        <Image
          src="/services/pwa-app/r1.png"
          alt=""
          width={200}
          height={200}
          className="absolute top-[-20%] lg:block hidden left-[0%] md:left-[80%] translate-x-[-50%]"
         priority  loader={customLoader} />
        <Image
  
            src="/services/pwa-app/l.png"
          alt=""
          width={200}
          height={200}
          className="absolute top-[25%] lg:block hidden left-[0%] md:left-[25%] translate-x-[-50%]"
         priority  loader={customLoader} />
        <div className="absolute -bottom-24 left-0 w-full border-none h-20 lg:h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
