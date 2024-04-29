'use client'

import React from "react";

const GlobalLoader = () => {
  return (
    <div className="fixed top-0 left-0 bg-white z-[1000] overflow-x-auto w-screen h-screen flex justify-center items-center ">
      <div className="loader"></div>

    </div>
  );
};

export default GlobalLoader;
