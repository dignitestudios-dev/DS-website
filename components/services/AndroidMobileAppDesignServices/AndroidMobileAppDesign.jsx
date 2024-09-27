import ContactButton from "@/components/global/ContactButton";
import { ANDROID_MOBILE_APP_DESIGN } from "@/constants/AndroidMobileAppDesign";
import React from "react";

const AndroidMobileAppDesign = () => {
  return (
    <section className="w-full py-16 lg:py-20 global-padding-horizontal">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-y-6">
        <div className="col-span-3 lg:col-span-2">
          <h2 className="headings-size mt-2">
            <span className="uppercase font-bold text-xl text-[#8F8F8F] block tracking-normal mb-2">
              Dignite’s Extravagant
            </span>
            <span className="text-[#F15C20]">Android </span>Mobile App Design
          </h2>
          <p className="text-lg font-normal mt-4">
            The high-end Android mobile app design service scope lies in
            strategizing project flow with proficiency and addressing complex
            structures of UI/UX designs of Android apps. We’ve developed a
            streamlined technical flow to accommodate the key challenges of our
            clients promptly.
          </p>
        </div>
        <div className="col-span-3 lg:col-span-1 flex justify-center items-start lg:pt-4 lg:justify-end">
          <div className="lg:mt-6">
            <ContactButton text1={"Start Your Project"} text2={"Let's talk"} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 mt-10">
        {ANDROID_MOBILE_APP_DESIGN.map((android, index) => {
          return (
            <div className="flex flex-col items-start gap-2" key={index}>
              <div className="w-[48px] h-[48px] bg-[#F15C2014] rounded-[12px] flex items-center justify-center">
                <img
                  src={android.image_src}
                  alt={android.image_alt}
                  className="w-[24px] h-[24px]"
                />
              </div>
              <h3 className="text-[24px] font-semibold tracking-[-1.4%]">
                {android.title}
              </h3>
              <p className="text-sm leading-[19.74px]">{android.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AndroidMobileAppDesign;
