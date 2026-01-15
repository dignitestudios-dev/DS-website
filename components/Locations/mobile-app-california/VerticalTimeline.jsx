import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [1, 2, 3, 4, 5, 6]; // just 6 dots

export default function VerticalTimeline({ palette }) {
  const containerRef = useRef(null);

  // Scroll tracking: "start center" means progress 0 when top of container hits center
  // "end center" means progress 1 when bottom of container hits center
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Distances
  // We want the line to start exactly at the first dot and end at the last dot.
  // We assume the dots are centered at ((index + 0.5) / length) * 100
  const firstDotIndex = 0;
  const lastDotIndex = milestones.length - 1;
  const firstDotTopPercent = ((firstDotIndex + 0.5) / milestones.length) * 100;
  const lastDotTopPercent = ((lastDotIndex + 0.5) / milestones.length) * 100;
  const maxLineHeightPercent = lastDotTopPercent - firstDotTopPercent;

  // The line height should grow from 0 to maxLineHeightPercent
  // aligned with the scroll progress passing through the dots.
  // When scroll matches firstDotTopPercent, length is 0.
  // When scroll matches lastDotTopPercent, length is max.
  const lineHeight = useTransform(
    smoothProgress,
    [firstDotTopPercent / 100, lastDotTopPercent / 100],
    ["0%", `${maxLineHeightPercent}%`]
  );

  return (
    <div ref={containerRef} className="hidden lg:block relative w-auto h-[80rem]">
      {/* Line container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">

        {/* Background gray line connecting first to last dot */}
        <div
          className="absolute w-[2px] bg-[#B4B4B4]/50 z-0"
          style={{
            top: `${firstDotTopPercent}%`,
            height: `${maxLineHeightPercent}%`,
          }}
        />

        {/* Animated black/colored line */}
        <motion.div
          className="absolute w-[3px] origin-top bg-black z-10"
          style={{
            top: `${firstDotTopPercent}%`,
            height: lineHeight,
          }}
        />

        {/* Dots */}
        {milestones.map((_, index) => {
          // Evenly spaced dots along the line
          const topPercent = ((index + 0.5) / milestones.length) * 100;

          // Dot becomes active when scroll passes it (center of screen)
          const dotColor = useTransform(
            smoothProgress,
            [topPercent / 100 - 0.02, topPercent / 100],
            ["#B4B4B4", palette?.color]
          );

          return (
            <motion.div
              key={index}
              className="absolute w-[32px] h-[32px] rounded-full flex items-center justify-center"
              style={{
                top: `${topPercent}%`,
                backgroundColor: dotColor,
                zIndex: 20,
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#fff" }}
              />
            </motion.div>
          );
        })}

      </div>
    </div>
  );
}
