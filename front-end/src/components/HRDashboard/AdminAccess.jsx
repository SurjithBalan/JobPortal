import React from 'react';
import { Container, Table, Row, Col} from 'react-bootstrap';
import { BsBriefcase, BsPeople, BsSliders } from 'react-icons/bs';
import { MdDashboard } from "react-icons/md";
import './AdminAccess.css';
const actions = [
    {
        title: 'Job Management',
        icon: <BsBriefcase size={25} />,
        items: ['Create a new Job', 'Edit Job and Stages', 'Change Job Status'],
    },
    {
        title: 'Candidate Management',
        icon: <BsPeople size={25} />,
        items: ['Edit User details', 'Edit Job and Stages', 'Change Job Status'],
    },
    {
        title: 'User Management',
        icon: <BsSliders size={25} />,
        items: ['Edit User details', 'Edit Job and Stages', 'Change Job Status'],
    },
];

const AdminAccess = () => {
    return (
        <Container fluid className="admin-access-wrapper p-4">
            <h5 className="fw-semibold mb-4 d-flex align-items-center fontclr">
                <MdDashboard size={22} className="me-2" style={{ color: '#1e88e5' }} />
                Admin Access
            </h5>
            {/* ✅ Header Row */}
            <div className="border rounded-3 mb-3">
                <Row className="align-items-center fw-semibold fontclr text-center py-2 px-3" style={{ fontSize: '0.95rem' }}>
                    <Col xs={6} className="text-start">Actions</Col>
                    <Col xs={2}>Administrator</Col>
                    <Col xs={2}>Moderator</Col>
                    <Col xs={2}>Viewer</Col>
                </Row>
            </div>
            {/* ✅ Section Rows */}
            {actions.map((section, idx) => (
                <div key={idx} className="border rounded-3 mb-3">
                    {/* Section Title */}
                    <div className="d-flex align-items-center px-3 py-2 border-bottom" style={{color:'#1e88e5'}}>
                        <span className="me-2">{section.icon}</span>
                        <span className="fw-semibold">{section.title}</span>
                    </div>
                    {/* Section Items */}
                    {section.items.map((item, i) => (
                        <Row key={i} className="align-items-center py-2 px-3 border-top">
                            <Col xs={6} className="text-start fontclr">{item}</Col>
                            <Col xs={2} className="text-center">
                                <input type="checkbox" defaultChecked />
                            </Col>
                            <Col xs={2} className="text-center">
                                <input type="checkbox" defaultChecked />
                            </Col>
                            <Col xs={2} className="text-center">
                                <input type="checkbox" />
                            </Col>
                        </Row>
                    ))}
                </div>
            ))}
        </Container>
    );
};

export default AdminAccess;