import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Button, Nav, Dropdown, Image, Col, Row } from 'react-bootstrap';
import './postjobLeftside.css'
import PostJobForm from './postJobForm'
import ApplicationStatisticsDashboard from './ApplicationStatistics'
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



const NavbarComponent = ({ setShowComponent }) => {

    return (
        <Navbar expand="lg" style={{ backgroundColor: '#2196F3', height: '70px' }}>
            {/* Full width container */}
            <Container fluid className="px-4 d-flex justify-content-between align-items-center">

                {/* Left: Logo */}
                <Navbar.Brand href="#">
                    <img
                        src="https://your-logo-url.com/logo.png" // Replace with actual logo
                        alt="Skylark HR"
                        height="40"
                    />
                </Navbar.Brand>

                {/* Right: Post Job, Bell, Profile */}
                <Nav className="d-flex align-items-center gap-5">
                    <Button variant="light" className="fw-semibold text-primary bg-white" onClick={() => setShowComponent(prev => !prev)}>
                        Post Job
                    </Button>

                    <FiBell size={22} color="#fff" style={{ cursor: 'pointer' }} />

                    <Dropdown align="end">
                        <Dropdown.Toggle
                            variant="link"
                            className="d-flex align-items-center text-white text-decoration-none p-0"
                        >
                            <Image
                                src="https://via.placeholder.com/40" // Replace with actual image
                                roundedCircle
                                width="40"
                                height="40"
                            />
                            <span className="ms-2">Profile Name</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="#/settings">Settings</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/logout">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};

function PostJob() {
    const [showComponent, setShowComponent] = useState();
    return (
        <Container fluid className="py-4 px-3 m-3" style={{ overflowX: 'hidden' }}>
            <NavbarComponent setShowComponent={setShowComponent} />
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
                    {showComponent ?  <ApplicationStatisticsDashboard /> : <PostJobForm />}                    
                </Col>
                
            </Row>
        </Container>
    )
}

export default PostJob



