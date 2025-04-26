import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaAsterisk, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { IoIosStar } from "react-icons/io";
import './Candidate_resentOtp_login.css';
import skylarkLogo from '../../../assets/image/skylarkLogo.png'
import { Link } from "react-router-dom";
import UserNavbar from '../../usernavbar/UserNavbar';

const Candidate_resentOtp_login = () => {

    return (
        <>
            <UserNavbar />

            <div className="login-wrapper-canidate-otp">
                <Container fluid>
                    <Row className="justify-content-center align-items-start " style={{ minHeight: '100vh' }}>
                        <div className="login-box-canidate-email d-flex flex-column flex-md-row w-100 mx-auto" style={{ maxWidth: '75%', minHeight: '50vh' }}>
                            {/* Left Side */}
                            <Col md={6} className="d-flex flex-column justify-content-center align-items-center left-side-canidate-otp">
                                <div className='logo-heading-canidate-email'>
                                    <img
                                        src={skylarkLogo}
                                        alt="Logo"
                                        className="img-fluid"
                                        style={{
                                            maxWidth: '120px',
                                            height: 'auto',
                                        }}
                                    />
                                </div>
                                <h2 className="text-white fw-bold mt-4 fs-2">Welcome Back!</h2>
                                <p className="text-white small">To Connect with the Top HR’s</p>
                                <Button variant="outline-success" className="rounded-pill px-5 border border-1 border-white text-white" style={{ backgroundColor: '#1e88e5' }}>Sign In</Button>
                            </Col>
                            {/* Right Side */}
                            <Col md={6} className="d-flex flex-column justify-content-center align-items-center gap-3 right-side-canidate-otp ">
                                <h3 className="fw-bold mb-3 fs-2" style={{ color: '#1e88e5' }}>Re-send OTP</h3>
                                <p className="small text-muted">We’ve sent an OTP to xyz@gmail.com please enter your code.</p>
                                <p className="small text-muted">
                                    Back to <a href="/login" style={{ color: '#1e88e5', textDecoration: 'none', fontWeight: '500' }}><Link to="/Candidate_verify_Otp">Log-in</Link></a>
                                </p>

                            </Col>
                        </div>

                    </Row>
                </Container>
            </div>
        </>
    );
};
export default Candidate_resentOtp_login;