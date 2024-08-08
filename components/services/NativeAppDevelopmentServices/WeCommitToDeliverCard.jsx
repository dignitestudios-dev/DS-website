import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const WeCommitToDeliverCard = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <div
        className={`w-full p-6 pb-0 rounded-[24px] relative ${
          theme === "light" ? "bg-[#FAFAFA]" : ""
        }`}
      >
        <h3 className="font-semibold text-[24px]">
          <span className="text-[#f15c20]">Full Stack</span> Native App
          Development Services
        </h3>
        <img
          src="/full-stack-native-app-mockup.png"
          alt="full-stack-native-app-mockup"
          title="full-stack-native-app-mockup"
          className="h-[411px] mx-auto"
        />
      </div>
      <p
        className={
          "text-[#666666] text-xs leading-[15.6px] mt-3 tracking-[-0.41%]"
        }
      >
        With years of dedicated experience, Dignite Studios has accompanied
        leading industries with powerful strategies to benchmark the title among
        large enterprises. Our native mobile app development services create
        platform-specific apps with modern features and smooth functionality to
        upgrade online existence. We adapt sharp-witted procedures in the
        production of mobile applications for both iOS and Android native apps
        to rank businesses to the fullest. 
      </p>
    </div>
  );
};

export default WeCommitToDeliverCard;
