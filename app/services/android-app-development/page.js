import AndroidAppPage from '@/components/services/AndroidAppDevelopment/AndroidAppPage'
import GlobalLayout from '@/layout/GlobalLayout'
import ServicesLayout from '@/layout/ServiceLayout'
import React from 'react'

const page = () => {
    return (
        <ServicesLayout page={<AndroidAppPage />} />
    )
}

export default page
