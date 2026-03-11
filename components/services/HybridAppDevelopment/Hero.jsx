"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <main className="w-full relative lg:h-screen 2xl:h-auto">
      <div className="w-full global-padding-horizontal relative flex flex-col lg:flex-row gap-x-6 gap-y-16 pt-16">
        <div className="w-full text-start relative md:pb-20 pt-2 md:pt-10 flex flex-col items-start">
          <h1 className="text-4xl lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-start lg:leading-[71.93px] 2xl:leading-[99px] z-10">
            Expert Hybrid Mobile App{" "}
            <span className="text-[#F15C20]">
              Development Services
            </span>{" "}
            for Businesses
          </h1>
          <p
            className={`text-base font-medium mt-6 z-10 ${
              theme === "light" && "text-[#5c5c5c]"
            }`}
          >
            Providing hybrid mobile app development services that create scalable applications with your ideas. apps that work smoothly on both iOS and Android. We focus on creating experiences that simplify your audience's journey and make your business stand out in the digital world.
          </p>

          <Link
            href="/contact-us"
            className="flex items-center group justify-center mt-10 z-10"
          >
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full font-normal transition-colors">
              Let's Talk Now
            </button>
            <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
              <MdArrowOutward />
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-[90%] md:pb-20 sm:pb-20 relative hybrid-app-development-services-curve flex items-baseline ">
          <div className="w-[320px] h-[300px] mx-auto md:w-[499.69px] md:h-[475.53px] relative flex items-center gap-5">
            <motion.div 
              className="left-side-img hidden md:block"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
            >
              <Image
                src="/hybrid-app-development-services1.webp"
                className="bounce-img-1-hero"
                width={200}
                height={200}
                alt="the image shows two mock screens of the application"
                priority
              />
            </motion.div>
            <div className="left-side-img md:hidden">
              <Image
                src="/hybrid-app-development-services1.webp"
                className="bounce-img-1-hero"
                width={200}
                height={200}
                alt="the image shows two mock screens of the application"
                priority
              />
            </div>
            <motion.div 
              className="right-side-img hidden md:block"
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2
              }}
            >
              <Image
                src="/hybrid-app-development-services2.webp"
                className="bounce-img-2-hero"
                width={200}
                height={200}
                alt="the image shows two mock screens of the application"
                priority
              />
            </motion.div>
            <div className="right-side-img md:hidden">
              <Image
                src="/hybrid-app-development-services2.webp"
                className="bounce-img-2-hero"
                width={200}
                height={200}
                alt="the image shows two mock screens of the application"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;