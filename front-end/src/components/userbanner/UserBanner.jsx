import React from "react";
import { Container, Row, Col, Button, Form, InputGroup, Dropdown } from "react-bootstrap";
import "./UserBanner.css";

function UserBanner() {
  return (
    <div className="position-relative w-100 vh-100">
      {/* Dark Overlay */}
      <div className="position-absolute top-0 start-0 w-100 vh-100 bg-dark opacity-50"></div>

      <Container
        fluid
        className="d-flex align-items-center justify-content-start responsive-bg containner_style h-100"
      >
        {/* Content Section */}
        <Row className="py-5 px-4 position-relative text-start w-100 justify-content-left ps-5">
          <Col xs={12} md={10} lg={8} className="d-flex flex-column align-items-center text-light custom-col ms-12">
            <p className="fs-1 fw-semibold tracking-wider text-center">Welcome to Skylark Jobs</p>
            <h1 className="fw-bold display-3 text-light text-center">
              Find Your <span className="text-success">Dream Job</span>
            </h1>
            <p className="fs-4 text-light text-center text-opacity-75">
              Explore top-tier job opportunities for mid and senior-level professionals across various industries.
            </p>

            {/* Search Bar */}
            <div className="fs-4 search-container mt-4 w-100">
              <InputGroup className="shadow-lg rounded-pill overflow-hidden">
                <Form.Control
                  type="text"
                  placeholder="Search Keywords..."
                  className="search-input px-3 py-3 border-0"
                  style={{ fontSize: '1.2rem' }}
                />
                <Form.Control
                  type="text"
                  placeholder="Enter Location..."
                  className="search-input px-3 py-3 border-0"
                  style={{ fontSize: '1.2rem' }}
                />
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="fs-4 dropdown-btn px-4 py-3 border-0 text-dark fw-semibold">
                    Category
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Software</Dropdown.Item>
                    <Dropdown.Item>Marketing</Dropdown.Item>
                    <Dropdown.Item>Design</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="success" className="fs-4 search-btn px-4 py-3 fw-semibold">
                  Search
                </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default UserBanner;