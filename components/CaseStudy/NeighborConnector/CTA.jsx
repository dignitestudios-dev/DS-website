"use client";
import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";
import { m as motion } from "framer-motion";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="-mt-12  -mb-8 lg:-mb-16 w-full relative  mb-20 h-screen bg-[#FAFAFA] flex flex-col items-center o p-2 ">

      {/* Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-[url('/neighbor/cta-bg.webp')] bg-no-repeat  max-w-[1200px] min-h-[450px] rounded-[65px] flex flex-col lg:flex-row items-center justify-between p-8 md:p-[60px] lg:pl-[84px] lg:pr-[50px] lg:py-[60px] mx-4"
        style={{
          // Dark green gradient with image overlay
          background: "linear-gradient(0deg, rgba(39, 75, 1, 0.95), rgba(39, 75, 1, 0.95)), url('/neighbor/cta-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        {/* Left Content */}
        <div className="relative z-10 flex flex-col items-start gap-[30px] w-full max-w-[591px]">

          <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-[120%] tracking-tight">
          Ready to Build the Next Community Platform?
          </h2>

          <p className="text-white text-[16px] md:text-[18px] font-normal leading-[130%]">
            Whether you are building a community network, social platform or neighborhood safety application, our team can help you to create a secure, scalable and feature rich solution which brings the people together.
          </p>

          {/* CTA Button */}
          <Link href="/contact-us">
            <button className="flex flex-row items-center  justify-center gap-[10px] px-8 py-4 bg-white rounded-full hover:bg-white/90 transition-colors mt-4 shadow-md">
              <span className="text-[#274B01] text-[15px] font-semibold leading-[22px]">
                Let's Build Your Platform
              </span>
              <HiOutlineArrowRight className="text-[#274B01] w-4 h-4" />
            </button>
          </Link>

        </div>

        {/* Right Image (Phone Mockup) */}
        <div className="relative md:flex hidden z-20 w-full  lg:w-[500px]  justify-center lg:justify-end mt-12 lg:mt-0 mb-20 lg:absolute lg:right-[-40px] lg:top-[-120px] lg:bottom-[-80px]">
          <img
            src="/neighbor/cta.webp"
            alt="Neighbor Connector Mobile App"
            className="w-[350px] lg:w-[450px] h-auto object-contain"
          />
        </div>

      </motion.div>
    </section>
  );
};

export default CTA;
