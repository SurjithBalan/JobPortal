import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaEnvelope } from "react-icons/fa";
import "../companylogin/companypassword.css";
import logo from "../../assets/image/skylarklogo.png";
import UserNavbar from "../usernavbar/UserNavbar";
import { Link } from "react-router-dom";

export default function Companypassword() {
  return (
    <>
      <UserNavbar />
      <div className="company-password">
        <Container>
          <Row className="w-100 mh-100">
            {/* Left Side */}
            <Col
              md={5}
              className="d-flex flex-column justify-content-center align-items-center left-side rounded-1"
            >
              <div className="company-password-logo">
                <img src={logo} alt="" />
              </div>
              <h2 className="text-white fw-bold mt-4">Welcome Back!</h2>
              <p className="text-white">To Hire the best Candidates</p>
              <Link to={"/company-register-form"}>
                <Button
                  variant="outline-success"
                  className="rounded-pill px-5 border border-1 border-white text-white"
                  style={{ backgroundColor: "#1e88e5" }}
                >
                  Register
                </Button>
              </Link>
            </Col>

            {/* Right Side */}
            <Col
              md={7}
              className="d-flex flex-column justify-content-center align-items-center right-side"
            >
              <h3 className="fw-bold my-2" style={{ color: "#1e88e5" }}>
                Forget Password
              </h3>
              <div className="d-flex gap-3 mb-2 social-icons"></div>
              <p className="my-3 small text-muted">
                Please enter your email to reset password
              </p>
              <Form className="w-75">
                <Form.Group className="mb-3">
                  <div className="position-relative">
                    <FaEnvelope className="input-icon-candidate-login" />
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="ps-5"
                    />
                  </div>
                </Form.Group>

                <Link to={"/companysentmail"}>
                  <Button
                    className=" my-5 rounded-pill text-white "
                    style={{ backgroundColor: "#1e88e5" }}
                  >
                    Reset Password
                  </Button>
                </Link>
              </Form>
              <div className="my-1 d-flex flex-column justify-content-center align-items-center">
                <p>
                  Back to{" "}
                  <Link to={"/companylogin"}>
                    <a href="">Log-in</a>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
