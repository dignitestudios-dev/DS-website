"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { staggerContainer, bgVariant } from "@/lib/motion";
import VerticalTimeline from "./VerticalTimeline";


const HybridProcess = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <>
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              01.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Analysis
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Planning & Research
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              Our developers follow the latest trends while analyzing the
              concept behind mobile app development. They deep dive into the
              research process in evaluating their target audience and setting
              standards.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              03.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              UI Designing
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              User Interface Design
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              In this phase, a systematic and purposeful crafting of visual
              elements is built to create an appealing and aesthetically
              pleasing user interface. Thus, it reflects the idea of the brand
              through its interface. Whereas, the objective of the product can
              be determined by the design elements. So, our capabilities satisfy
              the client's needs by all means.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col justify-center items-start  py-10 gap-3">
            <p className="transition-all duration-150  text-[70px] lg:text-[100px] text-[#F15C20] font-bold leading-[4.5rem]">
              05.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Evaluation
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Testing & Evaluation
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              After ending the development phase we evaluate the entire process
              before moving towards the deployment phase. We proceed with the
              testing of stability, functionality, performance, security, and
              the removal of bugs or errors in the developed solution. So, to
              avoid negligence and delinquency hire our valuable developers who
              not only assist you in the evaluation process but also serve you
              the best possible way to stand out.
            </p>
          </div>
        </div>
        {/* <div className="hidden lg:grid w-auto h-[80rem] grid-rows-5 grid-cols-1 justify-center items-start">
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
        </div> */}
        <VerticalTimeline palette={palette} />
        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              02.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Wireframes
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Foundation & UX
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              It is the backbone of any project, as it starts by mapping out of
              user flow, sketching out the core part of the user flow, deciding
              and shaping the layout using boxes, use of several design
              patterns, and ensuring the content scale. So, before conducting
              this process it is necessary to conduct thorough qualitative and
              quantitative research for a reference during wireframing.
              Therefore, our mobile app development platform streamlines the
              entire process to verify the functionality of the mobile
              application. This allows escorting the design of the app
              effectively. 
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              04.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Coding
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px]  ont-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Development
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              At this stage, appropriate programming languages are selected to
              begin the coding of the mobile application. Where the back end
              part determines the scalability of your app in the future and the
              Front end part mostly interacts with the user. It contains three
              approaches to building it effectively, which include
              platform-specific, cross-platform, and hybrid. Here, we cater to
              all those steps that are designed to process mobile applications.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              06.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Deployment
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Go Live
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The deployment process carries a straightforward approach whether
              to submit your app on Apple’s App Store or Google Play Store or
              opt for other private distribution. Simultaneously, being the top
              mobile app company in the USA we assure vast knowledge of tools
              and hands on to the development process. Whereas, we have catered
              hundreds of mobile app solutions and best practices during app
              deployment.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full my-6 px-2 lg:px-10 h-auto lg:hidden flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              01.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Analysis
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Planning & Research
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              Our developers follow the latest trends while analyzing the
              concept behind mobile app development. They deep dive into the
              research process in evaluating their target audience and setting
              standards.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              02.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Wireframes
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Doundation & UX
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              It is the backbone of any project, as it starts by mapping out of
              user flow, sketching out the core part of the user flow, deciding
              and shaping the layout using boxes, use of several design
              patterns, and ensuring the content scale. So, before conducting
              this process it is necessary to conduct thorough qualitative and
              quantitative research for a reference during wireframing.
              Therefore, our mobile app development platform streamlines the
              entire process to verify the functionality of the mobile
              application. This allows escorting the design of the app
              effectively. 
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              03.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              UI Designing
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              User Interface Design
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              In this phase, a systematic and purposeful crafting of visual
              elements is built to create an appealing and aesthetically
              pleasing user interface. Thus, it reflects the idea of the brand
              through its interface. Whereas, the objective of the product can
              be determined by the design elements. So, our capabilities satisfy
              the client's needs by all means.
            </p>
          </div>
        </div>

        <div className="hidden lg:grid w-auto h-[80rem] grid-rows-5 grid-cols-1 justify-center items-start">
          <span className=" h-full  flex flex-col justify-start items-center">
            <span
              className=" w-6 h-6 rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <span
                className="w-1 h-1 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
            <span
              className="h-[calc(100%-3rem)] w-[2px] "
              style={{ background: palette?.color }}
            ></span>
            <span
              className=" w-6 h-6 rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <span
                className="w-1 h-1 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-1 h-1 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-1 h-1 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-1 h-1 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
          <span className=" h-full  flex flex-col justify-start items-center">
            <span className="h-[calc(100%-1.5rem)] w-[2px] bg-[#b4b4b4]/[0.5]"></span>
            <span className=" w-6 h-6 rounded-full bg-[#b4b4b4]/[0.5]  flex items-center justify-center">
              <span
                className="w-1 h-1 rounded-full "
                style={{ background: palette?.background }}
              ></span>
            </span>
          </span>
        </div>
        <div className="w-full lg:w-[49%] h-auto lg:mt-44 grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              04.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Coding
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Development
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              At this stage, appropriate programming languages are selected to
              begin the coding of the mobile application. Where the back end
              part determines the scalability of your app in the future and the
              Front end part mostly interacts with the user. It contains three
              approaches to building it effectively, which include
              platform-specific, cross-platform, and hybrid. Here, we cater to
              all those steps that are designed to process mobile applications.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#b4b4b4]/[0.7] text-[70px] lg:text-[100px] group-hover:text-[#F15C20] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              05.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Evaluation
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Testing & Evaluation
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              After ending the development phase we evaluate the entire process
              before moving towards the deployment phase. We proceed with the
              testing of stability, functionality, performance, security, and
              the removal of bugs or errors in the developed solution. So, to
              avoid negligence and delinquency hire our valuable developers who
              not only assist you in the evaluation process but also serve you
              the best possible way to stand out.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col justify-center items-start pb-3 lg:py-10 gap-3">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              06.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px]">
              Deployment
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Go Live
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px] "
              style={{ color: palette?.light_contrast_color }}
            >
              The deployment process carries a straightforward approach whether
              to submit your app on Apple’s App Store or Google Play Store or
              opt for other private distribution. Simultaneously, being the top
              mobile app company in the USA we assure vast knowledge of tools
              and hands on to the development process. Whereas, we have catered
              hundreds of mobile app solutions and best practices during app
              deployment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HybridProcess;
