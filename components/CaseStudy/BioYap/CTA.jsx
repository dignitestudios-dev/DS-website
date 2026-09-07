"use client";
import { m as motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <div className="-mt-12 lg:-mt-28 -mb-8 lg:-mb-16 dark:bg-transparent -mb-4 bg-[#E6FFBC73] relative overflow-hidden">
           <img
        src="/bioyap/hero.webp"
        alt="hero"
        className="absolute -top-24 w-screen  z-10"
      />
      <div className="max-w-screen-2xl w-[90%] md:w-[80%] pt-16 md:pb-0 pb-16 mx-auto flex justify-between">
        <div className="flex flex-col gap-4 items-start relative z-50 justify-center w-full  md:w-[60%]">
          <h2 className="text-2xl md:text-4xl">
           Ready to build your <span className="font-bold">mobile app</span> with <br /> <span className="font-bold">a community</span> focused experience? 
          </h2>
          <p className="text-sm md:text-base leading-relaxed">
            Let our team give you a clean smooth market ready product according
            to your idea. 
          </p>
          <Link href={"/contact-us"} className="px-8 py-3 text-sm rounded-full border transition ease-linear hover:bg-black hover:text-white border-black">
            Reach out today
          </Link>
        </div>

        <div className="md:block hidden">
          <motion.img
            src="/bioyap/cta.webp"
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
