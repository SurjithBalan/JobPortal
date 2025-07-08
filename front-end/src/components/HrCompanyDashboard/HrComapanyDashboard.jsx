import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Dashboardnavbar from "../Recruiterdashboard/Dashboardnavbar";
import Breadcrums from "../Recruiterdashboard/Breadcrums";
import "./hrcompanydashboard.css";
import { FiLogOut, FiMenu } from "react-icons/fi";
import { PiBriefcase } from "react-icons/pi";
import { RxSketchLogo } from "react-icons/rx";
import LogOut from "../Recruiterdashboard/LogOut";
import { PiKanbanLight } from "react-icons/pi";
import HrCompanyStatistics from "./HrCompanyStatistics";
import ManageRecruiter from "./ManageRecruiter";
import ManageJobs from "./ManageJobs";
import HrPremiumPackage from "./HrPremiumPackage";


export default function HrComapanyDashboard() {
      const [activeItem, setActiveItem] = useState("Dashboard");
       const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Dashboardnavbar />
      <Breadcrums />
      <Container fluid style={{ overflowX: "hidden" }}>
      {/* Toggle Header - Visible on Mobile Only */}
      <div className="d-md-none p-2 toggle-header d-flex align-items-center" style={{ backgroundColor: "#87C6F4" }}>
        <FiMenu
          size={24}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          style={{ cursor: "pointer", color: "#000" }}
        />
        <h6 className="m-0 text-dark ms-2">HR Dashboard</h6>
      </div>

      <Row>
        {/* Sidebar */}
        <Col
          xs={12}
          md={2}
          lg={2}
          className={`p-2 mb-3 mb-md-0 shadow-sm rounded sidebar-col ${isSidebarOpen ? "d-block" : "d-none"} d-md-block`}
          style={{ backgroundColor: "#87C6F4" }}
        >
          <div>
            <ul className="list-unstyled m-0">
              {[
                ["Dashboard", <FiMenu size={20} />],
                ["Manage Recruiters", <PiKanbanLight size={20} />],
                ["Manage Jobs", <PiBriefcase size={20} />],
                ["Premium Package", <RxSketchLogo size={20} />],
                ["Logout", <FiLogOut size={20} />],
              ].map(([label, icon]) => (
                <li
                  key={label}
                  className={`d-flex align-items-center rounded py-2 px-1 mb-3 sidebar-item ${
                    activeItem === label ? "active-item" : ""
                  }`}
                  onClick={() => {
                    setActiveItem(label);
                    setIsSidebarOpen(false); // Auto close on mobile
                  }}
                >
                  {icon}
                  <span className="ms-2 text-nowrap">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </Col>

        {/* Main Content */}
        <Col xs={12} md={10} lg={10} className="recruiter_right d-flex justify-content-center text-center mt-0">
          {activeItem === "Dashboard" && <HrCompanyStatistics />}
          {activeItem === "Manage Recruiters" && <ManageRecruiter />}
          {activeItem === "Manage Jobs" && <ManageJobs />}
          {activeItem === "Premium Package" && <HrPremiumPackage />}
          {activeItem === "Logout" && <LogOut />}
        </Col>
      </Row>
    </Container>
    </>
  )
}
