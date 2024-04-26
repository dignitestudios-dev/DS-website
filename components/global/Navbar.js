'use client'
import React, { useContext } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Link from 'next/link'
import { GlobalContext } from "@/context/GlobalContext";


const Navbar = ({ setIsOpen }) => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  return (
    <div
      className={`px-4 md:px-12 lg:px-28 h-20  flex items-center justify-between w-full`}
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
            } bg-transparent  border-b-2 border-orange-600 outline-none`}
        >
          Home
        </button>
        <button
          className={`text-[14px] h-8 font-medium  bg-transparent  outline-none`}
        >
          Services
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

        {/* <button onClick={() => setIsOpen(true)} className="h-4 lg:h-auto">
          <img src={theme == "light" ? "/hamburger.png" : "/menu-dark.png"} className="h-full" />
        </button> */}
      </div>
    </div>
  );
};

export default Navbar;
