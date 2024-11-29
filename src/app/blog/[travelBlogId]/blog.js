"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/Loading/Loading";
const TravelBlogDetail = ({ dest }) => {
  const travel_blog_id = dest;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.earthyhues.co.in/api-travel-blog/${travel_blog_id}`
        );
        setData(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.log("Error while loading:", error.response.data);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, [travel_blog_id]);

  return (
    <div>
      <section className="page-header">
        {/* <div className="page-header__bg" />
            <div className="container">
                <div className="page-header__breadcrumb-box">
                    <ul className="trevlo-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>{data.heading_name}</li>
                    </ul>
                </div>
            </div> */}
      </section>
      {loading ? (
        <Loading />
      ) : (
        <section className="mt-3">
          <div className="container">
            <div className="tour-listing-details__row row">
              {/* <div className="col-xl-4">
                            <aside className="tour-listing-details__sidebar">
                                    <div className="tour-listing-details__sidebar-book-tours tour-listing-details__sidebar-single wow animated fadeInUp text-center"
                                    data-wow-delay="0.1s" data-wow-duration="1500ms">
                                        <img src="./assets/images/about/about-4-2.jpg" alt="image" />
                                    <div className="result" />
                                </div> 
                            </aside>
                        </div> */}
              <div className="col-xl-12">
                <div className="tour-listing-details__overview blogdet">
                  <div
                    className="wow animated fadeIn"
                    data-wow-delay="0.1s"
                    data-wow-duration="1500ms"
                  >
                    <h5
                      className="font-bernadette-rough display-6"
                      style={{ fontWeight: "normal" }}
                    >
                      {data.sub_heading_name}
                    </h5>
                    <h1
                      style={{ padding: "0", fontSize: "x-large" }}
                      className="tour-listing-details__title tour-listing-details__overview-title display-4"
                    >
                      {data.heading_name}
                    </h1>
                    <div
                      class="post-info post-info1"
                      style={{ marginBottom: "2px" }}
                    >
                      <div class="post-category post-category1">
                        <div class="post-category__btn-group">
                          {data &&
                            data.blog_tags &&
                            data.blog_tags.map((index) => (
                              <a
                                href={index.package_url}
                                class="post-category__btn trevlo-btn trevlo-btn--base tag"
                                key={index.blog_tag_id}
                              >
                                <span>{index.blog_intro}</span>
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="blogImageContainer col-lg-6 mb-3 mx-2">
                    <img
                      src={data.intro_image}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                  <span
                    dangerouslySetInnerHTML={{ __html: data.blog_intro }}
                  ></span>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}

          {/* /.container */}
        </section>
      )}

      <section className="blogdetail">
        <div className="container">
          <div className="tour-listing-details__row row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="tour-listing-details__overview">
                {/* <div className="wow animated fadeIn" data-wow-delay="0.1s" data-wow-duration="1500ms">
                                <h3 className="tour-listing-details__title tour-listing-details__overview-title mb-5">
                                Top places to visit in Bhutan</h3>
                            </div> */}
                {/* <div className="row ">
                                {data && data.blog_child_para && data.blog_child_para.map((index) => (
                                    <div className="shadowBox" key={index.id} >
                                    <div className="col-md-4 rightsidediv">
                                        <img src={index.blog_image} alt={index.blog_heading} className='w-100 rounded mt-5 float-left'/>
                                    </div>
                                    <div className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                                        data-wow-delay="0.3s"
                                        data-wow-duration="1500ms"
                                        // style={{
                                        //     flex: '1',
                                        //     display: 'flex',
                                        //     flexDirection: 'column',
                                        //     justifyContent: 'center',
                                        //     visibility: "visible",
                                        //     animationDuration: "1500ms",
                                        //     animationDelay: "0.3s",
                                        //     animationName: "fadeInUp"
                                        // }}
                                    >      
                                        <div className="tour-listing-details__reviews-inner-content mob">
                                            <div className="tour-listing-details__reviews-info pt-4">
                                                <h3 className="tour-listing-details__reviews-name">{index.blog_heading}</h3>    
                                            </div>
                                        </div>
                                        <p className="tour-listing-details__reviews-text" dangerouslySetInnerHTML={{__html: index.blog_intro}}></p>
                                    </div>
                                </div>
                                
                                ))}
                            </div> */}
                <div className="row">
                  {data &&
                    data.blog_child_para &&
                    data.blog_child_para.map((item, index) => (
                      <div className="shadowBox" key={index.id}>
                        <div className="col-md-4 rightsidediv">
                          {item.blog_image && item.blog_image.trim() !== "" && (
                            <img
                              src={item.blog_image}
                              alt={item.blog_heading}
                              className="w-100 rounded mt-5 float-left"
                              style={{
                                display: item.blog_image ? "block" : "none",
                              }}
                            />
                          )}
                        </div>
                        <div
                          className="tour-listing-details__reviews-content wow animated fadeInUp animated"
                          data-wow-delay="0.3s"
                          data-wow-duration="1500ms"
                        >
                          <div className="tour-listing-details__reviews-inner-content mob">
                            <div className="tour-listing-details__reviews-info pt-4">
                              <h3 className="tour-listing-details__reviews-name">
                                {item.blog_heading}
                              </h3>
                            </div>
                          </div>
                          <p
                            className="tour-listing-details__reviews-text"
                            dangerouslySetInnerHTML={{
                              __html: item.blog_intro,
                            }}
                          ></p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelBlogDetail;
