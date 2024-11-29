"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";
import Image from "next/image";

function Testimonial() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.earthyhues.co.in/api-testimonials"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching Testimonial:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  // if (loading) {
  //     return <Loading />;
  // }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section className="page-header">
        <div className="container"></div>
      </section>
      {loading ? (
        <Loading />
      ) : (
        <section className="section-space">
          <div className="container">
            <div className="row">
              <h3
                className="offer-one__heading sec-title__heading text-left"
                style={{
                  //   marginTop: "-62px",
                  paddingLeft: "200",
                  fontSize: "25px!important",
                }}
              >
                <span className="font-bernadette-rough display-4">
                  Testimonials
                </span>
              </h3>
              {data.map((index) => (
                <div className="col-lg-4" key={index.testimonials_id}>
                  <div>
                    <div className="card h-100" style={{ border: "none" }}>
                      <div className="card-height h-100">
                        <div className="testcontent">
                          <Image
                            width={1000}
                            height={1000}
                            className="card-img-top testimg"
                            src={index.testimonials_image}
                            alt={index.testimonials_url}
                          />
                        </div>
                        <div className="card-body">
                          <h4
                            className="blog-card__title"
                            style={{ marginBottom: "5px" }}
                          >
                            <Link
                              href={`/testimonial/${index.testimonials_url}`}
                            >
                              {index.testimonials_name}
                            </Link>
                          </h4>
                          <p style={{ color: "#13a5b6" }}>
                            {index.testimonials_customer_name}
                          </p>
                          <div
                            class="post-info"
                            style={{
                              marginBottom: "5px",
                              paddingTop: "0px",
                              paddingBottom: "0px",
                            }}
                          >
                            <div class="post-category">
                              <div
                                class="post-category__btn-group"
                                style={{ gap: "3px" }}
                              >
                                {index &&
                                  index.with_package &&
                                  index.with_package.map((item) => (
                                    <Link
                                      href={`packages/${item.package_url}`}
                                      onClick={scrollToTop}
                                      className="post-category__btn trevlo-btn trevlo-btn--base"
                                      style={{
                                        padding: "6px 5px",
                                        fontSize: "12px",
                                      }}
                                    >
                                      <span>{item.package_name}</span>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          </div>
                          <p
                            className="text-justify"
                            dangerouslySetInnerHTML={{
                              __html: index.testimonials_details.substring(
                                0,
                                200
                              ),
                            }}
                            style={{ textAlign: "justify" }}
                          ></p>

                          <Link
                            class=" trevlo-btn trevlo-btn--base text-white"
                            href={`/testimonial/${index.testimonials_url}`}
                            style={{ padding: "10px 20px" }}
                            onClick={scrollToTop}
                            prefetch={true}
                          >
                            <span>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Testimonial;
