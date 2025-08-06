import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './JobSearchBarCarousal.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { MdOutlineLocationSearching } from 'react-icons/md';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const LeftArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="scroll-arrow left-arrow"
        >
            <FaChevronLeft />
        </button>
    );
};
const RightArrow = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="scroll-arrow right-arrow"
        >
            <FaChevronRight />
        </button>
    );
};

const CategoryCarousel = () => {
    const sliderRef = useRef(null);

    const categories = [
        'IT',
        'Banking & Financial Services',
        'Healthcare & Health Tech',
        'E-Commerce / Retail Tech',
        'Telecommunications',
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0px',
        prevArrow: <LeftArrow onClick={() => sliderRef.current.slickPrev()} />,
        nextArrow: <RightArrow onClick={() => sliderRef.current.slickNext()} />,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <Container className="overflow-hidden align-items-center">
            <div className="position-relative align-items-center justify-content-between bg-light p-4 rounded-4 shadow-sm my-4">
                <Slider ref={sliderRef} {...settings}>
                    {categories.map((cat, idx) => (
                        <div key={idx} className="d-flex justify-content-center align-items-center">
                            <div className="category-pill">
                                {cat}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </Container>
    );
};


const JobSearchBarCarousal = () => {

    return (
        <>
            <Container className=" px-3 overflow-hidden">
                {/* Search Box */}
                <div className="search-box rounded-4 p-4 shadow-sm w-100">
                    <Row className="align-items-center p-2 g-0 bg-white rounded-3" >

                        <Col xs={12} md={5} className="rounded-0">
                            <Form.Control
                                type="text"
                                placeholder="Job title, Keywords, or Skills"
                                className="py-3 rounded-0"
                                style={{
                                    border: "none",                // Removes all borders
                                    borderRight: "1px solid #424242" // Adds only right border
                                }}
                            />
                        </Col>

                        <Col xs={12} md={5} className="rounded-0">
                            <div className="position-relative">
                                <Form.Control
                                    type="text"
                                    placeholder="Location"
                                    className="pr-5 py-3 rounded-0"
                                    style={{
                                        border: "none",                // Removes all borders
                                        borderRight: "1px solid #424242" // Adds only right border
                                    }}
                                />
                                <span className="input-icon-end">
                                    <MdOutlineLocationSearching />
                                </span>
                            </div>
                        </Col>

                        <Col xs={12} md={2} className="rounded-0 ">
                            <Button
                                variant="light"
                                className="w-100 fw-bold text-white  py-3 rounded-2"
                                style={{ backgroundColor: "#1e88e5", margin: "2px", minWidth: '0', }}
                            >
                                Find Jobs
                            </Button>
                        </Col>

                    </Row>
                </div>
            </Container>
            <CategoryCarousel />
        </>
    );
};

export default JobSearchBarCarousal;