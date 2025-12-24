"use client";
import { motion } from "framer-motion";
import React from "react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-b  dark:from-transparent dark:to-transparent from-[#CEA3D8] to-[#F1F8FD] relative overflow-hidden">
      
           <img
        src="/home-hero/cta-shad.png"
        alt="hero"
        className="absolute bottom-14 w-screen dark:bg-transparent bg-gradient-to-t dark:from-[#CEA3D8] from-[#ebeaf7] via-[#ebeaf7] to-transparent z-10"
      />
      <div className="max-w-screen-2xl w-[80%]  pt-16 md:pb-0 pb-16 mx-auto flex justify-between">
        <div className="flex flex-col gap-4 md:pb-28 pb-0  items-start relative z-50 justify-center w-full  md:w-[50%]">
          <h1 className="text-2xl font-bold md:text-4xl capitalize">
           Planning to launch a <span className="dark:text-white text-[#64486D]">digital marketplace </span> or  <span className="dark:text-white text-[#64486D]">service platform?</span>
          </h1>
          <p className=" text-lg">
             Our team builds scalable and user focused mobile app development services that help your product grow.
          </p>
          <button className="px-8 py-5  flex items-center gap-3 rounded-full border transition-all ease-linear text-white capitalize bg-gradient-to-r from-[#C28BD3] to-[#64486D]">
            Let us build it with you 
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.700195 4.4543C0.313596 4.4543 0.000195358 4.7677 0.000195324 5.1543C0.000195291 5.5409 0.313596 5.8543 0.700195 5.8543L0.700195 5.1543L0.700195 4.4543ZM17.1952 5.64927C17.4685 5.37591 17.4685 4.93269 17.1952 4.65932L12.7404 0.20455C12.467 -0.0688166 12.0238 -0.0688166 11.7504 0.20455C11.4771 0.477918 11.4771 0.921133 11.7504 1.1945L15.7102 5.1543L11.7504 9.1141C11.4771 9.38746 11.4771 9.83068 11.7504 10.104C12.0238 10.3774 12.467 10.3774 12.7404 10.104L17.1952 5.64927ZM0.700195 5.1543L0.700195 5.8543L16.7002 5.8543L16.7002 5.1543L16.7002 4.4543L0.700195 4.4543L0.700195 5.1543Z" fill="white"/>
</svg>

          </button>
        </div>

        <div className="md:block hidden">
          <motion.img
          src="/home-hero/cta.png"
            alt="cta"
            className=""
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
