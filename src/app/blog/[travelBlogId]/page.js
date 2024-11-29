import React from 'react'
const TravelBlogDetail = dynamic(()=>import('./blog'),{
  loading:()=> <Loading/>
}) 
import axios from 'axios';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading/Loading';

function page({params}) {
  return (
    <TravelBlogDetail dest={params.travelBlogId} />
  )
}

export async function generateMetadata({ params }) {
    const response = await axios.get(`https://www.earthyhues.co.in/api-travel-blog/${params.travelBlogId}`);
    const data = response.data
    return {
      title: `${data[0].heading_name}`,
    }
  }

export default page
