"use client";
import { useEffect, useState } from "react";

function useDeviceType() {
  const [deviceType, setDeviceType] = useState("desktop");

  useEffect(() => {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;

    const isMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent.toLowerCase()
      );

    if (isMobile) {
      setDeviceType("mobile");
    }
  }, []);

  return deviceType;
}

export default useDeviceType;
