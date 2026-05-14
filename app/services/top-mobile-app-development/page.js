import MobileAppPage from '@/components/services/MobileAppDevelopment/MobileAppPage'
import ServicesLayout from '@/layout/ServiceLayout'
import React from 'react'

export const metadata = {
  title: 'Top Mobile App Development Services & Solutions | Dignite Studios',
  description: 'Leading mobile app development company offering iOS, Android, hybrid, and cross-platform solutions. Expert developers building scalable, high-performance apps.',
  alternates: {
    canonical: 'https://www.dignitestudios.com/services/top-mobile-app-development',
  },
};

const page = () => {
  return (
    <ServicesLayout page={<MobileAppPage />} />
  )
}

export default page
