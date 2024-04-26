'use client'
import React, { useContext } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Link from 'next/link'
import { GlobalContext } from "@/context/GlobalContext";
import { IoIosArrowDown } from "react-icons/io";


const Navbar = ({ setIsOpen }) => {
  const { palette, theme, setTheme } = useContext(GlobalContext);

  return (
    <div
      className={`relative px-4 md:px-12 lg:px-28 h-20  flex items-center justify-between w-full`}
    >
      <Link href="/" className="h-12 lg:h-16">
        <img src={theme == "light" ? "/logo.png" : "/logo-dark.png"} className="h-full" />
      </Link>
      <div
        style={{ color: palette?.color }}
        className={`w-auto mx-auto
         hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8 `}
      >
        <button
          className={`text-[14px] h-8 font-medium 
            } bg-transparent  outline-none`}
        >
          Home
        </button>
        <button
          className={`group text-[14px] relative gap-2 h-8 font-medium flex justify-between items-center  bg-transparent  outline-none`}
        >
          <span>Services</span>
          <IoIosArrowDown className="text-md" />
          <div className={`w-64 h-auto p-6  rounded-2xl text-md scale-0 transition-all duration-150 group-hover:scale-100 flex  flex-col gap-2 justify-start items-start absolute top-full ${theme == "dark" ? "shadow-[0_3px_10px_rgb(255,255,255,0.2)]" : "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"} -right-24`} style={{ background: palette?.background }}>
            <Link href="/services/mobile-app-development" className="hover:underline underline-offset-4 " style={{ color: palette?.color }}>Mobile App Development</Link>
            <Link href="/services/ios-app-development" className="hover:underline underline-offset-4 " style={{ color: palette?.color }}>IOS App Development</Link>
            <Link href="/services/android-app-development" className="hover:underline underline-offset-4 " style={{ color: palette?.color }}>Android App Development</Link>
            <Link href="/services/web-app-development" className="hover:underline underline-offset-4 " style={{ color: palette?.color }}>Web App Development</Link>
          </div>
        </button>
        <button
          className={`text-[14px] h-8 font-medium  bg-transparent  outline-none`}
        >
          Case Studies
        </button>
        <button
          className={`text-[14px] h-8 font-medium  bg-transparent  outline-none`}
        >
          Our Process
        </button>
        <button
          className={`text-[14px] h-8 font-medium  bg-transparent  outline-none`}
        >
          FAQ's
        </button>
      </div>
      <div className="w-auto flex gap-3 justify-start items-center">
        <button
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className={`${theme == "light" ? "bg-[#00ACFF]/[0.18]" : "bg-[#A9A1D7]/[0.18]"
            } rounded-full transition-all duration-300 w-[50px] lg:w-[70px] h-[30px] lg:h-[37.5px] p-[4px] flex justify-start items-center`}
        >
          <span
            className={`h-6 w-6 lg:h-8 lg:w-8 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${theme == "light"
              ? "translate-x-0 bg-[#00ACFF]"
              : "translate-x-[calc(100%-28%)] lg:translate-x-[calc(100%-3%)] bg-[#342A6D]"
              } `}
          >
            {theme == "light" ? <BsFillBrightnessHighFill className="text-lg" /> : <IoMoon />}
          </span>
        </button>

        <button onClick={() => setIsOpen(true)} className="flex lg:hidden h-4 lg:h-auto">
          <img src={theme == "light" ? "/hamburger.png" : "/menu-dark.png"} className="h-full" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
