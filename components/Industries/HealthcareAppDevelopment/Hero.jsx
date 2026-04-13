"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = ({
  header = "Your Trusted Healthcare App",
  header2 = "Development Company",
  para = "Finding a professional healthcare app development company? We’re the most perfect choice. Dignite Studios provides different services in the category of healthcare app development with commitment. We are a team of dedicated app developers in the health industry. ",
  btn = "Book your consultation",
}) => {
  return (
    <div className="w-full grid grid-cols-1 bg-[url('/ecommerce/shopify-app/grad.webp')] bg-cover bg-center bg-no-repeat  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          {header}{" "}
          <span className="text-[#F15C20] text-nowrap">{header2}</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">{para}</p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            {btn}
          </button>
          <button className="bg-[#F15C20] border-[#F15C20] group-hover:bg-white border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex  justify-center items-center my-12 mt-20 ">
         <div className="relative flex items-center justify-center md:w-[600px] md:h-[600px] w-[250px] h-[250px] mx-auto">

          <Image
            src="/industries/healthcare/ring.webp"
            layout="fill"
            objectFit="contain"
          />
          {/* <Image
            src="/industries/real-state/house.webp"
            layout="fill"
            objectFit="contain"
            className="absolute lg:mt-52 mt-32 lg:-bottom-10 z-30 m-auto"
            alt="House"
          /> */}
      

  

      
    </div>
   <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="absolute  -translate-x-1/2"
    >
  
      <Image src={"/industries/healthcare/mob.webp"} className="hidden lg:block" alt="Mobile" width={300} height={300} />
      <Image src={"/industries/healthcare/mob.webp"} className="lg:hidden block" alt="Mobile" width={150} height={150} />
    </motion.div>
        <Image src={"/industries/healthcare/cc.webp"} width={800} height={800} className="lg:block hidden absolute ml-12 left-1/2 translate-x-[-50%]" />
        {/* <div className="absolute -bottom-32  left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" /> */}
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
