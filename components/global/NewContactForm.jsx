"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ContactForm from "./ContactForm";

const NewContactForm = () => {
  const { theme } = useContext(GlobalContext);
  const logosDard = theme === "light" ? "logos" : "logosDark";
  const logos2Classes = theme === "light" ? "logos2" : "logos2Dark";
  return (
    <div className="w-full global-padding-horizontal py-10 lg:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="lg:pt-3">
        <h2 className="text-3xl font-semibold md:text-4xl lg:text-[62px] 2xl:text-[74px] lg:leading-[78.08px] tracking-tighter text-start my-4">
          Let’s build an <span className="text-[#F15C20]">awesome</span> project
          together!
        </h2>
        <p
          className={`text-sm md:text-[24px] leading-[30.76px] font-normal text-start lg:w-[95%]`}
        >
          We’d love to learn more about you and what we can design and build
          together.
        </p>
        <div className={`w-full mx-auto ${logosDard} flex mt-3`}>
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
                src="/swift-icon.png"
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
                src="/vue-icon.png"
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
                src="/react-icon.png"
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
                src="/illustrator-icon.png"
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
                src="/tailwind-icon.png"
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
                src="/swift-icon.png"
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
                src="/vue-icon.png"
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
                src="/react-icon.png"
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
                src="/illustrator-icon.png"
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
                src="/tailwind-icon.png"
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
                src="/swift-icon.png"
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
                src="/vue-icon.png"
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
                src="/react-icon.png"
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
                src="/illustrator-icon.png"
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
                src="/tailwind-icon.png"
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
                src="/swift-icon.png"
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
                src="/vue-icon.png"
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
                src="/react-icon.png"
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
                src="/illustrator-icon.png"
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
                src="/tailwind-icon.png"
                alt="tehcnology-icon"
                loading="lazy"
                className="w-[22px] h-[22px]"
              />
              <p className="text-[18px] font-medium">Tailwind</p>
            </div>
          </dv>
        </div>

        <div className={`w-full mx-auto ${logos2Classes} flex`}>
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
                loading="lazy"
                className="w-[22px] h-[22px]"
              />
              <p className="text-[18px] font-medium">Visual Studio</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </div>
  );
};

export default NewContactForm;
