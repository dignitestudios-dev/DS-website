"use client";
import React from 'react'
import Hero from './Hero'
import Services from './Services';
import WhyChooseUsSection from './WhyChooseUsSection';
import Testimonials from './Testimonials';
import FAQS from './FAQS';
import HybridAppContactForm from '@/components/global/HybridAppContactForm';
import OurOffices from './OurOffices';
import AmaizingShowCase from './AmaizingShowCase';
import RecentShowCase from './RecentShowCase';
import TechnologyWeUsing from './TechnologyWeUsing';
import DevelopmentCard from './DevelopmentCard';

const MobileAppDevelopmentPPCPage = () => {

  return (
    <div className='w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-hidden'>
      <Hero />
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

export default MobileAppDevelopmentPPCPage
