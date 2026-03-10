"use client";
import dynamic from "next/dynamic";

export const DynamicSwiper = dynamic(
  () => import("swiper/react").then((mod) => mod.Swiper),
  { ssr: false, loading: () => <div className="w-full h-full" /> }
);

export const DynamicSwiperSlide = dynamic(
  () => import("swiper/react").then((mod) => mod.SwiperSlide),
  { ssr: false }
);

export const DynamicMotion = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.motion })),
  { ssr: false }
);

export const DynamicAnimatePresence = dynamic(
  () => import("framer-motion").then((mod) => ({ default: mod.AnimatePresence })),
  { ssr: false }
);

export const DynamicMarquee = dynamic(
  () => import("react-fast-marquee"),
  { ssr: false, loading: () => <div className="w-full h-20" /> }
);
