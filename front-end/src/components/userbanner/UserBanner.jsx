import React from "react";
import { Container, Row, Col, Button, Form, InputGroup, Dropdown } from "react-bootstrap";
import "./UserBanner.CSS";

function UserBanner() {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center responsive-bg containner_style"
      >
        {/* Dark Overlay for Readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        {/* Content */}
        <Row className="py-5 px-4 position-relative shadow-lg">
          <Col xs={12} md={8} lg={6} className="text-start d-flex flex-column justify-content-center text-justify">
            <p className="fs-4 text-light">Welcome to Skylark Jobs</p>
            <h1 className="fw-bold display-4 text-light">Find Your <span className="highlight-text">Dream Job</span></h1>
            <p className="fs-4 text-light">
              Discover top-tier job opportunities for mid and senior-level professionals across various industries.
            </p>

            {/* Search Bar - Stylish & Left-Aligned */}
            <div className="search-container">
              <InputGroup className="shadow search-bar">
                <Form.Control type="text" placeholder="Search Keywords..." className="search-input wider-input" />
                <Form.Control type="text" placeholder="Enter Location..." className="search-input wider-input" />
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="dropdown-btn">Category</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Software</Dropdown.Item>
                    <Dropdown.Item>Marketing</Dropdown.Item>
                    <Dropdown.Item>Design</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Button variant="success" className="search-btn">SEARCH </Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
        {/* CSS Fix for Mobile Issues */}
      </Container>
    </>
  );
}
export default UserBanner;
