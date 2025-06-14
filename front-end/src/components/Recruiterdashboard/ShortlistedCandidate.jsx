import { useState } from "react";
import Pagination from "../herofilter/Pagination.jsx";
import herojobs from "../data/herojobs";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { FaRupeeSign, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import candidate from "../../assets/image/candidateProfileImage.png";
import { Avatar } from "@mui/material";
import { GiSandsOfTime } from "react-icons/gi";
import Modal from "react-bootstrap/Modal";
import { IoCalendarOutline } from "react-icons/io5";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
export default function ShortlistedCandidate() {
  const [jobs, setJobs] = useState(herojobs);
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // pagination
  const jobsPerPage = 5;
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
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
                            <div className="d-flex justify-content-end">
                              <Form.Select
                                aria-label="Default select example"
                                size="sm"
                                style={{ width: 140 }}
                                className=" shadow-none"
                              >
                                <option>Status</option>
                                <option value="1">Shortlisted</option>
                                <option value="2">Joined</option>
                                <option value="3">On Hold</option>
                                <option value="4">Offer Rejected</option>
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
                                className="px-1 py-0 border border-primary rounded-3 text-dark"
                              >
                                {badge}
                              </span>
                            ))}
                            <div
                              className="mx-5 rounded-2"
                              style={{
                                backgroundColor: "#A5D6A766",
                                color: "#10A441",
                              }}
                            >
                              <span className="mx-3 my-3 ">Shortlisted</span>
                            </div>
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
                        <Col>
                          {/* Button */}
                          <div className="d-flex justify-content-center ">
                            <Button
                              variant="primary"
                              className="rounded-pill px-3 shadow-none mx-3"
                            >
                              View Resume
                            </Button>
                            <Button
                              variant="primary"
                              className="rounded-pill px-4 shadow-none"
                              onClick={handleShow}
                            >
                              Schedule Interview
                            </Button>
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

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form.Group
                controlId="jobDescription"
                className="text-start mb-4 "
              >
                <Form.Label className="bold"> Name</Form.Label>
                <Form.Control
                  placeholder=""
                  rows={5}
                  style={{backgroundColor:'#F2F2F2'}}
                  className="border   shadow-none"
                />
              </Form.Group>

              <Form.Group
                controlId="jobDescription"
                className="text-start mb-4 "
              >
                <Form.Label className="bold"> Location</Form.Label>
                <Form.Control
                  placeholder=""
                   style={{backgroundColor:'#F2F2F2'}}
                  rows={5}
                  className=" shadow-none"
                />
              </Form.Group>

              <Form.Group
                controlId="jobDescription"
                className="text-start mb-4 "
              >
                <Form.Label className="bold"> Company Name</Form.Label>
                <Form.Control
                  placeholder=""
                   style={{backgroundColor:'#F2F2F2'}}
                  rows={5}
                  className=" shadow-none"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group
                controlId="jobDescription"
                className="text-start mb-4 "
              >
                <Form.Label className="bold"> Role</Form.Label>
                <Form.Control
                 style={{backgroundColor:'#F2F2F2'}}
                  placeholder=""
                  rows={5}
                  className=" shadow-none"
                />
              </Form.Group>

              <Form.Group
                controlId="jobDescription"
                className="text-start mb-4 "
              >
                <Form.Label className="bold"> Salary</Form.Label>
                <Form.Control
                 style={{backgroundColor:'#F2F2F2'}}
                  placeholder=""
                  rows={5}
                  className=" shadow-none"
                />
              </Form.Group>

              <Form.Group
                controlId="jobDescription"
                className="text-start mb-4 "
              >
                <Form.Label> Message Note</Form.Label>
                <Form.Control
                 style={{backgroundColor:'#F2F2F2'}}
                  placeholder=""
                  rows={5}
                  className=" shadow-none"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Label> Date</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    sx={{ width: "100%", backgroundColor: "#F2F2F2" }}
                    label="Basic date picker"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Col>
            <Col md={6}>
              <Form.Label>Time</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileTimePicker"]}>
                  <MobileTimePicker sx={{ width: "50%", backgroundColor: "#F2F2F2" }} defaultValue={dayjs("2022-04-17T15:30")} />
                </DemoContainer>
              </LocalizationProvider>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary " className="rounded-5" onClick={handleClose}>
            Close
          </Button>
          <Button className="rounded-5" variant="primary" onClick={handleClose}>
            Send Invite
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
