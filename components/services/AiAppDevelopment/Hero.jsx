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
           Expert Generative AI{" "}
          <span className="text-[#F15C20] ">
            Development Services
          </span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">
The team of professional developers would help you unlock the potential of your business through our expert generative AI development services. We can guide you through the entire process and help you build whenever you’re ready. 

        </p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border-[#F15C20] border group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Talk to the Team
          </button>
          <button className="bg-[#F15C20] border-[#F15C20] border group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex justify-center h-[200px] md:h-[600px] items-center my-12 ">
        <Image
        
          src="/services/ai-dev/grad.webp"
          alt="AI development gradient background"
          width={1000}
          height={1000}
          priority
          className="absolute md:block hidden left-[54%] translate-x-[-50%]  -z-0 object-contain" />
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
           
            src="/services/ai-dev/mob.webp"
            alt="Mobile app development showcase Boston"
            width={1100}
            height={727}
            fetchPriority="high"
            priority
          
            className="object-cover mt-8"
            />
        </motion.div>
        <div className="relative md:hidden">
          <Image
           
            src="/services/ai-dev/mob.webp"
            alt="Mobile app development showcase Boston"
            width={321}
            height={927}
            fetchPriority="high"
            priority
className="scale-150 mt-4 -mb-8"
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
          <div className="absolute -bottom-10  left-0 w-full border-none h-20 lg:h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
