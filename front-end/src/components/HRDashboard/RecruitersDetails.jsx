import React from 'react';
import { Container, Row, Dropdown, Card, Col, Badge, Image } from 'react-bootstrap';
import { FaPlus, FaDownload, FaEnvelope, FaUndo, FaTimes } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);
import { FiCheckCircle } from 'react-icons/fi';
import { FiBriefcase, FiStar, FiBookmark } from 'react-icons/fi';
import { CgFileDocument } from "react-icons/cg";
import { RiWechatLine } from "react-icons/ri";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { TbBriefcase } from "react-icons/tb";
import { FiMapPin, FiClock } from 'react-icons/fi';
import { BsBookmark, BsClock } from 'react-icons/bs';
import { FaRupeeSign } from 'react-icons/fa';
import { CgLoadbarDoc } from "react-icons/cg";
import { VscBroadcast } from "react-icons/vsc";
import './RecruitersDetails.css';
import softwar from '../../assets/logo/softwar.jpg';
import productDesigner from '../../assets/logo/productDesigner.jpg';
import coordinator from '../../assets/logo/coordinator.jpg';
import productManager from '../../assets/logo/productManager.png'
import { FaMapMarkerAlt } from 'react-icons/fa';
import candidateImage from '../../assets/image/candidateImage.jpg'
import interviewInvite1 from '../../assets/image/interviewInvite1.jpg'
import InterviewInvite2 from '../../assets/image/InterviewInvite2.jpg'
const RecruitersDetails = () => {
    const summary = [
        {
            count: 22,
            label: 'No. of HR Company Recruiters',
            variant: 'primary',
            icon: <FiBriefcase size={24} />,
            bg: 'rgba(63, 81, 181, 0.15)', // Light purple tint
            iconColor: '#3f51b5',
        },
        {
            count: 684,
            label: 'Posted Jobs',
            variant: 'danger',
            icon: <CgFileDocument size={24} />,
            bg: 'rgba(244, 67, 54, 0.15)', // Light red tint
            iconColor: '#f44336',
        },
        {
            count: 38,
            label: 'No. of Induvial Recruiters',
            variant: 'warnng',
            icon: <RiWechatLine size={24} />,
            bg: 'rgba(76, 175, 80, 0.15)', // Light green tint
            iconColor: '#4caf50',
        },
        {
            count: 22,
            label: 'Posted  Jobs',
            variant: 'success',
            icon: <IoCheckmarkDoneOutline size={24} />,
            bg: 'rgba(255, 193, 7, 0.15)', // Light yellow tint
            iconColor: '#ffc107',
        },
    ];

    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Profile Views',
                data: [200, 150, 350, 200, 250, 200],
                fill: false,
                borderColor: '#1b7bcf', // Bootstrap blue
                tension: 0,
                pointBackgroundColor: '#1b7bcf',
                pointRadius: 4,
                pointHoverRadius: 6,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 100,
                max: 400,
                ticks: {
                    stepSize: 50,
                    color: '#000',
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    color: '#ddd',
                },
            },
            x: {
                ticks: {
                    color: '#000',
                    font: {
                        size: 12,
                    },
                },
                grid: {
                    color: '#eee',
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    const applicants = [
        {
            id: 1,
            name: 'elumalai',
            role: 'MERN FSD',
            location: 'Chennai',
            appliedFor: 'FSD',
            company: 'Wipro',
            date: 'May 5, 2025',
            image: candidateImage
        },
        {
            id: 2,
            name: 'elumalai',
            role: 'MERN FSD',
            location: 'Chennai',
            appliedFor: 'FSD',
            company: 'Wipro',
            date: 'May 5, 2025',
            image: interviewInvite1
        },
        {
            id: 3,
            name: 'elumalai',
            role: 'MERN FSD',
            location: 'Chennai',
            appliedFor: 'FSD',
            company: 'Wipro',
            date: 'May 5, 2025',
            image: InterviewInvite2
        },
        {
            id: 4,
            name: 'elumalai',
            role: 'MERN FSD',
            location: 'Chennai',
            appliedFor: 'FSD',
            company: 'Wipro',
            date: 'May 5, 2025',
            image: interviewInvite1
        },
        {
            id: 5,
            name: 'elumalai',
            role: 'MERN FSD',
            location: 'Chennai',
            appliedFor: 'FSD',
            company: 'Wipro',
            date: 'May 5, 2025',
            image: InterviewInvite2
        },
    ];

    return (
        <Container fluid className="p-4">
            <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <VscBroadcast size={22} className="me-2" style={{ color: '#1e88e5' }} />
                Recruiters Details
            </h5>
            {/* Summary divs */}
            <Row className="mb-4 justify-content-center">
                {summary.map((item, idx) => (
                    <Col xs="auto" className="mb-3" key={idx}>
                        <div
                            className="d-flex align-items-center bg-white rounded shadow-sm p-3 h-100"
                            style={{
                                width: '220px', // small fixed card width
                                maxWidth: '100%',
                            }}
                        >
                            {/* Icon Section (Left) */}
                            <div
                                className="d-flex align-items-center justify-content-center rounded flex-shrink-0 me-3"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: item.bg,
                                    color: item.iconColor,
                                }}
                            >
                                {item.icon}
                            </div>

                            {/* Count + Label Section (Right) */}
                            <div className="flex-grow-1">
                                <h5 className="mb-1 fw-bold text-right" style={{ color: item.iconColor }}>
                                    {item.count}
                                </h5>
                                <p className="mb-0 fw-semibold text-muted">{item.label}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Page Views & Notifications */}
            <Row className="mb-4" style={{ minHeight: '360px' }}>
                <Col md={7}>
                    <div className="shadow-sm border-0 p-3 rounded bg-white mb-3" style={{ height: '400px' }}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0 fw-semibold text424242">Jobs  Views</h5>
                        </div>

                        <div style={{ height: '300px' }}>
                            <Line data={chartData} options={chartOptions} />
                            <div className="d-flex justify-content-between align-items-center mb-3 mt-2">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="light"
                                        className="border rounded px-3 py-1 text-start"
                                        style={{ fontSize: '0.9rem', backgroundColor: 'white', minWidth: '0' }}
                                    >
                                        Jobs
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>Last 6 Months</Dropdown.Item>
                                        <Dropdown.Item>Last 3 Months</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                        </div>
                    </div>
                </Col>
            </Row>
            <h5 className="fw-bold text-start">Recent Applicants</h5>
            <hr />

            {/* ✅ Table Header (visible only on md and up) */}
            <Row className="fw-semibold text-muted d-none d-md-flex px-3 py-2 pt-0 border-bottom ">
                <Col md={3} className='text-start'>Candidates</Col>
                <Col md={2} className='text-start'>Location</Col>
                <Col md={2}>Applied For</Col>
                <Col md={2}>HR Company Name</Col>
                <Col md={3}>Applied Date</Col>
            </Row>

            {/* ✅ Table Body */}
            {applicants.map((applicant, index) => (
                <Row key={index} className="align-items-center px-3 py-3 border-bottom">
                    {/* Candidate Info */}
                    <Col xs={12} md={3} className="d-flex align-items-start gap-3 mb-3 mb-md-0">
                        <div className="d-flex flex-column align-items-center me-2">
                            <img
                                src={applicant.image}
                                alt='profile'
                                className="rounded-circle"
                                style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                            />
                        </div>
                        <div>
                            <div className="text-primary fw-semibold">{applicant.role}</div>
                            <div className="fw-bold">{applicant.name}</div>
                        </div>
                    </Col>

                    {/* Location */}
                    <Col xs={12} md={2} className="d-flex align-items-center gap-2 text-muted mb-2 mb-md-0">
                        <FaMapMarkerAlt color="red" />
                        <span>{applicant.location}</span>
                    </Col>

                    {/* Applied For */}
                    <Col xs={12} md={2} className="mb-2 mb-md-0">
                        <Badge bg="primary" className="px-3 py-2">{applicant.appliedFor}</Badge>
                    </Col>

                    {/* Company */}
                    <Col xs={12} md={2} className="text-muted mb-2 mb-md-0">
                        {applicant.company}
                    </Col>

                    {/* Applied Date */}
                    <Col xs={12} md={3} className="text-muted">
                        {applicant.date}
                    </Col>
                </Row>
            ))}


        </Container>
    );
};

export default RecruitersDetails;

