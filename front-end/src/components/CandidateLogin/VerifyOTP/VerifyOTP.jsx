import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaAsterisk, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { IoIosStar } from "react-icons/io";
import './VerifyOTP.css';
import skylarkLogo from '../../../assets/image/skylarklogo.png'

const VerifyOTP = () => {
    return (
        <div className="login-wrapper-canidate-otp">
            <Container fluid>
                <Row className="min-vh-100 justify-content-center align-items-center">
                    <div className="login-box-canidate-email d-flex flex-column flex-md-row w-100 mx-auto" style={{ maxWidth: '75%' }}>
                        {/* Left Side */}
                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center left-side-canidate-otp">
                            <div className='logo-heading-canidate-otp'>
                                <img
                                    src={skylarkLogo}
                                    alt="Logo"
                                    className="img-fluid responsive-logo-otp"
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
                        <Col md={6} className="d-flex flex-column justify-content-center align-items-center gap-3 right-side-canidate-otp">
                            <h3 className="fw-bold mb-3 fs-2" style={{ color: '#1e88e5' }}>Verify OTP</h3>
                            <Form className="w-70">
                                <Form.Group className="mb-3">
                                    <div className="position-relative">
                                        <div className="position-absolute top-50 start-0 translate-middle-y d-flex ps-2 gap-2">
                                            <FaAsterisk size={5} className="text-dark fw-bold" />
                                            <FaAsterisk size={5} className="text-dark" />
                                            <FaAsterisk size={5} className="text-dark" />
                                        </div>
                                        <Form.Control
                                            type="Otp"
                                            placeholder="Enter otp"
                                            className="ps-5"
                                        />
                                    </div>
                                </Form.Group>
                            </Form>
                            <Button
                                className="rounded-pill text-white "
                                style={{ backgroundColor: '#1e88e5' }}
                            >
                                Verify OTP
                            </Button>
                            <p className="small text-muted">
                                 <a href="/login" style={{ color: 'green', textDecoration: 'none', fontWeight: '500' }}>Otp- successfully</a>
                            </p>
                            {/* <p className="small text-muted">
                                Back to <a href="/login" style={{ color: '#1e88e5', textDecoration: 'none', fontWeight: '500' }}>Log-in</a>
                            </p> */}
                        </Col>
                    </div>

                </Row>
            </Container>
        </div>
    );
};
export default VerifyOTP;