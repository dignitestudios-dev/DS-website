import IosAppPage from '@/components/services/IosAppDevelopment/IosAppPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout page={<IosAppPage />} />
    )
}

export default page
