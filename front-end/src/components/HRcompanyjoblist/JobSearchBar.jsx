import React, { useContext } from 'react';
// import { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { FaSearchLocation, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './JobSearchBar.css'; // Include custom CSS for styling
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import 'react-horizontal-scrolling-menu/dist/styles.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { MdOutlineLocationSearching } from 'react-icons/md';
import { InputGroup } from 'react-bootstrap';

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

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);
        return (
            <button
                onClick={() => scrollPrev()}
                className="scroll-arrow left-arrow"
            >
                <FaChevronLeft />
            </button>
        );
    };
    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);
        return (
            <button
                onClick={() => scrollNext()}
                className="scroll-arrow right-arrow"
            >
                <FaChevronRight />
            </button>
        );
    };


    return (
        <>
            <Container className="py-4 px-3 overflow-hidden">
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

                        <Col xs={12} md={2} className="rounded-0">
                            <Button
                                variant="light"
                                className="w-100 fw-bold text-white p-2 py-3 rounded-2 min-w-0"
                                style={{ backgroundColor: "#1e88e5" }}
                            >
                                Find Jobs
                            </Button>
                        </Col>

                    </Row>
                </div>
            </Container>
            <Container className="p-4 overflow-hidden align-items-center">
                {/* Search Box */}
                <div className="position-relative align-items-center bg-light p-4 rounded-4 shadow-sm my-4">
                    <div className=''>
                        <ScrollMenu LeftArrow={<LeftArrow />} RightArrow={<RightArrow />}>
                            <div className='d-flex align-items-center'>
                                {categories.map((cat, idx) => (
                                    <div
                                        key={idx}
                                        className="d-flex flex-wrap me-3 p-3 text-dark fw-bold rounded-5 category-pill d-flex flex-shrink-0 text-center"
                                        style={{
                                            minWidth: '0',
                                            maxWidth: '220px',
                                            fontSize: '1rem',
                                            lineHeight: '1.3',
                                            whiteSpace: 'normal',
                                            wordWrap: 'break-word',
                                            border: '0.5px solid #424242',
                                        }}
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>
                        </ScrollMenu>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default JobSearchBar;