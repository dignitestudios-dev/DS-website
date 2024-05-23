import IosAppPage from '@/components/services/IosAppDevelopment/IosAppPage'
import ServicesLayout from '@/layout/ServiceLayout'
import React from 'react'

const page = () => {
    return (
        <ServicesLayout page={<IosAppPage />} />
    )
}

export default page
