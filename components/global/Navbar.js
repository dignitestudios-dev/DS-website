"use client";
import React, { useContext, useState } from "react";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import Link from "next/link";
import { GlobalContext } from "@/context/GlobalContext";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { GoDotFill } from "react-icons/go";

const Navbar = ({ setIsOpen }) => {
  const { palette, theme, setTheme } = useContext(GlobalContext);
  const navigate = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();

  const handleClick = (id) => {
    if (pathname !== "/") {
      navigate.push("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 500);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className={"absolute top-0 left-0 px-4 md:px-12 bg-transparent lg:px-28 xl:px-[120px] 2xl:px-48 h-20 flex items-center justify-between w-full z-[99999999]"}>
      {/* Logo */}
      <Link aria-label="logo" href="/" className="h-auto">
        <img
          alt="Dignite Studios Logo"
          title="Dignite Studios Logo"
          width={120}
          height={70}
          src={pathname === "/" ?   "/logo-dark.webp" :"/logo.webp" }
          className="h-[70px] w-[120px]"
        />
      </Link>

      {/* Desktop Menu */}
      <div
        className="w-auto mx-auto hidden lg:flex justify-start items-center h-full lg:gap-6 xl:gap-8"
        style={{
          color: pathname === "/" ? "#ffffff" : palette?.color,
        }}
      >
        <Link
          href="/"
          className="text-[14px] font-medium hover:text-[#F15C20] bg-transparent outline-none"
        >
          Home
        </Link>

        <button
          onMouseEnter={() => setShowDropdown(true)}
          className={`group text-[14px] relative gap-2 h-8 font-medium flex items-center bg-transparent outline-none ${
            showDropdown ? "text-[#F15C20]" : ""
          }`}
        >
          <span>Services</span>
          <IoIosArrowDown
            className={`text-md transition-all duration-300 ${
              showDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        <button
          onClick={() => handleClick("case-studies")}
          className="text-[14px] h-8 font-medium hover:text-[#F15C20] bg-transparent outline-none"
        >
          Case Studies
        </button>

        <Link
          href="/about-us"
          className="text-[14px] font-medium hover:text-[#F15C20] bg-transparent outline-none"
        >
          About us
        </Link>

        <Link
          href="/contact-us"
          className="text-[14px] font-medium hover:text-[#F15C20] bg-transparent outline-none"
        >
          Contact
        </Link>
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          onMouseLeave={() => setShowDropdown(false)}
          className="w-full min-h-[369px] p-6 z-50 hidden lg:flex gap-8 xl:gap-20 pt-10 items-start absolute top-20 left-1/2 transform -translate-x-1/2 shadow-xl"
          style={{
            background: palette?.background,
            color: palette?.color,
          }}
        >
          {/* Development */}
          <div className="flex flex-col gap-3">
            <h5 className="text-[#F15C20] font-semibold text-[20px] mb-2">
              Development
            </h5>
            {[
              ["Mobile App Development Services", "/services/mobile-app-development-services"],
              ["Android App Development Services", "/services/android-app-development-services"],
              ["iOS App Development Services", "/services/ios-app-development-services"],
              ["Native App Development Services", "/services/native-app-development-services"],
              ["Web App Development Services", "/services/web-application-development-services"],
              ["PWA Development Services", "/services/pwa-development-services"],
            ].map(([label, link]) => (
              <Link key={link} href={link} className="hover:text-[#F15C20] flex items-center gap-2">
                <GoDotFill className="text-[#F15C20] w-[11px] h-[11px]" />
                {label}
              </Link>
            ))}
          </div>

          {/* Maintenance */}
          <div className="flex flex-col gap-3">
            <h5 className="text-[#F15C20] font-semibold text-[20px] mb-2">
              Maintenance & Consulting
            </h5>
            {[
              ["Mobile App Support & Maintenance Services", "/services/mobile-application-support-and-maintenance-services"],
              ["Mobile App Consulting Services", "/services/mobile-app-consulting-services"],
              ["Mobile App Testing Services", "/services/mobile-app-testing-services"],
            ].map(([label, link]) => (
              <Link key={link} href={link} className="hover:text-[#F15C20] flex items-center gap-2">
                <GoDotFill className="text-[#F15C20] w-[11px] h-[11px]" />
                {label}
              </Link>
            ))}
          </div>

          {/* Design */}
          <div className="flex flex-col gap-3">
            <h5 className="text-[#F15C20] font-semibold text-[20px] mb-2">
              Design
            </h5>
            {[
              ["Mobile App Design Services", "/services/mobile-app-design-services"],
              ["Android App Design Services", "/services/android-mobile-app-design-services"],
              ["iOS App Design Services", "/services/ios-app-design-services"],
            ].map(([label, link]) => (
              <Link key={link} href={link} className="hover:text-[#F15C20] flex items-center gap-2">
                <GoDotFill className="text-[#F15C20] w-[11px] h-[11px]" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Right Actions */}
      <div className="flex gap-3 items-center">
        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className={`rounded-full transition-all duration-300 w-[50px] lg:w-[70px] h-[30px] lg:h-[37.5px] p-[4px] flex items-center ${
            theme === "light" ? "bg-[#00ACFF]/[0.18]" : "bg-[#A9A1D7]/[0.18]"
          }`}
        >
          <span
            className={`h-6 w-6 lg:h-8 lg:w-8 text-white rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === "light"
                ? "translate-x-0 bg-[#00ACFF]"
                : "translate-x-[calc(100%-28%)] lg:translate-x-[calc(100%-3%)] bg-[#342A6D]"
            }`}
          >
            {theme === "light" ? <BsFillBrightnessHighFill /> : <IoMoon />}
          </span>
        </button>

        {/* Mobile Menu */}
        <button onClick={() => setIsOpen(true)} className="flex lg:hidden">
          <img
            src={theme === "light" ? "/hamburger.webp" : "/menu-dark.webp"}
            alt="menu"
            className="h-4"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
