"use client"
import Navbar from '@/components/global/Navbar'
import { GlobalContext } from '@/context/GlobalContext'
import Image from 'next/image'
import { useContext, useEffect } from 'react'
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

export default function Home() {
  const { palette } = useContext(GlobalContext)
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  });
  return (
    <div
      className="w-full transition-all duration-700"
      style={{
        background: palette?.background,
        color: palette?.color,
      }}
    >
      <div className="overflow-x-hidden w-full h-auto flex flex-col justify-start items-center gap-4">
        <Cursor />
        <Navbar />
        <Hero />

        <div className="scroller relative w-full h-96" data-speed="fast">
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
      </div>
    </div>
  )
}
