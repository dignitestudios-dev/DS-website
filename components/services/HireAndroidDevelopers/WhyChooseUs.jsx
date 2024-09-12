"use client";
import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const WhyChooseUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`py-10 lg:py-20 px-4 md:px-12 lg:px-28 xl:px-[120px] 2xl:px-48  text-center`}
    >
      <h2
        style={{
          color: theme == "dark" ? "#fff" : "#0c0c0c",
        }}
        className={`uppercase text-4xl lg:text-5xl xl:text-[58px] 2xl:text-[74px] tracking-tighter font-bold mb-2 lg:mb-8`}
      >
        why choose us
      </h2>

      <p className="text-base lg:leading-[21.76px] lg:w-[50%] mx-auto lg:text-center mb-6">
        Engage with top Android app developers to improve your app performance,
        app functionality and enable streamlined processes of your Android app.
        Experience our top Android UI/UX design service to know why Android has
        shaped a large spectrum internationally.
      </p>

      <div className="mt-7 py-2 grid grid-cols-1 gap-2  md:grid-cols-2 lg:grid-cols-3 md:grid-rows-3 lg:grid-rows-2 lg:gap-2 2xl:gap-6">
        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={
              "/hire-android-app-developer-rigorous-vetting-process-icon.webp"
            }
            alt={"hire android app developer rigorous vetting process icon"}
            title={""}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Rigorous Vetting Process
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Hire dedicated Android app developers to build your Android app
            project with profound concentration and systematic structure.
            Whether it is a complex app, medium complex app, standard app, or
            existing app, our Android app developers create it constructively as
            user-friendly apps to meet the client's app requirements.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/android-app-developer-application-customization-icon.webp"}
            alt={"android app developer application customization icon"}
            title={""}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Application Customization
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Dignite’s top Android app developers spawn illustrious custom
            Android application development to thrive your Android app with
            revolutionary growth. Our Android UI/US design service imparts the
            finest app solutions to more user engagements and profitable leads.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/android-app-developer-uniform-hiring-process-icon.webp"}
            alt={"android app developer uniform hiring process icon"}
            title={""}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Uniform Hiring Process
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            We contribute swiftly to help you assess skilled Android developers
            that enable your streamlined app processes with quick and effective
            deliveries within the allocated time frame. Hire Android developers
            to ease your development processes in a real quick time.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/flexible-android-app-developer-engagement-models-icon.webp"}
            alt={"flexible android app developer engagement models icon"}
            title={""}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Flexible App Engagement Models
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Here you can hire a team of full-time app developers, a
            project-based Android app developer or you can even hire remote
            Android developers of Dignite Studios to develop an Android app with
            significant techniques. Our user-centric development approach to
            build an app will enhance business capabilities and competencies to
            the next level.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/cost-effective-android-app-solutions-icon.webp"}
            alt={"cost effective android app solutions icon"}
            title={""}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Cost-Effective App Solutions
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Leverage offshore development with budget-friendly app publishing
            with dedicated android app developers of Dignite Studios. We provide
            quality assurance, meeting industry standards while developing the
            app. Hire Android app developers to benefit from technical
            challenges and perplexities.
          </p>
        </div>

        <div
          className="border lg:border-none border-[#F15C20]  rounded-3xl lg:rounded-none flex flex-col justify-start items-center gap-y-4 p-4 md:px-4 lg:px-8 md:py-3"
          style={{
            color: palette?.color,
          }}
        >
          <img
            src={"/android-app-developer-tremendous-app-support-icon.webp"}
            alt={"android app developer tremendous app support icon"}
            title={""}
            className=""
            width="36px"
            height="36px"
          />
          <h3
            className="text-xl  font-semibold"
            style={{ color: theme == "dark" ? "#fff" : "#0c0c0c" }}
          >
            Tremendous App Support
          </h3>
          <p
            className="text-xs text-center font-normal leading-[16.14px] tracking-wider "
            style={{
              color: "#8F8F8F",
            }}
          >
            Android supports smooth app architecture, high-performing app
            functionalities, and quick deliveries keep your project on track.
            Further apps can be maintained through the latest trends and
            approaches.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
