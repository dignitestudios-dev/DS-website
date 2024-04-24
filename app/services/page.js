import ServicesPage from '@/components/Services/ServicesPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
  return (
    <GlobalLayout page={<ServicesPage/>}/>
  )
}

export default page
