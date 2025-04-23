// import React from 'react';
// import { Container, Row, Col, Card, Badge, Button } from 'react-bootstrap';
// import { CiLocationOn } from 'react-icons/ci';
// import { FaStar } from 'react-icons/fa';
// import { BsClock } from 'react-icons/bs';
// import Wipro from "../../../assets/logo/Wipro.png";
// import CtsLogo from "../../../assets/logo/CTSH.png";
// import Infosys from "../../../assets/logo/Infosys.png"
// import Accenture from "../../../assets/logo/Accenture.png"
// import HCL from "../../../assets/logo/HCL.png"
// import { MdBookmarkBorder } from "react-icons/md";
// import './CompanyList.css';
// const jobList = [
//     {
//         id: 1,
//         company: 'Wipro',
//         logo: Wipro,
//         role: 'Software Engineer',
//         tags: ['Urgent', 'Recommend'],
//         skills: 'Java Full Stack',
//         ctc: '₹ 1,20,000 LPA',
//         experience: '3+ Yrs',
//         noticePeriod: '15 days',
//         location: 'Guindy, Tamil Nadu, India',
//         posted: '2 days ago',
//         bgColor: '#e6f3ff',
//     },
//     {
//         id: 2,
//         company: 'Cognizant',
//         logo: CtsLogo,
//         role: 'Software Engineer',
//         tags: ['Recommend'],
//         skills: 'Java Full Stack',
//         ctc: '₹ 1,20,000 LPA',
//         experience: '3+ Yrs',
//         noticePeriod: '15 days',
//         location: 'Guindy, Tamil Nadu, India',
//         posted: '2 days ago',
//         bgColor: '#fef5df',
//     },
//     {
//         id: 3,
//         company: 'Accenture',
//         logo: Accenture,
//         role: 'Software Engineer',
//         tags: ['Recommend'],
//         skills: 'Java Full Stack',
//         ctc: '₹ 1,20,000 LPA',
//         experience: '3+ Yrs',
//         noticePeriod: '15 days',
//         location: 'Guindy, Tamil Nadu, India',
//         posted: '2 days ago',
//         bgColor: '#f1ecff',
//     },
//     {
//         id: 4,
//         company: 'Infosys',
//         logo: Infosys,
//         role: 'Software Engineer',
//         tags: ['Recommend'],
//         skills: 'Java Full Stack',
//         ctc: '₹ 1,20,000 LPA',
//         experience: '3+ Yrs',
//         noticePeriod: '15 days',
//         location: 'Guindy, Tamil Nadu, India',
//         posted: '2 days ago',
//         bgColor: '#fef5df',
//     },
//     {
//         id: 5,
//         company: 'HCL',
//         logo: HCL,
//         role: 'Software Engineer',
//         tags: ['Recommend'],
//         skills: 'Java Full Stack',
//         ctc: '₹ 1,20,000 LPA',
//         experience: '3+ Yrs',
//         noticePeriod: '15 days',
//         location: 'Guindy, Tamil Nadu, India',
//         posted: '2 days ago',
//         bgColor: '#f1ecff',
//     }
// ];

// const CompanysList = () => {
//     return (
//         <section className="recommended-jobs-section mt-5">
//             <Container>
//                 {/* <div className="text-center mb-4">
//                     <h3 className="title mb-3 recommend_title">Recommend Jobs</h3>
//                     <p className="subtitle">You're journey begins here. Let's find the job that brings out your best.</p>
//                 </div> */}
//                 {jobList.map((job) => (
//                     <div
//                         key={job.id}
//                         className="mb-4 rounded-4 p-3 border-1 hover-zoom-card"
//                         style={{ backgroundColor: job.bgColor }}
//                     >
//                          <Row className="align-items-center justify-content-center g-2">
//                             <Col xs={12} md={2} className="text-center ">
//                                 <img
//                                     src={job.logo}
//                                     alt={job.company}
//                                     className="me-5 company-logo"
//                                 />
//                             </Col>
//                             <Col xs={12} md={4} className="d-flex  align-items-center">
//                                 <div>
//                                     <h5 className="job-title">{job.role}</h5>
//                                     <div className="d-flex align-items-center gap-2 mb-2">
//                                         <Badge bg="warning" text="dark" className='badge-inine'>
//                                             <FaStar size={12} className="me-1" />
//                                             Recommend
//                                         </Badge>
//                                     </div>
//                                     <p className="mb-1 fw-semibold">{job.company} | {job.skills}</p>
//                                     <p className="mb-1 text-muted">{job.ctc} • {job.experience} • NP {job.noticePeriod}</p>
//                                 </div>
//                             </Col>
//                             <Col xs={12} md={2} className="d-flex align-items-center">
//                                 <div>
//                                     <p className="mb-0 text-muted"><CiLocationOn /> {job.location}</p>
//                                 </div>
//                             </Col>

