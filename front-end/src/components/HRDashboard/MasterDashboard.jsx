import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdDashboard } from "react-icons/md";
import { SiSimpleanalytics } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
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
import { PiMapPinArea } from "react-icons/pi";
import { LiaAddressCard } from "react-icons/lia";
import { PiListHeartFill } from "react-icons/pi";
import Wipro from '../../assets/logo/wipro2.png'
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
    LineChart, Line, CartesianGrid
} from "recharts";

const statsData = [
    {
        icon: <img src={individual} width={50} alt="Company Registered" />,
        title: "Individual Recruiter",
        count: 22
    },
    {
        icon: <img src={CompanyRegistered} width={50} alt="Company Registered" />,
        title: "Company Registered",
        count: 22
    },
    {
        icon: <img src={JobLive} width={50} alt="Jobs Live" />,
        title: "Jobs Live",
        count: 22
    },
    {
        icon: <img src={PendingJob} width={50} alt="Pending Job Approvals" />,
        title: "Pending Job Approvals",
        count: 22
    },
    {
        icon: <img src={PendingOnindividual} width={50} alt="Pending on Individual Recruiters" />,
        title: "Pending on Individual Recruiters",
        count: 22
    },
    {
        icon: <img src={RecruiterJoined} width={50} alt="Recruiters Joined" />,
        title: "Company Recruiters Joined",
        count: 22
    },
    {
        icon: <img src={CandidateJoined} width={50} alt="Recruiters Joined" />,
        title: "Candidates Joined",
        count: 200
    },

    {
        icon: <img src={RecruitersActivity} width={50} alt="Recruiters actively posting Job" />,
        title: "Job Posted Today",
        count: 10
    }

];
const appliedData = [
    { name: "Jan", Applied: 110, Rejected: 145, Shortlisted: 125, Joined: 145 },
    { name: "Feb", Applied: 110, Rejected: 145, Shortlisted: 125, Joined: 145 },
    { name: "Mar", Applied: 110, Rejected: 145, Shortlisted: 125, Joined: 145 },
    { name: "Apr", Applied: 110, Rejected: 145, Shortlisted: 125, Joined: 145 },
    { name: "May", Applied: 110, Rejected: 145, Shortlisted: 125, Joined: 145 },
    { name: "Jun", Applied: 110, Rejected: 145, Shortlisted: 125, Joined: 145 },
    { name: "Jul", Applied: 110, Rejected: 145, Shortlisted: 125, Joined: 145 },
];

const registeredData = [
    { name: "Jan", Registered: 10 },
    { name: "Feb", Registered: 30 },
    { name: "Mar", Registered: 60 },
    { name: "Apr", Registered: 45 },
    { name: "May", Registered: 75 },
    { name: "Jun", Registered: 90 },
    { name: "Jul", Registered: 150 },
];
const companies = [
    {
        name: "Wipro",
        type: "HR Company",
        recruiter: "Priya sharma, Sr.Recruiter",
        location: "Chennai, Bangalore",
        email: "Priya_sharma@skylark.com",
        employees: "250 Employees Active",
        logo: Wipro
    },
    {
        name: "Wipro",
        type: "Indiv Recruiters",
        recruiter: "Priya sharma, Sr.Recruiter",
        location: "Chennai, Bangalore",
        email: "Priya_sharma@skylark.com",
        employees: "250 Employees Active",
        logo: Wipro
    },
    {
        name: "Wipro",
        type: "Indiv HR Company",
        recruiter: "Priya sharma, Sr.Recruiter",
        location: "Chennai, Bangalore",
        email: "Priya_sharma@skylark.com",
        employees: "250 Employees Active",
        logo: Wipro
    },
];
const renderCustomLegend = (props) => {
    const { payload } = props;
    return (
        <ul className="list-unstyled d-flex flex-wrap ps-0 mb-0 ms-4" style={{ gap: '20px' }}>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} className="d-flex align-items-center me-4">
                    <span
                        style={{
                            display: 'inline-block',
                            borderRadius: '50%',
                            width: 10,
                            height: 10,
                            backgroundColor: entry.color,
                            marginRight: 8,
                        }}
                    />
                    <span style={{ fontSize: '1rem' }}>{entry.value}</span>
                </li>
            ))}
        </ul>
    );
};

