"use client"
import React from "react";

const Platforms = () => {
  return (
    <div className="flex flex-col items-center w-full my-20">
      <h4 className="text-sm text-[#1F222E] text-center font-semibold">
       Recognized and Trusted by Industry Platforms 
      </h4>
      <div className="flex justify-center gap-16 items-center mt-8 lg:flex-row flex-col ">
        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
          <img
            src={`/location/mobile-california/icons/${num}.png`}
            alt={`Logo ${num}`}
            className=" grayscale "
          />
        ))}
      </div>
    </div>
  );
};

export default Platforms;
