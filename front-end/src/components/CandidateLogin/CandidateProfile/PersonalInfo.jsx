import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function PersonalInfo() {
    return (
        <Container>
            <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Personal Information</h4>
                <Form>
                    <Row className="g-3">
                        <Col md={6}><Form.Group><Form.Label>First Name</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Last Name</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Email</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Phone No</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Date of Birth</Form.Label><Form.Control type="date" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Gender</Form.Label><Form.Select><option>Select</option></Form.Select></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Area locality</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>City</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>State</Form.Label><Form.Select><option>Select</option></Form.Select></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Pin</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg">Save & Next </Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default PersonalInfo
