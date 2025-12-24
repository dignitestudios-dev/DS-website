"use client";
import { motion } from "framer-motion";
import React from "react";

const CTA = () => {
  return (
    <div className="bg-gradient-to-b dark:from-[#222222] dark:to-[#86C4F0] from-[#86C4F0] py-32 to-[#F1F8FD] relative overflow-hidden">
      <div className="max-w-screen-2xl w-[90%] md:w-[50%]  mx-auto flex justify-between">
        <div className="flex flex-col gap-4 items-center text-center relative z-50 justify-center w-full ">
          <h1 className="text-2xl md:text-6xl  font-semibold capitalize">
           Have a similar vision of building an app?nce? 
          </h1>
          <p className=" text-lg md:text-xl">
            Discuss your idea with our team of experts and we will help you turn founder ideas into intuitive, secure, and scalable digital products.
          </p>
          <button className="px-8 py-5 flex gap-2 items-center text-base rounded-full border transition-all ease-linear hover:bg-black hover:text-white capitalize border-black">
            Reach out today
            <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.700195 4.45479C0.313596 4.45479 0.000195358 4.76819 0.000195324 5.15479C0.000195291 5.54138 0.313596 5.85479 0.700195 5.85479L0.700195 5.15479L0.700195 4.45479ZM17.1952 5.64976C17.4685 5.37639 17.4685 4.93318 17.1952 4.65981L12.7404 0.205039C12.467 -0.0683283 12.0238 -0.0683283 11.7504 0.205039C11.4771 0.478406 11.4771 0.921621 11.7504 1.19499L15.7102 5.15479L11.7504 9.11458C11.4771 9.38795 11.4771 9.83117 11.7504 10.1045C12.0238 10.3779 12.467 10.3779 12.7404 10.1045L17.1952 5.64976ZM0.700195 5.15479L0.700195 5.85479L16.7002 5.85479L16.7002 5.15479L16.7002 4.45479L0.700195 4.45479L0.700195 5.15479Z" fill="#1F222E"/>
</svg>

          </button>
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
