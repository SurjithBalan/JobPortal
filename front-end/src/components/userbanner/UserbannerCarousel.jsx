import { React, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UserBanner_1 from "./slider_1/Userbanner_slider_1";
import UserBanner_2 from "./slider_2/Userbanner_slider_2";
import UserBanner_3 from "./slider_3/Userbanner_slider_3";
import "./UserbannerCarousel.css";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
// import { InputGroup, Form, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

const UserbannerAutoSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };
  const navigate = useNavigate();

  const SearchBar = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
      const query = new URLSearchParams();
      if (title) query.append("functionality", title);
      if (location) query.append("location", location);
      navigate(`/hero-search-filter?${query.toString()}`);
    };
    return (
      <div className="input-field m-0">
        <form className="form-wrapper d-flex flex-column flex-md-row align-items-center gap-2 w-100">
          <div className="input-group">
            <CiSearch className="input-icon" />
            <input
              type="text"
              placeholder="Job title"
              id="job-input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-group">
            <CiLocationOn className="input-icon" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              id="job-input-location"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center flex-wrap">
            <button
              type="button"
              className="btn btn-primary submit-btn px-4 py-2"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    );
  };
  return (
    <div style={{ padding: "20px" }} className="parantSearcConstant">
      <Carousel
        className="carousel-container"
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        arrows={false}
        showDots={true}
        swipeable={true}
        draggable={true}
      >
        <UserBanner_1 />
        <UserBanner_2 />
        <UserBanner_3 />
      </Carousel>      
        <div className="searchConstant">
          <SearchBar />
        </div>    
    </div>
  );
};

export default UserbannerAutoSlider;
