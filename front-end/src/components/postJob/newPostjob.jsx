import React from 'react';
import { useState } from 'react';
import { Navbar, Container, Button, Nav, Breadcrumb, Image, Col, Row, Form, InputGroup } from 'react-bootstrap';
import './postjobLeftside.css'
// import PostJobForm from './postJobForm'
import ApplicationStatisticsDashboard from './ApplicationStatistics'
import skylarklogo from '../../assets/logo/Skylark3.jpeg'
import profile from '../../assets/image/candidateImage.jpg'
import { FaStar } from "react-icons/fa";
import { PiSignpostBold } from "react-icons/pi";
import { MdOutlineModeEdit } from "react-icons/md";
import { TfiLocationArrow } from "react-icons/tfi";
import {
    FiGrid, FiFileText, FiHeart, FiBell, FiMessageSquare, FiLogOut, FiMenu, FiEdit, FiTarget, FiCheckCircle, FiPlus, FiMapPin, FiBriefcase, FiUser, FiPhone
} from 'react-icons/fi';
import './newpostJob.css'
import { } from 'react-icons/fi';
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaChevronDown } from 'react-icons/fa'
import { PiSubtitlesLight } from "react-icons/pi";
import { PiBuildingsBold } from "react-icons/pi";
import { TiDocumentText } from "react-icons/ti";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaList, FaIndustry, FaUserTie, FaBuilding, FaBriefcase, FaGraduationCap, FaChartLine, FaRupeeSign, FaVenusMars, FaLaptopHouse, FaUsers, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const BreadcrumbNav = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .replace('/joblist', '')
    .split('/')
    .filter((x) => x);

  const formatLabel = (str) =>
    str.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const renderBreadcrumbItems = () => {
    const items = [];

    // Static: Home
    items.push(
      <Link key="home" to="/" className="breadcrumb-link">
        Home
      </Link>
    );

    // Static: HR Company
    items.push(
      <Link key="hr" to="/joblist" className="breadcrumb-link">
       joblist
      </Link>
    );

    // Dynamic
    pathnames.forEach((value, index) => {
      const to = `/joblist/${pathnames.slice(0, index + 1).join('/')}`;
      const isLast = index === pathnames.length - 1;

      items.push(
        isLast ? (
          <span key={to} className="breadcrumb-current">
            {formatLabel(value)}
          </span>
        ) : (
          <Link key={to} to={to} className="breadcrumb-link">
            {formatLabel(value)}
          </Link>
        )
      );
    });

    // Insert bullet separators
    return items.flatMap((item, idx) => {
      if (idx === 0) return [item];
      return [
        <span key={`sep-${idx}`} className="breadcrumb-separator">•</span>,
        item,
      ];
    });
  };

  return (
    <div className="breadcrumb-wrapper mb-2 mt-0">
      <Container fluid className="d-flex align-items-center">
        <nav className="custom-breadcrumb">{renderBreadcrumbItems()}</nav>
      </Container>
    </div>
  );
};


const NavbarComponent = ({ setShowComponent }) => {
    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#1e88e5', height: 'auto' }}>
                {/* Full width container */}
                <Container fluid className="px-3 py-2 d-flex justify-content-between align-items-center flex-wrap">
                    {/* Left: Logo */}
                    <Navbar.Brand href="#">
                        <img
                            src={skylarklogo} // Replace with actual logo
                            alt="Skylark HR"
                            className="rounded"
                            height="50"
                        />
                    </Navbar.Brand>
                    {/* Menu Items */}
                    <Navbar.Collapse id="navbar-content" className="justify-content-center">
                        <Nav className="d-flex align-items-center gap-4">
                            <Nav.Link href="#" className="text-white">Home</Nav.Link>
                            <Nav.Link href="#" className="text-white">Jobs</Nav.Link>
                            <Nav.Link href="#" className="text-white">Featured <FaStar className="text-warning" /></Nav.Link>
                            <Nav.Link href="#" className="text-white">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/* Navbar Toggle for Mobile */}
                    <Navbar.Toggle aria-controls="navbar-content" className="border-0 text-white" />

                    {/* Right: Post Job, Bell, Profile */}
                    <Navbar.Collapse id="navbar-content" className="justify-content-end">
                        <Nav className="d-flex align-items-center gap-5">
                            {/* <Button
                            variant="light"
                            className="fw-semibold text-primary bg-white px-3 py-2"
                            onClick={() => setShowComponent(prev => !prev)}
                            style={{ minWidth: 'auto' }}
                        >
                            Post Job
                        </Button> */}

                            {/* Notification Bell - Hidden on small screens */}
                            <div className="d-none d-md-flex">
                                <FiBell size={35} color="#fff" style={{ cursor: 'pointer' }} />
                            </div>
                            <div
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={profile}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <span className="ms-2 d-none d-lg-inline text-white">Profile Name</span>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>            
        </>
    );
};

