import React from 'react';
import { Container, Card, Button, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './FeaturedCandidates.css';
import candidateImage from '../../assets/image/candidateImage.jpg';

const candidates = [
    {
        name: "Sandy",
        role: "Java Full Stack",
        company: "Wipro",
        location: "Chennai",
        ctc: "₹1,20,000",
        status: "Currently Working",
        statusColor: "danger",
        img: candidateImage
    },
    {
        name: "Sandy",
        role: "Java Full Stack",
        company: "Wipro",
        location: "Chennai",
        ctc: "₹1,20,000",
        status: "Open to Work",
        statusColor: "success",
        img: candidateImage
    },
    {
        name: "Sandy",
        role: "Java Full Stack",
        company: "Wipro",
        location: "Chennai",
        ctc: "₹1,20,000",
        status: "Serving NP",
        statusColor: "warning",
        noticePeriod: 45,
        img: candidateImage
    },
    {
        name: "Sandy",
        role: "Java Full Stack",
        company: "Wipro",
        location: "Chennai",
        ctc: "₹1,20,000",
        status: "Open to Work",
        statusColor: "success",
        img: candidateImage
    },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1400 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 1400, min: 992 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 992, min: 768 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};

const FeaturedCandidates = () => {
    return (
        <Container fluid className="py-3 bg-light text-center carousel-container-area">
            <div className="Heading-container-area">
                <h2 className="fw-bold mb-4 text-purple text-start">Featured Candidates</h2>
                {/* Carousel here */}
            </div>
           

            <Carousel
                responsive={responsive}
                infinite={true}
                arrows={true}
                keyBoardControl={true}
                containerClass="carousel-container"
                itemClass="px-3"
            >
                {candidates.map((candidate, index) => (
                    <Card key={index} className="shadow-sm h-100 d-flex flex-column justify-content-between">
                        <div className={`bg-${candidate.statusColor} text-white py-3 rounded-top extra-rounded-bottom fw-bold`}>
                            {candidate.status}
                            {candidate.noticePeriod && (
                                <Badge bg="light" text="danger" className="ms-2 rounded-circle">
                                    {candidate.noticePeriod}
                                </Badge>
                            )}
                        </div>
                        <Card.Body>
                            <img
                                src={candidate.img}
                                alt={candidate.name}
                                className="rounded-circle mb-3"
                                style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                            />
                            <Card.Title className="fw-bold">{candidate.name}</Card.Title>
                            <Card.Text className="mb-1">{candidate.role}</Card.Text>
                            <Card.Text className="mb-1">{candidate.company}</Card.Text>
                            <Card.Text className="text-muted mb-2">
                                <FaMapMarkerAlt className="me-1" />
                                {candidate.location}
                            </Card.Text>
                            <Card.Text className="fw-semibold text-success">
                                Current CTC {candidate.ctc}
                            </Card.Text>
                            <Button variant="purple" className="w-100 fw-bold">
                                View Profile
                            </Button>
                        </Card.Body>
                    </Card>
                ))}
            </Carousel>

            <Button variant="outline-purple" className="mt-4 px-4 py-2 fw-semibold">
                View More
            </Button>
        </Container>
    );
};

export default FeaturedCandidates;