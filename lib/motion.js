export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  });
  
  export const bgVariant = (color,transColor, type, delay, duration) => ({
    hidden: {
      backgroundColor: color,
      opacity:0.8
    },
    show: {
      backgroundColor: transColor,
      opacity:1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeIn",
      },
    },
  });
  

  export const bg2Variant =  (direction, type, delay, duration) => ({
     hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  });