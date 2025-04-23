import React, { useRef } from 'react';
// import { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { FaSearchLocation, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './JobSearchBar.css'; // Include custom CSS for styling
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import 'react-horizontal-scrolling-menu/dist/styles.css';

const categories = [
    'IT',
    'Banking & Financial Services',
    'Healthcare & Health Tech',
    'E-Commerce / Retail Tech',
    'Telecommunications',
    'Manufacturing',
    'Education',
];;


const JobSearchBar = () => {
    const scrollRef = useRef(null); // ✅ This line is required

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -150 : 150;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };


    return (
        <>
            <Container className="py-4 px-3 overflow-hidden">
                {/* Search Box */}
                <div className="search-box bg-primary rounded-4 p-4 shadow-sm w-100">
                    <Row className="align-items-center g-3">
                        <Col xs={12} md={5}>
                            <Form.Control type="text" placeholder="Job title, Keywords, or Skills" />
                        </Col>
                        <Col xs={12} md={5}>
                            <Form.Control type="text" placeholder="Location" />
                        </Col>
                        <Col xs={12} md={2}>
                            <Button
                                variant="light"
                                className="w-100 fw-bold text-white p-2"
                                style={{ backgroundColor: "#1e88e5" }}
                            >
                                Find Jobs
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container>
                {/* Category Scroll */}
                <div className="d-flex  scroll-bar-wrapper p-2 rounded-4 d-flex  bg-light shadow-sm">
                    {/* Left Button */}
                    <Button variant="light" className="arrow-btn p-0" onClick={() => scroll('left')}>
                        <FaChevronLeft />
                    </Button>

                    {/* Scrollable Categories */}
                    <div className="category-scroll flex-grow-1 mx-3" ref={scrollRef}>
                        <div className="d-flex flex-nowrap">
                            {categories.map((cat, idx) => (
                                <div key={idx} className="category-pill me-3">
                                    {cat}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Button */}
                    <Button variant="light" className="arrow-btn p-0" onClick={() => scroll('right')}>
                        <FaChevronRight />
                    </Button>
                </div>
            </Container >


        </>
    );
};

export default JobSearchBar;