import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { FaRupeeSign, FaMapMarkerAlt } from 'react-icons/fa';
import { PiBriefcaseLight } from 'react-icons/pi';
import { GiSandsOfTime } from 'react-icons/gi';
import { FaRegCalendarAlt } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { BiSolidHeartCircle } from "react-icons/bi";

function getStatusColor(status) {
    switch (status) {
        case 'Approved':
            return { background: '#43a047', color: '#fff' };
        case 'Under Review':
            return { background: '#fbc02d', color: '#fff' };
        case 'Hold':
            return { background: '#e53935', color: '#fff' };
        default:
            return { background: '#e0e0e0', color: '#000' };
    }
}

function JobsPage() {
    const jobData = [
        {
            id: 1,
            image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
            role: 'Senior Web Designer Team Lead',
            name: 'Wipro',
            salary: '2 LPA',
            experience: '2+ years',
            location: 'KK Nagar, Chennai',
            duration: '7 days ago',
            tags: ['UI/UX Designing', 'User Research', 'Figma', 'User Interface Design'],
            status: 'Approved',
            postedBy: 'Individual Recruiter',
        },
        {
            id: 2,
            image: 'https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png',
            role: 'Senior Web Designer Team Lead',
            name: 'Wipro',
            salary: '2 LPA',
            experience: '2+ years',
            location: 'KK Nagar, Chennai',
            duration: '7 days ago',
            tags: ['UI/UX Designing', 'User Research', 'Figma', 'User Interface Design'],
            status: 'Under Review',
            postedBy: 'HR Company',
        },
        {
            id: 3,
            image: 'https://1000logos.net/wp-content/uploads/2021/05/Wipro-logo.png',
            role: 'Senior Web Designer Team Lead',
            name: 'Wipro',
            salary: '2 LPA',
            experience: '2+ years',
            location: 'KK Nagar, Chennai',
            duration: '7 days ago',
            tags: ['UI/UX Designing', 'User Research', 'Figma', 'User Interface Design'],
            status: 'Hold',
            postedBy: 'Individual Recruiter',
        }
    ];
    return (
        <Container className="py-4">
            {/* <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <VscBroadcast size={22} className="me-2" style={{ color: '#1e88e5' }} />
                Individual Recruiters posted jobs
            </h5> */}
            {jobData.map((job) => (
                <div key={job.id} className="mb-4 shadow-sm p-3 rounded-3">
                    <Row className="align-items-center">
                        {/* Logo */}
                        <Col xs={12} md={2} className="text-center mb-3 mb-md-0 align-self-start">
                            <div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    padding: '5px',
                                    margin: '0 auto',
                                    overflow: 'hidden',
                                    border: '1px solid #ddd',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#fff' // Optional, for white background consistency
                                }}
                            >
                                <img
                                    src={job.image}
                                    alt="Profile"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        display: 'block',
                                    }}
                                />
                            </div>
                        </Col>
                        {/* Main Content */}
                        <Col xs={12} md={8}>
                            {/* Top Badges */}
                            <div className="mb-2 text-start d-flex flex-wrap gap-2">
                                {['Indian MNC', 'Banking & Financial Services', 'Full Time', 'WFO'].map((label, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 rounded-pill"
                                        style={{
                                            border: '1px solid #1e88e5',
                                            color: '#424242',
                                            fontSize: '0.875rem',
                                            fontWeight: 500,
                                            backgroundColor: '#f8f9fa',
                                        }}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </div>

                            {/* Title */}
                            <div className="d-flex justify-content-between align-items-center flex-wrap mb-2">
                                <div>
                                    <h5 className="mb-1 fs-4 text-start fontclr">{job.role}</h5>
                                    <h6 className="mb-2 fs-5 text-start" style={{ color: '#1e88e5' }}>
                                        @ {job.name}
                                    </h6>
                                </div>
                            </div>

                            {/* Info Row */}
                            <div className="d-flex flex-wrap fontclr mb-3 fs-6">
                                <div className="me-3 d-flex align-items-center">

                                    <FaRupeeSign size={20} className="me-1" style={{ color: '#10a441' }} /> {job.salary}
                                </div>
                                <div className="me-3 d-flex align-items-center">
                                    <PiBriefcaseLight size={20} className="me-1" style={{ color: '#6c47fe' }} /> {job.experience}
                                </div>
                                <div className="me-3 d-flex align-items-center">
                                    <FaMapMarkerAlt size={20} className="me-1" style={{ color: '#e53935' }} /> {job.location}
                                </div>
                            </div>

                            {/* Tags with dot separators */}
                            <div className="d-flex flex-wrap align-items-center gap-2 mb-3">
                                {job.tags.map((tag, idx) => (
                                    <div key={idx} className="d-flex align-items-center">
                                        <span
                                            className="px-3 py-1 rounded-pill fs-6"
                                            style={{
                                                backgroundColor: '#b8e0d2',
                                                color: '#424242',
                                                fontSize: '0.875rem',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {tag}
                                        </span>
                                        {idx < job.tags.length - 1 && (
                                            <span
                                                className="mx-2"
                                                style={{
                                                    fontSize: '2rem',
                                                    color: '#424242',
                                                    lineHeight: '1',
                                                }}
                                            >
                                                &bull;
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div
                                className="d-flex align-items-center fontclr mb-3 fs-small"
                                style={{ flexWrap: 'nowrap', overflowX: 'auto', gap: '1rem' }}
                            >
                                <div className="d-flex align-items-center">
                                    <FaRegCalendarAlt size={18} className="me-1" style={{ color: '#10a441' }} />
                                    <span>Posted 7 days ago</span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span>7 Open Positions</span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span>Male / Female</span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span>IT Graduates</span>
                                </div>

                                <div className="d-flex align-items-center">
                                    <span>Day Shift</span>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={2} className="h-100 d-flex flex-column align-items-start justify-content-start align-self-start">
                            <div className='d-flex  align-items-start justify-content-center' >
                                <p>
                                    <span className="me-3">
                                        <GrEdit size={40} style={{ color: '#1e88e5' }} /> {/* Edit Icon */}
                                    </span>
                                    <span>
                                        <BiSolidHeartCircle size={40} style={{ color: '#ef476f' }} /> {/* Heart Icon */}
                                    </span>
                                </p>
                            </div>                          
                            <div className='d-flex  justify-content-center' >
                                <span
                                    className="px-3 py-1 rounded-pill"
                                    style={{
                                        ...getStatusColor(job.status),
                                        fontSize: '0.875rem',
                                        fontWeight: 600,
                                    }}
                                >
                                    {job.status}
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col xs={12} md={6} className="d-flex justify-content-md-start justify-content-start mt-md-0">
                            <div
                                className=" text-start"

                            >
                                <p style={{
                                    backgroundColor: '#f1f1f1', // Light gray background
                                    borderRadius: '12px',       // Curved corners
                                    display: 'inline-block',    // Shrinks to content
                                    fontWeight: 500,
                                    color: '#424242',
                                }} className='py-2 px-3'> Posted by {job.postedBy}</p>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            md={6}
                            className="d-flex justify-content-md-start justify-content-start mt-md-0"
                        >
                            <Button
                                className="rounded-pill px-4 py-2"
                                style={{
                                    backgroundColor: '#1e88e5',
                                    border: 'none',
                                    fontSize: '0.95rem',
                                    minWidth: '0',
                                    fontWeight: '500',
                                    height: '40px', // consistent height
                                }}
                            >
                                View Job
                            </Button>
                        </Col>
                    </Row>
                </div>
            ))}
        </Container>
    )
}

export default JobsPage
