import AboutUsPage from '@/components/AboutUs/AboutUsPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout page={<AboutUsPage />} />
    )
}

export default page