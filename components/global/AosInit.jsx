"use client";
import { useEffect } from "react";
import AOS from "aos";

const AOSInit = () => {
  useEffect(() => {
    // Dynamically load AOS CSS to avoid render-blocking
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/aos.css";
    link.onload = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-out-cubic",
      });
    };
    document.head.appendChild(link);
  }, []);

  return null;
};

export default AOSInit;
