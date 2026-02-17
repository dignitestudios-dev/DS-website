import React from "react";
import Marquee from "react-fast-marquee";
const img = [
  "/home-hero/marq/1.png",
  "/home-hero/marq/2.png",
  "/home-hero/marq/3.png",
  "/home-hero/marq/4.png",
  "/home-hero/marq/5.png",
  "/home-hero/marq/6.png",
  "/home-hero/marq/7.png",
  "/home-hero/marq/8.png",
  "/home-hero/marq/9.png",
];
const HeroMarquee = () => {
  return (
    <div className="flex flex-col items-center w-[80%] mx-auto my-20">
      <h4 className="text-sm text-[#1F222E] text-center font-semibold">
        Recognized and Trusted by Industry Platforms
      </h4>
      <Marquee loop={0} className="py-8 overflow-hidden">
        {img.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-6 h-16"
          >
            <img
              src={item}
              alt="marq"
              width={100}
              className="object-contain invert"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default HeroMarquee;
