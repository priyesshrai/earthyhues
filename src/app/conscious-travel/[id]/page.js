import React, { lazy, Suspense } from "react";
const ConsciousDetail = lazy(() => import("./conscious"));
import axios from "axios";
import Loading from "@/components/Loading/Loading";

function page({ params }) {
  return (
    <Suspense fallback={<Loading />}>
      <ConsciousDetail dest={params.id} />
    </Suspense>
  );
}

export async function generateMetadata({ params }) {
  const response = await axios.get(
    `https://www.earthyhues.co.in/api-conscious-travel/${params.id}`
  );
  const data = response.data;
  return {
    title: `${data[0].title}`,
  };
}

export default page;
