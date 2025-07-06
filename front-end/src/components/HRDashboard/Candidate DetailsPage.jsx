import { React, useState } from 'react';
import { Container, Alert, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';
import { GiSandsOfTime } from "react-icons/gi";
import { PiBriefcaseLight } from "react-icons/pi";
import { MdDashboard } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import CandidateJoined from '../../assets/logo/MasterDashboardLogos/CandidateJoined.png';
import CompanyRegistered from '../../assets/logo/MasterDashboardLogos/CompanyRegistered.png';
import JobLive from '../../assets/logo/MasterDashboardLogos/JobLive.png';
import PendingJob from '../../assets/logo/MasterDashboardLogos/PendingJob.png';
import RecruiterJoined from '../../assets/logo/MasterDashboardLogos/RecruiterJoined.png';
import RecruitersActivity from '../../assets/logo/MasterDashboardLogos/RecruitersActivity.png';
import PendingOnindividual from '../../assets/logo/MasterDashboardLogos/PendingOnindividual.png';
import individual from '../../assets/logo/MasterDashboardLogos/individual.png';
import { PiAngularLogoLight } from "react-icons/pi";
import { PiAddressBookTabsLight } from "react-icons/pi";
import { VscBroadcast } from "react-icons/vsc";
import { PiMapPinArea } from "react-icons/pi";
import { LiaAddressCard } from "react-icons/lia";
import { PiListHeartFill } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { BsFileEarmarkText, BsCheckCircle } from 'react-icons/bs'; // For "No. of job applied" and "Joined"
import { AiOutlineStar } from 'react-icons/ai';     // For "Featured Candidates"
import Wipro from '../../assets/logo/wipro2.png'
import candidateImage from '../../assets/image/candidateImage.jpg'
import interviewInvite1 from '../../assets/image/interviewInvite1.jpg'
import InterviewInvite2 from '../../assets/image/InterviewInvite2.jpg'
import './CaniddateDetailsPage.css'
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line, CartesianGrid
} from "recharts";

const statsData = [
    {
        icon: <IoPersonOutline size={24} color="#ffd54f" />,
        title: 'No. of Candidates',
        count: 22,
        bgColor: '#fffbed',
    },
    {
        icon: <BsFileEarmarkText size={24} color="#1e88e5" />,
        title: 'No. of job applied',
        count: 10,
        bgColor: '#dce6ef',
    },
    {
        icon: <AiOutlineStar size={24} color="#ed8e2f" />,
        title: 'Featured Candidates',
        count: 5,
        bgColor: '#fff5eb',
    },
    {
        icon: <BsCheckCircle size={24} color="#10a441" />,
        title: 'No. of Joined Candidates',
        count: 10,
        bgColor: '#dbe9df',
    },
];
const data = [
    { name: 'Jan', Applied: 150, Rejected: 150, Joined: 200 },
    { name: 'Feb', Applied: 150, Rejected: 200, Joined: 250 },
    { name: 'Mar', Applied: 150, Rejected: 200, Joined: 300 },
    { name: 'Apr', Applied: 150, Rejected: 200, Joined: 250 },
    { name: 'May', Applied: 150, Rejected: 330, Joined: 300 },
    { name: 'Jun', Applied: 100, Rejected: 200, Joined: 300 },
    { name: 'Jul', Applied: 150, Rejected: 200, Joined: 250 }
];

