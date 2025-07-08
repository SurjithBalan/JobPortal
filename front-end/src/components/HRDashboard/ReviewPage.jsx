import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { MdOutlineReviews } from "react-icons/md";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "react-bootstrap";
const ratings = [
    { score: 5, count: 50, color: '#cdb4db' },
    { score: 4, count: 40, color: '#ffc8dd' },
    { score: 3, count: 30, color: '#ffafcc' },
    { score: 2, count: 20, color: '#bde0fe' },
    { score: 1, count: 10, color: '#a2d2ff' },
];

const recruiterCard = {
    name: 'Amanda Collins',
    company: 'Wipro, Chennai',
    rating: 4,
    date: 'May 18, 2024',
    img: 'https://via.placeholder.com/50',
};

const rating = [
    {
        score: 4,
        name: "Amanda Collins",
        company: "Wipro, Chennai",
        date: "May 16, 2024",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        score: 4,
        name: "Amanda Collins",
        company: "Wipro, Chennai",
        date: "May 16, 2024",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
    },
    {
        score: 4,
        name: "Amanda Collins",
        company: "Wipro, Chennai",
        date: "May 16, 2024",
        image: "https://randomuser.me/api/portraits/men/40.jpg",
    },
];



const ReviewPage = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
        ],
    };
    return (
        <Container fluid className="p-4">
            {/* Total Number of Reviews */}
            <h5 className="section-title text-start" style={{ color: '#3996e7' }}>
                <MdOutlineReviews size={30} className="me-2" /> Total Number of Reviews
            </h5>
            <Row className="justify-content-center mb-5">
                {ratings.map((item, idx) => (
                    <Col key={idx} xs={6} md={2} className="d-flex justify-content-center mb-3">
                        <div
                            style={{
                                backgroundColor: item.color,
                                width: '100%',
                                minHeight: '220px', // adjust height as per image
                                borderRadius: '10px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            className="shadow-sm"
                        >
                            <h5 className="mb-2">{item.count}</h5>
                            <div className="text-warning mb-2 d-flex justify-content-center">
                                {Array.from({ length: item.score }, (_, i) => (
                                    <BsStarFill key={i} />
                                ))}
                            </div>
                            <small className="fw-semibold">Ratings {item.score}/5</small>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* High rated recruiters*/}
            <h5 className="section-title text-start" style={{ color: '#3996e7' }}>
                <MdOutlineReviews size={30}s className="me-2" /> High rated recruiters
            </h5>
            <div className="px-4">
                <Slider {...settings}>
                    {rating.map((item, idx) => (
                        <div key={idx} className="px-3 h-100">
                            <div
                                className="p-3 mt-2 mb-2 h-100"
                                style={{
                                    backgroundColor: "#e6f0f6",
                                    borderRadius: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                {/* Image and Rating */}
                                <div className="d-flex align-items-center justify-content-center mb-3 mt-3">
                                    <Image
                                        src={item.image}
                                        roundedCircle
                                        width={40}
                                        height={40}
                                        className="me-3"
                                    />
                                    <div>
                                        <div className="text-warning d-flex mb-1">
                                            {Array.from({ length: item.score }, (_, i) => (
                                                <BsStarFill key={i} />
                                            ))}
                                        </div>
                                        <div className="fw-semibold">Ratings {item.score}/5</div>
                                    </div>
                                </div>

                                {/* Dashed Line */}
                                <div
                                    className="mx-auto"
                                    style={{
                                        width: "80%",
                                        height: "2px",
                                        backgroundImage: "repeating-linear-gradient(to right, #888 0px, #888 8px, transparent 8px, transparent 16px)",
                                        backgroundRepeat: "repeat-x",
                                        margin: "12px 0",
                                    }}
                                ></div>

                                {/* Content Section */}
                                <div className="d-flex flex-column justify-content-between mt-3" style={{ flexGrow: 1 }}>
                                    <p className="mb-2 fw-semibold mb-3">
                                        {item.name} :{" "}
                                        <span style={{ color: "#e91e63" }}>{item.company}</span>
                                    </p>
                                    <p className="fontclr mb-0 text-end" style={{ fontSize: "14px" }}>
                                        Review Published:
                                        <br />
                                        <span className='fw-semibold'> {item.date}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* High Rated Recruiters */}
            <h5 className="section-title text-start mt-2" style={{ color: '#3996e7' }}>
                <MdOutlineReviews size={30} className="me-2" /> Least rated recruiters
            </h5>
            <div className="px-4">
                <Slider {...settings}>
                    {rating.map((item, idx) => (
                        <div key={idx} className="px-3 h-100">
                            <div
                                className="p-3 mt-2 mb-2 h-100"
                                style={{
                                    backgroundColor: "#e6f0f6",
                                    borderRadius: "10px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                }}
                            >
                                {/* Image and Rating */}
                                <div className="d-flex align-items-center justify-content-center mb-3 mt-3">
                                    <Image
                                        src={item.image}
                                        roundedCircle
                                        width={40}
                                        height={40}
                                        className="me-3"
                                    />
                                    <div>
                                        <div className="text-warning d-flex mb-1">
                                            {Array.from({ length: item.score }, (_, i) => (
                                                <BsStarFill key={i} />
                                            ))}
                                        </div>
                                        <div className="fw-semibold">Ratings {item.score}/5</div>
                                    </div>
                                </div>

                                {/* Dashed Line */}
                                <div
                                    className="mx-auto"
                                    style={{
                                        width: "80%",
                                        height: "2px",
                                        backgroundImage: "repeating-linear-gradient(to right, #888 0px, #888 8px, transparent 8px, transparent 16px)",
                                        backgroundRepeat: "repeat-x",
                                        margin: "12px 0",
                                    }}
                                ></div>

                                {/* Content Section */}
                                <div className="d-flex flex-column justify-content-between mt-3" style={{ flexGrow: 1 }}>
                                    <p className="mb-2 fw-semibold mb-3">
                                        {item.name} :{" "}
                                        <span style={{ color: "#e91e63" }}>{item.company}</span>
                                    </p>
                                    <p className="fontclr mb-0 text-end" style={{ fontSize: "14px" }}>
                                        Review Published:
                                        <br />
                                        <span className='fw-semibold'> {item.date}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            {/* Overall Rating */}
            <h5 className="section-title text-start mt-2" style={{ color: '#3996e7' }}>
                <MdOutlineReviews size={30} className="me-2" /> Overall Rating
            </h5>
            <div
                className="p-4 text-center"
                style={{
                    backgroundColor: '#e6f4fb',
                    borderRadius: '10px',
                    maxWidth: '400px',
                    margin: '0 auto',
                }}
            >
                <h6 className="fw-semibold fontclr mb-2">Overall Rating</h6>
                <h1 className="fw-bold display-4 fontclr">4.5</h1>

                <div className="text-warning mb-2 d-flex justify-content-center fs-5">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <BsStarFill key={idx} />
                    ))}
                    <BsStarHalf />
                </div>

                <p className="fontclr mb-4">Based on 26 Reviews</p>

                {/* Rating rows */}
                {[
                    { label: 'Excellent', value: 95, color: '#4fa952' },
                    { label: 'Good', value: 75, color: '#a5d430' },
                    { label: 'Average', value: 50, color: '#f7eb42' },
                    { label: 'Below Average', value: 30, color: '#fba92d' },
                    { label: 'Poor', value: 15, color: '#ee3f1e' },
                ].map((item, index) => (
                    <Row key={index} className="align-items-center mb-3 px-2">
                        <Col xs={4} className="text-start fw-medium fontclr">{item.label}</Col>
                        <Col xs={8}>
                            <ProgressBar
                                now={item.value}
                                style={{
                                    height: '8px',
                                    borderRadius: '4px',
                                    backgroundColor: '#e0e0e0', // track color
                                }}
                                variant="custom" // still needed for structure
                            >
                                <div
                                    style={{
                                        width: `${item.value}%`,
                                        height: '100%',
                                        backgroundColor: item.color,
                                        borderRadius: '4px',
                                    }}
                                ></div>
                            </ProgressBar>
                        </Col>
                    </Row>
                ))}
            </div>
        </Container>
    );
};

export default ReviewPage;