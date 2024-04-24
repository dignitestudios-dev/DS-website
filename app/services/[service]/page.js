import ServiceDetailPage from '@/components/ServiceDetail/ServiceDetailPage'
import ServiceDetailLayout from '@/layout/ServiceDetailLayout'
import React from 'react'

const page = ({ params }) => {

    return (
        <ServiceDetailLayout page={<ServiceDetailPage />} />
    )
}

export default page