//                             <Col xs={12} md={2} className="text-md-end mt-3 mt-md-0">
//                                 <Button variant="primary" className="mb-2 rounded-pill px-4 apply-now-btn" style={{background:'#1e88e5', color:'white'}}>
//                                     Apply Now
//                                 </Button>
//                                 <div className="text-muted small">
//                                     <BsClock className="me-1" />
//                                     Posted {job.posted}
//                                 </div>
//                             </Col>
//                             <Col xs={12} md={2} className="d-flex flex-column my-0 py-0 align-items-md-center align-items-center justify-content-center align-items-start text-md-end text-center">
//                                 <div>
//                                 </div>
//                                 <div className="d-flex flex-wrap gap-2">
//                                     <div className="d-flex gap-2 flex-wrap bookmark_icon">
//                                         <div className="icon_posistion">
//                                             <Badge className="badge-sub-datas">
//                                                 <MdBookmarkBorder size={24} className="icon_color" />
//                                             </Badge>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>
//                 ))}

//                 <div className="text-center mb-4">
//                     <Button className= 'rounded-pill apply-now-btn' style={{background:'#1e88e5', color:'white'}}>View More</Button>
//                 </div>
//             </Container>
//         </section>
//     );
// };
// export default CompanysList;
import React from "react";
import { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";
import WiproLogo from "../../../assets/logo/Wipro.png";

import CtsLogo from "../../../assets/logo/CTSH.png";
import Infosys from "../../../assets/logo/Infosys.png"
import Accenture from "../../../assets/logo/Accenture.png"
import HCL from "../../../assets/logo/HCL.png"
import { FaNewspaper } from "react-icons/fa";

import { MdBookmarkBorder } from "react-icons/md";

// import InfosysLogo from "../../assets/logo/Infosys.png";
import '../../UrgentFeauturedJobs/UrgentFeauturedJobs.css';
import { BsBorderRight } from "react-icons/bs";
import { Button, Row, Col, Badge } from 'react-bootstrap';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase, FaBookmark } from 'react-icons/fa';
import './CompanyList.css';
import { FaStar } from "react-icons/fa";
import { PiCodeBlockLight } from "react-icons/pi";
import { CiAt } from "react-icons/ci";
import { PiCurrencyInrDuotone } from "react-icons/pi";
import { HiDocumentText } from "react-icons/hi";
import { MdOutlineArticle } from "react-icons/md";
import { PiCalendar } from "react-icons/pi";


