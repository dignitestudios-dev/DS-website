import WebAppPage from '@/components/WebDevelopment/WebAppPage'
import GlobalLayout from '@/layout/GlobalLayout'
import React from 'react'

const page = () => {
    return (
        <GlobalLayout page={<WebAppPage />} />
    )
}

export default page
