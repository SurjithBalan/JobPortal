import React from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Badge,
} from "react-bootstrap";
import { FaMapMarkerAlt, FaLaptopCode, FaBuilding, FaChartLine } from "react-icons/fa";
import './FindRecruiter.css'
import skylarImage from '../../assets/image/skylarImage.png'

const filters = [
    { label: "IT/Tech", bg: "#d1b0d3" },
    { label: "Tech & Development", bg: "#bbdab7" },
    { label: "Tamil Nadu", bg: "#f0acaa" },
    { label: "Mid Level", bg: "#e2dba6" },
];

const recruiters = [
    {
        company: "Skylark",
        recruiter: "Jon Hendry",
        role: "Talent Acquisition Lead",
        logo: skylarImage,
        industries: ["IT", "Healthcare"],
        function: "Tech & Development",
        level: "Mid-senior level",
        location: "Tamil Nadu",
    },
    // Duplicate for demo
    {
        company: "Skylark",
        recruiter: "Jon Hendry",
        role: "Talent Acquisition Lead",
        logo: skylarImage,
        industries: ["IT", "Healthcare"],
        function: "Tech & Development",
        level: "Mid-senior level",
        location: "Tamil Nadu",
    },
    {
        company: "Skylark",
        recruiter: "Jon Hendry",
        role: "Talent Acquisition Lead",
        logo: skylarImage,
        industries: ["IT", "Healthcare"],
        function: "Tech & Development",
        level: "Mid-senior level",
        location: "Tamil Nadu",
    },
];

export default function FindRecruiter() {
    return (
        <Container className="py-4">
            {/* Filter Dropdowns */}
            <Row className="g-2 mb-3">
                <Col md={3} >
                    <Form.Select className="fontcolorRc">
                        <option>Industry</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select className="fontcolorRc">
                        <option>Functionality</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select className="fontcolorRc">
                        <option>Location</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select className="fontcolorRc">
                        <option>Career Level</option>
                    </Form.Select>
                </Col>
            </Row>

            {/* Selected Filter Tags */}
            <div className="d-flex flex-wrap gap-2 mb-4">
                {filters.map((f, idx) => (
                    <div
                        key={idx}
                        className="px-3 py-1 rounded-pill d-flex align-items-center"
                        style={{
                            backgroundColor: f.bg,
                            fontSize: "1rem",
                            fontWeight: 500,
                            color: "#424242",
                        }}
                    >
                        <span className="me-2">{f.label}</span>
                        <span
                            style={{
                                backgroundColor: "#424242",
                                color: "white",
                                fontWeight: 'bold',
                                width: "22px",
                                height: "22px",
                                borderRadius: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                cursor: "pointer",
                                fontSize: "1rem",
                            }}
                        >
                            ✕
                        </span>
                    </div>
                ))}
            </div>

            {/* Recruiter Cards */}
            {recruiters.map((rec, idx) => (
                <div
                    key={idx}
                    className="p-3 mb-3"
                    style={{
                        border: "1px solid #c2bfbf",
                        borderRadius: "8px",
                    }}
                >
                    <Row className="align-items-center">
                        {/* Left: Logo */}
                        <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
                            <img
                                src={rec.logo}
                                alt="logo"
                                style={{
                                    width: 100,
                                    height: 100,
                                    objectFit: "contain",
                                    border: "1px solid #c2bfbf",
                                    borderRadius: "8px",
                                    padding: "3px",
                                }}
                            />
                        </Col>

                        {/* Center: Info & Tags */}
                        <Col xs={12} md={7} className="text-start">
                            <h5 className="mb-1">{rec.company}</h5>

                            <a
                                href="#"
                                style={{
                                    color: "#0d6efd",
                                    fontWeight: "500",
                                    textDecoration: "none",
                                }}
                            >
                                {rec.recruiter}
                            </a>

                            <div className="mt-2 mb-2">
                                <span
                                    className="px-2 py-1 rounded"
                                    style={{
                                        backgroundColor: "#b8d8cc",
                                        fontSize: "0.85rem",
                                        fontWeight: "500",
                                        display: "inline-block",
                                    }}
                                >
                                    {rec.role}
                                </span>
                            </div>

                            <div className="d-flex flex-wrap gap-3 text-muted small">
                                <span>
                                    <FaBuilding className="me-1" />
                                    {rec.industries.join(", ")}
                                </span>
                                <span>
                                    <FaLaptopCode className="me-1" />
                                    {rec.function}
                                </span>
                                <span>
                                    <FaChartLine className="me-1" />
                                    {rec.level}
                                </span>
                                <span>
                                    <FaMapMarkerAlt className="me-1 text-danger" />
                                    {rec.location}
                                </span>
                            </div>
                        </Col>

                        {/* Right: View Profile Button */}
                        <Col xs={12} md={3} className="text-md-end text-center mt-3 mt-md-0">
                            <Button variant="primary" className="fw-semibold px-4 rounded-pill" style={{backgroundColor:'#1e88e5', minWidth:'0'}}>
                                View Profile
                            </Button>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    );
}