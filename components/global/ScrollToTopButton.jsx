"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";
import { IoArrowUpSharp } from "react-icons/io5";

const ScrollToTopButton = () => {
  const { palette } = useContext(GlobalContext);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scroll behavior
    });
  }
  return (
    <button
      type="button"
      name="scroll-to-top-button"
      onClick={scrollToTop}
      className="z-[10000] shadow-lg text-2xl flex justify-center items-center w-14 h-14 rounded-full  text-white fixed bottom-4 left-4"
      style={{
        background: palette?.brandOrange,
        color: "white",
      }}
    >
      <IoArrowUpSharp />
    </button>
  );
};

export default ScrollToTopButton;
