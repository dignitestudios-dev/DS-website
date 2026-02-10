"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
const img = [
  "/home-hero/marq/1.png",
  "/home-hero/marq/2.png",
  "/home-hero/marq/3.png",
  "/home-hero/marq/4.png",
  "/home-hero/marq/5.png",
  "/home-hero/marq/6.png",
  "/home-hero/marq/7.png",
  "/home-hero/marq/8.png",
  "/home-hero/marq/9.png",
];
const Hero = () => {
  return (
    <div className="w-full overflow-hidden  flex flex-col pt-12 md:pt-24 gap-4 justify-start items-center">
      <img
        src="/home-hero/grad.png"
        alt="grad"
        className="absolute  z-10 left-0 top-0 overflow-hidden bg-repeat-none bg-cover lg:h-auto h-full w-full"
      />
      <img
        src="/home-hero/l1.png "
        alt="l1"
        className="absolute lg:block hidden z-20 -left-16 top-[25%]"
      />
      <motion.img
        src="/home-hero/l2.png "
        alt="l1"
        className="absolute lg:block hidden z-20 -left-20 top-[23%]"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <img
        src="/home-hero/r1.png "
        alt="l1"
        className="absolute lg:block hidden z-20 -right-[10%] top-[25%]"
      />
      <motion.img
        src="/home-hero/r2.png "
        alt="l1"
        className="absolute lg:block hidden z-20 -right-5 top-[45%]"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative overflow-hidden z-50 text-white gap-5 flex flex-col items-center justify-center h-full lg:w-[50%] w-[80%] text-center mx-auto">
        <h1 className="text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] capitalize font-semibold tracking-tighter">
          Your Technical Co-Pilot: Expert Startup App Development Company
        </h1>
        <p className="text-[16px] md:text-[20px]">
          We are a startup app development company that helps startups create scalable apps that attract users and generate measurable revenue.
        </p>
        <div className="flex items-center group justify-start  pt-4">
          <button
            type="submit"
            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
          >
             Let’s Discuss Your Idea
          </button>
          <button
            type="submit"
            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full
                 flex items-center justify-center transition-colors text-lg"
          >
            <MdArrowOutward />
          </button>
        </div>
      </div>
      <div className="w-full lg:w-[70%] overflow-hidden mx-auto relative lg:top-10 z-50">
        <Marquee loop={0} className="py-8 overflow-hidden">
          {img.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 h-16"
            >
              <img
                src={item}
                alt="marq"
                width={100}
                className="object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
