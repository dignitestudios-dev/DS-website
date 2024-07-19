import IosPage from '@/components/services/IosAppDevelopmentServices/IosPage'
import ServicesLayout from '@/layout/ServiceLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <ServicesLayout page={<IosPage/>}/>
    </div>
  )
}

export default page
