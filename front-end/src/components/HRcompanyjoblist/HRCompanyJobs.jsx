import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, InputGroup } from 'react-bootstrap';
import { FaBuilding, FaBriefcase } from 'react-icons/fa';
import { PiBuildingOffice } from "react-icons/pi";
import { LuArrowDownLeft, LuArrowUpRight } from 'react-icons/lu';
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { PiStudentDuotone } from "react-icons/pi";
import { BsGenderAmbiguous } from "react-icons/bs";
import { TiDocumentText } from "react-icons/ti";
import { PiCalendar } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";



import CompanysList from './CompanyList/CompanysList'
import './HRCompanyJobs.css'

const HRCompanyJobListingPage = () => {
  const dateOptions = [
    "2025-04-22",
    "2025-04-23",
    "2025-04-24",
    "2025-04-25",
    "2025-04-26",
    "2025-04-27",
    "2025-04-28"
  ];

  const [experience, setExperience] = useState(10);
  const [salary, setSalary] = useState(900);

  return (
    <Container fluid className="py-4 px-3" style={{ overflowX: 'hidden' }}>
      <Row>
        {/* Left Sidebar - Filters */}
        <Col
          xs={12}
          md={3}
          lg={3}
          className="rounded p-3 mb-3 mb-md-0 shadow-sm mx-60  HRcompany-area"
          style={{ overflowY: 'auto' }}
        >
          <h5 className="fw-bold mb-3">Work Mode</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <PiBuildingOffice className="custom-icon" />
            <Form.Select className="custom-select">
              <option>Work Mode</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </Form.Select>
          </div>

          <h5 className="fw-bold mb-3">Experience Level</h5>
          <div className="d-flex align-items-center justify-content-start mb-2 gap-5 mb-2">
            <div className="experience-box d-flex align-items-center">
              <LuArrowDownLeft className="me-2" />
              <span>0</span>
            </div>
            <div className="experience-box d-flex align-items-center">
              <LuArrowUpRight className="me-2" />
              <span>{experience}</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-2 gap-2 mb-5">
            <Form.Range
              min={0}
              max={20}
              value={experience}
              onChange={(e) => setExperience(parseInt(e.target.value))}
            />
          </div>
          <h5 className="fw-bold mt-4 mb-3">Company Type</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <PiBuildingOffice className="custom-icon" />
            <Form.Select className='custom-select' >
              <option>Company Type</option>
              <option>Startup</option>
              <option>MNC</option>
            </Form.Select>
          </div>
          <h5 className="fw-bold mb-3">Functionality</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <Form.Select>
              <option>Functionality</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>DevOps</option>
            </Form.Select>
          </div>

          <h5 className="fw-bold mb-3">Salary Range</h5>
          <div className="d-flex align-items-center justify-content-start mb-2 gap-5 mb-2">
            <div className="experience-box d-flex align-items-center">
              <PiCurrencyInrDuotone className="me-2" />
              <span>0</span>
            </div>
            <div className="experience-box d-flex align-items-center">
              <PiCurrencyInrDuotone className="me-2" />
              <span>{salary}</span>
            </div>
          </div>
          <div className="d-flex align-items-center mb-2 gap-2 mb-5">
            <Form.Range
              min={0}
              max={900}
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value))}
            />
          </div>


          <h5 className="fw-bold mb-3">Education</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <PiStudentDuotone className="custom-icon" />
            <Form.Select className='custom-select'>
              <option>Bsc</option>
              <option>BE</option>
              <option>B-Tech</option>
              <option>MCA</option>
            </Form.Select>
          </div>
          <h5 className="fw-bold mb-3">Specific Qualification</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <Form.Select>
              <option>Qualification 1</option>
              <option>Qualification 2</option>
              <option>Qualification 3</option>
              <option>Qualification 4</option>
            </Form.Select>
          </div>
          <h5 className="fw-bold mb-3">Gender</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <BsGenderAmbiguous className="custom-icon" />
            <Form.Select className='custom-select' >
              <option>Male</option>
              <option>Female</option>
              <option>Transgender</option>
            </Form.Select>
          </div>
          <h5 className="fw-bold mb-3">Notice Period</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <Form.Select>
              <option>7 Days</option>
              <option>15 Days</option>
              <option>30 Days</option>
              <option>45 Days</option>
            </Form.Select>
          </div>

          <h5 className="fw-bold mb-3"> Job Type</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <Form.Select>
              <option>Full-Time </option>
              <option>Remote</option>
              <option>Contract</option>
              <option>Freelance</option>
              <option>Internship</option>
              <option>Temporary</option>
              <option>Commission-Based</option>
            </Form.Select>
          </div>

          <h5 className="fw-bold mb-3">Career Level</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <TiDocumentText className="custom-icon" />
            <Form.Select className='custom-select'>
              <option>Internship / Student</option>
              <option>Entry Level / Fresher</option>
              <option>Junior Leve</option>
              <option>Mid Level / Associate</option>
              <option>Manager</option>
              <option>Director</option>
              <option>Consultant / Specialist</option>
            </Form.Select>
          </div>



          <h5 className="fw-bold mb-3">Date Posted</h5>
          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <PiCalendar className="custom-icon" />
            <Form.Select className='custom-select'>
              <option value="">Select Date</option>
              {dateOptions.map((date, index) => (
                <option key={index} value={date}>{date}</option>
              ))}
            </Form.Select>
          </div>

          <h5 className="fw-bold mb-3">Language</h5>

          <div className="d-flex align-items-center custom-select-wrapper mb-2 gap-2 mb-5">
            <IoLanguageOutline className="custom-icon" />
            <Form.Select className='custom-select'>

              <option>Tamil</option>
              <option>English</option>
              <option>Hindi / Specialist</option>
            </Form.Select>
          </div>
        </Col>
        {/* Right Column - Job Component */}
        <Col xs={12} md={9} lg={9} className="d-flex justify-content-center text-center mt-0">
          {/* <h5>&lt;RecommendedJobs component /&gt;</h5> */}
          <CompanysList />
        </Col>
      </Row>
    </Container>
  );
};

