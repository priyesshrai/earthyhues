"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://www.earthyhues.co.in/api-home-page-travel-blogs")
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="my-5">
      <div className="container">
        <div className="sec-title text-center">
          <p className="sec-title__tagline">World’s best Travel Experience</p>

          <h2 className="sec-title__title">Check Our Travel Blogs</h2>
        </div>
      </div>
      <section class="tour-listing ">
        <div class="container">
          <div class="row">
            {blogs.map((blog) => (
              <div className="col-xl-4 col-md-6" key={blog.travel_blogs_id}>
                <div
                  className=" wow animated fadeInUp animated"
                  data-wow-delay="0.1s"
                  data-wow-duration="1500ms"
                  style={{
                    visibility: "visible",
                    animationDuration: "1500ms",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="tour-listing-two__card tour-listing__card">
                    <Link
                      href={`/blog/${blog.travel_blog_url}`}
                      className="tour-listing__card-image-box hobl"
                    >
                      <Image
                      width={500}
                      height={500}
                        src={blog.travel_blog_img}
                        alt={blog.travel_blogs_title}
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />

                      {/* <div className="tour-listing__card-image-overlay" /> */}
                    </Link>

                    {/* <div className="tour-listing-two__card-show-content">
                                            <div className="tour-listing-two__card-show-title-box">
                                                <h3 className="tour-listing-two__card-show-title tour-listing__card-title">
                                                    <Link href={`/blog/${blog.travel_blog_url}`}>{blog.travel_blogs_title}</Link>
                                                </h3>

                                            </div>
                                            <div className="tour-listing-two__card-show-divider" />
                                            <div className="tour-listing__card-bottom">
                                                <div className="tour-listing__card-bottom-left">
                                                </div>

                                            </div>
                                        </div>
                                        <div className="tour-listing-two__card-hover-content tour-listing__card-content">
                                            <h3 className="tour-listing__card-title">
                                                <Link href={`/blog/${blog.travel_blog_url}`}>{blog.travel_blogs_title}</Link>
                                            </h3>
                                            <p className="tour-listing__card-text text-small" dangerouslySetInnerHTML={{ __html: blog.travel_blog_details.substring(0, 150) }}>
                                            </p>

                                            <div className="tour-listing__card-divider" />
                                            <div className="tour-listing__card-bottom">
                                            </div>
                                        </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeBlog;
