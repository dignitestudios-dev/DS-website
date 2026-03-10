"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = ({
  header = "Your Partner in Expert Shopify Store Development ",
  header2 = "Services",
  para = "We deliver the reliable shopify store development services designed for the growing businesses. Our apps improve the performance, scalability and customer experience quite efficiently.",
  btn = "Get Free Shopify App Consultation",
}) => {
  return (
    <div className="w-full grid grid-cols-1 bg-[url('/ecommerce/shopify-app/grad.webp')] bg-cover bg-center bg-no-repeat  justify-start items-start ">
      <div className="flex relative z-20  w-[90%] md:w-[65%] flex-col text-center mx-auto items-center">
        <h1 className="text-4xl leading-[42px] lg:leading-[1.1] tracking-tighter md:text-7xl font-bold ">
          {header}
          <span className="text-[#F15C20] text-nowrap">{header2}</span>{" "}
        </h1>
        <p className="text-lg my-6 dark:text-white text-[#5C5C5C]">{para}</p>

        <Link
          href="/contact-us"
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            {btn}
          </button>
          <button className="bg-[#F15C20] border border-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex  justify-center items-center my-12 ">
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
            src="/ecommerce/shopify-store/laptop.webp"
            alt="Shpify laptop"
            width={900}
            height={900}
            priority
            className="object-cover md:block hidden"/>
          <Image
            src="/ecommerce/shopify-store/mob.webp"
            alt="Shpify laptop"
            width={250}
            height={250}
            priority
            className="object-cover md:hidden block"/>
        </motion.div>
        <motion.img
          src="/ecommerce/shopify-app/sh-icon.webp"
          alt=""
          width={150}
          height={150}
          className="absolute top-[10%] w-24 md:w-32  left-[75%] md:left-[75%] translate-x-[-50%]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.img
          src="/ecommerce/shopify-app/sh2.webp"
          alt=""
          width={150}
          height={150}
          className="absolute top-[60%] w-24 md:w-32 left-[2%] md:left-[16%] translate-x-[-50%]"
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="absolute -bottom-32  left-0 w-full border-none h-52 bg-gradient-to-t from-white to-transparent via-white" />
      </div>
      <div>
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
