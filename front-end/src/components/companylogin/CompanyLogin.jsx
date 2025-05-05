import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { GoPerson } from "react-icons/go";
import { PiPassword } from "react-icons/pi";
import "../companylogin/companylogin.css";
import logo from "../../assets/image/skylarklogo.png";
import { Link } from "react-router-dom";
import UserNavbar from "../usernavbar/UserNavbar";
export default function CompanyLogin() {
  return (
    <>
      <UserNavbar />
      <div className="companylogin-wrapper ">
        <Container>
          <Row className="w-100 mh-100">
            {/* Left Side */}
            <Col
              md={5}
              className=" d-flex flex-column justify-content-center align-items-center left-side rounded-1"
            >
              <div className="company-login-logo">
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
              <h3 className="fw-bold mb-3" style={{ color: "#1e88e5" }}>
                HR Company Login
              </h3>

              <Form className="w-75">
                <Form.Group className="mb-3">
                  <div className="position-relative my-5">
                    <GoPerson className="input-icon-candidate-login" />
                    <Form.Control
                      type="Name"
                      placeholder="Name"
                      className="ps-5"
                    />
                  </div>
                  <div className="position-relative my-5">
                    <PiPassword className="input-icon-candidate-login" />
                    <Form.Control
                      type="Password"
                      placeholder="Password"
                      className="ps-5"
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <Link to={"/companypassword"}>
                      {" "}
                      <a href="">Forget Password?</a>
                    </Link>
                  </div>
                </Form.Group>

                <Link to={"/"}>
                  <Button
                    className="rounded-pill text-white "
                    style={{ backgroundColor: "#1e88e5" }}
                  >
                    Log In
                  </Button>
                </Link>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
