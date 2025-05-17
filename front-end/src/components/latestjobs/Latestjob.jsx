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
    <>
      <Container className="px-2 my-4">
        <div className="header-jobs  my-3  header-jobs my-3 d-flex justify-content-center align-items-center">
          <h1>Latest Job Listing</h1>
        </div>
        <Row className="g-4" >
          {latestjob.map((job) => (
            <Col key={job.id} xs={12} sm={12} md={6} lg={6} xl={6}>
              <div className="job-card py-3 g-2 ">
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


                <div className="d-flex justify-content-between align-items-center pt-2 flex-wrap">
                  <div className="lpa-position"> <span className="fw-bold " style={{ color: '#424242' }}>₹10-15 LPA</span></div>
                  <Button className="mb-2 text-white fs-6 min-w-0 rounded-pill px-4 viewButton_position" style={{ backgroundColor: '#1e88e5', minWidth: 'auto' }} >View More</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
