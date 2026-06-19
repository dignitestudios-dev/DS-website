"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";


const Hero = () => {
  return (
    <div className=" w-full relative flex flex-col items-center">




      <div className="flex relative z-20 w-[90%] md:w-[80%] lg:w-[850px] flex-col text-center mx-auto items-center mt-12 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight font-bold text-[#0C0C0C] capitalize"
        >
          Paid Advertising <span className="text-[#F15C20]">Services</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[16px] md:text-[18px] leading-[161%] my-8 text-[#5C5C5C] w-full"
        >
          Are you ready to turn clicks into clients with measurable results? With the help of our customized ad campaigns, you can reach out to your potential customers. The experts would get maximum returns on your ad spends through targeting. Let’s talk about increasing your website traffic, generating leads, and boosting sales with Paid Advertising Strategy services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact-us"
            className="flex items-center group justify-center "
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="relative flex justify-center w-full -mt-40">
        <motion.div
          className=""
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Image
            src="/services/ads/bg.webp"
            alt="Paid Advertising Showcase"
            width={1210}
            height={900}
            priority
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>

      {/* Trusted Logos Footer */}
      <div className="w-full relative z-20 -mt-32 pt-32  h-64 bg-gradient-to-t from-white to-transparent via-white   py-[30px]">
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
