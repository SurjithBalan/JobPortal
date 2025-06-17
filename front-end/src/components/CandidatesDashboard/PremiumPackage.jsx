import React from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Badge,
    ToggleButtonGroup,
    ToggleButton,
} from "react-bootstrap";
import { FaCheck, FaTimes } from "react-icons/fa";

const plans = [
    {
        title: "Basic",
        price: "$90/",
        type: "Monthly",
        features: [
            { text: "1 Job posting", included: true },
            { text: "0 Featured Job", included: false },
            { text: "Job displayed for 20 days", included: false },
            { text: "Premium Support 24/7", included: false },
        ],
        bg: "#f2f8ff",
        recommended: false,
    },
    {
        title: "Standard",
        price: "$248/",
        type: "Monthly",
        features: [
            { text: "1 Job posting", included: true },
            { text: "0 Featured Job", included: true },
            { text: "Job displayed for 20 days", included: true },
            { text: "Premium Support 24/7", included: false },
        ],
        bg: "#fff7e6",
        recommended: true,
    },
    {
        title: "Extended",
        price: "$499/",
        type: "Monthly",
        features: [
            { text: "1 Job posting", included: true },
            { text: "0 Featured Job", included: true },
            { text: "Job displayed for 20 days", included: true },
            { text: "Premium Support 24/7", included: true },
        ],
        bg: "#f6f1ff",
        recommended: false,
    },
];

export default function PricingPlans() {
    return (
        <Container className="py-5">
            <Row className="mb-5">
                <Col md={6}>
                    <div className=" mb-4 text-start">
                        <h6 className="fw-bold" style={{ color: '#1e88e5' }}>Choose Your Plan</h6>
                        <h2 className="fw-bold fs-1">Save up to 10%</h2>
                        <ToggleButtonGroup
                            type="radio"
                            name="planType"
                            defaultValue={1}
                            className="mt-3"
                        >
                            <ToggleButton
                                id="monthly"
                                value={1}
                                className="fw-semibold me-5 custom-toggle-pp rounded-pill min-w-0"
                            >
                                Monthly
                            </ToggleButton>
                            <ToggleButton
                                id="annual"
                                value={2}
                                className="fw-semibold custom-toggle-pp rounded-pill"
                            >
                                Annual
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </Col>
            </Row>

            <Row className="g-4">
                {plans.map((plan, idx) => (
                    <Col md={4} key={idx}>
                        <div className="h-100 d-flex flex-column justify-content-between shadow-sm border rounded">
                            {/* Top Section */}
                            <div
                                style={{
                                    backgroundColor: plan.bg,
                                    borderTopLeftRadius: "0.375rem",
                                    borderTopRightRadius: "0.375rem",
                                    padding: "2.5rem 1rem 1rem",
                                    position: "relative",
                                }}
                                className="text-center"
                            >
                                {plan.recommended && (
                                    <Badge
                                        bg="success"
                                        className="position-absolute top-0 end-0 m-2"
                                    >
                                        Recommended
                                    </Badge>
                                )}
                                <h5 className="text-primary fw-semibold mb-2">
                                    {plan.title}
                                </h5>
                                <h4 className="fw-bold mb-0">
                                    {plan.price}
                                    <small className="fw-normal ms-1">{plan.type}</small>
                                </h4>
                            </div>

                            {/* Features & Button */}
                            <div className="p-4 d-flex flex-column justify-content-between flex-grow-1">
                                <ul className="list-unstyled text-start mb-4">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className={`mb-2 d-flex align-items-center ${feature.included
                                                ? "fw-semibold"
                                                : "text-muted"
                                                }`}
                                        >
                                            {feature.included ? (
                                                <FaCheck className="me-2 text-success" />
                                            ) : (
                                                <FaTimes className="me-2 text-danger" />
                                            )}
                                            {feature.text}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center">
                                    <Button
                                        variant="primary"
                                        className="px-4 py-2 fw-semibold"
                                    >
                                        Purchase Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}