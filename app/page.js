"use client"
import Navbar from '@/components/global/Navbar'
import { GlobalContext } from '@/context/GlobalContext'
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import CaseStudiesSection from '@/components/Home/CaseStudiesSection'
import Faq from '@/components/Home/Faq'
import FindOurOfficesSection from '@/components/Home/FindOurOfficesSection'
import Footer from '@/components/Home/Footer'
import Hero from '@/components/Home/Hero'
import IndustriesSection from '@/components/Home/IndustriesSection'
import LandingContactUs from '@/components/Home/LandingContactUs'
import Process from '@/components/Home/Process'
import ServicesSection from '@/components/Home/ServicesSection'
import Slider from '@/components/Home/Slider'
import Technologies from '@/components/Home/Technologies'
import Testimonials from '@/components/Home/Testimonials'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import Cursor from '@/components/global/Cursor'
import FixedSocials from '@/components/global/FixedSocials'
import Sidebar from '@/components/global/Sidebar'
import ParallaxText from '@/components/Home/ParallaxText'
import { IoArrowUpSharp } from "react-icons/io5";

export default function Home() {
  const { palette } = useContext(GlobalContext)
  // useEffect(() => {
  //   const scrollers = document.querySelectorAll(".scroller");

  //   // If a user hasn't opted in for recuded motion, then we add the animation
  //   if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  //     addAnimation();
  //   }

  //   function addAnimation() {
  //     scrollers.forEach((scroller) => {
  //       // add data-animated="true" to every `.scroller` on the page
  //       scroller.setAttribute("data-animated", true);

  //       // Make an array from the elements within `.scroller-inner`
  //       const scrollerInner = scroller.querySelector(".scroller__inner");
  //       const scrollerContent = Array.from(scrollerInner.children);

  //       // For each item in the array, clone it
  //       // add aria-hidden to it
  //       // add it into the `.scroller-inner`
  //       scrollerContent.forEach((item) => {
  //         const duplicatedItem = item.cloneNode(true);
  //         duplicatedItem.setAttribute("aria-hidden", true);
  //         item.length > 12 && item.remove()
  //         scrollerInner.appendChild(duplicatedItem);
  //       });
  //     });
  //   }
  // });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scroll behavior
    });
  }

  // Sidebar states and ref:
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <div
      className="w-full transition-all duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
        <Navbar setIsOpen={setIsSidebarOpen} />
        <Hero />

        <div className="scroller relative w-full h-96" data-speed="fast" data-animated="true">
          <Slider />
        </div>

        <Technologies />
        <CaseStudiesSection />
        <ServicesSection />
        <Process />
        <WhyChooseUsSection />
        <IndustriesSection />
        <Testimonials />
        <Faq />
        <LandingContactUs />
        <FindOurOfficesSection />
        <Footer />
        <FixedSocials />
        <button name='scroll-to-top' onClick={scrollToTop} className='shadow-lg text-2xl flex justify-center items-center w-14 h-14 rounded-full  text-white fixed bottom-4 right-4' style={{
          background: palette?.brandOrange,
          color: "white"
        }}>
          <IoArrowUpSharp />
        </button>
      </div>
    </div>
  )
}
