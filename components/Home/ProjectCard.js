"use client";

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import customLoader from "@/lib/custom-loader";

const ProjectCard = ({
  title,
  description,
  image,
  mobile_image,
  projectLink,
}) => {
  const { palette, mouseCursor, disableMouseCursor, theme } =
    useContext(GlobalContext);
  return (
    <Link
      href={projectLink}
      onMouseMove={(e) => {
        mouseCursor("View Project", e);
      }}
      onMouseOut={() => {
        disableMouseCursor();
      }}
      className="group  h-auto  p-3 lg:p-0 flex flex-col items-start gap-2 lg:mb-12 relative"
    >
      <Image
        width={564}
        height={360}
        layout="responsive"
        overrideSrc={image}
        loader={customLoader}
        src={image}
        alt={title}
        className="w-full hidden md:block rounded-xl md:rounded-3xl  md:h-[220px] lg:h-[340px] xl:h-[360px]  hover:brightness-80 transition-all duration-700"
      />

      <Image
        width={564}
        height={360}
        layout="responsive"
        overrideSrc={mobile_image}
        priority
        loader={customLoader}
        src={mobile_image}
        alt={title}
        className="w-full block md:hidden rounded-xl md:rounded-3xl  md:h-[220px] lg:h-[340px] xl:h-[360px]  hover:brightness-80 transition-all duration-700"
      />

      <div className="flex flex-col justify-start my-1 items-start md:px-2">
        <div className="w-full flex justify-between items-center pr-1">
          <h3 className="text-xl lg:text-2xl xl:text-[28px] font-semibold">
            {title}
          </h3>
          <button type="button" className="" name="navigator">
            <Image
              width={8}
              height={8}
              loader={customLoader}
              src={"/case-study-arrow.webp"}
              alt=""
              className="w-2 md:w-4  "
            />
          </button>
        </div>
        <p
          style={{ color: theme == "dark" ? "#b4b4b4" : "#5c5c5c" }}
          className="text-xs lg:text-sm font-normal "
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
