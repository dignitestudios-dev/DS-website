"use client";
import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa6";

const MobileAppDesignWhyChooseUs = () => {
  const { palette } = useContext(GlobalContext);
  return (
    <section
      id="case-studies"
      className="w-full py-14  px-4 md:px-12 lg:px-32 xl:px-[120px] 2xl:px-48"
      style={{ background: palette?.background }}
    >
      <div className="w-full flex flex-col lg:flex-row items-start lg:gap-x-6 gap-y-6">
        <div className="w-full lg:w-[60%] flex flex-col items-start gap-6">
          <h1 className="font-extrabold text-3xl lg:text-5xl xl:text-[77px] 2xl:text-[80px] tracking-tighter xl:font-bold uppercase">
            why choose us
          </h1>
          <p className="text-[15px]">
            Holding comprehensive experience in the field of mobile app design,
            we have served hundreds of potential clients to deliver the best
            qualitative UI/UX design. At the door of Dignite Studios, we
            custom-made your entire mobile app interface to increase your brand
            awareness, user engagements and make effective leads to your
            business. Therefore, we also reform extraordinary mobile app designs
            for iOS and Android applications. Our custom app design services
            will help you to stand among the top business applications. Here,
            you will experience a strategic approach to prevent costly mistakes
            and potent consultation to build your mobile app competently.
          </p>
          <div className="w-full flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F15C20] p-1">
                <FaCheck className="text-white w-full h-full" />
              </div>
              <p className="text-xl font-medium">Transparency</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F15C20] p-1">
                <FaCheck className="text-white w-full h-full" />
              </div>
              <p className="text-xl font-medium">Enhanced User-Experience</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F15C20] p-1">
                <FaCheck className="text-white w-full h-full" />
              </div>
              <p className="text-xl font-medium">Prompt Delivery</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F15C20] p-1">
                <FaCheck className="text-white w-full h-full" />
              </div>
              <p className="text-xl font-medium">Specialized Consulting Team</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F15C20] p-1">
                <FaCheck className="text-white w-full h-full" />
              </div>
              <p className="text-xl font-medium">Modern Development Process</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-[#F15C20] p-1">
                <FaCheck className="text-white w-full h-full" />
              </div>
              <p className="text-xl font-medium">24/7 Availability</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[40%] flex justify-end lg:justify-end lg:pt-2">
          <Image
            loader={customLoader}
            width={453}
            height={583}
            src="/UIUX-Mobile-app-design.webp"
            alt=" image shows the discussion of UI/UX Mobile app design team"
            title="UI/UX Mobile app design"
            className="md:h-[355px] md:w-[423px] md:mx-auto xl:me-auto xl:h-[583px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MobileAppDesignWhyChooseUs;
