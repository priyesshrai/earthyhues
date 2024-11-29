import React from "react";
import { scrollToTop } from "@/helper/ScrollToTop";
import Link from "next/link";

export default function TourCategories() {
  return (
    <section className="tour-type pad">
      <div
        className="tour-type__bg"
        style={{
          backgroundImage: "url(assets/images/shapes/tour-type-bg.png)",
        }}
      />
      {/* /.tour-type__bg */}
      <div className="container">
        <div className="sec-title text-center">
          <p className="sec-title__tagline">Tour Categories</p>
          <h2 className="sec-title__title">Choose Tour Types</h2>
        </div>
        <div className="row">
          <div className="col-xl-3 wow fadeInUp" data-wow-delay="100ms">
            <Link href={`passion/${"beach-chill-698"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon ">
                  {/* <span className="icon-windsurfing-2" /> */}
                  {/* <div className="tourIcon"></div> */}
                  <img
                    src="assets/images/icon/1.png"
                    alt=""
                    className="default"
                  />
                  <img
                    src="assets/images/icon/2.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Family Vacation</h3>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 wow fadeInUp" data-wow-delay="150ms">
            <Link href={`passion/${"water-sports-705"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon">
                  {/* <span className="icon-paragliding-5" /> */}
                  <img
                    src="assets/images/icon/8.png"
                    alt=""
                    className="default"
                  />
                  <img
                    src="assets/images/icon/7.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Corporate</h3>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 wow fadeInUp" data-wow-delay="200ms">
            <Link
              href={`passion/${"little-wanderer-704"}`}
              onClick={scrollToTop}
            >
              <div className="tour-type__box">
                <div className="tour-type__box__icon">
                  <span className="icon-hiking-4" />
                </div>
                <h3 className="tour-type__box__title">Adventure Tours</h3>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 wow fadeInUp" data-wow-delay="250ms">
            <Link href={`passion/${"birding-699"}`} onClick={scrollToTop}>
              <div className="tour-type__box hoverImg">
                <div className="tour-type__box__icon">
                  {/* <span className="icon-hang-gliding-3" /> */}
                  {/* <span className="icon-wildlife" /> */}
                  <img
                    src="assets/images/icon/4.png"
                    alt=""
                    className="default"
                  />
                  <img
                    src="assets/images/icon/9.png"
                    alt=""
                    className="hover"
                  />
                </div>
                <h3 className="tour-type__box__title">Sustainable</h3>
              </div>
            </Link>
          </div>
          <div className="col-xl-3 wow fadeInUp" data-wow-delay="300ms">
            <Link href={`passion/${"wildlife-16"}`} onClick={scrollToTop}>
              <div className="tour-type__box">
                <div className="tour-type__box__icon">
                  <span className="icon-wildlife" />
                </div>
                <h3 className="tour-type__box__title">Wildlife</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
