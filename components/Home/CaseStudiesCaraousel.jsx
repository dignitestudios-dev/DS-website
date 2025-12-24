"use client";

import { motion, PanInfo, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const cards = [
  { id: 1, title:"Harmonious learning", color:"#000086", link:"/case-studies/harmonious-learning", image: "/images/01.png" },
  { id: 2, title:"BioYap", color:"#C0F765", link:"/case-studies/bioyap", image: "/images/02.png" },
  { id: 3, title:"Wing", color:"#5BAFEB", link:"/case-studies/wing", image: "/images/03.png" },
  { id: 4, title:"Home Hero", color:"#62466B", link:"/case-studies/home-hero", image: "/images/04.png" },
  { id: 5, title:"Crew Roomz", color:"#36C0EF", link:"/case-studies/crew-roomz", image: "/images/05.png" },
  { id: 6, title:"Games4Fun", color:"#440354", link:"/case-studies/games-4-fun", image: "/images/06.png" },
  // { id: 7, image: "/images/07.png" },
];

export default function FlickCardStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = cards.length;

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -80) {
      setActiveIndex((prev) => (prev + 1) % total);
    }
    if (info.offset.x > 80) {
      setActiveIndex((prev) => (prev - 1 + total) % total);
    }
  };

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <div className="relative flex h-[400px] md:h-[820px] w-full items-center justify-center overflow-hidden">
      {cards.map((card, index) => {
        const offset = getCircularOffset(index, activeIndex, total);
        const transforms = getTransforms(offset);

        return (
          <motion.div
            key={card.id}
            drag={offset === 0 ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={transforms}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="absolute cursor-grab active:cursor-grabbing"
            style={{ zIndex: transforms.zIndex }}
          >
            <motion.div className="relative h-[250px] w-[300px] md:h-[450px] md:w-[720px]  rounded-lg bg-neutral-200 shadow-xl">
              <div className={`absolute duration-300 delay-200 bg-[#F15C20] z-40 ${offset == 0 ? "md:h-[510px] h-[300px] w-[320px] -top-2 md:w-[735px]" : " h-[250px] w-[300px] md:h-[450px] md:w-[720px] top-0"}   left-1/2 translate-x-[-50%] rounded-lg transition-all ease-out`}>
              <div className="flex relative z-[9999] justify-between items-end h-full px-3 md:px-8 pb-3" >
                <h2 className={`text-white uppercase ${offset == 0 ? "text-sm md:text-lg pt-6" : "text-2xl pt-4"}  text-center transition-all ease-linear`}>{card.title}</h2>
<Link href={card.link} className="flex items-center gap-2" >

<button className="relative md:text-base text-xs after:absolute text-white after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300 uppercase ">  View Now </button> <FaArrowCircleRight color="white" className="text-xs md:text-xl" /></Link>
              </div>
              </div>
              <motion.div
               className={`relative md:h-[450px] z-50 h-[250px] w-[300px] md:w-[720px] overflow-hidden rounded-[4px] bg-neutral-200 ${
  offset !== 0 ? "border shadow-2xl" : ""
}`}
                animate={{
                  backgroundPositionY: offset === 0 ? "100%" : "0%",
                }}
                transition={
                  offset === 0
                    ? { duration: 40, ease: "linear" }
                    : { duration: 0 }
                }
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% auto",
                  backgroundPositionX: "center",
                  backgroundPositionY: "0%",
                    borderColor: offset !== 0 ? card.color : "transparent",
  borderWidth: offset !== 0 ? "2px" : "0px",
  boxShadow:
    offset !== 0 ? `0 10px 30px ${card.color}60` : "none",
                }}
              />
           
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

function getCircularOffset(index, activeIndex, total) {
  let diff = index - activeIndex;

  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  return diff;
}

function getTransforms(offset) {
  switch (offset) {
    case 0:
      return {
        x: 0,
        y: -5,
        rotate: 0,
        scale: 1,
        opacity: 1,
        zIndex: 10,
      };
    case -1:
      return {
        x: "-25%",
        y: "1%",
        rotate: -7,
        scale: 0.9,
        opacity: 1,
        zIndex: 9,
      };
    case 1:
      return {
        x: "25%",
        y: "1%",
        rotate: 7,
        scale: 0.9,
        opacity: 1,
        zIndex: 9,
      };
    case -2:
      return {
        x: "-45%",
        y: "4%",
        rotate: -12,
        scale: 0.7,
        opacity: 1,
        zIndex: 8,
      };
    case 2:
      return {
        x: "45%",
        y: "4%",
        rotate: 12,
        scale: 0.7,
        opacity: 1,
        zIndex: 8,
      };
    default:
      return {
        x: offset < 0 ? "-35%" : "35%",
        y: "5%",
        rotate: offset < 0 ? -10 : 10,
        scale: 0.6,
        opacity: 0,
        zIndex: 1,
      };
  }
}
