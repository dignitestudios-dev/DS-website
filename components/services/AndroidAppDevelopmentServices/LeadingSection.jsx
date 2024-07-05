"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const LeadingSection = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full global-padding-horizontal mt-16">
      <p className={`text-xl font-bold text-[#F15C20] uppercase `}>leading</p>
      <img
        src="/leading-lines.png"
        alt="leading-lines"
        className="w-[86px] h-[8]"
      />
      <h1
        className={`font-extrabold text-3xl lg:text-5xl xl:text-[64px] 2xl:text-[74px] tracking-tighter xl:font-bold uppercase lg:leading-[77.45px]`}
      >
        <span className="">Android App</span> <br /> Development Services
      </h1>
      <p
        className={`lg:w-[70%] leading-[20.4px] text-[15px] my-4 font-normal ${
          theme === "light" && "text-[#2A2A2A]"
        }`}
      >
        The industry-leading Android app development company Dignite Studios
        replenishes the best viable service apps to expedite businesses with
        complementary services, app maintenance, and application monitoring in
        occurrence to secure harmful errors and bugs.
      </p>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 lg:gap-y-16 mt-12">
        <div className="flex flex-col gap-2">
          <Image
            loader={customLoader}
            width={36}
            height={36}
            src={"/custom-android-app-development-services.webp"}
            alt="Custom Android app development services icon"
            title="Custom Android app development services"
            className="w-[36px] h-[33px]"
          />
          <p className="text-[20px] font-semibold mt-2">
            Custom Android App Development
          </p>
          <p
            className={`${
              theme === "light" && "text-[#424242]"
            } text-sm leading-[19.74px]`}
          >
            Dignity Studios has an exceptional team of custom app development
            services who can creatively build your Android app to break through
            your business amplitude to the next level.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            loader={customLoader}
            width={36}
            height={33}
            src={"/Android-tv-app-development-services-icon.webp"}
            alt="Android TV App Development services icon"
            title="Android TV App Development services"
            className="w-[36px] h-[33px]"
          />
          <p className="text-[20px] font-semibold mt-2">
            Android TV App Development
          </p>
          <p
            className={`${
              theme === "light" && "text-[#424242]"
            } text-sm leading-[19.74px]`}
          >
            Our professional Android team can create a highly optimized
            fascinating custom Android app framework that will boost the entire
            layout of the TV application at once.  Also, tend to produce the
            best Android app development solutions to satisfy clients'
            requirements.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            loader={customLoader}
            width={36}
            height={33}
            src={"/android-mobile-app-development-services-icon.webp"}
            alt="Android Mobile App Development Services icon"
            title="Android Mobile App Development Services"
            className="w-[36px] h-[33px]"
          />
          <p className="text-[20px] font-semibold mt-2">
            Android Mobile App Development
          </p>
          <p
            className={`${
              theme === "light" && "text-[#424242]"
            } text-sm leading-[19.74px]`}
          >
            Whether it's a game, wallet, or business application, our Android
            developers are fully equipped with all the knowledge, skills, and
            services required to execute any type of mobile application project.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Image
            loader={customLoader}
            width={36}
            height={33}
            src={"/ android-tablet-app-development-services-icon.webp"}
            alt="Android Tablet App Development Services icon"
            title="Android Tablet App Development Services"
            className="w-[36px] h-[33px]"
          />
          <p className="text-[20px] font-semibold mt-2">
            Android Tablet App Development
          </p>
          <p
            className={`${
              theme === "light" && "text-[#424242]"
            } text-sm leading-[19.74px]`}
          >
            Architectural applications for Android tablets and smartphones are
            very similar, and their operating system also works in the same
            disposition. But they vary in design, user interface, and user
            experience where our services bestow the best developmental
            practices to build unprecedented device sharing, usage context, and
            user demographics for your Android apps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadingSection;
