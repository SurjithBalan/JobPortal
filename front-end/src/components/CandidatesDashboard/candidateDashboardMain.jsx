import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Button, Nav, Breadcrumb, Image, Col, Row, Form, InputGroup } from 'react-bootstrap';
import './candidateDashboard.css'
// import PostJobForm from './postJobForm'
// import ApplicationStatisticsDashboard from './ApplicationStatistics'
import skylarklogo from '../../assets/logo/Skylark3.jpeg'
import profile from '../../assets/image/candidateImage.jpg'
import { FaStar } from "react-icons/fa";
import { PiSignpostBold } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { TfiLocationArrow } from "react-icons/tfi";
import {
    FiGrid, FiFileText, FiHeart, FiBell, FiMessageSquare, FiLogOut, FiMenu, FiEdit, FiTarget, FiCheckCircle, FiPlus, FiMapPin, FiBriefcase, FiPhone
} from 'react-icons/fi';
import { GrDiamond } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { PiApplePodcastsLogoLight } from "react-icons/pi";
import { PiCalendarDotsLight } from "react-icons/pi";
import { RiWechatLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { RiLockUnlockLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { } from 'react-icons/fi';
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaChevronDown } from 'react-icons/fa'
import { PiSubtitlesLight } from "react-icons/pi";
import { PiBuildingsBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaList, FaIndustry, FaUserTie, FaBuilding, FaBriefcase, FaGraduationCap, FaChartLine, FaRupeeSign, FaVenusMars, FaLaptopHouse, FaUsers, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ApplicationStatistics from './ApplicationStatistics';
import CandidateProfile from './candidateProfilePage'

const BreadcrumbNav = () => {
    const location = useLocation();

    const pathnames = location.pathname
        .replace('/Candidate Dashboard', '')
        .split('/')
        .filter((x) => x);

    const formatLabel = (str) =>
        str.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

    const renderBreadcrumbItems = () => {
        const items = [];

        // Static: Home
        items.push(
            <Link key="home" to="/" className="breadcrumb-link">
                Home
            </Link>
        );

        // Static: HR Company
        items.push(
            <Link key="hr" to="/Candidate Dashboard" className="breadcrumb-link">
                Candidate Dashboard
            </Link>
        );

        // Dynamic
        pathnames.forEach((value, index) => {
            const to = `/Candidate Dashboard/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            items.push(
                isLast ? (
                    <span key={to} className="breadcrumb-current">
                        {formatLabel(value)}
                    </span>
                ) : (
                    <Link key={to} to={to} className="breadcrumb-link">
                        {formatLabel(value)}
                    </Link>
                )
            );
        });

        // Insert bullet separators
        return items.flatMap((item, idx) => {
            if (idx === 0) return [item];
            return [
                <span key={`sep-${idx}`} className="breadcrumb-separator">•</span>,
                item,
            ];
        });
    };

    return (
        <div className="breadcrumb-wrapper mb-2 mt-0">
            <Container fluid className="d-flex align-items-center">
                <nav className="custom-breadcrumb">{renderBreadcrumbItems()}</nav>
            </Container>
        </div>
    );
};


const NavbarComponent = ({ setShowComponent }) => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#1e88e5', height: 'auto' }}>
                {/* Full width container */}
                <Container fluid className="px-3 py-2 d-flex justify-content-between align-items-center flex-wrap">
                    {/* Left: Logo */}
                    <Navbar.Brand href="#">
                        <img
                            src={skylarklogo} // Replace with actual logo
                            alt="Skylark HR"
                            className="rounded"
                            height="50"
                        />
                    </Navbar.Brand>
                    {/* Menu Items */}
                    <Navbar.Collapse id="navbar-content" className="justify-content-center">
                        <Nav className="d-flex align-items-center gap-4">
                            <Nav.Link href="#" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#" className="text-white">Jobs</Nav.Link>
                            <Nav.Link href="#" className="text-white">Featured <FaStar className="text-warning" /></Nav.Link>
                            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* Navbar Toggle for Mobile */}
                    <Navbar.Toggle aria-controls="navbar-content" className="border-0 text-white" />

                    {/* Right: Post Job, Bell, Profile */}
                    <Navbar.Collapse id="navbar-content" className="justify-content-end">
                        <Nav className="d-flex align-items-center gap-5">
                            {/* <Button
                            variant="light"
                            className="fw-semibold text-primary bg-white px-3 py-2"
                            onClick={() => setShowComponent(prev => !prev)}
                            style={{ minWidth: 'auto' }}
                        >
                            Post Job
                        </Button> */}

                            {/* Notification Bell - Hidden on small screens */}
                            <div className="d-none d-md-flex">
                                <FiBell size={35} color="#fff" style={{ cursor: 'pointer' }} />
                            </div>
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={profile}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <span className="ms-2 d-none d-lg-inline text-white">Profile Name</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

const RightSide = () => {
    return (
        <ApplicationStatistics />
    );

}

function CandidateDashboardMain() {
    const [activeItem, setActiveItem] = useState('Dashboard');
    return (
        <>
            <NavbarComponent />
            <BreadcrumbNav />
            <Container fluid className=" px-3 m-3" style={{ overflowX: 'hidden' }}>
                <Row>
                    {/* Left Sidebar - Filters */}
                    <Col
                        xs={12}
                        md={2}
                        lg={2}
                        className="rounded p-3 mb-3 mb-md-0 shadow-sm"
                        style={{ overflowY: 'auto', backgroundColor: '#87C6F4', minHeight: '100vh' }}
                    >
                        <div className=''> 
                            <ul className="list-unstyled m-0 g-5">
                                <li
                                    className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item  ${activeItem === 'Dashboard' ? 'active-item' : ''
                                        }`}
                                    onClick={() => setActiveItem('Dashboard')}
                                >
                                    <FiMenu size={20} className="me-2" />
                                    <span>Dashboard</span>
                                </li>

                                {/* <li className="fw-normal d-flex align-items-center active-item rounded py-2 px-3 mb-2">
                                    <FiMenu size={20} className="me-2" />
                                    <span>Dashboard</span>
                                </li> */}
                                <li
                                    className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Premium Packages' ? 'active-item' : ''
                                        }`}
                                    onClick={() => setActiveItem('Premium Packages')}
                                >
                                    <GrDiamond size={20} className="me-2" />
                                    <span className="text-nowrap">Premium Packages</span>
                                </li>
                                {/* <li className="fontColor424242 fw-normal sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <GrDiamond size={20} className="me-2" />
                                    <span className='text-nowrap'>Premium Packages </span>
                                </li> */}
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Candidate Profile' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Candidate Profile')}>
                                    <CgProfile size={20} className="me-2" />
                                    <span className='text-nowrap'>Candidate Profile</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Applied Jobs' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Applied Jobs')}>
                                    <PiApplePodcastsLogoLight size={20} className="me-2" />
                                    <span>Applied Jobs</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Interview Schedule' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Interview Schedule')}>
                                    <PiCalendarDotsLight size={20} className="me-2" />
                                    <span className='text-nowrap'>Interview Schedule</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Message Inbox' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Message Inbox')}>
                                    <RiWechatLine size={20} className="me-2" />
                                    <span>Message Inbox</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Notification' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Notification')}>
                                    <IoNotificationsOutline size={20} className="me-2" />
                                    <span>Notification</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Resume Builder' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Resume Builder')}>
                                    <CgFileDocument size={20} className="me-2" />
                                    <span>Resume Builder</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Privacy Control' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Privacy Control')}>
                                    <RiLockUnlockLine size={20} className="me-2" />
                                    <span>Privacy Control</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Settings' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Settings')}>
                                    <LuSettings size={20} className="me-2" />
                                    <span>Settings</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-3 sidebar-item ${activeItem === 'Logout' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Logout')}>
                                    <FiLogOut size={20} className="me-2" />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/* Right Column - Job Component */}
                    <Col xs={12} md={10} lg={10} className="d-flex justify-content-center text-center mt-0 ml-0">
                        {activeItem === 'Candidate Profile' ? (
                            <CandidateProfile />
                        ) : (
                            <RightSide />
                        )}
                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default CandidateDashboardMain



