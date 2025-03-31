import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import Slider from 'react-slick';
import { BsLaptop, BsHeadset, BsGraphUp, BsPeople, BsCalculator, BsMegaphone, BsHeartPulse, BsGear, BsPersonLinesFill, BsBriefcase, BsTools, BsFillPatchQuestionFill } from "react-icons/bs";

// Job categories with corresponding icons
const jobCategories = [
    { id: 1, name: "IT", openings: 81, icon: <BsLaptop size={50} /> },
    { id: 2, name: "BPO", openings: 8, icon: <BsHeadset size={50} /> },
    { id: 3, name: "Sales & Marketing", openings: 14, icon: <BsGraphUp size={50} /> },
    { id: 4, name: "Customer Service", openings: 1, icon: <BsPeople size={50} /> },
    { id: 5, name: "Accounts", openings: 5, icon: <BsCalculator size={50} /> },
    { id: 6, name: "Digital Marketing", openings: 7, icon: <BsMegaphone size={50} /> },
    { id: 7, name: "Health Care", openings: 1, icon: <BsHeartPulse size={50} /> },
    { id: 8, name: "Manufacturing", openings: 6, icon: <BsGear size={50} /> },
    { id: 9, name: "Skin Clinic", openings: 4, icon: <BsPersonLinesFill size={50} /> },
    { id: 10, name: "Human Resources", openings: 11, icon: <BsBriefcase size={50} /> },
    { id: 11, name: "Operations", openings: 10, icon: <BsTools size={50} /> },
    { id: 12, name: "Miscellaneous", openings: 5, icon: <BsFillPatchQuestionFill size={50} /> },
];

const JobCategories = () => {
    return (
        <Container className="py-5">
            <h2 className="mb-4 text-center fw-bold">Browse by Category</h2>
            <Row className="g-4">
                {/* <Slider {...settings}>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                </Slider> */}
                {/* {jobCategories.map((category) => (
                    <Col key={category.id} xs={12} sm={6} md={4} lg={3}>
                        <Card className="shadow-sm text-center p-3 rounded-4 border-0">
                            <div className="mb-3 text-primary">{category.icon}</div>
                            <Card.Body>
                                <Card.Title className="fw-bold">{category.name}</Card.Title>
                                <div className="text-white bg-primary rounded-pill py-1 px-3 mb-3">
                                    No of Openings: {category.openings}
                                </div>
                                <Button variant="outline-dark" className="rounded-pill">
                                    View Jobs
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))} */}
            </Row>
        </Container>
    );
};

export default JobCategories;
