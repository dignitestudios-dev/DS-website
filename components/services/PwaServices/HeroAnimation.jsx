"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useInView } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const HeroAnimation = () => {
  const [toggle, setToggle] = useState(true);
  const { theme } = useContext(GlobalContext);

  return (
    <div
      className={`w-full ${
        toggle
          ? "bg-[#FAFAFC]"
          : `${theme === "light" ? "bg-[#222222]" : "bg-[#2d2d2d]"}`
      } rounded-[32px] p-4 mt-10`}
    >
      <div
        className={`w-full ${
          toggle ? "bg-white" : "bg-[#494949]"
        } rounded-[28px] p-6 flex flex-col items-start md:flex-row md:items-center justify-between gap-y-4`}
      >
        <div className="flex items-center justify-start gap-2">
          <div
            className={`w-[61px] h-[61px] ${
              toggle ? "bg-[#7D70F814]" : "bg-[#616161]"
            } flex items-center justify-center rounded-full`}
          >
            <img src="/face-icon.png" alt="" className="w-[39px] h-[39px]" />
          </div>
          <div className="flex flex-col items-start">
            <p
              className={`text-[18px] font-semibold ${
                toggle ? "text-black" : "text-white"
              }`}
            >
              Morgan White
            </p>
            <p className={`text-sm font-medium text-[#7D70F8]`}>View Profile</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 float-end w-full md:w-auto">
          <p
            className={`text-sm ${
              toggle ? "text-[#0C0C0C99]" : "text-[#FFFFFF99]"
            }`}
          >
            Dark mode
          </p>
          <button
            aria-label="button"
            name="toggle"
            type="button"
            onClick={() => setToggle((prevToggle) => !prevToggle)}
            className={`${
              toggle ? `bg-[#E9E9EA]` : "bg-[#34C759]"
            } rounded-full transition-all duration-300 outline-none overflow-hidden w-[42px] h-[24px] flex justify-start items-center`}
          >
            {/* lg:translate-x-[calc(100%-18%)] */}
            <span
              className={`h-[20px] w-[20px] text-xl text-white transition-all duration-300 rounded-full flex items-center mt-[0.7px] justify-center ${
                toggle
                  ? `translate-x-[2px] bg-white shadow-2xl`
                  : " translate-x-[calc(100%-0%)] lg:translate-x-[calc(100%-2%)] bg-white"
              } `}
            ></span>
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-5">
        <div
          className={`w-full mt-5 ${
            toggle ? "bg-white" : "bg-[#494949]"
          } rounded-[28px] col-span-1 p-6 hidden xl:flex flex-col items-start gap-5`}
        >
          <h4
            className={`text-[18px] font-semibold ${
              toggle ? "text-black" : "text-white"
            }`}
          >
            Messages
          </h4>

          <div
            className={`w-full rounded-[200px] py-3 px-5 flex items-center justify-start gap-3 ${
              toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E]"
            }`}
          >
            <img src="/search-icon.png" alt="" className="w-[20px] h-[20px]" />
            <span
              className={`text-xs font-normal ${
                toggle ? "text-[#979797]" : "text-[#C8C8C8]"
              }`}
            >
              Search message
            </span>
          </div>

          <div className="w-full">
            {chatList.map((chat, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-start justify-between mb-1 py-5 px-4 rounded-[16px] ${
                    index === 0 && "bg-[#7D70F80A]"
                  }`}
                >
                  <div className="flex items-center justify-start gap-3">
                    <div
                      className={`w-[54px] h-[54px] rounded-full flex items-center justify-center ${chat.bgColor}`}
                    >
                      <img src={chat.image} alt="" />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <span
                        className={`text-sm font-semibold ${
                          toggle ? "text-black" : "text-white"
                        }`}
                      >
                        {chat.name}
                      </span>
                      {chat.typing ? (
                        <span className="text-[13px] font-medium italic text-[#7D70F8]">
                          {chat.message}
                        </span>
                      ) : (
                        <span
                          className={`text-[13px] font-medium ${
                            toggle ? "text-[#6A6A6A]" : "text-[#D5D5D5]"
                          }`}
                        >
                          {chat.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {chat.messages !== 0 && (
                    <div className="w-[20px] h-[20px] bg-[#7D70F8] rounded-full text-white flex items-center justify-center text-xs">
                      {chat.messages}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`w-full mt-5 ${
            toggle ? "bg-white" : "bg-[#494949]"
          } rounded-[28px] col-span-3 xl:col-span-2 p-6`}
        >
          <div className="w-full flex flex-col md:flex-row gap-y-4 items-start md:items-center justify-between border-b pb-4">
            <div className="flex items-center justify-start gap-2">
              <img src="/ball-img.png" alt="" className="w-[41px] h-[41px]" />
              <div className="flex flex-col items-start">
                <p
                  className={`font-semibold text-base ${
                    toggle ? "text-black" : "text-white"
                  }`}
                >
                  Dribbble Designs
                </p>
                <p
                  className={`font-normal text-xs ${
                    toggle ? "text-[#6A6A6A]" : "text-[#D5D5D5]"
                  }`}
                >
                  128 members
                </p>
              </div>
            </div>
            <div
              className={`w-[120px] py-3 rounded-[200px] text-[13px] font-medium text-center ${
                toggle
                  ? "bg-[#7D70F80A] text-[#7D70F8]"
                  : "bg-[#7D70F8] text-white"
              }`}
            >
              + Add member
            </div>
          </div>

          <div className="w-full mt-5 flex flex-col gap-4">
            <div
              className={`w-full h-[55px] ${
                toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E]"
              } rounded-[200px] px-5 flex items-center justify-between`}
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="false"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="flex items-center gap-1">
                <img
                  src="/profile-icon-1.png"
                  alt=""
                  className="w-[32px] h-[32px]"
                />
                <img
                  src="/profile-icon-2.png"
                  alt=""
                  className="w-[32px] h-[32px]"
                />
                <img
                  src="/profile-icon-3.png"
                  alt=""
                  className="w-[32px] h-[32px]"
                />
                <p
                  className={`text-[13px] font-normal hidden md:block ${
                    toggle ? "text-black" : "text-white"
                  }`}
                >
                  Your friends are joining{" "}
                  <span className="font-semibold">
                    “How to Become a UI UX Designer”
                  </span>
                  meeting
                </p>
              </div>
              <div className="bg-[#25D06A] w-[72px] py-2 text-center text-white text-xs font-medium rounded-[200px]">
                Join room
              </div>
            </div>

            <div
              className={`${
                toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E] text-white"
              } px-2 py-2 rounded-full text-xs font-medium w-[54px] mx-auto mt-6 md:mt-0`}
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              Today
            </div>

            <div
              className="w-full h-[77px] flex items-end gap-2 mt-2.5 relative"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="bg-[#ffefc3] rounded-full w-[70px] h-[30px] md:w-[42px] md:h-[42px] flex items-center justify-center">
                <img src="/mike-smith.png" alt="" className="" />
              </div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute left-[9%] md:left-[5%] lg:left-[4.4%] xl:left-[3.8%] bottom-0" />
              <div className="flex flex-col items-start gap-1">
                <div
                  className={`${
                    toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E] text-white"
                  } p-3 rounded-tl-[20px] rounded-r-[20px] text-start`}
                >
                  <span className="text-[13px] font-normal leading-[19.27px]">
                    Hi everyone, I have over 4 years of experience in Figma. If
                    you guys need <br /> any help feel free to message me.
                  </span>
                </div>
                <p
                  className={`text-[9px] font-semibold ${
                    toggle ? "text-[#18181880]" : "text-white"
                  }`}
                >
                  Mike Smith
                </p>
              </div>
            </div>

            <div
              className="w-full lg:w-[284px] h-[77px] flex items-end gap-2 relative"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="bg-[#E7DFF8] rounded-full w-[35px] h-[30px] md:w-[42px] md:h-[42px] flex items-center justify-center">
                <img src="/david-james.png" alt="" className="" />
              </div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute left-[9%] md:left-[5%] lg:left-[10%] bottom-0" />
              <div className="flex flex-col items-start gap-1">
                <div
                  className={`${
                    toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E] text-white"
                  } p-3 rounded-tl-[20px] rounded-r-[20px] text-start`}
                >
                  <span className="text-[13px] font-normal leading-[19.27px]">
                    Hey, can you help me out please?
                  </span>
                </div>
                <p
                  className={`text-[9px] font-semibold ${
                    toggle ? "text-[#18181880]" : "text-white"
                  }`}
                >
                  David James
                </p>
              </div>
            </div>

            <div
              className="w-full lg:w-[443px] h-[77px] flex items-end gap-2 relative"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="bg-[#FFDFDF] rounded-full w-[55px] h-[30px] p-1 md:w-[42px] md:h-[42px] flex items-center justify-center">
                <img src="/hardy-smith.png" alt="" className="" />
              </div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute left-[9%] md:left-[5%] lg:left-[6.7%] bottom-0" />
              <div className="flex flex-col items-start gap-1">
                <div
                  className={`${
                    toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E] text-white"
                  } p-3 rounded-tl-[20px] rounded-r-[20px] text-start`}
                >
                  <span className="text-[13px] font-normal leading-[19.27px]">
                    I have done figma components course. Anybody need help?
                  </span>
                </div>
                <p
                  className={`text-[9px] font-semibold ${
                    toggle ? "text-[#18181880]" : "text-white"
                  }`}
                >
                  Hardy Smith
                </p>
              </div>
            </div>

            <div
              className="w-full flex justify-end mt-1"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div className="w-[370px] h-[43px] flex items-center justify-center bg-[#7D70F8] rounded-l-[20px] rounded-tr-[20px]">
                <span className="text-[13px] font-normal text-white">
                  Yes. I need some help in figma components and variants.
                </span>
              </div>
            </div>

            <div
              className="w-full flex items-center justify-between gap-1 md:gap-3"
              data-aos="fade-up"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center"
            >
              <div
                className={`${
                  toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E]"
                } h-[37px] md:h-[44px] rounded-full w-full px-4 flex items-center justify-between`}
              >
                <span
                  className={`text-sm font-medium ${
                    toggle ? "text-[#6A6A6A]" : "text-[#D5D5D5]"
                  }`}
                >
                  Type your message
                </span>
                <HiOutlineEmojiHappy
                  className={`w-[20px] h-[20px] ${
                    toggle ? "text-[#6A6A6A]" : "text-[#D5D5D5]"
                  }`}
                />
              </div>

              <div className="rounded-full bg-[#7D70F8] w-[44px] h-[37px] md:h-[44px] flex items-center justify-center">
                <img
                  src="/send-message-icon.png"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAnimation;

const chatList = [
  {
    image: "/ronald-richard.png",
    name: "Ronald Richard",
    message: "Thank you.",
    messages: 2,
    typing: false,
    bgColor: "bg-[#E2FFE9]",
  },
  {
    image: "/mike-smith.png",
    name: "Mike Smith",
    message: "Hey, your design is ready!",
    messages: 0,
    typing: false,
    bgColor: "bg-[#f1e2b9]",
  },
  {
    image: "/david-james.png",
    name: "David James",
    message: "Let’s schedule a meeting.",
    messages: 0,
    typing: false,
    bgColor: "bg-[#EEE5FF]",
  },
  {
    image: "/hardy-smith.png",
    name: "Hardy Smith",
    message: "Typing...",
    messages: 0,
    typing: true,
    bgColor: "bg-[#ffdfdf]",
  },
  {
    image: "/jack-mario.png",
    name: "Jack Mario",
    message: "Sounds good!",
    messages: 0,
    typing: false,
    bgColor: "bg-[#D9EDF8]",
  },
];
