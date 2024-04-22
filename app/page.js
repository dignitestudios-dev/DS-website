import HomePage from '@/components/Home/HomePage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
  return (
    <GlobalLayout page={<HomePage />} />
  )
}

export default page