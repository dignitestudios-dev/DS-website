'use client'

import { GlobalContext } from "@/context/GlobalContext";
import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import React, { useContext } from "react";

const IMAGE_LIST = ["/testimonial-7.webp","/testimonial-8.webp", "/testimonial-1.webp", "/testimonial-6.webp", "/testimonial-4.webp", "/testimonial-5.webp", "/testimonial-9.webp"]

const TestimonialCard = ({ reviewBody, authorName, jobtitle, index }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className={`w-full h-80 min-h-80 md:min-h-80 md:h-80 lg:h-80 lg:min-h-80 xl:min-h-72 xl:h-72 relative  col-span-1 flex flex-col justify-center items-start gap-3 text-start`}
      style={{
        color: palette?.color,
      }}
    >
      <p
        className="text-base h-[80%]"
        style={{
          color: palette?.light_contrast_color,
        }}
      >
        {reviewBody.length > 340 ? reviewBody?.slice(0, 340) + "..." : reviewBody}
      </p>
      <div className="w-auto h-[20%] absolute bottom-0 left-0 flex gap-2 justify-start items-center">
        <Image loading="lazy" src={IMAGE_LIST[index]} loader={customLoader} alt="client_image" className="rounded-full w-14 h-14" width={56} height={56} />
        <div className="flex flex-col justify-start items-start">
          <p className="text-base font-semibold">{authorName}</p>
          <p
            className="text-sm"
            style={{
              color: palette?.light_contrast_color,
            }}
          >
            {jobtitle}
          </p>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;
