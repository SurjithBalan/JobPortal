import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Button, Nav, Breadcrumb, Image, Col, Row } from 'react-bootstrap';
import './postjobLeftside.css'
import PostJobForm from './postJobForm'
import ApplicationStatisticsDashboard from './ApplicationStatistics'
import skylarklogo from '../../assets/logo/Skylark3.jpeg'
import profile from '../../assets/image/candidateImage.jpg'
import { FaStar } from "react-icons/fa";
import {
    FiGrid,
    FiUser,
    FiBriefcase,
    FiFileText,
    FiHeart,
    FiBell,
    FiMessageSquare,
    FiLogOut,
} from 'react-icons/fi';
import './postJob.css'


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
            <Container className="mt-2">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item active>Post a Job</Breadcrumb.Item>
                </Breadcrumb>
            </Container>
        </>
    );
};

function PostJob() {
    const [showComponent, setShowComponent] = useState();
    return (
        <>
            <NavbarComponent setShowComponent={setShowComponent} />
            <Container fluid className="py-4 px-3 m-3" style={{ overflowX: 'hidden' }}>
                <Row>
                    {/* Left Sidebar - Filters */}
                    <Col
                        xs={12}
                        md={4}
                        lg={3}
                        className="rounded p-3 mb-3 mb-md-0 shadow-sm"
                        style={{ overflowY: 'auto' }}
                    >
                        <div>
                            <ul className="list-unstyled p-3 mb-0">
                                <li className="sidebar-item active">
                                    <FiGrid className="me-2" />
                                    <span>Dashboard</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiUser className="me-2" />
                                    <span>Profile</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiBriefcase className="me-2" />
                                    <span>My jobs</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiFileText className="me-2" />
                                    <span>Submit job</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiFileText className="me-2" />
                                    <span>Job Applicants</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiHeart className="me-2" />
                                    <span>Candidates shortlist</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiBell className="me-2" />
                                    <span>Candidates Alerts</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiMessageSquare className="me-2" />
                                    <span>Messages</span>
                                </li>
                                <li className="sidebar-item">
                                    <FiMessageSquare className="me-2" />
                                    <span>Messages</span>
                                </li>

                                <li className="sidebar-item">
                                    <FiLogOut className="me-2" />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>

                    </Col>
                    {/* Right Column - Job Component */}
                    <Col xs={12} md={8} lg={9} className="d-flex justify-content-center text-center mt-0">
                        {/* <h5>&lt;RecommendedJobs component /&gt;</h5> */}
                        {showComponent ? <ApplicationStatisticsDashboard /> : <PostJobForm />}
                    </Col>

                </Row>
            </Container>
        </>

    )
}

export default PostJob



