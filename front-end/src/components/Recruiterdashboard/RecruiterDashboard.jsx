import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dashboardnavbar from "./Dashboardnavbar";
import Breadcrums from "./Breadcrums";
import "./recruiterdashboard.css";
import ApplicationStatisticsDashboard from "./ApplicationStatisticsDashboard";
import PostJobForm from "./postJobForm";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { RiWechatLine } from "react-icons/ri";
import { GoPerson } from "react-icons/go";
import { PiSignpostBold } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { PiApplePodcastsLogo } from "react-icons/pi";
import { RiCheckDoubleFill } from "react-icons/ri";
import RecruiterProfile from "./RecruiterProfile";
import ManageJobs from "./ManageJobs";
import AppliedCandidate from "./AppliedCandidate";
import ShortlistedCandidate from "./ShortlistedCandidate";
export default function RecruiterDashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  return (
    <>
      <Dashboardnavbar />
      <Breadcrums />
      <Container fluid style={{ overflowX: "hidden" }}>
        <Row>
          {/* Left Sidebar - Filters */}
          <Col
            xs={12}
            md={2}
            lg={2}
            className="recruiter_sidebar rounded p-2 mb-3 mb-md-0 shadow-sm"
          >
            <div className="">
              <ul className="list-unstyled m-0 g-5">
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item  ${
                    activeItem === "Dashboard" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Dashboard")}
                >
                  <FiMenu size={20} className="me-2" />
                  <span>Dashboard</span>
                </li>

                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1  mb-3 sidebar-item ${
                    activeItem === "RecruiterProfile" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("RecruiterProfile")}
                >
                  <GoPerson size={20} className="me-2" />
                  <span className="text-nowrap">Recruiter Profile</span>
                </li>

                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Post a Job" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Post a Job")}
                >
                  <PiSignpostBold size={20} className="me-2" />
                  <span className="text-nowrap">Post a Job</span>
                </li>
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Applied Jobs" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Applied Jobs")}
                >
                  <MdOutlineModeEdit size={20} className="me-2" />
                  <span>Edit a Job</span>
                </li>
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Interview Schedule" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Interview Schedule")}
                >
                  <IoCalendarOutline size={20} className="me-2" />
                  <span className="text-nowrap ">Interview Schedule</span>
                </li>
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Manage Jobs" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Manage Jobs")}
                >
                  <RiWechatLine size={20} className="me-2" />
                  <span>Manage Jobs</span>
                </li>
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Applied Candidates" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Applied Candidates")}
                >
                  <PiApplePodcastsLogo size={20} className="me-2" />
                  <span className="text-nowrap small">Applied Candidates</span>
                </li>
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Shortlisted Candidates" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Shortlisted Candidates")}
                >
                  <RiCheckDoubleFill size={20} className="me-2" />
                  <span className=" ">Shortlisted Candidates</span>
                </li>
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Privacy Control" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Privacy Control")}
                >
                  <RiWechatLine size={20} className="me-2" />
                  <span>Message Inbox</span>
                </li>
                <li
                  className={`fontColor424242 fw-normal d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === "Settings" ? "active-item" : ""
                  }`}
                  onClick={() => setActiveItem("Settings")}
                >
                  <FiLogOut size={20} className="me-2" />
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          </Col>
          {/* Right Column - Job Component */}
          <Col
            xs={12}
            md={10}
            lg={10}
            className="recruiter_right d-flex justify-content-center text-center mt-0 ml-0 "
          >
            {activeItem === "Dashboard" && (<ApplicationStatisticsDashboard/>) }
            {/* Recruiter Profile page */}
              {activeItem === "RecruiterProfile" && (<RecruiterProfile/>) }
            {activeItem === "Post a Job" && (<PostJobForm />)}
            {activeItem === "Manage Jobs"&& (<ManageJobs/>)}
            {activeItem === "Applied Candidates"&&(<AppliedCandidate/>)}
            {activeItem === "Shortlisted Candidates" && (<ShortlistedCandidate/>)}
          </Col>
        </Row>
      </Container>
    </>
  );
}
