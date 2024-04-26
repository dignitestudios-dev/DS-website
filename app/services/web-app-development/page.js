import WebAppPage from '@/components/services/WebDevelopment/WebAppPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout page={<WebAppPage />} />
    )
}

export default page
