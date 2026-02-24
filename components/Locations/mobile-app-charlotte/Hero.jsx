"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[70%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] capitalize lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Trusted Mobile App Development Charlotte Building{" "}
          <span className="text-[#F15C20] "> High-Performing Apps</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Building a mobile app in Charlotte? Work with our dedicated team of
          app developers. Dignite Studios is offering expert mobile app
          development Charlotte that understands quality and market fit. We are
          a team of professional app developers who develop mobile apps for
          future growth.
        </p>

        <div className="flex items-center group justify-center ">
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Book Your Free Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="relative flex justify-center items-center my-12 ">
        <Image
          loader={customLoader}
          src="/location/mobile-charlotte/b-grad.png"
          alt=""
          fill
          priority
          className="absolute left-[50%] translate-x-[-50%] -bottom-24 -z-0 object-contain"
        />
        <motion.div
          className="relative -bottom-10"
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
            src="/location/mobile-charlotte/mob.png"
            alt="Mobile app development showcase Charlotte"
            width={400}
            height={400}
            priority
            className="object-cover"
          />
        </motion.div>
        <Image
          loader={customLoader}
          src="/location/mobile-charlotte/r.png"
          alt=""
          width={150}
          height={150}
          className="absolute top-[20%] lg:block hidden left-[0%] md:left-[77%] translate-x-[-50%]"
        />
        <Image
          loader={customLoader}
          src="/location/mobile-charlotte/l.png"
          alt=""
          width={150}
          height={150}
          className="absolute bottom-[20%] lg:block hidden left-[0%] md:left-[25%] translate-x-[-50%]"
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
