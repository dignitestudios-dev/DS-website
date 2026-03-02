"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
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
    <div className="w-full relative z-10 bg-[url('/home-hero/grad.webp')] -mt-40 bg-cover -mb-40 bg-center bg-no-repeat  max-w-screen-2xl mx-auto flex flex-col  h-auto md:max-h-[170vh]  pt-44 pb-[50%] md:pb-[40vh]  gap-4 justify-start items-center ">
      {/* <Image
        loader={customLoader}
        src="/home-hero/grad.webp"
        alt=""
        fill
        priority
        className="absolute z-10 left-0 top-0 overflow-hidden bg-repeat-none bg-cover w-full h-screen md:max-h-[170vh] object-cover"
      /> */}
      <Image
        loader={customLoader}
        src="/home-hero/l1.webp "
        alt="3d icons"
        width={300}
        height={300}
        priority
        className="absolute lg:block hidden z-20 -left-16 top-28"
      />
      <motion.div
        className="absolute lg:block hidden z-20 -left-20 top-28"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          loader={customLoader}
          src="/home-hero/l2.webp "
          alt="3d icons"
          width={300}
          height={300}
          priority
        />
      </motion.div>
      <Image
        loader={customLoader}
        src="/home-hero/r1.webp "
        alt="laptop"
        width={420}
        height={420}
        priority
        className="absolute lg:block hidden z-20 -right-[10%] top-40"
      />
      <motion.div
        className="absolute lg:block hidden z-20 -right-5 top-64"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          loader={customLoader}
          src="/home-hero/r2.webp "
          alt="tablet"
          width={350}
          height={350}
          priority
        />
      </motion.div>
      <div className="relative overflow-hidden z-40 text-white gap-5 flex flex-col items-center justify-center h-full lg:w-[50%] w-[80%] text-center mx-auto">
        <h1 className="text-[40px] leading-[40px] md:text-[60px] md:leading-[60px] capitalize font-semibold tracking-tighter">
          Your Technical Co-Pilot: Expert Startup App Development Company
        </h1>
        <p className="text-[16px] md:text-[20px]">
          We are a startup app development company that helps startups create
          scalable apps that attract users and generate measurable revenue.
        </p>
        <div className="flex items-center group justify-start  pt-4">
          <Link
            href="/contact-us"
            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
          >
            Let’s Discuss Your Idea
          </Link>
          <Link
            href="/contact-us"
            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full
                 flex items-center justify-center transition-colors text-lg"
          >
            <MdArrowOutward />
          </Link>
        </div>
      </div>
      <div className="w-full lg:w-[70%] overflow-hidden mx-auto relative lg:top-10 z-50">
        <Marquee loop={0} className="py-8 overflow-hidden">
          {img.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center mx-6 h-16"
            >
              <Image
                loader={customLoader}
                src={item}
                alt="Client Partner Logo"
                width={100}
                height={64}
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
