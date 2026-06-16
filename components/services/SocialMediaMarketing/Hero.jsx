"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import Platforms from "../ui/Platforms";

const Hero = () => {
  return (
    <div className=" w-full flex flex-col items-center">
    
      {/* Cloud Background */}
      <div className="absolute hidden lg:block inset-0 top-0 w-full h-[1050px] z-0">
        <Image src="/services/web-design/cloud.webp" alt="Cloud Background" fill priority className="object-cover object-top" />
      </div>


      <div className="flex relative z-20 w-[90%] md:w-[80%] lg:w-[850px] flex-col text-center mx-auto items-center mt-12 mb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight font-bold text-[#0C0C0C] capitalize"
        >
          Social Media <span className="text-[#F15C20]">Marketing</span> Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[16px] md:text-[18px] leading-[161%] my-8 text-[#5C5C5C] w-full"
        >
          Placeholder description for social media marketing hero section. Connect with your audience and grow your brand.
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
              Get a Free Consultation
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </motion.div>
      </div>

      <div className="relative flex justify-center w-full px-4 md:px-0 mt-8  z-20">
        <motion.div
          className="relative w-full max-w-[1200px]"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          {/* Note: User said "same hero just image changed", add your social media hero image below */}
          <Image
            src="/services/social-media/hero-mockup.webp"
            alt="Social Media Marketing Showcase"
            width={1200}
            height={654}
            priority
            className="w-full h-auto object-cover"
          />
        </motion.div>

      </div>

      {/* Trusted Logos Footer */}
      <div className="w-full relative z-20 -mt-52 mb-40 h-64 bg-gradient-to-t from-white to-transparent via-white   py-[30px]">
        <Platforms />
      </div>
    </div>
  );
};

export default Hero;
