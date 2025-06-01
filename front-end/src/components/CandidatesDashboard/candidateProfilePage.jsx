import React from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, Image } from 'react-bootstrap';
import { FiEdit, FiUpload } from 'react-icons/fi';
import { HiOutlinePhone } from "react-icons/hi";
import { TfiEmail } from "react-icons/tfi";
import { PiSparkle } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { HiOutlineMail } from 'react-icons/hi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import candidateProfileImage from '../../assets/image/candidateProfileImage.png'
import './candidateProfilePage.css'
import { MdOutlineEdit } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const CandidateProfile = () => {
    const percentage = 80;
    return (
        <Container fluid className="p-4 bg-light">
            <Row className="g-4">
                {/* Left Sidebar */}
                <Col lg={6}>
                    <div className="p-3 shadow-sm border-0 rounded-4">
                        {/* Profile Header */}
                        <div className="d-flex align-items-center">
                            {/* image area */}
                            <div className="oval-frame position-relative me-3">
                                <Image
                                    src={candidateProfileImage}
                                    alt="Candidate"
                                    className="oval-inner-image"
                                />
                            </div>

                            {/* contents area */}
                            <div className="position-relative text-start">
                                <MdOutlineEdit
                                    size={20}
                                    className="position-absolute top-0 end-0 p-1 rounded-circle border"
                                    style={{
                                        transform: 'translate(50%, -50%)',
                                        color: '#1e88e5',
                                        backgroundColor: '#e9f3fc'
                                    }}
                                />
                                <h6 className="mb-1 fw-bold colortone">Zack Nikola</h6>
                                <p className="mb-0 text-muted colortone">Web Developer</p>
                                <p className="mb-0 text-muted small colortone">Skylark</p>
                                <p className="text-muted small mb-0 colortone">April 2025 - Present • 0 Yrs 1 Mts chennai</p>
                            </div>
                        </div>
                        <hr />
                        {/* Details */}
                        <Row className="mb-2 small text-center">
                            <Col xs={4}>
                                <div className="colortone">Total Exp</div>
                                <div className="fw-bold text-muted colortone">0 yrs 3 mos</div>
                            </Col>
                            <Col xs={4}>
                                <div className="colortone">Salary</div>
                                <div className="fw-bold text-muted colortone">INR 4LPA</div>
                            </Col>
                            <Col xs={4}>
                                <div className="colortone">Notice Period</div>
                                <div className="fw-bold text-muted">30 Days</div>
                            </Col>
                        </Row>
                        <hr />

                        <Row className="mb-2 text-start d-flex align-items-center justify-content-between">
                            <Col xs={12} md={6} className="mb-2 mb-md-0">
                                <HiOutlinePhone size={20} className="me-1" style={{ color: '#43a047' }} />
                                <span className="colortone">+91 8734272845</span>
                            </Col>
                            <Col xs={12} md={6} className="mb-2 mb-md-0 text-end text-nowrap">
                                <HiOutlineMail  size={20} className="me-1" style={{ color: '#494fff' }} />
                                <span className="colortone">zacknike@gmail.com</span>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="small mb-2">
                            <Col xs={12}><PiSparkle size={20} className="me-1" style={{ color: '#ffa900' }} /><span className='colortone'>Profile last updated on : </span><span className='colortone'>25 April 2025</span></Col>
                        </Row>

                        {/* Profile Score */}
                        <div className="bg-light border-0 mt-3">
                            <Card.Body className="p-3">
                                <Row className="align-items-center">
                                    <Col xs={2} className=''>
                                        <div style={{ width: 60, height: 60 }}>
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    textSize: '24px',
                                                    pathColor: '#28a745',
                                                    textColor: '#28a745',
                                                    trailColor: '#d6d6d6',
                                                })}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={1}></Col> {/* Spacer column */}
                                    <Col xs={9}>
                                        <div className="fw-bold text-start colortone ">Profile Score</div>
                                        <div className="text-start"><small className="text-muted colortone">Recruiters prefer fully completed profiles — finish yours to get noticed!</small></div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </div>

                        {/* Pending Actions */}
                        <div className="bg-light border-0 mt-2">
                            <Card.Body className="p-3">
                                <div className="fw-bold colortone mb-2">Pending Action</div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="colortone fs-5" style={{ lineHeight: 1 }}>•</span>
                                        <span className="fw-medium colortone">Resume</span>
                                        <span className="px-2 py-1 rounded-pill colortone" style={{ backgroundColor: '#f8c7c7', fontSize: '0.8rem' }}>
                                            10%
                                        </span>
                                    </div>
                                    <FaChevronRight size={20} />
                                </div>

                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fs-5 colortone" style={{ lineHeight: 1 }}>•</span>
                                        <span className="fw-medium colortone">Verify Email ID</span>
                                        <span className="px-2 py-1 rounded-pill colortone" style={{ backgroundColor: '#f8c7c7', fontSize: '0.8rem' }}>
                                            10%
                                        </span>
                                    </div>
                                    <FaChevronRight size={20} />
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </Col>

                {/* Right Content */}
                <Col lg={6}>
                    {/* About */}
                    <div className="p-3 shadow-sm mb-3">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-bold colortone text-start">About</h6>
                            <MdOutlineEdit
                                size={20}
                                className="p-1 rounded-circle border"
                                style={{
                                    transform: 'translate(50%, -50%)',
                                    color: '#1e88e5',
                                    backgroundColor: '#e9f3fc'
                                }}
                            />
                        </div>
                        <div className="d-flex justify-content-start">
                            <p className="mb-0 text-start colortone">
                                Passionate Web Developer with a strong foundation in front-end and back-end technologies.
                            </p>
                        </div>
                    </div>
                    {/* Resume */}
                    <div className="border rounded p-3  position-relative mb-3">
                        {/* Title Row */}
                        <Row className="mb-2">
                            <Col>
                                <h5 className="fw-semibold mb-0 text-start colortone">Resume</h5>
                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: '#e9f3fc',
                                        color: '#1e88e5',
                                    }}
                                >
                                    <FiUpload size={16} />
                                </div>
                            </Col>
                        </Row>

                        {/* Resume Info Row */}
                        <Row className="align-items-center">
                            <Col>
                                <div className="fw-semibold text-start mb-1 colortone">Zack CV – Zack Nikola.pdf</div>
                                <div className="text-muted text-start small colortone">Uploaded on Mar 28, 2025</div>
                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"
                                    style={{
                                        width: 30,
                                        height: 30,
                                        backgroundColor: '#e9f3fc',
                                        color: '#1e88e5',
                                    }}
                                >
                                    <RiDeleteBinLine size={16} />
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center text-center pt-2">
                            <Col xs="auto">
                                <Button
                                    
                                    className="upload-btn-profile-page px-4 py-2 fw-semibold"
                                    style={{
                                        borderRadius: '50px',
                                        fontSize: '0.9rem',
                                        borderWidth: '2px',
                                        minWidth: 'auto',
                                        borderColor:'#1b7bcf',
                                        color:'#1b7bcf',
                                        backgroundColor:'white',
                                        boxShadow: 'none'
                                    }}
                                >
                                    Upload Resume
                                </Button>
                                <p className="mt-3 mb-0 text-secondary small">
                                    Supported Formats : doc, docx, rtf, pdf, upto 2 MB
                                </p>
                            </Col>
                        </Row>
                    </div>                    

                    {/* Education */}
                    
                    <div className="p-3 shadow-sm mb-3">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-bold">Education</h6>
                            <Button variant="link" className="p-0">Add Education</Button>
                        </div>
                        <div className="mb-3">
                            <strong>B.Tech / EEE</strong>
                            <p className="mb-1">Web Engineering College, Chennai</p>
                            <small className="text-muted">2018 - 2022 | Full Time</small>
                        </div>
                        <div>
                            <strong>B.Tech / EEE</strong>
                            <p className="mb-1">Web Engineering College, Chennai</p>
                            <small className="text-muted">2018 - 2022 | Full Time</small>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="p-3 shadow-sm mb-3">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-bold">Experience</h6>
                            <Button variant="link" className="p-0">Add Experience</Button>
                        </div>
                        <div>
                            <strong>Web Developer Intern</strong>
                            <p className="mb-1">Cognizant</p>
                            <small className="text-muted">Nov 2023 - May 2025 (1 Yr 5 Mos)</small>
                            <p className="text-muted mt-2">
                                I am trained in web developing full stack and I also learned how the work in the real time project as well.
                            </p>
                        </div>
                    </div>
                    {/* Projects */}
                    <div className="p-3 shadow-sm mb-3">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-bold">Projects</h6>
                            <Button variant="link" className="p-0">Add Project</Button>
                        </div>
                        <div>
                            <strong>Food Industry</strong>
                            <p className="mb-1">Cognizant</p>
                            <small className="text-muted">Jan 2022 - Nov 2025 (2 Yr 10 Mos)</small>
                            <p className="text-muted mt-2">
                                I am trained in web developing full stack and I also learned how the work in the real time project as well.
                            </p>
                        </div>
                    </div>
                    {/* Certifications */}
                    <div className="p-3 shadow-sm">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-bold">Certifications</h6>
                            <Button variant="link" className="p-0">Add Certification</Button>
                        </div>
                        <div>
                            <strong>Java Full Stack</strong>
                            <p className="mb-1">Sep - 2022</p>
                            <strong>HTML</strong>
                            <p className="mb-1">Mar - 2024</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CandidateProfile;