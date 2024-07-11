"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext, useState } from "react";
import SeoNavbar from "./SeoNavbar";
import Link from "next/link";
import Navbar from "@/components/global/Navbar";

const MobileAppDevSeoHero = () => {
  const { palette, setIsSidebarOpen, theme } =
    useContext(GlobalContext);
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
              className={`lg:block hidden text-3xl md:text-4xl font-extrabold lg:text-[60px] xl:text-[70px] md:leading-[70px] xl:leading-[72.8px] lg:font-bold xl:font-semibold tracking-[-2.8px] z-10 `}
            >
              <span style={{ color: palette?.brandOrange }}>Execute</span>{" "}
              <span
                className={`${theme === "light" ? "text-black" : "text-white"}`}
              >
                Astounding Mobile
                <br />
                App Development Services
              </span>
            </h1>
            <h1
              style={{
                color: "#fff",
              }}
              className="lg:hidden block text-3xl font-extrabold lg:text-5xl lg:font-bold "
            >
              <span style={{ color: palette?.brandOrange }}>Execute</span>{" "}
              <span
                className={`${theme === "light" ? "text-black" : "text-white"}`}
              >
                Astounding <br /> Mobile App Development Agency
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
              <Link
                href="/contact-us"
                className="px-6 py-4 rounded-full text-base font-normal bg-[#F15C20] text-[#FFFFFF]"
              >
                Free Consultation
              </Link>
              <Link
                href={"/contact-us"}
                className="px-6 py-4 rounded-full text-base font-normal bg-[#FFFFFF66] text-[#FFFFFF]"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MobileAppDevSeoHero;
