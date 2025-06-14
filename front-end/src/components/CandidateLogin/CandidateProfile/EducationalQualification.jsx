import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function EducationalQualification() {
    return (
        <Container>
            <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Education Qualifications</h4>
                <Form>
                    <Row className="g-3">
                        <Col md={6}><Form.Group><Form.Label>Highest Degree</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Specialization</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>University Name (Collage Name)</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Year of Graduation</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>

                    </Row>
                </Form>
            </div>
            <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Certifications</h4>
                <Form>
                    <Row className="g-3">
                        <Col md={6}><Form.Group><Form.Label>Certification Name</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Specialization</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>University Name (Collage Name)</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Completion Year</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>

                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg" style={{ backgroundColor: '#1e88e5' }} > + add</Button>
                    </div>
                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg" style={{ backgroundColor: '#1e88e5' }} >Save & Next </Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default EducationalQualification
