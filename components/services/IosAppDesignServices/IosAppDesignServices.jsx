"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const IosAppDesignServices = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section className="w-full py-16 lg:py-20 flex flex-col items-center gap-4 global-padding-horizontal">
      <div className="flex flex-col items-center">
        <span className="text-[#F15C20] text-[20px] font-bold uppercase">
          State-Of-The-Art
        </span>
        <img
          src="/exclusive-android-lines.png"
          alt="android app design services"
          className="w-[203px]"
        />
      </div>
      <h2 className="headings-size text-center">
        iOS App Design <br /> Services
      </h2>
      <p className="text-[18px] leading-[26.46px] tracking-[-1.8%] lg:w-[55%] text-center">
        We create app designs that combine modern design aesthetics with user
        experience research to deliver outstanding app experiences for your
        users. Tailored to your brand and industry, our UI/UX app design
        services will help you drive user engagement and gain customer loyalty.
      </p>

      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-x-10 gap-y-6">
        <div
          className={`w-full lg:w-[520px] h-auto md:h-[592px] rounded-[24px] flex flex-col gap-2 shadow-xl p-3 ${
            theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
          }`}
        >
          <img
            src="/Android-Mobile-App-Design-Consultancy-image.webp"
            className="w-full lg:w-[520px] h-[272px] pt-2 object-cover rounded-t-[24px]"
            alt="Android Mobile App Design page shows a person’s hand writing on a paper to conduct Android mobile app consultancy"
          />
          <h3 className="text-[18px] font-semibold">
            Modernized Design Consultancy
          </h3>
          <p className="font-normal text-sm leading-[19.74px]">
            Get recommendations on your exclusive Apple projects and scale your
            app store with modern app features, user experience, design, and
            appealing user interface. Design consultancy helps to roadmap the
            right path to your app idea, particularly to dispense highly
            intuitive iPhone app design and engender top business growth. Our
            app design company prioritizes consumer demands holding
            sprint-centric methodologies to ignite innovation and drive
            progression to your core business. We always set new standards to
            revolutionize your iOS app store in cosmic waves of digital
            ventures.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full lg:w-[480px] text-center py-3.5 mt-1 rounded-[16px] font[700] text-[16px] text-white"
          >
            Start your project
          </Link>
        </div>
        <div
          className={`w-full lg:w-[520px] h-auto md:h-[592px] rounded-[24px] flex flex-col gap-2 shadow-xl p-3 relative ${
            theme === "dark" ? "bg-[#2d2d2d]" : "bg-white"
          }`}
        >
          <div className="w-full h-[272px] flex items-center justify-center gap-x-4 bg-[#F9FAFA] rounded-t-[24px] overflow-hidden">
            <img
              src="/Android-UXUI-Design-image-1.webp"
              alt="three mock screens of Android UI\UX design"
              className="w-[78px] h-[151px] md:w-[98px] md:h-[201px] z-0 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative animated-image-up"
            />
            <img
              src="/Android-UXUI-Design-image-2.webp"
              alt="three mock screens of Android UI\UX design"
              className="w-[78px] h-[151px] md:w-[98px] md:h-[201px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down2 hidden lg:block"
            />
            <img
              src="/Android-UXUI-Design-image-3.webp"
              alt="three mock screens of Android UI\UX design"
              className="w-[78px] h-[151px] md:w-[98px] md:h-[201px] z-20 p-3 maintenance-mockup-shadow bg-white rounded-3xl relative -top-5 animated-image-down"
            />
          </div>
          <h3 className="text-[18px] font-semibold">High-End UX/UI Design</h3>
          <p className="font-normal text-sm leading-[19.74px]">
            Apple has a unique and delusional form of design strategy to make
            the iOS app store up-to-date with the latest hi-tech design
            formations and procedures. Here, our iOS app designers value
            consistency in crafting highly intrinsic apps to stand out among
            global businesses. Our iPhone app design process corresponds with
            top Apple layouts to develop easy-to-use interfaces to hook large
            audiences promptly.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full mx-auto block lg:w-[480px] text-center py-3.5 static md:absolute bottom-6 rounded-[16px] font[700] text-[16px] text-white"
          >
            Start your project
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-center items-start gap-x-10 gap-y-6 mt-6">
        <div
          className={`w-full lg:w-[520px] h-[592px] relative rounded-[24px] flex flex-col gap-2 shadow-xl p-3 ${
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
            There is fierce competition to develop attractive motion designs in
            the leading tech industries as it is the highest captivating format
            to attract users on a larger scale. It harbors powerful and
            essential tools to communicate with consumers or clients
            effectively. Our top iPhone app design team uses multiple graphic
            combinations to induce graphical elements in an app. We value our
            consumers to drive high iOS mobile app revenue in the international
            market.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full block mx-auto lg:w-[480px] text-center py-3.5 mt-1 rounded-[16px] font[700] text-[16px] text-white static md:absolute bottom-6"
          >
            Start your project
          </Link>
        </div>
        <div
          className={`w-full lg:w-[520px] h-auto md:h-[592px] relative rounded-[24px] flex flex-col gap-2 shadow-xl p-3 ${
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
            Experience a new realm of branding an app that resonates with your
            in-app structure and envisions an upgraded iOS app branding strategy
            to revamp your Apple platform dynamically. The top-notch iPhone app
            design company Dignite Studios establish exceptional iPhone app
            design to represent your product’s identity on a vast platform
            significantly.
          </p>
          <Link
            href={"/contact-us"}
            className="bg-[#F15C20] w-full block mx-auto lg:w-[480px] text-center py-3.5 mt-1 rounded-[16px] font[700] text-[16px] text-white static md:absolute bottom-6"
          >
            Start your project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IosAppDesignServices;
