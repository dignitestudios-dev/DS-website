'use client'

import React, { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";

const LandingContactUs = () => {
  const { palette, theme } = useContext(GlobalContext);
  return (
    <div
      className={`w-full lg:w-[70%] my-5 px-4 md:px-12 lg:px-28 flex justify-center items-start  h-auto`}
    >
      <div
        className={`w-full h-auto grid grid-cols-1 lg:grid-cols-2 rounded-3xl ${theme == "light" ? "bg-[#E7E7E7]/[0.24]" : "bg-[#2D2D2D]"
          }`}
      >
        <div className="w-full h-full">
          <img
            src={"/cto.png"}
            className="w-full h-full rounded-3xl lg:rounded-none"
          />
        </div>
        <div className="w-full h-full flex px-8 py-10 flex-col justify-start items-start gap-8">
          <h1
            className="text-[32px] font-bold"
            style={{ color: palette?.color }}
          >
            Let’s start your project
          </h1>
          <div className="w-full h-auto flex flex-col justify-start items-start gap-6">
            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Name
              </span>
              <input
                type="text"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Mike Smith"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Email
              </span>
              <input
                type="email"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="e.g John@gmail.com"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>
            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Phone Number
              </span>
              <input
                type="text"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="e.g 0491 570 156"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-1 justify-start items-start">
              <span
                className="text-sm font-medium"
                style={{ color: palette?.color }}
              >
                Message
              </span>
              <input
                type="text"
                className="w-full  outline-none focus h-9 bg-transparent "
                placeholder="Enter your message here"
                style={{
                  borderBottom: `2px solid ${palette?.dark_contrast_color}`,
                }}
              />
            </div>

            <button
              name="submit-contact-us-form"
              className="orange w-[134px] h-[64px] rounded-full flex items-center font-semibold justify-center"
              style={{ background: palette?.brandOrange, color: "white" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingContactUs;
