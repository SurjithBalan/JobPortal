import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';
import { BsTelephone } from 'react-icons/bs';
import './FeedbackForm.css';

const FeedbackForm = () => {
    return (
        <Container className="feedback-container my-5">
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <div className="feedback-box rounded-4 p-4 shadow-sm">
                        <h4 className="text-center text-purple mb-4 ">Report & Feedback</h4>

                        <Form>
                            <Form.Group controlId="name" className="mb-3">
                                <Form.Control type="text" placeholder="Enter your Name" className='input_feild' />
                            </Form.Group>

                            <Form.Group controlId="email" className="mb-3">
                                <Form.Control type="email" placeholder="Enter Your Email Address" className='input_feild' />
                            </Form.Group>

                            <Form.Group controlId="type" className="mb-3 text-dark" >
                                <Form.Select className='input_feild text-dark'>
                                    <option>Type a Feedback</option>
                                    <option>Bug</option>
                                    <option>Suggestion</option>
                                    <option>Other</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="message" className="mb-4">
                                <Form.Control as="textarea" rows={4} placeholder="Message" className='input_feild' />
                            </Form.Group>

                            <div className="text-center">
                                <Button variant="outline-primary" className="rounded-pill px-4 fw-semibold text-purple border-purple">
                                    Send Feedback
                                </Button>
                            </div>
                        </Form>

                        <div className="mt-5 text-center">
                            <h6 className="fw-bold text-purple">Need Help? Reach us directly!</h6>
                            <div className="d-flex flex-column align-items-center mt-3 gap-2">
                                <div>

                                    <p style={{ color: '666363', fontSize: '16px' }}> <MdEmail className="me-2 text-purple contact-text" />Support@example.com</p>
                                </div>
                                <div>
                                    <p style={{ color: '666363', fontSize: '16px' }}><BsTelephone className="me-2 text-purple contact-text" />+91 7326806298</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FeedbackForm;