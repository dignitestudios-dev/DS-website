"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const TechnologiesAndTools = () => {
  const { theme } = useContext(GlobalContext);
  const logosDard = theme === "light" ? "logos" : "logosDark";
  const logos2Classes = theme === "light" ? "logos2" : "logos2Dark";
  return (
    <section className="w-full global-padding-horizontal py-12">
        <div className="w-full flex flex-col items-center justify-center">
            <h1 className="text-[#F15C20] text-xl font-bold uppercase">modern</h1>
            <img src="/lines.png" alt="" className="w-[101px] h-[8px]"/>
        </div>
      <h2 className="headings-size text-center my-4">
      Technology and Tools
      </h2>
      <p className={`txt-[15px] font-normal text-center lg:w-[50%] mx-auto`}>
      We impart cutting-edge tech solutions for your stellar web development projects that deliver exclusive programming languages, frameworks, and libraries that enable us to rank apps with modern web technologies and web development tools.

      </p>
      <div className={`w-full lg:w-[75%] mx-auto ${logosDard} flex mt-3`}>
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
              title="technology-icon"
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
              src="/swift-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/vue-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/react-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/illustrator-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/tailwind-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              title="technology-icon"
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
              src="/swift-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/vue-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/react-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/illustrator-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/tailwind-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              title="technology-icon"
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
              src="/swift-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/vue-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/react-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/illustrator-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/tailwind-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              title="technology-icon"
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
              src="/swift-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/vue-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/react-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/illustrator-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/tailwind-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/photoshop-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/java-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/kotlin-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/firebase-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/visual-studio-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/photoshop-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/java-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/kotlin-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/firebase-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/visual-studio-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/photoshop-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/java-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/kotlin-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/firebase-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/visual-studio-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/photoshop-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/java-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/kotlin-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/firebase-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
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
              src="/visual-studio-icon.png"
              alt="tehcnology-icon"
              title="technology-icon"
              loading="lazy"
              className="w-[22px] h-[22px]"
            />
            <p className="text-[18px] font-medium">Visual Studio</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesAndTools;
