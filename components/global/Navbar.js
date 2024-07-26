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

const Navbar = ({ setIsOpen }) => {
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
    <nav
      className={`relative px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  h-20  flex items-center justify-between w-full`}
    >
      <Link aria-label="logo" href="/" className="h-auto">
        <img
          alt="logo"
          // loader={customLoader}
          width={120}
          height={70}
          src={theme == "light" ? "/logo.webp" : "/logo-dark.webp"}
          className="h-[70px] w-[120px]"
        />
      </Link>
      <div
        style={{ color: palette?.color }}
        className={`w-auto mx-auto
         hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8 `}
      >
        <Link
          aria-label="link"
          href={"/"}
          // onClick={() => navigateTo("/")}
          className={`text-[14px] font-medium hover:text-orange-600
            } bg-transparent  outline-none`}
        >
          Home
        </Link>
        <button
          className={`group text-[14px] hover:text-orange-600 relative gap-2 h-8 font-medium flex justify-between items-center  bg-transparent  outline-none`}
        >
          <span>Services</span>
          <IoIosArrowDown className="text-md" />
          <div
            className={`w-72 h-auto p-6 z-20 rounded-2xl text-md scale-0 transition-all duration-150 group-hover:scale-100 flex  flex-col gap-2 justify-start items-start absolute top-full ${
              theme == "dark"
                ? "shadow-[0_3px_10px_rgb(230,230,230,0.2)]"
                : "shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            } -right-24`}
            style={{ background: palette?.background, color: palette?.color }}
          >
            <Link
              href="/services/mobile-app-development-services"
              className={`hover:text-orange-600 cursor-pointer `}
            >
              Mobile App Development Services
            </Link>
            <Link
              href="/services/mobile-app-design-services"
              className={`hover:text-orange-600 cursor-pointer `}
            >
              Mobile App Design Services
            </Link>
            <Link
              href="/services/mobile-app-consulting-services"
              className={`hover:text-orange-600 cursor-pointer `}
            >
              Mobile App Consulting Services
            </Link>
            <Link
              href="/services/mobile-app-testing-services"
              className={`hover:text-orange-600 cursor-pointer `}
            >
              Mobile App Testing Services
            </Link>

            <Link
              href="/services/android-app-development-services"
              className={`hover:text-orange-600 cursor-pointer `}
            >
              Android App Development Services
            </Link>
            <Link
              href="/services/ios-app-development-services"
              className={`hover:text-orange-600 cursor-pointer `}
            >
              IOS App Development Services
            </Link>
            <Link
              href="/services/web-app-development-services"
              className={`hover:text-orange-600 cursor-pointer `}
            >
              Web App Development Services
            </Link>
            {/* mobile-application-support-and-maintenance-services */}
            <Link
              href="/services/mobile-application-support-and-maintenance-services"
              className={`hover:text-orange-600 cursor-pointer text-start`}
            >
              Mobile App Support And Maintenance Services
            </Link>
          </div>
        </button>
        <button
          onClick={() => handleClick("case-studies")}
          className={`text-[14px] h-8 font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          Case Studies
        </button>
        <Link
          href={"/about-us"}
          // onClick={() => navigateTo("/about-us")}
          className={`text-[14px] font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          About us
        </Link>
        <Link
          href={"/contact-us"}
          // onClick={() => navigateTo("/contact-us")}
          className={`text-[14px] font-medium hover:text-orange-600 bg-transparent  outline-none`}
        >
          Contact
        </Link>
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
          className="flex lg:hidden h-4 lg:h-auto"
        >
          <img
            src={theme == "light" ? "/hamburger.webp" : "/menu-dark.webp"}
            className="h-full"
            height={28}
            width={34}
            alt="hamburger-icon"
            title="hamburger-icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
