import TopRatedMobileAppDevelopmentPage from '@/components/services/TopRatedMobileAppDevelopment/TopRatedMobileAppDevelopmentPage'
import ServicesLayout from '@/layout/ServiceLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServicesLayout page={<TopRatedMobileAppDevelopmentPage/>}/>
    </div>
  )
}

export default page
