import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaLaptop, FaHeadphones, FaBriefcaseMedical, FaBullhorn, FaSuitcase, FaUserTie, FaChartLine, FaPaintBrush } from 'react-icons/fa';
import './JobCategories.css';

const categories = [
    { icon: <FaLaptop size={32} color="#1d4ed8" />, title: 'IT & Software' },
    { icon: <FaHeadphones size={32} color="#6b21a8" />, title: 'BPO / Call Centre' },
    { icon: <FaBriefcaseMedical size={32} color="#0ea5e9" />, title: 'Healthcare' },
    { icon: <FaBullhorn size={32} color="#ef4444" />, title: 'Marketing' },
    { icon: <FaSuitcase size={32} color="#f59e0b" />, title: 'Sales' },
    { icon: <FaUserTie size={32} color="#ea580c" />, title: 'HR & Admin' },
    { icon: <FaChartLine size={32} color="#22c55e" />, title: 'Finance' },
    { icon: <FaPaintBrush size={32} color="#ec4899" />, title: 'Design' },
];

const JobCategories = () => {
    return (
        <Container className="py-5 text-center">
            <h3 className="fw-bold mb-4">Job Categories</h3>
            <Row className="g-4">
                {categories.map((cat, index) => (
                    <Col key={index} xs={6} md={3}>
                        <div className="shadow-sm p-3 category-card text-center d-flex flex-column align-items-center justify-content-center"
                            style={{ minWidth: '140px', height: '160px', flex: '1 1 0', borderRadius: '16px' }}>
                            <div className="mb-3 category-icon ">{cat.icon}</div>
                            <Card.Text className="fw-semibold">{cat.title}</Card.Text>
                        </div>
                    </Col>
                ))}
            </Row>
            <div className="mt-4">
                <Button className="px-2 py-2  fw-semibold jobCatogery-button">Explore More</Button>
            </div>
        </Container>
    );
};

export default JobCategories;