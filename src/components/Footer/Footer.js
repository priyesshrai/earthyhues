"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from 'react-router-dom';
import Link from "next/link";
// import mobilemenu from './Mobilemenu';
import Modal from "react-modal";

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
    zIndex: 999999,
  },
};

function Footer() {
  const [destinations, setDestinations] = useState([]);
  const [passions, setPassions] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const openModal = (location, event) => {
    event.preventDefault();
    setSelectedLocation(location);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedLocation(null);
    setIsOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://www.earthyhues.co.in/home-menu")
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          // setData(response.data);
          if (Array.isArray(response.data[0].destination)) {
            setDestinations(response.data[0].destination);
          } else {
            console.error("Invalid destination data format");
          }
          if (Array.isArray(response.data[0].passion)) {
            setPassions(response.data[0].passion);
          } else {
            console.error("Invalid passion data format");
          }
        } else {
          console.error("Invalid response format or insufficient data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   const scrollToMid = () => {
  //     window.scrollTo({
  //         top: 100,
  //         behavior: 'smooth'
  //     });
  // };

  return (
    <>
      <footer className="main-footer @@extraClassName">
        <div
          className="main-footer__bg"
          // style={{
          //     backgroundImage: "url(assets/images/backgrounds/footer-bg.png)"
          // }}
        />
        {/* /.main-footer__bg */}
        <div className="container">
          <div className="row"> 
            {/* /.col-md-6 */}
            <div
              className="col-lg-6 col-xl-4 wow animated fadeInUp"
              data-wow-delay="0.7s"
              data-wow-duration="1500ms"
            >
              <div className="footer-widget footer-widget--newsletter">
                {/* <h2 className="footer-widget__title">Company</h2> */}
                <div className="main-footer__logo-box ">
                  <img
                    src="../assets/earthyhues-image/logo.png"
                    alt="logo-dark"
                    className="main-footer__logo"
                  />
                </div>
                <ul className="main-footer__social text-center ms-5">
                  <li className="main-footer__social-item ms-2">
                    <a
                      href="https://www.facebook.com/EarthyHuesTours"
                      className="main-footer__social-link"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="main-footer__social-item ">
                    <a
                      href="https://www.linkedin.com/company/earthyhues/"
                      className="main-footer__social-link"
                      target="_blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li className="main-footer__social-item ">
                    <a
                      href="https://www.instagram.com/earthyhuestours/"
                      className="main-footer__social-link"
                      target="_blank"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                  <li className="main-footer__social-item ">
                    <a
                      href="https://www.youtube.com/channel/UCFVeeklGY_eomA5bMkrfOJw"
                      className="main-footer__social-link"
                      target="_blank"
                    >
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
                <div className="mc-form__response" />
                {/* /.mc-form__response */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
              className="col-lg-4 col-md-4 col-sm-6 col-xl-2 wow animated fadeInUp"
              data-wow-delay="0.1s"
              data-wow-duration="1500ms"
            >
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">About Us</h2>
                {/* /.footer-widget__title */}
                <ul className="footer-widget__links">
                  <li>
                    <Link
                      href="#"
                      onClick={(event) => openModal("destination", event)}
                    >
                      Destinations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      onClick={(event) => openModal("passion", event)}
                    >
                      Passion
                    </Link>
                  </li>

                  <li onClick={scrollToTop}>
                    <Link href="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="/testimonial">Testimonials</Link>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="/WBlog">Custom Tour</Link>
                  </li>
                </ul>
                {/* /.footer-widget__links */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
              className="col-lg-3 col-md-4 col-sm-6 col-xl-2 wow animated fadeInUp"
              data-wow-delay="0.3s"
              data-wow-duration="1500ms"
            >
              <div className="footer-widget footer-widget--links">
                <h2 className="footer-widget__title">Explore</h2>
                {/* /.footer-widget__title */}
                <ul className="footer-widget__links">
                  <li onClick={scrollToTop}>
                    <Link href="/Our-story">Our Story</Link>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="./Why-EarthyHues">Why Earthy Hues?</Link>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="/conscious-travel">Conscious Travel</Link>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="./RefundPolicy">Refund Policy</Link>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="./TermsOfServices">Terms of Service</Link>
                  </li>
                </ul>
                {/* /.footer-widget__links */}
              </div>
              {/* /.footer-widget */}
            </div>
            {/* /.col-md-6 */}
            <div
              className="col-lg-6 col-md-4 col-xl-4 wow animated fadeInUp"
              data-wow-delay="0.5s"
              data-wow-duration="1500ms"
            >
              <div className="footer-widget footer-widget--contact">
                <h2 className="footer-widget__title">Contact</h2>
                {/* /.footer-widget__title */}
                <p className="footer-widget__address">
                  2210, 2nd Floor, 2nd Main Road, 6th Block, Jayanagar,
                  <br />
                  Bangalore, Karnataka - 560070
                </p>
                <ul className="footer-widget__info">
                  <li>
                    {" "}
                    <span className="icon-phone-1" />{" "}
                    <Link href="tel:+91 89042 78007">+91 89042 78007</Link>
                  </li>
                  <li>
                    {" "}
                    <span className="icon-envelope" />{" "}
                    <Link href="mailto:info@earthyhues.com">
                      info@earthyhues.com
                    </Link>
                  </li>
                </ul>
                {/* /.footer-widget__info */}
              </div>
              {/* /.footer-widget */}
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
        <div className="main-footer__bottom">
          <div className="container">
            <div className="main-footer__bottom-inner">
              <p className="main-footer__copyright">
                © Copyright <span className="dynamic-year" /> by{" "}
                <a
                  href="https://www.inforbit.in"
                  className="copyright-a"
                  target="blank"
                >
                  Semi Colon Solutions
                </a>{" "}
                All Rights Reserved.
              </p>
            </div>
            {/* /.main-footer__inner */}
          </div>
          {/* /.container */}
        </div>
        {/* /.main-footer__bottom */}
      </footer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Location Details"
        style={customStyles}
      >
        {selectedLocation === "destination" && (
          <>
            <h2 className="text-center">Destination</h2>
            <ul className="foot">
              {destinations.map((destination) => (
                <li
                  key={destination.destination_id}
                  style={{ textDecoration: "none", listStyleType: "none" }}
                  className="px-2"
                >
                  <Link href={`/destination/${destination.destination_url}`}>
                    {destination.destination_name}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
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
        {selectedLocation === "passion" && (
          <>
            <h2 className="text-center">Passion</h2>
            <ul className="foot">
              {passions.map((passion) => (
                <li
                  key={passion.passion_id}
                  style={{ textDecoration: "none", listStyleType: "none" }}
                  className="px-2"
                >
                  <Link href={`/passion/${passion.passion_url}`}>
                    {passion.passion_name}
                  </Link>
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", justifyContent: "center" }}>
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

      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" />
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler">
            <i className="fa fa-times" />
          </span>
          <div className="logo-box">
            <Link href="/">
              <img
                src="../assets/earthyhues-image/logo.png"
                alt="Trevlo HTML"
                width={146}
              />
            </Link>
          </div>
          <div className="mobile-nav__container" />
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <Link href="mailto:info@earthyhues.com">info@earthyhues.com</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel: +91 8904278007"> +91 8904278007</a>
            </li>
          </ul>
          <div className="mobile-nav__social">
            <a
              href="https://www.instagram.com/earthyhuestours/"
              className="main-footer__social-link"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com/EarthyHuesTours"
              className="main-footer__social-link"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.linkedin.com/company/earthyhues/"
              className="main-footer__social-link"
            >
              <i className="fab fa-linkedin-in" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCFVeeklGY_eomA5bMkrfOJw"
              className="main-footer__social-link"
            >
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
