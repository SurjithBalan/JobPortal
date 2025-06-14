import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Dropdown,
  Table,
  Badge,
} from "react-bootstrap";
import {
  FaPlus,
  FaDownload,
  FaEnvelope,
  FaUndo,
  FaTimes,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
import Divider from '@mui/material/Divider';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FiBriefcase, FiEdit, FiStar, FiBookmark } from "react-icons/fi";
import "./ApplicationStatisticsDashboard.css";
import profile from "../../assets/image/candidateImage.jpg";
import { Avatar } from "@mui/material";
import { CiLocationOn } from "react-icons/ci";
import { SiGoogleforms } from "react-icons/si";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlinePendingActions } from "react-icons/md";
const chartData = {
  labels: ["Apr 30", "May 1", "May 2", "May 3", "May 4", "May 5"],
  datasets: [
    {
      label: "Page Views",
      data: [4, 2, 5, 6, 9, 3],
      borderColor: "#0d6efd",
      backgroundColor: "rgba(13, 110, 253, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 1 },
    },
  },
};

const ApplicationStatisticsDashboard = () => {
  const summary = [
    {
      count: 22,
      label: "Posted Jobs",
      variant: "primary",
      icon: <FiBriefcase size={24} />,
      bg: "rgba(63, 81, 181, 0.15)", // Light purple tint
      iconColor: "#3f51b5",
    },
    {
      count: 645,
      label: "Profiles Approvals",
      variant: "danger",
      icon: <SiGoogleforms size={24} />,
      bg: "#FB85001A", // Light red tint
      iconColor: "#FB8500",
    },
     {
      count: 2,
      label: "Shortlisted",
      variant: "success",
      icon: < IoCheckmarkDoneSharp size={24} />,
      bg: "#43A0471A", // Light yellow tint
      iconColor: "#43A047",
    },
    {
      count: 3,
      label: "Profiles on Process",
      variant: "warning",
      icon: <FaRegEdit  size={30} />,
      bg: "#FFD4001A", // Light green tint
      iconColor: "#FFD400",
    },
   
    
  ];

  const notifications = [
    "A meeting is cancelled on your job Social media Marketing by candidate.",
    "A meeting is cancelled on your job Social media Marketing by candidate.",
    "A meeting is cancelled on your job Social media Marketing by candidate.",
    "Saranya is looking for a job change, UI/UX designer, Chennai. View Profile",
  ];

  const applicants = [
    {
      name: "Candidate",
      role: "Social Media Marketing",
      location: "United States",
      status: "Approved",
      date: "May 5, 2025",
    },

    {
      name: "Candidate",
      role: "Social Media Marketing",
      location: "United States",
      status: "Approved",
      date: "May 5, 2025",
    },
    {
      name: "Candidate",
      role: "Social Media Marketing",
      location: "United States",
      status: "Approved",
      date: "May 5, 2025",
    },
    {
      name: "Candidate",
      role: "Social Media Marketing",
      location: "United States",
      status: "Approved",
      date: "May 5, 2025",
    },
  ];

  return (
    <Container fluid className="p-4 ">
      <div className="d-flex justify-content-start my-3">
        <span className="application_statistics rounded "></span>
        <h4 className="mx-2">Application Statistics</h4>
      </div>

      {/* Summary divs */}
      <Row className="mb-4">
        {summary.map((item, idx) => (
          <Col xs={6} md={3} key={idx} className="mb-3">
            <div className="d-flex align-items-center p-2 rounded shadow-sm bg-white gap-3 h-100">
              <div
                className="d-flex align-items-center justify-content-center rounded "
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: item.bg,
                  color: item.iconColor,
                }}
              >
                {item.icon}
              </div>
              <div className="text-start ">
                <h5 className="mb-1 text-end">{item.count}</h5>
                <p className="mb-0 small bold ">{item.label}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Page Views & Notifications */}
      <Row className="mb-4">
        <Col md={7}>
          <div className="shadow-sm border-0 mb-3">
            <div>
              <div className="d-flex justify-content-start bold "><h6>Job Views</h6></div>
              {/* Placeholder for chart */}
              <Line data={chartData} options={chartOptions} height={200} />
              <Row className="my-4 ">
                <Col xs={6} className="mb-4">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      className="w-100 text-start"
                    >
                      Jobs
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Jobs</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col xs={6}>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="light"
                      className="w-100 text-start"
                    >
                      Number Days
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Number Days</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
            </div>
          </div>
        </Col>

        <Col md={5}>
          <div className="bg-white p-3 rounded shadow-sm">
            <h6 className="fw-bold mb-3">Notifications</h6>
            {notifications.map((note, idx) => (
              <div key={idx} className="d-flex align-items-start gap-3 mb-3">
                {/* Icon */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                  style={{
                    width: "36px",
                    height: "36px",
                    backgroundColor: "rgba(76, 175, 80, 0.15)",
                  }}
                >
                  <IoPersonCircleOutline size={18} color="#4caf50" />
                </div>

                {/* Text content - aligned left */}
                <div
                  className="flex-grow-1"
                  style={{ fontSize: "0.95rem", lineHeight: "1.4" }}
                >
                  {note.includes("Social media Marketing") ? (
                    <div><p className="text-start px-4 mb-0">

                      A meeting is cancelled on your job
                      <strong> Social media Marketing </strong>
                      by <strong>candidate.</strong>
                    </p>
                     <p className="text-muted text-start ms-4">1 Day ago</p>
                    </div>
                  ) : note.includes("View Profile") ? (
                    <>
                      Saranya is looking for a job change, UI/UX designer,
                      Chennai.{" "}
                      <a
                        href="#"
                        style={{ color: "#0d6efd", textDecoration: "none" }}
                      >
                        View Profile
                      </a>
                       <p className="text-muted text-start ms-3">1 Day ago</p>
                    </>
                  ) : (
                    <>{note}</>
                  )}
               
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Recent Applicants */}
      {/* <Row className="mb-4"> </Row> */}
      <div className="bg-white p-4 rounded shadow-sm">
        <div className="d-flex justify-content-start"><h5 className="fw-bold mb-4">Recent Applicants</h5></div>
         <Divider className="mb-5" />
        {/* Header Row */}
        <Row className="text-muted fw-semibold mb-3 d-none d-md-flex">
          <Col xs={12} md={4}>
            Candidates
          </Col>
          <Col xs={12} md={2}>
            Location
          </Col>
          <Col xs={12} md={2}>
           Applied For
          </Col>
          <Col xs={12} md={4}>
            Applied Date
          </Col>
        </Row>

        {/* Applicant Rows */}
        {applicants.map((applicant, idx) => (
          <Row
            key={idx}
            className="align-items-center mb-4 gy-3 flex-column flex-md-row"
          >
            {/* Candidate Info */}
            <Col xs={12} md={4}>
              <div className="d-flex align-items-center  gap-3">
                <div>
                  <Avatar
                    alt="Candidate"
                    src={profile}
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                </div>
                <div className="">
                  <div className="fw-bold d-flex justify-content-start">
                    {applicant.name}
                  </div>
                  <div className="text-primary small d-flex justify-content-start">
                    {applicant.role}
                  </div>
                 
                </div>
              </div>
            </Col>

            {/* Status */}
            <Col xs={12} md={2}>
               <div className="text-muted small d-flex justify-content-start">
                    <i className="bi bi-geo-alt-fill me-1">
                      <CiLocationOn fill="red" />
                    </i>
                    {applicant.location}
                  </div>
            </Col>

            {/* Date */}
            <Col xs={12} md={2} className="text-muted">
              <Badge bg="primary" className="px-3 py-2 rounded">
                {applicant.role}
              </Badge>
            </Col>

            {/* Action */}
            <Col xs={12} md={4}>
              <div className="d-flex gap-2 flex-nowrap justify-content-center">
                <p className="text-muted">{applicant.date}</p>
              </div>
            </Col>
          </Row>
        ))}
      </div>
    </Container>
  );
};

export default ApplicationStatisticsDashboard;
