"use client";

import customLoader from "@/lib/custom-loader";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FindOurOfficeCard = ({ office }) => {
  const [image, setImage] = useState(office?.image);
  return (
    <Link
      href={office?.link}
      onMouseOver={() => setImage(office?.full_image)}
      onMouseOut={() => setImage(office?.image)}
      className="relative group"
    >
      <Image
        src={image}
        loading="lazy"
        loader={customLoader}
        width={500}
        height={400}
        alt=""
        className={`relative lg:w-[500px] xl:w-[400px] transition-all duration-300 group-hover:lg:w-[900px] group-hover:xl:w-[800px] h-[400px] opacity-[0.7] group-hover:opacity-[1] `}
      />
      <span className="scale-0 transition-all duration-300 group-hover:scale-100 flex flex-col items-start justify-center  px-4 absolute bottom-8 left-[17%] w-3/5 min-h-36 h-auto py-2 rounded-xl bg-white">
        <h3 className="text-lg font-medium text-black">{office?.name}</h3>
        <p className="text-sm font-normal capitalize text-[#5c5c5c]">
          {office?.description}
        </p>
      </span>
    </Link>
  );
};

export default FindOurOfficeCard;