const jobData = [
    {
        id: 1,
        name: 'Jon Hendry',
        role: 'Senior Web Designer Team Lead',
        salary: '2 LPA',
        experience: '2+ years',
        location: 'K.K Nagar, Chennai',
        duration: '15 days',
        tags: ['UI/UX Designing', 'User Research', 'Figma', 'User Interface Design'],
        image: interviewInvite1,
    },
    {
        id: 2,
        name: 'Liam',
        role: 'UI/UX Designer',
        salary: '2 LPA',
        experience: '2+ years',
        location: 'K.K Nagar, Chennai',
        duration: '15 days',
        tags: ['UI/UX Designing', 'User Research', 'Figma', 'User Interface Design'],
        image: InterviewInvite2
    },
    {
        id: 3,
        name: 'Matteo',
        role: 'Mern Full Stack',
        salary: '2 LPA',
        experience: '2+ years',
        location: 'K.K Nagar, Chennai',
        duration: '15 days',
        tags: ['UI/UX Designing', 'User Research', 'Figma', 'User Interface Design'],
        image: candidateImage
    },
];
const CandidateDetails = () => {

    return (
        <Container fluid className="p-4">
            <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <VscBroadcast size={22} className="me-2" style={{ color: '#1e88e5' }} />
                Candidates Details
            </h5>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 justify-content-center mb-5">
                {statsData.map((item, idx) => (
                    <Col key={idx} className="d-flex justify-content-center">
                        <div
                            className="text-center shadow-sm"
                            style={{
                                borderRadius: '12px',
                                padding: '24px 20px',
                                width: '220px',
                                height: '180px',
                                backgroundColor: '#fff',
                            }}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center mx-auto mb-3"
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '10px',
                                    backgroundColor: item.bgColor, // Add bgColor in statsData for each item
                                }}
                            >
                                {item.icon}
                            </div>

                            <div
                                style={{
                                    fontSize: '14px',
                                    fontWeight: '500',
                                    color: '#424242',
                                    lineHeight: '1.4',
                                }}
                            >
                                {item.title}
                            </div>

                            <h5 className="fw-bold mt-1 fontclr" >
                                {item.count.toString().padStart(2, '0')}
                            </h5>
                        </div>
                    </Col>
                ))}
            </Row>

            <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <SiSimpleanalytics size={22} className="me-2" style={{ color: '#1e88e5' }} />
                Analytics & Growth
            </h5>
            <Row>
                {/* Bar Chart Column */}
                <div
                    className="shadow-sm p-3"
                    style={{
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        width: '100%',
                        maxWidth: '600px',
                    }}
                >
                    <div className="d-flex justify-content-between align-items-start mb-2 fontclr">
                        <h6 style={{ fontWeight: '600', fontSize: '16px', marginBottom: 0 }}>Candidates</h6>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={data} barSize={30}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
                            <XAxis dataKey="name" tick={{ fontSize: 16 }} axisLine={false} tickLine={false} />
                            <YAxis
                                domain={[0, 1000]}
                                ticks={[200, 400, 600, 800, 1000]}
                                tick={{ fontSize: 16 }}
                                axisLine={false}
                                tickLine={false}
                            />
                            <Tooltip />
                            <Bar dataKey="Applied" stackId="a" fill="#2a4ada" />        {/* Bottom bar (dark blue) */}
                            <Bar dataKey="Rejected" stackId="a" fill="#4b6cf2" />        {/* Middle bar (light blue) */}
                            <Bar dataKey="Joined" stackId="a" fill="#8799f9" radius={[10, 10, 0, 0]} /> {/* Top bar (gray with rounded top) */}
                        </BarChart>
                    </ResponsiveContainer>

                </div>

            </Row>

            <Row>
                <h5 className="mb-4 fw-semibold fontclr text-start mt-3">
                    Recently Applied Candidates
                </h5>
                <div className="container py-4">
                    {jobData.map((job) => (
                        <div key={job.id} className="mb-4 shadow-sm p-3 rounded-3">
                            <Row className="align-items-center">
                                <Col xs={12} md={2} className="text-center mb-3 mb-md-0">
                                    <div className="d-flex flex-column align-items-center me-2">
                                        <img
                                            src={job.image}
                                            alt='profile'
                                            className="rounded-circle"
                                            style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                        />
                                    </div>
                                </Col>
                                <Col xs={12} md={8}>
                                    {/* Top Badges */}
                                    <div className="mb-2 text-start d-flex flex-wrap gap-2">
                                        {["Indian MNC", "Banking & Financial Services", "Full Time", "WFO"].map((label, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 rounded-pill"
                                                style={{
                                                    border: '1px solid #1e88e5',
                                                    color: '#424242',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 500,
                                                    backgroundColor: '#f8f9fa', // optional, for light background like your image
                                                }}
                                            >
                                                {label}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Title and Name */}
                                    <h5 className="mb-1 fs-4 text-start  fontclr">{job.role}</h5>
                                    <h6 className="mb-2 fs-5 text-start" style={{ color: '#1e88e5' }}>{job.name}</h6>

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
                                        <div className="d-flex align-items-center">
                                            <GiSandsOfTime size={20} className="me-1" style={{ color: '#5d4037' }} /> {job.duration}
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="d-flex flex-wrap align-items-center gap-2">
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
                                </Col>
                                <Col xs={12} md={2} className="text-md-end text-center">
                                    <div className="form-check form-switch d-inline-flex align-items-center">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            role="switch"
                                            id={`toggle-${job.id}`}
                                            style={{ width: '50px', height: '25px', backgroundColor: '#28a745' }}
                                            defaultChecked={job.isActive}
                                            onChange={(e) => {
                                                const isChecked = e.target.checked;
                                                console.log(`Job ${job.id} toggled to:`, isChecked);
                                            }}
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}
                </div>

            </Row>
        </Container>
    );
};

export default CandidateDetails;
