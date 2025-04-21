import React from "react";
import "../latestjobs/latestjob.css";
import logo from "../../assets/image/google.jpeg";
import { CiBookmark } from "react-icons/ci";
import { Container, Row, Col } from "react-bootstrap";
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
    <Container className=" section-latest w-auto  my-lg-4">
      <div className="header-jobs  my-4 ">
        <h1>Latest Job Listing</h1>
      </div>

      <Row className="g-4 ">
        {latestjob.map((state, index) => (
          <Col className="" key={index} md={6}>
            <div className="jobs-listing w-auto ">
              <div key={index} className="card-wrap w-auto mx-5">
                <div className=" job-contant  my-4 ">
                  <img src={logo} alt="" />
                  <div className="small-card ">
                    <div className="jobs   my-3">
                      <h6>Graphic Designer</h6>
                      <i className="p-1" style={{backgroundColor:'#E8F5E9' ,borderRadius:'50px'}}>
                        <CiBookmark color="#43A047"  />
                      </i>
                    </div>
                    <div className="body-text  ">
                      <p>Google / Posted 6d ago / Bangalore</p>
                    </div>
                  </div>
                </div>
                <div className="ctc my-2">
                  <span className="text-dark">₹10-15 LPA</span>
                  <button className="btn bg-primary text-white rounded-5">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
