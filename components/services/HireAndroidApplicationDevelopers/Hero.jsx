"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full grid grid-cols-1  bg-none  bg-contain bg-no-repeat bg-center justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          Hire Android{" "}
          <br />
          <span className="text-[#F15C20] ">Developers</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Hire Android developers from Dignite Studios to build fast and
          scalable apps. Our team works on native and cross platform solutions.
          Developers join projects quickly and deliver high quality apps that
          support business growth.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Get Free Consultation
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
          <div className="relative flex justify-center h-[350px] md:h-[550px] items-center my-12 ">
              <Image
                src={"/services/ios-hire/grad.webp"}
                className="absolute lg:block hidden top-1/2 left-[55%] -translate-x-[50%] -translate-y-[50%]"
                alt="Hire Android developers from Dignite Studios to bu - Grad"
                width={1000}
                height={1000}
              />
              <Image
                src={"/services/ios-hire/sofa.webp"}
                className="absolute top-[90%] lg:block hidden left-1/2 z-30 -translate-x-[50%] -translate-y-[50%]"
                alt="Hire Android developers from Dignite Studios to bu - Sofa"
                width={400}
                height={400}
              />
              <Image
                src={"/services/ios-hire/sofa.webp"}
                className="absolute top-[90%] lg:hidden block left-1/2 z-30 -translate-x-[50%] -translate-y-[50%]"
                alt="Hire Android developers from Dignite Studios to bu - Sofa"
                width={300}
                height={300}
              />
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
                  src="/services/and-hire/mob.webp"
                  alt="Mobile app development showcase Boston"
                  width={300}
                  height={300}
                  fetchPriority="high"
                  priority
                  className=""
                  quality={100}
                />
              </motion.div>
              <div className="relative md:hidden">
                <Image
                  src="/services/and-hire/mob.webp"
                  alt="Mobile app development showcase Boston"
                  width={250}
                  height={250}
                  fetchPriority="high"
                  priority
                  quality={80}
                  className="px-4"
                />
              </div>
              {/* <Imagesrc="/location/mobile-boston/r.webp"
                alt="Hero R"
                width={150}
                height={150}
                className="absolute top-[10%] lg:block hidden left-[0%] md:left-[70%] translate-x-[-50%]"
               />
              <Imagesrc="/location/mobile-boston/l.webp"
                alt="Hero L"
                width={150}
                height={150}
                className="absolute top-[30%] lg:block hidden left-[0%] md:left-[32%] translate-x-[-50%]"
                /> */}
                        <div className="absolute z-30 -bottom-32 left-0 w-full border-none h-[130px] bg-gradient-to-t from-white to-transparent via-white" />
                </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
