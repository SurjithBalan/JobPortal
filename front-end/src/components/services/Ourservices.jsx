

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaList, FaUserTie, FaHandsHelping, FaBriefcase, FaFilter, FaSearch } from "react-icons/fa";
import "./Ourservices.css"; // Import custom styles


const cardData = [
  { id: 1, title: "Exclusive Listings", text: "Skylarkjobs.com offers a curated selection of job openings you won't find elsewhere. Our vast network of employers and recruiters ensures our users have access to the best job opportunities available.", icon: <FaList size={30} /> },
  { id: 2, title: "Dedicated Platform", text: "Designed specifically for mid and senior-level professionals, our platform provides a tailored experience that meets your unique needs and expectations.", icon: <FaUserTie size={30} /> },
  { id: 3, title: "Professional Support", text: "We understand the importance of professional guidance. Our dedicated team is committed to helping you navigate the job market and achieve your career goals.", icon: <FaHandsHelping size={30} /> },
  { id: 4, title: "Enhanced Career Opportunities", text: "Skylarkjobs.com provides access to a wide range of job openings that can help professionals advance their careers.", icon: <FaBriefcase size={30} /> },
  { id: 5, title: "Personalized Job Matching", text: "Our advanced algorithm ensures you are presented with job openings that best match your skills, experience, and preferences.", icon: <FaFilter size={30} /> },
  { id: 6, title: "Hassle-Free Experience", text: "Skylarkjobs.com offers a user-friendly interface, advanced search functionality, and real-time communication, making it easy to find the right opportunities.", icon: <FaSearch size={30} /> },
];

export default function OurServices() {
  return (
    <div className="services-container">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row className="g-4 justify-content-center d-flex flex-wrap">
        {cardData.map(({ id, title, text, icon }) => (
          <Col key={id} xs={12} sm={6} md={4} lg={4} className="d-flex justify-content-center">
            <Card className="service-card shadow-lg d-flex flex-column">
              <Card.Body className="d-flex flex-column align-items-center text-center justify-content-center">
                <div className="icon-container mb-3">{icon}</div>
                <Card.Title className="service-title">{title}</Card.Title>
                <Card.Text className="service-text">{text}</Card.Text>
              </Card.Body>
            </Card>            
          </Col>
        ))}
      </Row>
    </div>
  );
}
