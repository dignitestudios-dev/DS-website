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
         Leading Native App{" "}
          <span className="text-[#F15C20]">Development Company</span>
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
          Finding the best native app development company can be really time-consuming, but it doesn’t have to be. We provide different services in the category of native app development with commitment. We are a team of dedicated native developers who understand quality and the market. If you plan to develop apps made for the future, Dignite Studios is the right choice.  
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border-[#F15C20]  group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Talk to the Team
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white border-[#F15C20] border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
         <div className="w-[80%] h-[550px] lg:h-screen mx-auto z-10 flex justify-center mt-20 md:mt-32 relative">
              <Image src="/services/native-app/bg-grad.webp"
                alt=""
                width={1100}
                height={1100}
                priority
                className="object-contain absolute lg:block hidden top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%] "
               />
              <motion.div
                className="relative z-30"
                initial={{ y: 80, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <div className="w-[900px] mx-auto">
                <Image src="/services/native-app/mob.webp"
                  alt="Mobile app development showcase California"
                  width={800}
                  height={800}
                  priority
                  className="object-center w-full mb-12"
                 />
                 </div>
              </motion.div>
              <Image src={"/services/native-app/l.webp"} width={300} height={300}  className="absolute lg:block hidden top-[65%] left-[2%] translate-x-[-50%] translate-y-[-50%] z-20" />
              <Image src={"/services/native-app/r.webp"} width={300} height={300} className="absolute lg:block hidden top-[20%] -right-[22%] translate-x-[-50%] translate-y-[-50%] z-10" />
            </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
