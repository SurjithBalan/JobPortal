import { useState } from "react";
import Pagination from "../herofilter/Pagination.jsx";
import herojobs from "../data/herojobs";
import { Container, Row, Col, Form } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { FaRupeeSign, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import candidate from "../../assets/image/candidateProfileImage.png";
import { Avatar } from "@mui/material";
import { GiSandsOfTime } from "react-icons/gi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { BsPinAngle } from "react-icons/bs";
import { FaEye } from "react-icons/fa";
export default function AppliedCandidate() {
  const [jobs, setJobs] = useState(herojobs);
  const [currentPage, setCurrentPage] = useState(1);

  // pagination
  const jobsPerPage = 5;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Container>
      <Row>
        <Col md={12}>
          <div>
            {currentJobs.length > 0 ? (
              currentJobs.map((job) => (
                <Col xs={12} key={job.id}>
                  <div
                    className={`joblisting_card mb-4 my-4 p-4 position-relative border  ${
                      job.featured ? "border-primary" : ""
                    }`}
                  >
                    <Row>
                      <Col md={12}>
                        <div className="d-flex justify-content-end mb-3 ">
                          <div className="mx-3">
                            {" "}
                            <span>
                              <BiMessageRoundedDetail
                                fill="#1E88E5"
                                size={20}
                              />
                            </span>
                          </div>
                          <div className="mx-3">
                            {" "}
                            <span>
                              <BsPinAngle fill="#1E88E5" size={20} />
                            </span>
                          </div>
                          <div className="mx-3">
                            {" "}
                            <span>
                              <FaEye fill="#1E88E5" size={20} />
                            </span>
                          </div>
                          <div className="d-flex justify-content-end">
                            <Form.Select
                              aria-label="Default select example"
                              size="sm"
                              style={{ width: 140 }}
                              className=" shadow-none"
                            >
                              <option>Status</option>
                              <option value="1">Not shortlisted</option>
                              <option value="2">Irrelevant</option>
                              <option value="3">On Hold</option>
                              <option value="4">Under Review</option>
                            </Form.Select>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Row>
                      {/* Left: Logo */}
                      <Col
                        md={2}
                        className="d-flex align-items-start justify-content-center "
                      >
                        <div className="ribbon-container">
                          <div
                            className="border border-secondary-subtle"
                            style={{
                              width: "90px",
                              height: "90px",
                              padding: "10px",
                              objectFit: "contain",
                            }}
                          >
                            <Avatar
                              sx={{ width: 70, height: 70 }}
                              src={candidate}
                            />
                          </div>
                        </div>
                      </Col>

                      {/* Right: Info */}
                      <Col md={10}>
                        {/* Badges */}
                        <div className="d-flex flex-wrap mb-2 gap-2">
                          {job.badges.map((badge, index) => (
                            <span
                              key={index}
                              className="px-1 py-0 border border-primary rounded-3 text-secondary"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h5 className="fw-bold text-start">
                          {job.functionality}
                        </h5>
                        <p className="text-primary mb-1 text-start">
                           {job.company}
                        </p>

                        {/* Salary, Experience, Location */}
                        <div className="d-flex flex-wrap gap-4 text-muted mb-3">
                          <span>
                            <FaRupeeSign className="me-1" color="#10A441" />
                            {job.salary}
                          </span>
                          <span>
                            <FaSuitcase className="me-1" color="#6C47FE" />
                            {job.experience}
                          </span>
                          <span>
                            <FaMapMarkerAlt className="me-1 text-danger" />
                            {job.location}
                          </span>
                          <span>
                            <GiSandsOfTime className="me-1 text-dark" />
                            15Days
                          </span>
                        </div>

                        {/* Tags */}
                        <div className="d-flex flex-wrap gap-2 mb-3">
                          {job.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-success bg-opacity-10 rounded-pill border border-success-subtle text-dark"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              ))
            ) : (
              <p>No job Found </p>
            )}
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <Pagination
            jobsPerPage={jobsPerPage}
            totalJobs={jobs.length}
            paginate={paginate}
            activePage={currentPage}
          />
        </Col>
      </Row>
    </Container>
  );
}
