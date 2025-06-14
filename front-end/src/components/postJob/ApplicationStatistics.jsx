import React from 'react';
import { Container, Row, Col, Button, Dropdown, Table, Badge, } from 'react-bootstrap';
import { FaPlus, FaDownload, FaEnvelope, FaUndo, FaTimes } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend);
import { FiCheckCircle } from 'react-icons/fi';
import { FiBriefcase, FiEdit, FiStar, FiBookmark } from 'react-icons/fi';
import './ApplicationStatistics.css'
const chartData = {
    labels: ['Apr 30', 'May 1', 'May 2', 'May 3', 'May 4', 'May 5'],
    datasets: [
        {
            label: 'Page Views',
            data: [4, 2, 5, 6, 9, 3],
            borderColor: '#0d6efd',
            backgroundColor: 'rgba(13, 110, 253, 0.1)',
            tension: 0.4,
            fill: true,
        }
    ]
};

const chartOptions = {
    responsive: true,
    plugins: {
        legend: { display: false },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: { stepSize: 1 }
        }
    }
};

const ApplicationStatisticsDashboard = () => {
    const summary = [
        {
            count: 3,
            label: 'Posted Jobs',
            variant: 'primary',
            icon: <FiBriefcase size={24} />,
            bg: 'rgba(63, 81, 181, 0.15)', // Light purple tint
            iconColor: '#3f51b5',
        },
        {
            count: 2,
            label: 'Applications',
            variant: 'danger',
            icon: <FiEdit size={24} />,
            bg: 'rgba(244, 67, 54, 0.15)', // Light red tint
            iconColor: '#f44336',
        },
        {
            count: 2,
            label: 'Review',
            variant: 'success',
            icon: <FiStar size={24} />,
            bg: 'rgba(76, 175, 80, 0.15)', // Light green tint
            iconColor: '#4caf50',
        },
        {
            count: 3,
            label: 'Shortlisted',
            variant: 'warning',
            icon: <FiBookmark size={24} />,
            bg: 'rgba(255, 193, 7, 0.15)', // Light yellow tint
            iconColor: '#ffc107',
        },
    ];

    const notifications = [
        'A meeting is cancelled on your job Social media Marketing by candidate.',
        'A meeting is cancelled on your job Social media Marketing by candidate.',
        'A meeting is cancelled on your job Social media Marketing by candidate.',
    ];

    const applicants = [
        {
            name: 'Candidate',
            role: 'Social Media Marketing',
            location: 'United States',
            status: 'Approved',
            date: 'May 5, 2025',
        },

        {
            name: 'Candidate',
            role: 'Social Media Marketing',
            location: 'United States',
            status: 'Approved',
            date: 'May 5, 2025',
        },
        {
            name: 'Candidate',
            role: 'Social Media Marketing',
            location: 'United States',
            status: 'Approved',
            date: 'May 5, 2025',
        },
        {
            name: 'Candidate',
            role: 'Social Media Marketing',
            location: 'United States',
            status: 'Approved',
            date: 'May 5, 2025',
        },
    ];


    return (
        <Container fluid className="p-4">
            <h4 className="mb-4">Application Statistics</h4>

            {/* Summary divs */}
            <Row className="mb-4">
                {summary.map((item, idx) => (
                    <Col xs={6} md={3} key={idx} className="mb-3">
                        <div className="d-flex align-items-center p-3 rounded shadow-sm bg-white gap-3 h-100">
                            <div
                                className="d-flex align-items-center justify-content-center rounded"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: item.bg,
                                    color: item.iconColor,
                                }}
                            >
                                {item.icon}
                            </div>
                            <div className="text-start">
                                <h5 className="mb-1">{item.count}</h5>
                                <p className="mb-0 fw-semibold">{item.label}</p>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Page Views & Notifications */}
            <Row className="mb-4">
                <Col md={6}>
                    <div className="shadow-sm border-0 mb-3">
                        <div>
                            <h6>Page Views</h6>
                            {/* Placeholder for chart */}
                            <Line data={chartData} options={chartOptions} height={200} />
                            <Row>
                                <Col xs={6}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" className="w-100 text-start">
                                            Jobs
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Jobs</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col xs={6}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" className="w-100 text-start">
                                            Number Days
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item>Number Days</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>

                <Col md={6}>
                    <div className="bg-white p-3 rounded shadow-sm">
                        <h6 className="fw-bold mb-3">Notifications</h6>
                        {notifications.map((note, idx) => (
                            <div key={idx} className="d-flex align-items-start gap-3 mb-3">
                                {/* Circular icon */}
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        backgroundColor: 'rgba(76, 175, 80, 0.15)',
                                    }}
                                >
                                    <FiCheckCircle size={18} color="#4caf50" />
                                </div>

                                {/* Text content */}
                                <div>
                                    <div style={{ fontSize: '0.95rem' }}>
                                        {note.split('Social media Marketing')[0]}
                                        <strong> Social media Marketing </strong>
                                        {note.split('Social media Marketing')[1].split('candidate')[0]}
                                        <strong> candidate.</strong>
                                    </div>
                                    <small className="text-muted">1 Day ago</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            {/* Recent Applicants */}
            {/* <Row className="mb-4"> </Row> */}
            <div className="bg-white p-4 rounded shadow-sm">
                <h5 className="fw-bold mb-4">Recent Applicants</h5>

                {/* Header Row */}
                <Row className="text-muted fw-semibold mb-3 d-none d-md-flex">
                    <Col xs={12} md={4}>Candidates</Col>
                    <Col xs={12} md={2}>Status</Col>
                    <Col xs={12} md={2}>Applied Date</Col>
                    <Col xs={12} md={4}>Action</Col>
                </Row>

                {/* Applicant Rows */}
                {applicants.map((applicant, idx) => (
                    <Row key={idx} className="align-items-center mb-4 gy-3 flex-column flex-md-row">
                        {/* Candidate Info */}
                        <Col xs={12} md={4}>
                            <div className="d-flex align-items-center gap-3">
                                <div className="avatar-placeholder" />
                                <div>
                                    <div className="fw-bold">{applicant.name}</div>
                                    <div className="text-primary small">{applicant.role}</div>
                                    <div className="text-muted small">
                                        <i className="bi bi-geo-alt-fill me-1"></i>
                                        {applicant.location}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        {/* Status */}
                        <Col xs={12} md={2}>
                            <Badge bg="primary" className="px-3 py-2 rounded-pill">
                                {applicant.status}
                            </Badge>
                        </Col>

                        {/* Date */}
                        <Col xs={12} md={2} className="text-muted">
                            {applicant.date}
                        </Col>

                        {/* Action */}
                        <Col xs={12} md={4}>
                            <div className="d-flex gap-2 flex-nowrap justify-content-center">
                                <Button size="sm" variant="light" className="action-btn min-width-0">
                                    <FaPlus />
                                </Button>
                                <Button size="sm" variant="light" className="action-btn">
                                    <FaUndo />
                                </Button>
                                <Button size="sm" variant="light" className="action-btn">
                                    <FaDownload />
                                </Button>
                                <Button size="sm" variant="light" className="action-btn">
                                    <FaTimes />
                                </Button>
                            </div>
                        </Col>
                    </Row>
                ))}
            </div>
        </Container>
    );
};

export default ApplicationStatisticsDashboard;