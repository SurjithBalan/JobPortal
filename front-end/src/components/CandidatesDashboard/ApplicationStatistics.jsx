import React from 'react';
import { Container, Row, Dropdown, Card, Col, Badge } from 'react-bootstrap';
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
import './ApplicationStatistics.css';
import softwar from '../../assets/logo/softwar.jpg';
import productDesigner from '../../assets/logo/productDesigner.jpg';
import coordinator from '../../assets/logo/coordinator.jpg';
import productManager from '../../assets/logo/productManager.png'

const ApplicationStatistics = () => {
    const summary = [
        {
            count: 22,
            label: 'Posted Jobs',
            variant: 'primary',
            icon: <FiBriefcase size={24} />,
            bg: 'rgba(63, 81, 181, 0.15)', // Light purple tint
            iconColor: '#3f51b5',
        },
        {
            count: 684,
            label: 'Applications',
            variant: 'danger',
            icon: <CgFileDocument size={24} />,
            bg: 'rgba(244, 67, 54, 0.15)', // Light red tint
            iconColor: '#f44336',
        },
        {
            count: 38,
            label: 'Review',
            variant: 'warnng',
            icon: <RiWechatLine size={24} />,
            bg: 'rgba(76, 175, 80, 0.15)', // Light green tint
            iconColor: '#4caf50',
        },
        {
            count: 22,
            label: 'Shortlisted',
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

    const notifications = [
        {
            name: 'Henry Wilson',
            job: 'Product Designer',
            jobColor: '#8e24aa',         // purple
            iconBg: 'rgba(142, 36, 170, 0.15)',
            iconColor: '#8e24aa',
        },
        {
            name: 'Raul Costa',
            job: 'Product Manager, Risk',
            jobColor: '#2196f3',         // blue
            iconBg: 'rgba(33, 150, 243, 0.15)',
            iconColor: '#2196f3',
        },
        {
            name: 'Henry Wilson',
            job: 'Product Designer',
            jobColor: '#8e24aa',
            iconBg: 'rgba(142, 36, 170, 0.15)',
            iconColor: '#8e24aa',
        },
        {
            name: 'Raul Costa',
            job: 'Product Manager, Risk',
            jobColor: '#2196f3',
            iconBg: 'rgba(33, 150, 243, 0.15)',
            iconColor: '#2196f3',
        },
        {
            name: 'Henry Wilson',
            job: 'Product Designer',
            jobColor: '#8e24aa',
            iconBg: 'rgba(142, 36, 170, 0.15)',
            iconColor: '#8e24aa',
        },
        {
            name: 'Raul Costa',
            job: 'Product Manager, Risk',
            jobColor: '#2196f3',
            iconBg: 'rgba(33, 150, 243, 0.15)',
            iconColor: '#2196f3',
        },
    ];

    const jobs = [
        {
            title: 'Software Engineer (Android), Libraries',
            company: 'Segment',
            location: 'Chennai, TN',
            time: '11 hours ago',
            salary: '₹ 35k - 45k',
            logo: softwar, // Replace with real logo
            tags: ['Full Time', 'Private', 'Urgent'],
        },
        {
            title: 'Recruiting Coordinator',
            company: 'Catalyst',
            location: 'Chennai, TN',
            time: '11 hours ago',
            salary: '₹ 35k - 45k',
            logo: coordinator,
            tags: ['Freelancer', 'Private', 'Urgent'],
        },
        {
            title: 'Product Manager, Studio',
            company: 'Invision',
            location: 'Chennai, TN',
            time: '11 hours ago',
            salary: '₹ 35k - 45k',
            logo: productManager,
            tags: ['Full Time', 'Private', 'Urgent'],
        },
        {
            title: 'Senior Product Designer',
            company: 'Catalyst',
            location: 'Chennai, TN',
            time: '11 hours ago',
            salary: '₹ 35k - 45k',
            logo: productDesigner,
            tags: ['Freelancer', 'Private', 'Urgent'],
        },
    ];

    const tagColors = {
        "full time": "#a5cff5",
        "private": "#dbefdc",
        "urgent": "#f9f7d7"
    };


    return (
        <Container fluid className="p-4">
            <h4 className="mb-4 text-start text424242">Zack Nikola</h4>
            {/* Summary divs */}
            <Row className="mb-4 justify-content-left">
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
                                <h5 className="mb-1 fw-bold" style={{ color: item.iconColor }}>
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
                            <h5 className="mb-0 fw-semibold text424242">Your Profile Views</h5>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="light"
                                    className="text-end border rounded px-3 py-1 text-start"
                                    style={{ fontSize: '0.9rem', backgroundColor: '#fff9f9', minWidth: '0' }}
                                >
                                    Last 6 Months
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Last 6 Months</Dropdown.Item>
                                    <Dropdown.Item>Last 3 Months</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div style={{ height: '300px' }}>
                            <Line data={chartData} options={chartOptions} />
                        </div>
                    </div>
                </Col>

                <Col md={5}>
                    <div className="bg-white p-3 rounded shadow-sm" style={{ height: '400px' }}>
                        <h6 className="fw-bold mb-3 text-start text424242">Notifications</h6>

                        {notifications.map((note, idx) => (
                            <div key={idx} className="d-flex align-items-start gap-3 mb-3 text-truncate" style={{ maxWidth: '100%' }}>
                                {/* Icon */}
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-circle"
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        backgroundColor: note.iconBg,
                                        flexShrink: 0, // prevent shrinking in flex layouts
                                    }}
                                >
                                    <TbBriefcase size={18} color={note.iconColor} />
                                </div>

                                {/* Text */}
                                <div style={{ fontSize: '0.95rem' }}>
                                    <span className="text424242 fw-semibold">{note.name}</span>{' '}
                                    <span className='fw-normal'>applied for a job{' '}</span>
                                    <span  style={{ color: note.jobColor, fontWeight: 500 }}>{note.job}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

            {/* Recent Applicants */}
            {/* <Row className="mb-4"> </Row> */}
            <div className="bg-white p-3 rounded shadow-sm py-0">
                <h6 className="fw-bold mb-3 text-start text424242">Job Applied Recently</h6>
                <Row xs={1} md={2} className="g-3">
                    {jobs.map((job, idx) => (
                        <Col key={idx} className="d-flex">
                            <div
                                className="border rounded-4 shadow-sm p-3 flex-grow-1 d-flex flex-column"
                                style={{ minHeight: '150px' /* adjust as needed */ }}
                            >
                                <div className="d-flex">
                                    {/* Logo */}
                                    <div className="me-3">
                                        <img
                                            src={job.logo}
                                            alt={job.title}
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '16px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>

                                    {/* Main content */}
                                    <div className="flex-grow-1 d-flex flex-column">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="mb-1 fw-bold text424242">{job.title}</h6>
                                            <BsBookmark size = {18} className="text-muted mt-1" />
                                        </div>
                                        <div className="text-muted small d-flex flex-wrap align-items-center gap-3 mb-2">
                                            <span className="d-flex align-items-center gap-1 text424242">
                                                <CgLoadbarDoc size = {18} /> {job.company}
                                            </span>
                                           
                                            <span className="d-flex align-items-center gap-1 text424242">
                                                <FiMapPin size = {18}/> {job.location}
                                            </span>
                                            
                                            <span className="d-flex align-items-center gap-1 text424242">
                                                <BsClock size = {18} /> {job.time}
                                            </span>
                                        </div>

                                        <div className="fw-semibold text-dark mb-3 d-flex align-items-center gap-1 text424242">
                                            <FaRupeeSign size = {18} /> {job.salary}
                                        </div>

                                        {/* Tags */}
                                        <div className="d-flex flex-wrap gap-2 mt-auto">
                                            {job.tags.map((tag, i) => {
                                                const tagKey = tag.toLowerCase(); // normalize case
                                                return (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 rounded-pill text-capitalize fw-semibold text424242"
                                                        style={{
                                                            backgroundColor: tagColors[tagKey] || "#e9ecef",                                                            
                                                        }}
                                                    >
                                                        {tag}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
};

export default ApplicationStatistics;