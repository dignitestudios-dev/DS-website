'use client'

import React, { useState } from "react";

const FindOurOfficeCard = ({ office }) => {
  const [image, setImage] = useState(office?.image);
  return (
    <div
      onMouseOver={() => setImage(office?.full_image)}
      onMouseOut={() => setImage(office?.image)}
      className="relative group"
    >
      <img
        src={image}
        alt=""
        className={`relative w-[400px] transition-all duration-300 group-hover:w-[800px] h-[400px] opacity-[0.7] group-hover:opacity-[1] `}
      />
      <span className="scale-0 transition-all duration-300 group-hover:scale-100 flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 h-40 rounded-xl bg-white">
        <h1 className="text-xl font-medium text-black">{office?.name}</h1>
        <p className="text-md font-normal capitalize text-[#5c5c5c]">
          {office?.description}
        </p>
      </span>
    </div>
  );
};

export default FindOurOfficeCard;
