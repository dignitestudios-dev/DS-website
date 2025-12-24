"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CTA = () => {
  return (
    <div className="bg-gradient-to-b dark:from-[#222222] dark:to-[#86C4F0] from-[#86C4F0] py-32 to-[#F1F8FD] relative overflow-hidden">
      <div className="max-w-screen-2xl w-[90%] md:w-[50%]  mx-auto flex justify-between">
        <div className="flex flex-col gap-4 items-center text-center relative z-50 justify-center w-full ">
          <h1 className="text-2xl md:text-6xl  font-semibold capitalize">
           Have a similar vision of building an app? 
          </h1>
          <p className=" text-lg md:text-xl">
            Discuss your idea with our team of experts and we will help you turn founder ideas into intuitive, secure, and scalable digital products.
          </p>
          <Link href={"/contact-us"} className="px-8 py-5 flex gap-2 items-center text-base rounded-full border transition-all ease-linear hover:bg-black hover:text-white capitalize border-black">
            Reach out today
          <FaArrowRightLong />

          </Link>
        </div>

        <div className="md:block hidden">
          <motion.img
            src="/wing/cta.png"
            alt="cta"
            className=" absolute bottom-0 right-0"
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
