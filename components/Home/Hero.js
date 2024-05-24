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
      <span
        className="capitalize text-center text-[16px] font-medium "
        style={{
          color: theme == "dark" ? "#B4B4B4" : "#8F8F8F",
        }}
      >
        mobile & Web app development agency
      </span>
      <h1
        style={{
          color: palette?.color,
        }}
        className="text-[1.8rem] lg:text-6xl xl:text-[68px] font-semibold xl:font-bold text-center capitalize"
      >
        Elevate your brand in the <br />
        <span
          id="typewriter-effect"
          style={{
            color: palette?.brandOrange
          }}
          className={`typing-demo text-[2rem] lg:text-6xl xl:text-[68px] font-semibold xl:font-bold text-center lg:text-left  leading-normal `}
        >
        </span>
      </h1>
      <span
        style={{
          color: theme == "dark" ? "#B4B4B4": "#5c5c5c",
        }}
        className=" text-center my-2 lg:my-6 text-[14px] lg:text-[18px] font-normal"
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
        <a
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
        </a>
      </div>
    </div>
  );
};

export default Hero;