const CompanysList = () => {
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
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#e6f1fb',
            tags: ['Recommend'],

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
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#ffffff',

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
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#fcf5e4',
            tags: ['Recommend'],

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
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#ffffff',
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
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#efe7f4',
            tags: ['Recommend'],
        }
        ,{
            id: 6,
            logo: CtsLogo,
            company: "Cognizant",
            role: "Software Engineer",
            location: "Guindy",
            experience: "3+ Yrs",
            ctc: "1,20,000 LPA",
            applicants: 2,
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#ffffff',

        },
        {
            id: 7,
            logo: Infosys,
            company: "Infosys",
            role: "Software Engineer",
            location: "chennai",
            experience: "3+ Yrs",
            ctc: "1,20,000 LPA",
            applicants: 2,
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#fcf5e4',
            tags: ['Recommend'],

        },
        {
            id: 8,
            logo: Accenture,
            company: "Infosys",
            role: "Software Engineer",
            location: "chennai",
            experience: "3+ Yrs",
            ctc: "1,20,000 LPA",
            applicants: 2,
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#ffffff',
        },
        {
            id: 9,
            logo: HCL,
            company: "Infosys",
            role: "Software Engineer",
            location: "chennai",
            experience: "3+ Yrs",
            ctc: "1,20,000 LPA",
            applicants: 2,
            Open_Positions: 2,
            postedOn: "12 - 8 - 24",
            bgColor: '#efe7f4',
            tags: ['Recommend'],
        }
    ];

    return (
        <div className="d-flex flex-column gap-3">
            {jobs.map((job) => {
                const isRecommended = job.tags?.includes("Recommend");
                return (
                    <div
                        key={job.id}
                        className="p-3 shadow-sm border-0"
                        style={{ backgroundColor: job.bgColor, borderRadius: '16px' }}
                    >
                        <Row className="align-items-center">
                            {/* Logo */}
                            <Col md={1} className="d-flex justify-content-center align-items-center text-center">
                                <img src={job.logo} alt={job.company} style={{ width: 50, height: 50 }} className="job-logo" />
                            </Col>

                            {/* Job Info */}
                            <Col md={4}>

                                <div className="d-flex align-items-center gap-3 flex-wrap overflow-hidden">
                                    <span className="fw-bold fs-6 ">{job.role}</span>
                                    {isRecommended ? (
                                        <Badge className="custom-badge-tag d-flex fw-medium">
                                            <span className="white-star me-1 fw-bold"><FaStar /></span> Recommend
                                        </Badge>
                                    ) : (
                                        <>
                                            <Badge className="custom-badge1 fw-small fs-6">Featured</Badge>
                                            <Badge className="custom-badge2 fw-small fs-6">Full Time</Badge>
                                            <Badge className="custom-badge3 fw-small fs-6">{job.applicants} Applicants</Badge>
                                            <Badge className="custom-badge4 fw-small fs-6">{job.Open_Positions} Open Positions</Badge>
                                        </>
                                    )}
                                </div>
                                <div className="d-flex align-items-center gap-4 mt-2 flex-wrap fs-6">
                                    <span className="text-inside"><CiAt /> {job.company}</span>
                                    <span className="text-inside"><PiCodeBlockLight className="me-1" />Java Full Stack</span>
                                </div>
                                <div className="d-flex align-items-center gap-4 mt-2 flex-wrap">
                                    <span><PiCurrencyInrDuotone /> {job.ctc}</span>
                                    <span><HiDocumentText className="me-1" style={{ transform: 'rotate(20deg)' }} />{job.experience}</span>
                                    <span><MdOutlineArticle className="me-1" />NP {job.postedOn.includes("days") ? "15 days" : "30 days"}</span>
                                </div>
                            </Col>
                            <Col md={3}>
                                <div className="align-item-center justify-content-center">
                                    <span className="text-inside"><IoLocationOutline size={16} className="me-1" />{job.location}, Tamil Nadu, India</span>
                                </div>
                            </Col>
                            {/* Apply Button */}
                            <Col md={3} className="text-end">
                                <div className="d-flex justify-content-center align-items-center text-center flex-wrap">
                                    {isRecommended ? (
                                        <Button className="mb-2 button-blue text-white" >Apply Now</Button>
                                    ) : (
                                        <>
                                            <Button className="mb-2 button-violet text-white">Apply Now</Button>
                                        </>
                                    )}
                                    {/* <Button variant="primary" className="mb-2">Apply Now</Button> */}
                                    {isRecommended ? (
                                       <div className="text-muted text-inside">
                                       
                                       <p><PiCalendar className="me-1" /> Posted 2 days ago</p>
                                   </div>
                                    ) : (
                                        <div className="text-muted text-inside">                                            
                                            {job.postedOn.includes("days") ? `Posted ${job.postedOn}` : `Posted on ${job.postedOn}`}
                                        </div>
                                    )}

                                </div>
                            </Col>

                            {/* Bookmark */}
                            <Col md={1} className="text-end">
                                <div className="d-flex flex-wrap gap-2">
                                    <div className="d-flex gap-2 flex-wrap bookmark_icon">
                                        <div className="icon_posistion">
                                            <Badge className="badge-sub-datas">
                                                <MdBookmarkBorder size={24} className="icon_color" />
                                            </Badge>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                );
            })}
        </div>
    );
};


