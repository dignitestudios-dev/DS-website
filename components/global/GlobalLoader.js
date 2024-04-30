'use client'

import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const GlobalLoader = () => {
  const { palette } = useContext(GlobalContext)
  return (
    <div style={{ background: palette?.background }} className="fixed top-0 left-0 bg-white z-[1000] overflow-x-auto w-screen h-screen flex justify-center items-center ">
      <div className="loader"></div>

    </div>
  );
};

export default GlobalLoader;
