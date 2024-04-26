"use client";

import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { GlobalContext } from "@/context/GlobalContext";

const Footer = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`w-full h-auto transition-all duration-300 flex flex-col gap-3 lg:gap-10 py-6 lg:py-12 justify-start items-start px-4 md:px-12 lg:px-28`}
      style={{
        background: palette?.dark_contrast_background,
      }}
    >
      <h1
        className="text-5xl font-extrabold lg:text-[65px] lg:font-bold capitalize"
        style={{ color: palette?.color }}
      >
        have an idea?
      </h1>
      <h1 className="text-5xl text-[#F15C20] font-extrabold lg:text-[65px] lg:font-bold capitalize">
        Let’s talk!
      </h1>
      <div className="w-full flex flex-col lg:flex-row justify-between items-end">
        <div className="w-full lg:w[50%] flex flex-col gap-3 lg:gap-10">
          <span
            className="text-3xl lg:text-[45px] font-light"
            style={{ color: palette?.color }}
          >
            +1 877 714 1770
          </span>

          <button
            name="call-now-btn"
            style={{
              background: `${palette?.brandRed}`,
              color: "white",
            }}
            className="w-[140px] lg:w-[168px] h-14 lg:h-16 rounded-full transition-all duration-100 hover:scale-105 text-md lg:text-lg font-medium  flex items-center justify-center gap-2 animate-bg"
          >
            <BsFillTelephoneFill />
            <span>Call Now</span>
          </button>
        </div>
        <div className="w-full lg:w[50%] flex justify-end">
          <div className=" h-auto  text-md lg:text-lg font-normal flex flex-col uppercase gap-4 py-6 px-2 justify-start lg:col-start-4  items-start col-span-2">
            <span className="text-[42px] font-bold" style={{color: palette?.color}}>Subscribe</span>
            <div className="w-full lg:w-96 relative">
              <input
                type="text"
                className="w-full  outline-none h-12 bg-transparent px-2"
                placeholder="E-mail"
                style={{ borderBottom: `2px solid ${palette?.brandOrange}` }}
              />
              <GoArrowRight
                className="absolute top-2 right-2  text-2xl"
                style={{ color: palette?.brandOrange }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-5 gap-2">
        <div className="col-span-5 lg:col-span-2 flex flex-col gap-2">
          {
            theme == "dark" ? <img src="/trust-pilot-white.svg" className="w-[236px]" /> :<img src="/trustpilot-logo.png" className="w-[236px]" />
          }
          
          <img src="/footer-stars.png" className="w-[236px]" />
        </div>
        <div className="col-span-2 lg:col-span-1 uppercase text-md lg:text-lg font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <Link href="/services" className="hover:text-orange-500">
            Services
          </Link>
          <Link href="/case-studies" className="hover:text-orange-500">
            Case Study
          </Link>
        </div>
        <div className="col-span-3 lg:col-span-1 uppercase text-md lg:text-lg font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <Link href="/" className="hover:text-orange-500">
            Testimonials
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-orange-500">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="hover:text-orange-500">
            Privacy Policy
          </Link>
        </div>
        <div className="col-span-5 lg:col-span-1 uppercase text-md lg:text-lg font-normal flex flex-col gap-3 pb-6 lg:py-6 px-2 justify-start items-start">
          <Link href="/" className="hover:text-orange-500">
            Testimonials
          </Link>
          <Link href="/terms-and-conditions" className="hover:text-orange-500">
            Terms & Conditions
          </Link>
          <Link href="/privacy-policy" className="hover:text-orange-500">
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="w-full flex items-center justify-between">
        <span
          className="text-base"
          style={{ color: palette?.light_contrast_color }}
        >
          © 2022 dignite studios
        </span>
        <Link
          href="mailto:info@dignitestudios.com"
          className="text-base font-normal"
          style={{ color: palette?.light_contrast_color }}
        >
          info@dignitestudios.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
