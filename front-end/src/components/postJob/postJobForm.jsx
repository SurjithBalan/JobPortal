import React from "react";
import { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import './postJobForm.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PostJobForm = () => {
    const [phone, setPhone] = useState('');
    return (
        <Container className="py-4">
            <h4 className="mb-4 fs-4 text-start">Post a New job</h4>
            <Form>
                {/* Job Title */}
                <Form.Group controlId="jobTitle" className="mb-3">
                    <Form.Label className="text-start d-block text-form-label">Job Title *</Form.Label>
                    <Form.Control type="text" placeholder="Enter job title" className="bg-light" />
                </Form.Group>

                {/* Job Description */}
                <Form.Group controlId="jobDescription" className="text-start mb-4">
                    <Form.Label >Job Description</Form.Label>
                    <Form.Control as="textarea" rows={5} className="bg-light" />
                </Form.Group>
                <h5 className="mb-3 text-start">Information</h5>
                <Row className="g-3">
                    <Col md={6}>
                        <Form.Group controlId="category" className="text-start">
                            <Form.Label>Category</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Category</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="industry" className="text-start">
                            <Form.Label>Industry</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Industry</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="skills" className="text-start">
                            <Form.Label>Skills</Form.Label>
                            <Form.Control as="textarea" rows={4} className="bg-light" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="jobType" className="text-start">
                            <Form.Label>Job Type</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Job Type</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group controlId="qualification" className="mt-3 text-start">
                            <Form.Label>Qualification</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Qualification</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="careerLevel text-start">
                            <Form.Label className="text-start d-block">Career Level</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Career Level</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="experience">
                            <Form.Label className="text-start d-block">Experience</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Experience</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="deadline text-start">
                            <Form.Label className="text-start d-block">Application Deadline Date</Form.Label>
                            <Form.Control type="date" className="bg-light" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="email" className="text-start">
                            <Form.Label>Job Apply Email</Form.Label>
                            <Form.Control type="email" placeholder="example@email.com" className="bg-light" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        {/* <Form.Group controlId="phoneNumber" className="text-start">
                            <Form.Label>Phone number</Form.Label>
                            <InputGroup>
                                <InputGroup.Text>🇮🇳 +91</InputGroup.Text>
                                <Form.Control type="tel" placeholder="Phone number" className="bg-light" />
                            </InputGroup>
                        </Form.Group> */}
                        <div className="">
                            <label className="form-label text-start d-block">Phone Number</label>
                            <PhoneInput
                                country={'in'}
                                value={phone}
                                onChange={setPhone}
                                enableSearch={true}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: false,
                                }}
                                containerStyle={{ width: '100%' }}
                                inputStyle={{
                                    width: '100%',
                                    backgroundColor: '#f8f9fa',
                                    border: '1px solid #ced4da',
                                    borderRadius: '0.375rem',
                                    height: '38px',
                                }}
                                buttonStyle={{ border: '1px solid #ced4da' }}
                            />
                        </div>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="ctcRange" className="text-start">
                            <Form.Label>CTC Range</Form.Label>
                            <Form.Control placeholder="(Approximately in LPA)" className="bg-light" />
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="gender" className="text-start">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Gender</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="workMode" className="text-start">
                            <Form.Label>Work Mode</Form.Label>
                            <Form.Select className="bg-light">
                                <option>Work Mode</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>

                <div className="text-center mt-4" >
                    <Button variant="primary" size="lg" className='text-white' style={{ backgroundColor: '#1e88e5' }}>
                        Save & Preview
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default PostJobForm;