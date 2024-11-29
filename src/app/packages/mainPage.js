"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Loading from "@/components/Loading/Loading";
import NotFoundLoader from "@/components/NotFoundLoader/NotFoundLoader";
import Image from "next/image";

function Packages() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPassion, setSelectedPassion] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [passionList, setPassionList] = useState({});
  const [destinationList, setDestinationList] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  const handleChange = (event) => {
    setSelectedPassion(event.target.value);
  };
  function handleDest(event) {
    setSelectedDestination(event.target.value);
  }
  // console.log(data[0]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.earthyhues.co.in/apipackages"
        );
        setData(response.data);
        const menu = await axios.get("https://www.earthyhues.co.in/home-menu");
        setPassionList(menu.data[0]?.passion || []);
        setDestinationList(menu.data[0]?.destination || []);
      } catch (error) {
        console.error("Error fetching Package:", error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      let filtered = [...data];

      if (selectedPassion !== "") {
        filtered = filtered.filter((item) =>
          Object.keys(item.passions).includes(selectedPassion)
        );
      }

      if (selectedDestination !== "") {
        filtered = filtered.filter((item) =>
          Object.keys(item.destinations).includes(selectedDestination)
        );
      }

      setFilteredData(filtered);
      // console.log(filtered);
    };

    filterData();
  }, [selectedPassion, selectedDestination, data]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <section className="page-header">
        {/* <div className="page-header__bg" /> */}
        <div className="container"></div>
      </section>
      {loading ? (
        <Loading />
      ) : (
        <section>
          <div className="container">
            <div className="row">
              <h3
                className="offer-one__heading sec-title__heading text-left"
                style={{
                  // marginTop: "-62px",
                  paddingLeft: "200",
                  fontSize: "25px !important",
                }}
              >
                <span className="font-bernadette-rough display-4">
                  Packages of Earthy Hues
                </span>
                <div className="filterSection">
                  <p>Filter</p>
                  <select value={selectedPassion} onChange={handleChange}>
                    <option value="">Passions...</option>
                    {passionList.map((value) => {
                      return (
                        <option key={value.passion_id} value={value.passion_id}>
                          {value.passion_name}
                        </option>
                      );
                    })}
                  </select>

                  <select value={selectedDestination} onChange={handleDest}>
                    <option value="">Destinations...</option>
                    {destinationList.map((value) => {
                      return (
                        <option
                          key={value.destination_id}
                          value={value.destination_id}
                        >
                          {value.destination_name}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </h3>
              {!filteredData.length ? (
                <NotFoundLoader />
              ) : (
                <>
                  {filteredData.map((packageData) => (
                    <div className="col-lg-4" key={packageData.package_id}>
                      <Link
                        href={`/packages/${packageData.package_url}`}
                        onClick={scrollToTop}
                      >
                        <div className="card">
                          <div className="testcontent">
                            <Image
                              width={500}
                              height={500}
                              loading="lazy"
                              className="card-img-top testimg"
                              src={packageData.package_img}
                              alt={packageData.package_url}
                            />
                          </div>
                          <div className="card-body">
                            <h4
                              dangerouslySetInnerHTML={{
                                __html: packageData.package_title,
                              }}
                            ></h4>
                            <p
                              className="card-text"
                              dangerouslySetInnerHTML={{
                                __html: packageData.package_intro.substring(
                                  0,
                                  150
                                ),
                              }}
                              style={{ textAlign: "justify" }}
                            ></p>
                            {/* <Link to={'/packagesDetail'}>Explore More</Link> */}
                            <Link
                              href={`/packages/${packageData.package_url}`}
                              onClick={scrollToTop}
                              class=" trevlo-btn trevlo-btn--base text-white"
                              style={{ padding: "10px 20px" }}
                            >
                              <span>Explore More</span>
                            </Link>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Packages;
