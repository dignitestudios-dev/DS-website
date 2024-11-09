"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import { Contact_Us_Location } from "@/constants/ContactUsLocation";

const HybridAppContactForm = () => {
  const { theme } = useContext(GlobalContext);
  const logosDard = theme === "light" ? "logos" : "logosDark";
  const logos2Classes = theme === "light" ? "logos2" : "logos2Dark";
  return (
    <div className={`w-full  md:p-20  py-10 lg:pb-20 `}>
      <div
        className={`${
          theme === "light" ? "bg-[#F6F6F6]" : "bg-[#2d2d2d]"
        } rounded-[40px] grid grid-cols-1 lg:grid-cols-2 gap-6 p-8  `}
      >
        <div className="lg:pt-3">
          <h2 className="text-3xl font-semibold md:text-4xl lg:text-[62px] 2xl:text-[74px] lg:leading-[78.08px] tracking-tighter text-start my-4">
            Let’s build an <span className="text-[#F15C20]">awesome</span>{" "}
            project together!
          </h2>
          <p
            className={`text-sm md:text-[24px] leading-[30.76px] font-normal text-start lg:w-[95%]`}
          >
            We’d love to learn more about you and what we can design and build
            together.
          </p>
          <div className="mt-10 ">
            <ul>
              {Contact_Us_Location.map((item, i) => (
                <li className="flex items-center gap-2 mt-5 " key={i}>
                  <div className="h-12 w-12 bg-[#6C6C6C14] rounded-full  flex items-center justify-center">
                    <img src="/Location.webp" alt="location-icon" />
                  </div>
                  <div className={"w-full"}>
                    <h2 className="text-[14px] font-[500] leading-[16.94px] ">
                      {item.title}
                    </h2>
                    <p className="text-[12px] font-[400] leading-[15.6px] mt-2 ">
                      {item.location}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default HybridAppContactForm;
