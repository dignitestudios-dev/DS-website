"use client";
import ContactButton from "@/components/global/ContactButton";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

const BenefitsOfWorking = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <section
      className={`px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:my-20 ${theme === "light" ? "bg-[#F9F9F9]" : "bg-transparent"
        } py-16`}
    > <section className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">

        <div className="col-span-3 lg:col-span-2">
          <h2>
            <span className={'text-[#8F8F8F] font-[700] text-[20px]'} >END-TO-END</span><br />
            <span className="text-[#F15C20] text-4xl lg:text-6xl xl:text-[68px] 2xl:text-[94px] font-bold tracking-tighter text-start lg:leading-[71.93px] 2xl:leading-[99px] z-10"> Hybrid App</span><br />
            <span className="font-bold lg:font-extrabold text-4xl lg:text-5xl xl:text-[64px] 2xl:text-[80px] tracking-tighter xl:font-bold lg:leading-[77px]" >  Development Services</span>
          </h2>
          <p className="text-lg font-normal mt-4">
            Our revolutionary hybrid app development services bestow
            a well-organized structure to build entirely customized
            hybrid mobile apps that are highly compatible with various
            devices. Dignite’s hybrid mobile app developers construct
            high-powered hybrid software that suits business needs.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-start items-center lg:justify-end">
          <div className="lg:mt-6">
            <ContactButton text1={"Hire Now"} text2={"Let's talk"} />
          </div>
        </div>
      </section>

      <div
        className={` w-full my-4 ${theme === "light" ? "border-[#E7E7E7]" : "border-gray-500"
          }`}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/progressive-web-app-development-services-icon.png"
              alt="Mobile App Development Service Hybrid App Design Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Hybrid App Design</h3>
          <p
            className={`text-sm font-normal ${theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
              }`}
          >
            A hybrid platform designs a unique mechanism under a
            single codebase to make hybrid mobile applications
            accessible on multiple devices like Android or iOS.
            Our hybrid app development company plans initial consultation
            while developing applications. The professional hybrid developers
            of Dignite Studios ensure a visually pleasing user interface, modern
            application features, and high-end app performance to stand
            among profitable companies.
          </p>
        </div>
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/application-shell-architecture.png"
              alt="Mobile App Development Service collaboration icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Migration and Upgrade</h3>
          <p
            className={`text-sm font-normal ${theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
              }`}
          >
            Refactoring the codebase with new compatible versions of frameworks
            to integrate with updated tech stack and features of hybrid app
            development to make the operating system up-to-date. At Dignite Studios,
            our skillful team holds best practices to refurbish the app with
            updated functions or features to strengthen and elevate the usability
            of the hybrid mobile app. Therefore, it helps to accomplish desired
            goals and profitable results.
          </p>
        </div>
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/progressive-pwa-migration-icon.png"
              alt="Mobile App Development Service Cost estimation App Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Hybrid Application Testing</h3>
          <p
            className={`text-sm font-normal ${theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
              }`}
          >
            The testing process of a hybrid platform is an
            essential element of the development phase. It
            safeguards the hybrid mobile app from any virus
            or errors. Our hybrid mobile application development
            process immensely contributes to monitor the performance
            of the app and updating it to get high-optimal results.
          </p>
        </div>
        <div
          className={`${theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
            } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C2014] rounded-xl  flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/web-app-consultation.png"
              alt="Mobile App Development Service Risk Management Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Quick Support</h3>
          <p
            className={`text-sm font-normal ${theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
              }`}
          >
            The finest hybrid mobile app development company Dignite
            Studios not only caters to development procedures but also
            maintains them as per the client's requirement. Here we’re
            available 24\7 to assist you and accomplish business objectives
            with a hybrid app development cost effective methodology.
          </p>
        </div>

      </div>

      <div className="xl:hidden mt-6 w-full flex justify-center">
        <Link
          href={"/contact-us"}
          className={`px-6 py-5 xl:py-8 xl:px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${theme === "light" ? "bg-[#F9F9F9]" : "bg-[#222222]"
            } hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
        >
          Let's Start Your Project
        </Link>
      </div>
    </section>
  );
};

export default BenefitsOfWorking;
