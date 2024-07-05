"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const Technologies = () => {
  const { theme } = useContext(GlobalContext);
  const logosDard = theme === "light" ? "logos" : "logosDark";
  const logos2Classes = theme === "light" ? "logos2" : "logos2Dark";
  return (
    <section className="w-full global-padding-horizontal py-12">
      <h1 className="text-3xl md:text-5xl lg:text-[64px] lg:leading-[77.45px] font-bold tracking-tighter uppercase my-6 text-center">
        Technologies we are using
      </h1>
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

export default Technologies;
