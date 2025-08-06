import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import { GrDiamond } from "react-icons/gr";
import { LuUserRound } from "react-icons/lu";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LiaHandHoldingSolid } from "react-icons/lia";
import { PiSuitcaseSimple } from "react-icons/pi";
import { PiCalendarDotsLight } from "react-icons/pi";
import { VscBroadcast } from "react-icons/vsc";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { RiLockUnlockLine } from "react-icons/ri";
import { LuSettings } from "react-icons/lu";
import { } from 'react-icons/fi';
import { PiUserCircleGear } from "react-icons/pi";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaChevronDown } from 'react-icons/fa'
import { PiSubtitlesLight } from "react-icons/pi";
import { PiBuildingsBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import {
    FiGrid, FiFileText, FiHeart, FiBell, FiMessageSquare, FiLogOut, FiMenu, FiEdit, FiTarget, FiCheckCircle, FiPlus, FiMapPin, FiBriefcase, FiPhone
} from 'react-icons/fi';
import { LuLayoutDashboard } from "react-icons/lu";
import { PiChartLineUp } from "react-icons/pi";
import CandidateDetails from './Candidate DetailsPage';
import { CgProfile } from "react-icons/cg";
import HRMasterDashboard from './MasterDashboard';
import JobsPage from './JobsPage';
import RecruitersDetails from './RecruitersDetails';
import AdminAccess from './AdminAccess';
import MasterData from './MasterData'
import ReviewPage from './ReviewPage.jsx'
import Subscription from './SubscriptionPage.jsx'
import StatisticsPage from './StatisticsPage.jsx'
import NavbarMenue from './navbar.jsx'
import BreadcrumbsNav from './BreadcrumbsNav.jsx'; // adjust path based on structure

function HRDashboardMain() {
    const [activeItem, setActiveItem] = useState('Dashboard');
    return (
        <>
            {/* <NavebarComponent /> */}
            <Container fluid className=" px-3 m-3" style={{ overflowX: 'hidden' }}>                
                <Row>
                    {/* Navbar */}
                    <NavbarMenue/>
                    {/* breadcrumb */}
                    <BreadcrumbsNav activeItem={activeItem} />
                    {/* Left Sidebar - Filters */}
                    <Col
                        xs={12}
                        md={6}
                        lg={2}
                        className="rounded p-3 mb-3 mb-md-0 shadow-sm "
                        style={{ overflowY: 'auto', backgroundColor: '#87C6F4', minHeight: '100vh' }}
                    >
                        <div className=''>
                            <ul className="list-unstyled m-0 g-5">
                                <li
                                    className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'HRMasterDashboard' ? 'active-item' : ''
                                        }`}
                                    onClick={() => setActiveItem('HRMasterDashboard')}
                                    style={{ whiteSpace: 'nowrap' }} // Prevent wrapping
                                >
                                    <div className="me-2 flex-shrink-0">
                                        <FiMenu size={25} />
                                    </div>
                                    <span className="text-nowrap">
                                        Master Dashboard
                                    </span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'AdminAccess' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('AdminAccess')}>
                                    <div className="me-2 flex-shrink-0">
                                        <LuUserRound size={25} />
                                    </div>
                                    <span className="text-nowrap">Admin Access</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Recruiter Details' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Recruiter Details')}>
                                    <div className="me-2 flex-shrink-0">
                                        <CgProfile size={25} />
                                    </div>
                                    <span className="text-nowrap">Recruiter Details</span>
                                </li>
                                <li
                                    className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'CandidateDetails' ? 'active-item' : ''
                                        }`}
                                    onClick={() => setActiveItem('CandidateDetails')}
                                >
                                    <div className="me-2 flex-shrink-0">
                                        <LuLayoutDashboard size={25} />
                                    </div>
                                    <span className="text-nowrap">Candidate Details</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'JobsPage' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('JobsPage')}>
                                    <div className="me-2 flex-shrink-0">
                                        <PiSuitcaseSimple size={25} />
                                    </div>
                                    <span>Jobs</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'MasterData' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('MasterData')}>
                                    <div className="me-2 flex-shrink-0">
                                        <VscBroadcast size={25} />
                                    </div>
                                    <span>Master Data Page</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'ReviewPage' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('ReviewPage')}>
                                    <div className="me-2 flex-shrink-0">
                                        <IoChatbubblesOutline size={25} />
                                    </div>
                                    <span>Reviews</span>
                                </li>
                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'Subscription' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('Subscription')}>
                                    <div className="me-2 flex-shrink-0">
                                        <LiaHandHoldingSolid size={25} />
                                    </div>
                                    <span>Subscription</span>
                                </li>

                                <li className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-3 mb-4 sidebar-item ${activeItem === 'StatisticsPage' ? 'active-item' : ''
                                    }`}
                                    onClick={() => setActiveItem('StatisticsPage')}>
                                    <div className="me-2 flex-shrink-0">
                                        <PiChartLineUp size={25} />
                                    </div>
                                    <span>Statistics</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/* Right Column - Job Component */}
                    <Col xs={12} md={6} lg={10} className="d-flex justify-content-center text-center mt-0 ml-0">
                        {activeItem === 'HRMasterDashboard' && <HRMasterDashboard />}
                        {activeItem === 'CandidateDetails' && <CandidateDetails />}
                        {activeItem == 'JobsPage' && <JobsPage />}
                        {activeItem == 'Recruiter Details' && <RecruitersDetails />}
                        {activeItem == 'AdminAccess' && <AdminAccess />}
                        {activeItem == 'MasterData' && <MasterData />}
                        {activeItem == 'ReviewPage' && <ReviewPage />}
                        {activeItem == 'Subscription' && <Subscription />}
                        {activeItem == 'StatisticsPage' && <StatisticsPage />}
                    </Col>
                </Row>
            </Container >
        </>
    )
}

export default HRDashboardMain
