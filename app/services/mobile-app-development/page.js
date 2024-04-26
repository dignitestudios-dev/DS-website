import MobileAppPage from '@/components/services/MobileAppDevelopment/MobileAppPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
  return (
    <GlobalLayout page={<MobileAppPage />} />
  )
}

export default page
