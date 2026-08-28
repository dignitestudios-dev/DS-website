"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

export default function LazySection({ children, minHeight = 400 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "300px 0px", // Pre-load 300px before scrolling into view
  });

  return (
    // minHeight only reserves space for the *placeholder*. Once the real
    // content mounts it has to be released, or any section shorter than
    // minHeight leaves dead space below it. The swap happens 300px before
    // the section enters the viewport, so releasing it cannot shift
    // anything already on screen.
    <div ref={ref} style={{ minHeight: inView ? undefined : minHeight, width: "100%" }}>
      {inView ? children : null}
    </div>
  );
}