const MasterDashboard = () => {
    return (
        <Container fluid className="p-4">
            <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <MdDashboard size={22} className="me-2" style={{ color: '#1e88e5' }} />
                Master Dashboard
            </h5>
            <Row xs={1} sm={2} md={3} lg={5} className="g-4 justify-content-center mb-5">
                {statsData.map((item, idx) => (
                    <Col key={idx} className="d-flex justify-content-center">
                        <div
                            className="d-flex flex-column align-items-center justify-content-center text-center shadow-sm"
                            style={{ borderRadius: '12px', padding: '20px', width: '100%', backgroundColor: '#fff' }}
                        >
                            <div className="mb-3">
                                {item.icon}
                            </div>
                            <h5 className="fw-semibold mt-1 fontclr">{item.count}</h5>
                            <div style={{ fontSize: '15px', color: '#424242', fontWeight: '500' }} className='fontclr'>
                                {item.title}
                            </div>

                        </div>
                    </Col>
                ))}
            </Row>

            <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <SiSimpleanalytics size={22} className="me-2" style={{ color: '#1e88e5' }} />
                HR Companies Joined
            </h5>
            <Row>
                {/* Bar Chart Column */}
                <Col xs={12} md={6} className="mb-4">
                    <h5 className="mb-3 text-start fontclr"><CgProfile size={22} className="me-2" style={{ color: '#1e88e5' }} />Candidates Applied</h5>
                    <div className="p-3 shadow-sm">
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={appliedData}>
                                <XAxis dataKey="name" />
                                <YAxis ticks={[0, 100, 150, 200]} />
                                <Tooltip />
                                {/* <Legend
                                    iconType="circle"
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="left"
                                    wrapperStyle={{
                                        marginLeft: 20,
                                    }}
                                /> */}
                                <Legend
                                    content={renderCustomLegend}
                                    layout="horizontal"
                                    verticalAlign="bottom"
                                    align="left"
                                />
                                <Bar
                                    dataKey="Applied"
                                    fill="#26547c"
                                    radius={[10, 10, 0, 0]}
                                    // stroke="#1b3c59"
                                    strokeWidth={1.5}
                                />
                                <Bar
                                    dataKey="Rejected"
                                    fill="#ef476f"
                                    radius={[10, 10, 0, 0]}
                                    // stroke="#c8375c"
                                    strokeWidth={1.5}
                                />
                                <Bar
                                    dataKey="Shortlisted"
                                    fill="#ffd166"
                                    radius={[10, 10, 0, 0]}
                                    // stroke="#e6b800"
                                    strokeWidth={1.5}
                                />
                                <Bar
                                    dataKey="Joined"
                                    fill="#06d6a0"
                                    radius={[10, 10, 0, 0]}
                                    // stroke="#04b487"
                                    strokeWidth={1.5}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Col>

                {/* Line Chart Column */}
                <Col xs={12} md={6} className="mb-4">
                    <h5 className="mb-3 text-start fontclr"><CgProfile size={22} className="me-2" style={{ color: '#1e88e5' }} />Candidates Registered</h5>
                    <div className="p-3 shadow-sm">
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={registeredData}>
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line
                                    type="linear"
                                    dataKey="Registered"
                                    stroke="#4505ab"
                                    strokeWidth={6}
                                    dot={false}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </Col>
            </Row>

            <Row>
                <h5 className="mb-4 fw-semibold fontclr text-start">
                    <PiListHeartFill size={30} className="me-2" style={{ color: '#1e88e5' }} />
                    List of
                </h5>
                {companies.map((company, idx) => (
                    <Col key={idx} xs={12} md={6} lg={4} className="d-flex justify-content-center mb-4">
                        <div
                            className="shadow-sm bg-white"
                            style={{
                                width: '100%',              // full width inside column
                                maxWidth: '300px',          // fixed card width like the image
                                borderRadius: '20px',       // smooth corners
                                padding: '20px',
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <img
                                    src={company.logo}
                                    alt="logo"
                                    width={50}
                                    height={50}
                                    style={{
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                    }}
                                />
                                <h6 className="mb-0 fw-semibold ms-2 flex-grow-1 fontclr">{company.name}</h6>
                                <span
                                    className="badge text-white fw-semibold"
                                    style={{
                                        fontSize: "0.75rem",
                                        padding: "6px 12px",
                                        backgroundColor: '#34c759',
                                        borderRadius: '8px',
                                    }}
                                >
                                    {company.type}
                                </span>
                            </div>

                            <div className="d-flex align-items-center mb-3 fontclr">
                                <LiaAddressCard size={20} className="me-2" style={{ color: '#cf3430' }} />
                                <span>{company.recruiter}</span>
                            </div>

                            <div className="d-flex align-items-center mb-3 fontclr">
                                <PiMapPinArea size={20} className="me-2" style={{ color: '#1e88e5' }} />
                                <span>{company.location}</span>
                            </div>

                            <div className="d-flex align-items-center mb-3 fontclr">
                                <PiAddressBookTabsLight size={20} className="me-2" style={{ color: '#10a441' }} />
                                <span>{company.email}</span>
                            </div>

                            <div className="d-flex align-items-center fontclr">
                                <PiAngularLogoLight size={20} className="me-3" style={{ color: '#ca3e9c' }} />
                                <span>{company.employees}</span>
                            </div>
                        </div>
                    </Col>
                ))}

            </Row>
        </Container>
    );
};

export default MasterDashboard;
