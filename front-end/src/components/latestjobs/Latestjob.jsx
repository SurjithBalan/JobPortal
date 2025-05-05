import React from "react";
import "../latestjobs/latestjob.css";
import logo from "../../assets/image/google.jpeg";
import { CiBookmark } from "react-icons/ci";
import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
const latestjob = [
  {
    id: 1,
    role: "Graphic Designer",
    company: "google",
    location: "Bangalore",
    img: logo,
  },
  {
    id: 2,
    role: "Graphic Designer",
    company: "google",
    location: "Bangalore",
    img: logo,
  },
  {
    id: 3,
    role: "Graphic Designer",
    company: "google",
    location: "Bangalore",
    img: logo,
  },
  {
    id: 4,
    role: "Graphic Designer",
    company: "google",
    location: "Bangalore",
    img: logo,
  },
];

export default function Latestjob() {
  return (
    <Container className="mr-0">
      <div className="header-jobs  my-3  header-jobs my-3 d-flex justify-content-center align-items-center">
        <h1>Latest Job Listing</h1>
      </div>
      <Row className="g-2 ms-3">
        {latestjob.map((state, index) => (
          <Col key={index} md={6}>
            <div className="jobs-listing w-auto ">
              <div key={index} className="card-wrap  mx-5">
                <div className="job-contant  my-3" style={{ width: '85%' }}>
                  <img src={logo} alt="" />
                  <div className="small-card ">
                    <div className="jobs   my-3">
                      <h6 style={{ color: '#424242' }}>Graphic Designer</h6>
                      <div className="bookmark_icon_position">
                        <i
                          className="d-flex align-items-center justify-content-center"
                          style={{
                            backgroundColor: '#E8F5E9',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                          }}
                        >
                          <CiBookmark color="#43A047" />
                        </i>
                      </div>
                    </div>
                    <div className="body-text  ">
                      <p style={{ color: '#424242' }}>Google / Posted 6d ago / Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="ctc  d-flex justify-content-between align-items-center mb-2">
                  <div className="lpa-position"> <span className="fw-bold " style={{ color: '#424242' }}>₹10-15 LPA</span></div>
                  <Button className="mb-2 text-white fs-6 min-w-0 rounded-pill px-4 viewButton_position" style={{ backgroundColor: '#1e88e5', minWidth: 'auto' }} >View More</Button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