export default HRCompanyJobListingPage;
/////////////////////////////////////////////////////////////////

// import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
// import './HRCompanyJobs.css'

// function HRCompanyJobListingPage() {
//   return (
//     <Container fluid>
//       <Row>
//         {/* Sidebar */}
//         <Col xs={12} md={3} className="p-3 sidebar sticky-top">
//           <Form>
//             <Form.Group controlId="workMode">
//               <Form.Label>Work Mode</Form.Label>
//               <Form.Select>
//                 <option>All</option>
//                 <option>Remote</option>
//                 <option>On-site</option>
//               </Form.Select>
//             </Form.Group>
//             {/* Repeat for other filters */}
//           </Form>
//         </Col>

//         {/* Job Listings */}
//         <Col xs={12} md={9} className="p-3">
//           {[...Array(10)].map((_, idx) => (
//             <div key={idx} className="mb-3 job-card">
//               <Card.Body>
//                 <Row className="align-items-center">
//                   <Col xs={2}>
//                     <img
//                       src="https://via.placeholder.com/50"
//                       alt="logo"
//                       className="img-fluid rounded"
//                     />
//                   </Col>
//                   <Col xs={7}>
//                     <h6 className="mb-1">Software Engineer</h6>
//                     <div>
//                       <span className="badge bg-warning me-1">Urgent</span>
//                       <span className="badge bg-success">Featured</span>
//                     </div>
//                     <p className="text-muted mb-0 small">
//                       3 LPA - 5 LPA | 2-4 yrs | Remote
//                     </p>
//                   </Col>
//                   <Col xs={3} className="text-end">
//                     <Button variant="primary" size="sm">Apply Now</Button>
//                   </Col>
//                 </Row>
//               </Card.Body>
//             </div>
//           ))}

//           {/* Pagination */}
//           <div className="text-center mt-4">
//             <Button variant="outline-secondary" size="sm">1</Button>{' '}
//             <Button variant="outline-secondary" size="sm">2</Button>{' '}
//             <Button variant="outline-secondary" size="sm">3</Button>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default HRCompanyJobListingPage;