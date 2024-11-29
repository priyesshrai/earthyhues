import React from 'react'
const TestimonialDetail = dynamic(()=>import('./testimonials'),{
  loading:()=> <Loading/>
});
import axios from 'axios';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading/Loading';

function page({params}) {
  return (
    <TestimonialDetail dest={params.testimonialsId} />
  )
}

export async function generateMetadata({ params }) {
    const response = await axios.get(`https://www.earthyhues.co.in/api-testimonials/${params.testimonialsId}`);
    const data = response.data
    return {
      title: `${data[0].testimonials_name}`,
    }
  }

export default page
