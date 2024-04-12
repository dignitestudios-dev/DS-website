'use client'
import React, { useContext } from "react";
import { CiBrightnessDown } from "react-icons/ci";
import { IoMoon } from "react-icons/io5";
import Link from 'next/link'
import { GlobalContext } from "@/context/GlobalContext";


const Navbar = ({ setIsOpen }) => {
  const { theme, setTheme } = useContext(GlobalContext);
  return (
    <div
      className={`px-4 md:px-12 lg:px-28 h-20  flex items-center justify-between w-full`}
    >
      <Link href="/">
        <img src={theme == "light" ? "/logo.png" : "logo-dark.png"} />
      </Link>
      <div className="w-auto flex gap-3 justify-start items-center">
        <button
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className={`${theme == "light" ? "bg-blue-500/[0.2]" : "bg-[#A9A1D7]/[0.18]"
            } rounded-full transition-all duration-300 w-[70px] h-[37.5px] p-[4px] flex justify-start items-center`}
        >
          <span
            className={`h-8 w-8 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${theme == "light"
              ? "translate-x-0 bg-blue-500"
              : "translate-x-[calc(100%-3%)] bg-[#342A6D]"
              } `}
          >
            {theme == "light" ? <CiBrightnessDown /> : <IoMoon />}
          </span>
        </button>

        <button onClick={() => setIsOpen(true)}>
          <img src={theme == "light" ? "hamburger.png" : "menu-dark.png"} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
