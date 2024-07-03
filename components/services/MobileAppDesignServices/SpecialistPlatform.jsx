"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiArrowUpRight } from "react-icons/fi";

const SpecialistPlatform = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <section
      id="SpecialistPlatform"
      className="w-full py-14  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48 flex flex-col items-center text-center gap-6"
      style={{ background: palette?.background }}
    >
      <div className="w-full flex flex-col items-center justify-start">
        <h1 className="uppercase text-xl font-bold text-[#F15C20]">
          hire on demand
        </h1>
        <Image
          loader={customLoader}
          width={141}
          height={8}
          src="/hire-on-demand.png"
          alt="hire-on-demand"
          title="hire-on-demand"
        />
      </div>
      <h2 className="font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold uppercase lg:leading-[77.45px]">
        Specialists for Platforms
      </h2>
      <p className="text-[15px] leading-[20.4px] lg:w-[705px]">
        Dignite Studios seizes a First-class team of designers and creates an
        engaging mechanism of operations and functions to accomplish the
        requirements of valuable clients. From modern UI design to sleek design
        our experts form a unique and intuitive spectrum to use further.  
      </p>

      <div className="w-full flex flex-col lg:flex-row justify-center items-start gap-6 mt-4">
        <div
          className={`w-full lg:w-[459px] ${
            theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
          } h-[517px] rounded-3xl px-6 pt-8 overflow-hidden group relative text-center flex flex-col items-center justify-start`}
        >
          <p className="text-2xl font-bold">
            <span className="text-[#F15C20]">Native</span> Mobile App Design
          </p>
          <p className="text-xs font-normal mt-4">
            Native apps are designed for specific mobile operating systems which
            cannot be used on any other platform. Like iOS and Android apps, the
            design can only be pre-owned by any one of them. So, our exceptional
            mobile application design services create an enticing UX design
            stage to attract consumers rapidly.
          </p>
          <Image
            loader={customLoader}
            width={249}
            height={453}
            src="/native-mobile-app-design-services.webp"
            alt="the mockup screen shows posts on the native mobile app design services"
            title="Native mobile app design services"
            className="mx-auto absolute -bottom-40 lg:-bottom-24 group-hover:-bottom-32 lg:group-hover:-bottom-16 transition-all duration-200"
          />
        </div>
        <div
          className={`w-full lg:w-[459px] ${
            theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#FAFAFA]"
          } h-[517px] rounded-3xl px-6 pt-8 overflow-hidden group relative text-center flex flex-col items-center justify-start`}
        >
          <p className="text-2xl font-bold">
            <span className="text-[#F15C20]">Cross-Platform</span> Mobile App
            Design
          </p>
          <p className="text-xs font-normal mt-4">
            Cross-platform apps are originated to function on multiple platforms
            like iOS or Android operating systems, they conduct a single code
            base for any process.  
          </p>
          <Image
            loader={customLoader}
            width={249}
            height={453}
            src="/cross-platform-mobile-app-design-services.webp"
            alt="mockup screen shows cross-platform mobile application design services"
            title="Cross-platform mobile app design services"
            className="mx-auto absolute -bottom-10 2xl:-bottom-11 group-hover:-bottom-2 transition-all duration-200"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-6">
        <Link
          href="/contact-us"
          className="py-3 px-5 text-base lg:py-7 lg:px-14 float-start bg-[#F15C20] top-rated-btn-shadow rounded-full text-[#ffff] lg:text-xl font-semibold flex items-center justify-center gap-3 hover:opacity-[.75] transition-all duration-300"
        >
          Get in Touch <FiArrowUpRight className="text-xl" />
        </Link>
      </div>
    </section>
  );
};

export default SpecialistPlatform;
// bg-[#1c1c1c]
