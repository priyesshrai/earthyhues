import React from 'react'
const PackageDetail = dynamic(()=>import('./package'),{
  loading:()=> <Loading/>
})
import axios from 'axios';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading/Loading';

function page({params}) {
  return (
    <PackageDetail dest={params.packageId} />
  )
}

export async function generateMetadata({ params }) {
    const response = await axios.get(`https://www.earthyhues.co.in/apipackages/${params.packageId}`)
    const dt = response.data[0]
    return {
      title: `${dt.package_title} Travel Package by EarthyHues`,
    }
}

export default page
