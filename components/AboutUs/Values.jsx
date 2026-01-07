"use client";
import { GlobalContext } from "@/context/GlobalContext";
import { bgVariant, staggerContainer } from "@/lib/motion";
import React, { useContext } from "react";
import { motion } from "framer-motion";

const Values = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <div className="py-12">
        <div className="flex flex-col items-center w-full" >
<h1 className="text-7xl font-bold">Our  <span className="text-[#F15C20]" >Values </span></h1>
        </div>
      <div className="w-full my-6 px-2 lg:px-10 xl:px-14  hidden lg:flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] mt-12 h-auto grid grid-rows-1 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto   border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
         
            <h5 className="capitalize text-[30px] lg:text-[36px] font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
              Our Mission
            </h5>

            <p
              className="text-[16px] font-normal text-black  2xl:text-[18px]"
            //   style={{ color: palette?.light_contrast_color }}
            >
            By creating fully custom digital solutions that empower businesses to grow, innovate, and achieve results. By combining expert teams, strategic insight, and customized technology, every project is designed to enhance performance, streamline operations, and drive long-term success for organizations across industries. 
            </p>
          </div>
    
      
        </div>
        <div className="hidden lg:grid w-auto h-[50rem] -mb-64   grid-rows-3 grid-cols-1 justify-center items-start">
               <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className=" h-full   flex flex-col justify-start items-center"
          >
            <motion.span
              variants={bgVariant("#B4B4B4", "#F15C20", "tween", 0, 1)}
              viewport={{ once: false }}
              className="h-[calc(50%)] w-[2px] bg-[#b4b4b4]/[0.5]"
            ></motion.span>
       
          </motion.span>
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className=" h-full -mt-40  flex flex-col justify-start items-center"
          >
            <motion.span
              variants={bgVariant("#B4B4B4", "#F15C20", "tween", 0, 1)}
              viewport={{ once: false }}
              className=" w-[32px] h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 1)}
                viewport={{ once: false }}
                className="w-5 h-5 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "#F15C20", "tween", 0, 1)}
              viewport={{ once: false }}
              className="h-[calc(80%-64px)]  w-[2px] "
              style={{ background: palette?.color }}
            ></motion.span>
            <motion.span
              variants={bgVariant("#B4B4B4", "#F15C20", "tween", 0, 1)}
              viewport={{ once: false }}
              className=" w-[32px]  h-[32px] rounded-full   flex items-center justify-center"
              style={{ background: palette?.color }}
            >
              <motion.span
                variants={bgVariant("#fff", "#fff", "tween", 0, 1)}
                viewport={{ once: false }}
                className="w-5 h-5 rounded-full "
                style={{ background: palette?.background }}
              ></motion.span>
            </motion.span>
          </motion.span>
          <motion.span
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className=" h-full -mt-[215px] flex flex-col justify-start items-center"
          >
         
            <motion.span
              variants={bgVariant("#B4B4B4", "#F15C20", "tween", 0, 1)}
              viewport={{ once: false }}
              className="h-[calc(100%-64px)] w-[2px] "
              style={{ background: palette?.color }}
            ></motion.span>
          
          </motion.span>
       
      
        </div>
        <div className="w-full lg:w-[49%] h-auto lg:mt-56 grid grid-rows-1 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto   border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  py-10">
       
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] group-hover:text-[#f15c20]">
            Our Vision
            </h5>

            <p
              className="text-[16px] font-normal  2xl:text-[18px]"
            //   style={{ color: palette?.light_contrast_color }}
            >To become the trusted partner recognized for redefining digital experiences through innovation, precision, and value. The goal is to help businesses adapt, lead, and grow in the rapidly changing digital environment, while establishing solutions that also leave a lasting impact on the effort to create new standards in technology and design.
            </p>
          </div>
    
        </div>
      </div>

      <div className="w-full my-6 px-2 lg:px-10 h-auto lg:hidden flex flex-col lg:flex-row gap-0 lg:gap-10 justify-start items-start">
        <div className=" w-full lg:w-[49%] h-auto grid grid-rows-2 grid-cols-1 gap-3">
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              01.
            </p>
            {/* <h4 className="text-[40px] lg:text-[48px] font-bold uppercase leading-[58.09px] ">
              Branding
            </h4> */}
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] text-[#f15c20]">
            Our Mission
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
            By creating fully custom digital solutions that empower businesses to grow, innovate, and achieve results. By combining expert teams, strategic insight, and customized technology, every project is designed to enhance performance, streamline operations, and drive long-term success for organizations across industries. 
            </p>
          </div>
          <div className="group  w-full h-auto lg:h-auto  border-b-[1px] border-[#b4b4b4]/[0.5] flex  flex-col justify-center items-start  pb-3 lg:py-10">
            <p className="transition-all duration-150 text-[#b4b4b4]/[0.7] group-hover:text-[#F15C20] text-[70px] lg:text-[100px] xl:text-[114px] font-bold leading-[4.5rem] xl:leading-[137.97px]">
              02.
            </p>
          
            <h5 className="  capitalize text-[30px] lg:text-[36px]  font-semibold leading-[43.57px] xl:font-medium text-[#b7b7b7]/[1] text-[#f15c20]">
             Our Vision
            </h5>

            <p
              className="text-[14px] font-normal  2xl:text-[18px]"
              style={{ color: palette?.light_contrast_color }}
            >
           To become the trusted partner recognized for redefining digital experiences through innovation, precision, and value. The goal is to help businesses adapt, lead, and grow in the rapidly changing digital environment, while establishing solutions that also leave a lasting impact on the effort to create new standards in technology and design.
            </p>
          </div>
        
        </div>
       
        
      </div>
    </div>
  );
};

export default Values;
