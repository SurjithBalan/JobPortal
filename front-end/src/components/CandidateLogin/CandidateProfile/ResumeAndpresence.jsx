import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function ResumeAndpresence() {
    const navigate = useNavigate();

    const handleClick = () => {
        // You can do form validation here before navigating
        navigate('/CandidateDashboardMain'); // change '/next' to your actual route
    };

    return (
        <Container>
            <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Resume & Online Presence</h4>
                <Form>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formUploadPhoto">
                                <Form.Label>Upload Photo</Form.Label>
                                <Form.Control type="file" accept=".pdf,.jpg" />
                                <Form.Text className="text-muted">(Accepted format includes PDF & JPG)</Form.Text>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="formWebsite">
                                <Form.Label>Personal Website / Portfolio</Form.Label>
                                <Form.Control type="text" placeholder="Enter" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="formResumeUpload">
                                <Form.Label>Resume Upload</Form.Label>
                                <Form.Control type="file" accept=".pdf,.doc" />
                                <Form.Text className="text-muted">(Accepted format includes PDF & DOC)</Form.Text>
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="formLinkedIn">
                                <Form.Label>LinkedIn Profile URL</Form.Label>
                                <Form.Control type="text" placeholder="Enter" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg" onClick={handleClick} style={{ backgroundColor: '#1e88e5' }} >Save & Continue </Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default ResumeAndpresence
