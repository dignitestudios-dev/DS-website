"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const CaseStudy = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className="w-full h-auto flex flex-col gap-4 justify-start items-start py-8 lg:py-16"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <div className="px-4 md:px-12 lg:px-64 lg:pb-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <img
            src="/maid-simple-logo.png"
            alt=""
            className="w-[133px] h-[42px]"
          />
          <h1 className="text-[45px] font-extrabold lg:text-[60px] lg:font-medium uppercase">
            cleaning made simple
          </h1>
        </div>
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">About The App</h2>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            libero a arcu faucibus auctor. Cras elementum risus nec elementum
            tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est
            dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan
            sem a vehicula.
            <br />
            <br />
            Fusce lacinia nec orci sit amet interdum. Donec magna augue,
            ultricies non facilisis nec, tincidunt eget sem. Nunc pretium
            aliquet sem posuere posuere. Ut imperdiet bibendum turpis. Duis quis
            egestas leo, non cursus tellus. Ut tincidunt vitae metus eget
            rhoncus. Proin tempor diam a lectus mollis pharetra. Vivamus
            eleifend nisl id nisi interdum porttitor.
          </p>
        </div>
      </div>
      <img src="/maid-simple-1.png" alt="" className="w-full h-screen" />
      <div className="px-4 md:px-12 lg:px-64 lg:py-10 flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-[36px] font-medium">The Challenge</h2>
          <p className="text-[18px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut
            libero a arcu faucibus auctor. Cras elementum risus nec elementum
            tincidunt. Nulla facilisi. Suspendisse lacinia nisi sit amet est
            dictum, blandit porttitor nulla accumsan. Duis consectetur accumsan
            sem a vehicula.
            <br />
            <br />
            Fusce lacinia nec orci sit amet interdum. Donec magna augue,
            ultricies non facilisis nec, tincidunt eget sem. Nunc pretium
            aliquet sem posuere posuere. Ut imperdiet bibendum turpis. Duis quis
            egestas leo, non cursus tellus. Ut tincidunt vitae metus eget
            rhoncus. Proin tempor diam a lectus mollis pharetra. Vivamus
            eleifend nisl id nisi interdum porttitor.
          </p>
        </div>
      </div>
      <img src="/maid-simple-2.png" alt="" className="w-full h-screen" />
    </div>
  );
};

export default CaseStudy;
