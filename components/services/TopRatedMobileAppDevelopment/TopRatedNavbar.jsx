"use client";
import React, { useContext } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";
import { IoIosArrowDown } from "react-icons/io";
import { useParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { IoCall } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import { BiMenuAltRight } from "react-icons/bi";

const TopRatedNavbar = ({ setIsOpen }) => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  const navigate = useRouter();
  const pathname = usePathname();

  const handleClick = (id) => {
    if (pathname != "/") {
      navigate.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const navigateTo = (link) => {
    navigate.push(link);
  };

  return (
    <div
      className={`relative px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  h-20  flex items-center justify-end w-full`}
    >
      {/* <Link aria-label="logo" href="/" className="h-auto">
        <img
          alt="logo"
          // loader={customLoader}
          // width={120}
          // height={64}
          src={"/logo-dark.png"}
          className="h-[70px] w-[120px]"
        />
      </Link> */}
      <div
        style={{ color: "#fff" }}
        className={`w-auto ms-auto lg:mr-6 xl:mr-8
         hidden lg:flex justify-end items-center h-full lg:gap-6 xl:gap-8 `}
      >
        <button
          aria-label="button"
          onClick={() => navigateTo("/")}
          className={`${theme === "light" ? 'text-black': 'text-white'} text-[14px] h-8 font-medium hover:text-orange-600
            } bg-transparent  outline-none`}
        >
          Home
        </button>
        <button
          className={`${theme === "light" ? 'text-black': 'text-white'} group text-[14px] hover:text-orange-600 relative gap-2 h-8 font-medium flex justify-between items-center  bg-transparent  outline-none`}
        >
          <span>Services</span>
          <IoIosArrowDown className="text-md" />
          <div
            className={`w-64 h-auto p-6  rounded-2xl text-md scale-0 transition-all duration-150 group-hover:scale-100 flex  flex-col gap-2 justify-start items-start absolute top-full z-20 ${
              theme == "dark"
                ? "shadow-[0_3px_10px_rgb(230,230,230,0.2)]"
                : "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            } -right-24`}
            style={{ background: palette?.background, color: palette?.color }}
          >
            <Link
              href="/services/mobile-app-development"
              className={`hover:text-orange-600 `}
            >
              Mobile App Development
            </Link>
            <Link
              href="/services/ios-app-development"
              className={`hover:text-orange-600 `}
            >
              IOS App Development
            </Link>
            <Link
              href="/services/android-app-development"
              className={`hover:text-orange-600 `}
            >
              Android App Development
            </Link>
            <Link
              href="/services/web-app-development"
              className={`hover:text-orange-600 `}
            >
              Web App Development
            </Link>
          </div>
        </button>
        <button
          onClick={() => handleClick("case-studies")}
          className={`${theme === "light" ? 'text-black': 'text-white'} text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          Case Studies
        </button>
        <button
          onClick={() => navigateTo("/about-us")}
          className={`${theme === "light" ? 'text-black': 'text-white'} text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          Our Process
        </button>
        <button
          onClick={() => navigateTo("/contact-us")}
          className={`${theme === "light" ? 'text-black': 'text-white'} text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          FAQs
        </button>
        <Link href={'tel:(877) 714-1770'}
          // onClick={() => navigateTo("/contact-us")}
          className={`text-[14px] h-8 font-medium text-orange-600 bg-transparent  outline-none flex items-center justify-center gap-1`}
        >
          <IoCall className="text-base" /> (877) 714-1770
        </Link>
        <button
          onClick={() => navigateTo("/contact-us")}
          className={`text-[14px] rounded-full font-medium text-white bg-orange-600 w-[147px] h-[48px] outline-none flex items-center justify-center gap-1`}
        >
          Contact Us <FiArrowUpRight className="text-base" />
        </button>
      </div>
      <div className="w-auto flex gap-3 justify-start items-center">
        <button
          aria-label="button"
          name="theme-toggle"
          type="button"
          onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
          className={`${
            theme == "light" ? "bg-[#00ACFF]/[0.18]" : "bg-[#A9A1D7]/[0.18]"
          } rounded-full transition-all duration-300 w-[50px] lg:w-[70px] h-[30px] lg:h-[37.5px] p-[4px] flex justify-start items-center`}
        >
          <span
            className={`h-6 w-6 lg:h-8 lg:w-8 text-xl text-white transition-all duration-300 rounded-full flex items-center justify-center ${
              theme == "light"
                ? "translate-x-0 bg-[#00ACFF]"
                : "translate-x-[calc(100%-28%)] lg:translate-x-[calc(100%-3%)] bg-[#342A6D]"
            } `}
          >
            {theme == "light" ? (
              <BsFillBrightnessHighFill className="text-lg" />
            ) : (
              <IoMoon />
            )}
          </span>
        </button>

        <button
          aria-label="button"
          type="button"
          name="menu-toggle"
          onClick={() => setIsOpen(true)}
          className={`flex lg:hidden ${theme === 'light' ? 'text-black': 'text-white'}`}
        >
          {/* <img src={"/menu-dark.webp"} className="h-full" /> */}
          <BiMenuAltRight className="text-3xl"/>
        </button>
      </div>
    </div>
  );
};

export default TopRatedNavbar;
