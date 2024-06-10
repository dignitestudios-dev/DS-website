import React from 'react'
import MobileAwardsRecognition from '../MobileAppDevelopment/MobileAwardsRecognition'
import TopRatedNavbar from './TopRatedNavbar'
import TopRatedServices from './TopRatedServices'
import CaseStudiesSection from '@/components/Home/CaseStudiesSection'
import WhyChooseUsSection from '@/components/Home/WhyChooseUsSection'
import Testimonials from '@/components/Home/Testimonials'
import ExpertMobileAppDevelopersSection from './ExpertMobileAppDevelopersSection'
import TopRatedPageOurOffices from './TopRatedPageOurOffices'
import TopRatedAppDevelopmentContactSection from './TopRatedAppDevelopmentContactSection'
import TopRatedHero from './TopRatedHero'
import TopRatedMobileAppCategories from './TopRatedMobileAppCategories'
import TopRatedAppDevelopmentWorkflow from './TopRatedAppDevelopmentWorkflow'
import TopRatedAppDevFaq from './TopRatedAppDevFaq'

const TopRatedMobileAppDevelopmentPage = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-start overflow-x-hidden overflow-y-auto'>
      <TopRatedHero/>
      <MobileAwardsRecognition />
      <TopRatedServices />
      <TopRatedMobileAppCategories />
      <ExpertMobileAppDevelopersSection />
      <CaseStudiesSection />
      <TopRatedAppDevelopmentWorkflow />
      <WhyChooseUsSection />
      <Testimonials />
      <TopRatedAppDevFaq />
      <TopRatedAppDevelopmentContactSection />
      <TopRatedPageOurOffices />
    </div>
  )
}

export default TopRatedMobileAppDevelopmentPage
