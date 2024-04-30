'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const TestimonialCard = ({ review }) => {
  const { palette } = useContext(GlobalContext);
  return (
    <div
      className={`w-full min-h-64 h-64 relative  col-span-1 flex flex-col justify-center items-start gap-3`}
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
        {review?.review.length > 340 ? review?.review?.slice(0, 340) + "..." : review?.review}
      </p>
      <div className="w-auto h-[20%] absolute bottom-0 left-0 flex gap-2 justify-start items-center">
        <img src={review?.image} alt="" className="rounded-full w-14 h-14" />
        <div className="flex flex-col justify-start items-start">
          <p className="text-base font-semibold">{review?.author}</p>
          <p
            className="text-sm"
            style={{
              color: palette?.light_contrast_color,
            }}
          >
            {review?.designation}
          </p>
        </div>
      </div>

    </div>
  );
};

export default TestimonialCard;
