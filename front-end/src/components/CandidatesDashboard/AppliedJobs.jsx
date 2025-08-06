import { React, useState } from 'react';
import { Container, Row, Col, Card, Badge, Dropdown, ButtonGroup, DropdownButton, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import google from '../../assets/logo/google.jpg'
import wipro from '../../assets/logo/Wipro.png'
import Cognizant from '../../assets/logo/CTSH.png'
import Infosys from '../../assets/logo/Infosys.png'
import { PiBriefcase } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaMapMarkerAlt, FaRupeeSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './AppliedJobs.css'
const jobs = [
    {
        company: 'Wipro',
        logo: wipro,
        status: 'Applied',
        status_text: 'Applied',
        color: '#1e88e5',
    },
    {
        company: 'Cognizant',
        logo: Cognizant,
        status: 'Under_Review',
        status_text: 'Under Review',
        color: '#f0c909'
    },
    {
        company: 'Google',
        logo: google,
        status: 'Shortlisted',
        status_text: 'Shortlisted',
        color: '#43a047',
    },
    {
        company: 'Infosys',
        logo: Infosys,
        status: 'Not_Shortlisted',
        status_text: 'Not Shortlisted',
        olor: '#e53935'
    },
    {
        company: 'Wipro',
        logo: wipro,
        status: 'Irrelevant_Candidate',
        status_text: 'Irrelevant Candidate',
        color: '#fb8500',
    },
    {
        company: 'Cognizant',
        logo: Cognizant,
        status: 'On_Hold',
        status_text: 'On Hold',
        color: '#9d4edd',
    },
    {
        company: 'Google',
        logo: google,
        status: 'Shortlisted',
        status_text: 'Shortlisted',
        color: '#43a047',
    },
    {
        company: 'Infosys',
        logo: Infosys,
        status: 'Applied',
        status_text: 'Applied',
        color: '#1e88e5',
    },
];
const statusColorMap = {
    Applied: '#dde6ef',
    Shortlisted: '#ecf5ed',
    Rejected: '#f44336',
    Under_Review: '#fffbe7',
    Not_Shortlisted: '#fcebeb',
    Irrelevant_Candidate: '#f2e6d9',
    On_Hold: '#f5edfc'
    // add more if needed
};

const AppliedJobs = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 8;

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const totalPages = Math.ceil(jobs.length / jobsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(prev => prev - 1);
    };

    //navigate things

    const navigate = useNavigate();

    const handleEyeClick = () => {
        navigate('/jobdescription'); // change this to your route
    };

    return (
        <Container className="my-4">
            <Row className="align-items-center justify-content-between mb-5">
                <Col xs="auto">
                    <h5 className="fw-semibold mb-0">My Applied Jobs</h5>
                </Col>
                <Col xs="auto" className="d-flex gap-4">
                    {/* Filters Dropdown */}
                    <Dropdown className="w-100 position-relative">
                        <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn btn-light border rounded d-flex justify-content-between align-items-center gap-5  w-100"
                        >
                            <span className='textColor-applied'>Filters</span> <FaChevronDown size={12} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item style={{ color: '#424242' }}>All</Dropdown.Item>
                            <Dropdown.Item style={{ color: '#1e88e5' }}>Applied</Dropdown.Item>
                            <Dropdown.Item style={{ color: '#43a047' }}>Shortlisted</Dropdown.Item>                            
                            <Dropdown.Item style={{ color: '#f0c909' }}>Under Review</Dropdown.Item>
                            <Dropdown.Item style={{ color: '#e53935' }}>Not Shortlisted</Dropdown.Item>
                            <Dropdown.Item style={{ color: '#fb8500' }}>Irrelevant Candidate</Dropdown.Item>
                            <Dropdown.Item style={{ color: '#9d4edd' }}>On Hold</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* Time Range Dropdown */}
                    <Dropdown className="w-100 position-relative">
                        <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn btn-light border rounded d-flex justify-content-between align-items-center w-100"
                        >
                            <span className='textColor-applied'>Last 2 Months</span> <FaChevronDown size={12} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-100 custom-dropdown-menu-Appliedjobs">
                            <Dropdown.Item>Last 4 Months</Dropdown.Item>
                            <Dropdown.Item>Last 6 Months</Dropdown.Item>
                            <Dropdown.Item>Last 8 Months</Dropdown.Item>
                            <Dropdown.Item>Last 5 Years </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className="gx-1 gy-3 px-" >
                {jobs.map((job, index) => (
                    <Col key={index} xs={12} md={6} className='d-flex justify-content-center gx-1'>
                        <div className="p-3 shadow-sm rounded-4 border position-relative w-100 " style={{ maxWidth: '95%',  minWidth: '0' }}>
                            <div className="d-flex gap-1">
                                {/* Left: Logo and company name vertically stacked */}
                                <div className="d-flex flex-column align-items-center" style={{ width: '60px', minWidth: '60px' }}>
                                    <img
                                        src={job.logo}
                                        alt={job.company}
                                        style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                                    />
                                    <p className="fw-medium mt-2 mb-0 small text-center textColor-applied">{job.company}</p>
                                </div>
                                {/* Right: Content block */}
                                <div className="flex-grow-1 ms-2">
                                    <div className="d-flex align-items-center justify-content-between">

                                        <span
                                            className="px-3 py-1 rounded-pill small textColor-applied"
                                            style={{
                                                backgroundColor: statusColorMap[job.status] || '#f0f0f0',
                                                color: job.color || '#1e88e5',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {job.status_text}
                                        </span>
                                        <div onClick={handleEyeClick} style={{ cursor: 'pointer' }}>
                                            <FaEye size={30}
                                                style={{
                                                    backgroundColor: '#dfd9d7',
                                                    padding: '6px',
                                                    borderRadius: '50%',
                                                    fontSize: '1.1rem',
                                                    color: '#5d4037',
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <h6 className="fw-semibold mt-2 mb-3 textColor-applied text-start">Junior Web Developer</h6>
                                    <div className="d-flex flex-wrap align-items-center gap-2">
                                        <div className="d-flex align-items-center me-2">
                                            <FaMapMarkerAlt size={20} className="me-1" style={{ color: '#e53935' }} />
                                            <span className='textColor-applied'>K.K Nagar, Chennai</span>
                                        </div>
                                        <div className="d-flex align-items-center me-2">
                                            <PiBriefcase size={20} className="me-1" style={{ color: '#6c47fe' }} />
                                            <span className='textColor-applied'>2+ years</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <FaRupeeSign size={20} className="me-1" style={{ color: '#10a441' }} />
                                            <span className='textColor-applied'>2 LPA</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
            {/* Pagination Controls */}
            <div className="d-flex justify-content-center mt-4 gap-3">
                <Button
                    variant="light"
                    className="rounded-circle shadow-sm"
                    style={{ width: '40px', height: '40px' }}
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                >
                    <FaChevronLeft />
                </Button>

                <Button
                    variant="light"
                    className="rounded-circle shadow-sm"
                    style={{ width: '40px', height: '40px' }}
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    <FaChevronRight />
                </Button>
            </div>
        </Container>
    );
};

export default AppliedJobs;