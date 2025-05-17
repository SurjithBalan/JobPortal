import React from 'react';
import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
import { CiLocationOn } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import Wipro from "../../assets/logo/Wipro.png";
import CtsLogo from "../../assets/logo/CTSH.png";
import Infosys from "../../assets/logo/Infosys.png"
import Accenture from "../../assets/logo/Accenture.png"
import HCL from "../../assets/logo/HCL.png"
import { MdBookmarkBorder } from "react-icons/md";
import './Recommended_Jobs.css';
import { Link } from 'react-router-dom';

const jobList = [
    {
        id: 1,
        company: 'Wipro',
        logo: Wipro,
        role: 'Software Engineer',
        tags: ['Urgent', 'Recommend'],
        skills: 'Java Full Stack',
        ctc: '₹ 1,20,000 LPA',
        experience: '3+ Yrs',
        noticePeriod: '15 days',
        location: 'Guindy, Tamil Nadu, India',
        posted: '2 days ago',
        bgColor: '#e6f3ff',
    },
    {
        id: 2,
        company: 'Cognizant',
        logo: CtsLogo,
        role: 'Software Engineer',
        tags: ['Recommend'],
        skills: 'Java Full Stack',
        ctc: '₹ 1,20,000 LPA',
        experience: '3+ Yrs',
        noticePeriod: '15 days',
        location: 'Guindy, Tamil Nadu, India',
        posted: '2 days ago',
        bgColor: '#fef5df',
    },
    {
        id: 3,
        company: 'Accenture',
        logo: Accenture,
        role: 'Software Engineer',
        tags: ['Recommend'],
        skills: 'Java Full Stack',
        ctc: '₹ 1,20,000 LPA',
        experience: '3+ Yrs',
        noticePeriod: '15 days',
        location: 'Guindy, Tamil Nadu, India',
        posted: '2 days ago',
        bgColor: '#f1ecff',
    },
    {
        id: 4,
        company: 'Infosys',
        logo: Infosys,
        role: 'Software Engineer',
        tags: ['Recommend'],
        skills: 'Java Full Stack',
        ctc: '₹ 1,20,000 LPA',
        experience: '3+ Yrs',
        noticePeriod: '15 days',
        location: 'Guindy, Tamil Nadu, India',
        posted: '2 days ago',
        bgColor: '#fef5df',
    },
    {
        id: 5,
        company: 'HCL',
        logo: HCL,
        role: 'Software Engineer',
        tags: ['Recommend'],
        skills: 'Java Full Stack',
        ctc: '₹ 1,20,000 LPA',
        experience: '3+ Yrs',
        noticePeriod: '15 days',
        location: 'Guindy, Tamil Nadu, India',
        posted: '2 days ago',
        bgColor: '#f1ecff',
    }
];

const RecommendedJobs = () => {
    return (
        <section className="recommended-jobs-section mt-5">
            <Container>
                <div className="text-center mb-4">
                    <h3 className="title mb-3 recommend_title">Recommend Jobs</h3>
                    <p className="subtitle">You're journey begins here. Let's find the job that brings out your best.</p>
                </div>
                {jobList.map((job) => (
                    <div
                        key={job.id}
                        className="mb-4 rounded-4 p-3 border-1 hover-zoom-card mx-auto"
                        style={{ backgroundColor: job.bgColor, maxWidth: '1140px' }}
                    >
                        <Row className="align-items-center justify-content-center g-2">
                            <Col xs={12} md={2} className="text-center d-flex justify-content-center align-items-center" >
                                <img
                                    src={job.logo}
                                    alt={job.company}
                                    className="company-logo"
                                />
                            </Col>
                            <Col xs={12} md={4} className="d-flex  align-items-center">
                                <div>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <h5 className="job-title mb-0" style={{ color: '#424242' }}>{job.role}</h5>
                                        <Badge bg="warning" text="dark" className="badge-inline ">
                                            <FaStar size={12} className="me-1" />
                                            Recommend
                                        </Badge>
                                    </div>

                                    <p className="mb-1">{job.company} | {job.skills}</p>
                                    <p className="mb-1 ">{job.ctc} • {job.experience} • NP {job.noticePeriod}</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3} className="d-flex align-items-center justify-content-center ">
                                <div>
                                    <p className="mb-0 text-muted"><CiLocationOn /> {job.location}</p>
                                </div>
                            </Col>

                            <Col xs={12} md={2} className="text-md-end mt-3 mt-md-0">
                                <div className="d-flex d-md-block justify-content-center">
                                    <Button className="mb-2 button-blue text-white px-4 py-2 fs-6" >Apply Now</Button>
                                </div>
                                <div className="text-muted small fw-semibold d-flex align-items-center justify-content-center text-center">
                                    <div className='postedDate d-flex align-items-center justify-content-center'>
                                        <BsClock className="me-1" />
                                        <p className='mb-0'>Posted {job.posted}</p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={1} className="d-flex flex-column my-0 py-0 align-items-md-center align-items-center justify-content-center align-items-start text-md-end text-center">
                                <div>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <div className="d-flex gap-2 flex-wrap bookmark_icon-rcj">
                                        <div className="icon_posistion-rcj">
                                            <span>
                                                <MdBookmarkBorder size={24} className="icon_color-rcj" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}

                <div className="d-flex  justify-content-center mb-4">
                    <Link to='/Recommended_jobs_Dashboard'>
                        <Button className='rounded-pill apply-now-btn' style={{ background: '#1e88e5', color: 'white' }}>
                            View More
                        </Button>
                    </Link>
                </div>
            </Container>
        </section>
    );
};
export default RecommendedJobs;
