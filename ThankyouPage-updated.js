"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext } from "react";

const ThankyouPage = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="w-full h-auto flex flex-col gap-4 justify-center mb-40 items-center py-16 px-4 md:px-12 lg:px-28"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <span className="w-[80px] h-[80px] rounded-full flex justify-center items-center bg-[#FEEFE9]">
        <img src="/check.webp" alt="" className="w-9" />
      </span>
      <h1 className="text-[45px] font-extrabold lg:text-[64px]  lg:font-bold text-center  uppercase">
        Thank You
      </h1>
      <p className="text-[18px] font-light text-center">
        We appreciate your time and patience.
      </p>

      <p className="text-[18px] font-light text-center">
        Our consultant will get in touch with you via mail or text within 48
        hours. <br /> If you have any urgent queries, feel free to call us now.
      </p>
      
      <div className="flex flex-col items-center gap-2 mt-4">
        <p className="text-[16px] font-medium text-center">
          Call us directly:
        </p>
        <a 
          href="tel:+13023070115" 
          className="text-[24px] font-bold text-[#F15C20] hover:underline transition-all duration-150"
        >
          +1 (302) 307-0115
        </a>
      </div>
    </div>
  );
};

export default ThankyouPage;