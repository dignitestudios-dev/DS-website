"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";

const img = [
  "/home-hero/marq/1.webp",
  "/home-hero/marq/2.webp",
  "/home-hero/marq/3.webp",
  "/home-hero/marq/4.webp",
  "/home-hero/marq/5.webp",
  "/home-hero/marq/6.webp",
  "/home-hero/marq/7.webp",
  "/home-hero/marq/8.webp",
  "/home-hero/marq/9.webp",
  "/home-hero/marq/10.webp",
];

const Hero = () => {
  return (
    <div
      className="w-full relative z-10 -mt-40 -mb-40 max-w-screen-2xl mx-auto flex flex-col h-auto md:max-h-[170vh] pt-44 pb-[50%] md:pb-[40vh] gap-4 justify-start items-center overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      {/* ── Gradient glow layers ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
      >
        {/* Main wide sweep */}
        <div
          style={{
            position: "absolute",
            width: "174%",
            height: "58%",
            left: "-11%",
            bottom: "-10%",
            background:
              "linear-gradient(50.68deg, #0D0300 25.2%, #E5320F 60.78%, #E97318 72.44%)",
            filter: "blur(212px)",
            borderRadius: "50%",
            transform: "rotate(-3deg)",
          }}
        />
        {/* Deep red arc */}
        <div
          style={{
            position: "absolute",
            width: "120%",
            height: "45%",
            left: "-10%",
            bottom: "-8%",
            background:
              "radial-gradient(ellipse 80% 60% at 55% 85%, #C82D0B 0%, #831F00 40%, #340C00 70%, transparent 100%)",
            filter: "blur(80px)",
            opacity: 0.85,
          }}
        />
        {/* Bright orange hot spot */}
        <div
          style={{
            position: "absolute",
            width: "55%",
            height: "35%",
            right: "5%",
            bottom: "18%",
            background:
              "radial-gradient(ellipse 70% 70% at 60% 80%, #EA9924 0%, #E97318 25%, #E5320F 55%, transparent 90%)",
            filter: "blur(90px)",
            opacity: 0.7,
          }}
        />
        {/* Dark crimson left anchor */}
        <div
          style={{
            position: "absolute",
            width: "40%",
            height: "50%",
            left: "-5%",
            bottom: 0,
            background:
              "radial-gradient(ellipse 80% 80% at 20% 90%, #541400 0%, #340C00 50%, transparent 100%)",
            filter: "blur(60px)",
            opacity: 0.9,
          }}
        />
        {/* Top vignette — keeps ceiling black */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, #0A0A0A 0%, rgba(10,10,10,0.7) 30%, transparent 60%)",
          }}
        />
        {/* Side vignettes */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,10,10,0.6) 0%, transparent 25%, transparent 75%, rgba(10,10,10,0.4) 100%)",
          }}
        />
      </div>

      {/* ── Existing content below (unchanged) ── */}
      <Image
        src="/home-hero/l1.webp"
        alt="3D icon representing custom mobile app development services"
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
          src="/home-hero/l2.webp"
          alt="3D technology icon for startup application development"
          width={300}
          height={300}
          priority
        />
      </motion.div>
      <Image
        src="/home-hero/r1.webp"
        alt="Laptop mockup showcasing expert startup app development project"
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
          src="/home-hero/r2.webp"
          alt="Tablet mockup showing professional mobile app development interface"
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
          We are a{" "}
          <Link href="/" className="text-[#F15C20]">
            startup app development company
          </Link>{" "}
          that helps startups create scalable apps that attract users and
          generate measurable revenue.
        </p>
        <div className="flex items-center group justify-start pt-4">
          <Link
            href="/contact-us"
            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white text-sm px-7 py-3 rounded-full transition-colors"
          >
            Let's Discuss Your Idea
          </Link>
          <Link
            href="/contact-us"
            className="bg-[#F15C20] group-hover:bg-white group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg"
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