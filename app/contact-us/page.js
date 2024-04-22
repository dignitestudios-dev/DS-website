import ContactUsPage from '@/components/ContactUs/ContactUsPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout page={<ContactUsPage />} />
    )
}

export default page