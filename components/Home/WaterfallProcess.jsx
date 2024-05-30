"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { staggerContainer, bgVariant } from "@/lib/motion";

const WaterfallProcess = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <>
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              01.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Brainstorming
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Think Tank
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              Extensive upfront analysis and documentations are conducted to
              define project requirements comprehensively. Sequential stages
              involve detailed planning, feasibility studies, and stakeholder
              consultations to establish a concrete project roadmap.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              03.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Aesthetics
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Ui Design
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              Meticulous attention is given to crafting the user interface based
              on predefined requirements. Design elements are carefully chosen
              and implemented to ensure consistency and usability across the
              application. The delivery of a refined design before advancing to
              subsequent stages of development is prioritized.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  flex flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              05.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Back End
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Beta
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              During beta development, the focus shifts to implementing features
              based on user feedback gathered during alpha testing.
              Simultaneously, rigorous testing is conducted to identify and
              rectify any remaining bugs or glitches.
            </p>
          </div>
        </div>
        <div className="hidden lg:grid w-auto h-[80rem]   grid-rows-5 grid-cols-1 justify-center items-start">
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" h-full  flex flex-col justify-start items-center"
          >
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className="h-[calc(100%-64px)] w-[2px] "
              style={{ background: palette?.color }}
            ></motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
          </motion.span>
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" h-full  flex flex-col justify-start items-center"
          >
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"
            ></motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
          </motion.span>
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" h-full  flex flex-col justify-start items-center"
          >
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"
            ></motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
          </motion.span>
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" h-full  flex flex-col justify-start items-center"
          >
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"
            ></motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
          </motion.span>
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" h-full  flex flex-col justify-start items-center"
          >
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"
            ></motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "black", "tween", 0.5, 5)}
              viewport={{ once: false, amount: 0.25 }}
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
          </motion.span>
        </div>
        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              02.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Structure
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Wireframes
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The emphasis lies on establishing a solid architectural groundwork
              and designing the user experience based on initial requirements.
              Detailed wireframes and prototypes are created to outline the
              app's layout and functionality, with minimal room for iterative
              adjustments.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              04.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Front End
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Alpha
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The core features of the application are developed according to
              the initial requirements. Testing is conducted to identify any
              major issues or bugs, aiming for a functional but not fully
              polished product. Stakeholder feedback is solicited to validate
              the alpha version before proceeding to beta development.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  flex flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              06.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Jackpot
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Deployment
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The finalized application is prepared for release to end-users or
              clients. Deployment activities include packaging the software,
              preparing documentation, and coordinating rollout schedules. It
              occurs after thorough testing and approval.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full my-6 px-2 lg:px-10 h-auto lg:hidden flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              01.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Brainstorming
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Think Tank
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              Extensive upfront analysis and documentations are conducted to
              define project requirements comprehensively. Sequential stages
              involve detailed planning, feasibility studies, and stakeholder
              consultations to establish a concrete project roadmap.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              02.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Structure
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Wireframes
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The emphasis lies on establishing a solid architectural groundwork
              and designing the user experience based on initial requirements.
              Detailed wireframes and prototypes are created to outline the
              app's layout and functionality, with minimal room for iterative
              adjustments.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] text-[70px] lg:text-[100px] group-hover:text-[#F15C20] font-bold leading-[4.5rem]">
              03.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Aesthetics
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Ui Design
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              eros lacus, hendrerit ac dolor nec, condimentum mattis eros.
              Maecenas vel facilisis metus, consequat congue nibh. Nulla
              scelerisque ex facilisis rhoncus imperdiet. Maecenas nec fringilla
              neque, nec ullamcorper sem. Nulla in condimentum magna.
            </p>
          </div>
        </div>
        <div className="hidden lg:grid w-auto h-[80rem]   grid-rows-5 grid-cols-1 justify-center items-start">
          <span className=" h-full  flex flex-col justify-start items-center">
            <span
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <span
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
            <span
              className="h-[calc(100%-64px)] w-[2px] "
              style={{ background: palette?.color }}
            ></span>
            <span
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <span
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-[32px] h-[32px] rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-[32px] h-[32px] rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-[32px] h-[32px] rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-[32px] h-[32px] rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
        </div>
        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              04.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Front End
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Alpha
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The core features of the application are developed according to
              the initial requirements. Testing is conducted to identify any
              major issues or bugs, aiming for a functional but not fully
              polished product. Stakeholder feedback is solicited to validate
              the alpha version before proceeding to beta development.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto   border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] text-[70px] lg:text-[100px] group-hover:text-[#F15C20] font-bold leading-[4.5rem]">
              05.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Back End
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Beta
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              During beta development, the focus shifts to implementing features
              based on user feedback gathered during alpha testing.
              Simultaneously, rigorous testing is conducted to identify and
              rectify any remaining bugs or glitches.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  flex flex-col justify-center items-start  pb-3 lg:py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              06.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px]">
              Jackpot
            </h2>
            <h3 className="    capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Deployment
            </h3>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The finalized application is prepared for release to end-users or
              clients. Deployment activities include packaging the software,
              preparing documentation, and coordinating rollout schedules. It
              occurs after thorough testing and approval.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterfallProcess;
