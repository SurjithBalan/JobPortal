import { React, useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { MdAdd } from 'react-icons/md';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { VscBroadcast } from "react-icons/vsc";
import './MasterData.css';

const masterData = [
    { title: 'Work Mode', values: ['On Site', 'Hybrid', 'Remote'] },
    { title: 'Career Level', values: ['Entry Level', 'Junior Level', 'Mid Level'] },
    { title: 'Job Type', values: ['Full Time', 'Contract'] },
    { title: 'Education', values: ['Diploma', 'Graduate', 'Post Graduate'] },
    { title: 'Date Posted', values: ['Recent', 'One week ago', 'Two week ago'] },
    { title: 'Sort By', values: ['Newest', 'Oldest', 'Random'] },
    { title: 'Experience Level(filter)', values: ['0 - 3 Years', '4 - 7 Years', '8 - 11 Years'] },
    { title: 'Gender', values: ['Male', 'Female', 'Both'] },
    { title: '10 Per Page', values: ['10 Per Page', 'All'] },
    { title: 'Notice Period', values: ['Immediate', '15 days', '30 days'] },
    { title: 'Company Type', values: ['Corporate', 'Indian MNC', 'Foreign MNC'] },
    { title: 'Language', values: ['Hindi', 'English', 'Tamil'] },
    { title: 'Functionality', values: ['Software', 'Mobile', 'Web'] },
    { title: 'Specific Qualification', values: ['Medical', 'Arts', 'Engineer'] },
    { title: 'Industries', values: ['Software', 'Banking', 'Healthcare'] },
];

const MasterData = () => {
    const [show, setShow] = useState(false);

    // Handlers
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container fluid className="p-4 masterdata-page">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-semibold d-flex align-items-center fontclr mb-0">
                    <VscBroadcast size={22} className="me-2" style={{ color: '#1e88e5' }} />
                    Master Data
                </h5>
                <>
                    <Button variant="outline-primary" className="add-new-btn">
                        <MdAdd className="me-1" /> Add New
                    </Button>
                </>
            </div>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>input</Form.Label>
                            <Form.Control type="text" placeholder="Enter input" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary">
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="g-3">
                {masterData.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={4}>
                        <div className="border rounded-3 shadow-sm h-100">
                            <Card.Header className="bg-white fw-semibold border-bottom small fontclr py-2 px-3 d-flex justify-content-between align-items-center">
                                <span className="fontclr">{item.title}</span>
                                <Button
                                    variant="light"
                                    size="sm"
                                    className="p-1 add-btn-icon fontclr"
                                    style={{ minWidth: '0' }}
                                    onClick={handleShow} >
                                    +
                                </Button>

                                {/*  */}
                            </Card.Header>
                            <Card.Body className="py-2 px-3">
                                {item.values.map((val, i) => (
                                    <div
                                        key={i}
                                        className="d-flex justify-content-between align-items-center mb-2 small fontclr"
                                    >
                                        <span className="fontclr">{val}</span>
                                        <span>
                                            <CiEdit className="me-2 icon-action" size={16} />
                                            <MdDeleteOutline className="icon-action" size={16} />
                                        </span>
                                    </div>
                                ))}
                            </Card.Body>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MasterData;