import Link from "next/link";
import React from "react";
import { scrollToTop } from "@/helper/ScrollToTop";

const About = () => {
  return (
    <>
      <section className="about-three pad">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 wow fadeInLeft" data-wow-delay="200ms">
              <div className="about-three__content">
                <div className="sec-title text-left">
                  <p className="sec-title__tagline">GET TO KNOW US</p>
                  <h2 className="sec-title__title">
                    Experience the World with EarthyHues
                  </h2>
                </div>
                <p className="about-three__content__text">
                  Embark on a journey that transcends borders and embraces
                  nature's vibrant palette with EarthyHues. Our travel
                  experiences are crafted to immerse you in the beauty of our
                  planet while preserving its essence.
                </p>
                <h5 className="about-three__content__quote">
                  The real voyage of discovery consists not in seeking new
                  landscapes, but in having new eyes.
                </h5>
                <ul className="about-three__content__list">
                  <li>
                    <span className="fas fa-check-circle" />
                    Immersive, diverse, connected travel experiences.
                  </li>
                  <li>
                    <span className="fas fa-check-circle" />
                    Awaken wanderlust, create timeless memories.
                  </li>
                </ul>
                <Link
                  href="/Our-story"
                  className="trevlo-btn trevlo-btn--base fmob"
                  onClick={scrollToTop}
                >
                  <span>Our Story</span>
                </Link>
                <Link
                  href="/Why-EarthyHues"
                  className="trevlo-btn trevlo-btn--base ms-3 fmob"
                  onClick={scrollToTop}
                >
                  <span>Why EarthyHues?</span>
                </Link>
              </div>
              {/* /.about-four__content */}
            </div>

            {/* /.col-xl-6 col-lg-6 */}
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="200ms">
              <div className="about-three__image">
                <div
                  className="about-three__image__one trevlo-tilt"
                  data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 3, "speed": 700, "scale": 1 }'
                >
                  <img
                    src="assets\images\why-choose\Morning-Tea-earthy-hues-edit.jpg"
                    alt="trevlo"
                  />
                </div>
                <div
                  className="about-three__image__right wow fadeInUp"
                  data-wow-delay="400ms"
                ></div>
                <div className="about-three__image__two">
                  <img src="assets/images/resources/about-2.jpg" alt="trevlo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
