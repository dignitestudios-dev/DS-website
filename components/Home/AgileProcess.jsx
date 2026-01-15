"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { bgVariant, staggerContainer } from "@/lib/motion";
import React, { useContext } from "react";
import { motion } from "framer-motion";

const AgileProcess = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <>
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              01.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Branding
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Planning & Research
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Mobile app branding plays a vital role in the creation of the
              app’s specifications in terms of tone, voice, design, icons, and
              visuals. It requires careful consideration of the connection
              between the users and the app. According to the statistics from
              Zippia, 33% of the revenue will be increased if the presentation
              of a brand is consistent and meets all the requirements. So, here
              our team collaborates effectively with the client to adhere to
              whether the brand reflects the core value of the app.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              03.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Prototyping
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              User Interface Design
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              It is a process in which a preliminary visual mock-up look has
              been created that exhibits the mobile app’s initial design and
              purpose but does not hold functional code. And likewise, by
              implementing different types of prototypes it helps to test your
              app idea. Therefore, it is necessary to apply prototypes in the
              early stages of app development to rectify the concept and its
              process.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150  text-[70px] lg:text-[100px] xl:text-[114px] text-[#F15C20] font-bold leading-[137.97px]">
              05.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Testing
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Testing & Evaluation
            </h5>
            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Testing at all stages of the mobile app development process is the
              leading reassurance to eradicate serious bugs, stay up-to-date
              with the acquainted status, and make your esteem profound. There
              are multiple testing strategies that the Dignite development team
              performs during the development cycle of mobile apps.
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
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              02.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Sprint Planning
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Foundation & UX
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              By sprint planning developers determine the product roadmap and
              analyze the total execution time. Our skillful scrum team reviews
              the backlog and prioritizes tasks to create a project management
              plan. Here, a mobile application agency assigns several tasks to
              team members as per their expertise and tracks the entire progress
              accordingly.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              04.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold leading-[58.09px] uppercase">
              Iteration
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              development
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              While conducting mobile app development, the experts of Dignite
              Studios will implement the best possible way to break down the
              project into smaller cycles to analyze planning, coding, testing,
              designing, and reviewing the app features and its functionality.
              Our development team proceeds with valuable feedback from
              stakeholders and executes the next iteration accordingly.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col  justify-center items-start  py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              06.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Deployment
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Go Live
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Mobile app deployment is not a singular event, but it consists of
              several steps. That includes preparing the app for distribution,
              packaging, setting up servers, and configuration to ensure that
              the app is ready for the intended platforms like iOS, Android, or
              another mobile operating system. Dignite Studios also verifies the
              process of updating and releasing new features, fixing bugs, or
              improving performances according to proven methods.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full my-6 px-2 lg:px-10 h-auto lg:hidden flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              01.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Branding
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Planning & Research
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Mobile app branding plays a vital role in the creation of the
              app’s specifications in terms of tone, voice, design, icons, and
              visuals. It requires careful consideration of the connection
              between the users and the app. According to the statistics from
              Zippia, 33% of the revenue will be increased if the presentation
              of a brand is consistent and meets all the requirements. So, here
              our team collaborates effectively with the client to adhere to
              whether the brand reflects the core value of the app.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              02.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Sprint Planning
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Foundation & UX
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              By sprint planning developers determine the product roadmap and
              analyze the total execution time. Our skillful scrum team reviews
              the backlog and prioritizes tasks to create a project management
              plan. Here, a mobile application agency assigns several tasks to
              team members as per their expertise and tracks the entire progress
              accordingly.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              03.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Prototyping
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              User Interface Design
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              It is a process in which a preliminary visual mock-up look has
              been created that exhibits the mobile app’s initial design and
              purpose but does not hold functional code. And likewise, by
              implementing different types of prototypes it helps to test your
              app idea. Therefore, it is necessary to apply prototypes in the
              early stages of app development to rectify the concept and its
              process.
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
            <span
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </span>
            <span
              className="h-[calc(100%-64px)] w-[2px] "
              style={{ background: palette?.color }}
            ></span>
            <span
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 5)}
                viewport={{ once: false, amount: 0.25 }}
                className="w-2 h-2 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </span>
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
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              04.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Iteration
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              development
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              While conducting mobile app development, the experts of Dignite
              Studios will implement the best possible way to break down the
              project into smaller cycles to analyze planning, coding, testing,
              designing, and reviewing the app features and its functionality.
              Our development team proceeds with valuable feedback from
              stakeholders and executes the next iteration accordingly.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#b4b4b4]/[0.7] text-[70px] lg:text-[100px] xl:text-[114px] group-hover:text-[#F15C20] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              05.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Testing
            </h4>
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Testing & Evaluation
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Testing at all stages of the mobile app development process is the
              leading reassurance to eradicate serious bugs, stay up-to-date
              with the acquainted status, and make your esteem profound. There
              are multiple testing strategies that the Dignite development team
              performs during the development cycle of mobile apps.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col gap-3 justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              06.
            </p>
            <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Deployment
            </h4>
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#F15C20]">
              Go Live
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
              Mobile app deployment is not a singular event, but it consists of
              several steps. That includes preparing the app for distribution,
              packaging, setting up servers, and configuration to ensure that
              the app is ready for the intended platforms like iOS, Android, or
              another mobile operating system. Dignite Studios also verifies the
              process of updating and releasing new features, fixing bugs, or
              improving performances according to proven methods.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgileProcess;
