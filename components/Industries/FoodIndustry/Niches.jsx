"use client"
import Link from "next/link";
import React from "react";
import { FaFish, FaPizzaSlice, FaUtensils, FaGlassCheers } from "react-icons/fa";
import {
  GiCakeSlice,
  GiCookingPot,
  GiMeat,
  GiMilkCarton,
  GiBread,
  GiHoneyJar,
  GiMeal,
  GiHealthPotion,
  GiEarthAsiaOceania,
  GiHouse,
  GiCirclingFish,
} from "react-icons/gi";
import { MdArrowOutward, MdOutlineEmojiFoodBeverage } from "react-icons/md";

const niches = [
  { title: "Fish & Seafood Delivery Marketplace", icon: <GiCirclingFish className="text-white" size={45} /> },
  { title: "Cake & Dessert Delivery Marketplace", icon: <GiCakeSlice className="text-white" size={45} /> },
  { title: "Pizza Delivery Marketplace", icon: <FaPizzaSlice className="text-white" size={45} /> },
  { title: "Restaurant Aggregator Marketplace", icon: <FaUtensils className="text-white" size={45} /> },
  { title: "Specialty Food Delivery Platforms", icon: <GiCookingPot className="text-white" size={45} /> },
  { title: "Home-Cooked Food Delivery Marketplace", icon: <GiHouse className="text-white" size={45} /> },
  { title: "Meat Delivery Marketplace", icon: <GiMeat className="text-white" size={45} /> },
  { title: "Beverages Delivery Marketplace", icon: <MdOutlineEmojiFoodBeverage  className="text-white" size={45} /> },
  { title: "Dairy Products Delivery Marketplace", icon: <GiMilkCarton className="text-white" size={45} /> },
  { title: "Bakery Products Delivery Marketplace", icon: <GiBread className="text-white" size={45} /> },
  { title: "Sweeteners Delivery Marketplace", icon: <GiHoneyJar className="text-white" size={45} /> },
  { title: "Meal Kit Delivery Marketplace", icon: <GiMeal className="text-white" size={45} /> },
  { title: "Diet-Specific Delivery Marketplace", icon: <GiHealthPotion className="text-white" size={45} /> },
  { title: "Regional Cuisine Delivery Marketplace", icon: <GiEarthAsiaOceania className="text-white" size={45} /> },
];
  

const Niches = () => {
  return (
    <section className="w-full  bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl tracking-tighter md:text-7xl font-bold leading-[42px] lg:leading-[1.1] ">
          Food Delivery App Development Services for Different   <span className="text-[#F15C20] text-nowrap">Niches</span>
        </h2>
        <p className="mt-5 text-base md:text-lg mx-auto">
       Having an experience of 10+ years in different industries and niches, we assure you that the food delivery app solutions we provide work for a variety of business models. We can work for anyone, whether it’s a single restaurant or a multi-vendor platform. The apps we create are built to meet the unique needs of each niche.
        </p>

        <div className="mt-28 flex gap-x-4 gap-y-16  flex-wrap justify-center items-center">
          {niches.map((item) => (
            <article key={item.title} className="relative w-[250px] bg-white rounded-2xl border border-[#D3D3D8] p-6 pt-14 shadow-sm hover:shadow-lg transition-all">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#F15C20] shadow-[0_8px_20px_rgba(241,92,32,0.35)]">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1F222E] mt-2">{item.title}</h3>
            </article>
          ))}
        </div>

            <Link
          href="/contact-us"
          className="flex items-center mt-8 group justify-center "
        >
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white text-sm  px-7 py-3 rounded-full font-normal transition-colors">
            Start Your Niche App Project
          </button>
          <button className="bg-[#F15C20] group-hover:bg-white group-hover:border group-hover:border-[#F15C20] group-hover:text-[#F15C20] text-white w-11 h-11 rounded-full flex items-center justify-center transition-colors text-lg">
            <MdArrowOutward />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Niches;
