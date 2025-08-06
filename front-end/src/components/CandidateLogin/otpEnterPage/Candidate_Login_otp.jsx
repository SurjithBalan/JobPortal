import { React, useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaAsterisk, FaGoogle, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { IoIosStar } from "react-icons/io";
import './Candidate_Login_otp.css';
import skylarkLogo from '../../../assets/image/skylarklogo.png'
// import { useNavigate } from 'react-router-dom';
import UserNavbar from '../../usernavbar/UserNavbar';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const CandidateLogin_otp = () => {
    const navigate = useNavigate();
    const [success, setSuccess] = useState(false);
    const formik = useFormik({
        initialValues: {
            otp: '',
        },
        validationSchema: Yup.object({
            otp: Yup.string()
                .matches(/^\d{4}$/, 'OTP must be exactly 4 digits')
                .required('OTP is required'),
        }),
        onSubmit: (values) => {
            console.log('Valid OTP:', values.otp);
            setSuccess(true); // Show success message
            // navigate('/Candidate_resentOtp_login'); // Remove navigation
        },
    });
    return (
        <>
            <UserNavbar />
            <div className="login-wrapper-canidate-otp" style={{ minHeight: '70vh' }}>
                <Container fluid>
                    <Row className="justify-content-center align-items-start " >
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
                            <Col md={6} className="d-flex flex-column justify-content-center align-items-center gap-3 right-side-canidate-otp">
                                <h3 className="fw-bold mb-3 fs-2" style={{ color: '#1e88e5' }}>Candidate Login</h3>
                                <div className="d-flex gap-3 mb-2 social-icons">
                                    {/* <FaGoogle size={20} style={{ color: '#DB4437' }} /> */}
                                    {/* <FaLinkedin size={20} />
                                <FaGithub size={20} /> */}
                                </div>
                                <p className="small text-muted">Enter the otp received from the mail</p>
                                <Form className="w-70" onSubmit={formik.handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <div className="position-relative">
                                            {/* <div className="position-absolute top-50 start-0 translate-middle-y d-flex ps-2 gap-2">
                                                <FaAsterisk size={5} className="text-dark fw-bold" />
                                                <FaAsterisk size={5} className="text-dark" />
                                                <FaAsterisk size={5} className="text-dark" />
                                            </div> */}
                                            <Form.Control
                                                type="text"
                                                name="otp"
                                                placeholder="Enter OTP"
                                                className={` ${formik.touched.otp && formik.errors.otp ? 'is-invalid' : ''}`}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.otp}
                                            />
                                            {formik.touched.otp && formik.errors.otp ? (
                                                <div className="text-danger mt-1 small">{formik.errors.otp}</div>
                                            ) : null}
                                        </div>
                                    </Form.Group>

                                    <div className='d-flex justify-content-end'>
                                        <p className="small" style={{ color: '#1e88e5' }}>
                                            Re-send <a href="/login" className="text-decoration-none">OTP?</a>
                                        </p>
                                    </div>

                                    <Button
                                        type="submit"
                                        className="rounded-pill text-white"
                                        style={{ backgroundColor: '#1e88e5' }}
                                    onClick={() => navigate("/CandidatequickProfilePage")}>
                                        Verify OTP
                                    </Button>
                                    {success && (
                                        <div className="mt-2 text-success small fw-semibold">
                                            OTP verified successfully!
                                        </div>
                                    )}
                                </Form>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};
export default CandidateLogin_otp;