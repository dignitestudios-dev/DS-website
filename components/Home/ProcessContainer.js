'use client'

import React, { useRef } from "react";

const ProcessContainer = () => {
  return (
    <div className="w-full my-6 px-2 lg:px-10 h-auto flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
      <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
        <div className="group  w-full h-auto lg:h-auto  border-b-[2px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
          <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[100px] font-bold leading-[4.5rem]">
            01.
          </h1>
          <h2 className="text-[48px] font-bold capitalize leading-[4.2rem]">
            think tank
          </h2>
          <h3 className="text-[#8f8f8f]  capitalize text-[36px] leading-[3.8rem] font-medium">
            planning & research
          </h3>
          <p className="text-[14px] font-normal  text-[#8f8f8f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eros lacus, hendrerit ac dolor nec, condimentum mattis eros.
            Maecenas vel facilisis metus, consequat congue nibh. Nulla
            scelerisque ex facilisis rhoncus imperdiet. Maecenas nec fringilla
            neque, nec ullamcorper sem. Nulla in condimentum magna.
          </p>
        </div>
        <div className="group  w-full h-auto lg:h-auto  border-b-[2px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
          <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[100px] font-bold leading-[4.5rem]">
            01.
          </h1>
          <h2 className="text-[48px] font-bold capitalize leading-[4.2rem]">
            think tank
          </h2>
          <h3 className="text-[#8f8f8f]  capitalize text-[36px] leading-[3.8rem] font-medium">
            planning & research
          </h3>
          <p className="text-[14px] font-normal  text-[#8f8f8f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eros lacus, hendrerit ac dolor nec, condimentum mattis eros.
            Maecenas vel facilisis metus, consequat congue nibh. Nulla
            scelerisque ex facilisis rhoncus imperdiet. Maecenas nec fringilla
            neque, nec ullamcorper sem. Nulla in condimentum magna.
          </p>
        </div>
        <div className="group  w-full h-auto lg:h-auto flex flex-col justify-center items-start  py-10">
          <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] text-[100px] group-hover:text-[#F15C20] font-bold leading-[4.5rem]">
            01.
          </h1>
          <h2 className="text-[48px] font-bold capitalize leading-[4.2rem]">
            think tank
          </h2>
          <h3 className="text-[#8f8f8f]  capitalize text-[36px] leading-[3.8rem] font-medium">
            planning & research
          </h3>
          <p className="text-[14px] font-normal  text-[#8f8f8f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eros lacus, hendrerit ac dolor nec, condimentum mattis eros.
            Maecenas vel facilisis metus, consequat congue nibh. Nulla
            scelerisque ex facilisis rhoncus imperdiet. Maecenas nec fringilla
            neque, nec ullamcorper sem. Nulla in condimentum magna.
          </p>
        </div>
      </div>
      <div className="hidden lg:grid w-auto h-[80rem]   grid-rows-5 grid-cols-1 justify-center items-start">
        <span className=" h-full  flex flex-col justify-start items-center">
          <span className=" w-6 h-6 rounded-full bg-black  flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
          <span className="h-[calc(100%-3rem)] w-[2px] bg-black"></span>
          <span className=" w-6 h-6 rounded-full bg-black  flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
        </span>
        <span className=" h-full  flex flex-col justify-start items-center">
          <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
          <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
        </span>
        <span className=" h-full  flex flex-col justify-start items-center">
          <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
          <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
        </span>
        <span className=" h-full  flex flex-col justify-start items-center">
          <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
          <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
        </span>
        <span className=" h-full  flex flex-col justify-start items-center">
          <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
          <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
            <span className="w-1 h-1 rounded-full bg-white"></span>
          </span>
        </span>
      </div>
      <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
        <div className="group  w-full h-auto lg:h-auto  border-b-[2px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
          <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[100px] font-bold leading-[4.5rem]">
            01.
          </h1>
          <h2 className="text-[48px] font-bold capitalize leading-[4.2rem]">
            think tank
          </h2>
          <h3 className="text-[#8f8f8f]  capitalize text-[36px] leading-[3.8rem] font-medium">
            planning & research
          </h3>
          <p className="text-[14px] font-normal  text-[#8f8f8f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eros lacus, hendrerit ac dolor nec, condimentum mattis eros.
            Maecenas vel facilisis metus, consequat congue nibh. Nulla
            scelerisque ex facilisis rhoncus imperdiet. Maecenas nec fringilla
            neque, nec ullamcorper sem. Nulla in condimentum magna.
          </p>
        </div>
        <div className="group  w-full h-auto lg:h-auto  border-b-[2px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
          <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[100px] font-bold leading-[4.5rem]">
            01.
          </h1>
          <h2 className="text-[48px] font-bold capitalize leading-[4.2rem]">
            think tank
          </h2>
          <h3 className="text-[#8f8f8f]  capitalize text-[36px] leading-[3.8rem] font-medium">
            planning & research
          </h3>
          <p className="text-[14px] font-normal  text-[#8f8f8f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eros lacus, hendrerit ac dolor nec, condimentum mattis eros.
            Maecenas vel facilisis metus, consequat congue nibh. Nulla
            scelerisque ex facilisis rhoncus imperdiet. Maecenas nec fringilla
            neque, nec ullamcorper sem. Nulla in condimentum magna.
          </p>
        </div>
        <div className="group  w-full h-auto lg:h-auto flex flex-col justify-center items-start  py-10">
          <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[100px] font-bold leading-[4.5rem]">
            01.
          </h1>
          <h2 className="text-[48px] font-bold capitalize leading-[4.2rem]">
            think tank
          </h2>
          <h3 className="text-[#8f8f8f]  capitalize text-[36px] leading-[3.8rem] font-medium">
            planning & research
          </h3>
          <p className="text-[14px] font-normal  text-[#8f8f8f]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eros lacus, hendrerit ac dolor nec, condimentum mattis eros.
            Maecenas vel facilisis metus, consequat congue nibh. Nulla
            scelerisque ex facilisis rhoncus imperdiet. Maecenas nec fringilla
            neque, nec ullamcorper sem. Nulla in condimentum magna.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessContainer;
