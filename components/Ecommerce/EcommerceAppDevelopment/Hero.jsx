"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";
import Link from "next/link";

const Hero = ({
  header = "Expert Ecommerce App Development Company ",
  header2 = "for Business Solutions",
  para = "We are a leading ecommerce app development Company that builds simple and scalable apps for growing businesses. Our team creates strong ecommerce apps. It also improves the store performance and user experience. We focus on the practical solutions which support the real business goals and the long term growth.",
  btn = "Get Free Ecommerce App Consultation",
}) => {
  return (
    <div className="w-full grid grid-cols-1  justify-start items-start ">
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
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            {btn}
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
      <div className="relative flex  justify-center items-center my-12 ">
        <img
          src="/ecommerce/ecommerce-app/grad.png"
          alt="grad"
          width={500}
          height={500}
          className="absolute left-1/2 translate-x-[-50%]"
        />
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
          <img
            src="/ecommerce/ecommerce-app/mob.png"
            alt="ecommerce mobile"
            width={250}
            height={250}
            priority
            className="object-cover relative z-30 mt-16 "
          />
        </motion.div>
        <motion.img
          src="/ecommerce/ecommerce-app/r1.png"
          alt=""
          width={150}
          height={150}
          className="absolute top-[10%] w-24 md:w-32  left-[75%] md:left-[55%] translate-x-[-50%]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.8,
            ease: "backOut",
          }}
        />
        <motion.img
          src="/ecommerce/ecommerce-app/r2.png"
          alt=""
          width={150}
          height={150}
          className="absolute top-[80%] w-24 md:w-32  left-[75%] md:left-[60%] translate-x-[-50%]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: "backOut",
          }}
        />
        <motion.img
          src="/ecommerce/ecommerce-app/l1.png"
          alt=""
          width={150}
          height={150}
          className="absolute top-[30%] w-24 md:w-32 left-[2%] md:left-[32%] translate-x-[-50%]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 1.2,
            ease: "backOut",
          }}
        />
        <motion.img
          src="/ecommerce/ecommerce-app/l2.png"
          alt=""
          width={250}
          height={250}
          className="absolute top-[60%] w-36 md:w-48 left-[2%] md:left-[32%] translate-x-[-50%]"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 1.4,
            ease: "backOut",
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
