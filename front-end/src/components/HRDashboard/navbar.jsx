import { Navbar, Container, Button, Nav, Breadcrumb, Image, Col, Row, Form, InputGroup } from 'react-bootstrap';
import React from 'react';
import skylarklogo from '../../assets/logo/Skylark3.jpeg';
import { FaStar } from "react-icons/fa";
import {FiGrid, FiFileText, FiHeart, FiBell, FiMessageSquare, FiLogOut, FiMenu, FiEdit, FiTarget, FiCheckCircle, FiPlus, FiMapPin, FiBriefcase, FiPhone } from 'react-icons/fi';
import profile from '../../assets/image/candidateImage.jpg'
function NavbarMenue() {
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
}
export default NavbarMenue
