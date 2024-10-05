"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import SeoNavbar from "./SeoNavbar";
import Link from "next/link";
import Navbar from "@/components/global/Navbar";
import ContactButton from "@/components/global/ContactButton";

const MobileAppDevSeoHero = () => {
  const { palette, setIsSidebarOpen, theme } = useContext(GlobalContext);

  return (
    <main className="top-rated-bg bg-black w-full h-[90vh] md:h-[80vh] lg:h-screen flex flex-col justify-start items-start z-0 relative">
      {theme === "light" ? (
        <div className="revolutionary-hero-overlay-light" />
      ) : (
        <div className="revolutionary-hero-overlay-dark" />
      )}
      <Navbar setIsOpen={setIsSidebarOpen} />
      <div className="w-full flex lg:h-[calc(100%-5rem)] h-full px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 z-10 relative">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-12">
          <div className="w-full h-full flex flex-col justify-center text-center items-center gap-2 ">
            <h1
              style={{
                color: "#fff",
              }}
              className={`block text-3xl md:text-4xl font-extrabold lg:text-[60px] xl:text-[70px] md:leading-[70px] xl:leading-[72.8px] lg:font-bold xl:font-semibold lg:tracking-[-2.8px] z-10 `}
            >
              <span
                className={`${theme === "light" ? "text-black" : "text-white"}`}
              >
                Mobile App <br />
                Development Services
              </span>
            </h1>

            <span
              className={`lg:w-[80%] my-2 lg:my-6 text-sm lg:text-base font-medium uppercase tracking-[3.68px] ${
                theme === "dark" && "text-[#ECECEC]"
              }`}
            >
              Let’s delve into innovative ideas to strengthen <br /> first-class
              mobile solutions
            </span>
            <div className="flex items-center justify-center gap-3">
              {/* <Link
                href="/contact-us"
                id=""
                className="px-6 py-4 rounded-full text-base font-normal bg-[#F15C20] text-[#FFFFFF]"
              >
                Free Consultation
              </Link> */}
              <Link
                href="/contact-us"
                className="bg-[#F15C20] text-white rounded-[12px] text-center py-8 px-20 md:px-24 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden"
              >
                {/* First text */}
                <span className="block absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  Free Consultation
                </span>

                {/* Second text */}
                <span className="block absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  Let's talk
                </span>
              </Link>
              {/* <Link
                href={"/contact-us"}
                className={`px-6 py-4 rounded-full text-base font-normal ${
                  theme === "dark" ? "bg-[#FFFFFF66]" : "bg-[#0c0c0c66]"
                } text-[#FFFFFF]`}
              >
                Get a quote
              </Link> */}

              <Link
                href="/contact-us"
                className={`${
                  theme === "dark" ? "bg-[#FFFFFF66]" : "bg-[#0c0c0c66]"
                } text-white rounded-[12px] text-center py-8 px-20 md:px-24 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden`}
              >
                {/* First text */}
                <span className="block absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
                  Get a quote
                </span>

                {/* Second text */}
                <span className="block absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
                  Let's talk
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileAppDevSeoHero;
