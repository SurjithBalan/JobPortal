import React from "react";
import { Container, Row, Col, Button, Form, InputGroup, Dropdown } from "react-bootstrap";
import bannerImage from "../../assets/banner2.jpg";
function UserBanner() {
  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh", // Full height for all devices
          backgroundImage: `url(${bannerImage})`,
          // background: 'rgba(0, 0, 0, 0)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
          padding: "20px", // Extra padding for smaller screens
        }}
      >
        {/* Dark overlay for better readability */}
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>
        <Row
          className="text-center text-md-start py-5 px-4 position-relative shadow-lg"     >
          <Col xs={12} className="text-center" style={{ color: "#333333" }}>
            <p className="fs-4 text-light">Welcome to Skylark Jobs</p>
          </Col>
          <Col xs={12} className="text-center">
            <h1 className="fw-bold display-4 text-light" style={{ color: '#003366' }}>Find Your Dream Job </h1>
            <p className="fs-4 text-light" style={{ color: "#333333" }}>
              Explore mid and senior-level job opportunities
            </p>

            {/* Search Bar */}
            <Col xs={12} md={10} lg={8} className="mx-auto mt-3">
              <InputGroup className="shadow search-bar">
                {/* Search Keywords */}
                <Form.Control type="text" placeholder="Search Keywords..." className="search-input" />
                {/* Location Dropdown
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="dropdown-btn">
                    Location
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>New York</Dropdown.Item>
                    <Dropdown.Item>San Francisco</Dropdown.Item>
                    <Dropdown.Item>Los Angeles</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
                 <Form.Control type="text" placeholder="Enter Location..." className="search-input" />
                {/* Category Dropdown */}
                <Dropdown>
                  <Dropdown.Toggle variant="light" className="dropdown-btn">
                    Category
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Software</Dropdown.Item>
                    <Dropdown.Item>Marketing</Dropdown.Item>
                    <Dropdown.Item>Design</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* Search Button */}
                <Button variant="success" className="search-btn">SEARCH</Button>
              </InputGroup>
            </Col>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default UserBanner;
