"use client";
import React, { useContext, useState } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";
import { IoIosArrowDown } from "react-icons/io";
import { useParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";
import { BiMenuAltRight } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

const InfluentialNavbar = ({ setIsOpen }) => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  const navigate = useRouter();
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClick = (id) => {
    if (pathname != "/") {
      // navigate.push("/");
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
    <nav
      className={`relative px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  h-20  flex items-center justify-between w-full z-50`}
    >
      <Link aria-label="logo" href="/" className="h-auto">
        <Image
          alt="logo"
          loader={customLoader}
          width={120}
          height={64}
          src="/logo-dark.png"
          className="h-[70px] w-[120px]"
        />
      </Link>
      <div
        style={{ color: palette?.color }}
        className={`w-auto mx-auto
         hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8 `}
      >
        <button
          aria-label="button"
          onClick={() => navigateTo("/")}
          className={`text-[14px] h-8 font-medium text-white hover:text-orange-600
            } bg-transparent  outline-none`}
        >
          Home
        </button>
        <button
          onMouseEnter={() => setShowDropdown(true)}
          className={`group text-[14px] text-white hover:text-orange-600 relative gap-2 h-8 font-medium flex justify-between items-center  bg-transparent  outline-none`}
        >
          <span>Services</span>
          <IoIosArrowDown className="text-md" />
        </button>
        <button
          onClick={() => handleClick("case-studies")}
          className={`text-[14px] h-8 font-medium text-white hover:text-orange-600 bg-transparent  outline-none`}
        >
          Case Studies
        </button>
        <button
          onClick={() => navigateTo("/about-us")}
          className={`text-[14px] h-8 font-medium text-white hover:text-orange-600 bg-transparent  outline-none`}
        >
          About us
        </button>
        <button
          onClick={() => navigateTo("/contact-us")}
          className={`text-[14px] h-8 font-medium text-white hover:text-orange-600 bg-transparent  outline-none`}
        >
          Contact
        </button>
      </div>
      {showDropdown && (
        <div
          onMouseLeave={() => setShowDropdown(false)}
          className={`w-[100%] min-h-[369px] p-6 z-20 text-md transition-all duration-150 hidden lg:flex gap-2 justify-center lg:gap-x-8 xl:gap-x-20 pt-10 items-start absolute top-20 left-1/2 transform -translate-x-1/2  ${
            theme == "dark" ? "shadow-xl" : "shadow-xl"
          } -right-24`}
          style={{ background: palette?.background, color: palette?.color }}
        >
          <div className="flex flex-col items-start gap-3">
            <h5 className="text-[#F15C20] font-semibold text-[20px] mb-2">
              Development
            </h5>
            <Link
              href={"/services/mobile-app-development-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> Mobile
              App Development Services
            </Link>
            <Link
              href={"/services/android-app-development-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> Android
              App Development Services
            </Link>
            <Link
              href={"/services/ios-app-development-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> iOS App
              Development Services
            </Link>
            <Link
              href={"/services/native-app-development-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> Native
              App Development Services
            </Link>
            <Link
              href={"/services/web-application-development-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> Web App
              Development Services
            </Link>
            <Link
              href={"/services/pwa-development-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
              PWA Development Services
            </Link>
            <Link
              href={"/services/hire-mobile-app-developers"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
              Hire Mobile App Developers
            </Link>

            <Link
              href={"/services/hire-android-app-developers"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
              Hire Android App Developers
            </Link>
            <Link
              href={"/services/hire-ios-app-developers"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
              Hire iOS App Developers
            </Link>
            {/* <Link
           href={"/services/hybrid-app-development-services"}
           className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
         >
           <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
           Hybrid App Development Services
         </Link> */}
          </div>
          <div className="flex flex-col items-start gap-3">
            <h5 className="text-[#F15C20] font-semibold text-[20px] mb-2">
              Maintenance & Consulting
            </h5>
            <Link
              href={
                "/services/mobile-application-support-and-maintenance-services"
              }
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
              Mobile App Support & Maintenance Services
            </Link>
            <Link
              href={"/services/mobile-app-consulting-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> Mobile
              App Consulting Services
            </Link>
            <Link
              href={"/services/mobile-app-testing-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> Mobile
              App Testing Services
            </Link>
          </div>
          <div className="flex flex-col items-start gap-3">
            <h5 className="text-[#F15C20] font-semibold text-[20px] mb-2">
              Design
            </h5>
            <Link
              href={"/services/mobile-app-design-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
              Mobile App Design Services
            </Link>
            <Link
              href={"/services/android-mobile-app-design-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" /> Android
              App Design Services
            </Link>
            <Link
              href={"/services/ios-app-design-services"}
              className={`hover:text-[#F15C20] cursor-pointer text-start flex items-center gap-2`}
            >
              <GoDotFill className="w-[11px] h-[11px] text-[#F15C20]" />
              iOS App Design Services
            </Link>
          </div>
        </div>
      )}
      <div className="w-auto flex gap-3 justify-start items-center z-20">
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
          className="flex lg:hidden"
        >
          {/* <img
            src={theme == "light" ? "/hamburger.webp" : "/menu-dark.webp"}
            className="h-full"
          /> */}
          <BiMenuAltRight className="text-3xl text-white" />
        </button>
      </div>
    </nav>
  );
};

export default InfluentialNavbar;
