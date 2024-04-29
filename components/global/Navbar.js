'use client'
import React, { useContext } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Link from 'next/link'
import { GlobalContext } from "@/context/GlobalContext";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/navigation";


const Navbar = ({ setIsOpen }) => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  const navigate = useRouter()
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const navigateTo = (link) => {
    navigate.push(link)
  }
  return (
    <div
      className={`relative px-4 md:px-12 lg:px-28 h-20  flex items-center justify-between w-full`}
    >
      <Link href="/" className="h-12 lg:h-16">
        <img src={theme == "light" ? "/logo.png" : "/logo-dark.png"} className="h-12 lg:h-16" />
      </Link>
      <div
        style={{ color: palette?.color }}
        className={`w-auto mx-auto
         hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8 `}
      >
        <button
          onClick={() => navigateTo("/")}
          className={`text-[14px] h-8 font-medium hover:text-orange-600
            } bg-transparent  outline-none`}
        >
          Home
        </button>
        <button
          className={`group text-[14px] hover:text-orange-600 relative gap-2 h-8 font-medium flex justify-between items-center  bg-transparent  outline-none`}
        >
          <span>Services</span>
          <IoIosArrowDown className="text-md" />
          <div className={`w-64 h-auto p-6  rounded-2xl text-md scale-0 transition-all duration-150 group-hover:scale-100 flex  flex-col gap-2 justify-start items-start absolute top-full ${theme == "dark" ? "shadow-[0_3px_10px_rgb(230,230,230,0.2)]" : "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"} -right-24`} style={{ background: palette?.background, color: palette?.color }}>
            <Link href="/services/mobile-app-development" className={`hover:text-orange-600 `} >Mobile App Development</Link>
            <Link href="/services/ios-app-development" className={`hover:text-orange-600 `} >IOS App Development</Link>
            <Link href="/services/android-app-development" className={`hover:text-orange-600 `} >Android App Development</Link>
            <Link href="/services/web-app-development" className={`hover:text-orange-600 `} >Web App Development</Link>
          </div>
        </button>
        <button
          onClick={() => handleClick("case-studies")}
          className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          Case Studies
        </button>
        <button
          onClick={() => navigateTo("/about-us")}
          className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          About us
        </button>
        <button
          onClick={() => navigateTo("/contact-us")}
          className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          Contact
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
