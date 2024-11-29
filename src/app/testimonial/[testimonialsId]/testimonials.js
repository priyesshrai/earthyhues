"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";

const TestimonialDetail = ({ dest }) => {
  const testimonials_id = dest;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.earthyhues.co.in/api-testimonials/${testimonials_id}`
        );
        setData(response.data[0]);
        // console.log(response.data);
      } catch (error) {
        console.log("Error while loading:", error.response.data);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, [testimonials_id]);

  // if (loading) {
  //     return <Loading />;
  // }

  return (
    <div>
      <section className="page-header mob" alt={data.testimonials_name}>
        <div className="container"></div>
      </section>
      {loading ? (
        <Loading />
      ) : (
        <section className="mt-3">
          <div className="container">
            <div className="tour-listing-details__row row testdest">
              <div className="col-lg-8" style={{ float: "left" }}>
                <div className="tour-listing-details__overview">
                  <h1 className=" animated fadeInUp font-bernadette-rough display-4">
                    {data.testimonials_customer_name}
                  </h1>
                  <div
                    className="wow animated fadeIn"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                  >
                    <h3 className="pageHeading tour-listing-details__title tour-listing-details__overview-title">
                      {data.testimonials_name}
                    </h3>
                  </div>
                  <div
                    className="post-info post-info1"
                    style={{ marginBottom: "1px" }}
                  >
                    <div className="post-category">
                      <div className="post-category__btn-group">
                        {data &&
                          data.with_package &&
                          data.with_package.map((index) => (
                            <Link
                              href={`/packages/${index.package_url}`}
                              className="post-category__btn trevlo-btn trevlo-btn--base testdetbtn"
                              key={index.package_id}
                            >
                              <span>{index.package_name}</span>
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                  {data &&
                    data.testimonials_list &&
                    data.testimonials_list.map((testimonial) => (
                      <div key={testimonial.id}>
                        <p
                          className="tour-listing-details__overview-text wow animated fadeInUp"
                          data-wow-delay="0.1s"
                          data-wow-duration="1500ms"
                          dangerouslySetInnerHTML={{
                            __html: testimonial.testimonial_content,
                          }}
                        ></p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="col-lg-4" style={{ float: "right" }}>
                <aside className="tour-listing-details__sidebar">
                  <div
                    className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center "
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                  >
                    {data &&
                      data.testimonials_list &&
                      data.testimonials_list.map((testimonial) => (
                        <div key={testimonial.id}>
                          <img
                            src={testimonial.testimonial_img}
                            alt="image"
                            className="w-100 mb-2"
                          />
                          <div className="result" />
                        </div>
                      ))}
                  </div>
                </aside>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
      )}
      {data &&
        data.testimonials_list &&
        data.testimonials_list.map((testimonial) =>
          testimonial.testimonials_multiple_img !== null ? (
            <section className="mt-3">
              <div className="container">
                <div className="tour-listing-details__row row">
                  <div className="col-xl-12">
                    <div className="tour-listing-details__overview">
                      <div className="row">
                        {data &&
                          data.testimonials_multiple_img &&
                          data.testimonials_multiple_img.map((index) => (
                            <div className="col-lg-4 col-md-4 " key={index.id}>
                              <img
                                src={index.image}
                                alt="imagses"
                                className="w-100"
                              />
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.row */}
              </div>
              {/* /.container */}
            </section>
          ) : (
            <span>null</span>
          )
        )}
    </div>
  );
};

export default TestimonialDetail;
