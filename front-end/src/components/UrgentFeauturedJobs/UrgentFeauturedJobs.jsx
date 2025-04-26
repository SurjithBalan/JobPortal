import React from "react";
import { useState } from "react";
import { Container, Row, Col,  Button, Badge } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import WiproLogo from "../../assets/logo/Wipro.png";
import CtsLogo from "../../assets/logo/CTSH.png";
import Infosys from "../../assets/logo/Infosys.png"
import Accenture from "../../assets/logo/Accenture.png"
import HCL from "../../assets/logo/HCL.png"
import { FaNewspaper } from "react-icons/fa";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";

// import InfosysLogo from "../../assets/logo/Infosys.png";
import './UrgentFeauturedJobs.css';
import { BsBorderRight } from "react-icons/bs";

const UrgentFeaturedJobs = () => {
  const jobs = [
    {
      id: 1,
      logo: WiproLogo,
      company: "Wipro",
      role: "Software Engineer",
      location: "Guindy",
      experience: "3+ Yrs",
      ctc: "1,20,000 LPA",
      applicants: 2,
      postedOn: "12 - 8 - 24",
    },
    {
      id: 2,
      logo: CtsLogo,
      company: "Cognizant",
      role: "Software Engineer",
      location: "Guindy",
      experience: "3+ Yrs",
      ctc: "1,20,000 LPA",
      applicants: 2,
      postedOn: "12 - 8 - 24",
    },
    {
      id: 3,
      logo: Infosys,
      company: "Infosys",
      role: "Software Engineer",
      location: "chennai",
      experience: "3+ Yrs",
      ctc: "1,20,000 LPA",
      applicants: 2,
      postedOn: "12 - 8 - 24"
    },
    {
      id: 4,
      logo: Accenture,
      company: "Infosys",
      role: "Software Engineer",
      location: "chennai",
      experience: "3+ Yrs",
      ctc: "1,20,000 LPA",
      applicants: 2,
      postedOn: "12 - 8 - 24",
    },
    {
      id: 5,
      logo: HCL,
      company: "Infosys",
      role: "Software Engineer",
      location: "chennai",
      experience: "3+ Yrs",
      ctc: "1,20,000 LPA",
      applicants: 2,
      postedOn: "12 - 8 - 24",
    }


  ];
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Remote', 'Full - time', 'Hybrid'];

  return (
    <Container className="urgent-jobs-section">
      <h4 className="text-center fw-bold mb-4 Heading_purple">Urgent Featured Jobs</h4>

      <div className="filter-btns text-center mb-4">
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={selectedFilter === filter ? 'primary' : 'light'}
            className={`rounded-pill px-3 py-1 me-2 filter_button ${selectedFilter === filter ? 'text-white' : ''}`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>

      <Row className="gy-3 gx-3">
        {jobs.map((job) => (
          <Col xs={12} key={job.id}>
            <div className="shadow-sm rounded-4 px-2 py-3 border-0">
              <Row className="align-items-center gx-3 gy-3">

                {/* Logo */}
                <Col xs={12} md={2} className="text-center ">
                  <img src={job.logo} alt={job.company} className="job-logo" />
                </Col>

                {/* Info */}
                <Col xs={12} md={2}>
                  <h6 className="mb-1 fw-medium company_name">{job.company}</h6>
                  <div className="text-muted fw-bold role">{job.role}</div>
                </Col>

                {/* Tags */}
                <Col xs={12} md={4} className="align-items-md-center align-items-center justify-content-center align-items-start">
                  <div className="d-flex flex-wrap gap-2">
                    <div className="d-flex gap-2 flex-wrap">
                      <Badge className="custom-badge1">Featured</Badge>
                      <Badge className="custom-badge2">Full Time</Badge>
                      <Badge className="custom-badge3">{job.applicants} Applicants</Badge>
                    </div>
                    <div className="d-flex gap-2 flex-wrap">
                      <Badge className="badge-sub-datas">
                        <IoLocationOutline size={16} className="me-1" />
                        {job.location}
                      </Badge>
                      <Badge className="badge-sub-datas">
                        <HiDocumentText size={16} className="me-1" />
                        {job.experience}
                      </Badge>
                      <Badge className="badge-sub-datas">
                        <PiCurrencyInrDuotone size={16} className="me-1" />
                        {job.ctc}
                      </Badge>
                      <Badge className="badge-sub-datas">
                        <FaNewspaper size={16} className="me-1" />
                        NP 30 days
                      </Badge>

                    </div>
                  </div>
                </Col>

                {/* CTA */}
                <Col xs={12} md={2} className="d-flex flex-column my-0 py-0 align-items-md-center align-items-center justify-content-center align-items-start text-md-end text-center">
                  <Button className="px-4 py-2 rounded-pill apply-btn" style={{ background: "#7b1fa2", border: "none", color:'white' }}>
                    Apply Now
                  </Button>
                  <div className="text-muted small mt-2">
                    Posted on {job.postedOn}
                  </div>
                </Col>
                <Col xs={12} md={2} className="d-flex flex-column my-0 py-0 align-items-md-center align-items-center justify-content-center align-items-start text-md-end text-center">
                  <div>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    <div className="d-flex gap-2 flex-wrap bookmark_icon-ufj">
                      <div className="icon_posistion-ufj">
                        <span >
                          <MdBookmarkBorder size={24} className="icon_color-ufj" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-4">
        <Button variant="secondary" className="rounded-pill px-4 py-2 View-more-btn" style={{ background: "#7b1fa2", border: "none", color: 'white' }}>
          View More
        </Button>
      </div>
    </Container>
  );
};

export default UrgentFeaturedJobs;