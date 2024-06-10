import React from "react";

const OfficeCard = ({ image, title, address }) => {
  return (
    <div className="w-full flex flex-col items-start gap-2 overflow-hidden">
      <div className="w-full h-auto lg:h-[260px] overflow-hidden rounded-md">
        <img
          src={image}
          alt=""
          className="w-full rounded-[6px] scale-100 hover:scale-110 transition-all duration-500"
        />
      </div>
      <h1 className="font-semibold text-[20px]">{title}</h1>
      <p className="text-[18px] font-normal">{address}</p>
    </div>
  );
};

export default OfficeCard;
