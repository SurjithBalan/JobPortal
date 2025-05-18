import React from "react";
import "../hrcompanies/counter.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Badge, Container } from "react-bootstrap";
import jobData from "../data/job";
import img1 from "../../assets/image/counterlogo1.png";
import img2 from "../../assets/image/counterlogo2.png";
import img3 from "../../assets/image/counterlogo3.png";
import img4 from "../../assets/image/counterlogo4.png";
import img5 from "../../assets/image/counterlogo5.png";
import img6 from "../../assets/image/counterlogo6.png";
import CountUp from "react-countup";
const couterData = [
  {
    id: 1,
    img: img2,
    num: 2,
    title: "Hiring Companies ",
    value:2500,
  },
  {
    id: 2,
    img: img1,
    num: 2,
    title: "Total Recruiters ",
    value:3600,
  },
  {
    id: 3,
    img: img3,
    num: 2,
    title: "Open Positions ",
    value:4000,
  },
  {
    id: 4,
    img: img4,
    num: 2,
    title: "Total Candidates ",
    value:5700,
  },
  {
    id: 5,
    img: img5,
    num: 2,
    title: "Hiring Companies ",
    value:1000,
  },
  {
    id: 6,
    img: img6,
    num: 2,
    title: "Position Closed ",
    value:36600,
  },
];

const categories = [
  "IT",
  "ITES",
  "Healthcare",
  "Banking",
  "Wellness",
  "Construction",
  "Education",
  "Automobile",
  "Manufacturing",
  "Telecom",
  "Digital Marketing",
];

export default function Counter() {



  // Custom Arrow Buttons
  const CustomArrow = ({ onClick, direction }) => (
    <button className={`arrow ${direction}`} onClick={onClick}>
      {direction === "nextarrow" ? "›" : "‹"}
    </button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true, // Pauses autoplay when hovered
    nextArrow: <CustomArrow direction="nextarrow" />,
    prevArrow: <CustomArrow direction="previous" />,
  };
  return (
    <Container>
      <div className="container conuter-section">
        <div className="counter-container col-7 d-flex flex-wrap gap-2">
          {couterData.map((data, index) => (
            <div key={index} className="card-top flex-fill" style={{ flex: '1 1 30%', minWidth: '200px' }}>
              <div className="counter shadow d-flex flex-column align-items-center justify-content-between p-3 mr-0 gap-1" style={{ height: '200px' }}>
                <div className="image mb-2">
                  <img src={data.img} alt="" style={{ width: '40px', height: '40px' }} />
                </div>
                <span className="fw-bold"><CountUp end={data.value}/></span>
                <h6 className="mt-2">{data.title}</h6>
              </div>
            </div>
          ))}
        </div>
        <div className="top-sport m-0 col-5">
          <div className="sport text-center ">
            <div className="header text-white fw-bold">
              <h6>TOP HIRING COMPANIES</h6>
            </div>

            <Slider {...settings}>
              {jobData.map((data, index) => (
                <div key={index} className="contant">
                  <div className="company-logo w-auto">
                    <img
                      className=""
                      src={data.imgURL}
                      alt="skylark"
                      style={{ maxHeight: "60px" }}
                    />
                  </div>
                  <p className="text-muted">Trust us to give you the best!</p>
                  <h5 className="fw-bold mb-1">MID & SENIOR LEVEL HIRING</h5>
                  <p className="fw-semibold">Specialised in</p>
                  {categories.map((data, index) => (
                    <Badge
                      bg="white"
                      className=" badeg text-dark rounded-pill px-3 py-2 my-2 mx-1"
                      key={index}
                    >
                      {data}
                    </Badge>
                  ))}
                  <div>
                    <button className=" mt-4 px-5  py-2 rounded-pill company-btn">
                      Contact Us
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Container >
  );
}

