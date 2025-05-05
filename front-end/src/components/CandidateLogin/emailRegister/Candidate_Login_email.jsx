import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaEnvelope, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Candidate_Login_email.css';
import skylarkLogo from '../../../assets/image/skylarklogo.png';
import { useNavigate } from 'react-router-dom';
import UserNavbar from "../../usernavbar/UserNavbar";
import { useFormik } from 'formik';
import * as Yup from 'yup';
const CandidateLogin = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
        }),
        onSubmit: (values) => {
            console.log('Valid email:', values.email);
            navigate('/CandidateLogin_otp');
        },
    });

    return (
        <>
            <UserNavbar />

            <div className="login-wrapper-canidate-email mt-0">
                <Container fluid>
                    <Row className="justify-content-center align-items-start " style={{ minHeight: '100vh' }}>
                        <div className="login-box-canidate-email d-flex flex-column flex-md-row w-100 mx-auto" style={{ maxWidth: '75%', minHeight: '50vh' }}>
                            {/* Left Side */}
                            <Col md={5} className="d-flex flex-column justify-content-center align-items-center left-side-canidate-email">
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
                                <p className="small text-white">To Connect with the Top HR’s</p>
                                <Button variant="outline-success" className="rounded-pill px-5 border border-1 border-white text-white" style={{ backgroundColor: '#1e88e5' }}>Sign In</Button>
                            </Col>

                            {/* Right Side */}
                            <Col md={7} className="d-flex flex-column justify-content-center align-items-center right-side-canidate-email">
                                <h3 className="fw-bold mb-3 fs-2" style={{ color: '#1e88e5' }}>Candidate Login</h3>
                                <div className="d-flex gap-3 mb-2 social-icons-canidate-email">
                                    <FaGoogle size={20} style={{ color: '#DB4437' }} />
                                    {/* <FaLinkedin size={20} />
                                <FaGithub size={20} /> */}
                                </div>
                                <p className="small text-muted">Or use your email for registration</p>
                                <Form className="w-70" onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <div className="position-relative">
                                            <span> <FaEnvelope className="input-icon-canidate-email" /></span>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                className={`ps-5  ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.email}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className="text-danger mt-1 small">{formik.errors.email}</div>
                                            ) : null}
                                        </div>
                                    </Form.Group>

                                    <Button
                                        type="submit"
                                        className="rounded-pill text-white"
                                        style={{ backgroundColor: '#1e88e5' }}
                                    >
                                        Send OTP
                                    </Button>
                                </Form>
                            </Col>
                        </div>

                    </Row>
                </Container>
            </div>
        </>
    );
};
export default CandidateLogin;