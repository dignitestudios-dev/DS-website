"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const Hero = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className="w-full text-center lg:min-h-[100vh] xl:min-h-[80vh] md:pb-20 pt-2 md:pt-10 global-padding-horizontal flex flex-col items-center relative">
      <h1 className="text-[1.8rem] lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-semibold xl:font-bold tracking-tighter text-center capitalize lg:leading-[71.93px] 2xl:leading-[99px] z-10">
        <span className="text-[#F15C20]">Hire</span> Android Developers
      </h1>
      <p
        className={`text-base font-medium mt-6 z-10 ${
          theme === "light" && "text-[#5c5c5c]"
        }`}
      >
        Amplify your applications with our dedicated <br /> Android developer.
      </p>

      <div className="mt-10 z-0">
        <ContactButton text1={"Hire Now"} text2={"Let's talk"} />
      </div>

      <div className="w-full lg:w-[649px] border-[#D3D3D3] relative flex justify-evenly mt-10">
        <div className="w-4 h-4 rounded-full bg-[#D3D3D3] absolute left-0 -top-1" />
        <div className="w-4 h-4 rounded-full bg-[#D3D3D3] absolute right-0 -top-1" />
        <img
          src="/rounded-border-image.png"
          alt="the image shows multiple pictures of different developers"
          title="hire Android App Developers"
          className="w-full absolute top-0 z-0"
        />

        <div className="w-[50px] md:w-[80px] h-auto z-10 relative top-2 md:top-6 lg:top-5 group hover:top-0 transition-all duration-300">
          <img
            src="/hire-android-dev-hero-img-1.png"
            alt="the image shows multiple pictures of different developers"
            title="hire Android App Developers"
            className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-[14px] "
          />
          <span className="text-[#F15C20] font-medium text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
            Flutter Expert
          </span>
        </div>

        <div className="w-[50px] md:w-[82px] h-auto  z-10 relative top-6 md:top-14 lg:top-12 group hover:top-5 transition-all duration-300">
          <img
            src="/hire-android-dev-hero-img-2.png"
            alt="the image shows multiple pictures of different developers"
            title="hire Android App Developers"
            className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-[14px]"
          />
          <span className="text-[#F15C20] font-medium text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
            Python Expert
          </span>
        </div>

        <div className="w-[50px] md:w-[80px] h-auto z-10 relative top-10 md:top-[77px] lg:top-[67px] group hover:top-8 transition-all duration-300">
          <img
            src="/hire-android-dev-hero-img-3.png"
            alt="the image shows multiple pictures of different developers"
            title="hire Android App Developers"
            className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-[14px] "
          />
          <span className="text-[#F15C20] font-medium text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
            Kotlin Expert
          </span>
        </div>

        <div className="w-[50px] md:w-[80px] h-auto z-10 relative top-6 md:top-14 lg:top-12 group hover:top-5 transition-all duration-300">
          <img
            src="/hire-android-dev-hero-img-4.png"
            alt="the image shows multiple pictures of different developers"
            title="hire Android App Developers"
            className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-[14px] "
          />
          <span className="text-[#F15C20] font-medium text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
            Flutter Expert
          </span>
        </div>

        <div className="w-[50px] md:w-[80px] h-auto z-10 relative top-2 md:top-6 lg:top-5 group hover:top-0 transition-all duration-300">
          <img
            src="/hire-android-dev-hero-img-5.png"
            alt="the image shows multiple pictures of different developers"
            title="hire Android App Developers"
            className="w-[50px] md:w-[80px] h-[50px] md:h-[80px] rounded-[14px]"
          />
          <span className="text-[#F15C20] font-medium text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
            Java Expert
          </span>
        </div>
      </div>

      <img
        src="/hire-android-kotlin-icon.png"
        title="hire Android App Developers"
        alt="the image shows multiple pictures of different developers"
        className="w-[120px] h-[120px] hidden lg:block absolute left-[7%] top-[10%] hover:rotate-12 transition-all duration-300"
      />
      <img
        src="/hire-android-flutter-icon.png"
        title="hire Android App Developers"
        alt="the image shows multiple pictures of different developers"
        className="w-[120px] h-[120px] hidden lg:block absolute left-[17%] top-[40%] hover:rotate-12 transition-all duration-300"
      />
      <img
        src="/hire-android-vscode-icon.png"
        title="hire Android App Developers"
        alt="the image shows multiple pictures of different developers"
        className="w-[120px] h-[120px] hidden lg:block absolute left-[7%] bottom-[10%] hover:-rotate-12 transition-all duration-300"
      />

      {/* right icons */}
      <img
        src="/hire-android-icon.png"
        title="hire Android App Developers"
        alt="the image shows multiple pictures of different developers"
        className="w-[120px] h-[120px] hidden lg:block absolute right-[17%] top-[30%] hover:rotate-12 transition-all duration-300"
      />
      <img
        src="/hire-android-react-icon.png"
        title="hire Android App Developers"
        alt="the image shows multiple pictures of different developers"
        className="w-[120px] h-[120px] hidden lg:block absolute right-[7%] bottom-[20%] hover:-rotate-12 transition-all duration-300"
      />
      <img
        src="/hire-android-firebase-icon.png"
        title="hire Android App Developers"
        alt="the image shows multiple pictures of different developers"
        className="w-[120px] h-[120px] hidden lg:block absolute right-[31%] bottom-[2%] hover:-rotate-12 transition-all duration-300"
      />
    </div>
  );
};

export default Hero;
