import React from "react";
import Slider from "react-slick";
import "../hrcompanies/hrcompanies.css";
import jobsData from "../../components/data/job";

export default function HrCompanies() {
  // Custom Arrow Buttons
  const CustomArrow = ({ onClick, direction }) => (
    <button className={`custom-arrow ${direction}`} onClick={onClick}>
      {direction === "next" ? "›" : "‹"}
    </button>
  );
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomArrow direction="next" />,
    prevArrow: <CustomArrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container w-auto bg-white py-lg-4">
        <div>
          <h3 className="text-center p-2">Well-known HR companies</h3>
          <p>Build trust and guide users toward reputable employers.</p>
        </div>

        <Slider {...settings}>
          {jobsData.map((data) => (
            <div className="card-jobs  my-lg-4 ">
              <div className="card  ">
                <div
                  className="ms-auto p-1 rounded-pill  text-white"
                  style={{ backgroundColor: "#00FF0B", padding: "5px" }}
                >
                  <span>150+</span>
                </div>
                <div className="image-container">
                  <img src={data.imgURL} alt="" />
                </div>
                <button>View all jobs</button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
