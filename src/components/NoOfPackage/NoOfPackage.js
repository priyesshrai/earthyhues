"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function NoOfPackage() {
    const [noOfPackage, setNoOfPackage] = useState(0);

    useEffect(() => {
      async function packageCount() {
        try {
          const response = await axios.get(
            "https://www.earthyhues.co.in/apipackages"
          );
          setNoOfPackage(response?.data);
        } catch (error) {
          console.log(error);
        }
      }
      packageCount();
    }, []);
  return (
    <section className="counter-three">
        <div
          className="counter-three__bg"
          style={{
            backgroundImage: "url(assets/images/shapes/counter-bg-3.png)",
          }}
        />
        <div className="counter-three__shape-top" />
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-md-12 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="sec-title text-left">
                <p className="sec-title__tagline">Are you ready to travel</p>
                {/* /.sec-title__tagline */}
                <h2 className="sec-title__title">
                  Explore Our Tours &amp;
                  <br />
                  Start Your Adventure Today
                </h2>
                {/* /.sec-title__title */}
              </div>
              {/* /.sec-title */}
              {/* /.sec-title */}
              <p className="counter-three__text">
                Embark on an adventure with EarthyHues, offering handpicked
                tours blending excitement, relaxation, and cultural immersion
                for unforgettable memories.
              </p>
            </div>
            <div
              className="col-xl-2 col-md-4 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="counter-three__box @@extraClassName">
                <div className="counter-three__box__icon">
                  <span className="icon-happy-Travel" />
                </div>
                {/* /.counter-box__icon */}
                <h3 className="counter-three__box__number count-box">
                  <span
                    className="count-text"
                    data-stop="1K+"
                    data-speed={1500}
                  />
                  1 K+
                </h3>
                <p className="counter-three__box__title">No. of travellers</p>
              </div>
            </div>
            {/* /.col-xl-2 col-md-4 */}
            <div
              className="col-xl-2 col-md-4 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="counter-three__box @@extraClassName">
                <div className="counter-three__box__icon">
                  <span className="icon-tent-1" />
                </div>
                {/* /.counter-box__icon */}
                <h3 className="counter-three__box__number count-box">
                  <span
                    className="count-text"
                    data-stop="50+"
                    data-speed={1500}
                  />
                  {noOfPackage?.length}+
                </h3>
                <p className="counter-three__box__title">No. of Packages</p>
              </div>
            </div>
            {/* /.col-xl-2 col-md-4 */}
            <div
              className="col-xl-2 col-md-4 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="counter-three__box @@extraClassName">
                <div className="counter-three__box__icon">
                  <span className="icon-satisfied" />
                </div>
                {/* /.counter-box__icon */}
                <h3 className="counter-three__box__number count-box">
                  <span
                    className="count-text"
                    data-stop="98%"
                    data-speed={1500}
                  />
                  98%
                </h3>
                <p className="counter-three__box__title">Google Ranking</p>
              </div>
            </div>
            {/* /.col-xl-2 col-md-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="counter-three__shape-bottom" />
      </section>
  )
}
