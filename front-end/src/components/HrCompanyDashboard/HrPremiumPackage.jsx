import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { RxSketchLogo } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function HrPremiumPackage() {
  const [plan, setPlan] = useState("annual");

  return (
    <Container className="py-4">
      <Row>
        <Col xs={12}>
          <h5 className="text-start mb-4">
            <RxSketchLogo className="me-2" color="#1E88E5" />
            Premium Package
          </h5>
        </Col>

        <Col xs={12} md={6} lg={4}>
          <div className="d-flex flex-column h-100 px-2" style={{ fontFamily: "sans-serif" }}>
            <div className="fw-semibold mb-2" style={{ color: "#007bff" }}>
              <h5 className="text-start">Choose Your Plan</h5>
            </div>

            <div className="fw-bold fs-5 mb-3 text-start">Save up to 80%</div>

            <Stack spacing={2} direction="row" className="mb-4 flex-wrap">
              <Button
                variant={plan === "monthly" ? "contained" : "outlined"}
                className="rounded-4"
                onClick={() => setPlan("monthly")}
              >
                Monthly
              </Button>
              <Button
                variant={plan === "annual" ? "contained" : "outlined"}
                className="rounded-4"
                onClick={() => setPlan("annual")}
              >
                Annual
              </Button>
            </Stack>

            <div
              className="rounded-3 w-100"
              style={{
                border: "1px solid #007bff",
                maxWidth: "100%",
              }}
            >
              <Card.Body className="text-center p-0">
                <div
                  style={{
                    background: '#F0F6FE',
                    borderRadius: '0px 0px 100px 100px',
                    height: 140,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    paddingLeft: '1.5rem',
                  }}
                >
                  <Card.Title className="text-primary fw-bold">Basic</Card.Title>
                  <h4 className="fw-bold">₹ 1k / Monthly</h4>
                </div>

                <div className="p-3 text-start">
                  <ul className="list-unstyled mt-4">
                    <li className="mb-3 text-dark">
                      <FaCheck className="me-2" /> Unlimited Job Posting
                    </li>
                    <li className="mb-3 text-dark">
                      <FaCheck className="me-2" /> Unlimited User
                    </li>
                    <li className="mb-3 text-muted">✕ View Featured Candidates</li>
                    <li className="mb-3 text-muted">✕ Chat with candidates</li>
                    <li className="mb-2 text-muted">✕ Recruiter Performance</li>
                  </ul>
                </div>

                <div className="px-3 pb-3">
                  <button className="btn btn-primary w-100 shadow-none">Purchase Now</button>
                </div>
              </Card.Body>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