const RightSide = () => {
    // const skills = ['UI Designer', 'Figma', 'UX Designer'];


    const labelsWithIcons = [
        { label: 'Category', icon: <FaList /> },
        { label: 'Industry', icon: <FaIndustry /> },
        { label: 'Career Level', icon: <FaUserTie /> },
        { label: 'Company Type', icon: <FaBuilding /> },
        { label: 'Job Type', icon: <FaBriefcase /> },
        { label: 'Qualification', icon: <FaGraduationCap /> },
        { label: 'Experience', icon: <FaChartLine /> },
        { label: 'CTC Range', icon: <FaRupeeSign /> },
        { label: 'Gender', icon: <FaVenusMars /> },
        { label: 'Work Mode', icon: <FaLaptopHouse /> },
        { label: 'No. of Positions Open', icon: <FaUsers /> },
        { label: 'Phone Number', icon: <FaPhoneAlt /> },
        { label: 'Shift Timing', icon: <FaClock /> },
    ];

    return (
        <Container fluid className="p-4" style={{ backgroundColor: '#f8f8f8' }}>
            <h4 className="mb-4 text-start RightsideFontcolor">Post a Job</h4>
            <div className="text-start RightsideFontcolor mb-4 fw-semibold">
                {/* Company Name */}
                <Form.Label className=''>
                    <PiBuildingOfficeFill size={20} className="me-2" />
                    Company Name
                </Form.Label>
                <InputGroup className='inputGroupbg'>
                    <Form.Control type="text" placeholder="Enter Company Name" className='inputGroupbg' style={{ paddingLeft: '1rem' }} />
                </InputGroup>
            </div>

            {/* Location and City */}
            <Row className="mb-4">
                <Col md={6} className="mb-3 mb-md-0">
                    <div className='text-start RightsideFontcolor mb-4 fw-semibold'>
                        <Form.Label><TfiLocationArrow size={20} className="me-2" />Locality</Form.Label>
                        <Form.Select className="inputGroupbg">
                            <option value="">Enter Office Location</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="hyderabad">Hyderabad</option>
                        </Form.Select>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='text-start RightsideFontcolor mb-4 fw-semibold'>
                        <Form.Label><FiMapPin size={20} className="me-2" />City</Form.Label>
                        <Form.Select className="inputGroupbg">
                            <option value="">Enter Office Location</option>
                            <option value="chennai">Chennai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="hyderabad">Hyderabad</option>
                        </Form.Select>
                    </div>
                    <div className='text-end mt-2 '>
                        <Button className='bg-blue rounded-2 px-3 py-2 border-0' style={{ backgroundColor: '#1e88e5' }}>+ Add More Locations</Button>
                    </div>
                </Col>
            </Row>
            {/* Job Details */}
            <div className='text-start RightsideFontcolor mb-4'>
                <Form.Group className="mb-3 fw-semibold">
                    <Form.Label><PiSubtitlesLight size={20} className="me-2" />Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Job Title" className='inputGroupbg' />
                </Form.Group>
            </div>
            <div className='text-start RightsideFontcolor mb-4'>
                <Form.Group className="mb-3 fw-semibold">
                    <Form.Label><PiBuildingsBold size={20} className="me-2" />About Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter About Company" className='inputGroupbg' />
                </Form.Group>
            </div>
            <div className='text-start RightsideFontcolor mb-4'>
                <Form.Group className="mb-3 fw-semibold">
                    <Form.Label><TiDocumentText size={20} className="me-2" />Job Description</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Enter Job Description" className='inputGroupbg' />
                </Form.Group>
            </div>


            {/* Skills */}
            <Row className="mb-3">
                <Col md={6} className="mb-3 mb-md-0">
                    <Form.Group className="mb-4">
                        <div className='text-start RightsideFontcolor fw-semibold'><Form.Label><HiOutlineMenuAlt3 size={20} className="me-2 " />Skills</Form.Label></div>
                        <div className='text-start ms-0 RightsideFontcolor'>
                            <InputGroup>
                                <Form.Control type="text" placeholder="Add Minimum 6 Skills fw-semibold" style={{ paddingLeft: '1rem' }} className='inputGroupbg' />
                                <Button className='bg-blue rounded-2 px-3 py-2 border-0 fw-semibold' style={{ backgroundColor: '#1e88e5', minWidth: '50px' }}><FiPlus /></Button>
                            </InputGroup>
                        </div>

                    </Form.Group>
                </Col>
                <Col md={6} className="mb-3 mb-md-0">
                    <div className="d-flex flex-wrap RightsideFontcolor">
                        {['UI Designer', 'Figma Designer', 'UX Designer', 'Web Developer', 'Java Developer'].map((skill, i) => (
                            <span key={i} className="badge  fw-normal text-dark inputGroupbg border me-2 mb-2 p-2 rounded-pill">
                                {skill} <span role="button" className="ms-1">&times;</span>
                            </span>
                        ))}
                    </div>
                </Col>
            </Row>
            {/* Information Section */}
            <h5 className="mb-3 text-start RightsideFontcolor fw-semibold">Information</h5>
            <Row className="g-3 mb-4">
                {labelsWithIcons.map((item, index) => (
                    <Col md={6} lg={4} key={index}>
                        <Form.Group>
                            <div className="text-start RightsideFontcolor mb-4">
                                <Form.Label>
                                    {item.icon}
                                    <span className="ms-2 fw-semibold">{item.label}</span>
                                </Form.Label>
                                <Form.Select className="inputGroupbg py-3">
                                    <option value="" className='fw-semibold'>Enter {item.label}</option>
                                </Form.Select>
                            </div>
                        </Form.Group>
                    </Col>
                ))}
            </Row>

            {/* Action Buttons */}
            <Row>
                <Col xs={12}>
                    <div className="d-flex justify-content-end gap-3 flex-wrap">
                        <Button variant="outline-primary text-white rounded-pill" style={{ minWidth: 'auto', backgroundColor: '#1e88e5' }}>Save Draft</Button>
                        <Button variant="primary rounded-pill" style={{ minWidth: 'auto', backgroundColor: '#1e88e5' }}>Publish Job</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

function PostJob() {
    const [showComponent, setShowComponent] = useState(true);
    return (
        <>
            <NavbarComponent setShowComponent={setShowComponent} />
            <BreadcrumbNav/>
            <Container fluid className="py-4 px-3 m-3" style={{ overflowX: 'hidden' }}>
                <Row>
                    {/* Left Sidebar - Filters */}
                    <Col
                        xs={12}
                        md={2}
                        lg={2}
                        className="rounded p-3 mb-3 mb-md-0 shadow-sm"
                        style={{ overflowY: 'auto', backgroundColor: '#87C6F4', minHeight: '100vh' }}
                    >
                        <div>
                            <ul className="list-unstyled m-0">
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <FiMenu className="me-2" />
                                    <span>Dashboard</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <FiUser className="me-2" />
                                    <span>Recruiter Profile</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2 active-item rounded">
                                    <PiSignpostBold className="me-2" />
                                    <span>Post a Job</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <MdOutlineModeEdit className="me-2" />
                                    <span>Edit a Job</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <FiGrid className="me-2" />
                                    <span>Manage Jobs</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <FiTarget className="me-2" />
                                    <span>Applied Candidates</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <FiCheckCircle className="me-2" />
                                    <span>Shortlisted Candidates</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <FiMessageSquare className="me-2" />
                                    <span>Message Inbox</span>
                                </li>
                                <li className="sidebar-item d-flex align-items-center py-2 px-3 mb-2">
                                    <FiLogOut className="me-2" />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    {/* Right Column - Job Component */}
                    <Col xs={12} md={10} lg={10} className="d-flex justify-content-center text-center mt-0 ml-0">
                        {showComponent ? <ApplicationStatisticsDashboard /> : <PostJobForm />}
                        {/* <RightSide  /> */}
                    </Col>
                </Row>
            </Container>
        </>

    )
}

export default PostJob



