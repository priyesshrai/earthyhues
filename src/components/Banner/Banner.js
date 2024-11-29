"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Typewriter from "typewriter-effect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dynamic from "next/dynamic";
import Loading from "../Loading/Loading.js";
import Image from "next/image";
const FormHome = dynamic(() => import("../FormHome/FormHome.js"), {
  loading: () => <Loading />,
});

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    // items: 1
    items: "100%",
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [data, setData] = useState([]);
  const [cap, setCap] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.earthyhues.co.in/home-page-banner")
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length >= 2) {
          setData(response.data[1]);
          if (Array.isArray(response.data[0].banner_caption)) {
            setCap(response.data[0].banner_caption);
          } else {
            console.error("Invalid banner caption data format");
          }
        } else {
          console.error("Invalid response format or insufficient data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (range) => {
    const [startDate, endDate] = range;
    setStartDate(startDate);
    setEndDate(endDate);
  };

  // console.log(data);

  return (
    <section className="main-slider-three mobmarg">
      {/* <div className="container" style={{ position: "relative", zIndex: "-1" }}>
                
            </div> */}

      <div className="main-slider-three__content marg">
        <h5
          className="main-slider-three__sub-title wow fadeInUp font-bernadette-rough"
          data-wow-delay="200ms"
        >
          Plan Your Dream Adventure
        </h5>
        <h3
          className="main-slider-three__title wow fadeInUp"
          data-wow-delay="300ms"
        >
          Discover with <br />
          Expert Guides
        </h3>
      </div>

      <div className="container">
        <FormHome />
      </div>

      {/* banner-form */}

      <div className="main-slider-three__shape-one" />
      <div
        className="main-slider-three__image wow fadeInRight"
        data-wow-delay="200ms"
      >
        <div className="main-slider-one__carousel trevlo-owl__carousel owl-carousel owl-theme">
          <div className="item">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={3000}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              partialVisible={false}
              arrows={false}
              containerClass="bdrRdr"
            >
              {data.map((item) => (
                <div className="main-slider-one__image" key={item.banner_id}>
                  <Image
                    src={item.large}
                    alt=""
                    width={1000}
                    height={1000}
                    priority={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                // <div className="item mobile" key={item.banner_id}>
                // </div>
              ))}
            </Carousel>

            <div className="container">
              <div className="main-slider-one__content">
                <div className="content w-100">
                  <div class="w-100 mb-4">
                    <div className="mobtxt">
                      <span className="display-4 main-slider-three__title spn">
                        Find your
                      </span>
                      <Typewriter
                        options={{
                          strings: cap.map(
                            (item) =>
                              `<span class="font-bernadette-rough display-4">${item.banner_text}</span>`
                          ),
                          autoStart: true,
                          loop: true,
                          cursor: "",
                        }}
                      />
                    </div>
                  </div>
                  <div class="social-media">
                    <a
                      href="https://www.facebook.com/pg/EarthyHuesTours/"
                      target="_blank"
                    >
                      <i class="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/earthyhuestours/"
                      target="_blank"
                    >
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
