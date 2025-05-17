import React from "react";
import { Card, Button, Badge, Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaSuitcase, FaMoneyBillWave, FaClock } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { useLocation } from "react-router-dom";
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const jobs = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wipro_Primary_Logo_Color_RGB.svg/512px-Wipro_Primary_Logo_Color_RGB.svg.png",
    company: "Wipro",
    role: "DevOps",
    location: "Hyderabad",
    experience: "3+ Yrs",
    salary: "43097",
    noticePeriod: 30,
    applicants: 2,
    positions: 2,
    postedDays: 7
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/05/Infosys-logo.png",
    company: "Infosys",
    role: "Network Engineering",
    location: "Mumbai",
    experience: "3+ Yrs",
    salary: "31250",
    noticePeriod: 30,
    applicants: 2,
    positions: 2,
    postedDays: 7
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/05/HCL-Technologies-logo.png",
    company: "Infosys",
    role: "Teaching",
    location: "Bengaluru",
    experience: "3+ Yrs",
    salary: "25574",
    noticePeriod: 30,
    applicants: 2,
    positions: 2,
    postedDays: 7
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wipro_Primary_Logo_Color_RGB.svg/512px-Wipro_Primary_Logo_Color_RGB.svg.png",
    company: "Wipro",
    role: "Network Engineering",
    location: "Bengaluru",
    experience: "3+ Yrs",
    salary: "42265",
    noticePeriod: 30,
    applicants: 2,
    positions: 2,
    postedDays: 3
  },
  {
    logo: "https://1000logos.net/wp-content/uploads/2021/05/HCL-Technologies-logo.png",
    company: "Infosys",
    role: "Teaching",
    location: "Bengaluru",
    experience: "3+ Yrs",
    salary: "25574",
    noticePeriod: 30,
    applicants: 2,
    positions: 2,
    postedDays: 7
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Wipro_Primary_Logo_Color_RGB.svg/512px-Wipro_Primary_Logo_Color_RGB.svg.png",
    company: "Wipro",
    role: "Network Engineering",
    location: "Bengaluru",
    experience: "3+ Yrs",
    salary: "42265",
    noticePeriod: 30,
    applicants: 2,
    positions: 2,
    postedDays: 3
  }
];

const JobCardList = () => {
  const query = useQuery();
  const filterTitle = query.get("title")?.toLowerCase() || "";
  const filterLocation = query.get("location")?.toLowerCase() || "";

  const filteredJobs = jobs.filter(job =>
    job.role.toLowerCase().includes(filterTitle) &&
    job.location.toLowerCase().includes(filterLocation)
);
  return (
    <div className="container mt-4">
            {filteredJobs.map((job, index) => (
                <div key={index} className="mb-3 shadow-sm rounded-4">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col md={8} className="d-flex">
                                <img src={job.logo} alt={job.company} className="me-3" style={{ width: 50 }} />
                                <div>
                                    <h5>{job.company}</h5>
                                    <p className="text-muted">{job.role}</p>
                                    <div>
                                        <Badge bg="secondary" className="me-2">Featured</Badge>
                                        <Badge bg="success" className="me-2">Full Time</Badge>
                                        <Badge bg="danger" className="me-2">{job.applicants} Applicants</Badge>
                                        <Badge bg="warning">{job.positions} Open Positions</Badge>
                                    </div>
                                    <div className="text-muted small mt-2">
                                        <FaMapMarkerAlt /> {job.location} &nbsp;&nbsp;
                                        <FaSuitcase /> {job.experience} &nbsp;&nbsp;
                                        <FaMoneyBillWave /> ₹ {job.salary} &nbsp;&nbsp;
                                        <FaClock /> NP {job.noticePeriod} days
                                    </div>
                                </div>
                            </Col>
                            <Col md={4} className="text-end">
                                <Button variant="primary" className="rounded-pill mb-2">Apply Now</Button>
                                <p className="text-muted small">Posted on Last {job.postedDays} Days</p>
                                <BsBookmark size={20} color="#90ee90" />
                            </Col>
                        </Row>
                    </Card.Body>
                </div>
            ))}
        </div>
  );
};

export default JobCardList;