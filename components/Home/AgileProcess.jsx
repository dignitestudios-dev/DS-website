"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const AgileProcess = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <>
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14 h-auto hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              01.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Branding
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              vision
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              Branding for the app involves rapid iterations and feedback loops
              to refine the visual identity, messaging, and tone. Teams
              collaborate closely with stakeholders to ensure the brand reflects
              the app's values and resonates with the target audience.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              03.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Prototyping
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              MVP
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              Focus is on delivering core functionality to meet user needs.
              Features are prioritized based on value and feasibility, allowing
              for rapid iteration and feedback collection. This iterative
              approach ensures early validation of the product concept while
              minimizing development time and resources.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] text-[70px] lg:text-[100px] xl:text-[114px] group-hover:text-[#F15C20] font-bold leading-[137.97px]">
              05.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Testing
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Evaluation
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              User stories are rigorously evaluated to ensure functionality
              aligns with requirements. Continuous feedback loops are
              established to swiftly address any issues or bugs encountered,
              fostering iterative improvement. Automated testing tools may be
              utilized to enhance efficiency and maintain product quality.
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
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              02.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Sprint Planning
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Project Breakdown
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              The development team selects items from the product backlog to
              work on during the upcoming sprint. Tasks are broken down,
              estimated, and assigned to team members based on their capacity
              and expertise.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              04.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Iteration
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Sprint Execution
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              Completing a set of user stories within a fixed time frame,
              typically two to four weeks is emphasized. Daily stand-up meetings
              are held to track progress, discuss any impediments, and adjust
              the plan accordingly. At the end of the iteration, a review is
              conducted to gather feedback from stakeholders and plan the next
              iteration.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col  justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              06.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Deployment
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              jackpot
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              The tested features are deployed to production environments.
              Continuous integration and deployment pipelines enhance the
              process, ensuring reliable delivery of updates to end-users.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full my-6 px-2 lg:px-10 h-auto lg:hidden flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-3 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              01.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Branding
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              vision
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              Branding for the app involves rapid iterations and feedback loops
              to refine the visual identity, messaging, and tone. Teams
              collaborate closely with stakeholders to ensure the brand reflects
              the app's values and resonates with the target audience.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              02.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Sprint Planning
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Project Breakdown
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              The development team selects items from the product backlog to
              work on during the upcoming sprint. Tasks are broken down,
              estimated, and assigned to team members based on their capacity
              and expertise.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              03.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Prototyping
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              MVP
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              Focus is on delivering core functionality to meet user needs.
              Features are prioritized based on value and feasibility, allowing
              for rapid iteration and feedback collection. This iterative
              approach ensures early validation of the product concept while
              minimizing development time and resources.
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
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              04.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Iteration
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Sprint Execution
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              Completing a set of user stories within a fixed time frame,
              typically two to four weeks is emphasized. Daily stand-up meetings
              are held to track progress, discuss any impediments, and adjust
              the plan accordingly. At the end of the iteration, a review is
              conducted to gather feedback from stakeholders and plan the next
              iteration.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] text-[70px] lg:text-[100px] xl:text-[114px] group-hover:text-[#F15C20] font-bold leading-[137.97px]">
              05.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Testing
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Evaluation
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              User stories are rigorously evaluated to ensure functionality
              aligns with requirements. Continuous feedback loops are
              established to swiftly address any issues or bugs encountered,
              fostering iterative improvement. Automated testing tools may be
              utilized to enhance efficiency and maintain product quality.
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto flex flex-col gap-3 justify-center items-start  py-10">
            <h1 className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[137.97px]">
              06.
            </h1>
            <h2 className="text-[40px] lg:text-[48px] font-bold capitalize leading-[58.09px] ">
              Deployment
            </h2>
            <h3 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              jackpot
            </h3>

            <p
              className="text-[14px] font-normal  "
              style={{ color: palette?.light_contrast_color }}
            >
              The tested features are deployed to production environments.
              Continuous integration and deployment pipelines enhance the
              process, ensuring reliable delivery of updates to end-users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgileProcess;
