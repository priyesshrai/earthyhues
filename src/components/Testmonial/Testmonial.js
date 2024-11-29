"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Loading from "../Loading/Loading";

function Testmonial() {
  // const [isFullTextVisible, setIsFullTextVisible] = useState(false);
  const [feedback, setFeedback] = useState([]);
  // const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://www.earthyhues.co.in/home-page-feedback")
      .then((response) => {
        if (Array.isArray(response.data) && response.data.length >= 1) {
          setFeedback(response.data);
          // console.log(response.data);
        } else {
          console.error("Invalid response format or insufficient data");
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
      margin: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
      margin: 20,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
    // tablet: {
    //   breakpoint: { max: 1024, min: 768 },
    //   items: 3,
    //   slidesToSlide: 3,
    //   margin: 20,
    // },
    // mobile: {
    //   breakpoint: { max: 767, min: 464 },
    //   items: 1,
    //   slidesToSlide: 1
    // }
  };

  return (
    <section className="testimonial-one testimonial-one--home mt-5 pad">
      <div
        className="testimonial-one__bg"
        // style={{
        //   backgroundImage: "url(assets/images/shapes/testimonial-1-bg-2.png)"
        // }}
      ></div>
      {/* /.testimonial-one__bg */}
      <div className="container">
        <div className="sec-title text-center">
          <p className="sec-title__tagline">Testimonial</p>
          {/* /.sec-title__tagline */}
          <h2 className="sec-title__title">
            What Our Customers are
            <br /> Saying?
          </h2>
        </div>
      </div>
      <div className="container">
        <div
          className="testimonial-one__carousel trevlo-owl__carousel trevlo-owl__carousel--basic-nav trevlo-owl__carousel--with-shadow owl-theme owl-carousel"
          data-owl-options='{
		  "items": 3,
		  "margin": 42,
		  "smartSpeed": 700,
		  "loop":false,
		  "autoplay": 6000,
		  "nav":false,
		  "dots":true,
		  "navText": ["<span class=\"fa fa-angle-left\"></span>","<span class=\"fa fa-angle-right\"></span>"],
		  "responsive":{
		  "0":{
		  "items": 1
		  },
		  "768":{
		  "items": 2
		  },
		  "1200":{
		  "items": 3,
		  "dots": false
		  }
		  }
		  }'
        >
          <Carousel
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={false}
            infinite={true}
            partialVisible={false}
            arrows={false}
            // dotListClass="custom-dot-list-style"
          >
            {feedback.map((item) => (
              <div className="col-10 text-center m-4" key={item.feedback_id}>
                <div className="item">
                  <div
                    className="testimonials-card text-center "
                    style={{ height: "90%" }}
                  >
                    <div className="testimonials-card__image">
                      <img src={item.feedback_img} alt="img" />
                    </div>
                    <div className="testimonials-card__meta">
                      <h5 className="testimonials-card__meta__name">
                        {item.customer_name}
                      </h5>
                      <p className="testimonials-card__meta__designation">
                        {item.customer_detail}
                      </p>
                    </div>
                    <div
                      className="pt-2 "
                      style={{
                        textAlign: "justify",
                        textJustify: "inter-word",
                      }}
                    >
                      <div
                        className="testimonials-card__quote pt-5 mt-2 text-center"
                        dangerouslySetInnerHTML={{
                          __html: item.feedback_detail.substring(0, 200),
                        }}
                      ></div>
                    </div>
                    <a
                      href={`/testimonial/${item.feedback_page_url}`}
                      className="trevlo-btn trevlo-btn--base fmob mt-4"
                    >
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testmonial;
