"use client"
import { GlobalContext } from "@/context/GlobalContext";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

const Hero = () => {
  const { palette, theme } = useContext(GlobalContext);
  useEffect(() => {
    const dynamicText = document.getElementById("typewriter-effect");
    const words = ["Digital Cosmos", "Techno Galaxy", "Digital World", "App Universe"];
    // Variables to track the position and deletion status of the word
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeEffect = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      dynamicText.textContent = currentChar;
      dynamicText.classList.add("stop-blinking");
      if (!isDeleting && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 150);
      } else if (isDeleting && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 150);
      } else {
        // If word is deleted then switch to the next word
        setTimeout(typeEffect, 150);
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      }
    }
    typeEffect();
  }, []);
  return (
    <div className="w-full  flex flex-col pt-2 md:pt-10  gap-4 justify-start items-center">
      <span
        className="capitalize text-center text-[18px] font-medium "
        style={{
          color: palette?.light_contrast_color,
        }}
      >
        mobile & Web app development agency
      </span>
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl font-semibold text-center capitalize"
      >
        Elevate your brand in the <br />
        <span
          id="typewriter-effect"
          style={{
            color: palette?.brandOrange
          }}
          className={`typing-demo text-[2rem] lg:text-6xl font-bold text-center lg:text-left  leading-normal `}
        >
        </span>
      </h1>
      <span
        style={{
          color: palette?.dark_contrast_color,
        }}
        className=" text-center my-2 lg:my-6 text-[14px] lg:text-[19px] font-normal"
      >
        Creating seamless app experiences. Transforming your ideas <br className="hidden lg:block" /> into exceptional mobile app solutions.
      </span>
      <div className="w-auto flex gap-4 justify-center items-center">
        <Link href={"/contact-us"}
          name="schedule-a-meeting"
          style={{
            background: palette?.brandOrange,
            color: "white",
          }}
          className="orange w-[150px] lg:w-[206px] h-14 lg:h-16 rounded-full transition-all duration-150 hover:opacity-90  shadow-xl text-sm lg:text-md font-medium shadow-[#F15C20]/[0.3] flex items-center justify-center"
        >
          Schedule a meeting
        </Link>
        <Link
          href={"tel:+18777141770"}
          name="call-us"
          style={{
            border: `2px solid ${palette?.brandOrange}`,
            color: palette?.brandOrange,
          }}
          className="w-[150px] lg:w-[206px] h-14 lg:h-16 rounded-full  transition-all duration-100 hover:scale-105 text-sm lg:text-md font-medium  flex items-center justify-center gap-2"
        >
          <BsFillTelephoneFill />
          <span>+1 877 714 1770</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
