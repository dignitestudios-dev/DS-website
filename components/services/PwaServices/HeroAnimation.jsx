"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { useInView } from "framer-motion";
import React, { useContext, useRef, useState } from "react";
import { HiOutlineEmojiHappy } from "react-icons/hi";

const HeroAnimation = () => {
  const [toggle, setToggle] = useState(true);
  const { theme } = useContext(GlobalContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
        } rounded-[28px] p-6 flex items-start md:flex-row md:items-center justify-between gap-y-4`}
      >
        <div className="flex items-center justify-start gap-2">
          <div
            className={`w-[61px] h-[61px] ${
              toggle ? "bg-[#7D70F814]" : "bg-[#616161]"
            } flex items-center justify-center rounded-full`}
          >
            <img
              src="/face-icon.webp"
              alt="face-icon"
              className="w-[39px] h-[39px]"
            />
          </div>
          <div className="flex flex-col items-start">
            <p
              className={`text-[18px] md:text-[18px] font-semibold ${
                toggle ? "text-black" : "text-white"
              }`}
            >
              Morgan White
            </p>
            <p className={`text-sm font-medium text-[#7D70F8]`}>View Profile</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 float-end md:w-auto">
          <p
            className={`text-sm hidden md:block ${
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
            <img
              src="/search-icon.webp"
              alt="search-icon"
              className="w-[20px] h-[20px]"
            />
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
                  } ${!toggle && index === 0 ? "bg-[#5E5E5E]" : ""}`}
                >
                  <div className="flex items-center justify-start gap-3">
                    <div
                      className={`w-[54px] h-[54px] rounded-full flex items-center justify-center ${chat.bgColor}`}
                    >
                      <img src={chat.image} alt={chat.alt_tag} />
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
              <img
                src="/ball-img.webp"
                alt="ball-img"
                className="w-[41px] h-[41px]"
              />
              <div className="flex flex-col items-start">
                <p
                  className={`font-semibold text-base ${
                    toggle ? "text-black" : "text-white"
                  }`}
                >
                  PWA Developers Hub
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

          <div className="w-full mt-5 flex flex-col gap-4 md:gap-4">
            <div
              className="w-full"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <div
                className={`w-full h-[55px] rounded-[200px] flex items-center justify-between`}
              >
                <div
                  className={`w-full h-full px-4 rounded-l-full flex items-center gap-1 ${
                    toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E]"
                  }`}
                >
                  <img
                    src="/profile-icon-1.webp"
                    alt="profile-icon-1"
                    className="w-[32px] h-[32px]"
                  />
                  <img
                    src="/profile-icon-2.webp"
                    alt="profile-icon-2"
                    className="w-[32px] h-[32px]"
                  />
                  <img
                    src="/profile-icon-3.webp"
                    alt="profile-icon-3"
                    className="w-[32px] h-[32px]"
                  />
                  <p
                    className={`text-[13px] font-normal hidden md:block ${
                      toggle ? "text-black" : "text-white"
                    }`}
                  >
                    Your friends are joining{" "}
                    <span className="font-semibold">
                      “The Ultimate PWA Workshop”
                    </span>{" "}
                    meeting
                  </p>
                </div>
                <div
                  className={`h-full ${
                    toggle ? "bg-[#FAFAFC]" : "bg-[#5E5E5E]"
                  } flex items-center pr-4 rounded-r-full`}
                >
                  <div
                    className={`bg-[#25D06A] w-[72px] py-2 text-center text-white text-xs font-medium rounded-[200px] `}
                  >
                    Join room
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full"
              ref={ref}
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              <div className="w-full mt-6 md:mt-0">
                <div
                  className={`${
                    toggle
                      ? "bg-[#FAFAFC] text-black"
                      : "bg-[#5E5E5E] text-white"
                  } px-2 py-2 rounded-full text-xs font-medium w-[54px] mx-auto`}
                >
                  Today
                </div>
              </div>
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
                <img src="/mike-smith.webp" alt="mike-smith" className="" />
              </div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute left-[9%] md:left-[5%] lg:left-[4.4%] xl:left-[3.8%] bottom-0" />
              <div className="flex flex-col items-start gap-1">
                <div
                  className={`${
                    toggle
                      ? "bg-[#FAFAFC] text-black"
                      : "bg-[#5E5E5E] text-white"
                  } p-3 rounded-tl-[20px] rounded-r-[20px] text-start `}
                >
                  <span
                    className={`text-xs md:text-[13px] font-normal md:leading-[19.27px]`}
                  >
                    Hi everyone, I have over 4 years of experience in developing{" "}
                    <br />
                    Progressive Web Applications (PWAs). If you need any help,
                    feel free to message me.
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
                <img src="/david-james.webp" alt="david-james" className="" />
              </div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute left-[9%] md:left-[5%] lg:left-[10%] bottom-0" />
              <div className="flex flex-col items-start gap-1">
                <div
                  className={`${
                    toggle
                      ? "bg-[#FAFAFC] text-black"
                      : "bg-[#5E5E5E] text-white"
                  } p-3 rounded-tl-[20px] rounded-r-[20px] text-start`}
                >
                  <span className="text-xs md:text-[13px] font-normal md:leading-[19.27px]">
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
              className="w-full lg:w-[443px] h-[77px] flex items-end gap-2 relative mt-10 md:mt-4"
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
                <img src="/hardy-smith.webp" alt="hardy-smith" className="" />
              </div>
              <div className="w-[8px] h-[8px] rounded-full bg-[#35E15B] absolute left-[9%] md:left-[5%] lg:left-[6.7%] bottom-0" />
              <div className="flex flex-col items-start gap-1">
                <div
                  className={`${
                    toggle
                      ? "bg-[#FAFAFC] text-black"
                      : "bg-[#5E5E5E] text-white"
                  } p-3 rounded-tl-[20px] rounded-r-[20px] text-start`}
                >
                  <span className="text-xs md:text-[13px] font-normal md:leading-[19.27px]">
                    I’ve completed a course on PWA components and best
                    practices. Anybody need help?
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
              <div className="w-[350px] md:w-[390px] h-[55px] md:h-[43px] flex items-center justify-start text-start px-4 md:py-0 bg-[#7D70F8] rounded-l-[20px] rounded-tr-[20px]">
                <span className="text-xs md:text-[13px] font-normal text-white">
                  Yes, I need some help with PWA components and service worker
                  configurations.
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

              <div className="rounded-full bg-[#7D70F8] w-[44px] h-[37px] md:h-[38px] flex items-center justify-center">
                <img
                  src="/send-message-icon.webp"
                  alt="send-message-icon"
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
    image: "/ronald-richard.webp",
    alt_tag: "ronald-richard",
    name: "Ronald Richard",
    message: "Thank you.",
    messages: 2,
    typing: false,
    bgColor: "bg-[#E2FFE9]",
  },
  {
    image: "/ball-img.webp",
    alt_tag: "ball-img",
    name: "PWA Developers Hub",
    message: "Yes, I need some help with...",
    messages: 0,
    typing: false,
    bgColor: "bg-[#f1e2b9]",
  },
  {
    image: "/david-james.webp",
    alt_tag: "david-james",
    name: "David James",
    message: "Let’s schedule a meeting.",
    messages: 0,
    typing: false,
    bgColor: "bg-[#EEE5FF]",
  },
  {
    image: "/hardy-smith.webp",
    alt_tag: "hardy-smith",
    name: "Hardy Smith",
    message: "Typing...",
    messages: 0,
    typing: true,
    bgColor: "bg-[#ffdfdf]",
  },
  {
    image: "/jack-mario.webp",
    alt_tag: "jack-mario",
    name: "Jack Mario",
    message: "Sounds good!",
    messages: 0,
    typing: false,
    bgColor: "bg-[#D9EDF8]",
  },
];
