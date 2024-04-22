'use client'

import React, { useContext } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";
import { GlobalContext } from "@/context/GlobalContext";

const Footer = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className={`w-full h-auto flex flex-col gap-3 lg:gap-10 py-6 justify-start items-start px-4 md:px-12 lg:px-28`}
      style={{
        background: palette?.dark_contrast_background,
      }}
    >
      <h1
        className="text-5xl font-extrabold lg:text-[96px] lg:font-bold capitalize"
        style={{ color: palette?.color }}
      >
        have an idea?
      </h1>
      <span
        className="text-3xl lg:text-[60px] font-light"
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
        className="w-[150px] lg:w-[206px] h-14 lg:h-20 rounded-full  transition-all duration-100 hover:scale-105 text-md lg:text-lg font-medium  flex items-center justify-center gap-2 animate-pulse"
      >
        <BsFillTelephoneFill />
        <span>Call Now</span>
      </button>

      <div className="w-full h-auto grid grid-cols-2 lg:grid-cols-3  gap-2">
        <div className=" uppercase text-md lg:text-lg font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <Link href="/services" className="hover:text-orange-500">Services</Link>
          <Link href="/case-studies" className="hover:text-orange-500">Case Study</Link>
        </div>
        <div className=" uppercase text-md lg:text-lg font-normal flex flex-col gap-3 py-6 px-2 justify-start items-start">
          <Link href="/" className="hover:text-orange-500">Testimonials</Link>
          <Link href="/terms-and-conditions" className="hover:text-orange-500">Terms & Conditions</Link>
          <Link href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</Link>
        </div>
        <div className=" h-auto  text-md lg:text-lg font-normal flex flex-col uppercase gap-3 py-6 px-2 justify-start lg:col-start-4  items-start col-span-2">
          <span>Subscribe</span>
          <div className="w-full lg:w-72 relative">
            <input
              type="text"
              className="w-full  outline-none h-10 bg-transparent px-2"
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

      <span
        className="text-sm"
        style={{ color: palette?.light_contrast_color }}
      >
        © 2022 dignite studios
      </span>
    </div>
  );
};

export default Footer;
