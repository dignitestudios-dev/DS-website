import { GlobalContext } from "@/context/GlobalContext";
import React, { useContext } from "react";

const BenefitCard = ({benefit}) => {
    const {theme} = useContext(GlobalContext);
  return (
    <div
      className={`w-full h-[300px] rounded-[18px] ${theme === 'dark' ? 'bg-[#1c1c1c]' :'bg-[#FAFAFA]'} p-6 pt-3 flex flex-col items-start gap-0 text-start`}
    >
      <h5 className="text-[#B8B8B8] text-[40px] font-bold">{benefit?.count}</h5>
      <h1 className="font-semibold text-xl mb-2">
        {benefit?.title}
      </h1>
      <p className={`${theme === 'light' ? 'text-[#424242]':"text-slate-200"} text-[13px] font-medium`}>
        {benefit?.description}
      </p>
    </div>
  );
};

export default BenefitCard;
