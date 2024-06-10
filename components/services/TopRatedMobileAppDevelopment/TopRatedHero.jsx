"use client";
import Link from "next/link";
import React, { useContext } from "react";
import TopRatedNavbar from "./TopRatedNavbar";
import { GlobalContext } from "@/context/GlobalContext";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const TopRatedHero = () => {
  const { palette, setIsSidebarOpen } = useContext(GlobalContext);
  //   const images = ["/mobile-hero-mockup-3.png", "/mobile-hero-mockup-4.png"];
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="top-rated-bg bg-black w-full lg:h-screen flex flex-col justify-start items-start">
      <TopRatedNavbar setIsOpen={setIsSidebarOpen} />
      <div className="w-full flex lg:h-[calc(100%-5rem)] py-6 lg:py-0 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-y-12">
          <div className="w-full lg:w-[60%] h-full flex flex-col justify-center text-center lg:text-start items-center lg:items-start gap-2">
            <h1
              style={{
                color: "#fff",
              }}
              className="lg:block hidden text-3xl font-extrabold lg:text-[70px] xl:text-[70px] xl:leading-[72.8px] lg:font-bold xl:font-semibold tracking-[-2.8px]"
            >
              <span style={{ color: palette?.brandOrange }}>Top-Rated</span>{" "}
              Mobile <br /> App Development
              <br /> Agency
            </h1>
            <h1
              style={{
                color: "#fff",
              }}
              className="lg:hidden block text-3xl font-extrabold lg:text-5xl lg:font-bold "
            >
              Unrivaled{" "}
              <span style={{ color: palette?.brandOrange }}>Mobile</span> <br />{" "}
              app development agency
            </h1>
            <span
              style={{
                color: "#fff",
              }}
              className="lg:w-[80%] my-2 lg:my-6 text-[13px] lg:text-base font-normal"
            >
              Transform your mobile app development strategy with our customized
              first-class solutions. Our experts will ensure seamless
              integration, performance, and innovative features to twice your
              app's worth.
            </span>
          </div>
          <div className="w-full lg:w-[40%] flex items-center justify-center lg:justify-start">
            <div className="bg-[#0C0C0C80] h-[477px] w-[95%] md:w-[397px] rounded-[24px] p-6 md:px-12 md:py-14 flex flex-col justify-center items-start gap-y-10">
              <h1 className="uppercase font-normal text-base text-gray-200">
                Get in Touch With Us!
              </h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col items-start gap-6"
              >
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <IoPerson className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
                </div>
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <MdEmail className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Email address"
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
                </div>
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <FaPhone className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
                </div>
                <div className="w-full border border-b border-t-0 border-r-0 border-l-0 flex items-center justify-start gap-2">
                  <MdEmail className="text-[#F15C20] w-[16px] h-[16px]" />
                  <input
                    type="text"
                    placeholder="Message"
                    className="text-[#D3D3D3] text-[13px] py-2 w-full bg-transparent border-none outline-none"
                  />
                </div>
                <div className="w-full mt-3">
                  <button className="w-full text-white bg-[#F15C20] py-[12px] rounded-full">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedHero;
