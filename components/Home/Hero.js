"use client";
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import ContactButton from "../global/ContactButton";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);
  useEffect(() => {
    const dynamicText = document.getElementById("typewriter-effect");
    const words = [
      "Digital Cosmos",
      "Techno Galaxy",
      "Digital World",
      "App Universe",
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");

      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
      } else {
        // Check if word is fully typed and wait for 1 second before starting to delete
        if (!isDeleting) {
          setTimeout(() => {
            isDeleting = true;
            setTimeout(typeEffect, 100);
          }, 1000);
        } else {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeEffect, 100);
          dynamicText.classList.remove("stop-blinking");
        }
      }
    };
    typeEffect();
  }, []);
  return (
    <div className="w-full  flex flex-col pt-2 md:pt-10  gap-4 justify-start items-center">
      <h1
        className="capitalize text-center text-[16px] 2xl:text-[20px] font-medium "
        style={{
          color: theme == "dark" ? "#B4B4B4" : "#8F8F8F",
        }}
      >
        Top mobile app development company
      </h1>
      <h2
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px]"
      >
        Elevate your brand in the <br />
        {/* <span className="text-[#F15C20]">Digital Cosmos</span> */}
        <span
          id="typewriter-effect"
          style={{
            color: palette?.brandOrange,
          }}
          className={`typing-demo text-[2rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold text-center lg:text-left  leading-normal `}
        ></span>
      </h2>
      <span
        style={{
          color: theme == "dark" ? "#B4B4B4" : "#5c5c5c",
        }}
        className=" text-center my-2 lg:my-6 text-[14px] lg:text-[18px] 2xl:text-[20px] font-normal"
      >
        Creating seamless app experiences. Transforming your ideas{" "}
        <br className="hidden lg:block" /> into exceptional mobile app
        solutions.
      </span>
      <div className="w-auto flex gap-2 md:gap-4 justify-center items-center">
        <Link
          href="/contact-us"
          className="bg-[#F15C20] orange text-white rounded-[14px] text-center hover:opacity-90  shadow-xl shadow-[#F15C20]/[0.3] py-8 px-20 md:px-24 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden text-sm md:text-[15px]"
        >
          {/* First text */}
          <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            Schedule a meeting
          </span>

          {/* Second text */}
          <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            Let's talk
          </span>
        </Link>

        <a
          href={"tel:+18777141770"}
          name="call-us"
          className={`${
            theme === "light"
              ? "bg-[#0C0C0C14] text-[#000]"
              : "bg-[#2d2d2d] text-white"
          }  hover:text-white text-sm md:text-[15px] font-semibold text-center py-8 px-20 md:px-24 hover:bg-black transition-all duration-300 relative group inline-block overflow-hidden rounded-[14px]`}
        >
          {/* First text */}
          <span className="absolute inset-0 flex items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:-translate-y-full">
            Get a free quote
          </span>

          {/* Second text */}
          <span className="absolute inset-0 flex items-center justify-center transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0">
            Let's talk
          </span>
        </a>
      </div>
    </div>
  );
};

export default Hero;
