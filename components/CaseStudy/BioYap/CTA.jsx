"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="dark:bg-transparent -mb-4 bg-[#E6FFBC73] relative overflow-hidden">
           <img
        src="/bioyap/hero.png"
        alt="hero"
        className="absolute -top-24 w-screen  z-10"
      />
      <div className="max-w-screen-2xl w-[90%] md:w-[80%] pt-16 md:pb-0 pb-16 mx-auto flex justify-between">
        <div className="flex flex-col gap-4 items-start relative z-50 justify-center w-full  md:w-[60%]">
          <h1 className="text-2xl md:text-4xl capitalize">
           Ready to build your <span className="font-bold">mobile app</span> with <br /> <span className="font-bold">a community</span> focused experience? 
          </h1>
          <p className=" text-lg md:text-2xl">
            Let our team give you a clean smooth market ready product according
            to your idea. 
          </p>
          <Link href={"/contact-us"} className="px-8 py-3 text-sm rounded-full border transition-all ease-linear hover:bg-black hover:text-white capitalize border-black">
            Reach out today
          </Link>
        </div>

        <div className="md:block hidden">
          <motion.img
            src="/bioyap/cta.png"
            alt="cta"
            className="w-[80%]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
