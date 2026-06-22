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
            {/* <div className="absolute hidden lg:block inset-0 top-0 w-full h-[1050px] z-0 mt-10">
                <Image src="/services/app-marketing-services/hero-desk.png" alt="Cloud Background" fill priority className="object-cover object-top" />
            </div> */}


            <div className="flex relative z-20 w-[90%] md:w-[80%] lg:w-[850px] flex-col text-center mx-auto items-center mt-12 mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-[40px] md:text-5xl lg:text-[68px] leading-[1.05] tracking-tight font-bold text-[#0C0C0C] capitalize"
                >
                    SEO <span className="text-[#F15C20]">Services</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[16px] md:text-[18px] leading-[161%] my-8 text-[#5C5C5C] w-full"
                >
                    Increase search visibility, attract qualified traffic, and generate more leads with SEO strategies designed for Google Search, AI Overviews, and the future of search.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <Link
                        href="/contact-us"
                        className="flex relative z-10 items-center group justify-center "
                    >
                        <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
                            Get a Free SEO Consultation
                        </button>
                        <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
                            <MdArrowOutward />
                        </button>
                    </Link>
                </motion.div>
            </div>

            <div className="relative flex justify-center w-full px-4 md:px-0 lg:-mt-60 md:-mt-40 sm:-mt-0 z-10">
                <motion.div
                    className="relative"
                    initial={{ y: 80, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                >
                    {/* Mobile Image */}
                    <Image
                        src="/services/seo-services/hero_mob.webp"
                        alt="SEO Services Showcase"
                        width={768}
                        height={800}
                        priority
                        className="block md:hidden w-full h-auto object-cover"
                    />

                    {/* Desktop Image */}
                    <Image
                        src="/services/seo-services/hero-desk.webp"
                        alt="SEO Services Showcase"
                        width={1440}
                        height={425}
                        priority
                        className="hidden md:block w-full h-auto object-cover"
                    />
                </motion.div>
            </div>
            {/* Trusted Logos Footer */}
            <div className="w-full relative z-20 lg:-mt-52 md:-mt-52  h-64 bg-gradient-to-t from-white to-transparent via-white  ">
                <Platforms />
            </div>
        </div>
    );
};

export default Hero;
