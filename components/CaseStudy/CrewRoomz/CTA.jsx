"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const CTA = () => {
  return (
    <div className="bg-gradient-to-b dark:from-[#22232400] dark:to:[#86C4F0] from-[#86C4F0] md:pb-0 pb-8 pt-8 to-[#F1F8FD] relative overflow-hidden">
      <div className="max-w-screen-2xl w-[75%]   mx-auto flex justify-between">

        <div className="md:block hidden">
          <motion.img
            src="/crew/cta.png"
            alt="cta"
            className=""
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
        <div className="flex flex-col md:w-[60%] gap-4 items-start text-start relative z-50 justify-center  ">
          <h1 className="text-3xl md:text-6xl  font-semibold capitalize">
          Thinking of creating a travel app? 
          </h1>
          <p className=" text-lg md:text-xl">
            We’ve got you covered. Let’s bring your idea to life with a user-friendly, community-centered platform. We’ll handle the design and development so your digital product works seamlessly from day one.
          </p>
          <Link href={"/contact-us"} className="px-8 py-5 flex gap-2 items-center text-base rounded-full border transition-all ease-linear hover:bg-black hover:text-white capitalize border-black">
            Talk to our experts
           <FaArrowRightLong />

          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
