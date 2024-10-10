// "use client";
// import React, { useEffect } from "react";

// const MobileAppDevelopmentSlider = () => {
//   return (
//     <div
//       className="scroller1  w-screen h-auto overflow-x-hidden "
//       data-speed="fast"
//       data-animated="true"
//     >
//       <div className="scroller__inner1 w-full  flex justify-start gap-6 items-center   ">
//        <div><h1 className="text-[64px] capitalize font-[400] leading-[77px]" >UX Design</h1></div>
//        <div><img src="/point-circle.png" alt="" srcset="" /></div>
//        <div><h1 className="text-[64px] capitalize font-[400] leading-[77px]" >mobile app development</h1></div>
//        <div><img src="/point-circle.png" alt="" srcset="" /></div>
//        <div><h1 className="text-[64px] capitalize font-[400] leading-[77px]" >iOS</h1></div>
//       </div>
//     </div>
//   );
// };

// export default MobileAppDevelopmentSlider;

"use client";
import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const MobileAppDevelopmentSlider = () => {
  const { theme } = useContext(GlobalContext);
  const logosDard = theme === "light" ? "logos" : "logosDark";
  const logos2Classes = theme === "light" ? "logos2" : "logos2Dark";
  return (
    <div className="w-full lg:w-[100%] mx-auto mt-6  flex flex-col items-center text-center">
      <div className={`w-full lg:w-[100%] mx-auto ${logosDard} flex`}>
        <div className={`w-full logos-slide flex items-center`}>
          <div><h1 className="text-[30px] lg:text-[64px] capitalize font-[400] leading-[20px] lg:leading-[77px]" >UX Design</h1></div>
          <span
        className={`border bg-[#F15C20] p-[16px] lg:p-[19px] h-[20px] lg:h-[40px]  rounded-full  `}
      />
          <div><h1 className="text-[30px] lg:text-[64px] capitalize font-[400] leading-[20px] lg:leading-[77px]" >mobile app development</h1></div>
          <span
        className={`border bg-[#F15C20] p-[16px] lg:p-[19px] h-[20px] lg:h-[40px]  rounded-full  `}
      />
          <div><h1 className="text-[30px] lg:text-[64px] capitalize font-[400] leading-[20px] lg:leading-[77px]" >iOS</h1></div>
          <span
        className={`border bg-[#F15C20] p-[16px] lg:p-[19px] h-[20px] lg:h-[40px]  rounded-full  `}
      />
          <div><h1 className="text-[30px] lg:text-[64px] capitalize font-[400] leading-[20px] lg:leading-[77px]" >UX Design</h1></div>
          <span
        className={`border bg-[#F15C20] p-[16px] lg:p-[19px] h-[20px] lg:h-[40px]  rounded-full  `}
      />
          <div><h1 className="text-[30px] lg:text-[64px] capitalize font-[400] leading-[20px] lg:leading-[77px]" >mobile app development</h1></div>
          <span
        className={`border bg-[#F15C20] p-[16px] lg:p-[19px] h-[20px] lg:h-[40px]  rounded-full  `}
      />
          <div><h1 className="text-[30px] lg:text-[64px] capitalize font-[400] leading-[20px] lg:leading-[77px]" >iOS</h1></div>
          
        </div>

      </div>

    </div>
  );
};

export default MobileAppDevelopmentSlider;
