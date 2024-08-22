"use client";
import Link from "next/link";
import React, { useContext } from "react";
import UxUiAnimation from "./UxUiAnimation";
import { GlobalContext } from "@/context/GlobalContext";

const ExclusiveAndroid = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-16 lg:py-20 flex flex-col items-center gap-4 global-padding-horizontal">
      <div className="flex flex-col items-center">
        <span className="text-[#F15C20] text-[20px] font-bold uppercase">
          exclusive android
        </span>
        <img
          src="/exclusive-android-lines.png"
          alt="android app design services"
          title="android app design services"
          className="w-[203px]"
        />
      </div>
      <h2 className="headings-size text-center">
        Mobile App Design <br /> Services
      </h2>
      <p className="text-[18px] leading-[26.46px] tracking-[-1.8%] lg:w-[55%] text-center">
        Focusing on our definite approach and unwavering efforts to craft
        phenomenal Android mobile screens. Our well-qualified and experienced
        designers deliver ever-evolving custom designs to create user-friendly
        interfaces that stand out globally.
      </p>

      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-x-10 gap-y-6">
        <div
          className={`w-full lg:w-[520px] h-[528px] rounded-[24px] flex flex-col gap-2 shadow-xl p-3 ${
            theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
          }`}
        >
          <img
            src="/Android-Mobile-App-Design-Consultancy-image.webp"
            className="w-full lg:w-[520px] h-[272px] pt-2 object-cover rounded-t-[24px]"
            alt="Android Mobile App Design page shows a person’s hand writing on a paper to conduct Android mobile app consultancy"
            title="Android Mobile App Design Consultancy image"
          />
          <h3 className="text-[18px] font-semibold">Design Consultancy</h3>
          <p className="font-normal text-sm leading-[19.74px]">
            This refers to the expert guidance to evaluate Android mobile design
            aesthetically to function exceptionally in a profound manner as per
            the client's exigencies. They work closely with professionals to
            roadmap successful solutions for your mobile apps. We lay
            constructive methodologies for Android app designs, exceptional user
            experience, interface design, and visual features to rank your
            Android app rapidly.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full lg:w-[480px] text-center py-3.5 mt-1 rounded-[16px] font[700] text-[16px] text-white"
          >
            Start your project
          </Link>
        </div>
        <div
          className={`w-full lg:w-[520px] h-[528px] rounded-[24px] flex flex-col gap-2 shadow-xl p-3 ${
            theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
          }`}
        >
          <div className="w-full h-[272px] flex items-center justify-center gap-x-4 bg-[#F9FAFA] rounded-t-[24px] overflow-hidden">
            <img
              src="/Android-UXUI-Design-image-1.webp"
              alt="three mock screens of Android UI\UX design"
              className="w-[78px] h-[151px] md:w-[98px] md:h-[201px] z-0 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative animated-image-up"
              title="Android UX\UI Design image"
            />
            <img
              src="/Android-UXUI-Design-image-2.webp"
              alt="three mock screens of Android UI\UX design"
              className="w-[78px] h-[151px] md:w-[98px] md:h-[201px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down2 hidden lg:block"
              title="Android UX\UI Design image"
            />
            <img
              src="/Android-UXUI-Design-image-3.webp"
              alt="three mock screens of Android UI\UX design"
              className="w-[78px] h-[151px] md:w-[98px] md:h-[201px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down"
              title="Android UX\UI Design image"
            />
          </div>
          <h3 className="text-[18px] font-semibold">UX/UI Design</h3>
          <p className="font-normal text-sm leading-[19.74px]">
            Consistency is a key to increase the effectiveness of the Android
            app. The act of designing user interfaces that easily interact on a
            wider scale is known as an outstanding Android app design. The top
            UI and UX specialists of Dignite Studios present ideal mobile app
            services to prioritize product visibility and credibility to attract
            users and consumers.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full lg:w-[480px] text-center py-3.5 mt-6 rounded-[16px] font[700] text-[16px] text-white"
          >
            Start your project
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-x-10 gap-y-6">
        <div
          className={`w-full lg:w-[520px] h-[528px] rounded-[24px] flex flex-col gap-2 shadow-xl p-3 ${
            theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
          }`}
        >
          <img
            src="/Android-App-Branding-Services-image.webp"
            className="w-[520px] h-[272px] pt-2 object-cover rounded-t-[24px]"
            alt="the image shows the resource material on the table for the branding framework"
            title="Android App Branding Services image"
          />
          <h3 className="text-[18px] font-semibold">Branding</h3>
          <p className="font-normal text-sm leading-[19.74px]">
            It plays a significant role in enhancing the representation of the
            brand's identity and its usefulness across multiple platforms that
            resonate with your target audience. Our powerful Android app design
            team works persistently to rank Android app UI\UX design among the
            top mobile competencies.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full lg:w-[480px] text-center py-3.5 mt-6 rounded-[16px] font[700] text-[16px] text-white"
          >
            Start your project
          </Link>
        </div>
        <div
          className={`w-full lg:w-[520px] h-[528px] rounded-[24px] flex flex-col gap-2 shadow-xl p-3 ${
            theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
          }`}
        >
          <img
            src="/Android-Motion-Design-Services-image.gif"
            className="w-full lg:w-[520px] h-[272px] pt-2 object-cover rounded-t-[24px]"
            alt="Android Motion Design Services image"
            title="Android Motion Design Services image"
          />

          <h3 className="text-[18px] font-semibold">Motion Design</h3>
          <p className="font-normal text-sm leading-[19.74px]">
            Adding some flavourful features and high-end specifications to
            capture attention and enhance the overall user experience of the
            Android app. Dignite’s professional Android UI designers build
            intuitive app layouts to provide Android app designs with
            transparent navigation, high functionality, and an eminent user
            interface. Here, our Android app design company creates sleek
            designs to maintain the app's worth.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full lg:w-[480px] text-center py-3.5 mt-1 rounded-[16px] font[700] text-[16px] text-white"
          >
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveAndroid;
