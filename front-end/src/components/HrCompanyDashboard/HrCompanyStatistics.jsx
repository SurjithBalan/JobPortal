import React from "react";
import { MdSupervisorAccount } from "react-icons/md";
import { SiGoogleforms } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDangerous } from "react-icons/md";
import { PiSquaresFourLight } from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiFillSignal } from "react-icons/ai";
import { LineChart } from "@mui/x-charts/LineChart";
import { Container, Row, Col } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./hrcompanystatistics.css";
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
export default function HrCompanyStatistics() {
  const summary = [
    {
      count: 22,
      label: "Registered Recruiters",
      variant: "primary",
      icon: <MdSupervisorAccount size={24} />,
      bg: "#F8E3BB", // Light purple tint
      iconColor: "#EAB308",
      background: "#E7ECEF",
    },
    {
      count: 645,
      label: "Job Posted",
      variant: "danger",
      icon: <SiGoogleforms size={24} />,
      bg: "#DBEAFE", // Light red tint
      iconColor: "#3B82F6",
      background: "#fff",
    },
    {
      count: 2,
      label: "Pending Approvals",
      variant: "success",
      icon: <FaRegEdit size={24} />,
      bg: "#F3E8FF", // Light yellow tint
      iconColor: "#AD5EF7",
      background: "#E7ECEF",
    },
    {
      count: 3,
      label: "Shortlisted",
      variant: "warning",
      icon: <FaRegStar size={24} />,
      bg: "#D2F4EE", // Light green tint
      iconColor: "#249782",
      background: "#fff",
    },
    {
      count: 645,
      label: "Rejected",
      variant: "danger",
      icon: <MdOutlineDangerous size={24} />,
      bg: "#FEE2E2", // Light red tint
      iconColor: "#F15757",
      background: "#E7ECEF",
    },
    {
      count: 645,
      label: "Joined",
      variant: "danger",
      icon: <IoMdCheckmarkCircleOutline size={24} />,
      bg: "#D2F4EE", // Light red tint
      iconColor: "#249782",
      background: "#fff",
    },
  ];
  return (
    <Container fluid style={{ backgroundColor: "light" }}>
      <div className="d-flex justify-content-start my-4">
        <span className=" ">
          {" "}
          <PiSquaresFourLight size={27} color="#1E88E5" />
        </span>
        <h4 className="mx-2">HR Company Dashboard</h4>
      </div>
      <Row className="mb-3">
        {summary.map((item, idx) => (
          <Col xs={6} md={2} key={idx} className="my-4">
            <div
              className="d-flex align-items-center flex-column  rounded shadow p-1  g-3 summary-card "
              style={{ backgroundColor: item.background, height: "110%" }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded-5 mt-2 icon-wrapper"
                style={{
                  width: "35px",
                  height: "35px",
                  backgroundColor: item.bg,
                  color: item.iconColor,
                }}
              >
                {item.icon}
              </div>
              <div className="text-center ">
                <p className="my-2 small bold ">{item.label}</p>
                <h5 className="mt-3 text-center">{item.count}</h5>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <Row>
        <div className="d-flex justify-content-start my-4">
          <span className=" ">
            {" "}
            <AiFillSignal size={27} color="#1E88E5" />
          </span>
          <h4 className="mx-2">Analytics & Growth</h4>
        </div>
        <Col xs={12} md={6} >
          <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
              {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
              },
            ]}
            height={300}
          />
        </Col>
      </Row>

      <Row>
        <div className="d-flex justify-content-start mt-5 mb-4">
          <h4 className="mx-2">Recently Posted Jobs</h4>
        </div>

        {jobs.map((job, idx) => (
          <Col xs={12} md={3}>
            <div key={idx} className=" mb-2 recent-job-card">
              <div className="  rounded-4 shadow p-3">
                <h6 className="fw-bold text-start">{job.title}</h6>
                <p className="text-capitalize text-muted fw-medium mb-2 text-start">
                  {job.name}
                </p>
                <p className="mb-1 text-muted">
                  <FaMapMarkerAlt className="me-1 text-danger" />
                  {job.location}{" "}
                  <span className="badge bg-secondary ms-2">{job.type}</span>
                </p>
                <p className="text-muted small">Posted {job.postedAgo}</p>
                <div className="d-flex align-items-center mb-3">
                  <span className="badge bg-success me-2">{job.status}</span>
                  <span style={{ fontSize: "14px" }}>
                    {" "}
                    <FaUsers className="me-1" /> {job.candidates} Candidates
                  </span>
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
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
