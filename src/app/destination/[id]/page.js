import React from "react";
const Destinations = dynamic(() => import("./destination"), {
  loading: () => <Loading />,
});
import axios from "axios";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading/Loading";

function page({ params }) {
  return <Destinations dest={params.id} />;
}
export async function generateMetadata({ params }) {
  const response = await axios.get(
    `https://www.earthyhues.co.in/destinations/${params.id}`
  );
  const data = response.data;
  const title = data.destination?.[0]?.destination_name;
  return {
    title: `Explore ${title} : Nature Travel Experience by EarthyHues`,
  };
}

export default page;
