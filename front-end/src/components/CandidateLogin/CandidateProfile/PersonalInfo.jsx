import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

function PersonalInfo() {
    return (
        <Container>
            <div className="bg-whight rounded">
                <div className='pt-2 pb-2 px-2' style={{backgroundColor:'#efefef'}}>
                    <h4 className="fontColorP fw-semibold " >Personal Information</h4>
                </div>
                <Form>
                    <Row className="g-3">
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>First Name</Form.Label><Form.Control placeholder="Enter" className='fontColorP' /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>Last Name</Form.Label><Form.Control placeholder="Enter" className='fontColorP' /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>Email</Form.Label><Form.Control placeholder="Enter" className='fontColorP' /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>Phone No</Form.Label><Form.Control placeholder="Enter" className='fontColorP' /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>Date of Birth</Form.Label><Form.Control type="date" className='fontColorP' /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>Gender</Form.Label><Form.Select><option className='fontColorP'>Select</option></Form.Select></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>Area locality</Form.Label><Form.Control placeholder="Enter" className='fontColorP' /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>City</Form.Label><Form.Control placeholder="Enter" className='fontColorP' /></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>State</Form.Label><Form.Select><option>Select</option></Form.Select></Form.Group></Col>
                        <Col md={6}><Form.Group><Form.Label className='fontColorP'>Pin</Form.Label><Form.Control placeholder="Enter" className='fontColorP' /></Form.Group></Col>
                    </Row>
                    <div className="text-center mt-4">
                        <Button variant="primary" size="lg" style={{ backgroundColor: '#1e88e5' }} >Save & Next </Button>
                    </div>
                </Form>
            </div>
        </Container>
    )
}

export default PersonalInfo
