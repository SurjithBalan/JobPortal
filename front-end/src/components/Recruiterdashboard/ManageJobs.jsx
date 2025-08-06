import "./managejobs.css";
import { useState } from "react";
import Pagination from "../herofilter/Pagination.jsx";
import herojobs from "../data/herojobs";
import {
  Container,
  Card,
  Row,
  Col,
  Badge,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { SlCalender } from "react-icons/sl";
import { FaRupeeSign, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { MdOutlineEdit } from "react-icons/md";

export default function ManageJobs() {
  const [jobs, setJobs] = useState(herojobs);
  const [currentPage, setCurrentPage] = useState(1);
  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: "#65C466",
          opacity: 1,
          border: 0,
          ...theme.applyStyles("dark", {
            backgroundColor: "#2ECA45",
          }),
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.grey[100],
        ...theme.applyStyles("dark", {
          color: theme.palette.grey[600],
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
        ...theme.applyStyles("dark", {
          opacity: 0.3,
        }),
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: "#FFA900",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
      ...theme.applyStyles("dark", {
        backgroundColor: "#39393D",
      }),
    },
  }));

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
      <Container fluid>
        <Row>
          <Col xs={12}>
            {currentJobs.length > 0 ? (
              <Row className="gx-3 gy-4">
                {currentJobs.map((job) => (
                  <Col xs={12} key={job.id}>
                    <div
                      className={`joblisting_card p-3 p-md-4 border position-relative ${
                        job.featured ? "border-primary" : ""
                      }`}
                    >
                      {/* Icons Top-Right */}
                      <div
                        className="position-absolute d-flex align-items-center edit-switch-container"
                        style={{ top: "1rem", right: "1rem", gap: "0.5rem" }}
                      >
                        <FormControlLabel
                          control={
                            <IOSSwitch
                              sx={{ m: 0 }}
                              defaultChecked
                              size="small"
                            />
                          }
                          label=""
                          sx={{ m: 0 }}
                        />
                        <MdOutlineEdit
                          size={20}
                          className="p-1 rounded-circle border"
                          style={{
                            color: "#1e88e5",
                            backgroundColor: "#e9f3fc",
                            width: "28px",
                            height: "28px",
                          }}
                        />
                      </div>

                      <Row>
                        {/* Logo */}
                        <Col
                          xs={12}
                          md={2}
                          className="d-flex justify-content-center mb-3 mb-md-0"
                        >
                          <div className="ribbon-container text-center">
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="img-fluid border border-secondary-subtle"
                              style={{
                                width: "70px",
                                height: "70px",
                                padding: "10px",
                                objectFit: "contain",
                              }}
                            />
                            {job.featured && (
                              <div className="ribbon">Featured</div>
                            )}
                          </div>
                        </Col>

                        {/* Job Info */}
                        <Col xs={12} md={10}>
                          {/* Badges */}
                          <div className="d-flex flex-wrap mb-2 gap-2">
                            {job.badges.map((badge, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 border border-primary rounded-3 text-secondary fs-8"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>

                          {/* Title */}
                          <h6 className="fw-bold text-start fs-6 fs-md-5 mb-1">
                            {job.functionality}
                          </h6>
                          <p className="text-primary mb-2 text-start fs-7">
                            @ {job.company}
                          </p>

                          {/* Salary, Exp, Location */}
                          <div className="d-flex flex-wrap gap-3 text-muted mb-3 fs-8">
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
                          </div>

                          {/* Tags */}
                          <div className="d-flex flex-wrap gap-2 mb-3">
                            {job.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-success bg-opacity-10 rounded-pill border border-success-subtle text-dark fs-8"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Meta Info */}
                          <div className="d-flex flex-wrap gap-2 mb-4 text-muted fs-8">
                            <span className="bg-light px-2 py-1 rounded d-flex align-items-center">
                              <SlCalender className="me-2" />
                              {job.datePosted}
                            </span>
                            <span className="bg-light px-2 py-1 rounded">
                              {job.positions}
                            </span>
                            <span className="bg-light px-2 py-1 rounded">
                              Male / Female
                            </span>
                            <span className="bg-light px-2 py-1 rounded">
                              IT Graduates
                            </span>
                            <span className="bg-light fs-8 px-2 py-1 rounded">
                              Day Shift
                            </span>
                          </div>

                          {/* Button */}
                          <div className="d-flex justify-content-center justify-content-md-start">
                            <Button
                              variant="primary"
                              className="rounded-pill px-4 py-1 px-3 fs-8"
                            >
                              View Job
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                ))}
              </Row>
            ) : (
              <p className="text-center fs-6 mt-5">No job found</p>
            )}
          </Col>
        </Row>

        {/* Pagination */}
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-4">
            <Pagination
              jobsPerPage={jobsPerPage}
              totalJobs={jobs.length}
              paginate={paginate}
              activePage={currentPage}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
