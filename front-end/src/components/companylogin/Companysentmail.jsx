import React from "react";
import "../companylogin/companysentmail.css";
import { Container, Row, Col, Button, } from "react-bootstrap";
import logo from "../../assets/image/skylarklogo.png";
import UserNavbar from "../usernavbar/UserNavbar";
import { Link } from "react-router-dom";
export default function Companysentmail() {
  return (
    <>
      <UserNavbar/>
      <div className="sentmail-wrapper">
        <Container >
          <Row className="w-100 mh-100">
            {/* Left Side */}
            <Col
              md={5}
              className=" d-flex flex-column justify-content-center align-items-center left-side rounded-1"
            >
              <div className="sentmail-logo">
                <img src={logo} alt="" />
              </div>
              <h2 className="text-white fw-bold mt-4">Welcome Back!</h2>
              <p className="text-white">To Hire the best Candidates</p>
              <Button
                variant="outline-success"
                className="rounded-pill px-5 border border-1 border-white text-white"
                style={{ backgroundColor: "#1e88e5" }}
              >
                Register
              </Button>
            </Col>

            {/* Right Side */}
            <Col
              md={7}
              className="d-flex flex-column justify-content-center align-items-center right-side"
            >
              <h3 className=" mb-5 fw-bold mb-3" style={{ color: "#1e88e5" }}>
                Forget Password
              </h3>

              <div className="my-4 d-flex flex-column justify-content-center align-items-center">
                <p className="">
                  We’ve sent a link to <b> xyz@gmail.com </b>
                </p>
                <p className=""> br to reset your
                password.</p>
              </div>


              <div className="my-5 d-flex flex-column justify-content-center align-items-center">
                <p>Back to <Link to={'/resetpassword'}><a href="">Log-in</a></Link></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
