"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Modal from "react-modal";
import Loading from "@/components/Loading/Loading";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "justify", // Text justification
    maxWidth: "80%", // Limiting maximum width to 80% of viewport
    maxHeight: "80vh", // Limiting maximum height to 80% of viewport height
    overflowY: "auto", // Enable vertical scrolling if content exceeds modal height
  },
};

const Passion = ({ dest }) => {
  const passion_id = dest;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [details, setDetails] = useState("");
  const [imagesArray, setImagesArray] = useState([]);
  const isVideo = Array.isArray(data.passion_video_or_image_file);

  // console.log(isVideo);

  const openModal = (location) => {
    setSelectedLocation(location);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedLocation(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.earthyhues.co.in/passions/${passion_id}`
        );
        // console.log(response.data);
        setData(response.data);
        setDetails(response.data.passion_details);
        setImagesArray(response.data.passion_video_or_image_file);
      } catch (error) {
        console.error("Error fetching Passion:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, [passion_id]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // console.log(data?.passion_video_or_image_file);
  return (
    <>
      <section className="page-header">
        {/* <div className="page-header__bg" /> */}
        <div className="container"></div>
      </section>

      {/* <section className='pageContent'>
                <div className='img-vdo-Container'>
                    <video autoPlay loop width="320" height="240">
                        <source src={data.passion_video_or_image_file} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <p >
                    {details}
                </p>
            </section> */}
      <section className="">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              {loading ? (
                <Loading />
              ) : (
                <div className="tour-listing-details__explore">
                  <h3
                    className="offer-one__heading sec-title__heading text-left"
                    style={{
                      paddingLeft: "200",
                      fontSize: "25px!important",
                      marginBottom: "10px",
                    }}
                  >
                    <span className="font-bernadette-rough display-4">
                      {data.passion_name}
                    </span>
                  </h3>
                  {data?.passion_video_or_image_file ? (
                    <section className="pageContent">
                      {!isVideo ? (
                        <div className="img-vdo-Container">
                          <video autoPlay loop>
                            <source src={imagesArray} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        <div className="imageCrouselContainer">
                          {/* <img src={imagesArray[0].image_file} alt="" /> */}
                          <div
                            id="carouselExampleAutoplaying"
                            class="carousel slide carousel-fade"
                            data-bs-ride="carousel"
                          >
                            <div class="carousel-inner">
                              {data.passion_video_or_image_file.map(
                                (image, index) => (
                                  <div
                                    key={index}
                                    className={`carousel-item ${
                                      index === 0 ? "active" : ""
                                    }`}
                                    data-bs-interval="1500"
                                  >
                                    <Image
                                      src={image.image_file}
                                      alt={`Slide ${index + 1}`}
                                      width={500}
                                      height={500}
                                    />
                                  </div>
                                )
                              )}
                            </div>
                            {data.passion_video_or_image_file.length > 1 && (
                              <>
                                <button
                                  class="carousel-control-prev"
                                  type="button"
                                  data-bs-target="#carouselExampleAutoplaying"
                                  data-bs-slide="prev"
                                >
                                  <span
                                    class="carousel-control-prev-icon"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="visually-hidden">Previous</span>
                                </button>
                                <button
                                  class="carousel-control-next"
                                  type="button"
                                  data-bs-target="#carouselExampleAutoplaying"
                                  data-bs-slide="next"
                                >
                                  <span
                                    class="carousel-control-next-icon"
                                    aria-hidden="true"
                                  ></span>
                                  <span class="visually-hidden">Next</span>
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                      <p>{details}</p>
                    </section>
                  ) : null}
                </div>
              )}

              <div className="tour-listing-details__similar container-fluid">
                <h3 className="tour-listing-details__title tour-listing-details__similar-title">
                  Our Packages
                </h3>
                <h1 className="pageHeading animated fadeInUp">
                  Experience {data.passion_name} : Nature Travel by EarthyHues
                </h1>

                <div className="row">
                  {data.packages?.map((packageItem) => (
                    <div
                      key={packageItem.package_id}
                      className="col-md-4 wow animated fadeInUp"
                      data-wow-delay="0.1s"
                      data-wow-duration="1500ms"
                    >
                      <div className="tour-listing__card">
                        <Link
                          href={`/packages/${packageItem.package_url}`}
                          className="tour-listing__card-image-box"
                        >
                          <Image
                            src={packageItem.package_img}
                            alt={packageItem.package_title}
                            width={1000}
                            height={220}
                            className="tour-listing__card-image"
                            style={{
                              aspectRatio: "3/2",
                              objectFit: "cover",
                              objectPosition: "top",
                            }}
                          />
                          <div className="tour-listing__card-image-overlay" />
                        </Link>
                        <Link
                          href={`/packages/${packageItem.package_url}`}
                          onClick={scrollToTop}
                          className="tour-listing__card-wishlist"
                        >
                          <span className="icon-heart" />
                        </Link>
                        <div className="tour-listing__card-content">
                          <div className="tour-listing__card-camera-group"></div>
                          <h3 className="tour-listing__card-title">
                            <Link
                              href={`/packages/${packageItem.package_url}`}
                              onClick={scrollToTop}
                            >
                              {packageItem.package_title}
                            </Link>
                          </h3>
                          <p
                            className="tour-listing__card-text text-small"
                            style={{ textAlign: "justify" }}
                          >
                            {packageItem.package_intro.substring(0, 200)}.....
                            <span
                              style={{
                                color: "rgb(19, 165, 182)",
                                cursor: "pointer",
                              }}
                              onClick={() => openModal(packageItem)}
                            >
                              readMore
                            </span>
                          </p>
                          <Link
                            href={`/packages/${packageItem.package_url}`}
                            className=" trevlo-btn trevlo-btn--base text-white"
                            style={{ padding: "10px 20px" }}
                          >
                            <span onClick={scrollToTop}>Explore More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Location Details"
                  style={customStyles}
                >
                  {selectedLocation && (
                    <>
                      <h2 className="text-center">
                        {selectedLocation.package_title}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: selectedLocation.package_intro,
                        }}
                      ></p>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          className="trevlo-btn trevlo-btn--base text-white"
                          style={{ padding: "10px 20px" }}
                          onClick={closeModal}
                        >
                          <span>Close</span>
                        </button>
                      </div>
                    </>
                  )}
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Passion;
