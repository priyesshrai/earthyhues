import React from "react";
const Passion = dynamic(() => import("./passion"), {
  loading: () => <Loading />,
});
import axios from "axios";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading/Loading";

function page({ params }) {
  return <Passion dest={params.passionId} />;
}

export async function generateMetadata({ params }) {
  const response = await axios.get(
    `https://www.earthyhues.co.in/passions/${params.passionId}`
  );
  const data = response.data;
  // console.log(data.passion_name);
  return {
    title: `Explore ${data.passion_name} : Nature Travel Experience by EarthyHues`,
  };
}

export default page;
