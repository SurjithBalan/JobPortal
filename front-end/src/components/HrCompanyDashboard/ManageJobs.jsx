import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { PiBriefcase } from "react-icons/pi";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {
  FaMapMarkerAlt,
  FaUsers,
  FaEdit,
  FaPause,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

const jobs = [
  {
    title: "UI/UX Designer",
    name: "Priya Sharma",
    location: "Chennai",
    type: "Full Time",
    postedAgo: "3 days ago",
    status: "Active",
    candidates: 28,
  },
  {
    title: "Java Full Stack",
    name: "Sneha",
    location: "Madurai",
    type: "Full Time",
    postedAgo: "3 days ago",
    status: "Active",
    candidates: 28,
  },
  {
    title: "AI Developer",
    name: "Ezhalin",
    location: "Covai",
    type: "Full Time",
    postedAgo: "3 days ago",
    status: "Active",
    candidates: 28,
  },
  {
    title: "UI/UX Designer",
    name: "Tharun",
    location: "Bengaluru",
    type: "Full Time",
    postedAgo: "3 days ago",
    status: "Active",
    candidates: 28,
  },
];

export default function ManageJobs() {
  return (
    <Container className="py-3">
      <Row className="align-items-center justify-content-between my-3">
        <Col xs={12} md={6}>
          <h5 className="mb-3 text-start d-flex align-items-center">
            <PiBriefcase size={25} color="#1E88E5" className="me-2" />
            Manage Jobs
          </h5>
        </Col>
        <Col xs={12} md={6} className="d-flex flex-wrap gap-2 justify-content-md-end">
          <Dropdown>
            <Dropdown.Toggle
              as="button"
              bsPrefix="btn"
              className="btn btn-light border rounded w-100 d-flex justify-content-between align-items-center"
            >
              <span>Status</span>
              <FaChevronDown size={12} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item style={{ color: "#43a047" }}>Available</Dropdown.Item>
              <Dropdown.Item style={{ color: "#e53935" }}>Offline</Dropdown.Item>
              <Dropdown.Item style={{ color: "#f0c909" }}>Busy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle
              as="button"
              bsPrefix="btn"
              className="btn btn-light border rounded w-100 d-flex justify-content-between align-items-center"
            >
              <span>Last 2 months</span>
              <FaChevronDown size={12} />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Last 2 months</Dropdown.Item>
              <Dropdown.Item>Last 4 months</Dropdown.Item>
              <Dropdown.Item>Last 6 months</Dropdown.Item>
              <Dropdown.Item>Last 8 months</Dropdown.Item>
              <Dropdown.Item>Last 5 Years</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <Row>
        {jobs.map((job, idx) => (
          <Col xs={12} sm={6} lg={4} xl={3} key={idx} className="mb-4">
            <div className="rounded-4 shadow p-3 h-100 d-flex flex-column justify-content-between">
              <div>
                <h6 className="fw-bold text-start">{job.title}</h6>
                <p className="text-capitalize text-muted mb-2 text-start">{job.name}</p>
                <p className="mb-1 text-muted text-start">
                  <FaMapMarkerAlt className="me-1 text-danger" />
                  {job.location}{" "}
                  <span className="badge bg-secondary ms-2">{job.type}</span>
                </p>
                <p className="text-muted text-start">Posted {job.postedAgo}</p>
                <div className="d-flex align-items-center mb-3 text-start">
                  <span className="badge bg-success me-2">{job.status}</span>
                  <span style={{ fontSize: "14px" }}>
                    <FaUsers className="me-1" /> {job.candidates} Candidates
                  </span>
                </div>
              </div>

               <div className="d-flex flex-wrap justify-content-evenly g-2 action-buttons">
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Edit</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <button
                        className="bg-white border border-white"
                        style={{ pointerEvents: "none" }}
                      >
                        <FaEdit color="#1E88E5" size={15} />
                      </button>
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">On Hold</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <button
                        className="bg-white border border-white"
                        style={{ pointerEvents: "none" }}
                      >
                        <FaPause color="#FFA900" />
                      </button>
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Close</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <button
                        className="bg-white border border-white"
                        style={{ pointerEvents: "none" }}
                      >
                        <FaTimes color="#E53935" />
                      </button>
                    </span>
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={<Tooltip id="tooltip-disabled">Active</Tooltip>}
                  >
                    <span className="d-inline-block">
                      <button
                        className="bg-white border border-white"
                        style={{ pointerEvents: "none" }}
                      >
                        <FaCheck color="#10A441" />
                      </button>
                    </span>
                  </OverlayTrigger>
                </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
