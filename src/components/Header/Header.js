"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

function Header() {
  // const [data, setData] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [passions, setPassions] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  /* Method that will fix header after a specific scrollable */
  const isSticky = () => {
    const header = document.querySelector(
      ".main-header.main-header--home-three"
    );
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
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

  return (
    <>
      <header className="main-header main-header--home-three sticky-header sticky-header--normal ">
        <div className="container">
          <div className="main-header__inner ">
            <div className="main-header__left">
              <div className="main-header__logo">
                <Link href="/">
                  <img
                    src="../assets/earthyhues-image/logo.png"
                    alt="Trevlo HTML"
                    width={146}
                  />
                </Link>
              </div>
              <nav className="main-header__nav main-menu nava">
                <ul className="main-menu__list">
                  <li className="dropdown">
                    <a href="javascript:void(0);">Destinations</a>
                    <ul className="sub-menu des mt-4">
                      {destinations.map((destination) => (
                        <li key={destination.destination_id}>
                          <Link
                            href={`/destination/${destination.destination_url}`}
                            onClick={scrollToTop}
                          >
                            {destination.destination_name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0);">Passion</a>
                    <ul className="sub-menu mt-4">
                      {passions.map((item) => (
                        <li key={item.passion_id}>
                          <Link
                            href={`/passion/${item.passion_url}`}
                            onClick={scrollToTop}
                          >
                            {item.passion_name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="/packages">Packages</Link>
                  </li>
                  <li onClick={scrollToTop}>
                    <Link href="/testimonial">Testimonials</Link>
                  </li>
                  <li onClick={scrollToTop} className="navBarLi">
                    <Link href="/conscious-travel" className="linkHide">
                      Conscious
                      <br />
                      Travel
                    </Link>
                    <Link href="/conscious-travel" className="linkShow">
                      Conscious Travel
                    </Link>
                  </li>
                  <li onClick={scrollToTop} className="navBarLi">
                    <Link href="/blog" className="linkHide">
                      Travel
                      <br />
                      Blogs
                    </Link>
                    <Link href="/blog" className="linkShow">
                      Travel Blogs
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* /.main-header__nav */}

              {/* /.main-header__left */}
              <div className="main-header__right">
                <div className="">
                  <div
                    className="mobile-nav__btn mobile-nav__toggler"
                    onclick="activateMenu()"
                  >
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </header>
    </>
  );
}

export default Header;
