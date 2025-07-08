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
import LogOut from "./LogOut";
import RecuiterMessageinbox from "./RecuiterMessageinbox";
import JobEditForm from "./JobEditForm";
export default function RecruiterDashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");
   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Toggle sidebar
  return (
    <>
      <Dashboardnavbar />
      <Breadcrums />
     <Container fluid style={{ overflowX: "hidden" }}>
      {/* Toggle Header - Left Aligned */}
      <div className="d-md-none p-2 toggle-header rounded-2 d-flex justify-content-between align-items-center">
        <FiMenu
          size={24}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{ cursor: "pointer", color: "#000" }}
        />
        <h6 className="m-0 text-dark ms-2"> Dashboard</h6>
      </div>

      <Row>
        {/* Sidebar */}
        <Col
          xs={12}
          md={2}
          lg={2}
          className={`recruiter_sidebar rounded p-2 mb-3 mb-md-0 shadow-sm  ${isSidebarOpen ? 'd-block' : 'd-none'} d-md-block`} style={{backgroundColor:"#87C6F4"}}
        >
          <ul className="list-unstyled m-0">
            {[
              ["Dashboard", <FiMenu size={20} />],
              ["RecruiterProfile", <GoPerson size={20} />],
              ["Post a Job", <PiSignpostBold size={20} />],
              ["Edit a Job", <MdOutlineModeEdit size={20} />],
              ["Interview Schedule", <IoCalendarOutline size={20} />],
              ["Manage Jobs", <RiWechatLine size={20} />],
              ["Applied Candidates", <PiApplePodcastsLogo size={20} />],
              ["Shortlisted Candidates", <RiCheckDoubleFill size={20} />],
              ["Message Inbox", <RiWechatLine size={20} />],
              ["Logout", <FiLogOut size={20} />],
            ].map(([label, icon]) => (
              <li
                key={label}
                className={`sidebar-item py-2 px-1 mb-3 d-flex align-items-center rounded ${
                  activeItem === label ? "active-item" : ""
                }`}
                onClick={() => {
                  setActiveItem(label);
                  setIsSidebarOpen(false); // Auto-close on mobile
                }}
              >
                {icon}
                <span className="ms-2 text-nowrap">{label}</span>
              </li>
            ))}
          </ul>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={10} lg={10} className="recruiter_right d-flex justify-content-center text-center mt-0">
          {activeItem === "Dashboard" && <ApplicationStatisticsDashboard />}
          {activeItem === "RecruiterProfile" && <RecruiterProfile />}
          {activeItem === "Post a Job" && <PostJobForm />}
          {activeItem === "Edit a Job" && <JobEditForm />}
          {/* {activeItem === "Interview Schedule" && <InterviewSchedule />} */}
          {activeItem === "Manage Jobs" && <ManageJobs />}
          {activeItem === "Applied Candidates" && <AppliedCandidate />}
          {activeItem === "Shortlisted Candidates" && <ShortlistedCandidate />}
          {activeItem === "Message Inbox" && <RecuiterMessageinbox />}
          {activeItem === "Logout" && <LogOut />}
        </Col>
      </Row>
    </Container>
    </>
  );
}
