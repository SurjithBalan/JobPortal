import React, { useRef } from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { FaList, FaUserTie, FaHandsHelping, FaBriefcase, FaFilter, FaSearch } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Ourservices.css";

const cardData = [
  { id: 1, title: "Exclusive Listings", text: "Skylarkjobs.com offers a curated selection of job openings you won't find elsewhere.", icon: <FaList size={30} /> },
  { id: 2, title: "Dedicated Platform", text: "Designed specifically for mid and senior-level professionals.", icon: <FaUserTie size={30} /> },
  { id: 3, title: "Professional Support", text: "Our dedicated team is committed to helping you navigate the job market.", icon: <FaHandsHelping size={30} /> },
  { id: 4, title: "Enhanced Career Opportunities", text: "Access a wide range of job openings to advance your career.", icon: <FaBriefcase size={30} /> },
  { id: 5, title: "Personalized Job Matching", text: "Get matched with jobs that best fit your skills and preferences.", icon: <FaFilter size={30} /> },
  { id: 6, title: "Hassle-Free Experience", text: "User-friendly interface and real-time communication tools.", icon: <FaSearch size={30} /> },
];

export default function OurServices() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="services-container py-5 px-3">
      <h2 className="text-center fw-bold mb-4">Our Services</h2>
      <Slider {...settings} ref={sliderRef}>
        {cardData.map(({ id, title, text, icon }) => (
          <div key={id} className="px-3">
            <Card className="service-card text-center shadow rounded-4 border-0 p-4">
              <div className="icon-container text-primary mb-3">{icon}</div>
              <Card.Title className="fw-semibold">{title}</Card.Title>
              <Card.Text className="text-muted">{text}</Card.Text>
            </Card>
          </div>
        ))}
      </Slider>
      <div className="slider-controls text-center mb-3">
        <button className="btn btn-outline-primary me-2" onClick={() => sliderRef.current.slickPrev()}>‹ Prev</button>
        <button className="btn btn-outline-primary" onClick={() => sliderRef.current.slickNext()}>Next ›</button>
      </div>
    </div>
  );
}