// return (
//     <Container className="urgent-jobs-section">

//         <Row className="gy-3 gx-3">
//             {jobs.map((job) => (
//                 <Col xs={12} key={job.id}>
//                     <div className="shadow-sm rounded-4 px-2 py-3 border-0" style={{ backgroundColor: job.bgColor }}>
//                         <Row className="align-items-center gx-3 gy-3">
//                             {/* Logo */}
//                             <Col xs={12} md={1} className="text-center ">
//                                 <img src={job.logo} alt={job.company} className="job-logo" />
//                             </Col>

//                             {/* Info */}
//                             <Col xs={12} md={2}>
//                                 <h6 className="mb-1 fw-medium company_name">{job.company}</h6>
//                                 <div className="text-muted fw-bold role">{job.role}</div>
//                             </Col>

//                             {/* Tags */}
//                             <Col xs={12} md={5} className="align-items-md-center align-items-center justify-content-center align-items-center ">
//                                 <div className="d-flex flex-wrap gap-2">
//                                     <div className="d-flex gap-2 flex-wrap">
//                                         <Badge className="custom-badge1">Featured</Badge>
//                                         <Badge className="custom-badge2">Full Time</Badge>
//                                         <Badge className="custom-badge3">{job.applicants} Applicants</Badge>
//                                         <Badge className="custom-badge4">{job.Open_Positions} Open Positions</Badge>
//                                     </div>
//                                     <div className="d-flex gap-2 flex-wrap">
//                                         <Badge className="badge-sub-datas">
//                                             <IoLocationOutline size={16} className="me-1" />
//                                             {job.location}
//                                         </Badge>
//                                         <Badge className="badge-sub-datas">
//                                             <HiDocumentText size={16} className="me-1" />
//                                             {job.experience}
//                                         </Badge>
//                                         <Badge className="badge-sub-datas">
//                                             <PiCurrencyInrDuotone size={16} className="me-1" />
//                                             {job.ctc}
//                                         </Badge>
//                                         <Badge className="badge-sub-datas">
//                                             <FaNewspaper size={16} className="me-1" />
//                                             NP 30 days
//                                         </Badge>

//                                     </div>
//                                 </div>
//                             </Col>

//                             {/* CTA */}
//                             <Col xs={12} md={3} className="d-flex flex-column my-0 py-0 align-items-md-center align-items-center justify-content-center align-items-center text-md-end text-center">
//                                 <Button className="px-4 py-2 rounded-pill apply-btn" style={{ background: "#7b1fa2", border: "none", color: 'white' }}>
//                                     Apply Now
//                                 </Button>
//                                 <div className="text-muted small mt-2">
//                                     Posted on {job.postedOn}
//                                 </div>
//                             </Col>
//                             <Col xs={12} md={1} className="d-flex flex-column my-0 py-0 align-items-md-center align-items-center justify-content-center align-items-start text-md-end text-center">
//                                 <div>
//                                 </div>
//                                 <div className="d-flex flex-wrap gap-2">
//                                     <div className="d-flex gap-2 flex-wrap bookmark_icon">
//                                         <div className="icon_posistion">
//                                             <Badge className="badge-sub-datas">
//                                                 <MdBookmarkBorder size={24} className="icon_color" />
//                                             </Badge>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </Col>
//                         </Row>
//                     </div>
//                 </Col>
//             ))}
//         </Row>


//     </Container>
// );
// };

export default CompanysList;
