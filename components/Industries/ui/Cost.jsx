import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const defaultCards = [
  {
    label: "Simple Apps",
    range: "$10,000 to $25,000",
    detail:
      "If you’re going to create basic apps with essential features like menu browsing and order placement, with simple payment options. These types of apps are ideal for startups.",
  },
  {
    label: "Mid-Level Apps",
    range: "$25,000 to $80,000",
    detail:
      "An app with advanced features, multiple panels, real-time tracking, analytics, and integration with payment gateways and maps.",
  },
  {
    label: "Advanced Apps",
    range: "$80,000 to $150,000+",
    detail:
      "Feature-rich platforms for multi-vendor marketplaces, cloud kitchens, AI recommendations, loyalty programs, and high scalability.",
  },
];

const Cost = ({
  title = "Food Delivery App Development Cost Industry-Wide",
  description =
  
    "The cost of developing a food delivery app isn’t the same for every type. It varies widely depending on features, complexity, platform choice, and third-party integrations. We can provide an average based on market research and studies. It doesn’t represent Dignite Studios’ pricing models, so for a specific quote, ",
  cards = defaultCards,
  ctaText = "Plan Your App Budget",
btn
}) => {
  return (
    <section className="relative  mx-auto  max-w-screen-2xl w-[80%] px-4  flex flex-col items-center gap-12">
      <div className="text-center">
        <h2 className="text-4xl md:text-7xl font-bold leading-[1.05] tracking-tighter">
          {title}
        </h2>
        <p className="mt-4 text-sm md:text-lg font-light leading-[1.36] text-[#2A2A2A]">
          {description}
     
          .
        </p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {cards.map((card) => (
          <article
            key={card.label}
            className="relative hover:-mt-4 transition-all ease-linear rounded-[36px] p-[2px] bg-[linear-gradient(146.27deg,#F15C20_2.05%,#E5E5E5_97.86%)] w-[364px] h-[432px] border-opacity-40  shadow-lg"
          >
            <div className="flex bg-white rounded-[35px] p-6  flex-col items-center justify-center gap-3 h-full">
              <div className="bg-[#FFF8EF] text-[#F15C20] px-5 py-2 rounded-full font-semibold text-base">
                {card.label}
              </div>
              <div className="text-sm font-medium text-[#0C0C0C]">Estimated Cost:</div>
              <div className="text-xl md:text-2xl  font-bold text-[#F15C20]">{card.range}</div>
              <p className="text-sm leading-6 text-[#1F1F1F] text-center">{card.detail}</p>
            </div>
          </article>
        ))}
      </div>

     {btn &&   <Link
          href={"/contact-us"}
          className="flex items-center group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            {btn}
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>}
    </section>
  );
};

export default Cost;
