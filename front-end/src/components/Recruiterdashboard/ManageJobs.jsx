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
                      {/* Edit Icon */}
                      <div className="position-absolute top-0 end-0  p-3 mx-4">
                        <div>
                          <FormControlLabel
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                        </div>
                        <div className="manage-edit">
                          <MdOutlineEdit
                            size={25}
                            className=" p-1 rounded-circle border"
                            style={{
                              transform: "translate(50%, -50%)",
                              color: "#1e88e5",
                              backgroundColor: "#e9f3fc",
                            }}
                          />
                        </div>
                      </div>

                      <Row>
                        {/* Left: Logo */}
                        <Col
                          md={2}
                          className="d-flex align-items-start justify-content-center "
                        >
                          <div className="ribbon-container">
                            <img
                              src={job.logo}
                              alt={job.company}
                              className="img-fluid border border-secondary-subtle"
                              style={{
                                width: "90px",
                                height: "90px",
                                padding: "15px",
                                objectFit: "contain",
                              }}
                            />
                            {job.featured && (
                              <div className="ribbon">Featured</div>
                            )}
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
                            @ {job.company}
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

                          {/* Meta Info */}
                          <div className="d-flex flex-wrap gap-3 mb-4">
                            <span className="bg-light px-1 py-1 rounded text-muted d-flex align-items-center">
                              <SlCalender className="me-2" />
                              {job.datePosted}
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              {job.positions}
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              Male / Female
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              IT Graduates
                            </span>
                            <span className="bg-light px-1 py-1 rounded text-muted">
                              Day Shift
                            </span>
                          </div>
                        </Col>
                        <Col>
                          {/* Button */}
                          <div className="d-flex justify-content-center">
                            <Button
                              variant="primary"
                              className="rounded-pill px-4"
                            >
                              View Job
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
    </>
  );
}
