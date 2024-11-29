import dynamic from "next/dynamic";
import React from "react";
import Loading from "../Loading/Loading";
const TripData = dynamic(() => import("./TripData"), {
  loading: () => <Loading />,
});

function Upcomingtrip() {
  return <TripData />;
}

export default Upcomingtrip;
