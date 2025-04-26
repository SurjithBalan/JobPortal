
import React from "react";
import { useState } from "react";

import { IoLocationOutline } from "react-icons/io5";
import WiproLogo from "../../../assets/logo/Wipro.png";

import CtsLogo from "../../../assets/logo/CTSH.png";
import Infosys from "../../../assets/logo/Infosys.png"
import Accenture from "../../../assets/logo/Accenture.png"
import HCL from "../../../assets/logo/HCL.png"
import { MdBookmarkBorder } from "react-icons/md";
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
import CustomPagination from './HRcompanyPagenation'
import FilterSection from './FilterSection'


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
        , {
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
            <FilterSection/>
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
                            <Col md={6}>

                                <div className="d-flex align-items-center gap-2 overflow-auto flex-nowrap overflowHider" >
                                    {isRecommended ? (
                                        <>
                                            <span className="fw-bold fs-6 ">{job.role}</span>
                                            <Badge className="custom-badge-tag d-flex fw-medium">
                                                <span className="white-star me-1 fw-bold"><FaStar /></span> Recommend
                                            </Badge>
                                        </>

                                    ) : (
                                        <><span className="text-inside"> {job.company}</span>
                                            <Badge className="custom-badge1 fw-small fs-6">Featured</Badge>
                                            <Badge className="custom-badge2 fw-small fs-6">Full Time</Badge>
                                            <Badge className="custom-badge3 fw-small fs-6">{job.applicants} Applicants</Badge>
                                            <Badge className="custom-badge4 fw-small fs-6">{job.Open_Positions} Open Positions</Badge>
                                        </>
                                    )}
                                </div>

                                <div>
                                    {isRecommended ? (
                                        <>
                                            <div className="d-flex align-items-center gap-4 mt-2 flex-wrap fs-6">
                                                <span className="text-inside"><CiAt /> {job.company}</span>
                                                <span className="text-inside"><PiCodeBlockLight className="me-1" />Java Full Stack</span>
                                            </div>
                                            <div className="d-flex align-items-center gap-4 mt-2 flex-wrap">
                                                <span><PiCurrencyInrDuotone /> {job.ctc}</span>
                                                <span><HiDocumentText className="me-1" style={{ transform: 'rotate(20deg)' }} />{job.experience}</span>
                                                <span><MdOutlineArticle className="me-1" />NP {job.postedOn.includes("days") ? "15 days" : "30 days"}</span>
                                            </div>
                                        </>

                                    ) : <>
                                        <div className="d-flex align-items-center gap-4 mt-2 flex-wrap">
                                            <span className="fw-bold fs-6 ">{job.role}</span>
                                            <span className="text-inside"><IoLocationOutline size={16} className="me-1" />{job.location}</span>
                                            <span><HiDocumentText className="me-1" style={{ transform: 'rotate(20deg)' }} />{job.experience}</span>
                                            <span><PiCurrencyInrDuotone /> {job.ctc}</span>
                                            <span><MdOutlineArticle className="me-1" />NP {job.postedOn.includes("days") ? "15 days" : "30 days"}</span>
                                        </div>
                                    </>}
                                </div>

                            </Col>
                            <Col md={2}>
                                <div className="align-item-center justify-content-center">
                                    <span className="text-inside"><IoLocationOutline size={16} className="me-1" />{job.location}, Tamil Nadu, India</span>
                                </div>
                            </Col>
                            {/* Apply Button */}
                            <Col md={2} className="text-end">
                                <div className="d-flex justify-content-center align-items-center text-center flex-wrap">
                                    {isRecommended ? (
                                        <Button className="mb-2 button-blue text-white px-4 py-2 fs-6" >Apply Now</Button>
                                    ) : (
                                        <>
                                            <Button className="mb-2 button-violet text-white px-4 py-2 fs-6">Apply Now</Button>
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
                                    <div className="d-flex gap-2 flex-wrap bookmark_icon-clist">
                                        <div className="icon_posistion-clist">
                                            <span>
                                                <MdBookmarkBorder size={22} className="icon_color-clist" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>                       
                    </div>
                );
            })}
          <CustomPagination/>
        </div>
    );
};
export default CompanysList;
