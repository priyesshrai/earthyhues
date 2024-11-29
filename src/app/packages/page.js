import Loading from "@/components/Loading/Loading";
import dynamic from "next/dynamic";
import React from "react";
const Packages = dynamic(() => import("./mainPage"), {
  loading: () => <Loading />,
});

function page() {
  return <Packages />;
}

export async function generateMetadata() {
  return {
    title: "Travel Package by EarthyHues",
  };
}

export default page;
