import React from 'react'
import DoctorBox from '../Layout/DoctorBox'
import Layout from '../Layout/Layout'
import OurDoctors from '../Layout/OurDoctors'

const Doctor = () => {
  return (
    <div>
        <Layout>
        <DoctorBox/>
        <OurDoctors/>
        </Layout>
    </div>
  )
}

export default Doctor