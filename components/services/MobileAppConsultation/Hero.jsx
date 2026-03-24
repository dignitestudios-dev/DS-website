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
        Expert Mobile App {" "}
          <span className="text-[#F15C20]">Consulting Services</span>
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
           With our professional mobile app consulting services, your business can unlock the full potential of your mobile app. To help you build your initial concepts and strategy, we offer a consultation that you might have been looking for.
        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
           Talk to the Team
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center h-[300px] md:h-[700px] items-center my-12 ">
        <div className="absolute  left-[50%] top-[60%] translate-y-[-50%]  translate-x-[-50%]    -z-0 w-full h-full">
          <Image
            src="/services/mobile-cons/grad.webp"
            alt=""
            width={500}
            height={500}
            priority
            className="w-[50%] lg:w-[30%] mx-auto "/>
        </div>
        <Image src="/services/mobile-cons/r1.png" alt="" width={350} height={350} priority className=" absolute lg:block hidden top-20 right-[20%]  mx-auto "/>
        <Image src="/services/mobile-cons/r2.png" alt="" width={350} height={350} priority className=" absolute lg:block hidden top-32 right-[20%]  mx-auto "/>
        <Image src="/services/mobile-cons/l.png" alt="" width={350} height={350} priority className=" absolute lg:block hidden top-[30%] left-[15%]  mx-auto "/>
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
            src="/services/mobile-cons/mob.webp"
            alt="web app development showcase dev"
            width={450}
            height={450}
            priority
            className="object-cover lg:block hidden  mx-auto relative z-20 "/>
          <Image
            src="/services/mobile-cons/mob.webp"
            alt="web app development showcase dev"
            width={200}
            height={200}
            priority
            className="object-cover block lg:hidden  mx-auto relative z-20 "/>
        </motion.div>
        {/* <Image src="/location/mobile-boston/r.webp"
          alt=""
          width={150}
          height={150}
          className="absolute top-[10%] lg:block hidden left-[0%] md:left-[70%] translate-x-[-50%]"
         />
        <Image src="/location/mobile-boston/l.webp"
          alt=""
          width={150}
          height={150}
          className="absolute top-[30%] lg:block hidden left-[0%] md:left-[32%] translate-x-[-50%]"
         /> */}
             <div className="absolute z-30 -bottom-10 left-0 w-full border-none h-20 lg:h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
