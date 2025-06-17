import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const LogoutModal = () => {
    return (
        <Container
            className="d-flex justify-content-center align-items-start"
            style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", paddingTop:'20%'}}
        >
            <div
                style={{
                    padding: "2rem",
                    borderRadius: "16px",
                    backgroundColor: "#fff7ee",
                    boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                    maxWidth: "400px",
                    height: "180px", // Exact height like image
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center", // vertically center content
                    alignItems: "center", // horizontally center content
                }}
            >
                <Card.Body className="text-center p-0">
                    <h5 style={{ color: "#1b7bcf", fontWeight: 600, marginBottom: "2rem" }}>
                        Are you Sure you want
                        <br />
                        to Logout Account?
                    </h5>

                    <div className="d-flex justify-content-center gap-3">
                        <Button
                            variant="outline-primary"
                            style={{
                                borderRadius: "20px",
                                padding: "4px 14px",
                                fontWeight: 500,
                                minWidth: "80px", // smaller as requested
                            }}
                        >
                            Logout
                        </Button>
                        <Button
                            variant="primary"
                            style={{
                                borderRadius: "20px",
                                padding: "4px 14px",
                                fontWeight: 500,
                                minWidth: "80px", // smaller as requested
                                backgroundColor: "#66b3ff",
                                borderColor: "#66b3ff",
                                color: "#1769aa",
                            }}
                        >
                            Cancel
                        </Button>
                    </div>
                </Card.Body>
            </div>
        </Container>
    );
};

export default LogoutModal;