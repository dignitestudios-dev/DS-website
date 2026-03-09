"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const TechnologySlider = () => {
  const { theme } = useContext(GlobalContext);
  const logosDard = theme === "light" ? "logos" : "logosDark";
  const logos2Classes = theme === "light" ? "logos2" : "logos2Dark";
  return (
    <div className="w-full lg:w-[30%] mx-auto   flex flex-col items-center text-center">      
      <div className={`w-full lg:w-[75%] mx-auto ${logosDard} flex`}>
        <dv className={`w-full logos-slide `}>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/flutter-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Flutter</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/swift-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Swift</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/vue-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Vue</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/react-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">React</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/illustrator-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Ilustrator</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/tailwind-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Tailwind</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/flutter-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Flutter</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/swift-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Swift</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/vue-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Vue</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/react-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">React</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/illustrator-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Ilustrator</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/tailwind-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Tailwind</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/flutter-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Flutter</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/swift-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Swift</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/vue-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Vue</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/react-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">React</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/illustrator-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Ilustrator</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/tailwind-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Tailwind</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/flutter-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Flutter</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/swift-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Swift</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/vue-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Vue</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/react-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">React</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/illustrator-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Ilustrator</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/tailwind-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Tailwind</p>
          </div>
        </dv>
      </div>
      <div className={`w-full lg:w-[75%] mx-auto ${logos2Classes} flex`}>
        <div className="w-full logos-slide2">
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/photoshop-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Photoshop</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/java-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Java</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/kotlin-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Kotlin</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/firebase-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Firebase</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/visual-studio-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Visual Studio</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/photoshop-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Photoshop</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/java-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Java</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/kotlin-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Kotlin</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/firebase-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Firebase</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/visual-studio-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Visual Studio</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/photoshop-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Photoshop</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/java-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Java</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/kotlin-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Kotlin</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/firebase-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Firebase</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/visual-studio-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Visual Studio</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/photoshop-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[18px]"
            />
            <p className="text-[18px] font-medium">Photoshop</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/java-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Java</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/kotlin-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Kotlin</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/firebase-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Firebase</p>
          </div>
          <div
            className={`rounded-full flex items-center justify-center gap-2 ${
              theme === "light"
                ? "custom-light-shadow"
                : "custom-light-shadow-dark"
            }`}
          >
            <img
              src="/visual-studio-icon.webp"
              alt="tehcnology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Visual Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySlider;
