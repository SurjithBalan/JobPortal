import React, { useState } from 'react'; // Import useState
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaEnvelope } from 'react-icons/fa';
import './Candidate_Login_email.css';
import skylarkLogo from '../../../assets/image/skylarklogo.png'; // Ensure this path is correct
import { useNavigate } from 'react-router-dom';
import UserNavbar from "../../usernavbar/UserNavbar";
import { useFormik } from 'formik';
import { FcGoogle } from "react-icons/fc";
import * as Yup from 'yup';
import axios from 'axios';
import { BASE_URL } from '../../../utils/api';

const CandidateLogin = () => {
    const navigate = useNavigate();
    const [apiError, setApiError] = useState(''); // State to hold API error messages

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
        }),
        onSubmit: async (values) => { // Make onSubmit async
            setApiError(''); // Clear previous errors
            console.log('Sending email to backend:', values.email);

            try {
              

                const data = await axios.post(`${BASE_URL}/candidate/login`, values);

                if (response.ok && data.success) { // Check for response.ok and a success flag from backend
                    console.log('Backend response success:', data);
                    navigate('/CandidateLogin_otp'); // Navigate on successful response
                } else {
                    // Set error message from backend or a generic one
                    setApiError(data.message || 'Invalid credentials. Please try again.');
                    console.error('Backend response error:', data);
                }
            } catch (error) {
                console.error('Error sending data to backend:', error);
                // Handle network errors or other issues
                setApiError('An error occurred. Please try again later.');
            }
        },
    });

    return (
        <>
            <UserNavbar />
            <div className="login-wrapper-canidate-email">
                <div className="login-box-canidate-email">
                    {/* Left Side */}
                    <Col md={6} className="left-side-canidate-email">
                        <img src={skylarkLogo} alt="Skylark Logo" style={{ width: '150px', marginBottom: '20px' }} />
                        <h2 className="text-white fw-bold mt-4 fs-2">Welcome Back!</h2>
                        <p className="small text-white">To Connect with the Top HR’s</p>
                        {/* The Sign In button on the left might be confusing if this is a login page. Consider its purpose or removal. */}
                        {/* <Button variant="outline-success" className="rounded-pill px-5 border border-1 border-white text-white" style={{ backgroundColor: '#1e88e5' }}>Sign In</Button> */}
                    </Col>

                    {/* Right Side */}
                    <Col md={6} className="d-flex flex-column justify-content-center align-items-center right-side-canidate-email">
                        <h3 className="" style={{ color: '#1e88e5' }}>Candidate Login</h3>
                        <div className="d-flex gap-3 mb-2 social-icons-canidate-email">
                            <FcGoogle size={30} style={{ color: '#DB4437' }} />
                            {/* <FaLinkedin size={20} />
                            <FaGithub size={20} /> */}
                        </div>
                        <p className="small text-muted">----- Or ----- </p>

                        {/* Display API Error Message */}
                        {apiError && (
                            <div className="alert alert-danger w-70 text-center" role="alert" style={{fontSize: '0.85rem'}}>
                                {apiError}
                            </div>
                        )}

                        <Form className="w-70" onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3">
                                <div className="position-relative">
                                    <span> <FaEnvelope className="input-icon-canidate-email" /></span>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className={`ps-5 ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''} ${apiError ? 'is-invalid' : ''}`}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        aria-describedby="emailHelp"
                                    />
                                    <div className="text-danger mt-1 small" style={{ minHeight: '18px' }}>
                                        {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
                                    </div>
                                </div>
                            </Form.Group>

                            <Button
                                type="submit"
                                className="rounded-pill text-white w-100" // Added w-100 for full width
                                style={{ backgroundColor: '#1e88e5' }}
                                disabled={formik.isSubmitting} // Disable button while submitting
                            >
                                {formik.isSubmitting ? 'Sending...' : 'Send OTP'}
                            </Button>
                        </Form>
                    </Col>
                </div>
            </div>
        </>
    );
};

export default CandidateLogin;