'use client'

import React from "react";

const Slider = () => {
  return (
    <div className="scroller__inner w-screen my-8 flex items-center gap-4 justify-start h-[250px] lg:h-[354px] ">
      <img
        src={"/design-1.png"}
        className="w-[450px] lg:w-[510px] h-[250px] lg:h-[320px]"
      />
      <img
        src={"/design-2.png"}
        className="w-[450px] lg:w-[510px] h-[250px] lg:h-[320px]"
      />
      <img
        src={"/design-3.png"}
        className="w-[450px] lg:w-[510px] h-[250px] lg:h-[320px]"
      />
    </div>
  );
};

export default Slider;
