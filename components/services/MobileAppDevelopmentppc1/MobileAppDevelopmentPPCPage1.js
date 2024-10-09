"use client";
import React from 'react'
import Hero from './Hero'
import Services from '../MobileAppDevelopmentppc/Services';
import WhyChooseUsSection from '../MobileAppDevelopmentppc/WhyChooseUsSection';
import Testimonials from '../MobileAppDevelopmentppc/Testimonials';
import FAQS from '../MobileAppDevelopmentppc/FAQS';
import HybridAppContactForm from '@/components/global/HybridAppContactForm';
import AmaizingShowCase from './AmaizingShowCase';
import RecentShowCase from '../MobileAppDevelopmentppc/RecentShowCase';
import TechnologyWeUsing from '../MobileAppDevelopmentppc/TechnologyWeUsing';
import DevelopmentCard from '../MobileAppDevelopmentppc/DevelopmentCard';
import MobileAppDevelopmentSlider from './MobileAppDevelopmentSlider';
import OurOffices from '../MobileAppDevelopmentppc/OurOffices';

const MobileAppDevelopmentPPC1Page = () => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-hidden'>
      <Hero />
      <MobileAppDevelopmentSlider/>
      <AmaizingShowCase />
      <Services />
      <RecentShowCase />
      <TechnologyWeUsing/>
      <DevelopmentCard/>
      <WhyChooseUsSection />
      <Testimonials />
      <FAQS />
      <HybridAppContactForm />
      <OurOffices />
    </div>
  )
}

export default MobileAppDevelopmentPPC1Page
