"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "@/components/Loading/Loading";
import Link from "next/link";
import NotFoundLoader from "@/components/NotFoundLoader/NotFoundLoader";
import Image from "next/image";
// import { fetchDestinationPaths } from "@/helper/feachPath";

function Blog() {
  const [data, setData] = useState([]);
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(searchQuery);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.earthyhues.co.in/api-travel-blog"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // fetchDestinationPaths()
  }, []);

  useEffect(() => {
    const filterData = data.filter((item) =>
      item.blog_tags.some((tag) =>
        tag.blog_tag.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredData(filterData);
  }, [searchQuery, data]);

  // const query = "place"
  // const filterdata = data.filter((item)=>item.blog_category.toLowerCase().includes(query))

  const handleBlogClick = (blogId) => {
    setSelectedBlogId(blogId);
  };

  // console.log(filteredData.length);
  // console.log(filteredData);

  return (
    <div>
      {/* <section className="page-header">
            <div className="page-header__bg" />
                <div className="container">
                    <div className="page-header__breadcrumb-box">
                        <ul className="trevlo-breadcrumb">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>Travel Blog</li>
                        </ul>
                    </div>
                </div>
            </section> */}
      <section className="page-header">
        <div className="container"></div>
      </section>
      {loading ? (
        <Loading />
      ) : (
        <section className="tour-listing-details tour-listing-details-right section-space">
          <div className="blog-details-page">
            <div className="container">
              <h3
                className="offer-one__heading sec-title__heading text-left"
                style={{
                  // marginTop: "-62px",
                  paddingLeft: "200",
                  fontSize: "25px!important",
                  // left: 23
                  marginBottom: "20px",
                }}
              >
                <span className="font-bernadette-rough display-4">
                  Travel Blog
                </span>
                <div className="searchSection">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{ fill: "#13a5b6" }}
                  >
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search......."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery.length ? (
                    <span
                      className="clearText"
                      onClick={() => setSearchQuery("")}
                    >
                      x
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </h3>
              <div className="row">
                {!filteredData.length ? (
                  ""
                ) : (
                  <div className="col-xl-4 col-lg-5">
                    <div className="sidebar-blog sidebar-blog--left">
                      <aside className="widget-area">
                        {/* <div
                className="sidebar-blog__single sidebar-blog__single--search wow animated fadeInUp"
                data-wow-delay="0s"
                data-wow-duration="1500ms"
              >
                <form action="#" className="sidebar-blog__search">
                  <button type="submit" aria-label="search submit">
                    <span className="icon-search" />
                  </button>
                  <input type="text" placeholder="Type Here" />
                </form>
              </div> */}
                        <div
                          className="sidebar-blog__single sidebar-blog__single--posts wow animated fadeInUp"
                          data-wow-delay="0.1s"
                          data-wow-duration="1500ms"
                        >
                          <h4 className="sidebar-blog__title">Latest posts</h4>
                          <ul className="sidebar-blog__posts ">
                            {filteredData.map((item) => (
                              <li
                                className="sidebar-blog__posts-item"
                                key={item.blog_id}
                              >
                                <div className="sidebar-blog__posts-image">
                                  <img
                                    src={item.blog_image}
                                    alt="latest-post"
                                  />
                                </div>
                                <div className="sidebar-blog__posts-content">
                                  <h4
                                    className="sidebar-blog__posts-title"
                                    onClick={() =>
                                      handleBlogClick(item.blog_id)
                                    }
                                  >
                                    <Link href={`#blog-${item.blog_id}`}>
                                      {item.blog_head_name}
                                    </Link>
                                  </h4>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* <div
                        className="sidebar-blog__single sidebar-blog__single--tags wow animated fadeInUp"
                        data-wow-delay="0.3s"
                        data-wow-duration="1500ms"
                      >
                        <h4 className="sidebar-blog__title">Tags</h4>
                        <div className="sidebar-blog__tags">
                          <a

                            className="trevlo-btn trevlo-btn--white-two"
                          >
                            <span>Travel</span>
                          </a>
                          <a

                            className="trevlo-btn trevlo-btn--white-two"
                          >
                            <span>Travel guide</span>
                          </a>
                          <a

                            className="trevlo-btn trevlo-btn--white-two"
                          >
                            <span>Travel vibes</span>
                          </a>
                          <a

                            className="trevlo-btn trevlo-btn--white-two"
                          >
                            <span>Tourism</span>
                          </a>
                        </div>
                      </div> */}
                      </aside>
                    </div>
                  </div>
                )}
                {!filteredData.length ? (
                  <NotFoundLoader />
                ) : (
                  <div className="col-xl-8 col-lg-7">
                    {filteredData.map((item) => (
                      <div
                        id={`blog-${item.blog_id}`}
                        className="sidebar-blog__single--search mb-5 blog_list"
                        key={item.blog_id}
                      >
                        <Link
                          href={`/blog/${item.blog_url}`}
                          onClick={scrollToTop}
                        >
                          <div className="blog-details">
                            <div className="blog-card-three ">
                              <div className="blog__card">
                                <h4 className="blog_cate_name">
                                  {" "}
                                  {item.blog_category}
                                </h4>
                                <h3 className="blog__card-title">
                                  {item.blog_head_name}
                                </h3>
                                <div className="tags_lis">
                                  {item.blog_tags.map((tag) => (
                                    <span
                                      key={tag.blog_nid}
                                      className="badge bg-info"
                                    >
                                      {tag.blog_tag}
                                    </span>
                                  ))}
                                </div>
                                <div
                                  className="blog__card-img wow animated fadeInUp"
                                  data-wow-delay="0s"
                                  data-wow-duration="1500ms"
                                >
                                  <img
                                    src={item.blog_image}
                                    alt={item.blog_head_name}
                                  />
                                </div>
                                {/* /.blog__card-img */}
                                <div
                                  className="blog__card-content wow animated fadeInUp"
                                  data-wow-delay="0.1s"
                                  data-wow-duration="1500ms"
                                >
                                  <ul className="blog__card-meta">
                                    {/* <li>
                      <span className="blog__card-meta-icon icon-user" />
                      <span className="blog__card-meta-author">By Admin</span>
                    </li>
                    <li>
                      <span className="blog__card-meta-icon icon-bubble-chat-1" />
                      <span className="blog__card-meta-author">2 Comment</span>
                    </li> */}
                                  </ul>
                                  {/* /.blog__card-meta */}

                                  <p
                                    className="blog__card-text"
                                    dangerouslySetInnerHTML={{
                                      __html: item.blog_intro.substring(0, 600),
                                    }}
                                  >
                                    {}
                                  </p>
                                </div>
                                {/* /.blog-details__card-content */}
                              </div>
                              {/* /.blog-details__card */}
                            </div>
                            {/* /.blog-card-three */}
                          </div>
                          {/* /.blog-details */}
                        </Link>
                      </div>
                    ))}
                    {/* /.col-xl-8 col-lg-7 */}
                  </div>
                )}
                {/* /.row */}
              </div>
            </div>
            {/* /.container */}
          </div>
        </section>
      )}
      <button
        className="post-category__btn trevlo-btn trevlo-btn--base"
        style={{
          position: "fixed",
          bottom: "5%",
          left: "5%",
          zIndex: 99999,
          padding: "10px 24px",
        }}
        onClick={scrollToTop}
      >
        <span>Scroll to top</span>
      </button>
    </div>
  );
}

export default Blog;
