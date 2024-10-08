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
      className={`px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48 flex flex-col gap-6 justify-start items-start w-full my-6 md:my-12 lg:my-20 ${
        theme === "light" ? "bg-[#F9F9F9]" : "bg-transparent"
      } py-16`}
    >
      <div className="w-full flex items-center justify-between">
        <h2
          className={`${
            theme === "dark" ? "text-white" : "text-black"
          } headings-size xl:w-[75%]`}
        >
          benefits of working with <br /> dignite studios
        </h2>
        <div className="hidden xl:block">
          <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
        </div>
      </div>

      <div
        className={`border w-full my-4 ${
          theme === "light" ? "border-[#E7E7E7]" : "border-gray-500"
        }`}
      />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/orange-mobile-app-development-project-outlook-icon.webp"
              alt="Mobile App Development Service Project Outlook Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Project Outlook</h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            Dignite Studios eradicates all risk factors including incomplete
            business requirements, unrealistic client expectations, and conducts
            in-depth interviews concerning value-added improvements in the
            process, resources, and clear workflow to conduct the projects. We
            aim to meet project dimensions, milestones, and fast development in
            the given period. We’ve established hundreds of successful mobile
            app development projects by promising clients’ obligations. 
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/orange-mobile-app-development-collaboration-icon.webp"
              alt="Mobile App Development Service collaboration icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Collaboration</h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            Mobile apps we develop with proper research and interpretation to
            cater to in-depth project flow. Also, we contribute to collaborate
            frequently with the client to provide all the updates in the app's
            development process. 
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/orange-mobile-app-development-cost-estimation-icon.webp"
              alt="Mobile App Development Service Cost estimation App Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Cost Estimation</h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            Explore a wide range of factors that include creating mobile
            development effectively and under time constraints with our{" "}
            <Link
              href={"/services/hire-mobile-app-developers"}
              className="text-orange-600"
            >
              mobile app developers.
            </Link>{" "}
            Therefore, development costs vary from project to project, however
            clear and precise project estimation can help to build accurate
            mobile project planning by covering all its variables. We also
            analyze various complexities of the apps before moving it further.  
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/orange-mobile-app-development-service-risk-management-icon.webp"
              alt="Mobile App Development Service Risk Management Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Risk Management</h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            For client convenience, we conduct initial project risk analysis in
            creating mobile apps to identify several potential threats, root
            causes, operational, technology, business, and internal or external
            factors of the project. Likewise, our mobile developers establish a
            monitoring program to check its intensity through risk management
            tools. And, that’s how we establish a proper mobile solution for our
            consumers.
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <img
              // loader={customLoader}
              // loading="lazy"
              width={19}
              height={20}
              src="/orange-mobile-app-development-project-documentation-icon-1.webp"
              alt="Mobile App Development Project Documentation Icon"
            />
          </div>

          <h3 className={`text-3xl font-semibold`}>Project Documentation</h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            With years of expertise in the field of software and mobile
            services, we put a serious approach towards app solutions and
            software documentation in any circumstance whether scarcity or
            abundance. From xAI logic disclosure to tokenomics of crypto white
            paper we cater to all needs that differ from each project of mobile
            solution. It also helps to avoid any project negligence, unethical
            conduct, misunderstanding, and improper cost evaluation. Therefore,
            we offer mobile app efficiency and streaming of the app evaluation
            in the development process of web and mobile applications. 
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/orange-mobile-app-development-service-reporting-icon.webp"
              alt="Mobile App Development Service Reporting Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Reporting</h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            Our mobile app development platform assures full-fledged mobile app
            reports in terms of all basic categories like health project
            reports, time tracking reports, variance reports, build bound test
            reports, regression test reports, code app reports, security and
            audit reports to ensure full-transparency and consistency of the
            on-going project. 
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <img
              // loader={customLoader}
              // loading="lazy"
              width={24}
              height={24}
              src="/orange-mobile-app-development-service-post-launch-icon-1.webp"
              alt="Mobile App Development Service Post-launch Icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>Post Launch</h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            At Dignite Studios, we implement a productive testing process before
            the launch of a full cycle of application design, features, and
            development. We fix all the major errors that affect the credibility
            of the mobile application. 
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "bg-white" : "bg-[#2d2d2d]"
          } p-6 rounded-3xl flex flex-col items-start gap-4`}
        >
          <div className="h-12 w-12 bg-[#F15C20] rounded-xl icon_shadow flex items-center justify-center">
            <Image
              loader={customLoader}
              loading="lazy"
              width={24}
              height={24}
              src="/orange-mobile-app-development-change-request-management-icon.webp"
              alt="mobile app development change request management icon"
            />
          </div>
          <h3 className={`text-3xl font-semibold`}>
            Change Request Management
          </h3>
          <p
            className={`text-sm font-normal ${
              theme === "light"
                ? "text-[#424242]"
                : "text-white leading-[19.74px]"
            }`}
          >
            Our mobile app development services offer full-time{" "}
            <Link
              href={
                "/services/mobile-application-support-and-maintenance-services"
              }
              className="text-orange-600"
            >
              {" "}
              mobile app maintenance and support
            </Link>{" "}
            to improve and update software according to your mobile app.
          </p>
        </div>
      </div>

      <div className="xl:hidden mt-6 w-full flex justify-center">
        <Link
          href={"/contact-us"}
          className={`px-6 py-5 xl:py-8 xl:px-[26px] border border-[#F15C20] text-[#F15C20] hover:text-white ${
            theme === "light" ? "bg-[#F9F9F9]" : "bg-[#222222]"
          } hover:bg-[#F15C20] transition-all duration-300 rounded-full text-xl font-medium`}
        >
          Let's Start Your Project
        </Link>
      </div>
    </section>
  );
};

export default BenefitsOfWorking;
