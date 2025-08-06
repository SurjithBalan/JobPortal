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
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiUpload2Line } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa";
import { PiPencilSimpleLight } from "react-icons/pi";
const CandidateProfile = () => {
    const percentage = 80;
    return (
        <Container fluid className="p-4 bg-light">
            <Row className="g-4">
                {/* Left Sidebar */}
                <Col lg={5}>
                    <div className="p-3 shadow-sm border-0 rounded-4">
                        {/* Profile Header */}
                        <Row className="align-items-center">
                            {/* Left Column - Image */}
                            <Col xs="auto">
                                <div className="oval-frame position-relative me-3">
                                    <Image
                                        src={candidateProfileImage}
                                        alt="Candidate"
                                        className="oval-inner-image"
                                    />
                                </div>
                            </Col>

                            {/* Right Column - Content */}
                            <Col className="align-self-start">
                                <div className="position-relative text-start">
                                    <MdOutlineEdit
                                        size={40}
                                        className="position-absolute top-0 end-0 p-1 rounded-circle border fs-2"
                                        style={{
                                            transform: 'translate(30%, -20%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc',
                                            cursor: 'pointer'
                                        }}
                                    />
                                    <h6 className="mb-1 fw-semibold colortone fs-4 mt-0 mb-3">Zack Nikola</h6>
                                    <p className="mb-0 text-muted colortone fs-5 mb-3">Web Developer</p>
                                    <p className="mb-0 text-muted small fs-6 colortone mb-3">Skylark</p>
                                    <p className="text-muted small mb-0 fs-6 colortone mb-3">
                                        April 2025 - Present • 0 Yrs 1 Mts Chennai
                                    </p>
                                </div>
                            </Col>
                        </Row>
                        <hr />
                        {/* Details */}
                        <Row className="mb-2 small text-center">
                            <Col xs={4}>
                                <div className="colortone fs-6">Total Exp</div>
                                <div className="fw-bold text-muted colortone fs-6">0 yrs 3 mos</div>
                            </Col>
                            <Col xs={4}>
                                <div className="colortone fs-6">Salary</div>
                                <div className="fw-bold text-muted colortone fs-6">INR 4LPA</div>
                            </Col>
                            <Col xs={4}>
                                <div className="colortone fs-6">Notice Period</div>
                                <div className="fw-bold text-muted fs-6">30 Days</div>
                            </Col>
                        </Row>
                        <hr />

                        <Row className="mb-2 text-start d-flex align-items-center justify-content-between">
                            <Col xs={12} md={6} className="mb-2 mb-md-0">
                                <HiOutlinePhone size={20} className="me-1" style={{ color: '#43a047' }} />
                                <span className="colortone fs-6">+91 8734272845</span>
                            </Col>
                            <Col xs={12} md={6} className="mb-2 mb-md-0 text-end text-nowrap">
                                <HiOutlineMail size={20} className="me-1" style={{ color: '#494fff' }} />
                                <span className="colortone fs-6">zacknike@gmail.com</span>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="small mb-2">
                            <Col xs={12}><PiSparkle size={20} className="me-1" style={{ color: '#ffa900' }} /><span className='colortone fs-6                    '>Profile last updated on : </span><span className='colortone'>25 April 2025</span></Col>
                        </Row>

                        {/* Profile Score */}
                        <div className="bg-light border-0 mt-3">
                            <Card.Body className="p-3">
                                <Row className="align-items-center">
                                    <Col xs={2} className=''>
                                        <div style={{ width: 80, height: 80 }}>
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
                                        <div className="fw-bold text-start colortone fs-6">Profile Score</div>
                                        <div className="text-start"><small className="text-muted colortone fs-6">Recruiters prefer fully completed profiles — finish yours to get noticed!</small></div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </div>
                        {/* Pending Actions */}
                        <div className="bg-light border-0 mt-2">
                            <Card.Body className="p-3">
                                <div className="fw-bold colortone mb-2 fs-6">Pending Action</div>
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="colortone fs-5" style={{ lineHeight: 1 }}>•</span>
                                        <span className="fw-medium colortone fs-6">Resume</span>
                                        <span className="px-2 py-1 rounded-pill colortone fs-6" style={{ backgroundColor: '#f8c7c7', fontSize: '0.8rem' }}>
                                            10%
                                        </span>
                                    </div>
                                    <FaChevronRight size={20} />
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-2">
                                        <span className="fs-5 colortone fs-6" style={{ lineHeight: 1 }}>•</span>
                                        <span className="fw-medium colortone fs-6">Verify Email ID</span>
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
                <Col lg={7}>
                    {/* About */}
                    <div className="p-3 shadow-sm mb-3">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-semibold colortone text-start fs-4">About</h6>
                            <MdOutlineEdit
                                size={30}
                                className="p-1 rounded-circle border"
                                style={{
                                    transform: 'translate(30%, -50%)',
                                    color: '#1e88e5',
                                    backgroundColor: '#e9f3fc'
                                }}
                            />
                        </div>
                        <div className="d-flex justify-content-start">
                            <p className="mb-0 text-start colortone fs-6">
                                Passionate Web Developer with a strong foundation in front-end and back-end technologies.
                            </p>
                        </div>
                    </div>


                    {/* Resume */}
                    <div className="p-3 shadow-sm mb-3">
                        <div className="d-flex justify-content-between">
                            <h6 className="fw-semibold colortone text-start fs-4">Resume</h6>

                            <RiUpload2Line
                                size={30}
                                className="p-1 rounded-circle border"
                                style={{
                                    transform: 'translate(30%, -50%)',
                                    color: '#1e88e5',
                                    backgroundColor: '#e9f3fc'
                                }}
                            />
                        </div>

                        <Row className="align-items-center mb-2">
                            <Col>
                                <div className="fw-semibold text-start small colortone fs-6">Zack  CV -  Zack Nikola.pdf</div>
                                <div className="text-start small colortone fs-6">Uploaded on Mar 28, 2025</div>
                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"

                                >
                                    <RiDeleteBin6Line
                                        size={30}
                                        className="p-1 rounded-circle border"
                                        style={{
                                            transform: 'translate(30%, -50%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc'
                                        }}
                                    />
                                </div>
                            </Col>
                            {/* Upload Button */}
                            <Row className="justify-content-center text-center my-3">
                                <Col xs="12" sm="auto">
                                    <Button
                                        className="fw-semibold rounded-pill px-3 py-1 fs-6"
                                        style={{
                                            backgroundColor: 'transparent',
                                            color: '#1e88e5',
                                            border: '1px solid #1e88e5',
                                        }}
                                    >
                                        Upload Resume
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <p className="small text-center mb-0 colortone fs-6" style={{ opacity: 0.6 }}>
                                        Supported Formats: doc, docx, rtf, pdf, upto 2 MB
                                    </p>
                                </Col>
                            </Row>
                        </Row>
                    </div>
                    {/* education */}
                    <div className="border rounded p-3  position-relative mb-3">
                        {/* Title Row */}
                        <Row className="mb-2 align-items-center">
                            <Col className="text-start">
                                <h5 className="fw-semibold mb-0 colortone fs-4">Education</h5>
                            </Col>
                            <Col xs="auto" className="text-end">
                                <div
                                    className="d-flex justify-content-center align-items-center gap-2"
                                    style={{
                                        height: 30,
                                        color: '#1e88e5',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    Add Education
                                </div>
                            </Col>
                        </Row>

                        {/* Education Info Row */}
                        <Row className="align-items-center mb-2">
                            <Col>
                                <div className="text-start small colortone fs-6">B.tech/ B.E Electrical</div>
                                <div className="text-start small colortone fs-6">Vels Engineering Collage, Chennai</div>
                                <div className="text-start small colortone fs-6" style={{ opacity: 0.6 }}>2018 - 2022 | Full Time</div>

                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"

                                >
                                    <MdOutlineEdit
                                        size={30}
                                        className="p-1 rounded-circle border"
                                        style={{
                                            transform: 'translate(30%, -50%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col>
                                <div className=" text-start small colortone fs-6">B.tech/ B.E Electrical</div>
                                <div className=" text-start small colortone fs-6">Vels Engineering Collage, Chennai</div>
                                <div className=" text-start small colortone fs-6" style={{ opacity: 0.6 }}>2018 - 2022 | Full Time</div>

                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"

                                >
                                    <MdOutlineEdit
                                        size={30}
                                        className="p-1 rounded-circle border"
                                        style={{
                                            transform: 'translate(30%, -50%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* Experience */}
                    <div className="border rounded p-3  position-relative mb-3">
                        {/* Title Row */}
                        <Row className="mb-2 align-items-center">
                            <Col className="text-start">
                                <h5 className="fw-semibold mb-0 colortone fs-4">Experience</h5>
                            </Col>
                            <Col xs="auto" className="text-end">
                                <div
                                    className="d-flex justify-content-center align-items-center gap-2"
                                    style={{
                                        height: 30,
                                        color: '#1e88e5',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    Add Experience
                                </div>
                            </Col>
                        </Row>

                        {/* Experience Info Row */}
                        <Row className="align-items-center mb-2">
                            <Col>
                                <div className=" text-start small colortone fs-6">Web Developer Intern </div>
                                <div className=" text-start small colortone fs-6">Cognizant</div>
                                <div className=" text-start small colortone fs-6" style={{ opacity: 0.6 }}>Full Time | Jun 2022 to Nov 2025 (2 years 6 months)</div>
                                <div className=" text-start small colortone fs-6" style={{ opacity: 0.6 }}>I am trained in web developing full stack and I also learned how the work in the real time project as well.</div>
                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"

                                >
                                    <MdOutlineEdit
                                        size={30}
                                        className="p-1 rounded-circle border"
                                        style={{
                                            transform: 'translate(30%, -50%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* Projects */}
                    <div className="border rounded p-3  position-relative mb-3">
                        {/* Title Row */}
                        <Row className="mb-2 align-items-center">
                            <Col className="text-start">
                                <h5 className="fw-semibold mb-0 colortone fs-5">Projects</h5>
                            </Col>
                            <Col xs="auto" className="text-end">
                                <div
                                    className="d-flex justify-content-center align-items-center gap-2"
                                    style={{
                                        height: 30,
                                        color: '#1e88e5',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    Add Projects
                                </div>
                            </Col>
                        </Row>

                        {/* Projects Info Row */}
                        <Row className="align-items-center mb-2">
                            <Col>
                                <div className=" text-start small colortone fs-6">Food Industry </div>
                                <div className=" text-start small colortone fs-6">Cognizant</div>
                                <div className=" text-start small colortone fs-6" style={{ opacity: 0.6 }}>Full Time | Jun 2022 to Nov 2025 (2 years 6 months)</div>
                                <div className=" text-start small colortone fs-6" style={{ opacity: 0.6 }}>I am trained in web developing full stack and I also learned how the work in the real time project as well.</div>
                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"

                                >
                                    <MdOutlineEdit
                                        size={30}
                                        className="p-1 rounded-circle border"
                                        style={{
                                            transform: 'translate(30%, -50%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    {/* Certifications */}
                    <div className="border rounded p-3  position-relative mb-3">
                        {/* Title Row */}
                        <Row className="mb-2 align-items-center">
                            <Col className="text-start">
                                <h5 className="fw-semibold mb-0 colortone fs-4">Certifications</h5>
                            </Col>
                            <Col xs="auto" className="text-end">
                                <div
                                    className="d-flex justify-content-center align-items-center gap-2"
                                    style={{
                                        height: 30,
                                        color: '#1e88e5',
                                        borderRadius: '20px',
                                        cursor: 'pointer',
                                        fontSize: '16px',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    Add Certifications
                                </div>
                            </Col>
                        </Row>

                        {/* Projects Info Row */}
                        <Row className="align-items-center mb-2">
                            <Col>
                                <div className=" text-start small colortone fs-6">Java Full Stack</div>
                                <div className=" text-start small colortone fs-6">Udemy</div>
                                <div className=" text-start small colortone fs-6" style={{ opacity: 0.6 }}>Sep - 2022</div>
                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"

                                >
                                    <MdOutlineEdit
                                        size={30}
                                        className="p-1 rounded-circle border"
                                        style={{
                                            transform: 'translate(30%, -50%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                            <Col>
                                <div className=" text-start small colortone fs-6">HTML </div>
                                <div className=" text-start small colortone fs-6">Guvi</div>
                                <div className=" text-start small colortone fs-6" style={{ opacity: 0.6 }}>Mar - 2024</div>
                            </Col>
                            <Col xs="auto">
                                <div
                                    className="rounded-circle d-flex justify-content-center align-items-center"

                                >
                                    <MdOutlineEdit
                                        size={30}
                                        className="p-1 rounded-circle border"
                                        style={{
                                            transform: 'translate(30%, -50%)',
                                            color: '#1e88e5',
                                            backgroundColor: '#e9f3fc'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CandidateProfile;