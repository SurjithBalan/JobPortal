import React from "react";
import "../companylogin/resetpassword.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { PiPassword } from "react-icons/pi";
import logo from "../../assets/image/skylarklogo.png";
import UserNavbar from "../usernavbar/UserNavbar";
import { Link } from "react-router-dom";
export default function Resetpassword() {
  return (
    <>
      <UserNavbar />
      <div className="reset-wrapper">
        <Container>
          <Row className="w-100 mh-100">
            {/* Left Side */}
            <Col
              md={5}
              className=" d-flex flex-column justify-content-center align-items-center left-side rounded-1"
            >
              <div className="reset-logo">
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
              <h3 className="fw-bold mb-1" style={{ color: "#1e88e5" }}>
                Reset Password
              </h3>

              <Form className=" form-group w-75">
                <Form.Group className="mb-3">
                  <div className="position-relative my-4">
                    <PiPassword className="input-icon-candidate-login" />
                    <Form.Control
                      type="Password"
                      placeholder="Password"
                      className="form-input ps-5"
                    />
                  </div>
                  <div className="position-relative my-4">
                    <PiPassword className="input-icon-candidate-login" />
                    <Form.Control
                      type="Confirm Password"
                      placeholder="Confirm Password"
                      className="form-input ps-5"
                    />
                  </div>
                </Form.Group>
                <div className="Login-button">
                  <Link to={"/"}>
                    <Button
                      className=" my-3 rounded-pill text-white "
                      style={{ backgroundColor: "#1e88e5" }}
                    >
                      Reset Password
                    </Button>
                  </Link>
                </div>
              </Form>
              <div className="my-4 d-flex flex-column justify-content-center align-items-center">
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
