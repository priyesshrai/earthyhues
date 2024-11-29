"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import dynamic from "next/dynamic";
import Loading from "../Loading/Loading";
import Image from "next/image";
const CardLoader = dynamic(() => import("../CardLoader/CardLoader"), {
  loading: () => <Loading />,
});

const TripData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.earthyhues.co.in/api-upcoming-trip-home"
        );
        setData(response?.data);
      } catch (error) {
        console.error("Error fetching Testimonial:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-5">
      <div className="container">
        <div className="sec-title text-center">
          <p className="sec-title__tagline pt-5">
            Best Destinations Across Globe
          </p>
          <h2 className="sec-title__title">Upcoming Adventure Awaits</h2>
        </div>
      </div>
      <section className="tour-type-two home_page">
        <div className="container">
          {!data.length ? (
            <section className="row justify-content-center">
              <CardLoader />
              <CardLoader />
              <CardLoader />
            </section>
          ) : (
            <div className="row justify-content-md-center">
              {data.map((item) => (
                <div
                  className="col-lg-4 col-md-6 col-sm-12 wow fadeInUp mb-5"
                  data-wow-delay="100ms"
                  key={item.dnid}
                >
                  <Link href={`destination/${item.url}`}>
                    <div className="toureCard">
                      <div className="toureImageContainer">
                        <Image width={1000} height={1000} src={item.image} alt="" />
                      </div>
                      <div className="tourDataContainer">
                        <h5 className="tour-type-two__box__front__title">
                          {item.destination_name}
                        </h5>
                        {Object.keys(item.locations)
                          .slice(0, 5)
                          .map((key, index) => (
                            <span
                              className="post-category__btn trevlo-btn trevlo-btn--base locationBtn"
                              key={index}
                            >
                              <span>{item.locations[key]}</span>
                            </span>
                          ))}
                        <p
                          className="tour-type-two__box__front__text mt-3"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TripData;
