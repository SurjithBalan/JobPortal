import React from "react";
import { Container, Card, Row, Col, Badge, Button } from "react-bootstrap";
import { FaRupeeSign, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const JobListingPage = () => {
    const jobs = [
        {
            id: 1,
            logo: "https://via.placeholder.com/60", // Replace with your image URL
            company: "Wipro",
            title: "Senior Web Designer Team Lead",
            salary: "2 LPA",
            experience: "2+ years",
            location: "K.K Nagar, Chennai",
            tags: ["UI/UX Designing", "User Research", "Figma", "User Interface Design"],
            badges: ["Indian MNC", "Banking & Financial Services", "Full Time", "WFO"],
            featured: false,
            datePosted: "Posted 7 days ago",
            positions: "7 Open Positions",
            eligibility: ["Male / Female", "IT Graduates", "Day Shift"],
        },
        {
            id: 2,
            logo: "https://via.placeholder.com/60", // Replace with your image URL
            company: "Google",
            title: "Senior Web Designer Team Lead",
            salary: "2 LPA",
            experience: "2+ years",
            location: "K.K Nagar, Chennai",
            tags: ["UI/UX Designing", "User Research", "Figma", "User Interface Design"],
            badges: ["Indian MNC", "Banking & Financial Services", "Full Time", "WFO"],
            featured: true,
            datePosted: "Posted 7 days ago",
            positions: "7 Open Positions",
            eligibility: ["Male / Female", "IT Graduates", "Day Shift"],
        },
    ];

    return (
        <Container className="my-4">
            {jobs.map((job) => (
                <div key={job.id} className={`mb-4 p-3 ${job.featured ? "border-primary" : ""}`}>
                    <Row className="align-items-center d-flex justify-content-center">
                        <Col md={2} className="text-center">
                            <img src={job.logo} alt={job.company} className="rounded" width={80} height={80} />
                        </Col>
                        <Col md={10}>
                        <div className="d-flex justify-content-center">
                             <h5>{job.title}</h5>
                            <p className="mb-2 text-primary">@ {job.company}</p>
                        </div>
                           
                            <div className="d-flex justify-content-center mb-2">
                                {job.badges.map((badge, index) => (
                                    <Badge key={index} className="me-2 bg-light text-dark">{badge}</Badge>
                                ))}
                            </div>
                            <div className="d-flex justify-content-center">
                                <p>
                                    <FaRupeeSign /> {job.salary} &nbsp;&nbsp;
                                    <FaSuitcase /> {job.experience} &nbsp;&nbsp;
                                    <FaMapMarkerAlt /> {job.location}
                                </p>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center mb-3">
                                {job.tags.map((tag, index) => (
                                    <Badge key={index} className="me-2 mb-2 bg-danger bg-opacity-10 text-danger">{tag}</Badge>
                                ))}
                            </div>
                            <div className="d-flex justify-content-center align-items-center mb-3">
                                <span>{job.datePosted} | {job.positions}</span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Button variant="primary" className="rounded-pill w-auto" style={{ minWidth: 'auto' }}>View Job</Button>
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
};

export default JobListingPage;
