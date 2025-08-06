import React from 'react';
import { Container, Row, Col, Card, Button, Badge, ListGroup, Image } from 'react-bootstrap';
import { FaEnvelope, FaCalendarAlt, FaBriefcase, FaBuilding, FaUserTie, FaClock, FaMapMarkerAlt, FaPhoneAlt, FaTransgender, FaLink } from 'react-icons/fa';
import { FaRegCalendarAlt, FaRegBookmark, FaRegFileAlt } from "react-icons/fa";
import {
    FaUserGraduate,
    FaMoneyBillWave,
    FaSun,
    FaUsers,
    FaUser
} from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { MdOutlineStar } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { MdOutlineNavigation } from "react-icons/md";
import './jobDescription.css';
import CTSH from '../../assets/logo/CTSH.png'
import infosis from '../../assets/logo/Infosys.png'
const JobDetailsPage = () => {
    return (
        <Container className="my-4">
            <Row>
                <div>
                    <Row className="align-items-center">
                        <Col md="auto" xs={12}>
                            <div className='textColor-jobdesc'>
                                <h5 className="mb-2 textColor-jobdesc">Research & Development (R&D)</h5>
                                <h3>
                                    Research Associate <span className='Onsite-badge rounded text-white px-2 '>On-Site</span>
                                </h3>
                            </div>

                        </Col>

                        <Col md="auto" xs={12} className="ms-auto text-md-end">
                            <Button
                                className="w-100 w-md-auto border-0 fw-semibold py-2"
                                size="sm"
                                style={{
                                    minWidth: "150px",
                                    fontSize: "0.85rem",
                                    backgroundColor: "#faf1c8",
                                    color: '#c09648'
                                }}
                            ><MdOutlineStar size={20} className='me-2 mb-1' />
                                Bookmark This Job
                            </Button>
                        </Col>
                    </Row>

                    <div className="p-3 my-3 border-0 shadow-lg">
                        <Row className="align-items-center g-3">
                            <Col xs={12} md="auto" className='m-0 p-0'>
                                <Image src={CTSH} rounded className="border img-fluid rounded" height="50" style={{ maxWidth: '70px' }} />
                            </Col>
                            <Col xs={12} md>
                                <div className="d-flex flex-wrap align-items-center mb-2">
                                    <h5 className='textColor-jobdesc'>Cognizant</h5>
                                </div>
                                <div className="d-flex flex-wrap align-items-center mb-2">
                                    <Button size="sm" className="me-2 mb-2 border-0" disabled style={{ backgroundColor: '#eeeeee', color: '#424242', minWidth: '120px', padding: '4px 12px', fontSize: '0.85rem' }}><FaLink className="me-2" />Website</Button>
                                    <Button size="sm" className="me-2 mb-2 border-0" disabled style={{ backgroundColor: '#eeeeee', color: '#424242', minWidth: '120px', padding: '4px 12px', fontSize: '0.85rem' }}><FaEnvelope className="me-2" />hradmin@cognizant.com</Button>
                                </div>
                                <div className='d-flex flex-wrap justify-content-start align-items-center'>
                                    <Button
                                        className="d-inline-flex align-items-center border-0"
                                        size="sm"
                                        style={{ minWidth: '120px', padding: '4px 12px', fontSize: '0.85rem', backgroundColor: '#e3f5ea', color: '#27ae62' }}
                                    >
                                        <FaEnvelope className="me-2" />
                                        Send Message
                                    </Button>
                                </div>
                            </Col>
                            <Col xs={12} md="auto" className="text-md-end">
                                <Button className="w-100 w-md-auto border-0 fw-semibold py-2" size="sm" style={{ minWidth: '150px', fontSize: '0.85rem', backgroundColor: '#27ae62' }}> Apply Job <MdOutlineNavigation size={20} style={{ marginLeft: "5px", transform: "rotate(90deg)" }} /> </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Col lg={8} md={12} sm={12} xs={12}>
                    <div className="mb-4">
                        <Card.Body>
                            <div className="mb-3">
                                <h5 className="mb-3 textColor-jobdesc">Job Description</h5>
                                <Card.Body>
                                    <ul className='textColor-jobdesc' >
                                        <li>As a Senior Web Design Team Lead, you will be responsible for leading a team of designers in creating visually compelling and user-centric websites and applications. Your role involves collaborating with product managers, developers.</li>
                                        <li>In this leadership position, you will mentor junior designers, conduct design reviews, and foster a culture of creativity, collaboration, and continuous improvement. You are expected to stay updated with the latest web trends, usability best practices, and accessibility standards.</li>

                                    </ul>
                                </Card.Body>
                            </div>

                            <div className="mb-3">
                                <Card.Header>
                                    <h5 className="mb-3 textColor-jobdesc">Roles and Responsibilities</h5>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="tickmark-list ms-2">
                                        <li><span className="tickmark-icon-wrapper"><FaCheck className="tickmark-icon" /></span> Conduct in-depth research and analysis on assigned topics using credible sources.</li>
                                        <li><span className="tickmark-icon-wrapper"><FaCheck className="tickmark-icon" /></span> Prepare detailed reports, presentations, and research summaries.</li>
                                        <li><span className="tickmark-icon-wrapper"><FaCheck className="tickmark-icon" /></span> Collaborate with teams to support ongoing projects and experiments.</li>
                                        <li><span className="tickmark-icon-wrapper"><FaCheck className="tickmark-icon" /></span> Assist in data collection, interpretation, and documentation of findings.</li>
                                        <li><span className="tickmark-icon-wrapper"><FaCheck className="tickmark-icon" /></span> Maintain accuracy and integrity of data throughout the research process.</li>
                                    </ul>
                                </Card.Body>
                            </div>

                            <div className="mb-3">
                                <h5 className="mb-3 textColor-jobdesc">Skills Required</h5>
                                <div className="d-flex flex-wrap" >
                                    {['Sensory Evaluation', 'Data Interpretation', 'Consumer Research', 'Data Visualization'].map(skill => (

                                        <span className="me-2 mb-2 p-2 textColor-jobdesc" style={{ backgroundColor: '#eeeeee', borderRadius: '5px', color: '#424242' }} key={skill}>{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </Card.Body>
                    </div>


                    <h5 className="mb-3 textColor-jobdesc">People also Viewed</h5>

                    {[1, 2, 3].map(i => (
                        <div className="job-card shadow-sm rounded p-3 mb-3 d-flex flex-column flex-md-row align-items-start align-items-md-center bg-white" key={i}>
                            <Image src={infosis} rounded className="me-md-3 mb-3 mb-md-0 border rounded p-2" height="50" style={{ maxWidth: '70px' }} />

                            <div className="flex-grow-1">
                                <div className="d-flex align-items-center mb-1">
                                    <span className="fw-semibold me-2" style={{ color: '#24a35d' }}>Infosys</span>
                                    <span className="fw-bold me-2 textColor-jobdesc">Software Engineer</span>
                                    <span className="text-white border rounded px-2" style={{ backgroundColor: '#e1d123' }}>On-Site</span>
                                </div>

                                <div className="d-flex flex-wrap text-muted small mb-1">
                                    <div className="me-3 d-flex align-items-center textColor-jobdesc"><FaMapMarkerAlt className="me-1" style={{ color: '#e53935' }} /> Guindy</div>
                                    <div className="me-3 d-flex align-items-center textColor-jobdesc"><PiCurrencyInrDuotone className="me-1" style={{ color: '#24a35d' }} /><span> 1,20,000 LPA</span></div>

                                </div>
                                <div className="d-flex flex-wrap text-muted small mb-1">
                                    <div className="me-3 d-flex align-items-center textColor-jobdesc"><FaRegFileAlt className="me-1 text-primary" /> 3+ Yrs</div>
                                    <div className="d-flex align-items-center textColor-jobdesc"><FaRegCalendarAlt className="me-1" style={{ color: '#3a0ca3' }} /> Posted on 2 days ago</div>
                                </div>
                            </div>

                            <div className="d-flex flex-column align-items-center ms-md-3">
                                <div className="rounded-circle p-2" style={{
                                    backgroundColor: '#e8f5e9',
                                    width: '40px',
                                    height: '40px'
                                }}>
                                    <IoStarOutline className="" style={{ position: 'relative', left: '2px', color: '#27ae62', fontSize: '20px' }} />
                                </div>
                                <Button className="mt-2 border-0" style={{ backgroundColor: '#27ae62', minWidth: '100px' }}>
                                    View Job
                                </Button>
                            </div>
                        </div>
                    ))}
                </Col>

                <Col lg={4} md={12} sm={12} xs={12}>
                    <div className="mt-4 mt-lg-0">
                        <h5 className="mb-3 textColor-jobdesc">Job Overview</h5>
                        <div className="p-3" style={{ backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaCalendarAlt style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Date Posted:</strong><br />Posted 6 days ago</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaBriefcase style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Category:</strong><br />Research & Development</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaBuilding style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Industry:</strong><br />IT</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaUserTie className="me-2 mt-1" style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Career Level:</strong><br />Mid-Level</div>
                                </ListGroup.Item>

                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaBuilding style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Company Type:</strong><br />Corporate</div>
                                </ListGroup.Item>

                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaBriefcase style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Job Type:</strong><br />Full Time</div>
                                </ListGroup.Item>

                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaUserGraduate style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Qualification:</strong><br />Graduate</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaClock style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Experience:</strong><br />5+ Years</div>
                                </ListGroup.Item>

                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaMoneyBillWave style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>CTC Range:</strong><br />10 LPA</div>
                                </ListGroup.Item>

                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaTransgender style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Gender:</strong><br />Both</div>
                                </ListGroup.Item>

                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaMapMarkerAlt style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Work Mode:</strong><br />On-Site</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaSun style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Shift Type:</strong><br />Day Shift</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaUsers style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Open Positions:</strong><br />2</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaPhoneAlt style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Recruiter Name:</strong><br />Zack</div>
                                </ListGroup.Item>
                                <ListGroup.Item className="border-0 d-flex align-items-start">
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded me-2"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            backgroundColor: '#e8f5e9'  // light green background
                                        }}
                                    >
                                        <FaUser style={{ color: '#27ae62' }} />
                                    </div>
                                    <div className='textColor-jobdesc'><strong>Recruiter Name:</strong><br />Zack</div>
                                </ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container >
    );
};

export default JobDetailsPage;
