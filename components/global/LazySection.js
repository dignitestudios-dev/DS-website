"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function LazySection({ children, minHeight = 400 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px", // Pre-load 300px before scrolling into view
  });

  return (
    <div ref={ref} style={{ minHeight: inView ? "auto" : minHeight, width: "100%" }}>
      {inView ? children : null}
    </div>
  );
}
