import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const milestones = [1, 2, 3, 4, 5, 6]; // just 6 dots

export default function VerticalTimeline({ palette }) {
  const containerRef = useRef(null);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // top of container enters bottom, bottom enters top
  });

  // Smooth the progress a bit
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Line height grows from top to bottom
  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="hidden lg:block relative w-auto h-[80rem]">
      {/* Line container */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full flex flex-col items-center">

        {/* Background gray line */}
        <div
          className="absolute w-[2px] top-28 bottom-[105px] bg-[#B4B4B4]/50 z-0"
        />

        {/* Animated black/colored line */}
        <motion.div
          style={{ height: lineHeight }}
          className="absolute w-[3px] origin-top top-28 mb-[105px] bg-black z-10"
        />

        {/* Dots */}
        {milestones.map((_, index) => {
          // Evenly spaced dots along the line
          const topPercent = ((index + 0.5) / milestones.length) * 100;

          // Dot becomes black when scroll reaches its position
          const dotColor = useTransform(
            smoothProgress,
            [topPercent / 100 - 0.10, topPercent / 100],
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
