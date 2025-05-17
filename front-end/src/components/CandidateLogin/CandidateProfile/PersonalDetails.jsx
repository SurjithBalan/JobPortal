import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function PersonalDetails() {
    return (
        <Container>
            <div className="bg-light p-4 rounded">
                <h4 className="mb-4">Professional Details</h4>
                <Form>
                    <Row className="g-3">
                        <Col md={6}><Form.Group><Form.Label>Current Employment Status</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Current Job Title(if employed)</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Last Working Date (LWD)</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Notice Period</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Experience</Form.Label><Form.Control type="date" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Functional Area/Role</Form.Label><Form.Select><option>Select</option></Form.Select></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Industry Type</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Current Salary</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Employment Type  </Form.Label><Form.Select><option>Select</option></Form.Select></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Excepted Salary </Form.Label><Form.Select><option>Select</option></Form.Select></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Preferred Job Location</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label>Key Skills</Form.Label><Form.Control placeholder="Enter" /></Form.Group></Col>
                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg">Save & Next </Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default PersonalDetails
