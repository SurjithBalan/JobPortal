import { React, useState } from 'react';
import { Container, Row, Col, Card, Badge, Dropdown, ButtonGroup, DropdownButton, Button } from 'react-bootstrap';
import { FaChevronDown } from 'react-icons/fa';
import candidateImage from '../../assets/image/candidateImage.jpg'
import interviewInvite1 from '../../assets/image/interviewInvite1.jpg'
import interviewInvite2 from '../../assets/image/interviewInvite2.jpg'

import Infosys from '../../assets/logo/Infosys.png'
import { PiBriefcase } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { FaEye, FaMapMarkerAlt, FaRupeeSign, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const candidates = [
    {
        name: 'Jon Hendry',
        logo: interviewInvite1,
        status: 'Applied',
        status_text: '30 mins ago',
        color: '#1e88e5',
    },
    {
        name: 'Liam',
        logo: interviewInvite2,
        status: 'Under_Review',
        status_text: '1h ago',
        color: '#f0c909'
    },
    {
        name: 'Matteo',
        logo: candidateImage,
        status: 'Shortlisted',
        status_text: '1d ago',
        color: '#43a047',
    },
    {
        name: 'Matteo',
        logo: candidateImage,
        status: 'Not_Shortlisted',
        status_text: '2d ago',
        olor: '#e53935'
    },
    {
        name: 'Liam',
        logo: interviewInvite1,
        status: 'interviewInvite1',
        status_text: '1d ago',
        color: '#fb8500',
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

const Notification = () => {

    //navigate things

    const navigate = useNavigate();

    const handleEyeClick = () => {
        navigate('/jobdescription'); // change this to your route
    };

    return (
        <Container className="my-4">
            <Row className="align-items-center justify-content-between mb-5">
                <Col xs="auto">
                    <h5 className="fw-semibold mb-0">Notification</h5>
                </Col>
                <Col xs="auto" className="d-flex gap-4">
                    {/* Filters Dropdown */}

                    {/* Time Range Dropdown */}
                    <Dropdown className="w-100 position-relative">
                        <Dropdown.Toggle
                            as="button"
                            bsPrefix="btn"
                            className="btn btn-light border rounded d-flex justify-content-between align-items-center w-100"
                        >
                            <span className='textColor-applied'>Week</span> <FaChevronDown size={12} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="w-100 custom-dropdown-menu-Appliedjobs">
                            <Dropdown.Item>Last 4 Months</Dropdown.Item>
                            <Dropdown.Item>Last 6 Months</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
            </Row>
            <Row className="gx-1 gy-3">
                {candidates.map((person, index) => (
                    <Col key={index} xs={12} md={6} className='d-flex justify-content-center gx-1'>
                        <div className="p-3 shadow-sm rounded-4 border position-relative w-100" style={{ maxWidth: '95%' }}>
                            <Row className="align-items-center">
                                {/* Left Column - Logo */}
                                <Col xs="auto">
                                    <div className="d-flex flex-column align-items-center me-2">
                                        <img
                                            src={person.logo}
                                            alt={person.company}
                                            className="rounded-circle"
                                            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </Col>
                                {/* Center Column - Text */}
                                <Col className="px-2 pt-2">
                                    <p className='textColor-applied fs-small mb-1 text-start'>{person.status_text}</p>
                                    <h6 className="fw-semibold mb-2 textColor-applied text-start">{person.name}</h6>
                                    <p className='textColor-applied text-start'>Your resume has been shortlisted</p>
                                </Col>

                                {/* Right Column - Eye Icon */}
                                <Col xs="auto" className="d-flex justify-content-end align-self-start mt-2 me-2">
                                    <div onClick={handleEyeClick} style={{ cursor: 'pointer' }}>
                                        <FaEye
                                            size={30}
                                            style={{
                                                backgroundColor: '#dfd9d7',
                                                padding: '6px',
                                                borderRadius: '50%',
                                                fontSize: '1.1rem',
                                                color: '#5d4037',
                                            }}
                                        />
                                    </div>
                                </Col>                                
                            </Row>
                        </div>
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default Notification;